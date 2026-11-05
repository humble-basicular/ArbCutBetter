import {chromium} from '/tmp/arbcut-tools/node_modules/playwright-core/index.mjs';import fs from 'node:fs';import os from 'node:os';
// Ordinary headed Chrome for the public sitemap after urllib received HTTP 403. No challenge bypass.
const root=`${os.homedir()}/.ai-powerhouse/research-captures/arbcut-v4/puetzconstruction.com`;
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:false});const p=await b.newPage();
const queue=['https://puetzconstruction.com/sitemap_index.xml'],seen=new Set(),urls=new Set(),sources=[];
while(queue.length){const url=queue.shift();if(seen.has(url))continue;seen.add(url);
 try{const res=await p.goto(url,{waitUntil:'domcontentloaded',timeout:30000});const status=res.status();if(status!==200){sources.push({url,status});break}const body=await res.text();fs.writeFileSync(`${root}/${new URL(url).pathname.slice(1)}`,body);
 const locs=[...body.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1].replaceAll('&amp;','&'));const index=body.includes('<sitemapindex');sources.push({url,status,index,count:locs.length});if(index)queue.push(...locs);else locs.forEach(x=>urls.add(x));
 }catch(e){sources.push({url,error:String(e)})}
}
fs.writeFileSync(`${root}/browser-sitemap.json`,JSON.stringify({sources,urls:[...urls].sort()},null,2));console.log(JSON.stringify({sources,count:urls.size}));await b.close();
