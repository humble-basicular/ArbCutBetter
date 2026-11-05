import {chromium} from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';import os from 'node:os';
const root=`${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4/vensland.lt/interactions`;
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
for(const width of [1440,390,360]){
const dir=`${root}/${width}`;fs.mkdirSync(dir,{recursive:true});const p=await b.newPage({viewport:{width,height:width===1440?900:844},isMobile:width<500,hasTouch:width<500});
const log=[];const shot=async name=>{await p.waitForTimeout(300);await p.screenshot({path:`${dir}/${name}.jpg`,type:'jpeg',quality:80});log.push({name,viewed:false,url:p.url()})};
try{
await p.goto('https://vensland.lt/',{waitUntil:'domcontentloaded'});await p.waitForTimeout(600);
await shot('initial');
if(width<500){await p.locator('[data-menu-open]').click();await shot('menu');log.push({menuLinks:await p.locator('[data-menu]').innerText()});await p.locator('[data-menu-close]').click();}
else{await p.locator('header a').filter({hasText:'Paslaugos'}).hover();await shot('services-hover');}
await p.locator('header a').filter({hasText:'Gauti kainą'}).click().catch(async()=>await p.locator('.v3-hero a').filter({hasText:'Gauti kainą'}).click());await shot('quote-open');
log.push({openDialogs:await p.locator('dialog[open]').evaluateAll(es=>es.map(e=>({class:e.className,text:e.innerText.slice(0,300)})))});
// Native validation only: reportValidity does not submit or call submit handlers.
log.push({validation:await p.locator('dialog[open] input[name=phone], .v3-quote input[name=phone]').first().evaluate(e=>({valid:e.reportValidity(),message:e.validationMessage}))});await shot('validation');await p.keyboard.press('Escape');
await p.locator('.v3-quote summary').first().click();await shot('quote-guidance');
await p.locator('[data-lb-open="0"]').last().click();await shot('gallery-open');await p.locator('[data-lb-next]').click();await shot('gallery-next');await p.keyboard.press('Escape');
await p.locator('summary').filter({hasText:'Kada verta'}).click();await shot('faq-open');
await p.locator('[data-reviews-next]').click();await shot('reviews-next');
// Inspect rating dialog; do not choose stars, send feedback, or open external review flow.
const rate=p.locator('[data-rate-open]');if(await rate.count()){await rate.first().click();await shot('rating-open');await p.keyboard.press('Escape');}
await p.locator('footer.v3-foot').scrollIntoViewIfNeeded();await shot('footer-with-sticky');
log.push({motionNormal:await p.evaluate(()=>document.getAnimations().map(a=>({type:a.constructor.name,state:a.playState}))),overflow:await p.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}))});
await p.emulateMedia({reducedMotion:'reduce'});log.push({reducedMotionMatches:await p.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches)});
}catch(e){log.push({error:String(e)})}
fs.writeFileSync(`${dir}/record.json`,JSON.stringify(log,null,2));console.log(width,log.filter(x=>x.name).length,log.filter(x=>x.error));await p.close();}
await b.close();
