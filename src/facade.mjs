// Niveau 1 — la façade NABATE (une page longue, immersive).
import { C } from './content.mjs';
import { M2 } from './content-maison.mjs';
import { ICON, esc, page, listen } from './layout.mjs';

// Épi de blé « au trait » pour l'animation de dessin
function wheatLine() {
  const g = (x, y, len, wid, ang) => `<path pathLength="420" transform="translate(${x} ${y}) rotate(${ang})" d="M0 0C${wid} ${-len * .25} ${wid} ${-len * .75} 0 ${-len}C${-wid} ${-len * .75} ${-wid} ${-len * .25} 0 0Z"/>`;
  let p = '<path pathLength="420" d="M50 150V30"/>';
  [118, 99, 80, 61, 42].forEach((y, i) => { const L = 30 - i * 1.6, W = 8.6 - i * .5; p += g(50.6, y, L, W, -38) + g(49.4, y, L, W, 38); });
  p += g(50, 26, 26, 7, 0);
  return `<svg class="wheat-draw" viewBox="0 0 100 150" aria-hidden="true">${p}</svg>`;
}

const STEP_ICONS = [
  '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M6 40V20a16 16 0 0 1 32 0v20M4 40h36M16 40V28a6 6 0 0 1 12 0v12"/></svg>',
  '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M4 20 22 6l18 14M8 18v22h28V18M18 40V28h8v12"/></svg>',
  '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="22" cy="22" r="5"/><circle cx="8" cy="9" r="3"/><circle cx="36" cy="9" r="3"/><circle cx="8" cy="36" r="3"/><circle cx="36" cy="36" r="3"/><path d="M18 19 10 11M26 19l8-8M18 25l-8 8M26 25l8 8"/></svg>'
];

export function facade(c) {
  const { B } = c, T = (x) => c.t(x), lang = c.lang;
  const letters = (lang === 'ar' ? ['نبت'] : [...'NABATE']).map((ch, i) => `<span class="l"><span style="--i:${i}">${ch}</span></span>`).join('');
  const marq = C.marquee.map((m) => `<span>${esc(T(m))}</span>`).join('');
  const hasChef = c.exists('img/facade/chef.webp');
  const portrait = hasChef
    ? `<img src="${c.asset('img/facade/chef.webp')}" alt="${esc(T(C.chef.photoAlt))}" loading="lazy" decoding="async" width="900" height="1200">`
    : `<div class="ph">${ICON.mark}<span>${esc(T(C.chef.photoSoon))}</span></div>`;
  const stats = C.chef.stats.map((s) => `<div><b data-count="${s.n}"${s.s ? ` data-suffix="${s.s}"` : ''}>${s.n}${s.s}</b><span>${esc(T(s.l))}</span></div>`).join('');
  const facts = C.chef.facts.map((f) => `<li>${esc(T(f))}</li>`).join('');
  const formula = C.formula.items.map((it, i) => `<li><div class="n">0${i + 1}</div><h3>${esc(T(it.t))}</h3><p>${esc(T(it.p))}</p></li>`).join('');
  const steps = C.vision.steps.map((s, i) => `<article class="step rv" style="--d:${i * .12}s"><span class="n" aria-hidden="true">0${i + 1}</span><span class="k">${esc(T(s.k).replace(/^\d+\s·\s/, ''))}</span><h3>${esc(T(s.t))}</h3><p>${esc(T(s.p))}</p></article>`).join('');
  const tags = C.gesture.tags.map((x) => `<li>${esc(T(x))}</li>`).join('');
  const mini = C.teaser.mini.map((x) => `<li>${esc(T(x))}</li>`).join('');
  const f = C.contact.form;

  const body = `
<!-- HÉROS -->
<section class="hero grain" aria-labelledby="h-title">
  <div class="hero-bg"><video class="hv" autoplay muted loop playsinline preload="auto" poster="${c.asset('img/facade/hero-full.webp')}" aria-hidden="true" tabindex="-1"><source src="${c.asset('video/hero.mp4')}" type="video/mp4"></video></div>
  <div class="wrap">
    <p class="eyebrow">${esc(T(C.hero.eyebrow))}</p>
    <h1 id="h-title" aria-label="${lang === 'ar' ? 'نبت' : 'Maison NABATE'}">${lang === 'ar' ? '' : '<span class="mtag" aria-hidden="true">MAISON</span>'}${letters}</h1>
    ${lang === 'ar' ? '' : `<span class="ar-name" lang="ar" dir="rtl">${B.nameAr}</span>`}
    <i class="notch" aria-hidden="true"></i>
    <p class="tagline">${esc(T(C.hero.tagline))}</p>
    <div class="row">
      <a class="btn" href="#maison">${esc(T(C.hero.cta1))}${ICON.arrow}</a>
      <a class="btn ghost" href="${c.url('origin')}">${esc(T(C.hero.cta2))}${ICON.arrow}</a>
      ${listen(c, 'maison')}
    </div>
  </div>
  <a class="scroll-cue" href="#maison"><span>${esc(T(C.hero.scroll))}</span><i></i></a>
</section>

<div class="marquee" aria-hidden="true"><div class="track">${marq}${marq}${marq}${marq}</div></div>

<!-- MANIFESTE -->
<section class="section manifesto" id="maison">
  <div class="wrap grid">
    <div>
      <p class="eyebrow rv">${esc(T(C.manifesto.eyebrow))}</p>
      <h2 class="split">${esc(T(C.manifesto.title))}</h2>
      <div class="lines">${C.manifesto.lines.map((l, i) => `<p class="rv" style="--d:${.1 + i * .15}s">${T(l)}</p>`).join('')}</div>
      <p class="after rv">${esc(T(C.manifesto.after))}</p>
      <p class="after rv">${esc(T(C.manifesto.bridge))}</p>
      <p class="rv" style="margin-block-start:26px"><span class="em" style="font-size:1.5rem">${esc(T(C.manifesto.sign))}</span></p>
    </div>
    <div class="frame gold arch rv" data-par>${c.img('img/facade/terrace.webp', '', {})}</div>
  </div>
</section>

<!-- PAIN & CAFÉ -->
<section class="section dark" id="craft">
  <div class="wrap">
    <p class="eyebrow rv">${esc(T(C.ambassadors.eyebrow))}</p>
    <h2 class="split" style="max-width:20ch">${esc(T(C.ambassadors.title))}</h2>
    <div class="pair">
      <a class="amb rv" href="${c.url('origin')}" style="--d:.05s" aria-label="${esc(T(C.ambassadors.bread.name))}">
        ${c.img('img/facade/hands-dough.webp', '')}
        <div class="tx"><h3>${esc(T(C.ambassadors.bread.name))}</h3><p class="sub">${esc(T(C.ambassadors.bread.sub))}</p><p>${esc(T(C.ambassadors.bread.text))}</p></div>
      </a>
      <a class="amb rv" href="${c.url('origin')}" style="--d:.2s" aria-label="${esc(T(C.ambassadors.coffee.name))}">
        ${c.img('img/facade/coffee-heritage.webp', '')}
        <div class="tx"><h3>${esc(T(C.ambassadors.coffee.name))}</h3><p class="sub">${esc(T(C.ambassadors.coffee.sub))}</p><p>${esc(T(C.ambassadors.coffee.text))}</p></div>
      </a>
    </div>
  </div>
</section>

<!-- LA BOUSSOLE -->
<section class="section deep">
  <div class="wrap">
    <p class="eyebrow rv">${esc(T(C.formula.eyebrow))}</p>
    <h2 class="split" style="max-width:20ch">${esc(T(C.formula.title))}</h2>
    <ol class="formula" style="list-style:none">${formula}</ol>
  </div>
</section>

<!-- LE CHEF -->
<section class="section chef" id="chef">
  <div class="wrap grid">
    <div class="portrait rv-img">${portrait}</div>
    <div>
      <p class="eyebrow rv">${esc(T(C.chef.eyebrow))}</p>
      <h2 class="split">${esc(C.chef.name)}</h2>
      <p class="role rv">${esc(T(C.chef.role))}</p>
      <p class="lead rv">${esc(T(C.chef.intro))}</p>
      <div class="creds rv">${stats}</div>
      <ul class="facts rv">${facts}</ul>
    </div>
  </div>
</section>

<!-- LE GESTE -->
<section class="gesture grain">
  <div class="bg" data-par>${c.img('img/facade/croissant-lamination.webp', T(C.gesture.alt))}</div>
  <div class="wrap"><div class="box">
    <p class="eyebrow rv" style="color:var(--gold-500)">${esc(T(C.gesture.eyebrow))}</p>
    <h2 class="split">${esc(T(C.gesture.title))}</h2>
    <p class="rv">${esc(T(C.gesture.text))}</p>
    <ul class="tags rv">${tags}</ul>
  </div></div>
</section>

<!-- COULISSES -->
<section class="section deep back" id="coulisses"><div class="wrap">
  <p class="eyebrow rv">${esc(T(M2.back.eyebrow))}</p>
  <h2 class="split" style="max-width:20ch">${esc(T(M2.back.title))}</h2>
  <div class="cards">${M2.back.cards.map((x, i) => `<a class="card rv" style="--d:${i * .08}s" href="${c.url('maison')}#${x.id}"><span class="k">0${i + 1}</span><h3>${esc(T(x.t))}</h3><p>${esc(T(x.p))}</p><span class="more">${esc(T(M2.back.link))}${ICON.arrow}</span></a>`).join('')}</div>
</div></section>

<!-- VISION -->
<section class="section dark vision screen-tri" id="vision">
  <div class="bgimg">${c.img('img/facade/shop-interior.webp', '')}</div>
  <div class="wrap">
    <p class="eyebrow rv">${esc(T(C.vision.eyebrow))}</p>
    <h2 class="split">${esc(T(C.vision.title))}</h2>
    <p class="lead rv" style="color:#e6e1d3;margin-block-start:20px">${esc(T(C.vision.lead))}</p>
    <div class="steps">${steps}</div>
    <p class="note rv">${esc(T(C.vision.note))}</p>
  </div>
</section>

<!-- PASSERELLE ORIGIN -->
<section class="section deep o-teaser screen-tri">
  <div class="bgimg">${c.img('img/facade/hands-dough.webp', '')}</div>
  <div class="wrap">
    <img class="logo rv" src="${c.asset('brand/origin-notag-dark.svg')}" alt="Origin by NABATE" width="560" height="290">
    <p class="eyebrow rv" style="justify-content:center">${esc(T(C.teaser.eyebrow))}</p>
    <h2 class="rv" dir="ltr">${esc(T(C.teaser.title))}</h2>
    <p class="lead rv">${esc(T(C.teaser.lead))}</p>
    <div class="row rv"><a class="btn" href="${c.url('origin')}">${esc(T(C.teaser.cta))}${ICON.arrow}</a><a class="btn ghost" href="${c.url('start')}">${esc(T(C.teaser.cta2))}</a></div>
    <ul class="mini rv">${mini}</ul>
  </div>
</section>

<!-- CONTACT -->
<section class="section dark contact" id="contact">
  <div class="wrap grid">
    <div>
      <p class="eyebrow rv">${esc(T(C.contact.eyebrow))}</p>
      <h2 class="split">${esc(T(C.contact.title))}</h2>
      <p class="lead rv">${esc(T(C.contact.text))}</p>
      <div class="direct rv">
        <a href="https://wa.me/${B.contact.whatsapp}" target="_blank" rel="noopener">${ICON.wa}<span><small>${esc(T(C.contact.labels.wa))}</small><b dir="ltr">${esc(B.contact.phoneDisplay)}</b></span></a>
        <a href="tel:${B.contact.phone}">${ICON.call}<span><small>${esc(T(C.contact.labels.call))}</small><b dir="ltr">${esc(B.contact.phoneDisplay)}</b></span></a>
        <a href="mailto:${B.contact.email}">${ICON.mail}<span><small>${esc(T(C.contact.labels.mail))}</small><b>${esc(B.contact.email)}</b></span></a>
      </div>
    </div>
    <form class="card-form form rv" data-contact novalidate>
      <div class="two">
        <div class="field"><label for="f-name">${esc(T(f.name))}</label><input id="f-name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="f-company">${esc(T(f.company))}</label><input id="f-company" name="company" autocomplete="organization"></div>
      </div>
      <div class="two">
        <div class="field"><label for="f-interest">${esc(T(f.interest))}</label><select id="f-interest" name="interest">${f.interests.map((o) => `<option>${esc(T(o))}</option>`).join('')}</select></div>
        <div class="field"><label for="f-phone">${esc(T(f.phone))}</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" dir="ltr"></div>
      </div>
      <div class="field"><label for="f-msg">${esc(T(f.message))}</label><textarea id="f-msg" name="message" rows="3"></textarea></div>
      <div class="row"><button class="btn wa" type="button" data-act="wa">${ICON.wa}${esc(T(f.sendWa))}</button><button class="btn ghost" type="button" data-act="mail">${esc(T(f.sendMail))}</button></div>
      <p class="note">${esc(T(f.note))}</p>
    </form>
  </div>
</section>`;

  return page(c, 'facade', { title: T(C.meta.home.title), desc: T(C.meta.home.desc), body, strings: C.contact.s, splash: true });
}
