#!/usr/bin/env node

const SITE = "https://www.virellaart.com";
const PLATFORMS = ["instagram", "facebook", "pinterest"];

function normalizePath(input) {
  const raw = String(input ?? "").trim();

  if (!raw) {
    throw new Error("Landing path gerekli. Ornek: /dining-rooms/valencia/");
  }

  let pathname;

  if (/^https?:\/\//i.test(raw)) {
    const url = new URL(raw);

    if (url.hostname !== "www.virellaart.com" && url.hostname !== "virellaart.com") {
      throw new Error("Sadece virellaart.com landing URL'leri desteklenir.");
    }

    pathname = url.pathname;
  } else {
    pathname = raw.split(/[?#]/)[0];
  }

  if (!pathname.startsWith("/")) {
    pathname = `/${pathname}`;
  }

  pathname = pathname.replace(/\/{2,}/g, "/");

  if (!pathname.endsWith("/")) {
    pathname += "/";
  }

  return pathname;
}

function contentKey(pathname) {
  return pathname
    .split("/")
    .filter(Boolean)
    .slice(-2)
    .join("_") || "home";
}

function buildLandingUrl(pathname, platform) {
  const url = new URL(pathname, SITE);

  url.searchParams.set("utm_source", platform);
  url.searchParams.set("utm_medium", "organic_social");
  url.searchParams.set("utm_campaign", "virellaart_sales");
  url.searchParams.set("utm_content", contentKey(pathname));

  return url.href;
}

const pathname = normalizePath(process.argv[2]);

console.log(`Canonical: ${new URL(pathname, SITE).href}`);

for (const platform of PLATFORMS) {
  console.log(`${platform}: ${buildLandingUrl(pathname, platform)}`);
}
