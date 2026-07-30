import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const repositoryRoot = process.cwd();
const publicDirectory = path.resolve(
  repositoryRoot,
  "public",
);
const dryRun = process.argv.includes("--dry-run");
const inputArguments = process.argv
  .slice(2)
  .filter((argument) => argument !== "--dry-run");

const supportedExtensions = new Set([
  ".avif",
  ".gif",
  ".heic",
  ".heif",
  ".jpeg",
  ".jpg",
  ".png",
  ".tif",
  ".tiff",
]);

function normalizeRepositoryPath(filePath) {
  return path
    .relative(repositoryRoot, filePath)
    .split(path.sep)
    .join("/");
}

function assertInsidePublic(filePath) {
  const relativePath = path.relative(
    publicDirectory,
    filePath,
  );

  if (
    relativePath.startsWith("..") ||
    path.isAbsolute(relativePath)
  ) {
    throw new Error(
      `Only files inside public can be converted: ${filePath}`,
    );
  }
}

function getCommittedPublicFiles() {
  try {
    const output = execFileSync(
      "git",
      [
        "ls-tree",
        "-r",
        "--name-only",
        "HEAD",
        "--",
        "public",
      ],
      {
        cwd: repositoryRoot,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      },
    );

    return new Set(
      output
        .split(/\r?\n/)
        .map((file) => file.trim())
        .filter(Boolean),
    );
  } catch {
    return null;
  }
}

async function collectFiles(inputPath) {
  const resolvedPath = path.resolve(
    repositoryRoot,
    inputPath,
  );
  assertInsidePublic(resolvedPath);

  const stats = await fs.stat(resolvedPath);

  if (stats.isFile()) {
    return [resolvedPath];
  }

  if (!stats.isDirectory()) {
    return [];
  }

  const entries = await fs.readdir(
    resolvedPath,
    {
      withFileTypes: true,
    },
  );
  const nestedFiles = await Promise.all(
    entries.map((entry) =>
      collectFiles(
        path.join(resolvedPath, entry.name),
      ),
    ),
  );

  return nestedFiles.flat();
}

async function validateWebp(filePath) {
  const metadata = await sharp(filePath).metadata();

  if (
    metadata.format !== "webp" ||
    !metadata.width ||
    !metadata.height
  ) {
    throw new Error(
      `Invalid WebP output: ${filePath}`,
    );
  }
}

async function convertImage(sourcePath) {
  const extension = path
    .extname(sourcePath)
    .toLowerCase();

  if (!supportedExtensions.has(extension)) {
    return false;
  }

  const outputPath = sourcePath.slice(
    0,
    -extension.length,
  ) + ".webp";
  const relativeSource =
    normalizeRepositoryPath(sourcePath);
  const relativeOutput =
    normalizeRepositoryPath(outputPath);

  try {
    await fs.access(outputPath);

    if (dryRun) {
      console.log(
        `[dry-run] Collision: ${relativeOutput} already exists; preserve ${relativeSource}`,
      );
      return false;
    }

    await validateWebp(outputPath);
    throw new Error(
      `WebP target already exists: ${relativeOutput}. Rename ${relativeSource}; source preserved.`,
    );
  } catch (error) {
    if (error?.code !== "ENOENT") {
      throw error;
    }
  }

  if (dryRun) {
    console.log(
      `[dry-run] Convert ${relativeSource} -> ${relativeOutput}, verify, then remove source`,
    );
    return true;
  }

  const temporaryPath =
    `${outputPath}.tmp-${process.pid}-${Date.now()}.webp`;

  try {
    const outputInfo = await sharp(sourcePath)
      .rotate()
      .webp({
        quality: 85,
        effort: 5,
      })
      .toFile(temporaryPath);

    if (
      outputInfo.format !== "webp" ||
      !outputInfo.width ||
      !outputInfo.height
    ) {
      throw new Error(
        `Invalid WebP output: ${temporaryPath}`,
      );
    }

    await fs.rename(temporaryPath, outputPath);
    await fs.unlink(sourcePath);

    console.log(
      `Converted ${relativeSource} -> ${relativeOutput}; removed source`,
    );
    return true;
  } catch (error) {
    try {
      await fs.rm(temporaryPath, {
        force: true,
      });
    } catch (cleanupError) {
      console.warn(
        `Temporary file cleanup deferred: ${temporaryPath}`,
        cleanupError,
      );
    }

    throw error;
  }
}

async function main() {
  const committedPublicFiles =
    getCommittedPublicFiles();

  if (
    committedPublicFiles === null &&
    inputArguments.length === 0
  ) {
    console.log(
      "Git metadata is unavailable; skipping bulk image conversion in this build environment.",
    );
    return;
  }

  const inputs =
    inputArguments.length > 0
      ? inputArguments
      : [publicDirectory];
  const discoveredFiles = (
    await Promise.all(
      inputs.map((input) =>
        collectFiles(input),
      ),
    )
  )
    .flat()
    .sort((left, right) =>
      left.localeCompare(right),
    );

  const candidates = discoveredFiles.filter(
    (filePath) => {
      const repositoryPath =
        normalizeRepositoryPath(filePath);
      const extension = path
        .extname(filePath)
        .toLowerCase();

      return (
        supportedExtensions.has(extension) &&
        !committedPublicFiles?.has(repositoryPath)
      );
    },
  );

  if (candidates.length === 0) {
    console.log(
      "No new non-WebP photos found in public.",
    );
    return;
  }

  let convertedCount = 0;

  for (const candidate of candidates) {
    if (await convertImage(candidate)) {
      convertedCount += 1;
    }
  }

  console.log(
    `${dryRun ? "Planned" : "Completed"}: ${convertedCount} image(s).`,
  );
}

main().catch((error) => {
  console.error(
    "Image conversion failed. Source files were preserved.",
  );
  console.error(error);
  process.exitCode = 1;
});
