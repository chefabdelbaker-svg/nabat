// Page « La Maison » : présentation (origine, qualité, chef, laboratoire, partenaire Bongard).
import { C } from './content.mjs';
import { M, M2 } from './content-maison.mjs';
import { ICON, esc, page, listen } from './layout.mjs';
import { partnerCard } from './origin.mjs';

export function maison(c) {
  const T = c.t, B = c.B;
  const steps = M.lab.steps.map((s, i) => `<article class="card rv" style="--d:${i * .08}s"><span class="k">0${i + 1}</span><h3>${esc(T(s.t))}</h3><p>${esc(T(s.p))}</p></article>`).join('');
  const pl = C.o.partners.list, card = partnerCard(c);
  const ing = pl.filter((x) => x.group === 'ing').map(card).join('');
  const eq = pl.filter((x) => x.group === 'eq').map(card).join('');
  const body = `
<section class="o-hero grain short screen-tri dark">
  <div class="bg" data-par>${c.img('img/facade/shop-interior.webp', '', { eager: true })}</div>
  <div class="wrap">
    <p class="eyebrow">${esc(T(M.hero.eyebrow))}</p>
    <h1>${esc(T(M.hero.h1))}</h1>
    <i class="notch" aria-hidden="true"></i>
    <p class="lead">${esc(T(M.hero.lead))}</p>
    ${listen(c, 'maison')}
  </div>
</section>

<section class="section"><div class="wrap">
  <div class="split2">
    <figure class="frame gold arch rv-img">${c.img('img/facade/terrace.webp', '')}</figure>
    <div class="stack"><p class="eyebrow rv">${esc(T(M.origin.eyebrow))}</p><h2 class="split">${esc(T(M.origin.title))}</h2><p class="lead rv">${esc(T(M.origin.p))}</p></div>
  </div>
</div></section>

<section class="section dark screen-tri"><div class="wrap">
  <div class="split2 flip">
    <figure class="media gold rv-img">${c.img('img/facade/croissant-dune.webp', '')}</figure>
    <div class="stack"><p class="eyebrow rv">${esc(T(M.quality.eyebrow))}</p><h2 class="split">${esc(T(M.quality.title))}</h2><p class="lead rv">${esc(T(M.quality.p))}</p></div>
  </div>
</div></section>

<section class="section"><div class="wrap">
  <div class="stack" style="max-width:62ch"><p class="eyebrow rv">${esc(T(M.chef.eyebrow))}</p><h2 class="split">${esc(T(M.chef.title))}</h2><p class="lead rv">${esc(T(M.chef.p))}</p>
  <p class="rv"><a class="btn" href="${c.url('home')}#chef">${esc(T(M.chef.link))}${ICON.arrow}</a></p></div>
</div></section>

<section class="section deep" id="lab"><div class="wrap">
  <p class="eyebrow rv">${esc(T(M.lab.eyebrow))}</p>
  <h2 class="split" style="max-width:20ch">${esc(T(M.lab.title))}</h2>
  <p class="lead rv" style="max-width:56ch">${esc(T(M.lab.lead))}</p>
  <div class="cards">${steps}</div>
</div></section>

<section class="section dark" id="ingredients"><div class="wrap">
  <p class="eyebrow rv">${esc(T(M2.ing.eyebrow))}</p>
  <h2 class="split" style="max-width:20ch">${esc(T(M2.ing.title))}</h2>
  <p class="lead rv" style="max-width:58ch">${esc(T(M2.ing.lead))}</p>
  <div class="pt-grid">${ing}</div>
  <p class="note" style="margin-block-start:24px;color:#a8a393;font-size:.88rem">${esc(T(C.ui.brandsNote))}</p>
</div></section>

<section class="section" id="partners"><div class="wrap">
  <p class="eyebrow rv" style="text-align:center">${esc(T(M2.partners.eyebrow))}</p>
  <div class="partner rv">
    <p class="eyebrow">${esc(T(M.partner.eyebrow))}</p>
    <div class="pname" dir="ltr">${M.partner.name}</div>
    <i class="notch" aria-hidden="true"></i>
    <h2>${esc(T(M.partner.title))}</h2>
    <p class="lead">${esc(T(M.partner.p))}</p>
  </div>
  <div class="pt-grid">${eq}</div>
  <p class="rv" style="margin-block-start:28px;text-align:center"><a class="btn ghost" href="${c.url('partners')}">${esc(T(M2.partners.more))}${ICON.arrow}</a></p>
</div></section>

<section class="section dark"><div class="wrap" style="text-align:center">
  <h2 class="split" style="margin-inline:auto">${esc(T(M.cta.title))}</h2>
  <div class="row" style="justify-content:center;margin-block-start:28px"><a class="btn" href="${c.url('origin')}">${esc(T(M.cta.b1))}${ICON.arrow}</a><a class="btn ghost" href="${c.url('home')}#contact">${esc(T(M.cta.b2))}</a></div>
</div></section>`;
  return page(c, 'facade', { title: T(M.meta.title), desc: T(M.meta.desc), body });
}

// Page « Menu » : carte indicative, sans prix.
export function menu(c) {
  const T = c.t, K = M2.menu;
  const fam = K.families.map((f, i) => `<article class="mf rv" style="--d:${i * .06}s"><div class="mh"><span class="k">0${i + 1}</span><h2>${esc(T(f.t))}</h2><p>${esc(T(f.p))}</p></div><ul>${f.items.map((x) => `<li>${esc(T(x))}</li>`).join('')}</ul></article>`).join('');
  const body = `
<section class="o-hero grain short screen-tri dark">
  <div class="bg" data-par>${c.img('img/facade/croissant-lamination.webp', '', { eager: true })}</div>
  <div class="wrap">
    <p class="eyebrow">${esc(T(K.eyebrow))}</p>
    <h1>${esc(T(K.h1))}</h1>
    <i class="notch" aria-hidden="true"></i>
    <p class="lead">${esc(T(K.lead))}</p>
  </div>
</section>
<section class="section"><div class="wrap">
  <div class="menu">${fam}</div>
  <p class="note rv" style="margin-block-start:28px">${esc(T(K.note))}</p>
  <p class="rv" style="margin-block-start:20px"><a class="btn" href="${c.url('home')}#contact">${esc(T(K.cta))}${ICON.arrow}</a></p>
</div></section>`;
  return page(c, 'facade', { title: T(K.meta.title), desc: T(K.meta.desc), body });
}
