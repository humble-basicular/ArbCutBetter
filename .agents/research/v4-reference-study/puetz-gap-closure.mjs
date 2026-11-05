// Read-only ordinary Chrome checks; never submit, upload, request a quote or accept marketing.
import {chromium} from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';import os from 'node:os';
const root=`${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4/puetzconstruction.com/gap-closure`;
fs.mkdirSync(root,{recursive:true});const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:false});
const records=[];
for(const width of [1440,390,360]){
 const context=await browser.newContext({viewport:{width,height:width===1440?900:844},isMobile:width<500,hasTouch:width<500});const p=await context.newPage();const log={width,viewed:false,shots:[],errors:[]};const dir=`${root}/${width}`;fs.mkdirSync(dir,{recursive:true});
 const shot=async name=>{await p.screenshot({path:`${dir}/${name}.jpg`,type:'jpeg',quality:82});log.shots.push({name,file:`${dir}/${name}.jpg`,viewed:false,url:p.url()})};
 try{
 await p.goto('https://puetzconstruction.com/instant-roof-estimate/',{waitUntil:'domcontentloaded'});await p.waitForTimeout(8000);
 log.estimator=await p.evaluate(()=>({title:document.title,frames:[...document.querySelectorAll('iframe')].map(e=>({src:e.src,width:e.clientWidth,height:e.clientHeight})),inputs:[...document.querySelectorAll('input,button,select')].map(e=>({tag:e.tagName,type:e.type,text:(e.textContent||e.placeholder||'').trim().slice(0,100)})),animations:document.getAnimations().map(a=>({type:a.constructor.name,state:a.playState})),reduced:matchMedia('(prefers-reduced-motion:reduce)').matches}));
 await shot('estimator-normal');
 const question=p.getByText('Do you offer financing?',{exact:true}).filter({visible:true}).first();await question.click({timeout:5000});await question.scrollIntoViewIfNeeded();await p.waitForTimeout(700);await shot('faq-open');
 if(width===360){log.menuCandidates=await p.locator('a,button').filter({hasText:/^MENU/}).evaluateAll(es=>es.map(e=>({tag:e.tagName,text:e.textContent,class:e.className,href:e.getAttribute('href')})));const menu=p.locator('a,button').filter({hasText:/^MENU/}).filter({visible:true}).first();await menu.click({timeout:5000});await p.waitForTimeout(700);await shot('menu-click');}
 }catch(e){log.errors.push(String(e))}
 records.push(log);await context.close();
}
// Fresh reduced-motion load, separate from ordinary screenshots.
const ctx=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});const p=await ctx.newPage();await p.goto('https://puetzconstruction.com/instant-roof-estimate/',{waitUntil:'domcontentloaded'});await p.waitForTimeout(3000);const reduced={width:390,reducedMotion:true,viewed:false,media:await p.evaluate(()=>matchMedia('(prefers-reduced-motion:reduce)').matches),animations:await p.evaluate(()=>document.getAnimations().map(a=>({type:a.constructor.name,state:a.playState}))),file:`${root}/reduced-390.jpg`};await p.screenshot({path:reduced.file,type:'jpeg',quality:82});records.push(reduced);await ctx.close();fs.writeFileSync(`${root}/record.json`,JSON.stringify(records,null,2));await browser.close();console.log(JSON.stringify(records.map(x=>({width:x.width,shots:x.shots?.map(s=>s.name),errors:x.errors,reducedMotion:x.reducedMotion}))));
