import {chromium} from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';import fs from 'node:fs';import os from 'node:os';
const root=`${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4/vensland.lt/interactions`;
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
for(const width of [390,360]){
 const p=await b.newPage({viewport:{width,height:844},isMobile:true,hasTouch:true});await p.goto('https://vensland.lt/');await p.locator('[data-quote]').filter({visible:true}).first().click();
 const r={name:'modal-scrolled',viewed:false};r.before=await p.locator('dialog[open]').evaluate(e=>({scrollHeight:e.scrollHeight,clientHeight:e.clientHeight,scrollTop:e.scrollTop}));
 await p.locator('dialog[open] button[type=submit]').scrollIntoViewIfNeeded();await p.waitForTimeout(300);r.after=await p.locator('dialog[open]').evaluate(e=>({scrollHeight:e.scrollHeight,clientHeight:e.clientHeight,scrollTop:e.scrollTop}));await p.screenshot({path:`${root}/${width}/modal-scrolled.jpg`,type:'jpeg',quality:80});fs.writeFileSync(`${root}/${width}/modal-scroll.json`,JSON.stringify(r,null,2));await p.close();
}
for(const reducedMotion of ['no-preference','reduce']){
 const p=await b.newPage({viewport:{width:390,height:844},reducedMotion});await p.goto('https://vensland.lt/');await p.waitForTimeout(500);
 const measure=()=>({motionClass:document.documentElement.classList.contains('v3-motion'),preference:matchMedia('(prefers-reduced-motion:reduce)').matches,animations:document.getAnimations().map(a=>({name:a.animationName,playState:a.playState,duration:a.effect?.getTiming()?.duration})),heroTransform:getComputedStyle(document.querySelector('.v3-hero__bg')).transform});
 const r={name:`motion-${reducedMotion}`,viewed:false,initial:await p.evaluate(measure)};await p.screenshot({path:`${root}/390/motion-${reducedMotion}.jpg`,type:'jpeg',quality:80});
 await p.locator('.v3-service-grid, #paslaugos').first().scrollIntoViewIfNeeded().catch(()=>{});await p.waitForTimeout(800);r.afterScroll=await p.evaluate(measure);fs.writeFileSync(`${root}/390/motion-${reducedMotion}.json`,JSON.stringify(r,null,2));await p.close();
}await b.close();
