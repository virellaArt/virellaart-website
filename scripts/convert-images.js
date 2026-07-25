import fs from "fs";
import path from "path";
import sharp from "sharp";

const folder = "./public";

const supportedFormats = [
  ".png",
  ".jpg",
  ".jpeg",
  ".PNG",
  ".JPG",
  ".JPEG"
];

async function convertFolder(currentFolder) {
  const files = fs.readdirSync(currentFolder);

  for (const file of files) {
    const filePath = path.join(currentFolder, file);
    const stat = fs.statSync(filePath);

    // Klasör ise içine gir
    if (stat.isDirectory()) {
      await convertFolder(filePath);
      continue;
    }

    const ext = path.extname(file);

    // Desteklenmeyen formatları geç
    if (!supportedFormats.includes(ext)) continue;

    const outputPath = filePath.replace(ext, ".webp");

    // Aynı isimde webp varsa tekrar yapma
    if (fs.existsSync(outputPath)) {
      console.log(`Already exists: ${outputPath}`);
      continue;
    }

    await sharp(filePath)
      .webp({
        quality: 85
      })
      .toFile(outputPath);

    console.log(`Converted: ${filePath} → ${outputPath}`);
  }
}

convertFolder(folder)
  .then(() => {
    console.log("✅ WEBP dönüşümü tamamlandı.");
  })
  .catch((error) => {
    console.error("❌ Hata:", error);
  });