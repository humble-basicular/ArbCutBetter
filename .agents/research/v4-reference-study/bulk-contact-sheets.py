"""Contact sheets: per site / template / width, ~20 whole-page previews per image (each page stitched from its
segments and scaled; long pages wrap into side-by-side columns inside their cell so mobile strips stay legible).
Input: <ROOT>/_sheets/<site>/groups.json (run bulk-group.py first) + captures. Output: <ROOT>/_sheets/<site>/<width>/<tid>-<n>.jpg and
<ROOT>/_sheets/<site>/index.json mapping each sheet cell number to slug/url. Usage: python3 bulk-contact-sheets.py [site ...]
Existing sheets are rebuilt only when their membership changed (pass --force to rebuild all).
"""
import json, sys, math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path.home() / '.ai-powerhouse/research-captures/arbcut-v4'
HERE = Path(__file__).resolve().parent
PER_SHEET = 20
COLS = 10
CELL_W, CELL_H, LABEL = 200, 1000, 26
GAP = 3
try:
    FONT = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 11)
except Exception:
    FONT = ImageFont.load_default()


def page_image(d, width):
    """Return (scaled preview, scale) of the page at width: segments stitched then wrapped into k columns."""
    r = json.loads((d / str(width) / 'record.json').read_text())
    segs = r.get('segments') or []
    H = r.get('documentHeight') or sum(s['height'] for s in segs)
    if not segs:
        im = Image.open(d / str(width) / 'first-viewport.jpg')
        segs, H = [{'file': 'first-viewport.jpg', 'y': 0, 'height': im.height}], im.height
    W = width
    best = (0, 1)
    for k in range(1, 9):
        s = min((CELL_W - GAP * (k - 1)) / (k * W), (CELL_H * k) / H)
        if s > best[0]:
            best = (s, k)
    s, k = best
    colh = math.ceil(H / k)
    out = Image.new('RGB', (CELL_W, CELL_H), '#cfcfcf')
    cw = round(W * s)
    for seg in segs:
        try:
            im = Image.open(d / str(width) / seg['file'])
        except Exception:
            continue
        if im.height != seg['height']:
            im = im.crop((0, 0, im.width, seg['height']))
        y0, h = seg['y'], seg['height']
        # a segment may cross a column boundary: split it
        while h > 0:
            col = min(y0 // colh, k - 1)
            room = (col + 1) * colh - y0 if col < k - 1 else h
            part = min(h, room)
            piece = im.crop((0, seg['height'] - h, W, seg['height'] - h + part))
            ph = max(1, round(part * s))
            piece = piece.resize((cw, ph), Image.LANCZOS)
            out.paste(piece, (col * (cw + GAP), round((y0 - col * colh) * s)))
            y0 += part
            h -= part
    return out, s, k, H


def build(site, force=False):
    gp = ROOT / '_sheets' / site / 'groups.json'
    groups = json.loads(gp.read_text()) if gp.exists() else None
    if not groups:
        print('no groups for', site)
        return
    sd = ROOT / '_sheets' / site
    idx_path = sd / 'index.json'
    old = json.loads(idx_path.read_text()) if idx_path.exists() else {}
    index = {}
    for t in groups['templates']:
        slugs = [m['slug'] for m in t['members']]
        for width in (1440, 390):
            have = [sl for sl in slugs if (ROOT / site / sl / str(width) / 'record.json').exists()]
            for n in range(0, len(have), PER_SHEET):
                chunk = have[n:n + PER_SHEET]
                name = f"{t['id']}-{t['name'].replace('/', '_').replace('*', 'x')}-{n // PER_SHEET}"
                key = f"{width}/{name}"
                path = sd / str(width) / f'{name}.jpg'
                cells = [{'cell': i + 1, 'slug': sl, 'url': next(m['url'] for m in t['members'] if m['slug'] == sl)} for i, sl in enumerate(chunk)]
                index[key] = {'file': str(path), 'template': t['id'], 'name': t['name'], 'width': width, 'cells': cells,
                              'viewed': old.get(key, {}).get('viewed', False) if old.get(key, {}).get('cells') == cells else False}
                if path.exists() and not force and old.get(key, {}).get('cells') == cells:
                    continue
                rows = math.ceil(len(chunk) / COLS)
                sheet = Image.new('RGB', (COLS * (CELL_W + 8), rows * (CELL_H + LABEL + 8)), 'white')
                dr = ImageDraw.Draw(sheet)
                for i, sl in enumerate(chunk):
                    x, y = (i % COLS) * (CELL_W + 8), (i // COLS) * (CELL_H + LABEL + 8)
                    try:
                        im, s, k, H = page_image(ROOT / site / sl, width)
                        sheet.paste(im, (x, y + LABEL))
                        meta = f'{H}px'
                    except Exception as e:
                        meta = f'ERR {e}'[:30]
                    dr.text((x + 2, y + 1), f'{i + 1}. {sl[:30]}', fill='black', font=FONT)
                    dr.text((x + 2, y + 13), meta, fill='#555', font=FONT)
                path.parent.mkdir(parents=True, exist_ok=True)
                sheet.save(path, quality=72)
    idx_path.parent.mkdir(parents=True, exist_ok=True)
    idx_path.write_text(json.dumps(index, indent=1))
    print(f'{site}: {len(index)} sheets')


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    for site in args or sorted(p.parent.name for p in (ROOT / '_sheets').glob('*/groups.json')):
        build(site, '--force' in sys.argv)
