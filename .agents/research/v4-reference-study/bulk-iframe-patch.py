"""Paste viewport screenshots of iframes into 1440 document segments (CDP beyond-viewport clips paint
cross-origin iframes blank). argv[1] = capture dir, argv[2] = JSON list of {file,x,y,w,h} in document px."""
import json, sys
from pathlib import Path
from PIL import Image
d = Path(sys.argv[1]); patches = json.loads(sys.argv[2]); rec = json.loads((d / 'record.json').read_text()) if (d / 'record.json').exists() and len(sys.argv) < 4 else None
segs = json.loads(sys.argv[3]) if len(sys.argv) > 3 else rec['segments']
for s in segs:
    im = None
    for p in patches:
        top, bot = max(s['y'], p['y']), min(s['y'] + s['height'], p['y'] + p['h'])
        if bot <= top: continue
        im = im or Image.open(d / s['file']).convert('RGB')
        src = Image.open(d / p['file'])
        piece = src.crop((0, top - p['y'], src.width, bot - p['y']))
        im.paste(piece, (round(p['x']), top - s['y']))
    if im: im.save(d / s['file'], quality=75)
