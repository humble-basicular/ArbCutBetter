// Pradžios puslapio sąveikos (v3): atsiliepimų filtrai, žemėlapis, hero forma, mobili juosta, Google tuščia būsena.
import { chromium } from 'playwright-core';
const B = 'http://localhost:4329'; const out = []; const ok = (n, v, x = '') => out.push(`${v ? 'PASS' : 'FAIL'} ${n} ${x}`);
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const ext = []; const blocked = [];
const mk = async (o, allowMap) => { const c = await b.newContext(o); await c.route(/^https?:\/\/(?!localhost)/, r => { const u = r.request().url(); if (allowMap) { blocked.push(u); return r.abort(); } ext.push(u); r.abort(); }); return c; };
let c = await mk({ viewport: { width: 1440, height: 900 } }); let p = await c.newPage(); await p.goto(B + '/');
const vis = () => p.$$eval('[data-rv-item]', e => e.filter(x => !x.hidden).length);
ok('reviews: 6 shown initially', await vis() === 6);
await p.click('[data-rv-more]'); ok('reviews: more shows 12', await vis() === 12);
ok('reviews: focus moves to first new card', await p.evaluate(() => document.activeElement?.classList.contains('rc')));
const svcBtn = p.locator('[data-rv-svc]').nth(2); await svcBtn.focus(); await p.keyboard.press('Enter');
const svc = await svcBtn.getAttribute('data-rv-svc');
ok('reviews: service filter via keyboard', await p.$$eval('[data-rv-item]:not([hidden]) .rc', (e, s) => e.length > 0 && e.every(x => x.dataset.svc === s), svc), svc);
ok('reviews: aria-pressed updates', await svcBtn.getAttribute('aria-pressed') === 'true');
await p.click('[data-rv-src="paslaugos"]'); ok('reviews: source filter', await p.$$eval('[data-rv-item]:not([hidden]) .rc', e => e.every(x => x.dataset.src === 'paslaugos')));
ok('reviews: count text updates', /Rodoma \d+ iš \d+/.test(await p.innerText('[data-rv-count]')));
ok('google: preview empty state shown', await p.isVisible('.gp--empty'));
ok('google: no write-review link without place id', (await p.$$('a[href*="writereview"]')).length === 0);
ok('no external requests before clicks', ext.length === 0, ext.slice(0, 3).join(' '));
// hero short form
await p.click('#hero-form button[type=submit]'); await p.waitForTimeout(150);
ok('hero form: empty phone blocked', await p.isVisible('#hero-form .qf__err'));
await p.fill('#h-tel', '+370 600 00000'); await p.click('#hero-form button[type=submit]'); await p.waitForTimeout(200);
ok('hero form: preview submit inert', await p.isVisible('#hero-form .qf__done') && !/success/.test(p.url()));
ok('sms links', await p.$$eval('a[href^="sms:"]', a => a.length > 2 && a.every(x => x.getAttribute('href') === 'sms:+37060366901')));
// FAQ first open, keyboard toggle
ok('faq: first open', await p.$eval('.faqs details', d => d.open));
await c.close();
// map click-to-load
c = await mk({ viewport: { width: 1440, height: 900 } }, true); p = await c.newPage(); await p.goto(B + '/');
ok('map: no iframe before click', (await p.$$('[data-map] iframe')).length === 0);
await p.click('[data-map-load]'); await p.waitForTimeout(400);
ok('map: iframe after click', (await p.$$('[data-map] iframe')).length === 1);
ok('map: request only after click', blocked.some(u => /google\.com\/maps/.test(u)), blocked.slice(0,2).join(' '));
await c.close();
// mobile: sticky bar yields when field focused
c = await mk({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true }); p = await c.newPage(); await p.goto(B + '/');
await p.locator('#h-tel').scrollIntoViewIfNeeded(); await p.tap('#h-tel'); await p.waitForTimeout(300);
const r = await p.evaluate(() => { const f = document.querySelector('#h-tel').getBoundingClientRect(); const m = document.querySelector('.mact'); const mr = m.getBoundingClientRect(); const hidden = getComputedStyle(m).visibility === 'hidden'; return { hidden, overlap: !hidden && f.bottom > mr.top }; });
ok('mobile: sticky bar not over focused field', r.hidden || !r.overlap, JSON.stringify(r));
await p.evaluate(() => document.activeElement.blur()); await p.waitForTimeout(200);
ok('mobile: sticky bar back after blur', await p.evaluate(() => getComputedStyle(document.querySelector('.mact')).visibility === 'visible'));
// mobile: when scrolled so field is just above bar (not focused), check scroll-padding
await p.tap('[data-rv-src="paslaugos"]'); ok('mobile: review filter by touch', await p.getAttribute('[data-rv-src="paslaugos"]', 'aria-pressed') === 'true');
ok('mobile: header phone visible', await p.isVisible('.hdr__tel'));
await c.close();
// 320 header
c = await mk({ viewport: { width: 320, height: 640 } }); p = await c.newPage(); await p.goto(B + '/');
ok('320: header phone visible', await p.isVisible('.hdr__tel-n'));
ok('320: no h-overflow', await p.evaluate(() => document.documentElement.scrollWidth <= 320));
await c.close();
// reduced motion: nothing hidden, no transforms on tiles
c = await mk({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' }); p = await c.newPage(); await p.goto(B + '/');
ok('reduced motion: smooth scroll off', await p.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior !== 'smooth'));
await c.close();
await b.close();
console.log(out.join('\n')); console.log('external (unexpected):', ext.length);
