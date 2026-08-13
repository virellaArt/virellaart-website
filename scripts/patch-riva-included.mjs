#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const file = path.join(
  process.cwd(),
  "src",
  "components",
  "ProductTemplate.astro",
);

const source = fs.readFileSync(file, "utf8");
const marker = '  "Zümrüt Dining Room"\n]);';
const replacement = '  "Zümrüt Dining Room",\n  "Riva Dining Room Set"\n]);';

if (source.includes('  "Riva Dining Room Set"\n]);')) {
  console.log("Riva inclusion already present.");
  process.exit(0);
}

if (!source.includes(marker)) {
  throw new Error("Dining products with showcase block marker not found.");
}

fs.writeFileSync(
  file,
  source.replace(marker, replacement),
  "utf8",
);

console.log("Riva full-set included items enabled.");
