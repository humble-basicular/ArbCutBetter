import { chromium } from 'playwright-core';
const B = 'http://localhost:4329'; const out = []; const ok = (n, v, x = '') => out.push(`${v ? 'PASS' : 'FAIL'} ${n} ${x}`);
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const ext = [];
const mk = async (o) => { const c = await b.newContext(o); await c.route(/^https?:\/\/(?!localhost)/, r => { ext.push(r.request().method() + ' ' + r.request().url()); r.abort(); }); return c; };
// desktop services dropdown + keyboard
let c = await mk({ viewport: { width: 1440, height: 900 } }); let p = await c.newPage();
await p.goto(B + '/'); await p.click('.hdr__dropbtn');
ok('services menu opens', await p.isVisible('#svc-menu'));
await p.keyboard.press('Escape'); ok('services menu Esc closes', !(await p.isVisible('#svc-menu')));
ok('focus returns to services button', await p.evaluate(() => document.activeElement?.classList.contains('hdr__dropbtn')));
// quote dialog
await p.click('.hdr__quote'); ok('quote dialog opens', await p.isVisible('#quote-dialog'));
await p.keyboard.press('Escape'); ok('quote dialog Esc closes', !(await p.isVisible('#quote-dialog')));
await p.click('.hdr__quote');
const f = '#dialog-form';
await p.click(`${f} button[type=submit]`); await p.waitForTimeout(200);
ok('empty submit blocked', await p.isVisible('#quote-dialog') && !/Bandom|peržiūr/i.test(await p.innerText(`${f} [aria-live], ${f} .is-preview`).catch(() => '')));
const fields = await p.$$eval(`${f} input:not([type=hidden]), ${f} select, ${f} textarea`, e => e.map(x => ({ n: x.name, t: x.type, r: x.required, id: x.id, lab: !!(x.labels && x.labels.length) })));
console.log(JSON.stringify(fields));
ok('all fields labelled', fields.filter(x => x.t !== 'checkbox' || true).every(x => x.lab));
for (const x of fields) { if (x.t === 'file' || !x.r) continue; const s = `${f} [name="${x.n}"]`;
  if (x.t === 'select-one') await p.selectOption(s, { index: 1 }); else if (x.t === 'checkbox') await p.check(s); else if (x.t === 'tel') await p.fill(s, '+37060000000'); else if (x.t === 'email') await p.fill(s, 'test@example.com'); else await p.fill(s, 'Testas'); }
await p.click(`${f} button[type=submit]`); await p.waitForTimeout(500);
const txt = await p.innerText('#quote-dialog'); ok('preview submit shows test state', /peržiūr|bandom/i.test(txt), txt.slice(-160).replace(/\n/g,' | '));
ok('url unchanged, no nav', !/success/.test(p.url()), p.url());
await c.close();
// gallery lightbox
c = await mk({ viewport: { width: 1440, height: 900 } }); p = await c.newPage(); await p.goto(B + '/galerija/');
await p.locator('main button:has(img)').first().click(); await p.waitForTimeout(300);
ok('lightbox opens', await p.isVisible('#lightbox'));
const s1 = await p.getAttribute('.lb__img', 'src'); await p.keyboard.press('ArrowRight'); await p.waitForTimeout(250); const s2 = await p.getAttribute('.lb__img', 'src');
ok('lightbox arrow key next', s1 && s1 !== s2); ok('lightbox loaded', await p.$eval('.lb__img', i => i.naturalWidth > 0));
await p.keyboard.press('Escape'); ok('lightbox Esc closes', !(await p.isVisible('#lightbox')));
await c.close();
// mobile nav
c = await mk({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true }); p = await c.newPage(); await p.goto(B + '/');
await p.click('.hdr__burger'); await p.waitForTimeout(250); ok('mobile nav opens', await p.isVisible('#mnav'));
ok('burger aria-expanded', await p.getAttribute('.hdr__burger', 'aria-expanded') === 'true');
const lk = await p.$('#mnav a[href^="/paslaugos"]'); await lk.click(); await p.waitForLoadState(); ok('mobile nav link navigates', /paslaugos/.test(p.url()), p.url());
ok('tel link correct', await p.$$eval('a[href^="tel:"]', a => a.length > 0 && a.every(x => x.getAttribute('href') === 'tel:+37060366901')));
const bar = await p.evaluate(() => { const e = [...document.querySelectorAll('body *')].find(x => getComputedStyle(x).position === 'fixed' && x.getBoundingClientRect().bottom >= innerHeight - 2 && x.offsetHeight > 30); return e ? e.className : null; }); ok('mobile action bar pinned', !!bar, bar);
await c.close();
// keyboard + reduced motion
c = await mk({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' }); p = await c.newPage(); await p.goto(B + '/');
ok('reduced motion: nothing hidden', await p.$$eval('.rv', e => e.every(x => getComputedStyle(x).opacity === '1')));
await p.keyboard.press('Tab'); const first = await p.evaluate(() => ({ t: document.activeElement.textContent.trim().slice(0, 30), h: document.activeElement.getAttribute('href') })); ok('first tab = skip link', /#/.test(first.h || ''), JSON.stringify(first));
let noOutline = 0; for (let i = 0; i < 25; i++) { await p.keyboard.press('Tab'); const v = await p.evaluate(() => { const s = getComputedStyle(document.activeElement); return s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0 || s.boxShadow !== 'none'; }); if (!v) noOutline++; } ok('focus ring visible on 25 stops', noOutline === 0, 'missing ' + noOutline);
await c.close();
// no-JS
c = await b.newContext({ viewport: { width: 1440, height: 900 }, javaScriptEnabled: false }); p = await c.newPage(); await p.goto(B + '/');
ok('no-JS content visible', await p.isVisible('h1')); await c.close();
await b.close();
console.log(out.join('\n')); console.log('external requests:', ext.length, ext.slice(0, 5));
{
const b2 = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const c2 = await b2.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true }); const q = await c2.newPage(); await q.goto(B + '/');
await q.click('.hdr__burger'); await q.waitForTimeout(150); await q.click('#mnav [data-quote]'); await q.waitForTimeout(250);
console.log(await q.isVisible('#quote-dialog') ? 'PASS' : 'FAIL', 'quote from mobile nav opens');
console.log(await q.getAttribute('.hdr__burger', 'aria-expanded') === 'false' ? 'PASS' : 'FAIL', 'burger collapsed');
await q.keyboard.press('Escape'); await q.waitForTimeout(150);
console.log(await q.evaluate(() => document.activeElement?.classList.contains('hdr__burger')) ? 'PASS' : 'FAIL', 'focus back on burger');
await q.click('.hdr__quote, .mact [data-quote]').catch(() => {}); await q.waitForTimeout(200);
const v = await q.evaluate(() => { const f = document.querySelector('#dialog-form'); const t = f.querySelector('[name=Telefonas]'); const r = {}; for (const x of ['123', '+370 600 00000', '860000000', '12 34 56 78']) { t.value = x; r[x] = t.checkValidity(); } return r; });
console.log(v['123'] === false && v['+370 600 00000'] && v['860000000'] && v['12 34 56 78'] ? 'PASS' : 'FAIL', 'tel pattern matches custom rule', JSON.stringify(v));
await b2.close();
}
