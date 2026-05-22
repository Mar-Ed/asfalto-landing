/**
 * Script de compresión masiva de imágenes PNG → WebP
 * Usa `sharp` (ya instalado por Next.js) para procesar todos los PNG en /public
 *
 * Uso: node scripts/compress-images.mjs
 *
 * Resultado:
 *  - Genera archivos .webp junto a cada .png (calidad 78, max 1920px de ancho)
 *  - Elimina los PNG originales
 */

import sharp from "sharp";
import { readdir, unlink, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, "..", "public");
const WEBP_QUALITY = 78;
const MAX_WIDTH = 1920;

// Formatos de entrada a procesar
const INPUT_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

/**
 * Recursivamente obtiene todos los archivos de imagen en un directorio
 */
async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      const nested = await getImageFiles(fullPath);
      files.push(...nested);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (INPUT_EXTENSIONS.has(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

/**
 * Formatea bytes a una string legible (KB/MB)
 */
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  console.log("🔍 Buscando imágenes en /public...\n");

  const files = await getImageFiles(PUBLIC_DIR);

  if (files.length === 0) {
    console.log("✅ No se encontraron imágenes para procesar.");
    return;
  }

  console.log(`📁 Se encontraron ${files.length} imágenes para comprimir.\n`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let processed = 0;
  let skipped = 0;
  const errors = [];

  for (const filePath of files) {
    const ext = extname(filePath).toLowerCase();
    const nameWithoutExt = basename(filePath, ext);
    const dir = dirname(filePath);
    const outputPath = join(dir, `${nameWithoutExt}.webp`);

    try {
      const originalStats = await stat(filePath);
      const originalSize = originalStats.size;

      // Obtener metadata de la imagen
      const metadata = await sharp(filePath).metadata();
      const { width = 0 } = metadata;

      // Comprimir: redimensionar si es mayor a MAX_WIDTH, convertir a WebP
      const sharpInstance = sharp(filePath);

      if (width > MAX_WIDTH) {
        sharpInstance.resize(MAX_WIDTH, undefined, {
          withoutEnlargement: true,
          kernel: sharp.kernel.lanczos3,
        });
      }

      await sharpInstance
        .webp({ quality: WEBP_QUALITY, effort: 4 })
        .toFile(outputPath);

      const newStats = await stat(outputPath);
      const newSize = newStats.size;
      const saving = originalSize - newSize;
      const savingPct = ((saving / originalSize) * 100).toFixed(1);

      totalOriginalSize += originalSize;
      totalNewSize += newSize;

      console.log(
        `  ✅ ${basename(filePath).padEnd(50)} ${formatBytes(originalSize).padStart(10)} → ${formatBytes(newSize).padStart(10)} (-${savingPct}%)`
      );

      // Eliminar el PNG/JPG original
      await unlink(filePath);
      processed++;
    } catch (err) {
      console.error(`  ❌ Error procesando ${basename(filePath)}: ${err.message}`);
      errors.push({ file: filePath, error: err.message });
      skipped++;
    }
  }

  console.log("\n" + "─".repeat(80));
  console.log("📊 RESUMEN DE COMPRESIÓN");
  console.log("─".repeat(80));
  console.log(`  ✅ Imágenes procesadas : ${processed}`);
  console.log(`  ❌ Errores             : ${skipped}`);
  console.log(`  📦 Tamaño original     : ${formatBytes(totalOriginalSize)}`);
  console.log(`  🗜️  Tamaño final        : ${formatBytes(totalNewSize)}`);
  console.log(
    `  💾 Ahorro total        : ${formatBytes(totalOriginalSize - totalNewSize)} (${(((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100).toFixed(1)}%)`
  );

  if (errors.length > 0) {
    console.log("\n⚠️  Archivos con error:");
    errors.forEach(({ file, error }) =>
      console.log(`  - ${basename(file)}: ${error}`)
    );
  }

  console.log("\n🎉 ¡Compresión completada! Recuerda actualizar las rutas .png → .webp en el código.");
}

main().catch((err) => {
  console.error("Error fatal en el script:", err);
  process.exit(1);
});
