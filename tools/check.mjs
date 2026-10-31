// Contrôles qualité : npm run check  (nécessite : npm run build déjà fait)
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((f) => { if (f === 'node_modules' || f === '.git') return []; const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const files = walk('.');
let bad = 0; const fail = (m) => { bad++; console.log('✗ ' + m); };
// 1. Aucune trace d'OLBA
for (const f of files.filter((f) => /\.(html|css|js|mjs|json|svg|xml|txt|csv|md)$/.test(f) && !/package-lock|PLACEHOLDERS|check\.mjs|README/.test(f))) {
  const s = readFileSync(f, 'utf8');
  if (/olba|966507881567/i.test(s)) fail(`OLBA/ancien numéro dans ${f}`);
}
// 2. Liens et ressources locales
for (const f of files.filter((f) => f.endsWith('.html'))) {
  const s = readFileSync(f, 'utf8');
  for (const m of s.matchAll(/(?:href|src)="([^"#?:]+)(?:[#?][^"]*)?"/g)) {
    const u = m[1]; if (/^(https?|mailto|tel|data|\/\/)/.test(u)) continue;
    const p = resolve(dirname(f), u);
    if (!existsSync(p) && !existsSync(join(p, 'index.html'))) fail(`lien cassé ${u} dans ${f}`);
  }
  for (const m of s.matchAll(/<img\b[^>]*>/g)) if (!/\balt=/.test(m[0])) fail(`image sans alt dans ${f}`);
  for (const m of s.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) if (!/rel="[^"]*noopener/.test(m[0])) fail(`target=_blank sans rel dans ${f}`);
}
// 3. Poids des pages
for (const f of files.filter((f) => /^\.\/(en|fr|ar)\/.*\.html$/.test(f))) { const k = statSync(f).size / 1024; if (k > 400) fail(`page lourde ${f} (${k.toFixed(0)} ko)`); }
console.log(bad ? `\n${bad} problème(s)` : '✓ Tout est propre (OLBA, liens, alt, rel, poids)');
process.exit(bad ? 1 : 0);
