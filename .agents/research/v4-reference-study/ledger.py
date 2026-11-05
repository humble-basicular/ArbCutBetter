import json,xml.etree.ElementTree as E
from pathlib import Path
r=Path.home()/'.ai-powerhouse/research-captures/arbcut-v4/vensland.lt'
urls=[e.text for e in E.fromstring((r/'sitemap.xml').read_bytes()).iter() if e.tag.endswith('loc')]
ledger=[]
for url in urls+['https://vensland.lt/aciu/','https://vensland.lt/arbcut-reference-study-not-found/']:
 slug=url.split('vensland.lt/')[1].strip('/').replace('/','__') or 'home'
 typ='service' if '/paslaugos/' in url else 'home' if slug=='home' else 'legal' if slug=='privatumo-politika' else 'success-direct' if slug=='aciu' else '404' if 'not-found' in slug else 'locality'
 widths={}
 for w in [1440,390]:
  p=r/slug/str(w)/'record.json';fresh=json.loads(p.read_text()) if p.exists() else None
  widths[str(w)]={'captured':bool(fresh),'viewed':bool(fresh and fresh.get('viewed')),'evidence':str(p.parent) if fresh else None,'legacyViewed':typ in ['home','service'],'legacyLimit':'seam strips and clipped FAQ gaps; see v4-vensland-detail.md' if typ in ['home','service'] else None}
 ledger.append({'url':url,'type':typ,'widths':widths,'representedBy':['https://vensland.lt/vilnius/','https://vensland.lt/avizieniai/'] if typ=='locality' and not any(v['viewed'] for v in widths.values()) else [],'visualTemplateEquivalence':'inferred from previous HTML comparison; unsampled routes not visually verified' if typ=='locality' and not any(v['viewed'] for v in widths.values()) else None})
Path('.agents/research/v4-reference-study/vensland-ledger.json').write_text(json.dumps({'sitemapURLs':len(urls),'pages':ledger},indent=2,ensure_ascii=False))
print('sitemap',len(urls),'ledger',len(ledger))
