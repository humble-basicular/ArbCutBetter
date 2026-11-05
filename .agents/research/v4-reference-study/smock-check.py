from pathlib import Path
from PIL import Image
import json,subprocess
base=Path(__file__).parent
d=json.loads((base/'smock-ledger.json').read_text());seen=set();widths=segments=sheets=0
for r in d['urls']:
 assert r['url'] not in seen;seen.add(r['url']);assert r['representativeMappings']==[]
 for w in r['widths']:
  if not w['viewed']:continue
  assert w['captured'] and not w['error'];widths+=1;pos=0
  p=Path(w['record']);rec=json.loads(p.read_text());assert rec['firstViewportViewed']
  members=[]
  for s in w['sheets']:
   assert s['viewed'] and (p.parent/s['file']).exists();members.extend(s['members']);sheets+=1
  assert members==['first-viewport.jpg']+[s['file'] for s in w['segments']]
  for s in w['segments']:
   assert s['viewed'] and s['y']==pos
   im=Image.open(p.parent/s['file']);scale=im.width/w['width'];assert scale in [1,2] and im.height==s['height']*scale,(p,im.size,s)
   pos+=s['height'];segments+=1
  assert pos==w['documentHeight']
assert widths==d['summary']['viewedWidths'];assert segments==d['summary']['viewedSegments'];assert sheets==d['summary']['viewedSheets']
files=subprocess.check_output(['git','ls-files','.agents/research/v4-reference-study/*.jpg','.agents/research/v4-reference-study/*.jpeg'],text=True).splitlines();assert len(files)<=40
assert all(Path(p).stat().st_size<300000 for p in files)
assert not subprocess.check_output(['git','diff','c62fc56','--name-only','--','src','public'],text=True).strip()
subprocess.run(['git','diff','--check'],check=True)
print({'URLs':len(seen),'viewedWidths':widths,'viewedSegments':segments,'viewedSheets':sheets,'trackedJPGs':len(files),'websiteDiff':False})
