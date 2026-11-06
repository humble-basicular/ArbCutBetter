/* ArbCut v5 — subtilus judesys (žr. .agents/research/v5-motion-study.md).
   Tik transform/opacity. prefers-reduced-motion: viskas iškart galutinėje būsenoje.
   Be JS turinys matomas (klasės pridedamos tik čia). */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* Pasvirusios etiketės ir virvės linija: įsijungia, kai pasirodo */
  const once = (els, cls, margin = '0px 0px -10% 0px') => {
    if (!els.length) return;
    if (reduce || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add(cls)); return; }
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add(cls); io.unobserve(en.target); }
    }), { rootMargin: margin });
    els.forEach((e) => io.observe(e));
  };
  once($$('.rv-tag'), 'is-in');
  once($$('[data-rope]'), 'is-drawn', '0px 0px -5% 0px');

  /* Skaičių augimas: data-count="123" (data-dec="1" — vienas skaitmuo po kablelio) */
  const fmt = (v, dec) => dec ? v.toFixed(dec).replace('.', ',') : String(Math.round(v));
  const counters = $$('[data-count]');
  const run = (el) => {
    const to = parseFloat(el.dataset.count); const dec = parseInt(el.dataset.dec || '0', 10);
    if (reduce) { el.textContent = fmt(to, dec); return; }
    const t0 = performance.now(); const D = 1200;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / D); const e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(to * e, dec);
      if (k < 1) requestAnimationFrame(step); else el.textContent = fmt(to, dec);
    };
    requestAnimationFrame(step);
  };
  if (counters.length) {
    if (reduce || !('IntersectionObserver' in window)) counters.forEach(run);
    else {
      const io = new IntersectionObserver((ents) => ents.forEach((en) => {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      }), { rootMargin: '0px 0px -10% 0px' });
      counters.forEach((c) => io.observe(c));
    }
  }

  /* Paralaksas: data-parallax="0.15" — tik plačiame ekrane, tik transform */
  const px = $$('[data-parallax]');
  if (px.length && !reduce && window.matchMedia('(min-width: 961px)').matches) {
    let ticking = false;
    const upd = () => {
      ticking = false;
      const vh = window.innerHeight;
      px.forEach((el) => {
        const host = el.closest('[data-parallax-host]') || el.parentElement;
        const r = host.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const k = parseFloat(el.dataset.parallax);
        const y = (r.top + r.height / 2 - vh / 2) * -k;
        el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      });
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }
})();
