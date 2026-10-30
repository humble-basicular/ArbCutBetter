/* =====================================================================
   AUTOMATINĖ atsiliepimų sinchronizacija (paleidžia launchd kasdien).
   paslaugos.lt Cloudflare blokuoja serverius ir headless naršykles, bet
   praleidžia tikrą Chrome langą — todėl atidarome Chrome už ekrano ribų,
   nuskaitome profilį, perrašome duomenis, patikriname build ir, jei kas
   pasikeitė, commit + push → Vercel automatiškai publikuoja.
   Rankinis paleidimas: npm run sync:auto   (--dry: be commit/push)
   ===================================================================== */
import { spawn, execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const EXPORT = `${ROOT}scripts/paslaugos-atsiliepimai.json`;
const DATA = 'src/data/atsiliepimai.js';
const PROFILIS = 'https://paslaugos.lt/mantas-gerulis-aa777';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;
const DRY = process.argv.includes('--dry');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log(new Date().toISOString(), ...a);
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();
const run = (cmd, args) => execFileSync(cmd, args, { cwd: ROOT, stdio: 'inherit' });

async function nuskaityti() {
  const profileDir = `${homedir()}/Library/Application Support/arbcut-sync-chrome`;
  mkdirSync(profileDir, { recursive: true });
  const chrome = spawn(CHROME, [
    `--remote-debugging-port=${PORT}`, `--user-data-dir=${profileDir}`,
    '--no-first-run', '--no-default-browser-check',
    '--window-position=-2400,0', '--window-size=1200,900', 'about:blank',
  ], { stdio: 'ignore' });
  try {
    let wsUrl;
    for (let i = 0; i < 40 && !wsUrl; i++) {
      try { wsUrl = (await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()).find((t) => t.type === 'page')?.webSocketDebuggerUrl; } catch {}
      if (!wsUrl) await sleep(500);
    }
    if (!wsUrl) throw new Error('Chrome DevTools neprisijungė');
    const ws = new WebSocket(wsUrl);
    await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
    let id = 0; const pend = new Map();
    ws.onmessage = (m) => { const d = JSON.parse(m.data); if (pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
    const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
    const evaluate = async (expression) => (await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })).result?.result?.value;

    await send('Page.navigate', { url: PROFILIS });
    for (let i = 0; i < 45; i++) {
      await sleep(1000);
      if (await evaluate("document.querySelectorAll('.pv-rec__item').length")) break;
    }
    const snippet = readFileSync(`${ROOT}scripts/paslaugos-export.js`, 'utf8');
    const out = await evaluate(snippet.slice(snippet.indexOf('(async () =>')).trim().replace(/;$/, ''));
    ws.close();
    return out;
  } finally {
    chrome.kill();
  }
}

const be = ({ nuskaityta, ...rest }) => JSON.stringify(rest);

const naujas = await nuskaityti();
if (!naujas?.kiekis || !naujas.atsiliepimai?.length) throw new Error('Profilis neįsikėlė (Cloudflare patikra?) — nieko nekeičiu');
if (naujas.atsiliepimai.length !== naujas.kiekis) throw new Error(`Nuskaityta ${naujas.atsiliepimai.length}, profilis rodo ${naujas.kiekis} — nieko nekeičiu`);
const senas = JSON.parse(readFileSync(EXPORT, 'utf8'));
if (naujas.kiekis < senas.kiekis - 5) throw new Error(`Atsiliepimų sumažėjo ${senas.kiekis} → ${naujas.kiekis} — reikia žmogaus patikros`);
if (be(naujas) === be(senas)) { log(`Be pakeitimų (${naujas.kiekis} atsiliepimų)`); process.exit(0); }

writeFileSync(EXPORT, JSON.stringify(naujas, null, 2) + '\n');
run('node', ['scripts/sync-atsiliepimai.mjs']);
run('npm', ['run', 'build']);
log(`Atnaujinta: ${senas.kiekis} → ${naujas.kiekis} atsiliepimų`);
if (DRY) process.exit(0);

git('pull', '--rebase', '--autostash', 'origin', 'main');
git('add', '--', 'scripts/paslaugos-atsiliepimai.json', DATA);
git('commit', '-m', `Sync paslaugos.lt reviews: ${naujas.kiekis} (${naujas.nuskaityta})`, '--', 'scripts/paslaugos-atsiliepimai.json', DATA);
git('push', 'origin', 'HEAD:main');
log('Pushed → Vercel deploy');
