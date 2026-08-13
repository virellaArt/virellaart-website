#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const file = path.join(root, "src", "components", "ProductTemplate.astro");
const source = fs.readFileSync(file, "utf8");

const startMarker = "const pageDescription =";
const endMarker = "const canonicalURL = new URL(";
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start);

if (start < 0 || end < 0) {
  throw new Error("ProductTemplate SEO block bulunamadi; dosya yapisi degismis olabilir.");
}

const replacement = `const englishCommercialCategoryTitle =\n  ({\n    \"living-rooms\":\n      productStyle === \"modern\"\n        ? \"Modern Luxury Sofa Set\"\n        : \"Luxury Living Room Set\",\n    \"dining-rooms\":\n      productStyle === \"modern\"\n        ? \"Modern Luxury Dining Room Set\"\n        : \"Luxury Dining Room Set\",\n    bedrooms:\n      productStyle === \"modern\"\n        ? \"Modern Luxury Bedroom Set\"\n        : \"Luxury Bedroom Set\",\n    \"tv-units\":\n      productStyle === \"modern\"\n        ? \"Modern Luxury TV Unit\"\n        : \"Luxury TV Unit\",\n  } as const)[categoryKey];\n\nconst englishCommercialMeta =\n  ({\n    \"living-rooms\":\n      \"Luxury living room furniture with collection prices, made-to-order options and international delivery from Istanbul.\",\n    \"dining-rooms\":\n      \"Luxury dining room furniture with collection prices, coordinated set options and international delivery from Istanbul.\",\n    bedrooms:\n      \"Luxury bedroom furniture with collection prices, made-to-order options and international delivery from Istanbul.\",\n    \"tv-units\":\n      \"Luxury TV and media furniture with collection prices, made-to-order options and international delivery from Istanbul.\",\n  } as const)[categoryKey];\n\nconst pageDescription =\n  getSeoDescription(\n    language === \"en\"\n      ? \`\${translatedProductName}. \${englishCommercialMeta} \${productDescription}\`\n      : productDescription,\n    language,\n  );\n\nconst defaultPageTitle =\n  productStyle === \"modern\"\n    ? \`\${translatedProductName} | \${collectionCopy.modern} \${categoryName}\`\n    : \`\${translatedProductName} | \${categoryName}\`;\n\nconst pageTitle =\n  language === \"en\"\n    ? \`\${translatedProductName} | \${englishCommercialCategoryTitle}\`\n    : defaultPageTitle;\n`;

let next =
  source.slice(0, start) +
  replacement +
  source.slice(end);

const baseLayoutOpen = `<BaseLayout\n  title={pageTitle}\n  description={pageDescription}\n  image={images[0]}\n  imageAlt={resolvedImageAlts[0]}\n  pageType=\"product\"\n>`;

const headSlot = `${baseLayoutOpen}\n  <Fragment slot=\"head\">\n    <meta\n      property=\"product:price:amount\"\n      content={String(primaryPrice)}\n    />\n    <meta\n      property=\"product:price:currency\"\n      content=\"USD\"\n    />\n  </Fragment>`;

if (!next.includes('property="product:price:amount"')) {
  if (!next.includes(baseLayoutOpen)) {
    throw new Error("BaseLayout product acilisi bulunamadi.");
  }

  next = next.replace(baseLayoutOpen, headSlot);
}

if (next === source) {
  console.log("ProductTemplate zaten normalize.");
  process.exit(0);
}

fs.writeFileSync(file, next, "utf8");
console.log("ProductTemplate SEO normalize edildi.");
