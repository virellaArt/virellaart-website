#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const repositoryRoot = process.cwd();
const distRoot = path.join(repositoryRoot, "dist");

function fail(message) {
  console.error(`CONVERSION INTEGRITY ERROR: ${message}`);
  process.exit(1);
}

function walkHtml(root) {
  const files = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    for (const entry of fs.readdirSync(current, {
      withFileTypes: true,
    })) {
      const fullPath = path.join(current, entry.name);

      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (
        entry.isFile() &&
        entry.name.toLowerCase().endsWith(".html")
      ) {
        files.push(fullPath);
      }
    }
  }

  return files.sort();
}

function routeFor(filePath) {
  const relative = path
    .relative(distRoot, filePath)
    .split(path.sep)
    .join("/");

  if (relative === "index.html") return "/";

  return `/${relative.replace(/index\.html$/, "")}`;
}

function countMatches(value, pattern) {
  return [...value.matchAll(pattern)].length;
}

if (!fs.existsSync(distRoot)) {
  fail("dist bulunamadi. Once Astro build calistirin.");
}

const htmlFiles = walkHtml(distRoot);
const productPages = [];
const errors = [];

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, "utf8");

  if (!/"@type":"Product"/.test(html)) {
    continue;
  }

  const route = routeFor(filePath);
  productPages.push(route);

  const checks = [
    [
      countMatches(html, /\sdata-quote-builder(?:\s|>)/g) === 1,
      "tam olarak bir teklif formu olmali",
    ],
    [
      /name="delivery-country"[^>]*\srequired(?:\s|>)/.test(html),
      "teslimat ulkesi zorunlu olmali",
    ],
    [
      /name="delivery-city"[^>]*\srequired(?:\s|>)/.test(html),
      "teslimat sehri zorunlu olmali",
    ],
    [
      /data-quote-engine="product-quote-v1"/.test(html),
      "urun teklif motoru etiketi eksik",
    ],
    [
      /window\.gtag\("event", "view_item", productEvent\)/.test(html),
      "GA4 view_item olayi eksik",
    ],
    [
      /"quote_start"/.test(html) &&
        /event: "virella_quote_start"/.test(html),
      "teklif baslangici olcumu eksik",
    ],
    [
      /window\.gtag\("event", "generate_lead"/.test(html),
      "WhatsApp lead olcumu eksik",
    ],
    [
      /window\.virellaAnalyticsAllowed === true/.test(html),
      "analitik izin kapisi eksik",
    ],
  ];

  for (const [passed, message] of checks) {
    if (!passed) {
      errors.push(`${route}: ${message}`);
    }
  }
}

if (productPages.length === 0) {
  fail("Product schema iceren urun sayfasi bulunamadi.");
}

if (errors.length > 0) {
  errors.slice(0, 30).forEach((error) =>
    console.error(`- ${error}`),
  );

  if (errors.length > 30) {
    console.error(`- ve ${errors.length - 30} ek hata`);
  }

  fail(`${errors.length} donusum butunlugu hatasi bulundu.`);
}

console.log("VIRELLAART CONVERSION INTEGRITY");
console.log(`HTML pages: ${htmlFiles.length}`);
console.log(`Product pages: ${productPages.length}`);
console.log("Quote funnel: view_item -> quote_start -> generate_lead");
console.log("Consent gate: present");
console.log("CONVERSION INTEGRITY OK");
