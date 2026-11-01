/* NABATE — comportements communs (vanilla JS, aucune dépendance).
   La langue N'EST PAS gérée ici : chaque langue a sa propre URL (/en/, /fr/, /ar/).
   Configuration injectée par le générateur dans <script id="nb-cfg" type="application/json">. */
(() => {
  'use strict';
  const d = document, root = d.documentElement;
  const $ = (s, c = d) => c.querySelector(s);
  const $$ = (s, c = d) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cfg = {};
  try { cfg = JSON.parse($('#nb-cfg').textContent); } catch (e) { /* page sans config */ }
  window.NB = window.NB || {}; window.NB.cfg = cfg;
  root.classList.add('js');

  /* --- En-tête : fond plein après défilement --- */
  const hd = $('.hd');
  if (hd && !hd.classList.contains('solid-always')) {
    const on = () => hd.classList.toggle('solid', scrollY > 40);
    on(); addEventListener('scroll', on, { passive: true });
  }

  /* --- Menu mobile --- */
  const burger = $('.burger'), drawer = $('.drawer');
  const setMenu = (open) => {
    d.body.classList.toggle('menu-open', open);
    if (burger) { burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? burger.dataset.close : burger.dataset.open); }
  };
  if (burger && drawer) {
    burger.addEventListener('click', () => setMenu(!d.body.classList.contains('menu-open')));
    drawer.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  }

  /* --- Découpe des titres en mots (animation d'entrée) --- */
  $$('.split').forEach((el) => {
    let i = 0;
    const walk = (n) => [...n.childNodes].forEach((c) => {
      if (c.nodeType === 3) {
        const frag = d.createDocumentFragment();
        c.nodeValue.split(/(\s+)/).forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.append(' '); return; }
          const w = d.createElement('span'); w.className = 'w';
          const s = d.createElement('span'); s.textContent = p; s.style.setProperty('--i', i++);
          w.append(s); frag.append(w);
        });
        c.replaceWith(frag);
      } else if (c.nodeType === 1) walk(c);
    });
    walk(el);
  });

  /* --- Révélations au défilement --- */
  const targets = $$('.rv, .rv-x, .rv-img, .split, .formula, .wheat-draw');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    targets.forEach((t) => io.observe(t));
  } else targets.forEach((t) => t.classList.add('in'));

  /* --- Compteurs --- */
  const counters = $$('[data-count]');
  const run = (el) => {
    const end = +el.dataset.count, suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = end + suf; return; }
    const t0 = performance.now(), dur = 1800;
    const tick = (t) => { const p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 4))); el.textContent = v + suf; if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { run(e.target); co.unobserve(e.target); } }), { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  } else counters.forEach((c) => { c.textContent = c.dataset.count + (c.dataset.suffix || ''); });

  /* --- Parallaxe douce : expose --p (0 → 1) selon la position à l'écran --- */
  const pars = $$('[data-par]');
  if (pars.length && !reduce) {
    let ticking = false;
    const upd = () => {
      const h = innerHeight;
      pars.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > h + 100) return;
        el.style.setProperty('--p', Math.min(1, Math.max(0, (h - r.top) / (h + r.height))).toFixed(3));
      });
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    addEventListener('resize', upd); upd();
  }

  /* --- Toast --- */
  let tt;
  window.NB.toast = (msg) => {
    let t = $('.toast'); if (!t) { t = d.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); d.body.append(t); }
    t.textContent = msg; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2600);
  };

  /* --- Formulaires de contact : composent un message WhatsApp ou un e-mail (pas de serveur) --- */
  window.NB.send = (via, text, subject) => {
    if (via === 'wa') open('https://wa.me/' + cfg.wa + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    else location.href = 'mailto:' + cfg.mail + '?subject=' + encodeURIComponent(subject || cfg.subject) + '&body=' + encodeURIComponent(text);
  };
  $$('form[data-contact]').forEach((f) => {
    const S = cfg.s || {};
    f.addEventListener('submit', (e) => e.preventDefault());
    $$('[data-act]', f).forEach((b) => b.addEventListener('click', () => {
      const v = (n) => (f.elements[n] ? f.elements[n].value.trim() : '');
      if (!v('name')) { f.elements.name.focus(); window.NB.toast(S.needName || ''); return; }
      const lines = [S.greet, '', `${S.lName}: ${v('name')}`, v('company') && `${S.lCompany}: ${v('company')}`, v('interest') && `${S.lInterest}: ${v('interest')}`, v('phone') && `${S.lPhone}: ${v('phone')}`, v('message') && `${S.lMessage}: ${v('message')}`].filter((x) => x !== false && x !== '');
      window.NB.send(b.dataset.act, lines.join('\n'));
    }));
  });
})();

// Vidéo d'ambiance du héros : à l'arrêt si l'utilisateur préfère moins de mouvement
(() => {
  const v = document.querySelector('.hero-bg video');
  if (v && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); }
})();

// Lecteur audio : un seul son à la fois, jamais en lecture automatique.
(function () {
  var btns = document.querySelectorAll('[data-listen]');
  btns.forEach(function (b) {
    var a = b.parentNode.querySelector('audio'), t = b.querySelector('span');
    var set = function (on) { b.setAttribute('aria-pressed', on ? 'true' : 'false'); t.textContent = on ? b.dataset.pause : b.dataset.play; };
    b.addEventListener('click', function () {
      if (a.paused) { document.querySelectorAll('audio').forEach(function (o) { o.pause(); }); a.play(); } else { a.pause(); }
    });
    a.addEventListener('play', function () { set(true); });
    a.addEventListener('pause', function () { set(false); });
    a.addEventListener('ended', function () { set(false); });
  });
})();
