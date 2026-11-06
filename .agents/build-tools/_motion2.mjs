import { chromium } from 'playwright-core';
const sites = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
for (const url of sites) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }); await page.waitForTimeout(3000);
    await page.mouse.move(700, 450);
    // smooth-scroll curve
    await page.evaluate(() => { window.__s = []; const t0 = performance.now(); const f = () => { window.__s.push([Math.round(performance.now() - t0), Math.round(scrollY)]); if (performance.now() - t0 < 1600) requestAnimationFrame(f); }; requestAnimationFrame(f); });
    await page.mouse.wheel(0, 600); await page.waitForTimeout(1700);
    const s = await page.evaluate(() => window.__s);
    const fin = s[s.length - 1][1]; const t90 = (s.find((p) => p[1] >= fin * 0.9) || [0])[0]; const t10 = (s.find((p) => p[1] >= fin * 0.1) || [0])[0]; const tEnd = (s.find((p) => p[1] >= fin - 1) || [0])[0];
    // reveal probe: elements below fold with opacity<1 or transform before entering
    const probe = await page.evaluate(async () => {
      const els = [...document.querySelectorAll('h2, h3, img, .card, [class*="card"], section > div')].filter((e) => e.getBoundingClientRect().top > innerHeight + 200).slice(0, 60);
      const before = els.map((e) => { const c = getComputedStyle(e); return { o: c.opacity, t: c.transform, tr: c.transition, an: c.animationName }; });
      const hidden = before.filter((b) => b.o !== '1' || (b.t !== 'none' && b.t !== 'matrix(1, 0, 0, 1, 0, 0)'));
      return { n: els.length, hidden: hidden.length, sample: hidden.slice(0, 4) };
    });
    console.log(JSON.stringify({ url, scroll: { final: fin, t10, t90, tEnd, samples: s.length }, probe }));
  } catch (e) { console.log(url, 'ERR', String(e).slice(0, 120)); }
  await ctx.close();
}
await browser.close();
