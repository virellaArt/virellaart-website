import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const PUBLIC = path.join(ROOT, "public");

const OUTPUT_PUBLIC =
  path.join(PUBLIC, "pinterest-products.csv");

const OUTPUT_DIST =
  path.join(DIST, "pinterest-products.csv");

const REPORT_DIR =
  process.env.PINTEREST_CATALOG_REPORT_DIR ||
  path.join(ROOT, ".pinterest-catalog-report");

const REPORT_JSON =
  path.join(REPORT_DIR, "catalog-report.json");

const BASE = "https://www.virellaart.com";

const LANGUAGE_PREFIXES = new Set([
  "tr",
  "de",
  "fr",
  "it",
  "ru",
  "ar",
  "bg",
  "ro",
  "el",
  "es",
  "sr",
  "kk",
  "uz",
  "pt",
  "pl",
]);

function fail(message) {
  throw new Error(message);
}

function walk(dir) {
  const out = [];

  for (
    const entry of fs.readdirSync(
      dir,
      { withFileTypes: true },
    )
  ) {
    const full =
      path.join(dir, entry.name);

    if (entry.isDirectory()) {
      out.push(...walk(full));
    }
    else if (
      entry.isFile() &&
      entry.name.endsWith(".html")
    ) {
      out.push(full);
    }
  }

  return out;
}

function collectJsonLd(html) {
  const values = [];

  const regex =
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

  for (
    const match of html.matchAll(regex)
  ) {
    const raw =
      match[1].trim();

    if (!raw) {
      continue;
    }

    try {
      values.push(
        JSON.parse(raw),
      );
    }
    catch {
    }
  }

  return values;
}

function flattenJsonLd(
  value,
  out = [],
) {
  if (Array.isArray(value)) {
    for (const item of value) {
      flattenJsonLd(item, out);
    }

    return out;
  }

  if (
    !value ||
    typeof value !== "object"
  ) {
    return out;
  }

  if (
    Array.isArray(value["@graph"])
  ) {
    flattenJsonLd(
      value["@graph"],
      out,
    );
  }

  out.push(value);

  return out;
}

function isProductNode(node) {
  const type =
    node?.["@type"];

  return (
    type === "Product" ||
    (
      Array.isArray(type) &&
      type.includes("Product")
    )
  );
}

function text(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function csv(value) {
  return (
    '"' +
    String(value ?? "")
      .replace(/"/g, '""') +
    '"'
  );
}

function canonicalProductUrl(node) {
  const candidate =
    text(node.url) ||
    text(node?.offers?.url);

  if (!candidate) {
    return null;
  }

  let url;

  try {
    url =
      new URL(candidate, BASE);
  }
  catch {
    return null;
  }

  if (url.origin !== BASE) {
    return null;
  }

  url.hash = "";
  url.search = "";

  if (
    !url.pathname.endsWith("/")
  ) {
    url.pathname += "/";
  }

  const first =
    url.pathname
      .split("/")
      .filter(Boolean)[0]
      ?.toLowerCase();

  if (
    first &&
    LANGUAGE_PREFIXES.has(first)
  ) {
    return null;
  }

  const directProduct =
    /^\/(living-rooms|dining-rooms|bedrooms|tv-units)\/[^/]+\/$/
      .test(url.pathname);

  const collectionProduct =
    /^\/collections\/(modern|luxury-classic)\/(sofa-sets|dining-rooms|bedrooms|tv-units)\/[^/]+\/$/
      .test(url.pathname);

  return (
    directProduct ||
    collectionProduct
  )
    ? url.href
    : null;
}

function stableId(link) {
  return new URL(link)
    .pathname
    .split("/")
    .filter(Boolean)
    .join("-")
    .toLowerCase()
    .replace(
      /[^a-z0-9-]+/g,
      "-",
    )
    .replace(
      /-+/g,
      "-",
    )
    .replace(
      /^-|-$/g,
      "",
    );
}

function getOffer(node) {
  const offers =
    Array.isArray(node.offers)
      ? node.offers
      : [node.offers];

  for (
    const offer of offers
  ) {
    if (
      !offer ||
      typeof offer !== "object"
    ) {
      continue;
    }

    const numeric =
      Number(
        String(
          offer.price ?? "",
        ).replace(/,/g, ""),
      );

    const currency =
      text(
        offer.priceCurrency,
      ).toUpperCase();

    if (
      Number.isFinite(numeric) &&
      numeric > 0 &&
      /^[A-Z]{3}$/.test(currency)
    ) {
      return {
        numeric,
        currency,
      };
    }
  }

  return null;
}

function imageCandidates(node) {
  const raw =
    Array.isArray(node.image)
      ? node.image
      : [node.image];

  return raw
    .map((item) => {

      if (
        typeof item === "string"
      ) {
        return item;
      }

      if (
        item &&
        typeof item === "object"
      ) {
        return (
          item.url ||
          item.contentUrl ||
          ""
        );
      }

      return "";
    })
    .map(text)
    .filter(Boolean);
}

async function choosePinterestImage(
  node,
) {
  for (
    const candidate
    of imageCandidates(node)
  ) {
    let url;

    try {
      url =
        new URL(
          candidate,
          BASE,
        );
    }
    catch {
      continue;
    }

    if (
      url.origin !== BASE
    ) {
      continue;
    }

    const local =
      path.join(
        PUBLIC,
        decodeURIComponent(
          url.pathname,
        ).replace(/^\/+/, ""),
      );

    if (
      !fs.existsSync(local) ||
      !fs.statSync(local)
        .isFile()
    ) {
      continue;
    }

    try {
      const metadata =
        await sharp(local)
          .metadata();

      const width =
        Number(
          metadata.width || 0,
        );

      const height =
        Number(
          metadata.height || 0,
        );

      if (
        width >= 1000 &&
        height >= 1500
      ) {
        return url.href;
      }
    }
    catch {
    }
  }

  return null;
}

function productTypeFromLink(link) {
  const pathname =
    new URL(link).pathname;

  if (
    /\/living-rooms\//
      .test(pathname) ||
    /\/sofa-sets\//
      .test(pathname)
  ) {
    return (
      "Furniture > " +
      "Living Room Furniture > " +
      "Sofa Sets"
    );
  }

  if (
    /\/dining-rooms\//
      .test(pathname)
  ) {
    return (
      "Furniture > " +
      "Dining Room Furniture"
    );
  }

  if (
    /\/bedrooms\//
      .test(pathname)
  ) {
    return (
      "Furniture > " +
      "Bedroom Furniture"
    );
  }

  if (
    /\/tv-units\//
      .test(pathname)
  ) {
    return (
      "Furniture > " +
      "Living Room Furniture > " +
      "TV Units"
    );
  }

  return "Furniture";
}

if (
  !fs.existsSync(DIST)
) {
  fail(
    "dist/ not found.",
  );
}

if (
  !fs.existsSync(PUBLIC)
) {
  fail(
    "public/ not found.",
  );
}

const productNodes =
  new Map();

for (
  const file of walk(DIST)
) {
  const html =
    fs.readFileSync(
      file,
      "utf8",
    );

  for (
    const value
    of collectJsonLd(html)
  ) {
    for (
      const node
      of flattenJsonLd(value)
    ) {
      if (
        !isProductNode(node)
      ) {
        continue;
      }

      const link =
        canonicalProductUrl(node);

      if (!link) {
        continue;
      }

      if (
        !productNodes.has(link)
      ) {
        productNodes.set(
          link,
          node,
        );
      }
    }
  }
}

const rows = [];
const skipped = [];

for (
  const [link, node]
  of [...productNodes.entries()]
    .sort(
      ([a], [b]) =>
        a.localeCompare(b),
    )
) {
  const id =
    stableId(link);

  const title =
    text(node.name);

  const description =
    text(node.description);

  const offer =
    getOffer(node);

  const imageLink =
    await choosePinterestImage(
      node,
    );

  const reasons = [];

  if (
    !id ||
    id.length > 127
  ) {
    reasons.push(
      "invalid_id",
    );
  }

  if (
    !title ||
    title.length > 500
  ) {
    reasons.push(
      "invalid_title",
    );
  }

  if (
    !description ||
    description.length > 10000
  ) {
    reasons.push(
      "invalid_description",
    );
  }

  if (
    link.length > 511
  ) {
    reasons.push(
      "invalid_link",
    );
  }

  if (
    !imageLink ||
    imageLink.length > 2000
  ) {
    reasons.push(
      "invalid_image_1000x1500",
    );
  }

  if (!offer) {
    reasons.push(
      "invalid_price",
    );
  }

  if (
    reasons.length > 0
  ) {
    skipped.push({
      link,
      title,
      reasons,
    });

    continue;
  }

  rows.push({
    id,
    title,
    description,
    link,
    image_link: imageLink,
    price:
      offer.numeric.toFixed(2) +
      " " +
      offer.currency,
    availability: "preorder",
    product_type:
      productTypeFromLink(link),
  });
}

if (
  productNodes.size === 0
) {
  fail(
    "No English Product JSON-LD pages found.",
  );
}

if (
  rows.length === 0
) {
  fail(
    "Catalog would be empty.",
  );
}

const ids =
  new Set();

const links =
  new Set();

for (
  const row of rows
) {
  if (
    ids.has(row.id)
  ) {
    fail(
      "Duplicate catalog id: " +
      row.id,
    );
  }

  if (
    links.has(row.link)
  ) {
    fail(
      "Duplicate catalog link: " +
      row.link,
    );
  }

  ids.add(row.id);
  links.add(row.link);

  if (
    row.availability !==
    "preorder"
  ) {
    fail(
      "Availability guard failed: " +
      row.id,
    );
  }

  if (
    !/^\d+(?:\.\d{2}) [A-Z]{3}$/
      .test(row.price)
  ) {
    fail(
      "Price guard failed: " +
      row.id,
    );
  }
}

const headers = [
  "id",
  "title",
  "description",
  "link",
  "image_link",
  "price",
  "availability",
  "product_type",
];

const output = [
  headers
    .map(csv)
    .join(","),

  ...rows.map(
    (row) =>
      headers
        .map(
          (key) =>
            csv(row[key]),
        )
        .join(","),
  ),
].join("\n") + "\n";

const sha256 =
  crypto
    .createHash("sha256")
    .update(
      output,
      "utf8",
    )
    .digest("hex");

fs.mkdirSync(
  REPORT_DIR,
  { recursive: true },
);

fs.writeFileSync(
  OUTPUT_PUBLIC,
  output,
  "utf8",
);

fs.writeFileSync(
  OUTPUT_DIST,
  output,
  "utf8",
);

fs.writeFileSync(
  REPORT_JSON,
  JSON.stringify(
    {
      generated_at:
        new Date()
          .toISOString(),

      source:
        "built English Product JSON-LD",

      availability_policy:
        "preorder",

      required_image_minimum:
        "1000x1500",

      product_pages_found:
        productNodes.size,

      products_in_feed:
        rows.length,

      skipped_products:
        skipped.length,

      skipped,

      sha256,

      output:
        "public/pinterest-products.csv",
    },
    null,
    2,
  ) + "\n",
  "utf8",
);

console.log("");
console.log(
  "PINTEREST CATALOG GENERATED",
);

console.log(
  "[PASS] Product pages found : " +
  productNodes.size,
);

console.log(
  "[PASS] Products in feed    : " +
  rows.length,
);

console.log(
  "[INFO] Skipped products    : " +
  skipped.length,
);

console.log(
  "[PASS] Availability        : preorder",
);

console.log(
  "[PASS] Main image minimum  : 1000x1500",
);

console.log(
  "[PASS] Feed SHA256         : " +
  sha256,
);

console.log(
  "[PASS] Feed                : public/pinterest-products.csv",
);

console.log(
  "[PASS] Report              : " +
  REPORT_JSON,
);