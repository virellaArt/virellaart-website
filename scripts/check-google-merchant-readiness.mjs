#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
const dist = path.join(root, "dist");
const outputDirectory = path.join(root, ".seo-reports");
const outputFile = path.join(outputDirectory, "google-merchant-readiness.json");
const strict = process.argv.includes("--strict");

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else if (entry.isFile() && entry.name.endsWith(".html")) files.push(fullPath);
  }
  return files;
}

function flatten(value, output = []) {
  if (Array.isArray(value)) {
    value.forEach((item) => flatten(item, output));
    return output;
  }
  if (!value || typeof value !== "object") return output;
  output.push(value);
  Object.values(value).forEach((item) => flatten(item, output));
  return output;
}

function jsonLdNodes(html) {
  const nodes = [];
  const pattern = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(pattern)) {
    try {
      flatten(JSON.parse(match[1].trim()), nodes);
    } catch {
      // The SEO integrity test reports malformed JSON-LD separately.
    }
  }
  return nodes;
}

function isEnglishProductUrl(value) {
  try {
    const url = new URL(value);
    if (url.origin !== "https://www.virellaart.com") return false;
    return /^\/(living-rooms|dining-rooms|bedrooms|tv-units|collections\/(?:modern|luxury-classic)\/(?:sofa-sets|dining-rooms|bedrooms|tv-units))\/[^/]+\/$/.test(url.pathname);
  } catch {
    return false;
  }
}

function hasPurchaseControl(html) {
  return /<(?:a|button|form)\b[^>]*(?:add-to-cart|add_to_cart|checkout|buy-now|buy_now)[^>]*>/i.test(html) ||
    /<(?:button|a)\b[^>]*>\s*(?:buy now|add to cart|checkout)\s*</i.test(html);
}

function inspectProduct(node, html) {
  const offers = (Array.isArray(node.offers) ? node.offers : [node.offers])
    .filter((offer) => offer && typeof offer === "object");
  const datedAvailabilityRequired = offers.some((offer) =>
    /\/(?:PreOrder|BackOrder)$/.test(String(offer.availability ?? "")),
  );
  const hasAvailabilityDate = offers.length > 0 && offers.every((offer) =>
    !/\/(?:PreOrder|BackOrder)$/.test(String(offer.availability ?? "")) ||
    Boolean(offer.availabilityStarts || offer.availabilityDate),
  );
  const hasPrice = offers.length > 0 && offers.every((offer) =>
    Number(String(offer.price ?? "").replace(/,/g, "")) > 0 &&
    /^[A-Z]{3}$/.test(String(offer.priceCurrency ?? "")),
  );

  return {
    url: node.url,
    hasPrice,
    hasPurchaseControl: hasPurchaseControl(html),
    datedAvailabilityRequired,
    hasAvailabilityDate,
  };
}

function evaluate(products) {
  const blockers = [];
  if (products.length === 0) blockers.push("NO_PRODUCTS_FOUND");
  if (products.some((product) => !product.hasPurchaseControl)) {
    blockers.push("DIRECT_CHECKOUT_MISSING");
  }
  if (products.some((product) => product.datedAvailabilityRequired && !product.hasAvailabilityDate)) {
    blockers.push("PREORDER_AVAILABILITY_DATE_MISSING");
  }
  if (products.some((product) => !product.hasPrice)) {
    blockers.push("PRICE_OR_CURRENCY_INVALID");
  }
  return blockers;
}

function runSelfTest() {
  const ready = [{ hasPurchaseControl: true, datedAvailabilityRequired: false, hasAvailabilityDate: true, hasPrice: true }];
  const quoteOnly = [{ hasPurchaseControl: false, datedAvailabilityRequired: true, hasAvailabilityDate: false, hasPrice: true }];
  assert.deepEqual(evaluate(ready), []);
  assert.deepEqual(evaluate(quoteOnly), [
    "DIRECT_CHECKOUT_MISSING",
    "PREORDER_AVAILABILITY_DATE_MISSING",
  ]);
  assert.equal(hasPurchaseControl('<button data-action="add-to-cart">Add</button>'), true);
  assert.equal(hasPurchaseControl('<a href="https://wa.me/1">Get quote</a>'), false);
  console.log("GOOGLE_MERCHANT_READINESS_SELF_TEST_OK=4");
}

if (process.argv.includes("--self-test")) {
  runSelfTest();
  process.exit(0);
}

if (!fs.existsSync(dist)) {
  console.error("MERCHANT READINESS HATA: dist bulunamadi. Once Astro build calistirin.");
  process.exit(1);
}

const products = [];
const seen = new Set();
for (const file of walk(dist)) {
  const html = fs.readFileSync(file, "utf8");
  for (const node of jsonLdNodes(html)) {
    const type = node?.["@type"];
    const isProduct = type === "Product" || (Array.isArray(type) && type.includes("Product"));
    if (!isProduct || !isEnglishProductUrl(node.url) || seen.has(node.url)) continue;
    seen.add(node.url);
    products.push(inspectProduct(node, html));
  }
}

const blockers = evaluate(products);
const report = {
  generatedAt: new Date().toISOString(),
  status: blockers.length === 0 ? "READY_FOR_MANUAL_POLICY_REVIEW" : "BLOCKED_DO_NOT_UPLOAD",
  productPagesInspected: products.length,
  blockers,
  requirements: {
    directCheckout:
      "Products promoted in Shopping must be directly purchasable through the online store with a functioning purchase flow.",
    stablePrice:
      "The feed, landing page and checkout must show consistent price, currency and availability.",
    preorderDate:
      "Google requires availability_date when availability is preorder or backorder, and the date must be visible on the landing page.",
  },
  note:
    "This is a technical preflight, not Merchant Center approval. Do not upload a feed until every blocker is resolved and current Google policies are reviewed.",
};

fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(report, null, 2)}\n`, "utf8");

console.log("VIRELLAART GOOGLE MERCHANT READINESS");
console.log(`Product pages inspected: ${products.length}`);
console.log(`Status: ${report.status}`);
console.log(`Blockers: ${blockers.length ? blockers.join(", ") : "none"}`);
console.log(`Report: ${outputFile}`);

if (strict && blockers.length > 0) process.exit(1);
