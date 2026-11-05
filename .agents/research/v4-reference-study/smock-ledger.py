from pathlib import Path
from urllib.parse import urlsplit,urlunsplit
from collections import Counter
import json
base=Path(__file__).parent
raw=Path.home()/'.ai-powerhouse/research-captures/arbcut-v4/smockhvac.com'
d=json.loads((base/'smock-discovery.json').read_text()); sources={}
def add(u,source):
 p=urlsplit(u)
 if p.hostname!='smockhvac.com':return
 u=urlunsplit((p.scheme,p.netloc,p.path,p.query,p.fragment if p.path=='/shop/' else ''))
 sources.setdefault(u,[])
 if source not in sources[u]:sources[u].append(source)
for s in d['sitemaps']:
 for u in s['locs']:add(u,s['url'])
for a in d['homeLinks']:add(a['url'],'homepage DOM link')
records={}
for p in raw.glob('*/*/record.json'):
 if p.parts[-3].startswith('_'):continue
 r=json.loads(p.read_text());records.setdefault(r['url'],[]).append((p,r))
 for a in r.get('dom',{}).get('links',[]):add(a['url'],str(p))
def kind(u):
 p=urlsplit(u);a=p.path.strip('/').split('/');x=a[0]
 if p.fragment:return 'shop application state (unverified)'
 if x=='':return 'homepage'
 if x=='locations.kml':return 'geographic data, not HTML'
 if x=='blog':return 'article' if len(a)>1 else 'article index'
 if len(a)>1 and x in ['hvac','water-heater-replacement']:return x+' locality (URL classification; unverified template)'
 m={'about':'company story','meet-the-team':'team','community-involvement':'community','contact':'contact','faq':'FAQ','reviews':'reviews','services':'service index','hvac-maintenance-plan':'maintenance membership','shop':'shop/estimate application','assessment-results':'assessment results (unverified)','comfort-assessment':'assessment tool (unverified)','careers':'careers','referrals':'referrals','financing':'financing','hvac-specials':'offers','hvac-troubleshooting':'troubleshooting','trane-hvac':'manufacturer','privacy-policy':'legal','terms':'legal'}
 return m.get(x,'service')
rows=[]
for u,src in sorted(sources.items()):
 widths=[]
 for w in [1440,390]:
  pair=next(((p,r) for p,r in records.get(u,[]) if r['width']==w),None)
  if pair:
   p,r=pair;ss=json.loads((p.parent/'sheets.json').read_text()) if (p.parent/'sheets.json').exists() else []
   widths.append({'width':w,'status':r.get('status'),'captured':r.get('captureComplete',False),'viewed':r.get('viewed',False),'interacted':False,'record':str(p),'documentHeight':r.get('documentHeight'),'segments':r['segments'],'sheets':ss,'evidenceDirectory':str(p.parent),'error':r.get('error')})
  else:widths.append({'width':w,'status':'not requested','captured':False,'viewed':False,'interacted':False,'record':None,'segments':[],'sheets':[]})
 rows.append({'url':u,'pageType':kind(u),'classificationBasis':'URL and homepage link label; visual confirmation only when widths viewed','sources':src,'widths':widths,'representativeMappings':[]})
summary={'URLs':len(rows),'types':dict(Counter(r['pageType'] for r in rows)),'capturedWidths':sum(w['captured'] for r in rows for w in r['widths']),'viewedWidths':sum(w['viewed'] for r in rows for w in r['widths']),'viewedSegments':sum(s['viewed'] for r in rows for w in r['widths'] for s in w['segments']),'viewedSheets':sum(s['viewed'] for r in rows for w in r['widths'] for s in w['sheets'])}
(base/'smock-ledger.json').write_text(json.dumps({'scope':'discovered public sitemap + home DOM/captured page links; not exhaustive crawl; not whole site complete','summary':summary,'urls':rows},indent=2)+'\n')
print(json.dumps(summary))
