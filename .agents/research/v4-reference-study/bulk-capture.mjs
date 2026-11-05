// Bulk research capture (approved 2026-11-05, brief 2026-11-05-1205-bulk-capture-brief.md).
// Real Chrome; no request/tracker blocking; never submits forms; never bypasses access control.
// Blocked pages (401/403/429/503, challenge titles) are recorded as `blocked` and retried once in an
// ordinary headed Chrome window (the brief's remedy), never with spoofing or evasion.
// Usage:
//   node bulk-capture.mjs                       full run, all sites, resumable
//   node bulk-capture.mjs --only URL [URL...]   capture just these URLs (smoke test), no crawl
//   node bulk-capture.mjs --sites a.com,b.com   restrict to sites
//   --pool 8 --per-site 2 --cap 800 --retry-blocked --no-headed-retry
import { chromium } from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import zlib from 'node:zlib';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
const pexec = promisify(execFile);
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = process.env.CAPTURE_ROOT || `${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4`;
const LEDGER = path.join(HERE, 'bulk-ledger.json');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const SITES = ['puetzconstruction.com', 'smockhvac.com', 'veteranscontractingllc.com', 'genzryan.com', 'northfaceconstruction.com', 'bearsplumbing.net', 'trueairconditioningandheating.com', 'homefrontexteriorsmn.com', 'callthelen.com', 'greentekroofing.com', 'theglassperts.com', 'vensland.lt', 'betonogaminiai.lt'];
const WIDTHS = (process.env.CAPTURE_WIDTHS || '1440,390').split(',').map(Number);
const UA_FETCH = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36';

// ---------- args ----------
const argv = process.argv.slice(2);
const opt = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const flag = k => argv.includes(k);
const POOL = +opt('--pool', 8), PER_SITE = +opt('--per-site', 2), CAP = +opt('--cap', 800);
const RETRY_BLOCKED = flag('--retry-blocked'), HEADED_RETRY = !flag('--no-headed-retry');
const ONLY = flag('--only') ? argv.slice(argv.indexOf('--only') + 1).filter(a => !a.startsWith('--')) : null;
const SITE_FILTER = opt('--sites', null)?.split(',');
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);

// ---------- URL rules ----------
const bare = h => h.replace(/^www\./, '').toLowerCase();
const slugOf = u => new URL(u).pathname.replace(/^\/|\/$/g, '').replaceAll('/', '__') || 'home'; // same as smock-capture.mjs
const EXCLUDE = /(^|\/)(wp-admin|wp-json|wp-login\.php|xmlrpc\.php|feed|rss|cart|checkout|my-account|login|cdn-cgi|wp-includes)(\/|$)/i;
const FILE_EXT = /\.(pdf|jpe?g|png|gif|webp|svg|avif|ico|bmp|tiff?|heic|zip|rar|7z|gz|docx?|xlsx?|pptx?|csv|mp4|mov|m4v|webm|avi|mp3|wav|m4a|txt|xml|json|js|css|woff2?|ttf|otf|eot|ics|vcf)$/i;
function classify(raw, base, site) {
  let u; try { u = new URL(raw, base); } catch { return null; }
  if (!/^https?:$/.test(u.protocol)) return null;           // mailto:, tel:, javascript: are not pages
  if (bare(u.hostname) !== site.key && !(site.L.aliases || []).includes(bare(u.hostname))) return null; // external
  u.hash = ''; u.search = '';
  const o = new URL(site.origin); u.protocol = o.protocol; u.host = o.host;
  const href = u.href;
  if (EXCLUDE.test(u.pathname)) return { kind: 'excluded', href };
  if (FILE_EXT.test(u.pathname) || /\/wp-content\/uploads\//i.test(u.pathname)) return { kind: 'file', href };
  return { kind: 'page', href, slug: slugOf(href) };
}

// ---------- ledger ----------
let ledger = fs.existsSync(LEDGER) ? JSON.parse(fs.readFileSync(LEDGER, 'utf8')) : { brief: '.agents/handoffs/2026-11-05-1205-bulk-capture-brief.md', sites: {} };
let dirty = false;
function saveLedger() {
  if (!dirty) return; dirty = false;
  ledger.updatedAt = new Date().toISOString();
  for (const [k, s] of Object.entries(ledger.sites)) {
    const c = {}; for (const e of Object.values(s.urls)) c[e.status] = (c[e.status] || 0) + 1; s.counts = c;
  }
  fs.writeFileSync(LEDGER + '.tmp', JSON.stringify(ledger, null, 1)); fs.renameSync(LEDGER + '.tmp', LEDGER);
}
const ledgerTimer = setInterval(saveLedger, 10000);
const siteLedger = key => (ledger.sites[key] ||= { origin: `https://${key}`, sitemaps: [], urls: {}, capped: false });

// ---------- site state ----------
const sites = new Map();
function addUrl(site, c, source) {
  if (!c) return;
  const L = site.L.urls;
  if (c.kind !== 'page') { const k = `${c.kind}:${new URL(c.href).pathname}`; if (!L[k]) { L[k] = { url: c.href, source, status: c.kind }; dirty = true; } return; }
  const e = L[c.slug];
  if (e) { if (e.status === 'capped' && site.pageCount < CAP) { /* stays capped */ } return; }
  site.pageCount++;
  if (site.pageCount > CAP) { L[c.slug] = { url: c.href, source, status: 'capped' }; if (!site.L.capped) log(`CAP ${site.key}: ${CAP} pages reached; further pages listed as capped`); site.L.capped = true; dirty = true; return; }
  L[c.slug] = { url: c.href, source, status: 'queued', widths: {} }; dirty = true;
  site.queue.push(c.slug);
}
function requeueFromLedger(site) {
  for (const [slug, e] of Object.entries(site.L.urls)) {
    if (!('widths' in e) && e.status !== 'capped') continue;
    site.pageCount++;
    if (e.status === 'queued-headed') { site.headedQueue.push(slug); continue; }
    if (['queued', 'running'].includes(e.status) || (e.status === 'failed') || (e.status === 'blocked' && RETRY_BLOCKED)) { e.status = 'queued'; e.attempts = 0; site.queue.push(slug); }
  }
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'user-agent': UA_FETCH, accept: '*/*' }, redirect: 'follow', signal: AbortSignal.timeout(20000) });
  let buf = Buffer.from(await res.arrayBuffer());
  if (url.endsWith('.gz') || (buf[0] === 0x1f && buf[1] === 0x8b)) buf = zlib.gunzipSync(buf);
  return { status: res.status, finalUrl: res.url, text: buf.toString('utf8') };
}
// Sitemap fallback through an ordinary Chrome navigation when plain fetch is refused (e.g. 403 to non-browsers).
async function browserText(url) {
  const b = await getBrowser(true); const ctx = await b.newContext(); const page = await ctx.newPage();
  try { const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }); return { status: res?.status(), finalUrl: page.url(), text: (await res?.text()) || '' }; }
  finally { await ctx.close().catch(() => {}); }
}
async function getText(url) {
  let r; try { r = await fetchText(url); } catch (e) { r = { status: 0, error: e.message }; }
  if ([401, 403, 429, 503, 0].includes(r.status)) { try { const b = await browserText(url); b.via = 'browser'; return b; } catch (e) { return r; } }
  return r;
}
async function discover(site) {
  site.L.sitemaps = [];
  let h = await getText(site.L.origin + '/'); if (!h.finalUrl) h = await getText(`http://${site.key}/`);
  if (h.finalUrl) { const f = new URL(h.finalUrl); if (bare(f.hostname) !== site.key) { site.L.aliases = [bare(f.hostname)]; log(`ALIAS ${site.key} → ${f.hostname}`); } site.L.origin = f.origin; }
  else log(`home fetch ${site.key}: ${h.error}`);
  site.origin = site.L.origin;
  addUrl(site, classify(site.origin + '/', site.origin, site), 'home');
  const maps = new Set(); const seen = new Set();
  try { const r = await getText(site.origin + '/robots.txt'); if (r.status === 200) for (const m of r.text.matchAll(/^\s*sitemap:\s*(\S+)/gim)) maps.add(m[1]); } catch {}
  for (const p of ['/sitemap.xml', '/sitemap_index.xml', '/wp-sitemap.xml']) maps.add(site.origin + p);
  const todo = [...maps];
  while (todo.length) {
    const sm = todo.shift(); if (seen.has(sm)) continue; seen.add(sm);
    let rec = { url: sm };
    try {
      const r = await getText(sm); rec.status = r.status; if (r.via) rec.via = r.via;
      if (r.status !== 200 || !/<(urlset|sitemapindex)/i.test(r.text)) { rec.note = 'not a sitemap'; site.L.sitemaps.push(rec); continue; }
      const locs = [...r.text.matchAll(/<loc>\s*(?:<!\[CDATA\[)?\s*([^<\]]+?)\s*(?:\]\]>)?\s*<\/loc>/gi)].map(m => m[1].replaceAll('&amp;', '&'));
      if (/<sitemapindex/i.test(r.text)) { rec.type = 'index'; rec.count = locs.length; locs.forEach(l => todo.push(l)); }
      else { rec.type = 'urlset'; rec.count = locs.length; for (const l of locs) addUrl(site, classify(l, sm, site), `sitemap:${sm}`); }
    } catch (e) { rec.error = e.message; }
    site.L.sitemaps.push(rec);
  }
  dirty = true;
  log(`DISCOVER ${site.key}: origin ${site.origin}, ${site.L.sitemaps.filter(s => s.type === 'urlset').length} url sitemaps, ${site.queue.length} queued`);
}

// ---------- browsers ----------
let headless = null, headed = null;
async function getBrowser(isHeaded) {
  if (isHeaded) { if (!headed?.isConnected()) headed = await chromium.launch({ headless: false, executablePath: CHROME }); return headed; }
  if (!headless?.isConnected()) headless = await chromium.launch({ headless: true, executablePath: CHROME }); return headless;
}
const BLOCK_TITLE = /Just a moment|Access denied|Attention Required|Verify you are human|Security check|Pardon Our Interruption|Request unsuccessful|Checking your browser|403 Forbidden/i;
class Blocked extends Error {}
class NotHtml extends Error {}
const withTimeout = (p, ms, what) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(`timeout ${ms}ms: ${what}`)), ms))]);

// Capture method: identical to smock-capture.mjs (scroll passes, content-visibility, decode + fonts,
// first viewport with fixed UI, hide fixed/sticky, CDP 2400-px clips at desktop, scrolled viewports + last crop at 390).
async function captureWidth(url, width, dir, isHeaded) {
  const height = width === 1440 ? 900 : 844;
  fs.mkdirSync(dir, { recursive: true });
  const browser = await getBrowser(isHeaded);
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, isMobile: width < 500, hasTouch: width < 500 });
  const page = await context.newPage();
  const r = { url, width, height, viewed: false, segments: [], capturedAt: new Date().toISOString(), captureScript: 'bulk-capture.mjs', browserMode: isHeaded ? 'headed' : 'headless' };
  try {
    await withTimeout((async () => {
      let response;
      try { response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }); }
      catch (e) { if (/Download is starting|net::ERR_ABORTED/.test(e.message)) throw new NotHtml(e.message); throw e; }
      r.status = response?.status(); r.finalUrl = page.url();
      const ct = response?.headers()['content-type'] || '';
      if (ct && !/html/i.test(ct)) throw new NotHtml(ct);
      if ([401, 403, 429, 503].includes(r.status) || BLOCK_TITLE.test(await page.title())) throw new Blocked(`HTTP ${r.status} / ${await page.title()}`);
      await page.waitForTimeout(1000);
      if (BLOCK_TITLE.test(await page.title())) throw new Blocked(`challenge title: ${await page.title()}`);
      await page.addStyleTag({ content: '* { content-visibility: visible !important; }' });
      for (let pass = 0; pass < 3; pass++) {
        const before = await page.evaluate(() => document.documentElement.scrollHeight);
        for (let y = 0; y < before; y += 650) { await page.evaluate(y => scrollTo(0, y), y); await page.waitForTimeout(80); }
        await page.waitForTimeout(350); const after = await page.evaluate(() => document.documentElement.scrollHeight); if (after === before) break;
      }
      await page.evaluate(async () => { await Promise.all([...document.images].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map(e => Promise.race([e.decode().catch(() => {}), new Promise(res => setTimeout(res, 12000))]))); });
      await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
      await page.evaluate(() => scrollTo(0, 0)); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(900);
      r.dom = await page.evaluate(() => {
        const style = e => { const s = getComputedStyle(e); return { font: s.fontFamily, size: s.fontSize, weight: s.fontWeight, lineHeight: s.lineHeight, color: s.color, bg: s.backgroundColor }; };
        const vw = innerWidth;
        const normCls = c => (typeof c === 'string' ? c : c?.baseVal || '').split(/\s+/).filter(Boolean)
          .map(t => t.replace(/[-_]?[0-9a-f]{6,}$/i, '').replace(/\d+/g, '#')).filter(t => t.length > 1 && !/^(elementor-element-#|wp-image-#|post-#|page-id-#|postid-#)$/.test(t)).sort().slice(0, 6).join('.');
        const wide = k => { const q = k.getBoundingClientRect(); return q.width >= vw * 0.6 && q.height >= 80; };
        const skeleton = [];
        (function walk(el, depth) {
          for (const c of el.children) {
            const s = getComputedStyle(c); if (s.display === 'none' || s.visibility === 'hidden' || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'LINK'].includes(c.tagName)) continue;
            if (!wide(c)) continue;
            const r = c.getBoundingClientRect(); const big = [...c.children].filter(wide);
            // wrappers (tall, mostly filled by wide children) are descended so the skeleton lists real sections
            const cover = big.reduce((a, k) => a + k.getBoundingClientRect().height, 0);
            if (depth < 12 && big.length >= 1 && r.height > innerHeight * 1.2 && cover >= r.height * 0.7) walk(c, depth + 1);
            else skeleton.push({ tag: c.tagName.toLowerCase(), cls: normCls(c.className), id: (c.id || '').replace(/\d+/g, '#'), y: Math.round(r.top + scrollY), h: Math.round(r.height), imgs: c.querySelectorAll('img').length, heads: c.querySelectorAll('h1,h2,h3').length, forms: c.querySelectorAll('form').length, links: c.querySelectorAll('a[href]').length });
          }
        })(document.body, 0);
        const fonts = {}, colors = {}, bgs = {};
        for (const e of document.querySelectorAll('body *')) {
          const r = e.getBoundingClientRect(); if (!r.width || !r.height) continue; const s = getComputedStyle(e);
          if ([...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) { const f = s.fontFamily.split(',')[0].replace(/["']/g, '').trim(); fonts[f] = (fonts[f] || 0) + 1; colors[s.color] = (colors[s.color] || 0) + 1; }
          if (s.backgroundColor !== 'rgba(0, 0, 0, 0)') bgs[s.backgroundColor] = (bgs[s.backgroundColor] || 0) + Math.round(r.width * r.height / 1000);
        }
        const top = (o, n) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);
        return { title: document.title, canonical: document.querySelector('link[rel=canonical]')?.href, metaDescription: document.querySelector('meta[name=description]')?.content, viewport: { width: innerWidth, height: innerHeight, devicePixelRatio }, pageHeight: document.documentElement.scrollHeight, scrollWidth: document.documentElement.scrollWidth, headings: [...document.querySelectorAll('h1,h2,h3')].map(e => ({ tag: e.tagName, text: e.textContent.trim(), ...style(e) })), links: [...document.querySelectorAll('a[href]')].map(e => ({ text: e.textContent.trim(), url: e.href })), forms: [...document.forms].map(f => ({ action: f.action, fields: [...f.elements].map(e => ({ tag: e.tagName, type: e.type, name: e.name, required: e.required, placeholder: e.placeholder })) })), images: [...document.images].map(e => ({ src: e.currentSrc, alt: e.alt, width: e.naturalWidth, height: e.naturalHeight, complete: e.complete })), schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map(e => e.textContent), animations: [...document.getAnimations()].map(a => ({ type: a.constructor.name, playState: a.playState })), fixed: [...document.querySelectorAll('body *')].filter(e => ['fixed', 'sticky'].includes(getComputedStyle(e).position)).map(e => ({ tag: e.tagName, id: e.id, class: String(e.className?.baseVal ?? e.className), text: e.textContent.trim().slice(0, 90) })), fonts: top(fonts, 10), colors: top(colors, 12), backgrounds: top(bgs, 12), skeleton };
      });
      await page.screenshot({ path: `${dir}/first-viewport.jpg`, quality: 75, type: 'jpeg' });
      await page.evaluate(() => { for (const e of document.querySelectorAll('body *')) if (['fixed', 'sticky'].includes(getComputedStyle(e).position)) { e.dataset.captureHidden = 'true'; e.style.setProperty('visibility', 'hidden', 'important'); } });
      r.documentHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      if (width !== 390) {
        const cdp = await context.newCDPSession(page);
        for (let y = 0; y < r.documentHeight; y += 2400) {
          const h = Math.min(2400, r.documentHeight - y), name = `segment-${String(y).padStart(6, '0')}.jpg`;
          const { data } = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 75, captureBeyondViewport: true, clip: { x: 0, y, width, height: h, scale: 1 } });
          fs.writeFileSync(`${dir}/${name}`, Buffer.from(data, 'base64')); r.segments.push({ file: name, y, height: h, viewed: false });
        }
      } else {
        for (let y = 0; y < r.documentHeight; y += height) {
          const h = Math.min(height, r.documentHeight - y), name = `segment-${String(y).padStart(6, '0')}.jpg`;
          await page.evaluate(y => scrollTo(0, y), y); await page.waitForTimeout(150);
          const actualY = await page.evaluate(() => scrollY);
          await page.screenshot({ path: `${dir}/${name}`, quality: 75, type: 'jpeg' });
          if (h < height) await pexec('python3', ['-c', "from PIL import Image;import sys; p=sys.argv[1]; im=Image.open(p);im.crop((0,round(float(sys.argv[2])),im.width,round(float(sys.argv[2]))+int(sys.argv[3]))).save(p,quality=80)", `${dir}/${name}`, String(y - actualY), String(h)]);
          r.segments.push({ file: name, y, height: h, actualScrollY: actualY, viewed: false });
        }
        r.captureMethod = 'scrolled viewport; last image cropped to exact remaining height';
      }
      r.captureComplete = true;
    })(), 240000, url);
  } catch (e) { r.error = String(e); r.errorKind = e instanceof Blocked ? 'blocked' : e instanceof NotHtml ? 'file' : 'error'; }
  finally { await context.close().catch(() => {}); }
  if (r.errorKind !== 'file') fs.writeFileSync(`${dir}/record.json`, JSON.stringify(r, null, 2));
  return r;
}

function readRecord(dir) { try { return JSON.parse(fs.readFileSync(`${dir}/record.json`, 'utf8')); } catch { return null; } }

async function processPage(site, slug, isHeaded = false) {
  const e = site.L.urls[slug]; e.status = 'running'; e.attempts = (e.attempts || 0) + 1; dirty = true;
  const base = `${ROOT}/${site.key}/${slug}`;
  const linkSets = [];
  for (const width of WIDTHS) {
    const dir = `${base}/${width}`; const prev = readRecord(dir);
    if (prev?.captureComplete) { e.widths[width] = e.widths[width] === 'captured' ? 'captured' : 'existing'; if (prev.dom?.links) linkSets.push(prev.dom.links); continue; }
    const r = await captureWidth(e.url, width, dir, isHeaded);
    e.httpStatus = r.status; if (r.finalUrl) e.finalUrl = r.finalUrl;
    if (r.errorKind === 'file') { e.status = 'file'; e.note = r.error; fs.rmSync(base, { recursive: true, force: true }); dirty = true; return; }
    if (r.errorKind === 'blocked') {
      if (!isHeaded && HEADED_RETRY) { site.headlessBlocks = (site.headlessBlocks || 0) + 1; if (site.headlessBlocks >= 3 && !site.headlessOk) site.preferHeaded = true; log(`BLOCKED headless ${e.url} @${width} → retry headed`); site.headedQueue.push(slug); e.status = 'queued-headed'; e.widths[width] = 'blocked-headless'; dirty = true; return; }
      e.status = 'blocked'; e.widths[width] = 'blocked'; e.error = r.error; site.blockedRun++; dirty = true; log(`BLOCKED ${e.url} @${width}: ${r.error}`); return;
    }
    if (r.errorKind === 'error') {
      e.widths[width] = 'failed'; e.error = r.error;
      if (e.attempts < 2) { e.status = 'queued'; site.queue.push(slug); } else e.status = 'failed';
      dirty = true; log(`FAIL(${e.attempts}) ${e.url} @${width}: ${r.error.slice(0, 160)}`); return;
    }
    site.blockedRun = 0; if (!isHeaded) site.headlessOk = true;
    // redirect to a different page on the same site: keep the capture, link the target so it is not lost
    if (r.finalUrl) { const t = classify(r.finalUrl, r.finalUrl, site); if (t?.kind === 'page' && t.slug !== slug) { e.redirectTo = t.href; addUrl(site, t, `redirect:${e.url}`); } else if (!t) e.redirectTo = r.finalUrl; }
    e.widths[width] = 'captured'; delete e.error;
    if (r.dom?.links) linkSets.push(r.dom.links);
    log(`OK ${site.key} ${slug} @${width} h=${r.documentHeight} seg=${r.segments.length}${r.status !== 200 ? ' HTTP ' + r.status : ''}`);
  }
  e.status = 'captured'; dirty = true;
  if (!ONLY) for (const links of linkSets) for (const l of links) addUrl(site, classify(l.url, e.url, site), `link:${slug}`);
}

// ---------- scheduler ----------
async function main() {
  const keys = ONLY ? [...new Set(ONLY.map(u => bare(new URL(u).hostname)))] : SITES.filter(k => !SITE_FILTER || SITE_FILTER.includes(k));
  for (const key of keys) {
    const L = siteLedger(key);
    sites.set(key, { key, L, origin: L.origin, queue: [], headedQueue: [], active: 0, pageCount: 0, blockedRun: 0 });
  }
  if (ONLY) {
    for (const u of ONLY) { const s = sites.get(bare(new URL(u).hostname)); const c = classify(u, u, s); if (c?.kind !== 'page') { log('not a page:', u); continue; } if (!s.L.urls[c.slug]) { s.L.urls[c.slug] = { url: c.href, source: 'smoke-test', status: 'queued', widths: {} }; } s.L.urls[c.slug].status = 'queued'; s.queue.push(c.slug); }
  } else {
    for (const s of sites.values()) requeueFromLedger(s);
    await Promise.all([...sites.values()].map(s => (s.L.sitemaps.some(m => m.type === 'urlset') ? Promise.resolve(s.origin = s.L.origin) : discover(s)).then(() => addUrl(s, classify(s.origin + '/', s.origin, s), 'home'))));
  }
  saveLedger();
  let active = 0, headedActive = 0, rr = 0;
  const HEADED_POOL = 3;
  const STOP_BLOCKED = 6; // after 6 consecutive final blocks on a site, stop hitting it; the rest are listed blocked for the manual redo
  const pick = () => {
    const list = [...sites.values()];
    for (let i = 0; i < list.length; i++) {
      const s = list[(rr + i) % list.length];
      if (s.active >= PER_SITE || s.blockedRun >= STOP_BLOCKED) continue;
      // a site whose headless pages are all blocked goes straight to the headed browser
      if (s.preferHeaded && s.queue.length) s.headedQueue.push(...s.queue.splice(0));
      if (s.headedQueue.length && headedActive < HEADED_POOL) { rr = (rr + i + 1) % list.length; return [s, s.headedQueue.shift(), true]; }
      if (s.queue.length) { rr = (rr + i + 1) % list.length; return [s, s.queue.shift(), false]; }
    }
    return null;
  };
  await new Promise(resolve => {
    const pump = () => {
      while (active < POOL) {
        const p = pick(); if (!p) break;
        const [s, slug, isHeaded] = p; const st = s.L.urls[slug]?.status; if (!['queued', 'queued-headed'].includes(st)) continue;
        active++; s.active++; if (isHeaded) headedActive++;
        processPage(s, slug, isHeaded).catch(err => { s.L.urls[slug].status = 'failed'; s.L.urls[slug].error = String(err); log('ERR', slug, err.message); })
          .finally(() => { active--; s.active--; if (isHeaded) headedActive--; pump(); });
      }
      if (active === 0) resolve();
    };
    pump();
  });
  // anything still queued because a site kept blocking
  for (const s of sites.values()) for (const slug of [...s.queue, ...s.headedQueue]) { const e = s.L.urls[slug]; if (['queued', 'queued-headed'].includes(e.status)) { e.status = 'blocked'; e.note = 'not attempted: site blocked repeatedly'; dirty = true; } }
  dirty = true; saveLedger(); clearInterval(ledgerTimer);
  for (const [k, s] of Object.entries(ledger.sites)) if (sites.has(k)) log(`SUMMARY ${k}: ${JSON.stringify(s.counts)}${s.capped ? ' CAPPED' : ''}`);
  await Promise.race([Promise.all([headless?.close().catch(() => {}), headed?.close().catch(() => {})]), new Promise(r => setTimeout(r, 10000))]);
}
process.on('SIGINT', () => { dirty = true; saveLedger(); process.exit(130); });
process.on('SIGTERM', () => { dirty = true; saveLedger(); process.exit(143); });
await main();
process.exit(0); // browser handles can keep the event loop alive after close
