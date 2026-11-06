import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
for (const [r, w] of [['/', 390], ['/', 1440], ['/paslaugos/medziu-genejimas/', 390], ['/galerija/', 390]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 844 } })).newPage();
  await p.goto('http://localhost:4329' + r, { waitUntil: 'networkidle' });
  const m = await p.evaluate(() => new Promise(res => { let l = 0, c = 0; new PerformanceObserver(x => x.getEntries().forEach(e => l = e.startTime)).observe({ type: 'largest-contentful-paint', buffered: true }); new PerformanceObserver(x => x.getEntries().forEach(e => { if (!e.hadRecentInput) c += e.value; })).observe({ type: 'layout-shift', buffered: true }); setTimeout(() => { const e = performance.getEntriesByType('resource'); res({ lcp: Math.round(l), cls: +c.toFixed(3), kb: Math.round(e.reduce((a, x) => a + (x.decodedBodySize || 0), 0) / 1024), n: e.length }); }, 400); }));
  console.log(r, w, JSON.stringify(m)); await p.close();
}
await b.close();
