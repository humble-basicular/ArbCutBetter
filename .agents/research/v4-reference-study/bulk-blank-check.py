"""Find captures with suspicious blank bands (unfinished scroll-reveal / lazy content).
Flags a page-width when a run of near-uniform rows is >= MIN px tall (excluding the last 300 px).
Usage: python3 bulk-blank-check.py [site ...]  → prints flagged pages and writes <ROOT>/_blank-check.json"""
import json, sys
from pathlib import Path
from PIL import Image
ROOT = Path.home() / '.ai-powerhouse/research-captures/arbcut-v4'
MIN = {1440: 450, 390: 520}
def runs(path, seg_h):
    im = Image.open(path)
    if im.height >= 16: im.draft('L', (max(1, im.width // 8), max(1, im.height // 8)))
    im = im.convert('L')
    w, h = im.size; scale = seg_h / h; px = im.load(); out = []; start = None
    for y in range(h):
        row = [px[x, y] for x in range(0, w, max(1, w // 60))]
        uni = max(row) - min(row) < 8
        if uni and start is None: start = y
        if (not uni or y == h - 1) and start is not None:
            out.append((round(start * scale), round((y - start) * scale))); start = None
    return out
res = {}
sites = sys.argv[1:] or [d.name for d in ROOT.iterdir() if d.is_dir() and not d.name.startswith('_') and '.' in d.name]
for site in sites:
    for rec in sorted((ROOT / site).glob('*/*/record.json')):
        try: r = json.loads(rec.read_text())
        except Exception: continue
        if not isinstance(r, dict) or not r.get('captureComplete'): continue
        W = r['width']; H = r.get('documentHeight') or 0; bands = []
        # stitch runs across segment joins
        cur = None
        for s in r.get('segments', []):
            for y, h in runs(rec.parent / s['file'], s['height']):
                y += s['y']
                if cur and y <= cur[0] + cur[1] + 4: cur = (cur[0], y + h - cur[0])
                else:
                    if cur: bands.append(cur)
                    cur = (y, h)
        if cur: bands.append(cur)
        bad = [b for b in bands if b[1] >= MIN.get(W, 500) and b[0] + b[1] < H - 300]
        if bad: res[f'{site}/{rec.parent.parent.name}/{W}'] = bad
(ROOT / '_blank-check.json').write_text(json.dumps(res, indent=1))
for k, v in res.items(): print(k, v[:4])
print('flagged', len(res))
