// Génère les logos provisoires NABATE et Origin by NABATE en SVG pur (texte converti en tracés).
// Usage : node tools/make-logos.mjs   →   assets/brand/*.svg + *.png
// Quand le vrai logo (PNG) est disponible : node tools/vectorize-logo.mjs <logo.png> <sortie.svg>
import opentype from 'opentype.js';
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const NM = 'node_modules/@fontsource';
const load = (p) => { const b = readFileSync(p); return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength)); };
const marc  = load(`${NM}/marcellus/files/marcellus-latin-400-normal.woff`);
const cormI = load(`${NM}/cormorant-garamond/files/cormorant-garamond-latin-400-italic.woff`);
const amiri = load(`${NM}/amiri/files/amiri-arabic-700-normal.woff`);

// Texte -> tracé SVG centré en x=cx (glyphe par glyphe ; formes arabes données explicitement)
function textPath(font, text, cx, y, size, tracking = 0, rtl = false) {
  const glyphs = [...text].map((ch) => font.charToGlyph(ch));
  const sc = size / font.unitsPerEm, tr = tracking / 1000 * size;
  let w = 0; const adv = glyphs.map((g, i) => { const a = g.advanceWidth * sc + (i < glyphs.length - 1 ? tr : 0); w += a; return a; });
  let cur = cx - w / 2, d = '';
  const order = rtl ? [...glyphs.keys()].reverse() : [...glyphs.keys()];
  for (const i of order) { d += glyphs[i].getPath(cur, y, size).toPathData(2); cur += adv[i]; }
  return { d, w };
}
// Filet doré à cran (signature de la marque)
const notch = (cx, y, w, color) => { const h = w / 2, n = w * .09; return `<path d="M${cx - h} ${y}H${cx - n * 1.4}L${cx - n * .75} ${y - n * .9}H${cx + n * .75}L${cx + n * 1.4} ${y}H${cx + h}" fill="none" stroke="${color}" stroke-width="1.6"/>`; };

const PAL = {
  light: { ink: '#1A1A1A', accent: '#B8944B', sub: '#6B645A' },
  dark:  { ink: '#EBE2D8', accent: '#C9A961', sub: '#CFC8BC' },
  mono:  { ink: '#000000', accent: '#000000', sub: '#000000' },
};
const PAL_O = {
  light: { ink: '#0E2A33', accent: '#B8734A', sub: '#46504F' },
  dark:  { ink: '#F3F1EA', accent: '#C98458', sub: '#D5DCDA' },
  mono:  { ink: '#000000', accent: '#000000', sub: '#000000' },
};

function nabat(variant, { tagline = true, w = 560 } = {}) {
  const c = PAL[variant], H = tagline ? 300 : 230;
  const ms = textPath(marc, 'MAISON', w / 2, 62, 24, 420);
  const word = textPath(marc, 'NABATE', w / 2, 168, 108, 230);
  const tg = textPath(marc, 'BAKERY & CAFÉ', w / 2, 224, 22, 400);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${H}" role="img" aria-label="Maison NABATE">
<title>Maison NABATE</title>
<path fill="${c.sub}" d="${ms.d}"/>
<path fill="${c.ink}" d="${word.d}"/>
${tagline ? `<path fill="${c.sub}" d="${tg.d}"/>${notch(w / 2, 272, 440, c.accent)}` : notch(w / 2, 200, 440, c.accent)}
</svg>`;
}

function mark(variant) {
  const c = PAL[variant];
  const n = textPath(marc, 'N', 60, 100, 118, 0);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 130" role="img" aria-label="NABATE"><title>NABATE</title>
<path fill="${c.accent}" d="${n.d}"/>${notch(60, 118, 100, c.accent)}</svg>`;
}

function horizontal(variant) {
  const c = PAL[variant];
  const word = textPath(marc, 'NABATE', 0, 0, 78, 220);
  const W = Math.ceil(word.w + 12), cx = W / 2;
  const w2 = textPath(marc, 'NABATE', cx, 78, 78, 220), a2 = textPath(amiri, '\uFEE7\uFE92\uFE96', cx, 124, 40, 0, true);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} 140" role="img" aria-label="NABATE"><title>NABATE</title>
<path fill="${c.ink}" d="${w2.d}"/><path fill="${c.accent}" d="${a2.d}"/></svg>`;
}

function origin(variant, { baseline = true } = {}) {
  const c = PAL_O[variant], W = 560, H = baseline ? 300 : 250;
  const o = textPath(marc, 'ORIGIN', W / 2, 120, 96, 260);
  const by = textPath(cormI, 'by NABATE', W / 2, 176, 44, 40);
  const bl = textPath(marc, 'CHEF TO CHEF', W / 2, 238, 20, 420);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Origin by NABATE"><title>Origin by NABATE</title>
<path fill="${c.ink}" d="${o.d}"/>
<path fill="${c.accent}" d="${by.d}"/>
${baseline ? `<path fill="${c.sub}" d="${bl.d}"/>${notch(W / 2, 276, 400, c.accent)}` : notch(W / 2, 214, 400, c.accent)}
</svg>`;
}

const out = 'assets/brand'; mkdirSync(out, { recursive: true });
const files = {};
for (const v of ['light', 'dark', 'mono']) {
  files[`nabat-stacked-${v}`] = nabat(v);
  files[`nabat-stacked-notag-${v}`] = nabat(v, { tagline: false });
  files[`nabat-horizontal-${v}`] = horizontal(v);
  files[`nabat-mark-${v}`] = mark(v);
  files[`origin-${v}`] = origin(v);
  files[`origin-notag-${v}`] = origin(v, { baseline: false });
}
for (const [n, svg] of Object.entries(files)) writeFileSync(`${out}/${n}.svg`, svg);
for (const n of ['nabat-stacked-light', 'nabat-stacked-dark', 'origin-light', 'origin-dark']) {
  await sharp(Buffer.from(files[n]), { density: 300 }).resize({ width: 1600 }).png().toFile(`${out}/${n}.png`);
}
// Favicon : N doré sur carré obsidian
const fn = textPath(marc, 'N', 32, 46, 44, 0);
writeFileSync(`${out}/favicon.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#1A1A1A"/><path fill="#C9A961" d="${fn.d}"/><path d="M14 54H27L29 51H35L37 54H50" fill="none" stroke="#C9A961" stroke-width="1.6"/></svg>`);
// Image de partage 1200x630
const bg = await sharp('assets/img/facade/hero-interior.webp').resize(1200, 630, { fit: 'cover' }).modulate({ brightness: 0.45 }).toBuffer();
const lg = await sharp(Buffer.from(files['nabat-stacked-dark']), { density: 200 }).resize({ height: 340 }).png().toBuffer();
await sharp(bg).composite([{ input: lg, gravity: 'center' }]).jpeg({ quality: 84 }).toFile(`${out}/share.jpg`);
console.log(Object.keys(files).length + ' SVG + 4 PNG + favicon + share');
