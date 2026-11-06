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

  /* Turnstile įkeliamas tik pirmą kartą palietus formą, kad nestabdytų puslapio */
  let tsScript;
  const turnstileApi = () => tsScript || (tsScript = new Promise((ok, no) => {
    if (window.turnstile) { ok(window.turnstile); return; }
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.onload = () => (window.turnstile ? ok(window.turnstile) : no(new Error('turnstile')));
    s.onerror = () => { tsScript = null; no(new Error('turnstile')); };
    document.head.append(s);
  }));
  /* Iš kur atėjo žmogus: tik šaltinio klasė ir pirmas kelias, be nuorodų ir asmens duomenų (Workerio kontraktas) */
  const safePath = (p) => (/^\/(?!\/)[/a-zA-Z0-9_~.%-]*$/.test(p) ? p.slice(0, 120) : '');
  const firstTouch = () => {
    const key = 'arbcut-first-touch';
    try { const s = JSON.parse(sessionStorage.getItem(key)); if (s && s.source) return s; } catch (e) { /* nėra */ }
    const q = new URLSearchParams(window.location.search);
    let host = '';
    try { host = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''; } catch (e) { /* nėra */ }
    const is = (d) => host === d || host.endsWith('.' + d);
    let source = 'directunknown';
    if (['gclid', 'gbraid', 'wbraid', 'gad_source'].some((k) => q.has(k))) source = 'GoogleAds';
    else if (host && host !== window.location.hostname.replace(/^www\./, '')) {
      if (is('chatgpt.com') || is('chat.openai.com')) source = 'ChatGPT';
      else if (is('perplexity.ai')) source = 'Perplexity';
      else if (is('copilot.microsoft.com')) source = 'Copilot';
      else if (is('gemini.google.com')) source = 'Gemini';
      else if (is('claude.ai')) source = 'Claude';
      else if (/^google\.[a-z.]+$/.test(host)) source = 'organicGoogle';
      else if (is('bing.com')) source = 'Bing';
      else if (['facebook.com', 'instagram.com', 'linkedin.com', 't.co', 'twitter.com', 'x.com', 'tiktok.com', 'youtube.com'].some(is)) source = 'social';
      else source = 'otherhost';
    }
    if ((source === 'directunknown' || source === 'otherhost') && [...q.keys()].some((k) => /^utm_/i.test(k))) source = 'utm';
    const t = { source, path: safePath(window.location.pathname) };
    try { sessionStorage.setItem(key, JSON.stringify(t)); } catch (e) { /* nebūtina */ }
    return t;
  };
  const touch = firstTouch();

  /* Nuotraukos: ribos atitinka Workerio kontraktą (iki 8 failų, 10 MiB, 25 MiB viso); mes leidžiame 5 */
  const MB = 1024 * 1024;
  const PHOTO_MAX = 5;
  const PHOTO_TYPES = /^image\/(jpeg|png|webp|heic|heif)$/;
  const withType = (f) => {
    if (f.type) return f;
    const ext = (f.name.match(/\.(jpe?g|png|webp|heic|heif)$/i) || [])[1];
    if (!ext) return f;
    const e = ext.toLowerCase();
    return new File([f], f.name, { type: 'image/' + (e === 'jpg' ? 'jpeg' : e), lastModified: f.lastModified });
  };
  /* Didelę nuotrauką sumažiname telefone, kad greičiau išsiųstų. Nepavykus (pvz., HEIC) paliekame originalą. */
  const shrink = async (f) => {
    if (f.size < 1.5 * MB || !/^image\/(jpeg|png|webp)$/.test(f.type) || !window.createImageBitmap) return f;
    try {
      const bmp = await createImageBitmap(f);
      const k = Math.min(1, 2000 / Math.max(bmp.width, bmp.height));
      const c = document.createElement('canvas');
      c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
      c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
      bmp.close();
      const blob = await new Promise((r) => c.toBlob(r, 'image/jpeg', 0.85));
      return blob && blob.size < f.size ? new File([blob], f.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' }) : f;
    } catch (x) { return f; }
  };

  /* Formos: validacija, siuntimas į Workerį; peržiūroje niekur nesiunčiama */
  $$('form.qf').forEach((form) => {
    const err = $('.qf__err:not([data-send-err])', form);
    const sendErr = $('[data-send-err]', form);
    const done = $('.qf__done', form);
    const required = $$('[required]', form);
    required.forEach((el) => el.addEventListener('input', () => {
      if (el.value.trim()) el.removeAttribute('aria-invalid');
    }));
    const valid = () => {
      let ok = true;
      required.forEach((el) => {
        const bad = !el.value.trim() || (el.type === 'tel' && el.value.replace(/\D/g, '').length < 8);
        el.toggleAttribute('aria-invalid', bad);
        if (bad) { el.setAttribute('aria-invalid', 'true'); ok = false; }
      });
      if (!ok) {
        if (err) err.hidden = false;
        const firstBad = $('[aria-invalid="true"]', form);
        firstBad && firstBad.focus();
      } else if (err) err.hidden = true;
      return ok;
    };
    /* Žemėlapio nuoroda Mantui: tiksli, jei paspausta „Mano vieta“, kitaip paieška pagal įrašytą adresą */
    const addr = $('input[data-addr]', form);
    const mapLink = () => {
      if (!addr) return '';
      const q = addr.value.trim();
      return addr.dataset.coords ? 'https://www.google.com/maps?q=' + addr.dataset.coords
        : q ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q) : '';
    };
    /* Vienu paspaudimu: naršyklės vieta → adresas (Photon). Nepavykus lieka rankinis įvedimas. */
    const loc = $('[data-locate]', form);
    const locMsg = $('[data-locate-msg]', form);
    const say = (t) => { if (locMsg) { locMsg.textContent = t; locMsg.hidden = !t; } };
    if (addr) addr.addEventListener('input', () => { delete addr.dataset.coords; say(''); });
    if (loc && addr && 'geolocation' in navigator) {
      loc.hidden = false;
      loc.addEventListener('click', () => {
        if (loc.getAttribute('aria-busy') === 'true') return;
        loc.setAttribute('aria-busy', 'true'); say('Nustatome vietą…');
        const before = addr.value; /* nuo paspaudimo: jei žmogus rašo pats, rezultatas atmetamas */
        navigator.geolocation.getCurrentPosition(async (pos) => {
          const { latitude: lat, longitude: lon, accuracy } = pos.coords;
          const point = lat.toFixed(5) + ',' + lon.toFixed(5);
          let found = '';
          try {
            const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 5000);
            const r = await fetch('https://photon.komoot.io/reverse?lat=' + lat + '&lon=' + lon + '&limit=1', { signal: ctl.signal });
            clearTimeout(t);
            const p = r.ok ? ((await r.json()).features || [])[0]?.properties : null;
            if (p) found = [[p.street, p.housenumber].filter(Boolean).join(' '), p.city || p.town || p.village || p.district || p.county].filter(Boolean).join(', ');
          } catch (e) { /* lieka koordinatės */ }
          loc.removeAttribute('aria-busy');
          if (addr.value !== before) { say(''); return; }
          addr.value = found || point.replace(',', ', ');
          addr.dataset.coords = point;
          say(accuracy > 500 ? 'Vieta apytikslė. Patikslinkite adresą.' : 'Vieta nustatyta. Patikrinkite adresą.');
        }, (e) => {
          loc.removeAttribute('aria-busy');
          say(e.code === 1 ? 'Naršyklė neleido nustatyti vietos. Įrašykite adresą ranka.' : 'Nepavyko nustatyti vietos. Įrašykite adresą ranka.');
        }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
      });
    }
    /* Telefonuose: atidaro žmogaus SMS programėlę su užpildyta žinute. Išsiunčia pats žmogus. */
    const smsBtn = $('[data-sms-send]', form);
    if (smsBtn && window.matchMedia('(pointer: coarse)').matches) {
      smsBtn.hidden = false;
      smsBtn.addEventListener('click', (e) => {
        if (!valid()) { e.preventDefault(); return; }
        const val = (n) => { const f = form.elements[n]; return f ? f.value.trim() : ''; };
        const body = ['Sveiki, norėčiau sužinoti kainą.',
          val('service') && 'Paslauga: ' + val('service'),
          'Darbas: ' + val('message'),
          val('location') && 'Adresas: ' + val('location'),
          mapLink() && 'Žemėlapis: ' + mapLink(),
          val('name') && 'Vardas: ' + val('name'),
          'Tel.: ' + val('phone')].filter(Boolean).join('\n');
        smsBtn.href = smsBtn.dataset.sms + '?&body=' + encodeURIComponent(body);
        if (picked.length) fileSay('SMS žinutėje nuotraukas pridėkite patys.');
      });
    }
    /* Nuotraukų pasirinkimas: failai laikomi sąraše, kad būtų galima pašalinti po vieną */
    const fileInput = $('[data-files-input]', form);
    const fileList = $('[data-files-list]', form);
    const fileMsg = $('[data-files-msg]', form);
    let picked = [];
    let prep = Promise.resolve();
    const fileSay = (t) => { if (fileMsg) { fileMsg.textContent = t; fileMsg.hidden = !t; } };
    const drawFiles = () => {
      if (!fileList) return;
      fileList.textContent = '';
      fileList.hidden = !picked.length;
      picked.forEach((p, i) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = p.url; img.alt = '';
        img.addEventListener('error', () => { const s = document.createElement('span'); s.className = 'qf__fn'; s.textContent = p.file.name; img.replaceWith(s); });
        const x = document.createElement('button');
        x.type = 'button'; x.textContent = '×'; x.setAttribute('aria-label', 'Pašalinti nuotrauką ' + (i + 1) + ': ' + p.file.name);
        x.disabled = form.classList.contains('is-submitting');
        x.addEventListener('click', () => {
          URL.revokeObjectURL(p.url);
          picked.splice(i, 1); fileSay(''); drawFiles();
          const next = $$('button', fileList)[Math.min(i, picked.length - 1)];
          (next || fileInput).focus();
        });
        li.append(img, x);
        fileList.append(li);
      });
    };
    const addFiles = async (files) => {
      let problem = '';
      for (const raw of files) {
        if (picked.length >= PHOTO_MAX) { problem = 'Galima pridėti iki ' + PHOTO_MAX + ' nuotraukų.'; break; }
        const typed = withType(raw);
        if (!PHOTO_TYPES.test(typed.type)) { problem = 'Tinka tik nuotraukos: JPG, PNG, WEBP arba HEIC.'; continue; }
        const f = await shrink(typed);
        if (f.size > 10 * MB) { problem = 'Nuotrauka per didelė: viena gali būti iki 10 MB.'; continue; }
        if (picked.reduce((a, p) => a + p.file.size, 0) + f.size > 18 * MB) { problem = 'Nuotraukos per didelės: visos kartu gali būti iki 18 MB.'; break; }
        picked.push({ file: f, url: URL.createObjectURL(f) });
      }
      fileSay(problem); drawFiles();
    };
    if (fileInput) fileInput.addEventListener('change', () => {
      const files = [...fileInput.files];
      fileInput.value = '';
      fileSay('');
      prep = prep.then(() => addFiles(files));
    });

    /* Turnstile: nematomas, kol Cloudflare nepaprašo patvirtinimo. Po kiekvieno bandymo žetonas keičiamas. */
    const tsBox = $('[data-turnstile]', form);
    const started = Date.now();
    let widget, token = '', waiting = [];
    const gotToken = (t) => { token = t; waiting.splice(0).forEach((f) => f(t)); };
    const armTurnstile = () => {
      if (!tsBox || widget !== undefined) return Promise.resolve();
      return turnstileApi().then((ts) => {
        if (widget !== undefined) return;
        widget = ts.render(tsBox, {
          sitekey: tsBox.dataset.sitekey, appearance: 'interaction-only', size: 'flexible', language: 'lt',
          callback: gotToken,
          'expired-callback': () => { token = ''; ts.reset(widget); },
          'error-callback': () => { gotToken(''); },
        });
      });
    };
    if (tsBox) form.addEventListener('focusin', () => { armTurnstile().catch(() => {}); }, { once: true });
    const getToken = async () => {
      if (!tsBox) return '';
      await armTurnstile();
      return token || new Promise((res) => { waiting.push(res); setTimeout(() => res(''), 15000); });
    };
    const send = async () => {
      await prep;
      const data = new FormData(form);
      data.delete('files');
      picked.forEach((p) => data.append('files', p.file, p.file.name));
      const map = mapLink();
      if (map) data.set('message', data.get('message').trim() + '\n\nŽemėlapis: ' + map);
      data.set('source', touch.source);
      if (touch.path) data.set('landing_path', touch.path);
      const page = safePath(window.location.pathname);
      if (page) data.set('page', page);
      data.set('elapsed_ms', String(Math.min(86400000, Date.now() - started)));
      const t = await getToken().catch(() => '');
      if (t) data.set('cf-turnstile-response', t);
      const r = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(90000) });
      return r.status;
    };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!valid() || form.classList.contains('is-submitting')) return;
      if (form.dataset.preview === '1') {
        form.classList.add('is-done');
        if (done) { done.hidden = false; done.focus(); }
        window.__arbcutPreviewSubmits = (window.__arbcutPreviewSubmits || 0) + 1;
        window.__arbcutPreviewFiles = picked.length;
        return;
      }
      form.classList.add('is-submitting');
      /* Siunčiant nuotraukų sąrašas užšaldomas: išsiunčiama ir išvaloma tai, ką žmogus matė paspausdamas */
      const lockFiles = (on) => {
        if (fileInput) fileInput.disabled = on;
        if (fileList) $$('button', fileList).forEach((b) => { b.disabled = on; });
      };
      lockFiles(true);
      if (sendErr) sendErr.hidden = true;
      const btn = $('.qf__btn', form);
      const label = btn ? btn.textContent : '';
      if (btn) btn.textContent = picked.length ? 'Siunčiame nuotraukas…' : 'Siunčiame…';
      let status = 0;
      try { status = await send(); } catch (x) { status = 0; }
      form.classList.remove('is-submitting');
      lockFiles(false);
      if (btn) btn.textContent = label;
      token = '';
      if (widget !== undefined && window.turnstile) { try { window.turnstile.reset(widget); } catch (x) { /* kitas bandymas užkraus iš naujo */ } }
      if (status >= 200 && status < 300) {
        picked.forEach((p) => URL.revokeObjectURL(p.url));
        picked = []; drawFiles();
        form.classList.add('is-done');
        if (done) { done.hidden = false; done.focus(); }
      } else if ((status === 413 || status === 415) && fileMsg) {
        fileSay('Nuotraukų išsiųsti nepavyko: per didelės arba netinkamo formato. Pašalinkite jas ir bandykite dar kartą.');
        fileList && fileList.scrollIntoView({ block: 'center' });
      } else if (sendErr) sendErr.hidden = false;
    });
  });
  /* Apatinė juosta telefone: tik kai ekrane nėra pirmo ekrano veiksmų ir užklausos formos,
     ir kai neatidarytas dialogas, meniu ar klausimo langas. Skambutis visada lieka antraštėje. */
  const barWatch = $$('.hero__acts, .phero .btn-row, form.qf:not(#ask-form):not(#dialog-form)');
  const inView = new Set();
  const askPanel = $('#ask-panel');
  const quoteDlg = $('#quote-dialog');
  const syncBar = () => {
    const covered = (quoteDlg && quoteDlg.open) || (mnav && !mnav.hidden) || (askPanel && !askPanel.hidden);
    document.documentElement.classList.toggle('mact-on', !inView.size && !covered);
  };
  if ('IntersectionObserver' in window) {
    const barIo = new IntersectionObserver((ents) => {
      ents.forEach((e) => (e.isIntersecting ? inView.add(e.target) : inView.delete(e.target)));
      syncBar();
    }, { rootMargin: '0px 0px -72px 0px' });
    barWatch.forEach((el) => barIo.observe(el));
    const mo = new MutationObserver(syncBar);
    [quoteDlg, mnav, askPanel].forEach((el) => el && mo.observe(el, { attributes: true, attributeFilter: ['open', 'hidden'] }));
    syncBar();
  } else document.documentElement.classList.add('mact-on');

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

  $$('[data-rv-expand]').forEach((button) => button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    button.closest('.rc').classList.toggle('is-expanded', expanded);
    button.textContent = expanded ? 'Rodyti trumpiau' : 'Skaityti visą atsiliepimą';
  }));

  /* Atsiliepimų lenta: šaltinio ir paslaugos filtrai, „Rodyti daugiau“ */
  $$('[data-rv-board]').forEach((board) => {
    const per = (matchMedia('(max-width: 600px)').matches ? +board.dataset.perMobile : +board.dataset.per) || 6;
    const items = $$('[data-rv-item]', board);
    const count = $('[data-rv-count]', board);
    const empty = $('[data-rv-empty]', board);
    const more = $('[data-rv-more]', board);
    const st = { src: 'visi', svc: 'visos', limit: per };
    const match = (it) => {
      const c = it.firstElementChild;
      return (st.src === 'visi' || c.dataset.src === st.src) && (st.svc === 'visos' || c.dataset.svc === st.svc);
    };
    function render() {
      const m = items.filter(match);
      items.forEach((it) => { it.hidden = true; });
      m.slice(0, st.limit).forEach((it) => { it.hidden = false; });
      const shown = Math.min(st.limit, m.length);
      if (count) count.textContent = `Rodoma ${shown} iš ${m.length} naujausių`;
      if (empty) empty.hidden = m.length > 0;
      if (more) more.hidden = m.length <= st.limit;
    }
    const group = (attr, key) => {
      const btns = $$(`[${attr}]`, board);
      btns.forEach((b) => b.addEventListener('click', () => {
        st[key] = b.getAttribute(attr); st.limit = per;
        btns.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        render();
      }));
    };
    group('data-rv-src', 'src'); group('data-rv-svc', 'svc');
    more && more.addEventListener('click', () => {
      const before = items.filter((it) => !it.hidden).length;
      st.limit += per; render();
      const next = items.filter((it) => !it.hidden)[before];
      const f = next && next.querySelector('article');
      if (f) { f.setAttribute('tabindex', '-1'); f.focus({ preventScroll: false }); }
    });
    render();
  });

  /* Google verslo profilis (Places UI Kit). Gamyboje — priartėjus; peržiūroje — tik paspaudus. */
  $$('[data-gp]').forEach((box) => {
    const slot = $('[data-gp-slot]', box), fail = $('[data-gp-fail]', box), wait = $('[data-gp-wait]', box);
    const id = box.dataset.place, key = box.dataset.key;
    let started = false;
    const giveUp = () => { if (wait) wait.hidden = true; if (fail) fail.hidden = false; };
    async function load() {
      if (started) return; started = true;
      const btn = $('[data-gp-load]', box); btn && btn.remove();
      if (!key) return giveUp();
      if (wait) wait.hidden = false;
      try {
        if (!(window.google && google.maps && google.maps.importLibrary)) {
          /* Oficialus Google „dynamic library import“ įkėlėjas */
          (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({ key, v: 'weekly', language: 'lt' });
        }
        await google.maps.importLibrary('places');
        const el = document.createElement('gmp-place-details');
        const req = document.createElement('gmp-place-details-place-request');
        req.setAttribute('place', id);
        el.append(req);
        ['gmp-place-rating', 'gmp-place-reviews', 'gmp-place-attribution'].forEach((t) => el.append(document.createElement(t)));
        let ok = false;
        el.addEventListener('gmp-load', () => { ok = true; if (wait) wait.hidden = true; });
        el.addEventListener('gmp-error', giveUp);
        slot.append(el);
        setTimeout(() => { if (!ok) giveUp(); }, 15000);
      } catch (err) { giveUp(); }
    }
    const b = $('[data-gp-load]', box);
    b && b.addEventListener('click', load);
    if (box.dataset.auto === '1') {
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((en) => { if (en.some((x) => x.isIntersecting)) { io.disconnect(); load(); } }, { rootMargin: '600px 0px' });
        io.observe(box);
      } else load();
    }
  });

  /* Google žemėlapis — tik paspaudus */
  $$('[data-map-load]').forEach((b) => b.addEventListener('click', () => {
    const box = b.closest('[data-map]');
    const f = document.createElement('iframe');
    f.src = b.dataset.src; f.title = 'ArbCut aptarnavimo zona Google žemėlapyje'; f.loading = 'lazy';
    f.referrerPolicy = 'no-referrer-when-downgrade'; f.allowFullscreen = true;
    box.replaceChildren(f);
    f.setAttribute('tabindex', '0'); f.focus();
  }));

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

  /* Adreso pasiūlymai (v5): Photon (komoot, nemokama vieša API; saikingai: nuo 3 raidžių, 400 ms pauzė, iki 6, tik Lietuva).
     Neveikiant — lieka paprastas laukas ir naršyklės išsaugoti adresai. */
  const addrState = new WeakMap();
  document.addEventListener('input', (e) => {
    const inp = e.target;
    if (!inp.matches || !inp.matches('input[data-addr]')) return;
    const dl = inp.list; if (!dl) return;
    const st = addrState.get(inp) || { t: 0, ctl: null, last: '' }; addrState.set(inp, st);
    clearTimeout(st.t); const q = inp.value.trim();
    if (q.length < 3 || q === st.last) return;
    st.t = setTimeout(async () => {
      st.last = q; if (st.ctl) st.ctl.abort(); st.ctl = new AbortController();
      try {
        const r = await fetch('https://photon.komoot.io/api/?q=' + encodeURIComponent(q) + '&limit=6&bbox=20.9,53.89,26.84,56.45', { signal: st.ctl.signal });
        if (!r.ok) return;
        const j = await r.json(); const seen = new Set(); const opts = [];
        (j.features || []).forEach((f) => {
          const p = f.properties || {};
          const street = [p.street || (p.type === 'street' ? p.name : ''), p.housenumber].filter(Boolean).join(' ');
          const place = p.city || p.town || p.village || '';
          const parts = [(p.type === 'street' || p.type === 'house') ? '' : p.name, street, place, p.county || ''].filter(Boolean).filter((v, k, a) => a.indexOf(v) === k);
          const v = parts.join(', ');
          if (v && !seen.has(v)) { seen.add(v); const o = document.createElement('option'); o.value = v; opts.push(o); }
        });
        dl.replaceChildren(...opts);
      } catch (err) { /* rankinis įvedimas lieka */ }
    }, 400);
  });
})();
