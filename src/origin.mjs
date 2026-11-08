// Niveau 2 — « Origin by NABATE » : l'espace B2B premium (7 pages).
import { C } from './content.mjs';
import { ICON, esc, page, listen } from './layout.mjs';

const O = C.o;

// Bandeau d'en-tête de page Origin
function hero(c, { eyebrow, h1, lead, img, short = true, giant = false, ctas = '', badge = '', h1Ltr = false }) {
  const T = c.t;
  return `<section class="o-hero grain${short ? ' short' : ''}">
  <div class="bg" data-par>${c.img(img, '', { eager: true })}</div>
  ${giant ? '<div class="giant" aria-hidden="true" data-par>ORIGIN</div>' : ''}
  <div class="wrap">
    ${badge}
    ${eyebrow ? `<p class="eyebrow">${esc(T(eyebrow))}</p>` : ''}
    <h1${h1Ltr ? ' dir="ltr"' : ''}>${esc(T(h1))}</h1>
    ${lead ? `<p class="lead">${esc(T(lead))}</p>` : ''}
    ${ctas}
  </div>
</section>`;
}

const ctaBand = (c) => `<section class="section cta-band grain"><div class="wrap"><h2 class="split">${esc(c.t(O.cta.title))}</h2><div class="row rv"><a class="btn" href="${c.url('start')}">${esc(c.t(O.cta.btn))}${ICON.arrow}</a></div></div></section>`;
const imgOrigin = (id) => `img/origin/${id}.webp`;
const placeholder = `<svg class="none" viewBox="0 0 120 150" aria-hidden="true"><g fill="currentColor"><path d="M60 8c5 8 7 17 0 28-7-11-5-20 0-28z"/></g><path d="M60 148V36" stroke="currentColor" stroke-width="2.4" fill="none"/></svg>`;

export const partnerCard = (c) => (x, i) => `<article class="pt rv" style="--d:${(i % 4) * .08}s"><div class="lg"><img src="${c.asset(`partners/${x.id}.webp`)}" alt="${esc(x.name)}" loading="lazy" decoding="async" width="${c.dims[`partners/${x.id}.webp`]?.w || 360}" height="${c.dims[`partners/${x.id}.webp`]?.h || 120}"></div><small>${esc(c.t(x.kind))}</small><h3>${esc(x.name)}</h3><p>${esc(c.t(x.p))}</p></article>`;

// ------------------------------------------------------------------ ACCUEIL
export function originHome(c, d) {
  const T = c.t, h = O.home;
  const why = h.why.map((w, i) => `<article class="card rv" style="--d:${i * .1}s"><span class="k">${w.k}</span><h3>${esc(T(w.t))}</h3><p>${esc(T(w.p))}</p></article>`).join('');
  const stats = h.stats.map((s) => `<div><b data-count="${s.n}">${s.n}</b><span>${esc(T(s.l))}</span></div>`).join('');
  const body = `
${hero(c, {
    img: 'img/facade/terrace.webp', short: false, giant: true, h1: h.h1, h1Ltr: true, lead: h.lead,
    badge: `<span class="badge-line"><img src="${c.asset('brand/nabat-mark-dark.svg')}" alt="" width="26" height="30">${esc(T(h.badge))}</span>`,
    ctas: `<div class="row"><a class="btn back-nabate" href="${c.url('home')}">${c.lang === 'ar' ? '→ ' : '← '}${c.lang === 'ar' ? 'بيت نبت' : 'Maison NABATE'}</a><a class="btn" href="${c.url('catalogue')}">${esc(T(h.cta1))}${ICON.arrow}</a><a class="btn ghost" href="${c.url('start')}">${esc(T(h.cta2))}</a></div>${listen(c, 'origin')}`
  })}
<section class="section o-sec">
  <div class="wrap">
    <p class="eyebrow rv">${esc(T(h.whyEyebrow))}</p>
    <h2 class="split" style="max-width:18ch">${esc(T(h.whyTitle))}</h2>
    <div class="cards">${why}</div>
    <div class="stats rv">${stats}</div>
    <p class="note" style="margin-block-start:14px;font-size:.84rem;color:#8c8777">${esc(T(C.ui.illustrative))}</p>
  </div>
</section>
<section class="section dark">
  <div class="wrap">
    <div class="split2">
      <figure class="media gold rv-img">${c.img(imgOrigin('l53'), '')}</figure>
      <div class="stack"><p class="eyebrow rv">${esc(T(C.nav.catalogue))}</p><h2 class="split">${esc(T(h.catTitle))}</h2><p class="lead rv">${esc(T(h.catText))}</p><a class="btn rv" href="${c.url('catalogue')}">${esc(T(h.more))}${ICON.arrow}</a></div>
    </div>
  </div>
</section>
<section class="section o-sec">
  <div class="wrap">
    <div class="split2 flip">
      <figure class="media gold rv-img">${c.img(imgOrigin('lab_b'), '')}<figcaption>${esc(T(C.ui.illustrative))}</figcaption></figure>
      <div class="stack"><p class="eyebrow rv">${esc(T(C.nav.laboratory))}</p><h2 class="split">${esc(T(h.labTitle))}</h2><p class="lead rv">${esc(T(h.labText))}</p><a class="btn rv" href="${c.url('laboratory')}">${esc(T(h.more))}${ICON.arrow}</a></div>
    </div>
  </div>
</section>
${ctaBand(c)}`;
  return page(c, 'origin', { title: T(C.meta.origin.title), desc: T(C.meta.origin.desc), body });
}

// ---------------------------------------------------------------- CATALOGUE
export function catalogue(c, d) {
  const T = c.t, k = O.catalogue, lang = c.lang;
  const chips = [`<button class="chip" type="button" data-fam="all" aria-pressed="true">${esc(T(k.all))}</button>`]
    .concat(d.cat.families.map((f) => `<button class="chip" type="button" data-fam="${f.key}" aria-pressed="false">${esc(f.name[lang])}</button>`)).join('');
  const blocks = d.cat.families.map((f) => {
    const cards = f.items.map((p) => `<article class="prod" data-fam="${f.key}" data-search="${esc(`${p.code} ${p.name.fr} ${p.name.en} ${p.name.ar}`)}">
<div class="im">${p.img ? c.img(imgOrigin(p.img), p.name[lang]) : placeholder}</div>
<div class="tx"><small dir="ltr">${p.code}</small><b>${esc(p.name[lang])}</b></div>
<button class="add" type="button" data-add="${p.code}" aria-pressed="false">${esc(T(k.add))}</button></article>`).join('');
    return `<section class="fam-block" id="${f.key}"><header><h2>${esc(f.name[lang])}</h2>${f.intro ? `<p>${esc(f.intro[lang])}</p>` : ''}</header><div class="prod-grid">${cards}</div></section>`;
  }).join('');
  const body = `
${hero(c, { img: 'img/facade/hero-full.webp', eyebrow: k.eyebrow, h1: k.h1, lead: k.lead })}
<div class="cat-bar"><div class="wrap">
  <div class="searchbar"><label class="sr" for="q">${esc(T(k.search))}</label><input id="q" type="search" placeholder="${esc(T(k.search))}" autocomplete="off"><span class="count" id="count" aria-live="polite"></span></div>
  <div class="chips" role="group" aria-label="${esc(T(k.eyebrow))}">${chips}</div>
</div></div>
<section class="o-sec"><div class="wrap">${blocks}<p class="empty" id="empty" hidden>${esc(T(k.empty))}</p><p class="note-box">${esc(T(k.note))}</p></div><div style="height:var(--section)"></div></section>
${ctaBand(c)}`;
  return page(c, 'origin', { title: T(C.meta.catalogue.title), desc: T(C.meta.catalogue.desc), body, scripts: ['js/site.js', 'js/origin.js'], strings: O.start.s, names: d.names[lang] });
}

// --------------------------------------------------------------- LABORATOIRE
export function laboratory(c) {
  const T = c.t, l = O.lab;
  const blocks = l.blocks.map((b, i) => `<div class="split2${i % 2 ? ' flip' : ''}" style="${i ? 'margin-block-start:clamp(56px,8vw,110px)' : ''}">
<figure class="media gold rv-img">${c.img(imgOrigin(b.img), T(b.alt))}<figcaption>${esc(T(l.caption))}</figcaption></figure>
<div class="stack"><span class="eyebrow rv">0${i + 1}</span><h2 class="split" style="font-size:var(--step-2)">${esc(T(b.t))}</h2><p class="lead rv">${esc(T(b.p))}</p></div></div>`).join('');
  const std = l.std.map((s, i) => `<article class="card rv" style="--d:${i * .08}s"><span class="k">0${i + 1}</span><h3>${esc(T(s.t))}</h3><p>${esc(T(s.p))}</p></article>`).join('');
  const body = `
${hero(c, { img: 'img/facade/shop-interior.webp', eyebrow: l.eyebrow, h1: l.h1, lead: l.lead })}
<section class="section o-sec"><div class="wrap">${blocks}</div></section>
<section class="section dark"><div class="wrap"><h2 class="split" style="max-width:20ch">${esc(T(l.stdTitle))}</h2><div class="cards">${std}</div></div></section>
${ctaBand(c)}`;
  return page(c, 'origin', { title: T(C.meta.laboratory.title), desc: T(C.meta.laboratory.desc), body });
}

// ---------------------------------------------------------------- PARTENAIRES
export function partners(c) {
  const T = c.t, p = O.partners;
  const card = partnerCard(c);
  const eq = p.list.filter((x) => x.group === 'eq').map(card).join('');
  const ing = p.list.filter((x) => x.group === 'ing').map(card).join('');
  const body = `
${hero(c, { img: 'img/facade/coffee-heritage.webp', eyebrow: p.eyebrow, h1: p.h1, lead: p.lead })}
<section class="section o-sec"><div class="wrap"><p class="eyebrow rv">${esc(T(p.eqTitle))}</p><div class="pt-grid">${eq}</div></div></section>
<section class="section dark"><div class="wrap"><p class="eyebrow rv">${esc(T(p.ingTitle))}</p><div class="pt-grid">${ing}</div><p class="note" style="margin-block-start:28px;color:#a8a393;font-size:.88rem">${esc(T(C.ui.brandsNote))}</p></div></section>
${ctaBand(c)}`;
  return page(c, 'origin', { title: T(C.meta.partners.title), desc: T(C.meta.partners.desc), body });
}

// ------------------------------------------------------------------ COLLABORER
export function collaborate(c) {
  const T = c.t, k = O.collab;
  const levels = k.levels.map((l, i) => `<div class="level rv" style="--d:${i * .1}s"><div class="k">${l.k}</div><h3>${esc(T(l.t))}</h3><p>${esc(T(l.p))}</p></div>`).join('');
  const proc = k.proc.map((s, i) => `<li class="rv" style="--d:${i * .06}s"><div><h3>${esc(T(s.t))}</h3><p>${esc(T(s.p))}</p></div></li>`).join('');
  const off = k.off.map((o, i) => `<article class="card rv" style="--d:${i * .08}s;padding:0"><div class="media" style="aspect-ratio:16/10">${c.img(imgOrigin(o.img), '')}</div><div style="padding:26px 28px 30px"><h3 style="margin-block:0 10px">${esc(T(o.t))}</h3><p>${esc(T(o.p))}</p></div></article>`).join('');
  const body = `
${hero(c, { img: 'img/facade/hands-dough.webp', eyebrow: k.eyebrow, h1: k.h1, lead: k.lead })}
<section class="section o-sec"><div class="wrap"><div class="levels">${levels}</div></div></section>
<section class="section dark"><div class="wrap"><p class="eyebrow rv">${esc(T(k.procEyebrow))}</p><h2 class="split" style="max-width:20ch">${esc(T(k.procTitle))}</h2><ol class="process">${proc}</ol></div></section>
<section class="section o-sec"><div class="wrap"><p class="eyebrow rv">${esc(T(k.offEyebrow))}</p><h2 class="split" style="max-width:20ch">${esc(T(k.offTitle))}</h2><div class="cards">${off}</div></div></section>
${ctaBand(c)}`;
  return page(c, 'origin', { title: T(C.meta.collaborate.title), desc: T(C.meta.collaborate.desc), body });
}

// ---------------------------------------------------------------------- TARIFS
export function pricing(c, d) {
  const T = c.t, p = O.pricing, lang = c.lang, k = O.catalogue;
  const tiers = p.tiers.map((x, i) => `<div class="tier${i === 4 ? ' top' : ''}"><b dir="ltr">${x}</b><span>${esc(T(p.pieces))}</span><i>${esc(T(p.shared))}</i></div>`).join('');
  const rows = d.cat.families.flatMap((f) => f.items.map((it) => `<div class="r" data-search="${esc(`${it.code} ${it.name.fr} ${it.name.en} ${it.name.ar} ${f.name[lang]}`)}"><span class="c" dir="ltr">${it.code}</span><span class="n">${esc(it.name[lang])}</span><span class="f">${esc(f.name[lang])}</span><span class="p">${esc(T(p.onQuote))}</span><button class="add" type="button" data-add="${it.code}" aria-pressed="false">${esc(T(k.add))}</button></div>`)).join('');
  const body = `
${hero(c, { img: 'img/facade/terrace.webp', eyebrow: p.eyebrow, h1: p.h1, lead: p.lead })}
<section class="section o-sec"><div class="wrap">
  <p class="eyebrow rv">${esc(T(p.tiersTitle))}</p>
  <h2 class="split" style="font-size:var(--step-2)">${esc(T(p.tiersSub))}</h2>
  <div class="tiers rv">${tiers}</div>
  <p class="note" style="margin-block-start:14px">${esc(T(p.beyond))}</p>
  <div class="tools"><label class="sr" for="tq">${esc(T(p.search))}</label><input id="tq" type="search" placeholder="${esc(T(p.search))}" autocomplete="off"><span class="count" id="tc" style="font:500 .72rem/1 var(--f-sans);letter-spacing:.2em;color:var(--gold-500);text-transform:uppercase"></span><a class="btn ghost" href="${c.asset(`downloads/nabat-codes-${lang}.csv`)}" download>${esc(T(p.csv))}</a></div>
  <div class="tbl" role="table"><div class="r h" role="row"><span role="columnheader">${esc(T(p.cols.code))}</span><span role="columnheader">${esc(T(p.cols.product))}</span><span class="f" role="columnheader">${esc(T(p.cols.family))}</span><span class="p" role="columnheader">${esc(T(p.cols.price))}</span><span></span></div>${rows}</div>
  <p class="note-box">${esc(T(p.terms))}</p>
</div></section>
${ctaBand(c)}`;
  return page(c, 'origin', { title: T(C.meta.pricing.title), desc: T(C.meta.pricing.desc), body, scripts: ['js/site.js', 'js/origin.js'], strings: O.start.s, names: d.names[lang] });
}

// ------------------------------------------------------------ DÉMARRER UN PROJET
export function start(c, d) {
  const T = c.t, s = O.start, f = s.f, B = c.B;
  const opts = (name, list, first) => list.map((o, i) => `<label class="opt"><input type="radio" name="${name}" value="${esc(T(o.v))}"${i === 0 && first ? ' checked' : ''}><div><b>${esc(T(o.v))}</b><span>${esc(T(o.p))}</span></div></label>`).join('');
  const body = `
${hero(c, { img: 'img/facade/hero-full.webp', eyebrow: s.eyebrow, h1: s.h1, lead: s.lead })}
<section class="section o-sec"><div class="wrap"><div class="cmd">
  <div>
    <span class="eyebrow">${esc(T(s.freqLabel))}</span>
    <div class="opts">${opts('freq', s.freq, true)}</div>
    <span class="eyebrow" style="margin-block-start:40px">${esc(T(s.modeLabel))}</span>
    <div class="opts">${opts('mode', s.mode, true)}</div>
    <p class="note" style="margin-block-start:22px">${esc(T(s.sfda))}</p>
  </div>
  <form class="form" id="project" novalidate>
    <span class="eyebrow">${esc(T(s.formLabel))}</span>
    <h2 style="font-size:var(--step-2)">${esc(T(s.formTitle))}</h2>
    <p class="note">${esc(T(s.formNote))}</p>
    <div class="cart" id="cart"><span class="eyebrow" style="margin:0">${esc(T(s.cartTitle))}</span><ul></ul><p class="e">${esc(T(s.cartEmpty))} <a href="${c.url('catalogue')}">→</a></p></div>
    <div class="two"><div class="field"><label for="company">${esc(T(f.company))}</label><input id="company" name="company" autocomplete="organization"></div><div class="field"><label for="name">${esc(T(f.name))}</label><input id="name" name="name" autocomplete="name"></div></div>
    <div class="two"><div class="field"><label for="phone">${esc(T(f.phone))}</label><input id="phone" name="phone" type="tel" autocomplete="tel" dir="ltr"></div><div class="field"><label for="activity">${esc(T(f.activity))}</label><select id="activity" name="activity">${f.activities.map((a) => `<option>${esc(T(a))}</option>`).join('')}</select></div></div>
    <div class="field"><label for="volumes">${esc(T(f.volumes))}</label><input id="volumes" name="volumes" placeholder="${esc(T(f.volumesPh))}"></div>
    <div class="field"><label for="site">${esc(T(f.site))}</label><textarea id="site" name="site" rows="2" placeholder="${esc(T(f.sitePh))}"></textarea></div>
    <div class="field"><label for="message">${esc(T(f.message))}</label><textarea id="message" name="message" rows="2" placeholder="${esc(T(f.messagePh))}"></textarea></div>
    <div class="row"><button class="btn wa" type="button" data-act="wa">${ICON.wa}${esc(T(f.sendWa))}</button><button class="btn" type="button" data-act="mail">${esc(T(f.sendMail))}</button></div>
    <div class="row" style="align-items:center;gap:12px"><span class="note" style="margin:0">${esc(T(f.sendTo))}</span><code dir="ltr" style="color:var(--gold-400)">${esc(B.contact.email)}</code><button class="btn ghost" id="copy-mail" type="button" style="min-height:44px;padding:8px 16px">${esc(T(f.copy))}</button></div>
  </form>
</div></div></section>`;
  return page(c, 'origin', { title: T(C.meta.start.title), desc: T(C.meta.start.desc), body, scripts: ['js/site.js', 'js/origin.js'], strings: O.start.s, names: d.names[c.lang] });
}
