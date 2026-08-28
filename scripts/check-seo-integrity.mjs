import fs from "node:fs";
import path from "node:path";

const rootDirectory = process.cwd();
const distDirectory = path.join(rootDirectory, "dist");
const sitemapPath = path.join(distDirectory, "sitemap.xml");
const baseURL = new URL("https://www.virellaart.com/");

const googleProductTaxonomyURL =
  "https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt";

const merchantReturnPolicyId =
  "https://www.virellaart.com/policies/return-refund-policy#return-policy";

const merchantReturnPolicyURL =
  "https://www.virellaart.com/policies/return-refund-policy";

const allowedGoogleProductCategoryCodes =
  new Set([
    "457",
    "6346",
    "6347",
    "6348",
  ]);

const allowedHosts = new Set([
  "www.virellaart.com",
  "virellaart.com",
]);

if (!fs.existsSync(distDirectory)) {
  console.error("SEO HATA: dist klasoru bulunamadi. Once site build edilmelidir.");
  process.exit(1);
}

if (!fs.existsSync(sitemapPath)) {
  console.error("SEO HATA: dist/sitemap.xml bulunamadi. Sitemap once uretilmelidir.");
  process.exit(1);
}

function walkDirectory(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkDirectory(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function normalizeSlashes(value) {
  return value.replaceAll("\\", "/");
}

function getPublicPath(htmlFile) {
  const relativePath = normalizeSlashes(path.relative(distDirectory, htmlFile));

  if (relativePath === "index.html") {
    return "/";
  }

  if (relativePath.endsWith("/index.html")) {
    return `/${relativePath.slice(0, -"index.html".length)}`;
  }

  return `/${relativePath}`;
}

function isFile(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

function resolveHTMLTarget(pathname) {
  let decodedPathname = pathname;

  try {
    decodedPathname = decodeURI(pathname);
  } catch {
    decodedPathname = pathname;
  }

  decodedPathname = decodedPathname.replace(/\/{2,}/g, "/");
  const relativePath = decodedPathname.replace(/^\/+/, "");
  const candidates = [];

  if (decodedPathname === "/") {
    candidates.push(path.join(distDirectory, "index.html"));
  } else if (decodedPathname.endsWith("/")) {
    candidates.push(path.join(distDirectory, relativePath, "index.html"));
  } else if (path.extname(relativePath)) {
    candidates.push(path.join(distDirectory, relativePath));
  } else {
    candidates.push(
      path.join(distDirectory, relativePath, "index.html"),
      path.join(distDirectory, `${relativePath}.html`),
    );
  }

  return candidates.find(isFile);
}

function extractStartTags(html, tagName) {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>`, "gi");
  return html.match(pattern) ?? [];
}

function getAttribute(tag, attributeName) {
  const escaped = attributeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const quoted = new RegExp(`\\b${escaped}\\s*=\\s*(["'])(.*?)\\1`, "i");
  const quotedMatch = tag.match(quoted);

  if (quotedMatch) {
    return quotedMatch[2].trim();
  }

  const unquoted = new RegExp(`\\b${escaped}\\s*=\\s*([^\\s>]+)`, "i");
  const unquotedMatch = tag.match(unquoted);
  return unquotedMatch?.[1]?.trim() ?? "";
}

function extractElementText(html, tagName) {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "gi");
  return Array.from(html.matchAll(pattern), (match) => normalizeText(match[1]));
}

function normalizeText(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMeta(html, name) {
  return extractStartTags(html, "meta")
    .filter((tag) => getAttribute(tag, "name").toLowerCase() === name.toLowerCase())
    .map((tag) => getAttribute(tag, "content"));
}

function extractCanonicalLinks(html) {
  return extractStartTags(html, "link")
    .filter((tag) => {
      const rel = getAttribute(tag, "rel")
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
      return rel.includes("canonical");
    })
    .map((tag) => getAttribute(tag, "href"));
}

function extractHreflangLinks(html) {
  return extractStartTags(html, "link")
    .filter((tag) => {
      const rel = getAttribute(tag, "rel")
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
      return rel.includes("alternate") && Boolean(getAttribute(tag, "hreflang"));
    })
    .map((tag) => ({
      hreflang: getAttribute(tag, "hreflang").toLowerCase(),
      href: getAttribute(tag, "href"),
    }));
}

function extractJsonLd(html) {
  const pattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  const blocks = [];

  for (const match of html.matchAll(pattern)) {
    const openingAttributes = match[1] ?? "";
    const type = getAttribute(`<script ${openingAttributes}>`, "type").toLowerCase();

    if (type === "application/ld+json") {
      blocks.push(match[2].trim());
    }
  }

  return blocks;
}

function collectJsonLdNodes(
  value,
  output = [],
) {
  if (Array.isArray(value)) {
    for (const item of value) {
      collectJsonLdNodes(item, output);
    }

    return output;
  }

  if (
    value === null ||
    typeof value !== "object"
  ) {
    return output;
  }

  output.push(value);

  for (const child of Object.values(value)) {
    collectJsonLdNodes(child, output);
  }

  return output;
}

function hasJsonLdType(node, expectedType) {
  const type = node?.["@type"];

  return Array.isArray(type)
    ? type.includes(expectedType)
    : type === expectedType;
}

function getBrandName(node) {
  const brand = node?.brand;

  if (typeof brand === "string") {
    return brand;
  }

  if (
    brand &&
    typeof brand === "object" &&
    !Array.isArray(brand)
  ) {
    return String(brand.name ?? "");
  }

  return "";
}

function hasValidGoogleProductCategory(node) {
  const categories =
    Array.isArray(node?.category)
      ? node.category
      : [node?.category];

  return categories.some(
    (category) =>
      category &&
      typeof category === "object" &&
      !Array.isArray(category) &&
      category["@type"] ===
        "CategoryCode" &&
      category.inCodeSet ===
        googleProductTaxonomyURL &&
      allowedGoogleProductCategoryCodes.has(
        String(category.codeValue ?? ""),
      ),
  );
}

function getProductOffers(node) {
  const offers =
    Array.isArray(node?.offers)
      ? node.offers
      : [node?.offers];

  return offers.filter(
    (offer) =>
      offer &&
      typeof offer === "object" &&
      !Array.isArray(offer),
  );
}

function hasValidMerchantAvailability(node) {
  const offers =
    getProductOffers(node);

  return (
    offers.length > 0 &&
    offers.every(
      (offer) =>
        offer.availability ===
        "https://schema.org/PreOrder",
    )
  );
}

function hasValidMerchantReturnReference(node) {
  const offers =
    getProductOffers(node);

  return (
    offers.length > 0 &&
    offers.every(
      (offer) => {
        const policy =
          offer.hasMerchantReturnPolicy;

        return (
          policy &&
          typeof policy === "object" &&
          !Array.isArray(policy) &&
          policy["@id"] ===
            merchantReturnPolicyId
        );
      },
    )
  );
}

function normalizeURL(value, sourceURL) {
  try {
    return new URL(value, sourceURL);
  } catch {
    return null;
  }
}

function urlKey(value) {
  try {
    const url = new URL(value);
    url.hash = "";
    return url.href;
  } catch {
    return value;
  }
}

function parseSitemap() {
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const urls = new Set();

  for (const match of xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)) {
    const value = match[1]
      .replace(/&amp;/gi, "&")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .trim();

    if (value) {
      urls.add(urlKey(value));
    }
  }

  return urls;
}

function inspectSitemapExtensions() {
  const xml = fs.readFileSync(sitemapPath, "utf8");

  return {
    bytes: Buffer.byteLength(xml, "utf8"),
    imageCount:
      xml.match(/<image:image\b/gi)?.length ?? 0,
    hreflangCount:
      xml.match(/<xhtml:link\b[^>]*\bhreflang=/gi)?.length ?? 0,
    hasImageNamespace:
      /xmlns:image=["']http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1["']/i.test(
        xml,
      ),
    hasXhtmlNamespace:
      /xmlns:xhtml=["']http:\/\/www\.w3\.org\/1999\/xhtml["']/i.test(
        xml,
      ),
  };
}

function addDuplicate(map, value, publicPath) {
  if (!value) return;
  const items = map.get(value) ?? [];
  items.push(publicPath);
  map.set(value, items);
}

const htmlFiles = walkDirectory(distDirectory)
  .filter((filePath) => filePath.endsWith(".html"));
const sitemapURLs = parseSitemap();
const sitemapExtensions = inspectSitemapExtensions();
const errors = [];
const warnings = [];
const canonicalOwners = new Map();
const titleOwners = new Map();
const descriptionOwners = new Map();

const salesPositioningChecks = [
  {
    language: "en",
    homePath: "/",
    productPrefix: "/collections/",
    protectedPaths: ["/about/", "/contact/"],
    protectedPrefixes: ["/markets/"],
    bannedPhrases: [
      "Direct Manufacturer",
      "Luxury Furniture Manufacturer in Istanbul",
      "Manufactured by VIRELLAART",
      "manufacturer-direct",
      "luxury furniture manufacturer serving",
    ],
  },
  {
    language: "tr",
    homePath: "/tr/",
    productPrefix: "/tr/collections/",
    protectedPaths: ["/tr/about/", "/tr/contact/"],
    protectedPrefixes: ["/tr/markets/", "/tr/policies/shipping-policy/"],
    bannedPhrases: ["Doğrudan Üretici", "lüks mobilya üreticisidir"],
  },
  {
    language: "de",
    homePath: "/de/",
    productPrefix: "/de/collections/",
    protectedPaths: ["/de/about/", "/de/contact/"],
    protectedPrefixes: ["/de/markets/"],
    bannedPhrases: ["Direkter Hersteller", "Luxusmöbelhersteller"],
  },
  {
    language: "fr",
    homePath: "/fr/",
    productPrefix: "/fr/collections/",
    protectedPaths: ["/fr/about/", "/fr/contact/"],
    protectedPrefixes: ["/fr/markets/"],
    bannedPhrases: ["Fabricant direct", "fabricant de mobilier de luxe"],
  },
];

const unverifiedLocalizedClaims = [
  "Produttore diretto",
  "Прямой производитель",
  "المصنّع مباشرة",
  "Директен производител",
  "Producător direct",
  "Άμεσος κατασκευαστής",
  "Fabricante directo",
  "Direktan proizvođač",
  "Тікелей өндіруші",
  "Bevosita ishlab chiqaruvchi",
  "Fabricante direto",
  "Bezpośredni producent",
  "Produttore di Mobili di Lusso",
  "Производитель Элитной Мебели",
  "مُصنّع الأثاث الفاخر",
  "Производител на Луксозни Мебели",
  "Producător de Mobilier de Lux",
  "Κατασκευαστής Πολυτελών Επίπλων",
  "Fabricante de Muebles de Lujo",
  "Произвођач Луксузног Намештаја",
  "Сәнді Жиһаз Өндірушісі",
  "Hashamatli Mebel Ishlab Chiqaruvchi",
  "Fabricante de Móveis de Luxo",
  "Producent Luksusowych Mebli",
];

let indexableCount = 0;
let noindexCount = 0;
let jsonLdBlockCount = 0;
let hreflangLinkCount = 0;
let homepageMerchantReturnPolicyValid = false;

if (!sitemapExtensions.hasImageNamespace) {
  errors.push("Sitemap image namespace eksik.");
}

if (sitemapExtensions.imageCount === 0) {
  errors.push("Sitemap image:image kaydi icermiyor.");
}

if (!sitemapExtensions.hasXhtmlNamespace) {
  errors.push("Sitemap XHTML namespace eksik.");
}

if (sitemapExtensions.hreflangCount === 0) {
  errors.push("Sitemap hreflang kaydi icermiyor.");
}

if (sitemapExtensions.bytes > 50 * 1024 * 1024) {
  errors.push("Sitemap 50 MB sinirini asiyor.");
}

if (sitemapURLs.size > 50000) {
  errors.push("Sitemap 50.000 URL sinirini asiyor.");
}

for (const htmlFile of htmlFiles) {
  const publicPath = getPublicPath(htmlFile);
  const currentURL = new URL(publicPath, baseURL);
  const currentURLKey = urlKey(currentURL.href);
  const html = fs.readFileSync(htmlFile, "utf8");
  const robotsValues = extractMeta(html, "robots");
  const robots = robotsValues.join(",").toLowerCase();
  const isNoindex = robots.includes("noindex");

  const protectsBrandPositioning =
    publicPath.endsWith("/about/") ||
    publicPath.endsWith("/contact/") ||
    /\"@type\":\"Product\"/.test(html);

  if (protectsBrandPositioning) {
    for (const phrase of unverifiedLocalizedClaims) {
      if (html.includes(phrase)) {
        errors.push(
          `${publicPath}: doğrulanmamış yerel üretici iddiası bulundu (${phrase}).`,
        );
      }
    }
  }

  const salesPositioningCheck =
    salesPositioningChecks.find(
      (check) =>
        publicPath === check.homePath ||
        check.protectedPaths.includes(publicPath) ||
        check.protectedPrefixes.some((prefix) =>
          publicPath.startsWith(prefix)
        ) ||
        (
          publicPath.startsWith(check.productPrefix) &&
          /\"@type\":\"Product\"/.test(html)
        ),
    );

  if (salesPositioningCheck) {
    for (const phrase of salesPositioningCheck.bannedPhrases) {
      if (html.includes(phrase)) {
        errors.push(
          `${publicPath}: doğrulanmamış satış konumlandırması bulundu (${phrase}).`,
        );
      }
    }
  }

  if (isNoindex) {
    noindexCount += 1;

    if (sitemapURLs.has(currentURLKey)) {
      errors.push(`${publicPath}: noindex sayfa sitemap icinde.`);
    }

    continue;
  }

  indexableCount += 1;

  if (!robots.includes("max-image-preview:large")) {
    errors.push(`${publicPath}: indexable sayfada max-image-preview:large eksik.`);
  }

  if (
    publicPath === "/" &&
    /navigator\.languages/.test(html) &&
    /window\.location\.replace/.test(html)
  ) {
    errors.push("/: otomatik tarayici dili yonlendirmesi bulundu.");
  }

  const titles = extractElementText(html, "title").filter(Boolean);
  const descriptions = extractMeta(html, "description").filter(Boolean);
  const canonicals = extractCanonicalLinks(html).filter(Boolean);
  const h1s = extractElementText(html, "h1").filter(Boolean);

  if (titles.length !== 1) {
    errors.push(`${publicPath}: tam 1 title bekleniyor, bulunan ${titles.length}.`);
  }

  if (descriptions.length !== 1) {
    errors.push(`${publicPath}: tam 1 meta description bekleniyor, bulunan ${descriptions.length}.`);
  }

  if (canonicals.length !== 1) {
    errors.push(`${publicPath}: tam 1 canonical bekleniyor, bulunan ${canonicals.length}.`);
  }

  if (h1s.length !== 1) {
    errors.push(`${publicPath}: tam 1 H1 bekleniyor, bulunan ${h1s.length}.`);
  }

  const title = titles[0] ?? "";
  const description = descriptions[0] ?? "";
  addDuplicate(titleOwners, title, publicPath);
  addDuplicate(descriptionOwners, description, publicPath);

  if (canonicals.length === 1) {
    const canonicalURL = normalizeURL(canonicals[0], currentURL);

    if (!canonicalURL) {
      errors.push(`${publicPath}: canonical URL gecersiz: ${canonicals[0]}`);
    } else {
      const canonicalKey = urlKey(canonicalURL.href);
      addDuplicate(canonicalOwners, canonicalKey, publicPath);

      if (
        canonicalURL.protocol !== "https:" ||
        canonicalURL.hostname !== "www.virellaart.com"
      ) {
        errors.push(`${publicPath}: canonical resmi HTTPS www hostunda degil: ${canonicalURL.href}`);
      }

      if (canonicalKey !== currentURLKey) {
        errors.push(`${publicPath}: self-canonical uyusmuyor: ${canonicalURL.href}`);
      }

      if (!sitemapURLs.has(canonicalKey)) {
        errors.push(`${publicPath}: indexable canonical sitemap icinde degil: ${canonicalURL.href}`);
      }
    }
  }

  const hreflangLinks = extractHreflangLinks(html);
  hreflangLinkCount += hreflangLinks.length;

  const xDefaultLinks = hreflangLinks.filter((item) => item.hreflang === "x-default");
  if (xDefaultLinks.length !== 1) {
    errors.push(`${publicPath}: tam 1 hreflang x-default bekleniyor, bulunan ${xDefaultLinks.length}.`);
  }

  for (const alternate of hreflangLinks) {
    const alternateURL = normalizeURL(alternate.href, currentURL);

    if (!alternateURL) {
      errors.push(`${publicPath}: gecersiz hreflang URL (${alternate.hreflang}): ${alternate.href}`);
      continue;
    }

    if (!allowedHosts.has(alternateURL.hostname)) {
      continue;
    }

    const targetFile = resolveHTMLTarget(alternateURL.pathname);
    if (!targetFile) {
      errors.push(`${publicPath}: hreflang hedefi build icinde yok (${alternate.hreflang}): ${alternateURL.pathname}`);
    }
  }

  const jsonLdBlocks = extractJsonLd(html);
  jsonLdBlockCount += jsonLdBlocks.length;

  for (const [index, block] of jsonLdBlocks.entries()) {
    if (!block) {
      errors.push(`${publicPath}: bos JSON-LD blogu #${index + 1}.`);
      continue;
    }

    try {
      const parsed =
        JSON.parse(block);

      if (publicPath === "/") {
        const nodes =
          collectJsonLdNodes(parsed);

        for (const node of nodes) {
          if (
            !hasJsonLdType(
              node,
              "Organization",
            ) ||
            node?.["@id"] !==
              "https://www.virellaart.com/#organization"
          ) {
            continue;
          }

          const policy =
            node.hasMerchantReturnPolicy;

          if (
            policy &&
            typeof policy === "object" &&
            !Array.isArray(policy) &&
            policy["@type"] ===
              "MerchantReturnPolicy" &&
            policy["@id"] ===
              merchantReturnPolicyId &&
            policy.merchantReturnLink ===
              merchantReturnPolicyURL
          ) {
            homepageMerchantReturnPolicyValid =
              true;
          }
        }
      }

      const productNodes =
        collectJsonLdNodes(parsed).filter(
          (node) =>
            hasJsonLdType(
              node,
              "Product",
            ),
        );

      for (const productNode of productNodes) {
        if (
          getBrandName(productNode) !==
          "VIRELLAART"
        ) {
          continue;
        }

        if (
          !hasValidGoogleProductCategory(
            productNode,
          )
        ) {
          errors.push(
            `${publicPath}: VIRELLAART Product.category gecersiz veya Google CategoryCode eksik.`,
          );
        }

        if (
          !hasValidMerchantAvailability(
            productNode,
          )
        ) {
          errors.push(
            `${publicPath}: VIRELLAART Offer.availability PreOrder degil.`,
          );
        }

        if (
          !hasValidMerchantReturnReference(
            productNode,
          )
        ) {
          errors.push(
            `${publicPath}: VIRELLAART Offer MerchantReturnPolicy referansi eksik.`,
          );
        }
      }
    } catch (error) {
      errors.push(`${publicPath}: gecersiz JSON-LD #${index + 1}: ${error.message}`);
    }
  }
}

if (!homepageMerchantReturnPolicyValid) {
  errors.push(
    "/: Organization MerchantReturnPolicy eksik veya gecersiz.",
  );
}

for (const [canonical, owners] of canonicalOwners.entries()) {
  if (owners.length > 1) {
    errors.push(`Duplicate canonical ${canonical}: ${owners.join(", ")}`);
  }
}

for (const sitemapURL of sitemapURLs) {
  let url;

  try {
    url = new URL(sitemapURL);
  } catch {
    errors.push(`Sitemap icinde gecersiz URL: ${sitemapURL}`);
    continue;
  }

  if (!allowedHosts.has(url.hostname)) {
    errors.push(`Sitemap harici host iceriyor: ${sitemapURL}`);
    continue;
  }

  if (!resolveHTMLTarget(url.pathname)) {
    errors.push(`Sitemap URL build icinde HTML hedefe sahip degil: ${sitemapURL}`);
  }
}

for (const [title, owners] of titleOwners.entries()) {
  if (owners.length > 1) {
    warnings.push(`Duplicate title (${owners.length}): "${title}" -> ${owners.slice(0, 6).join(", ")}`);
  }
}

for (const [description, owners] of descriptionOwners.entries()) {
  if (owners.length > 1) {
    warnings.push(`Duplicate description (${owners.length}): "${description.slice(0, 120)}" -> ${owners.slice(0, 6).join(", ")}`);
  }
}

console.log("\nVIRELLAART SEO INTEGRITY");
console.log(`HTML pages: ${htmlFiles.length}`);
console.log(`Indexable pages: ${indexableCount}`);
console.log(`Noindex pages: ${noindexCount}`);
console.log(`Sitemap URLs: ${sitemapURLs.size}`);
console.log(`Sitemap images: ${sitemapExtensions.imageCount}`);
console.log(`Sitemap hreflang entries: ${sitemapExtensions.hreflangCount}`);
console.log(`Hreflang links checked: ${hreflangLinkCount}`);
console.log(`JSON-LD blocks parsed: ${jsonLdBlockCount}`);
console.log(`Duplicate title/description warnings: ${warnings.length}`);

if (warnings.length > 0) {
  console.log("\nSEO UYARILARI (build'i durdurmaz):");
  warnings.slice(0, 40).forEach((warning) => console.log(`- ${warning}`));

  if (warnings.length > 40) {
    console.log(`- ... ${warnings.length - 40} ek uyari`);
  }
}

if (errors.length > 0) {
  console.error("\nSEO INTEGRITY HATALARI:");
  errors.slice(0, 100).forEach((error) => console.error(`- ${error}`));

  if (errors.length > 100) {
    console.error(`- ... ${errors.length - 100} ek hata`);
  }

  console.error(`\nSEO integrity basarisiz: ${errors.length} kritik hata.`);
  process.exit(1);
}

console.log("\nSEO INTEGRITY OK: kritik hata bulunmadi.");
