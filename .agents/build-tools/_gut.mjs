import { chromium } from 'playwright-core';import fs from 'node:fs';
const R=fs.readFileSync('/tmp/arbcut-tools/routes.txt','utf8').trim().split('\n');
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});let bad=0;
for(const w of [320,360,390]){const p=await (await b.newContext({viewport:{width:w,height:800}})).newPage();
for(const r of R){await p.goto('http://localhost:4329'+r);const o=await p.evaluate(()=>{const iw=innerWidth,sw=document.documentElement.scrollWidth,a=[];for(const e of document.querySelectorAll('main h1,main h2,main p,main .btn,main a.hero__tel,main li')){if(e.closest('.sq__frames,.cta,.mact,[hidden]'))continue;const q=e.getBoundingClientRect();if(q.width&&q.right>iw-8)a.push((e.className||e.tagName).toString().slice(0,30)+':'+Math.round(q.right))}return{sw,iw,a:a.slice(0,3)}});if(o.sw>o.iw||o.a.length){bad++;console.log(w,r,JSON.stringify(o))}}}
console.log('gutter problems',bad);await b.close();
