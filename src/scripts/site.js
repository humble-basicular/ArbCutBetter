/* ArbCut — svetainės elgsena (be priklausomybių).
   Antraštė | paslaugų meniu | mobilusis meniu | užklausos dialogas ir forma |
   nuotraukų peržiūra | galerijos filtras | nuosaikus atsiradimas. */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Antraštės šešėlis slenkant */
  const hdr = $('.hdr');
  const onScroll = () => hdr && hdr.classList.toggle('is-stuck', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Paslaugų išskleidžiamas meniu */
  const dropBtn = $('.hdr__dropbtn');
  const svc = $('#svc-menu');
  function setDrop(open) {
    if (!dropBtn || !svc) return;
    dropBtn.setAttribute('aria-expanded', String(open));
    svc.hidden = !open;
  }
  if (dropBtn && svc) {
    dropBtn.addEventListener('click', (e) => { e.stopPropagation(); setDrop(svc.hidden); });
    document.addEventListener('click', (e) => { if (!svc.hidden && !svc.contains(e.target)) setDrop(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !svc.hidden) { setDrop(false); dropBtn.focus(); }
    });
    svc.addEventListener('focusout', (e) => {
      if (!svc.contains(e.relatedTarget) && e.relatedTarget !== dropBtn) setDrop(false);
    });
  }

  /* Mobilusis meniu */
  const burger = $('.hdr__burger');
  const mnav = $('#mnav');
  function setMnav(open) {
    if (!mnav || !burger) return;
    mnav.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) { const c = $('.mnav__close', mnav); c && c.focus(); } else burger.focus();
  }
  burger && burger.addEventListener('click', () => setMnav(true));
  mnav && $('.mnav__close', mnav).addEventListener('click', () => setMnav(false));
  mnav && mnav.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMnav(false);
    if (e.key === 'Tab') {
      const f = $$('a, button', mnav).filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  mnav && $$('a', mnav).forEach((a) => a.addEventListener('click', () => setMnav(false)));

  /* Užklausos dialogas */
  const dlg = $('#quote-dialog');
  let lastTrigger = null;
  function openQuote(trigger) {
    if (!dlg) return;
    lastTrigger = trigger || null;
    const slugWanted = trigger && trigger.getAttribute('data-service');
    const sel = $('[data-service-select]', dlg);
    if (sel && slugWanted) {
      const opt = $$('option', sel).find((o) => o.dataset.slug === slugWanted);
      if (opt) sel.value = opt.value;
    }
    if (mnav && !mnav.hidden) {
      if (trigger && mnav.contains(trigger)) lastTrigger = burger;
      setMnav(false);
    }
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    const first = $('input:not([type=hidden]):not(.sr-only)', dlg);
    first && setTimeout(() => first.focus(), 30);
  }
  function closeQuote() {
    if (!dlg) return;
    dlg.close ? dlg.close() : dlg.removeAttribute('open');
  }
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-quote]');
    if (t) { e.preventDefault(); openQuote(t); }
  });
  if (dlg) {
    $$('[data-quote-close]', dlg).forEach((b) => b.addEventListener('click', closeQuote));
    dlg.addEventListener('click', (e) => { if (e.target === dlg) closeQuote(); });
    dlg.addEventListener('close', () => { lastTrigger && lastTrigger.focus && lastTrigger.focus(); });
  }

  /* Formos: validacija; peržiūroje — niekur nesiunčiama */
  $$('form.qf').forEach((form) => {
    const err = $('.qf__err', form);
    const done = $('.qf__done', form);
    const required = $$('[required]', form);
    required.forEach((el) => el.addEventListener('input', () => {
      if (el.value.trim()) el.removeAttribute('aria-invalid');
    }));
    form.addEventListener('submit', (e) => {
      let ok = true;
      required.forEach((el) => {
        const bad = !el.value.trim() || (el.type === 'tel' && el.value.replace(/\D/g, '').length < 8);
        el.toggleAttribute('aria-invalid', bad);
        if (bad) { el.setAttribute('aria-invalid', 'true'); ok = false; }
      });
      if (!ok) {
        e.preventDefault();
        if (err) err.hidden = false;
        const firstBad = $('[aria-invalid="true"]', form);
        firstBad && firstBad.focus();
        return;
      }
      if (err) err.hidden = true;
      if (form.dataset.preview === '1') {
        e.preventDefault();
        form.classList.add('is-done');
        if (done) { done.hidden = false; done.focus(); }
        window.__arbcutPreviewSubmits = (window.__arbcutPreviewSubmits || 0) + 1;
        return;
      }
      form.classList.add('is-submitting');
    });
  });
  /* Nuotraukų peržiūra (lightbox) — grupė pagal artimiausią [data-lb-group] */
  const lb = $('#lightbox');
  let lbItems = [], lbIdx = 0;
  function lbShow(i) {
    if (!lbItems.length) return;
    lbIdx = (i + lbItems.length) % lbItems.length;
    const it = lbItems[lbIdx];
    const img = $('.lb__img', lb);
    img.src = it.getAttribute('data-lightbox');
    img.alt = it.getAttribute('data-caption') || '';
    $('.lb__cap', lb).textContent = (it.getAttribute('data-caption') || '') + (lbItems.length > 1 ? ` · ${lbIdx + 1} / ${lbItems.length}` : '');
  }
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-lightbox]');
    if (!t || !lb) return;
    e.preventDefault();
    const group = t.closest('[data-lb-group]') || t.closest('ol, ul') || document;
    lbItems = $$('[data-lightbox]', group).filter((x) => x.offsetParent !== null);
    lbShow(lbItems.indexOf(t));
    lb.showModal ? lb.showModal() : lb.setAttribute('open', '');
    lb._trigger = t;
  });
  if (lb) {
    $('[data-lb-close]', lb).addEventListener('click', () => lb.close());
    $('[data-lb-prev]', lb).addEventListener('click', () => lbShow(lbIdx - 1));
    $('[data-lb-next]', lb).addEventListener('click', () => lbShow(lbIdx + 1));
    lb.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
      if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
    });
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
    lb.addEventListener('close', () => { lb._trigger && lb._trigger.focus(); });
  }

  /* Galerijos filtras */
  const filters = $$('[data-filter]');
  if (filters.length) {
    const tiles = $$('[data-cat]');
    filters.forEach((b) => b.addEventListener('click', () => {
      const f = b.getAttribute('data-filter');
      filters.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      tiles.forEach((t) => { t.hidden = !(f === 'visi' || t.getAttribute('data-cat') === f); });
      const c = $('[data-gallery-count]');
      c && (c.textContent = String(tiles.filter((t) => !t.hidden).length));
    }));
  }

  /* Mobili juosta pasitraukia, kol fokusas formos lauke */
  document.addEventListener('focusin', (e) => {
    if (e.target.matches && e.target.matches('input, textarea, select')) document.documentElement.classList.add('is-typing');
  });
  document.addEventListener('focusout', (e) => {
    if (e.target.matches && e.target.matches('input, textarea, select')) {
      setTimeout(() => { const a = document.activeElement; if (!a || !a.matches('input, textarea, select')) document.documentElement.classList.remove('is-typing'); }, 60);
    }
  });

  /* Nuosaikus atsiradimas */
  const rv = $$('.rv');
  if (rv.length && !reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    rv.forEach((el) => io.observe(el));
  } else rv.forEach((el) => el.classList.add('is-in'));
})();
