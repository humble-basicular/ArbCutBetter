import { chromium } from 'playwright-core';
const B='http://localhost:4329'; const R=[]; const ok=(n,v,x='')=>R.push(`${v?'PASS':'FAIL'} ${n} ${x}`);
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
// 320 overflow culprit
let c=await b.newContext({viewport:{width:320,height:700}}); let p=await c.newPage();
for (const r of ['/','/paslaugos/medziu-genejimas','/kontaktai']) { await p.goto(B+r); const o=await p.evaluate(()=>{const iw=innerWidth;const a=[];for(const e of document.querySelectorAll('body *')){const q=e.getBoundingClientRect();if(q.right>iw+1&&q.width>0&&getComputedStyle(e).position!=='fixed')a.push((e.className||e.tagName).toString().slice(0,40)+':'+Math.round(q.right))}return {sw:document.documentElement.scrollWidth,a:a.slice(0,5)}}); console.log('320',r,JSON.stringify(o)); }
await c.close();
// dialog: service preselect, focus trap
c=await b.newContext({viewport:{width:1440,height:900}}); p=await c.newPage();
await p.goto(B+'/paslaugos/medziu-genejimas');
await p.click('.svc__btns [data-quote]'); await p.waitForTimeout(150);
ok('data-service preselect', (await p.$eval('#quote-dialog select', s=>s.value))==='medziu-genejimas', await p.$eval('#quote-dialog select', s=>s.value));
let inside=true; for(let i=0;i<20;i++){await p.keyboard.press('Tab'); inside=inside&&await p.evaluate(()=>!!document.activeElement.closest('#quote-dialog'));}
ok('dialog focus trap 20 tabs',inside);
await p.keyboard.press('Escape'); await p.waitForTimeout(100);
ok('dialog focus returns',await p.evaluate(()=>document.activeElement.matches('[data-quote]')));
// form inert + counter + error focus
const reqs=[]; p.on('request',r=>{if(r.method()==='POST')reqs.push(r.url())});
await p.goto(B+'/kontaktai');
await p.click('#contact-form button[type=submit]'); await p.waitForTimeout(200);
ok('error moves focus into form',await p.evaluate(()=>!!document.activeElement.closest('#contact-form')), await p.evaluate(()=>document.activeElement.tagName+'#'+document.activeElement.id));
await p.fill('#contact-form [name=Vardas]','Testas').catch(()=>{});
const names=await p.$$eval('#contact-form [required]',e=>e.map(x=>x.name)); console.log(names);
for(const n of names){const s=`#contact-form [name="${n}"]`; const t=await p.$eval(s,e=>e.type); await p.fill(s,t==='tel'?'+370 600 00000':'Testas testas');}
await p.click('#contact-form button[type=submit]'); await p.waitForTimeout(400);
ok('preview counter',(await p.evaluate(()=>window.__arbcutPreviewSubmits))===1, String(await p.evaluate(()=>window.__arbcutPreviewSubmits)));
ok('no POST',reqs.length===0,reqs.join());
ok('success focus',await p.evaluate(()=>{const a=document.activeElement;return a!==document.body}), await p.evaluate(()=>document.activeElement.tagName+'.'+document.activeElement.className));
// gallery filter
await p.goto(B+'/galerija'); const n0=await p.locator('.gal li:visible').count();
await p.locator('.flt button').nth(1).focus(); await p.keyboard.press('Enter'); await p.waitForTimeout(150);
const n1=await p.locator('.gal li:visible').count(); const cnt=await p.textContent('[data-gallery-count]');
ok('gallery filter',n1<n0&&String(n1)===cnt.trim(),`${n0}->${n1} count ${cnt}`);
ok('gallery pressed',(await p.locator('.flt button').nth(1).getAttribute('aria-pressed'))==='true');
// contrast + primary label size, on several routes
const routes=['/','/paslaugos/medziu-genejimas','/kainos','/kontaktai','/apie','/medziu-pjovimas-vilnius'];
const lum=(r,g,b)=>{const f=v=>{v/=255;return v<=.03928?v/12.92:((v+.055)/1.055)**2.4};return .2126*f(r)+.7152*f(g)+.0722*f(b)};
const bad=new Set();
for(const w of [1440,390]){const cc=await b.newContext({viewport:{width:w,height:900}});const q=await cc.newPage();
 for(const r of routes){await q.goto(B+r);
  const res=await q.evaluate(()=>{const out=[];const bg=e=>{for(;e;e=e.parentElement){const c=getComputedStyle(e).backgroundColor;const m=c.match(/[\d.]+/g).map(Number);if(m.length===3||m[3]>.9)return m.slice(0,3)}return [255,255,255]};
   const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;const seen=new Set();
   while((n=walker.nextNode())){if(!n.data.trim())continue;const e=n.parentElement;if(seen.has(e))continue;seen.add(e);const s=getComputedStyle(e);if(s.visibility==='hidden'||s.display==='none'||e.closest('.sr-only,[hidden],script,style,dialog:not([open])'))continue;const q=e.getBoundingClientRect();if(!q.width)continue;
    out.push({c:s.color.match(/[\d.]+/g).map(Number).slice(0,3),b:bg(e),fs:parseFloat(s.fontSize),fw:+s.fontWeight,t:n.data.trim().slice(0,28),k:(e.className||e.tagName).toString().slice(0,24)})}return out});
  for(const x of res){const L=[lum(...x.c),lum(...x.b)].sort((a,b)=>b-a);const cr=(L[0]+.05)/(L[1]+.05);const large=x.fs>=24||(x.fs>=18.66&&x.fw>=700);if(cr<(large?3:4.5))bad.add(`${w}${r} ${cr.toFixed(2)} ${x.fs}px/${x.fw} ${x.k} "${x.t}"`)}
 } await cc.close()}
console.log(R.join('\n')); console.log('contrast fails',bad.size); console.log([...bad].slice(0,14).join('\n'));
await b.close();
