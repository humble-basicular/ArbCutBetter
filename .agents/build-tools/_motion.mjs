// Record scroll/hover video + extract motion parameters from live reference homepages.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const out = '/tmp/v5-motion';
const sites = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const results = {};
for (const url of sites) {
  const name = new URL(url).hostname.replace(/^www\./, '').split('.')[0];
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, recordVideo: { dir: `${out}/${name}`, size: { width: 1440, height: 900 } } });
  const page = await ctx.newPage();
  const r = { url };
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(3500);
    // libraries + config
    r.libs = await page.evaluate(() => {
      const s = [...document.scripts].map((x) => x.src).filter(Boolean);
      const has = (re) => s.filter((x) => re.test(x));
      const aos = [...document.querySelectorAll('[data-aos]')].slice(0, 400);
      const aosAttrs = {};
      for (const el of aos) { const k = [el.dataset.aos, el.dataset.aosDuration, el.dataset.aosEasing, el.dataset.aosDelay, el.dataset.aosOffset].join('|'); aosAttrs[k] = (aosAttrs[k] || 0) + 1; }
      const ws = [...document.querySelectorAll('[class*="elementor-invisible"], [data-settings*="_animation"]')].slice(0, 200).map((e) => e.getAttribute('data-settings')).filter(Boolean);
      const anim = {}; for (const w of ws) { try { const j = JSON.parse(w); const k = [j._animation || j.animation, j._animation_delay || j.animation_delay].join('|'); anim[k] = (anim[k] || 0) + 1; } catch {} }
      return {
        lenis: !!(window.lenis || window.Lenis || document.documentElement.classList.contains('lenis')), lenisScripts: has(/lenis/i),
        aos: !!window.AOS, aosScripts: has(/aos/i), aosAttrs,
        gsap: !!window.gsap, scrollTrigger: !!window.ScrollTrigger, slick: !!(window.jQuery && window.jQuery.fn && window.jQuery.fn.slick), swiper: !!window.Swiper,
        elementorAnims: anim, wow: !!window.WOW,
        htmlClass: document.documentElement.className.slice(0, 200),
      };
    });
    // collect transitions/animations used in CSS rules
    r.css = await page.evaluate(() => {
      const trans = {}, anims = {}, kf = new Set();
      for (const sh of document.styleSheets) { let rules; try { rules = sh.cssRules; } catch { continue; } 
        const walk = (rs) => { for (const ru of rs) { if (ru.cssRules && !ru.style) walk(ru.cssRules); if (ru.type === 7) kf.add(ru.name); if (!ru.style) continue;
          const t = ru.style.transition; if (t && t !== 'none' && !/^all 0s/.test(t)) trans[t] = (trans[t] || 0) + 1;
          const a = ru.style.animation; if (a && a !== 'none') anims[a] = (anims[a] || 0) + 1; } };
        walk(rules); }
      const top = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, 25);
      return { transitions: top(trans), animations: top(anims), keyframes: [...kf].slice(0, 40) };
    });
    // hover probe on primary buttons/cards
    const btn = page.locator('a[class*="btn"], a.button, .elementor-button, a[class*="button"]').first();
    if (await btn.count()) { const before = await btn.evaluate((e) => { const c = getComputedStyle(e); return { bg: c.backgroundColor, tf: c.transform, sh: c.boxShadow, tr: c.transition }; }); await btn.hover(); await page.waitForTimeout(600); const after = await btn.evaluate((e) => { const c = getComputedStyle(e); return { bg: c.backgroundColor, tf: c.transform, sh: c.boxShadow }; }); r.hoverBtn = { before, after }; }
    // slow scroll for the video, 120px steps every 60ms (~2000 px/s) then pause per screen
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < H; y += 450) { await page.mouse.wheel(0, 450); await page.waitForTimeout(700); }
    await page.waitForTimeout(800);
    // after scroll: count elements that became animated
    r.afterScroll = await page.evaluate(() => ({ aosAnimated: document.querySelectorAll('.aos-animate').length, elementorAnimated: document.querySelectorAll('.animated').length }));
  } catch (e) { r.error = String(e).slice(0, 200); }
  await ctx.close();
  results[name] = r;
  console.log(name, JSON.stringify(r).slice(0, 300));
}
fs.writeFileSync(`${out}/motion-extract.json`, JSON.stringify(results, null, 2));
await browser.close();
