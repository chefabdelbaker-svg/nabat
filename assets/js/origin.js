/* NABAT — Origin : catalogue filtrable, sélection persistante, demande de projet.
   Fonctionne par-dessus du HTML déjà complet (le catalogue reste lisible sans JS). */
(() => {
  'use strict';
  const d = document;
  const $ = (s, c = d) => c.querySelector(s);
  const $$ = (s, c = d) => [...c.querySelectorAll(s)];
  const cfg = (window.NB && window.NB.cfg) || {}, S = cfg.s || {};
  const KEY = 'nabat-origin-request';
  let names = {};
  try { names = JSON.parse($('#nb-names').textContent); } catch (e) { /* page sans noms */ }

  /* --- Sélection (localStorage, avec repli mémoire si indisponible) --- */
  let mem = [];
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return mem; } };
  const save = (a) => { mem = a; try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) { /* ignoré */ } };
  let sel = load();

  const sync = () => {
    $$('[data-add]').forEach((b) => {
      const on = sel.includes(b.dataset.add);
      b.setAttribute('aria-pressed', on);
      b.textContent = on ? S.added : S.add;
    });
    $$('.badge').forEach((b) => { b.textContent = sel.length; b.hidden = !sel.length; });
    renderCart();
  };
  const toggle = (code) => {
    sel = sel.includes(code) ? sel.filter((c) => c !== code) : [...sel, code];
    save(sel); sync();
  };
  d.addEventListener('click', (e) => {
    const b = e.target.closest('[data-add]'); if (b) toggle(b.dataset.add);
    const r = e.target.closest('[data-rm]'); if (r) toggle(r.dataset.rm);
  });

  /* --- Catalogue : recherche + familles --- */
  const prods = $$('.prod'), blocks = $$('.fam-block'), q = $('#q'), count = $('#count'), empty = $('#empty');
  let fam = 'all';
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const filter = () => {
    const t = norm(q ? q.value.trim() : ''); let n = 0;
    prods.forEach((p) => {
      const ok = (fam === 'all' || p.dataset.fam === fam) && (!t || norm(p.dataset.search).includes(t));
      p.hidden = !ok; if (ok) n++;
    });
    blocks.forEach((b) => { b.hidden = !$$('.prod:not([hidden])', b).length; });
    if (count) count.textContent = n + ' ' + (S.refs || '');
    if (empty) empty.hidden = n > 0;
  };
  if (prods.length) {
    q && q.addEventListener('input', filter);
    $$('.chip').forEach((c) => c.addEventListener('click', () => {
      fam = c.dataset.fam; $$('.chip').forEach((x) => x.setAttribute('aria-pressed', x === c));
      filter(); const first = $('.fam-block:not([hidden])'); if (first && fam !== 'all') first.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
    // lien profond : /catalogue/#famille
    const h = location.hash.slice(1), chip = h && $(`.chip[data-fam="${CSS.escape(h)}"]`); if (chip) chip.click();
    filter();
  }

  /* --- Tarifs : recherche dans le tableau des codes --- */
  const rows = $$('.tbl .r:not(.h)'), tq = $('#tq'), tc = $('#tc');
  if (rows.length && tq) {
    const f = () => { const t = norm(tq.value.trim()); let n = 0; rows.forEach((r) => { const ok = !t || norm(r.dataset.search).includes(t); r.hidden = !ok; if (ok) n++; }); if (tc) tc.textContent = n + ' ' + (S.refs || ''); };
    tq.addEventListener('input', f); f();
  }

  /* --- Démarrer un projet --- */
  const cart = $('#cart');
  function renderCart() {
    if (!cart) return;
    const ul = $('ul', cart), e = $('.e', cart);
    ul.innerHTML = '';
    sel.forEach((c) => {
      const li = d.createElement('li');
      const s = d.createElement('span'); s.textContent = `${c} · ${names[c] || ''}`;
      const b = d.createElement('button'); b.type = 'button'; b.dataset.rm = c; b.setAttribute('aria-label', S.remove + ' ' + c); b.textContent = '×';
      li.append(s, b); ul.append(li);
    });
    e.hidden = sel.length > 0;
  }
  const form = $('#project');
  if (form) {
    form.addEventListener('submit', (ev) => ev.preventDefault());
    const radio = (n) => { const r = form.querySelector(`input[name="${n}"]:checked`); return r ? r.value : ''; };
    $$('[data-act]', form).forEach((b) => b.addEventListener('click', () => {
      const v = (n) => (form.elements[n] ? form.elements[n].value.trim() : '');
      if (!v('company') && !v('name')) { form.elements.company.focus(); window.NB.toast(S.needName); return; }
      const L = [S.greetB2B, ''];
      const add = (k, val) => { if (val) L.push(`${k}: ${val}`); };
      add(S.lCompany, v('company')); add(S.lName, v('name')); add(S.lPhone, v('phone')); add(S.lActivity, v('activity'));
      add(S.lVolumes, v('volumes')); add(S.lFreq, radio('freq')); add(S.lMode, radio('mode')); add(S.lSite, v('site')); add(S.lMessage, v('message'));
      if (sel.length) { L.push('', S.lSelection + ':'); sel.forEach((c) => L.push(`- ${c} · ${names[c] || ''}`)); }
      window.NB.send(b.dataset.act, L.join('\n'), S.subjectB2B);
    }));
    const cp = $('#copy-mail');
    if (cp) cp.addEventListener('click', () => { (navigator.clipboard ? navigator.clipboard.writeText(cfg.mail) : Promise.reject()).then(() => window.NB.toast(S.copied)).catch(() => window.NB.toast(cfg.mail)); });
  }
  sync();
})();
