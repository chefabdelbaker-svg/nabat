// Page « charte graphique » (usage interne, noindex) : logos, couleurs, typographies, usages.
import { esc } from './layout.mjs';

const SW = [
  ['Obsidian', '--obs-700', '#1A1A1A', 'Logos, cadres, fonds sombres de NABATE.', '#EBE2D8'],
  ['Stone', '--stone-200', '#EBE2D8', 'Murs, fonds clairs, texte sur sombre.', '#1A1A1A'],
  ['Dune Gold', '--gold-500', '#C9A961', 'Filets, détails, lumière. Jamais en grandes surfaces.', '#1A1A1A'],
  ['Or foncé', '--gold-700', '#785D22', 'Texte accent sur fond clair (contraste AA).', '#EBE2D8'],
  ['Bleu pétrole', 'Origin · --obs-700', '#0E2A33', 'Espace professionnel Origin : fonds sombres.', '#F3F1EA'],
  ['Ivoire', 'Origin · --stone-200', '#F3F1EA', 'Origin : fonds clairs.', '#0E2A33'],
  ['Cuivre', 'Origin · --gold-500', '#B8734A', 'Origin : filets et détails uniquement.', '#F3F1EA']
];

export function charte(B) {
  const sw = SW.map(([n, v, hex, use, fg]) => `<div style="background:${hex};color:${fg}"><b>${n}</b>${hex}<br><code style="font-size:.74rem;opacity:.8">${v}</code><br><span style="font-size:.78rem;opacity:.9">${use}</span></div>`).join('');
  const lg = (f, bg, cap, extra = '') => `<figure style="background:${bg}"><img src="../assets/brand/${f}" alt="${esc(cap)}"${extra}><figcaption>${esc(cap)}</figcaption></figure>`;
  return `<!doctype html>
<html lang="fr" dir="ltr">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Charte graphique — NABATE</title>
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#14241a">
<link rel="icon" href="../assets/brand/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="../assets/css/tokens.css"><link rel="stylesheet" href="../assets/css/base.css"><link rel="stylesheet" href="../assets/css/pages.css">
</head>
<body class="charte" style="--bg:var(--obs-900)">
<header class="section deep" style="padding-block:90px 50px"><div class="wrap">
<p class="eyebrow">Charte graphique · version provisoire 2.0</p>
<h1>NABATE</h1>
<p class="lead" style="margin-block-start:18px">Logos, couleurs, typographies et règles d'usage. Le logo présenté ici est <strong>provisoire</strong> : il a été redessiné en vectoriel d'après la planche d'univers Maison NABATE. Il sera remplacé par la vectorisation du logo officiel dès réception du PNG.</p>
</div></header>

<section class="section deep" style="padding-block:40px 80px"><div class="wrap">
<p class="eyebrow">1 · Logos</p>
<h2>Deux marques, un seul système</h2>
<div class="lg-grid">
${lg('nabat-stacked-light.svg', '#EBE2D8', 'NABATE · version fond clair')}
${lg('nabat-stacked-dark.svg', '#1A1A1A', 'NABATE · version fond foncé')}
${lg('origin-light.svg', '#EBE2D8', 'Origin by NABATE · fond clair')}
${lg('origin-dark.svg', '#1A1A1A', 'Origin by NABATE · fond foncé')}
${lg('nabat-horizontal-light.svg', '#EBE2D8', 'Version horizontale · fond clair', ' style="max-height:90px"')}
${lg('nabat-horizontal-dark.svg', '#1A1A1A', 'Version horizontale · fond foncé', ' style="max-height:90px"')}
${lg('nabat-mark-light.svg', '#EBE2D8', 'Monogramme N · fond clair', ' style="max-height:130px"')}
${lg('nabat-mark-dark.svg', '#1A1A1A', 'Monogramme N · fond foncé', ' style="max-height:130px"')}
${lg('nabat-stacked-mono.svg', '#FFFFFF', 'Monochrome noir (gravure, tampon)', ' style="filter:none"')}
</div>
<div class="spec">
<div><small>Zone de protection</small>Laisser autour du logo un espace au moins égal à la hauteur de la lettre « N » de NABATE. Aucun texte ni image dans cette zone.</div>
<div><small>Tailles minimales</small>Logo vertical : 90 px de large à l'écran, 25 mm à l'impression. Logo horizontal : 120 px / 30 mm. Épi seul : 24 px (favicon, réseaux).</div>
<div><small>Choix de la version</small>Fond clair (crème, blanc, photo claire) → version « clair ». Fond vert ou photo sombre → version « foncé ». Gravure, tampon, fax → monochrome. Origin by NABATE s'utilise uniquement dans l'espace professionnel ; NABATE reste la marque signataire partout ailleurs.</div>
<div><small>À éviter</small>Déformer ou pivoter le logo · changer les couleurs hors charte · ajouter une ombre ou un effet · placer le logo sur une photo chargée sans voile vert · utiliser le drapeau saoudien pour la langue arabe (usage commercial interdit : on utilise la pastille verte « ع »).</div>
</div>
</div></section>

<section class="section deep" style="padding-block:40px 80px"><div class="wrap">
<p class="eyebrow">2 · Couleurs</p>
<h2>Obsidian, Stone, Dune Gold</h2>
<p class="lead" style="margin-block-start:14px">Palette issue de la planche d'univers « Maison NABATE » : la pierre, l'obsidienne, l'or de la dune. L'espace Origin garde sa charte propre (ivoire, bleu pétrole, cuivre). Toutes les valeurs vivent dans <code>assets/css/tokens.css</code>.</p>
<div class="sw">${sw}</div>
<div class="spec">
<div><small>Répartition conseillée</small>50 % Stone (respiration) · 35 % Obsidian (fonds sombres) · 10 % Dune Gold (filets) · 5 % photo. L'or ne porte jamais de texte long.</div>
<div><small>Contrastes</small>Texte Stone sur Obsidian : AAA. Texte Obsidian sur Stone : AAA. Dune Gold sur Obsidian : AA grand texte et éléments graphiques. Sur fond clair, le texte accent utilise l'or foncé (#785D22).</div>
</div>
</div></section>

<section class="section deep" style="padding-block:40px 80px"><div class="wrap">
<p class="eyebrow">3 · Typographies</p>
<h2>Trois voix, plus l'arabe</h2>
<div class="spec">
<div><small>Titres · Marcellus (400)</small><span style="font:500 2.4rem/1.1 var(--f-display);letter-spacing:.08em;color:var(--stone-200)">Le voyage du blé</span><br>Capitales évasées, élégantes. Toujours avec un espacement de lettres généreux. Jamais pour du texte courant.</div>
<div><small>Éditorial · Cormorant Garamond (400 / 500, italique)</small><span style="font:italic 400 2.2rem/1.2 var(--f-serif);color:var(--gold-400)">La naissance du pain.</span><br>Citations, signatures, chapôs, mots mis en valeur. L'italique est la voix du chef.</div>
<div><small>Texte et interface · Jost (400 / 500 / 600)</small><span style="font:500 1.1rem/1.5 var(--f-sans);color:var(--stone-200)">Boutons, étiquettes, navigation, formulaires, paragraphes.</span><br>Capitales avec espacement .2em pour les étiquettes courtes.</div>
<div><small>Arabe · Amiri (titres) et IBM Plex Sans Arabic (texte)</small><span lang="ar" dir="rtl" style="font:700 2.4rem/1.4 'Amiri',serif;color:var(--stone-200)">رحلة القمح، وولادة الخبز.</span><br>Pas d'espacement de lettres en arabe. Interlignage plus ouvert (1,8 à 1,9).</div>
<div><small>Hébergement</small>Toutes les polices sont auto-hébergées (<code>assets/fonts</code>, licence SIL OFL) : aucun appel à Google Fonts, donc plus rapide et conforme à la vie privée.</div>
</div>
</div></section>

<section class="section deep" style="padding-block:40px 80px"><div class="wrap">
<p class="eyebrow">4 · Deux niveaux, un seul site</p>
<h2>NABATE et Origin by NABATE</h2>
<div class="spec">
<div><small>Niveau 1 — NABATE</small>La façade de la marque : Stone, Obsidian et Dune Gold, arches, écrans à triangles, filet doré à cran, photographies chaudes. Émotion avant argumentaire : l'artisanat, la qualité, le chef.</div>
<div><small>Niveau 2 — Origin by NABATE</small>L'espace professionnel : plus sombre, plus structuré, cadres fins aux angles sable, grille catalogue. Baseline : <em>Chef to Chef</em> (écrite en entier, jamais « C2C »), gardée en anglais dans les trois langues.</div>
<div><small>Ton de voix</small>Direct, posé, généreux. Phrases courtes. Pas de superlatifs creux. Le passé fonde, les Nabatéens inspirent, le temps guide : on ne fait jamais du folklore ni du musée.</div>
<div><small>Remplacer le logo provisoire</small>Déposer le PNG du logo, puis <code>node tools/vectorize-logo.mjs logo.png assets/brand/nabat-officiel.svg --color=#1E3320</code>. Mettre le fichier obtenu à la place de ceux listés ci-dessus et relancer <code>npm run build</code>.</div>
</div>
</div></section>
<footer class="ft"><div class="wrap"><div class="legal" style="border:0;margin:0;padding:0"><span>© ${new Date().getFullYear()} NABATE · Document interne</span><a href="../en/">Voir le site →</a></div></div></footer>
</body>
</html>
`;
}
