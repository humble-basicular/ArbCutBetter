import {chromium} from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';import fs from 'node:fs';import os from 'node:os';
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
for(const width of [1440,390,360]){
const dir=`${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4/vensland.lt/interactions/${width}`;
const p=await b.newPage({viewport:{width,height:width===1440?900:844},isMobile:width<500,hasTouch:width<500});await p.goto('https://vensland.lt/');await p.locator('[data-quote]').filter({visible:true}).first().click();
const phone=p.locator('dialog[open] input[name=phone]');const r={name:'validation-modal',viewed:false,scope:'open dialog phone; no submit event',empty:await phone.evaluate(e=>({valid:e.reportValidity(),message:e.validationMessage}))};await p.waitForTimeout(200);await p.screenshot({path:`${dir}/validation-modal.jpg`,type:'jpeg',quality:80});
// Read native constraints only; do not type personal data or submit.
r.constraints=await phone.evaluate(e=>({required:e.required,minLength:e.minLength,maxLength:e.maxLength,pattern:e.pattern}));fs.writeFileSync(`${dir}/validation-modal.json`,JSON.stringify(r,null,2));await p.close();console.log(width,r.empty);
}await b.close();
