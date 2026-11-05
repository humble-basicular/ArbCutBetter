from pathlib import Path
from urllib.request import urlopen
from urllib.parse import urlparse,urljoin
import xml.etree.ElementTree as ET
import json,sys
host=sys.argv[1];root=Path.home()/'.ai-powerhouse/research-captures/arbcut-v4'/host;root.mkdir(parents=True,exist_ok=True)
queue=[f'https://{host}/sitemap_index.xml'];seen=set();urls=set();sources=[]
while queue:
 u=queue.pop(0)
 if u in seen:continue
 seen.add(u)
 try:
  response=urlopen(u,timeout=30);data=response.read();status=response.status
  name=urlparse(u).path.strip('/').replace('/','__') or 'root';(root/name).write_bytes(data)
  e=ET.fromstring(data);locs=[x.text for x in e.iter() if x.tag.rsplit('}',1)[-1]=='loc'];isindex=e.tag.endswith('sitemapindex')
  sources.append({'url':u,'status':status,'type':'index' if isindex else 'urlset','count':len(locs)})
  if isindex:queue.extend(locs)
  else:urls.update(locs)
 except Exception as e:sources.append({'url':u,'error':str(e)})
records=[]
for u in sorted(urls):
 p=urlparse(u).path;parts=p.strip('/').split('/')
 if p.endswith('.kml'):typ='excluded-geodata'
 elif p=='/':typ='homepage'
 elif len(parts)>1 and parts[0]=='blog':typ='article'
 elif len(parts)>1 and parts[0] in ['roofing','siding','commercial','decks-patios']:typ=parts[0]+'-locality'
 else:typ='unique-'+p.strip('/')
 records.append({'url':u,'type':typ,'captured':{},'viewed':{},'representedBy':[],'reason':'KML geodata, not a webpage' if typ=='excluded-geodata' else None})
(root/'inventory.json').write_text(json.dumps({'site':host,'sources':sources,'urls':records},indent=2))
print(json.dumps({'sources':sources,'types':{t:sum(x['type']==t for x in records) for t in sorted({x['type'] for x in records})}},indent=2))
