from pathlib import Path
from urllib.parse import urlparse,urlunparse
import json,collections
r=Path.home()/'.ai-powerhouse/research-captures/arbcut-v4/puetzconstruction.com';a=json.loads((r/'browser-sitemap.json').read_text());known=set(a['urls']);extras={'https://puetzconstruction.com/arbcut-reference-study-not-found/'}
for p in r.glob('*/*/record.json'):
 d=json.loads(p.read_text())
 if not isinstance(d,dict):continue
 for link in d.get('dom',{}).get('links',[]):
  u=urlparse(link['url'])
  if u.netloc.replace('www.','')=='puetzconstruction.com' and u.path:
   extras.add(urlunparse((u.scheme,u.netloc,u.path,'','','')))
records=[]
for u in sorted(known|extras):
 path=urlparse(u).path.strip('/');parts=path.split('/');slug=path.replace('/','__') or 'home'
 typ='excluded-geodata' if path.endswith('.kml') else 'homepage' if not path else 'article' if len(parts)>1 and parts[0]=='blog' else parts[0]+'-locality' if len(parts)>1 and parts[0] in ['roofing','siding','commercial','decks-patios'] else '404' if 'not-found' in path else 'unique-'+path
 widths={}
 for w in [1440,390]:
  q=r/slug/str(w)/'record.json';d=json.loads(q.read_text()) if q.exists() else {};widths[str(w)]={'captured':bool(d.get('captureComplete')),'viewed':bool(d.get('viewed')),'record':str(q) if q.exists() else None,'height':d.get('documentHeight'),'error':d.get('error')}
 records.append({'url':u,'type':typ,'source':'sitemap' if u in known else '404-probe' if typ=='404' else 'captured-page link','widths':widths,'representedBy':[],'legacyHomeViewed':typ=='homepage','gap':None if all(v['viewed'] for v in widths.values()) else 'not yet fully inspected in this milestone' if typ!='excluded-geodata' else 'KML, not a page'})
out={'site':'puetzconstruction.com','sitemapURLs':len(known),'sources':a['sources'],'pages':records};Path('.agents/research/v4-reference-study/puetz-ledger.json').write_text(json.dumps(out,indent=2))
print('URL rows',len(records),'captured widths',sum(v['captured'] for x in records for v in x['widths'].values()),'viewed widths',sum(v['viewed'] for x in records for v in x['widths'].values()))
