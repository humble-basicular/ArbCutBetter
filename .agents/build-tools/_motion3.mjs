import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
for (const url of process.argv.slice(2)) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } }); const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }); await page.waitForTimeout(2500);
    const cands = await page.evaluate(() => {
      const out = []; let i = 0;
      for (const el of document.querySelectorAll('a, div, img, figure, li')) {
        const c = getComputedStyle(el); if (!/transform|all|box-shadow|filter|opacity/.test(c.transitionProperty) || c.transitionDuration === '0s') continue;
        const r = el.getBoundingClientRect(); if (r.width < 180 || r.height < 120) continue;
        el.setAttribute('data-mprobe', i); out.push({ i, tag: el.tagName, cls: String(el.className).slice(0, 50), tp: c.transitionProperty.slice(0, 60), td: c.transitionDuration, tf: c.transitionTimingFunction }); i++; if (i > 6) break;
      } return out; });
    for (const c of cands) {
      const loc = page.locator(`[data-mprobe="${c.i}"]`); await loc.scrollIntoViewIfNeeded().catch(() => {});
      const b = await loc.evaluate((e) => { const k = getComputedStyle(e); const im = e.querySelector('img'); return [k.transform, k.boxShadow.slice(0, 40), im ? getComputedStyle(im).transform : '', k.filter]; });
      await loc.hover({ force: true, timeout: 3000 }).catch(() => {}); await page.waitForTimeout(700);
      const a = await loc.evaluate((e) => { const k = getComputedStyle(e); const im = e.querySelector('img'); return [k.transform, k.boxShadow.slice(0, 40), im ? getComputedStyle(im).transform : '', k.filter]; });
      if (JSON.stringify(a) !== JSON.stringify(b)) console.log(new URL(url).hostname, JSON.stringify(c), 'BEFORE', JSON.stringify(b), 'AFTER', JSON.stringify(a));
    }
  } catch (e) { console.log(url, 'ERR', String(e).slice(0, 100)); }
  await ctx.close();
}
await browser.close();
