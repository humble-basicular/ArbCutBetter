import { chromium } from 'playwright-core';
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const p=await (await b.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1})).newPage();
await p.goto('http://localhost:4329/');await p.waitForTimeout(300);
const R={1:535/104,2:445/128,3:411/128};
for(const n of [1,2,3]){await p.evaluate(([n,r])=>{for(const i of document.querySelectorAll('.hdr__logo img.hdr__logo-d.hdr__logo-full')){i.src=`/assets/arbcut-v4-brand/web/logo-${n}-light.webp`;i.removeAttribute('width');i.removeAttribute('height')}},[n,R[n]]);await p.waitForTimeout(300);await p.screenshot({path:`/tmp/arb-logo-${n}.png`,clip:{x:0,y:0,width:1440,height:90}})}
await b.close();
