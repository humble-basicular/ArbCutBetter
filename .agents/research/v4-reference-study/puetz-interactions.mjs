import {chromium} from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';import fs from 'node:fs';import os from 'node:os';
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});const root=`${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4/puetzconstruction.com/interactions`;
for(const width of [1440,390,360]){
 const dir=`${root}/${width}`;fs.mkdirSync(dir,{recursive:true});const p=await b.newPage({viewport:{width,height:width===1440?900:844},isMobile:width<500,hasTouch:width<500});const log=[];
 const shot=async name=>{await p.waitForTimeout(600);await p.screenshot({path:`${dir}/${name}.jpg`,type:'jpeg',quality:80});log.push({name,viewed:false,url:p.url()})};
 try{await p.goto('https://puetzconstruction.com/projects/');await p.locator('.proj-popup-btn').first().hover();await shot('project-hover');await p.locator('.proj-popup-btn').first().click();await p.waitForTimeout(2500);await shot('project-open');await p.keyboard.press('Escape');
 log.push({projectFilters:await p.locator('[class*=facetwp-radio]').evaluateAll(es=>es.map(e=>({text:e.textContent.trim(),value:e.getAttribute('data-value')})))});
 const roofing=p.locator('.facetwp-radio').filter({hasText:'Roofing'});if(await roofing.count()){await roofing.click();await p.waitForTimeout(1200);await shot('project-filter');}
 await p.goto('https://puetzconstruction.com/faq/');const finance=p.locator('.facetwp-radio').filter({hasText:'Financing'});if(await finance.count()){await finance.click();await p.waitForTimeout(1200);await shot('faq-filter');}
 await p.goto('https://puetzconstruction.com/contact/');log.push({fields:await p.locator('form').evaluateAll(fs=>fs.map(f=>[...f.elements].filter(e=>e.type!=='hidden').map(e=>({tag:e.tagName,type:e.type,name:e.name,required:e.required,ariaRequired:e.getAttribute('aria-required'),placeholder:e.placeholder}))))});await shot('contact-live');
 if(width<500){const menu=p.getByText('MENU',{exact:false}).filter({visible:true}).first();await menu.click({timeout:5000});await shot('menu-open');}
 else{await p.locator('header a').filter({hasText:'Services'}).first().hover();await shot('services-dropdown');}
 }catch(e){log.push({error:String(e)})}
 fs.writeFileSync(`${dir}/record.json`,JSON.stringify(log,null,2));console.log(width,log.filter(x=>x.name).map(x=>x.name),log.filter(x=>x.error));await p.close();
}await b.close();
