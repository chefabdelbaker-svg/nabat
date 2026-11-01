// Générateur du site NABATE : écrit /en/, /fr/, /ar/, /charte/, robots, sitemap, CSV.
// Usage : npm run build   (Node ≥ 18, dépendance : sharp, uniquement pour lire les dimensions des images)
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import sharp from 'sharp';
import { ctx, PAGES, esc } from './src/layout.mjs';
import { facade } from './src/facade.mjs';
import { originHome, catalogue, laboratory, partners, collaborate, pricing, start } from './src/origin.mjs';
import { maison, menu } from './src/maison.mjs';
import { charte } from './src/charte.mjs';

const B = JSON.parse(readFileSync('src/brand.json', 'utf8'));
const cat = JSON.parse(readFileSync('src/data/catalogue.json', 'utf8'));

// Dimensions réelles des images (évite le décalage de mise en page au chargement)
const dims = {};
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
for (const f of walk('assets').filter((f) => /\.(webp|png|jpe?g)$/.test(f))) {
  const m = await sharp(f).metadata();
  dims[f.replace(/^assets\//, '')] = { w: m.width, h: m.height };
}
const exists = (p) => existsSync(join('assets', p));

// Noms de produits par langue (pour la sélection côté navigateur)
const names = {};
for (const l of B.site.langs) {
  names[l] = {};
  cat.families.forEach((f) => f.items.forEach((i) => { names[l][i.code] = i.name[l]; }));
}
const data = { cat, names };

const write = (p, s) => { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, s); };
const RENDER = { home: facade, maison, menu, origin: originHome, catalogue, laboratory, partners, collaborate, pricing, start };

let n = 0;
for (const lang of B.site.langs) {
  for (const id of Object.keys(PAGES)) {
    const c = ctx(B, lang, id, { dims, exists });
    write(`${lang}/${PAGES[id]}index.html`, RENDER[id](c, data));
    n++;
  }
  // CSV des codes (BOM pour Excel, y compris en arabe)
  const q = (s) => `"${String(s).replace(/"/g, '""')}"`;
  const onQuote = { en: 'On quote', fr: 'Sur devis', ar: 'عند الطلب' }[lang];
  const head = { en: ['Code', 'Product', 'Family', 'Price'], fr: ['Code', 'Produit', 'Famille', 'Prix'], ar: ['الرمز', 'المنتج', 'الفئة', 'السعر'] }[lang];
  const rows = [head.map(q).join(',')].concat(cat.families.flatMap((f) => f.items.map((i) => [i.code, i.name[lang], f.name[lang], onQuote].map(q).join(','))));
  write(`assets/downloads/nabat-codes-${lang}.csv`, '﻿' + rows.join('\r\n') + '\r\n');
}

// Racine : redirection vers la langue par défaut (HTML pur, sans JavaScript)
const d0 = B.site.defaultLang;
write('index.html', `<!doctype html>
<html lang="${d0}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>NABATE</title><meta name="robots" content="${B.site.indexable ? 'index,follow' : 'noindex,nofollow'}">
<link rel="canonical" href="${B.site.url}/${d0}/"><meta http-equiv="refresh" content="0;url=${d0}/">
${B.site.langs.map((l) => `<link rel="alternate" hreflang="${l}" href="${B.site.url}/${l}/">`).join('')}
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101010;color:#ebe2d8;font:16px system-ui,sans-serif;text-align:center}a{color:#c9a961;display:inline-block;padding:14px 18px;min-width:48px}</style></head>
<body><main><img src="assets/brand/nabat-stacked-dark.svg" alt="NABATE" width="260" height="210"><p>${B.site.langs.map((l) => `<a href="${l}/" hreflang="${l}">${{ en: 'English', fr: 'Français', ar: 'العربية' }[l]}</a>`).join('')}</p></main></body></html>
`);

// 404
write('404.html', `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="${B.site.url}/">
<title>NABATE — 404</title><meta name="robots" content="noindex">
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101010;color:#ebe2d8;font:16px system-ui,sans-serif;text-align:center;padding:24px}a{color:#c9a961;display:inline-block;padding:14px 18px;min-width:48px}</style></head>
<body><main><img src="assets/brand/nabat-stacked-dark.svg" alt="NABATE" width="260" height="210"><h1 style="font-weight:400">404</h1><p>The caravan took another road. · La caravane a pris une autre route. · القافلة سلكت طريقًا آخر.</p>
<p><a href="en/">English</a><a href="fr/">Français</a><a href="ar/">العربية</a></p></main></body></html>
`);

// Charte (interne)
write('charte/index.html', charte(B));

// robots + sitemap
write('robots.txt', B.site.indexable ? `User-agent: *\nAllow: /\nSitemap: ${B.site.url}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');
const urls = B.site.langs.flatMap((l) => Object.values(PAGES).map((p) => ({ l, p })));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.map(({ l, p }) => `<url><loc>${B.site.url}/${l}/${p}</loc>${B.site.langs.map((a) => `<xhtml:link rel="alternate" hreflang="${a}" href="${B.site.url}/${a}/${p}"/>`).join('')}</url>`).join('\n')}\n</urlset>\n`);
write('.nojekyll', '');
console.log(`OK — ${n} pages (${B.site.langs.length} langues × ${Object.keys(PAGES).length}) + charte, robots, sitemap, CSV`);
