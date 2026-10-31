// Usage : node tools/optimize-images.mjs <dossier-source> <dossier-sortie> [largeur=900] [qualité=72]
// Convertit JPG/PNG en WebP léger (largeur max, rotation EXIF respectée).
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { join, parse } from 'node:path';

const [src, out, w = '900', q = '72'] = process.argv.slice(2);
if (!src || !out) { console.error('Usage: node tools/optimize-images.mjs <src> <out> [largeur] [qualité]'); process.exit(1); }
mkdirSync(out, { recursive: true });
for (const f of readdirSync(src)) {
  if (!/\.(jpe?g|png)$/i.test(f)) continue;
  const { name } = parse(f);
  await sharp(join(src, f)).rotate().resize({ width: +w, withoutEnlargement: true })
    .webp({ quality: +q, effort: 5 }).toFile(join(out, name + '.webp'));
}
console.log('ok');
