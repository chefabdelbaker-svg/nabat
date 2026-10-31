// Vectorise un logo PNG/JPG (une couleur) en SVG propre, via potrace.
// Usage : node tools/vectorize-logo.mjs <logo.png> <sortie.svg> [--threshold=150] [--color=#1E3320] [--invert]
// Astuce : fournir le logo le plus grand possible, sombre sur fond clair (ou utiliser --invert si l'inverse).
import potrace from 'potrace';
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const [inp, out, ...flags] = process.argv.slice(2);
if (!inp || !out) { console.error('Usage: node tools/vectorize-logo.mjs <logo.png> <sortie.svg> [--threshold=150] [--color=#hex] [--invert]'); process.exit(1); }
const opt = Object.fromEntries(flags.map(f => f.replace(/^--/, '').split('=')).map(([k, v]) => [k, v ?? true]));
let img = sharp(inp).flatten({ background: '#ffffff' }).resize({ width: 2400, withoutEnlargement: false }).greyscale();
if (opt.invert) img = img.negate();
const buf = await img.png().toBuffer();
potrace.trace(buf, { threshold: +(opt.threshold || 150), turdSize: 4, optTolerance: 0.3, color: opt.color || '#000000', background: 'transparent' }, (err, svg) => {
  if (err) throw err; writeFileSync(out, svg); console.log('SVG écrit :', out);
});
