// Génère les logos provisoires NABAT et Origin by NABAT en SVG pur (texte converti en tracés).
// Usage : node tools/make-logos.mjs   →   assets/brand/*.svg + *.png
// Quand le vrai logo (PNG) est disponible : node tools/vectorize-logo.mjs <logo.png> <sortie.svg>
import opentype from 'opentype.js';
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const NM = 'node_modules/@fontsource';
const load = (p) => { const b = readFileSync(p); return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength)); };
const cinzel = load(`${NM}/cinzel/files/cinzel-latin-600-normal.woff`);
const cormI  = load(`${NM}/cormorant-garamond/files/cormorant-garamond-latin-400-italic.woff`);
const jost   = load(`${NM}/jost/files/jost-latin-500-normal.woff`);
const amiri  = load(`${NM}/amiri/files/amiri-arabic-700-normal.woff`);

// Texte → tracé SVG centré en x=cx, ligne de base y, avec espacement de lettres (tracking, en 1/1000 em)
function textPath(font, text, cx, y, size, tracking = 0, rtl = false) {
  const glyphs = [...text].map((ch) => font.charToGlyph(ch)); // glyphe par glyphe (pas de shaping : formes arabes données explicitement)
  const sc = size / font.unitsPerEm, tr = tracking / 1000 * size;
  let w = 0; const adv = glyphs.map((g, i) => { const a = g.advanceWidth * sc + (i < glyphs.length - 1 ? tr : 0); w += a; return a; });
  let x = cx - w / 2; let d = '';
  const order = rtl ? [...glyphs.keys()].reverse() : [...glyphs.keys()];
  if (rtl) { x = cx - w / 2; }
  let cur = x;
  for (const i of order) { const g = glyphs[i]; d += g.getPath(cur, y, size).toPathData(2); cur += adv[i]; }
  return { d, w };
}

// Épi de blé : tige + paires de grains + grain terminal. Boîte 100 x 150.
function wheat(cx, top, h) {
  const s = h / 150, f = (n) => (n * s).toFixed(2);
  const grain = (x, y, len, wid, ang) => `<path transform="translate(${f(x)} ${f(y)}) rotate(${ang})" d="M0 0C${f(wid)} ${f(-len*.25)} ${f(wid)} ${f(-len*.75)} 0 ${f(-len)}C${f(-wid)} ${f(-len*.75)} ${f(-wid)} ${f(-len*.25)} 0 0Z"/>`;
  let g = '';
  const ys = [118, 99, 80, 61, 42];
  ys.forEach((y, i) => { const L = 30 - i * 1.6, W = 8.6 - i * .5; g += grain(50 + 0.6, y, L, W, -38) + grain(50 - 0.6, y, L, W, 38); });
  g += grain(50, 26, 26, 7, 0);
  const stem = `<path d="M${f(50)} ${f(150)}V${f(30)}" stroke-width="${(2.2*s).toFixed(2)}" stroke-linecap="round" fill="none" class="stem"/>`;
  return { g: `<g transform="translate(${(cx - 50*s).toFixed(2)} ${top})">${stem}<g class="gr">${g}</g></g>` };
}

const PAL = {
  light: { ink: '#1E3320', accent: '#B09A55', sub: '#7A7060' },   // pour fonds clairs
  dark:  { ink: '#F5F0E8', accent: '#C8B577', sub: '#CCC8BC' },   // pour fonds foncés
  mono:  { ink: '#000000', accent: '#000000', sub: '#000000' },
};

function nabat(variant, { tagline = true, w = 520 } = {}) {
  const c = PAL[variant], H = tagline ? 420 : 380;
  const wh = wheat(w / 2, 14, 130);
  const word = textPath(cinzel, 'NABAT', w / 2, 262, 92, 170);
  const ar = textPath(amiri, '\uFEE7\uFE92\uFE96', w / 2, 326, 58, 0, true);
  const tg = textPath(jost, 'BOULANGERIE · CAFÉ · CULTURE', w / 2, 388, 15, 330);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${H}" role="img" aria-label="NABAT">
<title>NABAT</title>
<style>.stem{stroke:${c.ink}}.gr{fill:${c.accent}}</style>
${wh.g}
<path fill="${c.ink}" d="${word.d}"/>
<path fill="${c.accent}" d="${ar.d}"/>
${tagline ? `<path fill="${c.sub}" d="${tg.d}"/>` : ''}
</svg>`;
}

function mark(variant) {
  const c = PAL[variant]; const wh = wheat(60, 6, 130);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 142" role="img" aria-label="NABAT"><title>NABAT</title>
<style>.stem{stroke:${c.ink}}.gr{fill:${c.accent}}</style>${wh.g}</svg>`;
}

function horizontal(variant) {
  const c = PAL[variant], W = 560, H = 140;
  const wh = wheat(52, 6, 128);
  const word = textPath(cinzel, 'NABAT', 0, 0, 78, 170);
  const ar = textPath(amiri, '\uFEE7\uFE92\uFE96', 0, 0, 44, 0, true);
  const wx = 120 + word.w / 2;
  const w2 = textPath(cinzel, 'NABAT', wx, 82, 78, 170), a2 = textPath(amiri, '\uFEE7\uFE92\uFE96', wx, 128, 44, 0, true);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.ceil(120 + word.w + 8)} ${H}" role="img" aria-label="NABAT"><title>NABAT</title>
<style>.stem{stroke:${c.ink}}.gr{fill:${c.accent}}</style>${wh.g}
<path fill="${c.ink}" d="${w2.d}"/><path fill="${c.accent}" d="${a2.d}"/></svg>`;
}

function origin(variant, { baseline = true } = {}) {
  const c = PAL[variant], W = 560, H = baseline ? 330 : 290;
  const wh = wheat(W / 2, 6, 92);
  const o = textPath(cinzel, 'ORIGIN', W / 2, 190, 84, 220);
  const by = textPath(cormI, 'by NABAT', W / 2, 246, 44, 40);
  const bl = textPath(jost, 'CHEF TO CHEF', W / 2, 306, 17, 420);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Origin by NABAT"><title>Origin by NABAT</title>
<style>.stem{stroke:${c.ink}}.gr{fill:${c.accent}}</style>${wh.g}
<path fill="${c.ink}" d="${o.d}"/>
<path fill="${c.accent}" d="${by.d}"/>
${baseline ? `<path fill="${c.sub}" d="${bl.d}"/>` : ''}
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
// PNG de prévisualisation / usage (fond transparent)
for (const n of ['nabat-stacked-light', 'nabat-stacked-dark', 'origin-light', 'origin-dark']) {
  await sharp(Buffer.from(files[n]), { density: 300 }).resize({ width: 1600 }).png().toFile(`${out}/${n}.png`);
}
// Favicon : épi sable sur carré vert
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1E3320"/><g transform="translate(14 6) scale(.28)">${wheat(50, 0, 150).g.replace('class="stem"', 'stroke="#C8B577"').replace('class="gr"', 'fill="#C8B577"')}</g></svg>`;
writeFileSync(`${out}/favicon.svg`, fav);
// Image de partage 1200x630 (réseaux, WhatsApp, e-mail)
const bg = await sharp('assets/img/facade/hero-bread.webp').resize(1200, 630, { fit: 'cover' }).modulate({ brightness: 0.5 }).toBuffer();
const lg = await sharp(Buffer.from(files['nabat-stacked-dark']), { density: 200 }).resize({ height: 420 }).png().toBuffer();
await sharp(bg).composite([{ input: lg, gravity: 'center' }]).jpeg({ quality: 84 }).toFile(`${out}/share.jpg`);
console.log(Object.keys(files).length + ' SVG + 4 PNG + favicon + share');
