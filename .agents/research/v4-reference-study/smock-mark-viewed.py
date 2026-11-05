# Invoke explicitly ONLY after actually opening every numbered sheet for named routes.
from pathlib import Path
import sys,json
root=Path.home()/'.ai-powerhouse/research-captures/arbcut-v4/smockhvac.com'
for slug in sys.argv[1:]:
 for width in [1440,390]:
  p=root/slug/str(width)/'record.json';r=json.loads(p.read_text());assert r.get('captureComplete') and not r.get('error')
  sheets=p.parent/'sheets.json';ss=json.loads(sheets.read_text());assert ss
  for s in ss:assert (p.parent/s['file']).exists();s['viewed']=True
  r['viewed']=True;r['firstViewportViewed']=True
  for s in r['segments']:s['viewed']=True
  p.write_text(json.dumps(r,indent=2));sheets.write_text(json.dumps(ss,indent=2))
 print('Explicit inspection recorded:',slug)
