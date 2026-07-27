import fs from "node:fs";
import path from "node:path";

const rootDirectory = process.cwd();
const distDirectory = path.join(rootDirectory, "dist");

const baseURL = new URL(
  "https://www.virellaart.com/",
);

const internalHosts = new Set([
  "www.virellaart.com",
  "virellaart.com",
]);

const skippedPrefixes = [
  "mailto:",
  "tel:",
  "javascript:",
  "data:",
  "blob:",
];

if (!fs.existsSync(distDirectory)) {
  console.error(
    "HATA: dist klasörü bulunamadı. Önce Astro build çalıştırılmalı.",
  );

  process.exit(1);
}

function walkDirectory(directory) {
  const files = [];

  for (
    const entry
    of fs.readdirSync(directory, {
      withFileTypes: true,
    })
  ) {
    const fullPath = path.join(
      directory,
      entry.name,
    );

    if (entry.isDirectory()) {
      files.push(...walkDirectory(fullPath));
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

function normalizeSlashes(value) {
  return value.replaceAll("\\", "/");
}

function getPublicPath(htmlFile) {
  const relativePath = normalizeSlashes(
    path.relative(distDirectory, htmlFile),
  );

  if (relativePath === "index.html") {
    return "/";
  }

  if (relativePath.endsWith("/index.html")) {
    return `/${relativePath.slice(
      0,
      -"index.html".length,
    )}`;
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

function resolveTargetFile(pathname) {
  let decodedPathname = pathname;

  try {
    decodedPathname =
      decodeURI(pathname);
  } catch {
    decodedPathname = pathname;
  }

  decodedPathname =
    decodedPathname.replace(/\/{2,}/g, "/");

  const relativePath =
    decodedPathname.replace(/^\/+/, "");

  const candidates = [];

  if (decodedPathname.endsWith("/")) {
    candidates.push(
      path.join(
        distDirectory,
        relativePath,
        "index.html",
      ),
    );
  } else if (path.extname(relativePath)) {
    candidates.push(
      path.join(
        distDirectory,
        relativePath,
      ),
    );
  } else {
    candidates.push(
      path.join(
        distDirectory,
        relativePath,
      ),
      path.join(
        distDirectory,
        `${relativePath}.html`,
      ),
      path.join(
        distDirectory,
        relativePath,
        "index.html",
      ),
    );
  }

  return candidates.find(isFile);
}

function escapeRegExp(value) {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}

const htmlContentCache = new Map();

function getHTMLContent(filePath) {
  if (!htmlContentCache.has(filePath)) {
    htmlContentCache.set(
      filePath,
      fs.readFileSync(filePath, "utf8"),
    );
  }

  return htmlContentCache.get(filePath);
}

function fragmentExists(
  targetFile,
  hash,
) {
  if (
    !hash ||
    !targetFile.endsWith(".html")
  ) {
    return true;
  }

  let fragment = hash.replace(/^#/, "");

  try {
    fragment =
      decodeURIComponent(fragment);
  } catch {
    fragment =
      hash.replace(/^#/, "");
  }

  if (!fragment) {
    return true;
  }

  const html =
    getHTMLContent(targetFile);

  const fragmentPattern =
    new RegExp(
      `\\b(?:id|name)=["']${escapeRegExp(
        fragment,
      )}["']`,
      "i",
    );

  return fragmentPattern.test(html);
}

function extractReferences(html) {
  const references = [];

  const attributePattern =
    /\b(href|src)\s*=\s*(["'])(.*?)\2/gi;

  let match;

  while (
    (
      match =
        attributePattern.exec(html)
    ) !== null
  ) {
    references.push({
      attribute: match[1].toLowerCase(),
      value: match[3].trim(),
    });
  }

  return references;
}

const htmlFiles =
  walkDirectory(distDirectory)
    .filter((filePath) =>
      filePath.endsWith(".html"),
    );

const brokenReferences = [];
const checkedReferences = new Set();

let internalReferenceCount = 0;

for (const sourceFile of htmlFiles) {
  const sourcePublicPath =
    getPublicPath(sourceFile);

  const sourceURL =
    new URL(
      sourcePublicPath,
      baseURL,
    );

  const html =
    getHTMLContent(sourceFile);

  const references =
    extractReferences(html);

  for (
    const reference
    of references
  ) {
    const rawValue =
      reference.value;

    if (
      !rawValue ||
      rawValue === "#"
    ) {
      continue;
    }

    const lowerValue =
      rawValue.toLowerCase();

    if (
      skippedPrefixes.some(
        (prefix) =>
          lowerValue.startsWith(prefix),
      )
    ) {
      continue;
    }

    let targetURL;

    try {
      targetURL =
        new URL(rawValue, sourceURL);
    } catch {
      brokenReferences.push({
        type: "invalid-url",
        source: sourcePublicPath,
        attribute: reference.attribute,
        target: rawValue,
        reason: "Geçersiz URL",
      });

      continue;
    }

    if (
      !["http:", "https:"].includes(
        targetURL.protocol,
      )
    ) {
      continue;
    }

    if (
      !internalHosts.has(
        targetURL.hostname,
      )
    ) {
      continue;
    }

    internalReferenceCount += 1;

    const uniqueKey = [
      sourcePublicPath,
      reference.attribute,
      targetURL.pathname,
      targetURL.hash,
    ].join("|");

    if (
      checkedReferences.has(uniqueKey)
    ) {
      continue;
    }

    checkedReferences.add(uniqueKey);

    const targetFile =
      resolveTargetFile(
        targetURL.pathname,
      );

    if (!targetFile) {
      brokenReferences.push({
        type: "missing-target",
        source: sourcePublicPath,
        attribute: reference.attribute,
        target:
          `${targetURL.pathname}${targetURL.hash}`,
        reason:
          "Hedef dosya veya route bulunamadı",
      });

      continue;
    }

    if (
      targetURL.hash &&
      !fragmentExists(
        targetFile,
        targetURL.hash,
      )
    ) {
      brokenReferences.push({
        type: "missing-fragment",
        source: sourcePublicPath,
        attribute: reference.attribute,
        target:
          `${targetURL.pathname}${targetURL.hash}`,
        reason:
          "Sayfa var fakat hedef bölüm ID'si bulunamadı",
      });
    }
  }
}

const reportDirectory =
  path.join(
    distDirectory,
    "_reports",
  );

fs.mkdirSync(
  reportDirectory,
  {
    recursive: true,
  },
);

const report = {
  generatedAt:
    new Date().toISOString(),
  htmlPagesChecked:
    htmlFiles.length,
  internalReferencesChecked:
    internalReferenceCount,
  uniqueReferencesChecked:
    checkedReferences.size,
  brokenReferenceCount:
    brokenReferences.length,
  brokenReferences,
};

fs.writeFileSync(
  path.join(
    reportDirectory,
    "internal-link-check.json",
  ),
  JSON.stringify(
    report,
    null,
    2,
  ),
  "utf8",
);

console.log("");
console.log(
  "VIRELLAART SITE LINK KONTROLU",
);
console.log(
  "--------------------------------",
);
console.log(
  `Kontrol edilen HTML sayfası: ${htmlFiles.length}`,
);
console.log(
  `Kontrol edilen iç bağlantı: ${internalReferenceCount}`,
);
console.log(
  `Benzersiz bağlantı: ${checkedReferences.size}`,
);

if (brokenReferences.length > 0) {
  console.error("");
  console.error(
    `BOZUK BAGLANTI SAYISI: ${brokenReferences.length}`,
  );

  console.error(
    "--------------------------------",
  );

  for (
    const broken
    of brokenReferences.slice(0, 100)
  ) {
    console.error(
      `${broken.source} -> ${broken.target}`,
    );

    console.error(
      `  ${broken.reason}`,
    );
  }

  if (
    brokenReferences.length > 100
  ) {
    console.error(
      `...ve ${
        brokenReferences.length - 100
      } ek hata.`,
    );
  }

  console.error("");
  console.error(
    "Detaylı rapor:",
  );

  console.error(
    "dist/_reports/internal-link-check.json",
  );

  process.exit(1);
}

console.log("");
console.log(
  "TUM IC BAGLANTILAR CALISIYOR.",
);

console.log(
  "Kategori kartları, ürün sayfaları, dil rotaları, menüler, görseller ve sayfa içi bağlantılar doğrulandı.",
);
