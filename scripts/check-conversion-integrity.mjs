#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const repositoryRoot = process.cwd();
const distRoot = path.join(repositoryRoot, "dist");
const productTemplatePath = path.join(
  repositoryRoot,
  "src",
  "components",
  "ProductTemplate.astro",
);

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

if (!fs.existsSync(productTemplatePath)) {
  fail("ProductTemplate.astro bulunamadi.");
}

const productTemplateSource = fs.readFileSync(
  productTemplatePath,
  "utf8",
);

const quoteTemplateMatch =
  productTemplateSource.match(
    /const quoteMessageTemplate = \[([\s\S]*?)\]\.join\("\\n"\);/,
  );

if (!quoteTemplateMatch) {
  fail("WhatsApp teklif mesaj sablonu bulunamadi.");
}

for (const requiredField of [
  "productQuote.price",
  "productQuote.country",
  "productQuote.city",
  "productQuote.page",
]) {
  if (!quoteTemplateMatch[1].includes(requiredField)) {
    fail(
      `WhatsApp teklif mesajinda ${requiredField} eksik.`,
    );
  }
}

const quoteRuntimeMatch =
  productTemplateSource.match(
    /function buildMessage\(\) \{([\s\S]*?)function updateQuoteLinks/,
  );

if (!quoteRuntimeMatch) {
  fail("WhatsApp calisma zamani teklif mesaji bulunamadi.");
}

for (const requiredValue of [
  "price: selectedPrice",
  "country: fieldValue(countryInput)",
  "city: fieldValue(cityInput)",
]) {
  if (!quoteRuntimeMatch[1].includes(requiredValue)) {
    fail(
      `WhatsApp calisma zamani mesajinda ${requiredValue} eksik.`,
    );
  }
}

const htmlFiles = walkHtml(distRoot);
const productPages = [];
const errors = [];

const paymentApprovalChecks = [
  {
    prefix: "/collections/",
    title: "Payment &amp; Pre-Shipment Approval",
  },
  {
    prefix: "/tr/collections/",
    title: "Ödeme ve Sevkiyat Öncesi Onay",
  },
  {
    prefix: "/de/collections/",
    title: "Zahlung &amp; Freigabe vor Versand",
  },
  {
    prefix: "/fr/collections/",
    title: "Paiement &amp; validation avant expédition",
  },
];

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, "utf8");

  if (!/"@type":"Product"/.test(html)) {
    continue;
  }

  const route = routeFor(filePath);
  productPages.push(route);

  const paymentCheck = paymentApprovalChecks.find(
    (check) => route.startsWith(check.prefix),
  );

  if (
    paymentCheck &&
    (
      !html.includes(paymentCheck.title) ||
      !html.includes("50 %") &&
      !html.includes("50%") &&
      !html.includes("%50")
    )
  ) {
    errors.push(
      `${route}: ödeme ve sevkiyat öncesi onay bilgisi eksik.`,
    );
  }

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
      /product-quote-builder/.test(html) &&
        /product_quote_details/.test(html),
      "sabit WhatsApp dugmesi kisa teklif akisini kullanmiyor",
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
