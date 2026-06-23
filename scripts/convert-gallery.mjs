import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import convert from "heic-convert";

const root = process.cwd();
const galleryDir = path.join(root, "public", "gallery");

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function convertGallery() {
  const files = await readdir(galleryDir);
  const heicFiles = files.filter((name) => path.extname(name).toLowerCase() === ".heic");

  if (heicFiles.length === 0) {
    console.log("No HEIC files found in /public/gallery.");
    return;
  }

  let convertedCount = 0;
  let skippedCount = 0;

  for (const heicFile of heicFiles) {
    const sourcePath = path.join(galleryDir, heicFile);
    const outputName = `${path.parse(heicFile).name}.jpg`;
    const outputPath = path.join(galleryDir, outputName);

    if (await exists(outputPath)) {
      skippedCount += 1;
      continue;
    }

    const inputBuffer = await readFile(sourcePath);
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: "JPEG",
      quality: 0.82,
    });

    await writeFile(outputPath, outputBuffer);
    convertedCount += 1;
    console.log(`Converted ${heicFile} -> ${outputName}`);
  }

  console.log(`Conversion complete. New JPG files: ${convertedCount}, skipped: ${skippedCount}`);
}

convertGallery().catch((error) => {
  console.error("Gallery conversion failed:", error);
  process.exitCode = 1;
});
