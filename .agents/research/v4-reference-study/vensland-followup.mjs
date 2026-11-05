import {chromium} from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';import fs from 'node:fs';import os from 'node:os';
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
for(const width of [1440,390,360]){
 const dir=`${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4/vensland.lt/interactions/${width}`,log=[];
 const p=await b.newPage({viewport:{width,height:width===1440?900:844},isMobile:width<500,hasTouch:width<500});
 await p.goto('https://vensland.lt/',{waitUntil:'domcontentloaded'});
 await p.locator('[data-lb-open="0"]').last().click();await p.waitForTimeout(5000);
 log.push({name:'gallery-delayed',viewed:false,images:await p.locator('[data-lb] img').evaluateAll(es=>es.map(e=>({src:e.currentSrc,complete:e.complete,naturalWidth:e.naturalWidth,naturalHeight:e.naturalHeight,rect:{w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height},style:{height:getComputedStyle(e).height,objectFit:getComputedStyle(e).objectFit}})))});
 await p.screenshot({path:`${dir}/gallery-delayed.jpg`,type:'jpeg',quality:80});await p.keyboard.press('Escape');
 await p.locator('footer.v3-foot').scrollIntoViewIfNeeded();await p.waitForTimeout(700);await p.screenshot({path:`${dir}/footer-with-sticky.jpg`,type:'jpeg',quality:80});log.push({name:'footer-with-sticky',viewed:false});
 const measure=()=>({animations:document.getAnimations().map(a=>({type:a.constructor.name,state:a.playState})),overflow:{viewport:innerWidth,document:document.documentElement.scrollWidth},reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,css:[...document.styleSheets].flatMap(s=>{try{return [...s.cssRules].filter(r=>/prefers-reduced-motion/.test(r.cssText)).map(r=>r.cssText)}catch{return []}})});
 log.push({normal:await p.evaluate(measure)});await p.emulateMedia({reducedMotion:'reduce'});log.push({reduced:await p.evaluate(measure)});
 fs.writeFileSync(`${dir}/followup.json`,JSON.stringify(log,null,2));await p.close();console.log(width,'followup saved');
}await b.close();
