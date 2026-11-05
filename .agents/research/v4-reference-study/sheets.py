from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import json,os
root=Path.home()/'.ai-powerhouse/research-captures/arbcut-v4'/os.environ.get('CAPTURE_SITE','vensland.lt')
for record in root.glob('*/*/record.json'):
 r=json.loads(record.read_text()); d=record.parent
 if not isinstance(r,dict) or (d/'sheets.json').exists():continue
 ims=[('first-viewport.jpg',None)]+[(s['file'],s['y']) for s in r['segments']]
 # readable sheets; do not use these as stitched previews
 cols=2 if r['width']==1440 else 3
 cellw=720 if r['width']==1440 else 390
 mapping=[]
 for offset in range(0,len(ims),cols):
  chunk=ims[offset:offset+cols]; sheet=Image.new('RGB',(cellw*len(chunk),2430 if cellw==390 else 1230),'#ddd')
  for i,(f,y) in enumerate(chunk):
   im=Image.open(d/f); im.resize((cellw,round(im.height*cellw/im.width))).save(d/('thumb-'+f))
   im=Image.open(d/('thumb-'+f));sheet.paste(im,(i*cellw,30));ImageDraw.Draw(sheet).text((i*cellw+4,5),f,fill='black')
  name=f'sheet-{offset//cols}.jpg';sheet.save(d/name,quality=85);mapping.append({'file':name,'members':[f for f,y in chunk],'viewed':False})
 # full document preview: document captures only, retained at original resolution
 if r['segments']:
  stitched=Image.new('RGB',(r['width'],r['documentHeight']))
  for s in r['segments']:stitched.paste(Image.open(d/s['file']),(0,s['y']))
  stitched.save(d/'stitched.jpg',quality=75)
 (d/'sheets.json').write_text(json.dumps(mapping,indent=2))
print('\n'.join(str(x) for x in root.glob('*/*/sheet-*.jpg')))
