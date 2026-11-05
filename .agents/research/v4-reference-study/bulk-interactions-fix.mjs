// Targeted fix for interaction gaps left by bulk-interactions.mjs: mobile menu open at 390 and desktop dropdowns at 1440.
// Read-only: JS click on the menu toggle only, mouse hover on nav items; no forms, no submits, no evasion.
import { chromium } from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';
import fs from 'node:fs'; import os from 'node:os';
const ROOT = `${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4`;
const OUT = new URL('./bulk-interactions-fix.json', import.meta.url).pathname;
const jobs = JSON.parse(process.argv[2]); // [{site,url,role,checks:['mobile-menu','desktop-dropdowns']}]
const res = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : [];
const b = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const TOGGLE = 'button, a[href="#"], [role=button], header svg, header i, [class*="icon-menu"], [class*="mobile"][class*="btn"], [class*="trigger"], [aria-label*="menu" i],[aria-label*="navigation" i],[aria-controls],.elementor-menu-toggle,[class*="burger"],[class*="hamburger"],[class*="menu-toggle"],[class*="nav-toggle"],[class*="navbar-toggle"],.x-anchor-toggle,button[class*="toggle"]';
for (const j of jobs) for (const check of j.checks) {
  const width = check === 'mobile-menu' ? 390 : 1440, height = width === 390 ? 844 : 900;
  const dir = `${ROOT}/${j.site}/_interactions/${j.role}-fix/${width}`; fs.mkdirSync(dir, { recursive: true });
  const ctx = await b.newContext({ viewport: { width, height }, isMobile: width === 390, hasTouch: width === 390 });
  const p = await ctx.newPage(); const e = { site: j.site, url: j.url, role: j.role, check, width, screenshots: [] };
  try {
    await p.goto(j.url, { waitUntil: 'domcontentloaded', timeout: 45000 }); await p.waitForTimeout(3500);
    await p.screenshot({ path: `${dir}/${check}-0-before.jpg`, quality: 75, type: 'jpeg' }); e.screenshots.push(`${dir}/${check}-0-before.jpg`);
    if (check === 'mobile-menu') {
      // prime deferred scripts (page-speed plugins load JS on first interaction): small scroll + back, then wait
      await p.mouse.wheel(0, 300).catch(() => {}); await p.evaluate(() => scrollTo(0, 300)); await p.waitForTimeout(800); await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(2500);
      const cands = await p.evaluate(sel => [...document.querySelectorAll(sel)].map((el, i) => { el.dataset.fixIdx = i; const r = el.getBoundingClientRect(); return { i, tag: el.tagName, cls: String(el.className?.baseVal ?? el.className).slice(0, 80), aria: el.getAttribute('aria-label') || '', txt: el.textContent.trim().slice(0, 20), top: r.top, left: r.left, w: r.width, h: r.height, vis: r.width > 10 && r.height > 10 && r.width < 200 && r.top >= 0 && (r.top < 220 || r.top > innerHeight - 160) && r.bottom <= innerHeight && getComputedStyle(el).visibility !== 'hidden' }; }).filter(c => c.vis && !/close|search|cart|cookie|chat|onetap|accessib/i.test(c.cls + c.aria)), TOGGLE);
      cands.sort((a, b) => (/menu|toggle|burger|nav/i.test(b.cls + b.aria + (b.txt||'')) ? 1 : 0) - (/menu|toggle|burger|nav/i.test(a.cls + a.aria + (a.txt||'')) ? 1 : 0));
      e.candidates = cands.slice(0, 6);
      const linksBefore = await p.evaluate(() => [...document.querySelectorAll('a[href]')].filter(a => { const r = a.getBoundingClientRect(); if (!(r.width > 0 && r.height > 0 && r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth)) return false; const t = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return t && (a === t || a.contains(t) || t.contains(a)); }).length);
      for (const c of cands.slice(0, 5)) {
        await p.touchscreen.tap(c.left + c.w / 2, c.top + c.h / 2); await p.waitForTimeout(1500); e.method = 'touch tap'; { const f = `${dir}/mobile-menu-try-${c.i}.jpg`; await p.screenshot({ path: f, quality: 70, type: 'jpeg' }); e.screenshots.push(f); }
        const after = await p.evaluate(() => [...document.querySelectorAll('a[href]')].filter(a => { const r = a.getBoundingClientRect(); if (!(r.width > 0 && r.height > 0 && r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth)) return false; const t = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return t && (a === t || a.contains(t) || t.contains(a)); }).length);
        if (after > linksBefore + 3) {
          e.status = 'done'; e.toggle = c; e.visibleLinks = { before: linksBefore, after };
          await p.screenshot({ path: `${dir}/mobile-menu-1-open.jpg`, quality: 75, type: 'jpeg' }); e.screenshots.push(`${dir}/mobile-menu-1-open.jpg`);
          // expand first submenu toggle inside the open menu, if any
          const sub = await p.evaluate(() => { const t = [...document.querySelectorAll('[aria-expanded="false"], .sub-arrow, .elementor-sub-item, [class*="submenu-toggle"], [class*="dropdown-toggle"], .x-anchor-sub-indicator')].find(el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.top > 60 && r.top < innerHeight; }); if (t) { t.click(); return String(t.className).slice(0, 60) || t.tagName; } return null; });
          if (sub) { await p.waitForTimeout(900); await p.screenshot({ path: `${dir}/mobile-menu-2-submenu.jpg`, quality: 75, type: 'jpeg' }); e.screenshots.push(`${dir}/mobile-menu-2-submenu.jpg`); e.submenu = sub; }
          e.menuText = await p.evaluate(() => [...document.querySelectorAll('a[href]')].filter(a => { const r = a.getBoundingClientRect(); if (!(r.width > 0 && r.height > 0 && r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth)) return false; const t = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return t && (a === t || a.contains(t) || t.contains(a)); }).map(a => a.textContent.trim()).filter(Boolean).slice(0, 40));
          break;
        }
      }
      if (!e.status) { e.status = 'error'; e.reason = 'no candidate increased visible links'; }
    } else {
      const items = await p.evaluate(() => { const navs = [...document.querySelectorAll('header nav, nav, [role=navigation]')]; const out = []; for (const n of navs) for (const li of n.querySelectorAll('li')) { const sub = li.querySelector('ul, .sub-menu, [class*="dropdown"], [class*="sub"]'); const a = li.querySelector('a, button, span'); if (!sub || !a) continue; const r = a.getBoundingClientRect(); if (r.width > 0 && r.top >= 0 && r.top < 250) out.push({ text: a.textContent.trim().slice(0, 40), x: r.left + r.width / 2, y: r.top + r.height / 2 }); } return out.filter((v, i, s) => s.findIndex(o => o.text === v.text) === i).slice(0, 8); });
      e.items = items; let n = 0;
      for (const it of items) { await p.mouse.move(5, 5); await p.waitForTimeout(300); await p.mouse.move(it.x, it.y, { steps: 4 }); await p.waitForTimeout(900); const f = `${dir}/dropdown-${++n}.jpg`; await p.screenshot({ path: f, quality: 75, type: 'jpeg' }); e.screenshots.push(f); }
      e.status = items.length ? 'done' : 'not-present'; if (!items.length) e.reason = 'no nav li with submenu in top 250px';
    }
  } catch (err) { e.status = 'error'; e.reason = String(err).slice(0, 200); }
  await ctx.close(); res.push(e); console.log(j.site, j.role, check, e.status, e.reason || '', (e.toggle?.cls || '').slice(0, 40));
  fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
}
await b.close();
