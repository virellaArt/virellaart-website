import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIST_DIR = path.resolve("dist");
const SITE_ORIGIN = "https://www.virellaart.com";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(absolutePath)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(absolutePath);
    }
  }

  return files;
}

function htmlTags(html, tagName) {
  return html.match(new RegExp(`<${tagName}\\b[^>]*>`, "gi")) ?? [];
}

function attribute(tag, name) {
  const match = tag.match(
    new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, "i"),
  );

  return match?.[1]?.trim() ?? "";
}

function isNoindex(html) {
  return htmlTags(html, "meta").some((tag) => {
    const name = attribute(tag, "name").toLowerCase();
    const content = attribute(tag, "content").toLowerCase();

    return name === "robots" && content.split(/[\s,]+/).includes("noindex");
  });
}

function canonicalFromHtml(html) {
  for (const tag of htmlTags(html, "link")) {
    const rel = attribute(tag, "rel")
      .toLowerCase()
      .split(/\s+/);

    if (!rel.includes("canonical")) continue;

    const href = attribute(tag, "href");
    if (href) return href;
  }

  return "";
}

function fallbackUrl(file) {
  const relative = path.relative(DIST_DIR, file).split(path.sep).join("/");

  if (relative === "index.html") {
    return `${SITE_ORIGIN}/`;
  }

  if (relative.endsWith("/index.html")) {
    return `${SITE_ORIGIN}/${relative.slice(0, -"index.html".length)}`;
  }

  return `${SITE_ORIGIN}/${relative.replace(/\.html$/, "/")}`;
}

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const htmlFiles = await walk(DIST_DIR);
const urls = new Set();
let skippedNoindex = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");

  if (isNoindex(html)) {
    skippedNoindex += 1;
    continue;
  }

  const candidate = canonicalFromHtml(html) || fallbackUrl(file);

  let url;
  try {
    url = new URL(candidate, SITE_ORIGIN);
  } catch {
    continue;
  }

  if (url.origin !== SITE_ORIGIN) continue;

  url.hash = "";
  urls.add(url.href);
}

const sortedUrls = [...urls].sort((a, b) => a.localeCompare(b, "en"));

if (sortedUrls.length === 0) {
  throw new Error("Sitemap generation failed: no indexable URLs found.");
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sortedUrls.map(
    (url) => `  <url><loc>${xmlEscape(url)}</loc></url>`,
  ),
  "</urlset>",
  "",
].join("\n");

const robots = [
  "User-agent: *",
  "Allow: /",
  "",
  `Sitemap: ${SITE_ORIGIN}/sitemap.xml`,
  "",
].join("\n");

await writeFile(path.join(DIST_DIR, "sitemap.xml"), sitemap, "utf8");
await writeFile(path.join(DIST_DIR, "robots.txt"), robots, "utf8");

console.log(
  `Google crawl files generated: ${sortedUrls.length} indexable URLs, ${skippedNoindex} noindex pages excluded.`,
);
