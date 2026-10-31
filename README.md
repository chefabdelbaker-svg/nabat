# NABATE — site façade (NABATE + Origin by NABATE)

Site statique, 3 langues (`/en/`, `/fr/`, `/ar/`), une URL par langue, sans JavaScript pour changer de langue.

## Modifier
- Textes : `src/content.mjs` (chaque texte = `L(en, fr, ar)`).
- Marque, contacts, URL : `src/brand.json`.
- Catalogue : `src/data/catalogue.json`.
- Couleurs / polices : `assets/css/tokens.css`.
- Puis : `npm install` (une fois), `npm run build`, `npm run check`.

## Remplacer
- Logo : `node tools/vectorize-logo.mjs logo.png assets/brand/nabat-officiel.svg --color=#1E3320`.
- Photo du chef : déposer `assets/img/facade/chef.webp`.
- Contacts : `src/brand.json` (WhatsApp, téléphone, e-mail).
- Mise en ligne publique : `site.indexable` à `true` dans `brand.json`, puis build.

Voir `PLACEHOLDERS.md` pour la liste complète. Charte : `/charte/` (interne).
