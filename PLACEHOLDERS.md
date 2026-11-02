# À remplacer / valider

- Contacts WhatsApp, téléphone, e-mail : valeurs fictives dans `src/brand.json`.
- Photo du chef : absente (cadre d'attente).
- Logos NABATE et Origin : provisoires (redessinés d'après le Brand Book).
- Images façade : générées par IA, illustratives.
- Catalogue, photos et partenaires d'Origin : repris d'OLBA en attendant le nouveau catalogue (marques tierces incluses). Fours visibles sur lab_a / lab_b.
- Affirmations « laboratoire », « fours professionnels », livraison : à valider.
- Mention Croi Bakehouse et chiffres du chef (20 ans, 5+ pays, 2019) : issus du profil, à confirmer.
- Pas de musique d'accueil (non intégrée).
- Site en `noindex` tant que `site.indexable` est `false`.

## Ajouts du 31/10
- Page « La Maison » (src/content-maison.mjs) : textes à valider (origine, qualité, chef, laboratoire en 4 étapes).
- Partenaire Bongard : simple mot-symbole en texte (pas de logo officiel). Obtenir le logo et l'accord de Bongard avant diffusion large ; l'affirmation « équipé par Bongard » est à confirmer.
- Vidéo d'ambiance du héros : générée par IA à partir de l'image d'univers (assets/video/hero.mp4), boucle de 10 s, sans son.
- Nom écrit : Maison NABATE (prononcé « Nabat »). Arabe : نبت.

## Ajouts du 1er novembre
- Photos pain / café / croissant : générées (Higgsfield, FLUX 3, référence = photo de l'intérieur). Remplaçables par de vraies photos (mêmes noms de fichiers dans assets/img/facade/).
- Audios de présentation (assets/audio/maison-*.mp3, origin-*.mp3, FR/EN/AR) : voix de synthèse ; textes dans src/audio-scripts.json. À réenregistrer si besoin.
- Page Menu : carte indicative sans prix (src/content-maison.mjs, bloc M2.menu) : à remplacer par la vraie carte.
- Ingrédients / partenaires de La Maison : repris de l'espace Origin (marques de l'ancien site OLBA, non confirmées pour NABATE) ; « Équipé par Bongard » à valider.
- Menu (2 nov) : repris de la carte OLBA (breakfast, boissons) et du catalogue Origin (photos et noms trilingues). Photos = celles d'Origin, donc issues du site OLBA : à remplacer par de vraies photos NABATE. Pas de porc (ni jambon ni lardons). Pas de prix.

## Menu principal (photos studio)
- 28 photos générées (FLUX, fond pierre ivoire, sans lieu ni logo) dans assets/img/menu/ : Boulangerie, Viennoiserie, Pâtisserie, Petit-déjeuner. Plus de photos reprises d'Origin/OLBA sur la page Menu.
- Sans porc, sans prix. Café et boissons restent en listes.
