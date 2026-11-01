// Mise en page commune : <head>, en-tête, pied de page, barre de contact, helpers.
import { C } from './content.mjs';

export const PAGES = {
  home: '', maison: 'maison/', menu: 'menu/', origin: 'origin/', catalogue: 'origin/catalogue/', laboratory: 'origin/laboratory/',
  partners: 'origin/partners/', collaborate: 'origin/collaborate/', pricing: 'origin/pricing/', start: 'origin/start/'
};
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Contexte de rendu pour une page : langue, profondeur, résolveurs de chemins et de textes.
export function ctx(B, lang, pageId, extra = {}) {
  const path = PAGES[pageId];
  const depth = 1 + path.split('/').filter(Boolean).length; // /en/ = 1, /en/origin/ = 2…
  const root = '../'.repeat(depth);
  const t = (x) => (x && typeof x === 'object' && (lang in x) ? x[lang] : x);
  return {
    B, lang, pageId, path, depth, root, t, dims: extra.dims, exists: extra.exists,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    asset: (p) => root + 'assets/' + p,
    url: (id, l = lang) => root + l + '/' + PAGES[id],
    abs: (id, l = lang) => `${B.site.url}/${l}/${PAGES[id]}`,
    // <img> avec dimensions réelles (évite le saut de mise en page)
    img(p, alt = '', { cls = '', eager = false, sizes = '' } = {}) {
      const d = extra.dims[p] || {};
      return `<img${cls ? ` class="${cls}"` : ''} src="${root}assets/${p}" alt="${esc(alt)}"${d.w ? ` width="${d.w}" height="${d.h}"` : ''}${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}${sizes ? ` sizes="${sizes}"` : ''}>`;
    }
  };
}

export const ICON = {
  arrow: '<svg class="arr" viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
  wa: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.2 15.03l-.3-.18-3.1.82.83-3.02-.2-.31A8.1 8.1 0 0 1 12.04 3.8zm-3.1 3.9c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48 2.5 1.07 3 .86 3.54.8.54-.05 1.74-.71 1.98-1.4.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35s-1.74-.86-2.01-.96c-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57z"/></svg>',
  call: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.35 2.3.55 3.6.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.55 3.6a1 1 0 0 1-.25 1z"/></svg>',
  mail: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M3 5.5h18v13H3zM3.5 6l8.5 7 8.5-7"/></svg>',
  mark: '<svg viewBox="0 0 120 150" aria-hidden="true"><g fill="currentColor" opacity=".9"><path d="M60 8c5 8 7 17 0 28-7-11-5-20 0-28z"/><path d="M60 148V36" stroke="currentColor" stroke-width="2.4" fill="none"/></g></svg>'
};

// Drapeaux (FR, UK animés par CSS) et pastille arabe (jamais de drapeau saoudien).
const FLAG = {
  fr: '<span class="flag"><svg viewBox="0 0 3 2" aria-hidden="true"><rect width="1" height="2" fill="#0055A4"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg></span>',
  en: '<span class="flag"><svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#012169"/><path d="M0 0l60 40M60 0L0 40" stroke="#fff" stroke-width="8"/><path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" stroke-width="3"/><path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="13"/><path d="M30 0v40M0 20h60" stroke="#C8102E" stroke-width="8"/></svg></span>',
  ar: '<span class="flag ar"><b aria-hidden="true">ع</b></span>'
};
export function langSwitch(c, drawer = false) {
  return `<nav class="lang" aria-label="${esc(c.t(C.ui.langLabel))}">${c.B.site.langs.map((l) =>
    `<a href="${c.url(c.pageId, l)}" lang="${l}" hreflang="${l}" aria-label="${esc(C.ui.langNames[l])}" title="${esc(C.ui.langNames[l])}"${l === c.lang ? ' aria-current="true"' : ''}>${FLAG[l]}<span class="code">${C.ui.langNames[l]}</span></a>`).join('')}</nav>`;
}

export function head(c, { title, desc, ogImage }) {
  const { B, lang } = c;
  const alts = B.site.langs.map((l) => `<link rel="alternate" hreflang="${l}" href="${c.abs(c.pageId, l)}">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${c.abs(c.pageId, B.site.defaultLang)}">`;
  const img = `${B.site.url}/assets/brand/${ogImage || 'share.jpg'}`;
  const ld = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Organization', name: B.name, alternateName: B.nameAr,
    url: B.site.url + '/', logo: `${B.site.url}/assets/brand/nabat-stacked-light.png`,
    description: c.t(C.meta.home.desc), address: { '@type': 'PostalAddress', addressLocality: 'Riyadh', addressCountry: 'SA' }
  });
  const ar = lang === 'ar';
  return `<!doctype html>
<html lang="${lang}" dir="${c.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${c.abs(c.pageId)}">
${alts}
${B.site.indexable ? '<meta name="robots" content="index,follow,max-image-preview:large">' : '<meta name="robots" content="noindex,nofollow">'}
<meta name="theme-color" content="#101010">
<meta property="og:type" content="website"><meta property="og:site_name" content="NABATE">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${c.abs(c.pageId)}"><meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:locale" content="${{ en: 'en_US', fr: 'fr_FR', ar: 'ar_SA' }[lang]}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${c.asset('brand/favicon.svg')}" type="image/svg+xml">
<link rel="preload" href="${c.asset(ar ? 'fonts/amiri-arabic-700-normal.woff2' : 'fonts/marcellus-latin-400-normal.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${c.asset('css/tokens.css')}">
<link rel="stylesheet" href="${c.asset('css/base.css')}">
<link rel="stylesheet" href="${c.asset('css/pages.css')}">
<script type="application/ld+json">${ld}</script>
</head>`;
}

const navLinks = (c, level) => {
  const T = (k) => c.t(C.nav[k]);
  if (level === 'facade') {
    const a = c.pageId === 'home' ? '' : c.url('home'); // ancres : relatives à l'accueil
    return [
      [c.url('maison'), T('house')], [c.url('menu'), T('menu'), 'menu'], [a + '#craft', T('craft')], [a + '#chef', T('chef')], [a + '#vision', T('vision')],
      [c.url('origin'), T('origin')], [a + '#contact', T('contact')]
    ];
  }
  return [
    [c.url('home'), 'NABATE'], [c.url('catalogue'), T('catalogue'), 'catalogue'], [c.url('laboratory'), T('laboratory'), 'laboratory'],
    [c.url('partners'), T('partners'), 'partners'], [c.url('collaborate'), T('collaborate'), 'collaborate'],
    [c.url('pricing'), T('pricing'), 'pricing'], [c.url('start'), T('start'), 'start']
  ];
};

export function header(c, level) {
  const links = navLinks(c, level);
  const cur = c.pageId;
  const items = links.map(([h, label, id]) => `<a href="${h}"${id && id === cur ? ' aria-current="page"' : ''}>${esc(label)}${id === 'start' ? '<span class="badge" hidden>0</span>' : ''}</a>`).join('');
  const drawerItems = links.map(([h, label], i) => `<a class="m" style="--i:${i}" href="${h}">${esc(label)}</a>`).join('');
  const brand = level === 'facade'
    ? `<a class="brand" href="${c.url('home')}" aria-label="Maison NABATE"><img src="${c.asset('brand/nabat-horizontal-dark.svg')}" alt="Maison NABATE" width="142" height="56" style="height:56px;width:auto"></a>`
    : `<a class="brand" href="${c.url('origin')}" aria-label="Origin by NABATE"><img src="${c.asset('brand/nabat-mark-dark.svg')}" alt="" width="34" height="40" style="height:40px"><span class="wm">ORIGIN <i>by NABATE</i></span></a>`;
  return `<a class="skip" href="#main">${esc(c.t(C.ui.skip))}</a>
<header class="hd${level === 'origin' ? ' o solid-always solid' : ''}">
<div class="wrap">
${brand}
<nav class="nav" aria-label="Navigation">${items}</nav>
${langSwitch(c)}
${level === 'facade' ? `<div class="hd-cta"><a class="btn" href="${c.pageId === 'home' ? '' : c.url('home')}#contact">${esc(c.t(C.ui.cta))}</a></div>` : ''}
<button class="burger" type="button" aria-expanded="false" aria-controls="drawer" aria-label="${esc(c.t(C.ui.menuOpen))}" data-open="${esc(c.t(C.ui.menuOpen))}" data-close="${esc(c.t(C.ui.menuClose))}"><i></i><i></i><i></i></button>
</div>
</header>
<div class="drawer" id="drawer">${drawerItems}${langSwitch(c, true)}</div>`;
}

export function dock(c, level) {
  const { B } = c;
  const msgHref = level === 'facade' ? '#contact' : c.url('start');
  return `<div class="dock" role="complementary">
<a class="d-wa" href="https://wa.me/${B.contact.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}<span>${esc(c.t(C.ui.wa))}</span></a>
<a class="d-call" href="tel:${B.contact.phone}" aria-label="${esc(c.t(C.ui.call))}">${ICON.call}<span>${esc(c.t(C.ui.call))}</span></a>
<a class="d-msg" href="${msgHref}">${ICON.mail}<span>${esc(c.t(C.ui.message))}</span></a>
</div>`;
}

export function footer(c) {
  const { B } = c, T = (x) => c.t(x);
  const year = new Date().getFullYear();
  return `<footer class="ft"><div class="wrap"><i class="notch" aria-hidden="true"></i>
<div class="cols">
<div><img class="logo" src="${c.asset('brand/nabat-stacked-notag-dark.svg')}" alt="Maison NABATE" width="220" height="84"><p>${esc(T(C.footer.tag))}</p></div>
<div><h4>${esc(T(C.footer.house))}</h4><ul>
<li><a href="${c.url('home')}#maison">${esc(T(C.nav.house))}</a></li>
<li><a href="${c.url('menu')}">${esc(T(C.nav.menu))}</a></li>
<li><a href="${c.url('home')}#craft">${esc(T(C.nav.craft))}</a></li>
<li><a href="${c.url('home')}#chef">${esc(T(C.nav.chef))}</a></li>
<li><a href="${c.url('home')}#vision">${esc(T(C.nav.vision))}</a></li></ul></div>
<div><h4>${esc(T(C.footer.pro))}</h4><ul>
<li><a href="${c.url('catalogue')}">${esc(T(C.nav.catalogue))}</a></li>
<li><a href="${c.url('laboratory')}">${esc(T(C.nav.laboratory))}</a></li>
<li><a href="${c.url('pricing')}">${esc(T(C.nav.pricing))}</a></li>
<li><a href="${c.url('start')}">${esc(T(C.nav.start))}</a></li></ul></div>
<div><h4>${esc(T(C.footer.contact))}</h4><ul>
<li><a href="https://wa.me/${B.contact.whatsapp}" target="_blank" rel="noopener" dir="ltr">WhatsApp ${esc(B.contact.phoneDisplay)}</a></li>
<li><a href="tel:${B.contact.phone}" dir="ltr">${esc(B.contact.phoneDisplay)}</a></li>
<li><a href="mailto:${B.contact.email}">${esc(B.contact.email)}</a></li>
<li><span>${esc(T(B.contact.city))}</span></li></ul></div>
</div>
<div class="legal"><span>© ${year} NABATE. ${esc(T(C.ui.rights))}</span><span>${esc(T(C.ui.illustrative))}</span></div>
</div></footer>`;
}

// Configuration lue par site.js / origin.js
export function cfgScript(c, strings, names) {
  const T = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, c.t(v)]));
  const cfg = { lang: c.lang, wa: c.B.contact.whatsapp, mail: c.B.contact.email, subject: c.t(C.contact.s.subject), s: T(strings) };
  return `<script id="nb-cfg" type="application/json">${JSON.stringify(cfg).replace(/</g, '\\u003c')}</script>${names ? `\n<script id="nb-names" type="application/json">${JSON.stringify(names).replace(/</g, '\\u003c')}</script>` : ''}`;
}

export function page(c, level, { title, desc, body, scripts = ['js/site.js'], strings = C.contact.s, names = null, bodyClass = '' }) {
  return `${head(c, { title, desc })}
<body${bodyClass || level === 'origin' ? ` class="${(level === 'origin' ? 'origin ' : '') + bodyClass}"` : ''}>
${header(c, level)}
<main id="main">
${body}
</main>
${footer(c)}
${dock(c, level)}
${cfgScript(c, strings, names)}
${scripts.map((s) => `<script src="${c.asset(s)}" defer></script>`).join('\n')}
</body>
</html>
`;
}

// Bouton « Écouter la présentation » (audio court, jamais en lecture automatique).
export function listen(c, key) {
  const f = `audio/${key}-${c.lang}.mp3`;
  return `<div class="listen rv"><button class="btn ghost" type="button" data-listen data-play="${esc(c.t(C.ui.listen))}" data-pause="${esc(c.t(C.ui.pause))}" aria-pressed="false"><svg class="i-play" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg><svg class="i-pause" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg><span>${esc(c.t(C.ui.listen))}</span></button><audio preload="none" src="${c.asset(f)}"></audio></div>`;
}
