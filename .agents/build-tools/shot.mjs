// Usage: node shot.mjs <baseUrl> <outDir> <widths csv> <path> [path...]
// Saves full-page PNG + viewing slices; prints overflow + H1 line-break diagnostics as JSON lines.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [base, out, widthsCsv, ...paths] = process.argv.slice(2);
const widths = widthsCsv.split(',').map(Number);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
for (const w of widths) {
  const h = w < 500 ? 844 : w < 1000 ? 1024 : 900;
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: w < 500 ? 2 : 1, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (const i of document.images) i.loading = 'eager';
      const H = document.documentElement.scrollHeight;
      for (let y = 0; y < H; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
      window.scrollTo(0, 0);
      await Promise.all(Array.from(document.images).map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; setTimeout(r, 4000); })));
    });
    await page.waitForTimeout(400);
    const diag = await page.evaluate(() => {
      const sw = document.documentElement.scrollWidth, iw = window.innerWidth;
      const over = [];
      if (sw > iw) for (const el of document.querySelectorAll('body *')) { const r = el.getBoundingClientRect(); if (r.right > iw + 1 && getComputedStyle(el).position !== 'fixed') { over.push((el.className || el.tagName).toString().slice(0, 60)); if (over.length > 6) break; } }
      // Mid-word H1/H2 break check: any word whose characters span multiple line boxes
      const broken = [];
      for (const hEl of document.querySelectorAll('h1, h2')) {
        const txt = hEl.textContent; const walker = document.createTreeWalker(hEl, NodeFilter.SHOW_TEXT);
        let n; while ((n = walker.nextNode())) {
          const re = /\S+/g; let m;
          while ((m = re.exec(n.data))) {
            const rg = document.createRange(); rg.setStart(n, m.index); rg.setEnd(n, m.index + m[0].length);
            const tops = new Set(Array.from(rg.getClientRects()).filter((r) => r.width > 0).map((r) => Math.round(r.top)));
            if (tops.size > 1) broken.push(m[0]);
          }
        }
        if (!hEl.classList.contains('sr-only') && hEl.scrollWidth > hEl.clientWidth + 1) broken.push('OVERFLOW:' + txt.slice(0, 40));
      }
      return { sw, iw, over, broken, height: document.documentElement.scrollHeight };
    });
    const name = (p === '/' ? 'home' : p.replace(/^\//, '').replace(/\//g, '_')) + `-${w}`;
    console.log(JSON.stringify({ p, w, ...diag }));
    await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
    if (process.env.SLICES) {
      const sh = w < 500 ? 1400 : 1100;
      for (let y = 0, i = 0; y < diag.height; y += sh, i++) {
        await page.screenshot({ path: `${out}/${name}-s${String(i).padStart(2, '0')}.png`, fullPage: true, clip: { x: 0, y, width: w, height: Math.min(sh, diag.height - y) }, scale: 'css' });
      }
    }
  }
  await ctx.close();
}
await browser.close();
