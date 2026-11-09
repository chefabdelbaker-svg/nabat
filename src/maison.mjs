// Page « La Maison » : présentation (origine, qualité, chef, laboratoire, partenaire Bongard).
import { C, L } from './content.mjs';
import { DESC } from './menu-desc.mjs';
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

// Page « Menu » : carte indicative (sans prix), avec photos issues du catalogue.
export function menu(c, d) {
  const T = c.t, K = M2.menu, lang = c.lang;
  const chips = K.families.map((f) => `<a href="#m-${f.id}">${esc(T(f.t))}</a>`).join('');
  const norm = (x) => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const card = (it, i) => {
    const d = DESC[it.s] ? T(DESC[it.s]) : '';
    return `<figure class="mc rv" data-q="${esc(norm(T(it.t) + ' ' + d))}" style="--d:${(i % 4) * .05}s"><div class="ph">${c.img(`img/menu/${it.s}.webp`, '')}</div><figcaption>${esc(T(it.t))}${d ? `<span class="md">${esc(d)}</span>` : ''}</figcaption></figure>`;
  };
  const sPh = T(L('Search', 'Rechercher', 'بحث')), sNo = T(L('No result.', 'Aucun résultat.', 'لا توجد نتيجة.'));
  const fam = K.families.map((f, i) => {
    const amb = f.amb && c.exists(`img/menu/${f.amb}.webp`) ? `<figure class="mamb rv">${c.img(`img/menu/${f.amb}.webp`, '')}</figure>` : '';
    const head = `<div class="mh rv"><span class="k">${f.season ? '✦' : '0' + (i + 1)}</span><h2>${esc(T(f.t))}</h2><p>${esc(T(f.p))}</p></div>`;
    if (f.tabs) {
      const tabs = f.tabs.map((t) => ({ ...t, items: t.items.filter((it) => c.exists(`img/menu/${it.s}.webp`)) })).filter((t) => t.items.length);
      const btns = tabs.map((t, k) => `<button type="button" role="tab" class="ntab" id="nt-${t.id}" aria-controls="np-${t.id}" aria-selected="${k === 0}" tabindex="${k === 0 ? 0 : -1}" data-n="${t.id}">${esc(T(t.t))}</button>`).join('');
      const panels = tabs.map((t, k) => `<div role="tabpanel" class="npanel" id="np-${t.id}" aria-labelledby="nt-${t.id}"${k === 0 ? '' : ' hidden'}><div class="mgrid">${t.items.map(card).join('')}</div></div>`).join('');
      return `<section class="mfam season" id="m-${f.id}">${head}<div class="ntabs" role="tablist">${btns}</div>${panels}</section>`;
    }
    const items = (f.items || []).filter((it) => c.exists(`img/menu/${it.s}.webp`));
    const grid = items.length ? `<div class="mgrid">${items.map(card).join('')}</div>` : '';
    const list = (f.extra || []).length ? `<ul class="mlist">${f.extra.map((x) => `<li><b>${esc(T(x.t))}</b>${x.d ? `<span>${esc(T(x.d))}</span>` : ''}</li>`).join('')}</ul>` : '';
    return `<section class="mfam" id="m-${f.id}">${head}${amb}${grid}${list}</section>`;
  }).join('');
  const nscript = `<script>(function(){var t=document.querySelectorAll('.ntab');t.forEach(function(b){b.addEventListener('click',function(){t.forEach(function(x){var on=x===b;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById('np-'+x.dataset.n).hidden=!on});document.querySelectorAll('#np-'+b.dataset.n+' .rv').forEach(function(r){r.classList.add('in')});b.closest('.mfam').querySelectorAll('.npanel:not([hidden]) img[loading]').forEach(function(i){i.loading='eager'})});b.addEventListener('keydown',function(e){var a=[].slice.call(t),k=a.indexOf(b);if(e.key==='ArrowRight'||e.key==='ArrowLeft'){var n=a[(k+(e.key==='ArrowRight'?1:a.length-1))%a.length];n.focus();n.click()}})})})();</script>`;
  const sscript = `<script>(function(){var i=document.getElementById('msearch');if(!i)return;var n=function(x){return x.normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').toLowerCase()};i.addEventListener('input',function(){var q=n(i.value.trim()),on=q.length>0,any=false;document.querySelectorAll('.mfam').forEach(function(f){var seen=0;f.querySelectorAll('.mc').forEach(function(c){var m=!on||c.dataset.q.indexOf(q)>-1;c.hidden=!m;if(m){seen++;c.classList.add('in');c.querySelectorAll('img[loading]').forEach(function(g){g.loading='eager'})}});var tb=f.querySelector('.ntabs');if(tb){tb.hidden=on;f.querySelectorAll('.npanel').forEach(function(p){var sel=document.querySelector('#nt-'+p.id.slice(3)).getAttribute('aria-selected')==='true';p.hidden=on?!p.querySelector('.mc:not([hidden])'):!sel})}f.hidden=on&&!seen;if(seen)any=true});document.getElementById('msnone').hidden=!on||any})})();</script>`;
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
<nav class="mchips" aria-label="${esc(T(K.eyebrow))}"><div class="wrap"><div class="mc-scroll">${chips}</div><input type="search" id="msearch" class="msearch" placeholder="${esc(sPh)}" aria-label="${esc(sPh)}" autocomplete="off"></div></nav>
<section class="section"><div class="wrap">
  ${fam}
  ${nscript}
  ${sscript}
  <p class="msnone" id="msnone" hidden>${esc(sNo)}</p>
  <p class="note rv" style="margin-block-start:28px">${esc(T(K.note))}</p>
  <p class="rv" style="margin-block-start:20px"><a class="btn" href="${c.url('home')}#contact">${esc(T(K.cta))}${ICON.arrow}</a></p>
</div></section>`;
  return page(c, 'facade', { title: T(K.meta.title), desc: T(K.meta.desc), body });
}
