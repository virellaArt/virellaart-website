import { spawn } from "node:child_process";
import {
  constants as fsConstants,
} from "node:fs";
import {
  access,
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  unlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import {
  basename,
  dirname,
  extname,
  isAbsolute,
  join,
  relative,
  resolve,
  sep,
} from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import sharp from "sharp";

const projectRoot = resolve(
  import.meta.dirname,
  "..",
);
const publicDirectory = join(
  projectRoot,
  "public",
);
const productsFile = join(
  projectRoot,
  "src",
  "data",
  "products.ts",
);
const exampleManifestFile = join(
  projectRoot,
  "examples",
  "product-import.example.json",
);

const supportedImageExtensions = new Set([
  ".avif",
  ".gif",
  ".heic",
  ".heif",
  ".jpeg",
  ".jpg",
  ".png",
  ".tif",
  ".tiff",
  ".webp",
]);

const categoryAliases = {
  "sofa-sets": {
    dataCategory: "living-rooms",
    routeCategory: "sofa-sets",
  },
  "living-rooms": {
    dataCategory: "living-rooms",
    routeCategory: "sofa-sets",
  },
  "dining-rooms": {
    dataCategory: "dining-rooms",
    routeCategory: "dining-rooms",
  },
  bedrooms: {
    dataCategory: "bedrooms",
    routeCategory: "bedrooms",
  },
  "tv-units": {
    dataCategory: "tv-units",
    routeCategory: "tv-units",
  },
};

const styleNames = {
  "luxury-classic": "Luxury & Classic",
  modern: "Modern",
};

function printUsage() {
  console.log(`
VIRELLAART ürün yükleme

Kullanım:
  npm run product:init
  npm run product:add -- --manifest product-import.json
  npm run product:add -- --manifest product-import.json --dry-run
  npm run product:add -- --manifest product-import.json --commit
  npm run product:add -- --manifest product-import.json --publish

Seçenekler:
  --init [dosya]      Örnek manifest oluşturur.
  --manifest <dosya> Ürün manifestini seçer.
  --dry-run          Dosya değiştirmeden bütün ön kontrolleri yapar.
  --commit           Başarılı ürünü yerel Git commit'ine alır.
  --publish          Commit ve GitHub push yapar; Cloudflare Pages canlı yayınını doğrular.
  --help             Bu yardımı gösterir.
`);
}

function optionValue(args, optionName) {
  const index = args.indexOf(optionName);

  if (index === -1) {
    return undefined;
  }

  const value = args[index + 1];

  if (!value || value.startsWith("--")) {
    throw new Error(
      `${optionName} için bir değer gerekli.`,
    );
  }

  return value;
}

function slugify(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("&", " and ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function keyFromSlug(slug) {
  const key = slug.replace(
    /-([a-z0-9])/g,
    (_, character) => character.toUpperCase(),
  );

  return /^[A-Za-z_]/.test(key)
    ? key
    : `product${key}`;
}

function requireText(value, field, minimum = 1) {
  if (
    typeof value !== "string" ||
    value.trim().length < minimum
  ) {
    throw new Error(
      `${field} en az ${minimum} karakter olmalı.`,
    );
  }

  return value.trim();
}

function normalizeRepositoryPath(filePath) {
  return relative(projectRoot, filePath)
    .split(sep)
    .join("/");
}

function isSamePath(left, right) {
  const normalizedLeft = resolve(left);
  const normalizedRight = resolve(right);

  return process.platform === "win32"
    ? normalizedLeft.toLowerCase() ===
        normalizedRight.toLowerCase()
    : normalizedLeft === normalizedRight;
}

function assertInsidePublic(filePath) {
  const relativePath = relative(
    publicDirectory,
    filePath,
  );

  if (
    relativePath.startsWith("..") ||
    isAbsolute(relativePath)
  ) {
    throw new Error(
      `Görsel public klasörü içinde olmalı: ${filePath}`,
    );
  }
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function runCommand(
  command,
  args,
  options = {},
) {
  const requiresCommandProcessor =
    process.platform === "win32" &&
    ["npm", "npx"].includes(command);
  const executable =
    requiresCommandProcessor
      ? process.env.ComSpec || "cmd.exe"
      : command;
  const commandArgs =
    requiresCommandProcessor
      ? [
          "/d",
          "/s",
          "/c",
          [command, ...args].join(" "),
        ]
      : args;

  return await new Promise((resolvePromise, reject) => {
    const child = spawn(
      executable,
      commandArgs,
      {
        cwd: projectRoot,
        stdio: options.capture
          ? ["ignore", "pipe", "pipe"]
          : "inherit",
        shell: false,
      },
    );
    let stdout = "";
    let stderr = "";

    if (options.capture) {
      child.stdout?.on(
        "data",
        (chunk) => {
          stdout += chunk;
        },
      );
      child.stderr?.on(
        "data",
        (chunk) => {
          stderr += chunk;
        },
      );
    }

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolvePromise({
          stdout,
          stderr,
        });
        return;
      }

      reject(
        new Error(
          [
            `${command} ${args.join(" ")} başarısız oldu (${code}).`,
            stdout.trim(),
            stderr.trim(),
          ]
            .filter(Boolean)
            .join("\n"),
        ),
      );
    });
  });
}

async function ensureProductsFileIsSafe() {
  try {
    const result = await runCommand(
      "git",
      [
        "status",
        "--porcelain",
        "--untracked-files=no",
        "--",
        normalizeRepositoryPath(productsFile),
      ],
      {
        capture: true,
      },
    );

    if (result.stdout.trim()) {
      throw new Error(
        "src/data/products.ts üzerinde commit edilmemiş değişiklik var. Ürün içe aktarma durduruldu.",
      );
    }
  } catch (error) {
    if (
      error.message.includes(
        "commit edilmemiş değişiklik",
      )
    ) {
      throw error;
    }

    console.warn(
      "Git durumu okunamadı; dosya çakışma kontrolleriyle devam ediliyor.",
    );
  }
}

async function ensureGitWorkspaceIsClean() {
  const result = await runCommand(
    "git",
    [
      "status",
      "--porcelain",
      "--untracked-files=normal",
    ],
    {
      capture: true,
    },
  );

  if (result.stdout.trim()) {
    throw new Error(
      [
        "Commit veya yayın öncesinde Git çalışma alanı temiz olmalı.",
        "Önce mevcut değişiklikleri commit edin ya da güvenli biçimde ayırın:",
        result.stdout.trim(),
      ].join("\n"),
    );
  }
}

async function collectImages(manifest) {
  let imagePaths;

  if (
    Array.isArray(manifest.images) &&
    manifest.images.length > 0
  ) {
    imagePaths = manifest.images.map((image) =>
      resolve(
        projectRoot,
        requireText(image, "images[]"),
      ),
    );
  } else if (manifest.imageSource) {
    const source = resolve(
      projectRoot,
      requireText(
        manifest.imageSource,
        "imageSource",
      ),
    );
    assertInsidePublic(source);
    const sourceStats = await stat(source);

    if (sourceStats.isFile()) {
      imagePaths = [source];
    } else if (sourceStats.isDirectory()) {
      const entries = await readdir(source, {
        withFileTypes: true,
      });
      const collator = new Intl.Collator("en", {
        numeric: true,
        sensitivity: "base",
      });

      imagePaths = entries
        .filter((entry) => entry.isFile())
        .map((entry) =>
          join(source, entry.name),
        )
        .filter((filePath) =>
          supportedImageExtensions.has(
            extname(filePath).toLowerCase(),
          ),
        )
        .sort((left, right) =>
          collator.compare(
            basename(left),
            basename(right),
          ),
        );
    } else {
      throw new Error(
        "imageSource bir dosya veya klasör olmalı.",
      );
    }
  } else {
    throw new Error(
      "images dizisi veya imageSource gerekli.",
    );
  }

  if (
    imagePaths.length === 0 ||
    imagePaths.length > 40
  ) {
    throw new Error(
      "Ürün için 1 ile 40 arasında görsel gerekli.",
    );
  }

  const uniquePaths = new Set();
  const stems = new Set();

  for (const imagePath of imagePaths) {
    assertInsidePublic(imagePath);

    const imageStats = await stat(imagePath);
    const extension = extname(
      imagePath,
    ).toLowerCase();

    if (
      !imageStats.isFile() ||
      !supportedImageExtensions.has(extension)
    ) {
      throw new Error(
        `Desteklenmeyen görsel: ${imagePath}`,
      );
    }

    const normalizedPath =
      process.platform === "win32"
        ? resolve(imagePath).toLowerCase()
        : resolve(imagePath);

    if (uniquePaths.has(normalizedPath)) {
      throw new Error(
        `Aynı görsel iki kez listelenmiş: ${imagePath}`,
      );
    }

    uniquePaths.add(normalizedPath);

    const stem = basename(
      imagePath,
      extension,
    ).toLowerCase();

    if (stems.has(stem)) {
      throw new Error(
        `Aynı temel ada sahip birden fazla kaynak var: ${stem}. Kaynak klasörü temizlenmeli.`,
      );
    }

    stems.add(stem);
  }

  return imagePaths;
}

function normalizePrices(prices) {
  if (
    !Array.isArray(prices) ||
    prices.length === 0
  ) {
    throw new Error(
      "En az bir fiyat seçeneği gerekli.",
    );
  }

  const normalized = prices.map(
    (item, index) => {
      const label = requireText(
        item?.label,
        `prices[${index}].label`,
      );
      const price = requireText(
        item?.price,
        `prices[${index}].price`,
      );

      if (
        !/^\$(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{2})?$/.test(
          price,
        )
      ) {
        throw new Error(
          `${price} geçerli USD fiyat formatında değil. Örnek: $2,700`,
        );
      }

      return {
        label,
        price,
        featured: item.featured === true,
      };
    },
  );

  const featuredCount = normalized.filter(
    (item) => item.featured,
  ).length;

  if (featuredCount > 1) {
    throw new Error(
      "Yalnızca bir fiyat featured olabilir.",
    );
  }

  if (featuredCount === 0) {
    normalized[0].featured = true;
  }

  return normalized;
}

function normalizeManifest(manifest) {
  const name = requireText(
    manifest.name,
    "name",
    3,
  );
  const slug =
    manifest.slug?.trim() || slugify(name);

  if (
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(
      slug,
    )
  ) {
    throw new Error(
      "slug yalnızca küçük harf, rakam ve tek tirelerden oluşmalı.",
    );
  }

  const productKey =
    manifest.productKey?.trim() ||
    keyFromSlug(slug);

  if (
    !/^[A-Za-z_][A-Za-z0-9_]*$/.test(
      productKey,
    )
  ) {
    throw new Error(
      "productKey geçerli bir JavaScript anahtarı olmalı.",
    );
  }

  const style = requireText(
    manifest.style,
    "style",
  );

  if (!Object.hasOwn(styleNames, style)) {
    throw new Error(
      "style modern veya luxury-classic olmalı.",
    );
  }

  const rawCategory = requireText(
    manifest.category,
    "category",
  );
  const category =
    categoryAliases[rawCategory];

  if (!category) {
    throw new Error(
      "category sofa-sets, living-rooms, dining-rooms, bedrooms veya tv-units olmalı.",
    );
  }

  const requiredNameSuffix = {
    "living-rooms": "Sofa Set",
    "dining-rooms": "Dining Room Set",
    bedrooms: "Bedroom Set",
    "tv-units": "TV Unit",
  }[category.dataCategory];

  if (
    requiredNameSuffix &&
    !name.endsWith(requiredNameSuffix)
  ) {
    throw new Error(
      `Ürün adı "${requiredNameSuffix}" ile bitmeli. Örnek: Verona ${requiredNameSuffix}`,
    );
  }

  const orderModel = requireText(
    manifest.orderModel,
    "orderModel",
  );

  if (orderModel !== "made-to-order") {
    throw new Error(
      "orderModel made-to-order olmalı. VIRELLAART ürünleri fiziksel stok yerine sipariş onayından sonra üretilir.",
    );
  }

  const imagePrefix =
    manifest.imagePrefix?.trim() || slug;

  if (
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(
      imagePrefix,
    )
  ) {
    throw new Error(
      "imagePrefix URL güvenli olmalı.",
    );
  }

  return {
    name,
    slug,
    productKey,
    style,
    category,
    orderModel,
    imagePrefix,
    subtitle: requireText(
      manifest.subtitle,
      "subtitle",
      8,
    ),
    description: requireText(
      manifest.description,
      "description",
      80,
    ),
    prices: normalizePrices(manifest.prices),
    imageAlts: Array.isArray(
      manifest.imageAlts,
    )
      ? manifest.imageAlts.map(
          (alt, index) =>
            requireText(
              alt,
              `imageAlts[${index}]`,
              12,
            ),
        )
      : undefined,
    commitMessage:
      manifest.commitMessage?.trim() ||
      `feat: add ${name}`,
  };
}

function buildRoute(product) {
  if (product.style === "modern") {
    const routeParts = [
      "collections",
      "modern",
      product.category.routeCategory,
      product.slug,
    ];

    return {
      routeParts,
      filePath: join(
        projectRoot,
        "src",
        "pages",
        ...routeParts.slice(0, -1),
        `${product.slug}.astro`,
      ),
      componentImport:
        "../../../../components/ProductTemplate.astro",
      dataImport:
        "../../../../data/products",
    };
  }

  const routeParts = [
    product.category.dataCategory,
    product.slug,
  ];

  return {
    routeParts,
    filePath: join(
      projectRoot,
      "src",
      "pages",
      product.category.dataCategory,
      `${product.slug}.astro`,
    ),
    componentImport:
      "../../components/ProductTemplate.astro",
    dataImport: "../../data/products",
  };
}

function formatProductEntry(
  product,
  publicImagePaths,
  imageAlts,
  eol,
) {
  const lines = [
    `  ${product.productKey}: {`,
    `    name: ${JSON.stringify(product.name)},`,
    `    slug: ${JSON.stringify(product.slug)},`,
    `    category: ${JSON.stringify(product.category.dataCategory)},`,
    `    style: ${JSON.stringify(product.style)},`,
    `    orderModel: ${JSON.stringify(product.orderModel)},`,
    `    subtitle: ${JSON.stringify(product.subtitle)},`,
    `    description:`,
    `      ${JSON.stringify(product.description)},`,
    `    images: [`,
    ...publicImagePaths.map(
      (image) =>
        `      ${JSON.stringify(image)},`,
    ),
    `    ],`,
    `    imageAlts: {`,
    `      en: [`,
    ...imageAlts.map(
      (alt) =>
        `        ${JSON.stringify(alt)},`,
    ),
    `      ],`,
    `    },`,
    `    prices: [`,
    ...product.prices.flatMap((price) => [
      `      {`,
      `        label: ${JSON.stringify(price.label)},`,
      `        price: ${JSON.stringify(price.price)},`,
      ...(price.featured
        ? [`        featured: true,`]
        : []),
      `      },`,
    ]),
    `    ],`,
    `  },`,
  ];

  return lines.join(eol);
}

function createProductsSource(
  originalSource,
  productEntry,
) {
  const eol = originalSource.includes("\r\n")
    ? "\r\n"
    : "\n";
  const match = /\r?\n};\s*$/.exec(
    originalSource,
  );

  if (!match) {
    throw new Error(
      "products.ts kapanış noktası bulunamadı.",
    );
  }

  const beforeClosing = originalSource
    .slice(0, match.index)
    .replace(/\s*$/, "");

  return [
    beforeClosing,
    "",
    productEntry,
    "};",
    "",
  ].join(eol);
}

async function validateWebp(filePath) {
  const imageBuffer = await readFile(filePath);
  const metadata = await sharp(
    imageBuffer,
  ).metadata();

  if (
    metadata.format !== "webp" ||
    !metadata.width ||
    !metadata.height
  ) {
    throw new Error(
      `Geçersiz WebP: ${filePath}`,
    );
  }

  return metadata;
}

async function removeSourceImage(filePath) {
  const attempts = 6;

  for (
    let attempt = 1;
    attempt <= attempts;
    attempt += 1
  ) {
    try {
      await unlink(filePath);
      return;
    } catch (error) {
      const retryable =
        ["EBUSY", "EPERM"].includes(
          error?.code,
        ) && attempt < attempts;

      if (!retryable) {
        throw error;
      }

      await delay(attempt * 150);
    }
  }
}

async function stageImages(
  sourceImages,
  targetImages,
) {
  const stagingDirectory = await mkdtemp(
    join(
      tmpdir(),
      "virellaart-product-",
    ),
  );
  const stagedImages = [];

  try {
    for (
      let index = 0;
      index < sourceImages.length;
      index += 1
    ) {
      const source = sourceImages[index];
      const staged = join(
        stagingDirectory,
        basename(targetImages[index]),
      );

      if (
        extname(source).toLowerCase() ===
        ".webp"
      ) {
        await validateWebp(source);
        await copyFile(source, staged);
      } else {
        const outputInfo = await sharp(source)
          .rotate()
          .webp({
            quality: 85,
            effort: 5,
          })
          .toFile(staged);

        if (
          outputInfo.format !== "webp" ||
          !outputInfo.width ||
          !outputInfo.height
        ) {
          throw new Error(
            `WebP dönüşümü doğrulanamadı: ${source}`,
          );
        }
      }

      stagedImages.push(staged);
    }

    return {
      stagingDirectory,
      stagedImages,
    };
  } catch (error) {
    await rm(stagingDirectory, {
      recursive: true,
      force: true,
      maxRetries: 5,
      retryDelay: 100,
    });
    throw error;
  }
}

async function verifyRenderedProduct(
  product,
  route,
  targetImages,
) {
  const htmlPath = join(
    projectRoot,
    "dist",
    ...route.routeParts,
    "index.html",
  );
  const html = await readFile(
    htmlPath,
    "utf8",
  );
  const routePath =
    `/${route.routeParts.join("/")}/`;

  const requiredContent = [
    product.name,
    ...product.prices.map(
      (price) => price.price,
    ),
    ...targetImages.map(
      (image) => `/${basename(image)}`,
    ),
    `https://www.virellaart.com${routePath}`,
    `"availability":"https://schema.org/InStock"`,
    `data-order-model="made-to-order"`,
    "Made to order",
  ];

  for (const content of requiredContent) {
    if (!html.includes(content)) {
      throw new Error(
        `Render doğrulaması başarısız; bulunamadı: ${content}`,
      );
    }
  }

  const sitemap = await readFile(
    join(projectRoot, "dist", "sitemap.xml"),
    "utf8",
  );

  if (!sitemap.includes(routePath)) {
    throw new Error(
      "Ürün rotası sitemap.xml içinde bulunamadı.",
    );
  }

  return routePath;
}

async function createInitialManifest(
  targetArgument,
) {
  const target = resolve(
    projectRoot,
    targetArgument ||
      "product-import.json",
  );

  if (await exists(target)) {
    throw new Error(
      `Dosya zaten mevcut: ${target}`,
    );
  }

  const exampleManifest = JSON.parse(
    await readFile(
      exampleManifestFile,
      "utf8",
    ),
  );
  exampleManifest.$schema =
    normalizeRepositoryPath(
      join(
        projectRoot,
        "product-import.schema.json",
      ),
    );
  await writeFile(
    target,
    `${JSON.stringify(
      exampleManifest,
      null,
      2,
    )}\n`,
    "utf8",
  );
  console.log(
    `Ürün manifesti oluşturuldu: ${target}`,
  );
}

async function importProduct(
  manifestPath,
  flags,
) {
  await ensureProductsFileIsSafe();

  if (flags.commit || flags.publish) {
    await ensureGitWorkspaceIsClean();
  }

  const absoluteManifestPath = resolve(
    projectRoot,
    manifestPath,
  );
  const manifest = JSON.parse(
    await readFile(
      absoluteManifestPath,
      "utf8",
    ),
  );
  const product = normalizeManifest(
    manifest,
  );
  const sourceImages =
    await collectImages(manifest);
  const route = buildRoute(product);
  const originalProductsSource =
    await readFile(productsFile, "utf8");
  const eol =
    originalProductsSource.includes("\r\n")
      ? "\r\n"
      : "\n";
  const keyPattern = new RegExp(
    `^\\s{2}${product.productKey}:\\s*\\{`,
    "m",
  );

  if (
    keyPattern.test(originalProductsSource)
  ) {
    throw new Error(
      `productKey zaten mevcut: ${product.productKey}`,
    );
  }

  if (
    originalProductsSource.includes(
      `name: ${JSON.stringify(product.name)}`,
    )
  ) {
    throw new Error(
      `Ürün adı zaten mevcut: ${product.name}`,
    );
  }

  if (await exists(route.filePath)) {
    throw new Error(
      `Ürün rotası zaten mevcut: ${route.filePath}`,
    );
  }

  const padding = Math.max(
    2,
    String(sourceImages.length).length,
  );
  const targetImages = sourceImages.map(
    (_, index) =>
      join(
        publicDirectory,
        `${product.imagePrefix}-${String(
          index + 1,
        ).padStart(padding, "0")}.webp`,
      ),
  );
  const targetPathSet = new Set(
    targetImages.map((target) =>
      process.platform === "win32"
        ? resolve(target).toLowerCase()
        : resolve(target),
    ),
  );

  for (
    let index = 0;
    index < targetImages.length;
    index += 1
  ) {
    const source = sourceImages[index];
    const target = targetImages[index];
    const normalizedSource =
      process.platform === "win32"
        ? resolve(source).toLowerCase()
        : resolve(source);

    if (
      targetPathSet.has(normalizedSource) &&
      !isSamePath(source, target)
    ) {
      throw new Error(
        "Bir kaynak görsel başka bir görselin hedef adıyla çakışıyor. Kaynakları incoming alt klasörüne taşıyın.",
      );
    }

    if (
      (await exists(target)) &&
      !isSamePath(source, target)
    ) {
      throw new Error(
        `Hedef görsel zaten mevcut: ${target}`,
      );
    }
  }

  const imageAlts =
    product.imageAlts ??
    sourceImages.map(
      (_, index) =>
        `${product.name} product view ${index + 1} of ${sourceImages.length}`,
    );

  if (
    imageAlts.length !==
    sourceImages.length
  ) {
    throw new Error(
      "imageAlts sayısı görsel sayısıyla aynı olmalı.",
    );
  }

  const publicImagePaths = targetImages.map(
    (target) =>
      `/${basename(target)}`,
  );
  const productEntry = formatProductEntry(
    product,
    publicImagePaths,
    imageAlts,
    eol,
  );
  const nextProductsSource =
    createProductsSource(
      originalProductsSource,
      productEntry,
    );
  const routeSource = [
    "---",
    `import ProductTemplate from ${JSON.stringify(route.componentImport)};`,
    `import { products } from ${JSON.stringify(route.dataImport)};`,
    "",
    `const product = products.${product.productKey};`,
    "---",
    "",
    "<ProductTemplate product={product} />",
    "",
  ].join(eol);

  console.log(
    [
      "",
      "VIRELLAART ÜRÜN PLANI",
      "----------------------",
      `Ürün: ${product.name}`,
      `Koleksiyon: ${styleNames[product.style]}`,
      `Kategori: ${product.category.routeCategory}`,
      "Üretim modeli: sipariş üzerine üretim",
      `Rota: /${route.routeParts.join("/")}/`,
      `Görsel: ${sourceImages.length}`,
      `Fiyat seçeneği: ${product.prices.length}`,
    ].join("\n"),
  );

  if (!product.imageAlts) {
    console.warn(
      "UYARI: imageAlts verilmedi; otomatik genel alt metinler oluşturuldu.",
    );
  }

  if (flags.dryRun) {
    console.log(
      "Dry-run başarılı. Hiçbir dosya değiştirilmedi.",
    );
    return;
  }

  const {
    stagingDirectory,
    stagedImages,
  } = await stageImages(
    sourceImages,
    targetImages,
  );
  const createdTargets = [];
  let productsWritten = false;
  let routeWritten = false;
  let routePath;

  try {
    for (
      let index = 0;
      index < targetImages.length;
      index += 1
    ) {
      if (
        isSamePath(
          sourceImages[index],
          targetImages[index],
        )
      ) {
        continue;
      }

      await copyFile(
        stagedImages[index],
        targetImages[index],
        fsConstants.COPYFILE_EXCL,
      );
      createdTargets.push(
        targetImages[index],
      );
    }

    await writeFile(
      productsFile,
      nextProductsSource,
      "utf8",
    );
    productsWritten = true;

    await mkdir(dirname(route.filePath), {
      recursive: true,
    });
    await writeFile(
      route.filePath,
      routeSource,
      {
        encoding: "utf8",
        flag: "wx",
      },
    );
    routeWritten = true;

    await runCommand("npm", [
      "run",
      "build:astro",
    ]);
    await runCommand("npm", [
      "run",
      "check:links",
    ]);
    routePath =
      await verifyRenderedProduct(
        product,
        route,
        targetImages,
      );
  } catch (error) {
    if (productsWritten) {
      await writeFile(
        productsFile,
        originalProductsSource,
        "utf8",
      );
    }

    if (routeWritten) {
      await rm(route.filePath, {
        force: true,
      });
    }

    for (const target of createdTargets) {
      await rm(target, {
        force: true,
      });
    }

    console.error(
      "Ürün ekleme geri alındı; kaynak görseller korundu.",
    );
    throw error;
  } finally {
    await rm(stagingDirectory, {
      recursive: true,
      force: true,
      maxRetries: 5,
      retryDelay: 100,
    });
  }

  const removeOriginalSources =
    async () => {
      const deletionFailures = [];

      for (
        let index = 0;
        index < sourceImages.length;
        index += 1
      ) {
        const source =
          sourceImages[index];

        if (
          isSamePath(
            source,
            targetImages[index],
          )
        ) {
          continue;
        }

        try {
          await removeSourceImage(source);
        } catch (error) {
          deletionFailures.push({
            source,
            error,
          });
        }
      }

      if (
        deletionFailures.length > 0
      ) {
        for (
          const failure of
          deletionFailures
        ) {
          console.error(
            `Kaynak silinemedi: ${failure.source}`,
            failure.error,
          );
        }

        throw new Error(
          "Ürün eklendi ve doğrulandı; ancak bazı kaynak görseller silinemedi.",
        );
      }
    };

  const changedFiles = [
    productsFile,
    route.filePath,
    ...targetImages,
  ];

  if (flags.publish) {
    const branchResult =
      await runCommand(
        "git",
        [
          "branch",
          "--show-current",
        ],
        {
          capture: true,
        },
      );
    const branch =
      branchResult.stdout.trim();

    if (branch !== "main") {
      throw new Error(
        "ERROR: Active branch must be main",
      );
    }
  }

  if (flags.commit || flags.publish) {
    await runCommand("git", [
      "add",
      "--",
      ...changedFiles.map(
        normalizeRepositoryPath,
      ),
    ]);
    await runCommand("git", [
      "diff",
      "--cached",
      "--check",
    ]);
    await runCommand("git", [
      "commit",
      "-m",
      product.commitMessage,
      "--",
      ...changedFiles.map(
        normalizeRepositoryPath,
      ),
    ]);
  }

  if (flags.publish) {
    await runCommand("git", [
      "push",
      "origin",
      "main",
    ]);

    const liveUrl =
      `https://www.virellaart.com${routePath}`;
    const verificationDeadline =
      Date.now() + 10 * 60 * 1000;
    let liveVerified = false;
    let lastLiveStatus =
      "Cloudflare yanıtı alınamadı";

    while (
      Date.now() < verificationDeadline
    ) {
      try {
        const response = await fetch(
          `${liveUrl}?verify=${Date.now()}`,
          {
            cache: "no-store",
            signal:
              AbortSignal.timeout(
                30_000,
              ),
          },
        );
        const liveHtml =
          await response.text();

        lastLiveStatus =
          `HTTP ${response.status}`;

        if (
          response.ok &&
          liveHtml.includes(product.name)
        ) {
          liveVerified = true;
          break;
        }
      } catch (error) {
        lastLiveStatus =
          error instanceof Error
            ? error.message
            : String(error);
      }

      await delay(8_000);
    }

    if (!liveVerified) {
      throw new Error(
        [
          "GitHub push başarılı; ancak Cloudflare Pages canlı doğrulaması 10 dakika içinde tamamlanmadı.",
          `URL: ${liveUrl}`,
          `Son durum: ${lastLiveStatus}`,
          "Kaynak görseller korunuyor.",
        ].join("\n"),
      );
    }

    console.log(
      `Canlı ürün: ${liveUrl}`,
    );
  }

  await removeOriginalSources();

  console.log(
    [
      "",
      "ÜRÜN EKLEME TAMAMLANDI",
      "-----------------------",
      `Ürün: ${product.name}`,
      `Rota: ${routePath}`,
      `Görsel: ${targetImages.length} WebP`,
      "Build: başarılı",
      "İç bağlantılar: başarılı",
      `Git: ${
        flags.commit || flags.publish
          ? "commit oluşturuldu"
          : "değişiklikler commit edilmedi"
      }`,
      `Yayın: ${
        flags.publish
          ? "canlı"
          : "yapılmadı"
      }`,
    ].join("\n"),
  );
}

async function main() {
  const args = process.argv.slice(2);

  if (
    args.includes("--help") ||
    args.length === 0
  ) {
    printUsage();
    return;
  }

  if (args.includes("--init")) {
    const initIndex = args.indexOf("--init");
    const target =
      args[initIndex + 1]?.startsWith("--")
        ? undefined
        : args[initIndex + 1];

    if (
      initIndex !== 0 ||
      args.length !== (target ? 2 : 1)
    ) {
      throw new Error(
        "--init tek başına kullanılmalı. Örnek: npm run product:init",
      );
    }

    await createInitialManifest(target);
    return;
  }

  let manifestOptionCount = 0;

  for (
    let index = 0;
    index < args.length;
    index += 1
  ) {
    const argument = args[index];

    if (argument === "--manifest") {
      manifestOptionCount += 1;
      index += 1;

      if (
        !args[index] ||
        args[index].startsWith("--")
      ) {
        throw new Error(
          "--manifest için bir dosya gerekli.",
        );
      }

      continue;
    }

    if (
      ![
        "--dry-run",
        "--commit",
        "--publish",
      ].includes(argument)
    ) {
      throw new Error(
        `Bilinmeyen seçenek: ${argument}`,
      );
    }
  }

  if (manifestOptionCount !== 1) {
    throw new Error(
      "--manifest tam olarak bir kez kullanılmalı.",
    );
  }

  const manifestPath = optionValue(
    args,
    "--manifest",
  );

  if (!manifestPath) {
    throw new Error(
      "--manifest product-import.json gerekli.",
    );
  }

  const publish = args.includes(
    "--publish",
  );
  const commit = args.includes("--commit");
  const dryRun = args.includes("--dry-run");

  if (commit && publish) {
    throw new Error(
      "--commit ve --publish birlikte kullanılmaz; --publish zaten commit oluşturur.",
    );
  }

  if (
    dryRun &&
    (commit || publish)
  ) {
    throw new Error(
      "--dry-run, --commit veya --publish ile birlikte kullanılamaz.",
    );
  }

  await importProduct(manifestPath, {
    dryRun,
    commit,
    publish,
  });
}

main().catch((error) => {
  console.error(
    `\nVIRELLAART ürün yükleme hatası:\n${error.message}`,
  );
  process.exitCode = 1;
});
