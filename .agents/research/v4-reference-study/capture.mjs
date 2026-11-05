// Explicit research workflow: real Chrome; no request/tracker blocking; never submit.
import { chromium } from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';
import os from 'node:os';
const root=process.env.CAPTURE_ROOT||`${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4`;
const urls=process.argv.slice(2); if(!urls.length) throw Error('Pass exact URLs');
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
for(const url of urls)for(const width of [1440,390]){
 const height=width===1440?900:844, slug=new URL(url).pathname.replace(/^\/|\/$/g,'').replaceAll('/','__')||'home';
 const dir=`${root}/${new URL(url).hostname}/${slug}/${width}`;fs.mkdirSync(dir,{recursive:true});
 const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,isMobile:width<500,hasTouch:width<500});
 const page=await context.newPage();const r={url,width,height,viewed:false,segments:[],capturedAt:new Date().toISOString()};
 try{
 const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:45000}); r.status=response?.status();r.finalUrl=page.url();
 if([401,403,429,503].includes(r.status)||/Just a moment|Access denied/i.test(await page.title()))throw Error('Access blocked; stop and use ordinary browser');
 await page.waitForTimeout(1000);
 await page.addStyleTag({content:'* { content-visibility: visible !important; }'});
 for(let pass=0;pass<3;pass++){
  const before=await page.evaluate(()=>document.documentElement.scrollHeight);
  for(let y=0;y<before;y+=650){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(80)}
  await page.waitForTimeout(350);const after=await page.evaluate(()=>document.documentElement.scrollHeight);if(after===before)break;
 }
 // Wait for initiated visible lazy images to decode; scrolling alone can catch progressive JPEG strips.
 await page.evaluate(async()=>{await Promise.all([...document.images].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0}).map(e=>Promise.race([e.decode().catch(()=>{}),new Promise(resolve=>setTimeout(resolve,12000))])))});
 await page.waitForLoadState('networkidle',{timeout:5000}).catch(()=>{});
 await page.evaluate(()=>scrollTo(0,0));await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(900);
 r.dom=await page.evaluate(()=>{
 const style=e=>{const s=getComputedStyle(e);return {font:s.fontFamily,size:s.fontSize,weight:s.fontWeight,lineHeight:s.lineHeight,color:s.color,bg:s.backgroundColor}};
 return {title:document.title,pageHeight:document.documentElement.scrollHeight,scrollWidth:document.documentElement.scrollWidth,headings:[...document.querySelectorAll('h1,h2,h3')].map(e=>({tag:e.tagName,text:e.textContent.trim(),...style(e)})),links:[...document.querySelectorAll('a[href]')].map(e=>({text:e.textContent.trim(),url:e.href})),forms:[...document.forms].map(f=>({action:f.action,fields:[...f.elements].map(e=>({tag:e.tagName,type:e.type,name:e.name,required:e.required,placeholder:e.placeholder}))})),images:[...document.images].map(e=>({src:e.currentSrc,alt:e.alt,width:e.naturalWidth,height:e.naturalHeight,complete:e.complete})),schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>e.textContent),animations:[...document.getAnimations()].map(a=>({type:a.constructor.name,playState:a.playState})),fixed:[...document.querySelectorAll('body *')].filter(e=>['fixed','sticky'].includes(getComputedStyle(e).position)).map(e=>({tag:e.tagName,id:e.id,class:e.className,text:e.textContent.trim().slice(0,90)}))};
 });
 await page.screenshot({path:`${dir}/first-viewport.jpg`,quality:80,type:'jpeg'});
 // First viewport preserves original fixed UI. Hide overlays only for unobstructed document captures.
 await page.evaluate(()=>{for(const e of document.querySelectorAll('body *'))if(['fixed','sticky'].includes(getComputedStyle(e).position)){e.dataset.captureHidden='true';e.style.setProperty('visibility','hidden','important')}});
 r.documentHeight=await page.evaluate(()=>document.documentElement.scrollHeight);
 // CDP document clips avoid the 16,384-pixel wrap; ordered segments stitch without joins.
 const cdp=await context.newCDPSession(page);
 for(let y=0;y<r.documentHeight;y+=2400){const h=Math.min(2400,r.documentHeight-y),name=`segment-${String(y).padStart(6,'0')}.jpg`;
 const {data}=await cdp.send('Page.captureScreenshot',{format:'jpeg',quality:80,captureBeyondViewport:true,clip:{x:0,y,width,height:h,scale:1}});fs.writeFileSync(`${dir}/${name}`,Buffer.from(data,'base64'));r.segments.push({file:name,y,height:h,viewed:false});}
 r.captureComplete=true;
 }catch(e){r.error=String(e)}
 fs.writeFileSync(`${dir}/record.json`,JSON.stringify(r,null,2));console.log(url,width,r.documentHeight,r.error||'captured');await context.close();
}
await browser.close();
