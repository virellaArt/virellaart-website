#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const file = path.join(
  process.cwd(),
  "src",
  "components",
  "ProductTemplate.astro",
);

let source = fs.readFileSync(file, "utf8");

const availabilityBlock = `/*\n * Google maps "InStock" to products that are currently available for\n * ordering and can be fulfilled. VIRELLAART's separate orderModel and\n * visible copy make clear that every item is produced after confirmation;\n * this value does not claim warehouse inventory.\n */\nconst productAvailability =\n  "https://schema.org/InStock";\n\n`;

const replacementComment = `/*\n * All current products are made to order. Google defines InStock as an\n * item that is in stock, so availability is intentionally omitted until\n * a truthful supported ItemAvailability value applies to the product.\n */\n\n`;

if (source.includes(availabilityBlock)) {
  source = source.replace(availabilityBlock, replacementComment);
}

source = source.replace(
  `    availability: productAvailability,\n\n`,
  "",
);

if (source.includes("productAvailability")) {
  throw new Error("productAvailability reference remains after patch.");
}

fs.writeFileSync(file, source, "utf8");
console.log("Made-to-order product availability schema normalized.");
