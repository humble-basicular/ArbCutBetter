"""Group each site's captured pages into templates by skeleton similarity + URL pattern; flag outliers.
Input: ~/.ai-powerhouse/research-captures/arbcut-v4/<site>/<slug>/<width>/record.json (1440 drives grouping).
Output: bulk-groups.json next to this script (+ printed summary). Usage: python3 bulk-group.py [site ...]
Records from older scripts have no skeleton; they are grouped by URL pattern + heading structure and marked legacy.
"""
import json, sys, re, statistics
from pathlib import Path
from difflib import SequenceMatcher

ROOT = Path.home() / '.ai-powerhouse/research-captures/arbcut-v4'
HERE = Path(__file__).resolve().parent
OUT = HERE / 'bulk-groups.json'
JOIN, OUTLIER = 0.72, 0.80


def load(site):
    pages = []
    for d in sorted((ROOT / site).iterdir()):
        if not d.is_dir() or d.name.startswith('_') or d.name in ('interactions',):
            continue
        rec = {}
        for w in ('1440', '390'):
            p = d / w / 'record.json'
            if p.exists():
                try:
                    r = json.loads(p.read_text())
                except Exception:
                    continue
                if r.get('captureComplete'):
                    rec[w] = r
        if '1440' in rec or '390' in rec:
            pages.append((d.name, rec))
    return pages


def tokens(r):
    dom = r.get('dom') or {}
    sk = dom.get('skeleton')
    if sk:
        out = []
        for s in sk:
            cls = re.sub(r'(elementor-element|e)-?#?', '', s.get('cls', ''))[:40]
            feat = ('F' if s.get('forms') else '') + ('I' if s.get('imgs', 0) > 2 else '') + ('H' if s.get('heads', 0) else '')
            out.append(f"{s['tag']}:{cls}:{feat}")
        return out, False
    # legacy: heading tag sequence (H1/H2 only) gives coarse section structure
    return [h['tag'] for h in dom.get('headings', []) if h.get('tag') in ('H1', 'H2')], True


def url_pattern(slug):
    parts = [] if slug == 'home' else slug.split('__')
    if not parts:
        return 'home'
    head = parts[0]
    return f"{head}/*" if len(parts) > 1 else f"/{len(parts)}"


def sim(a, b):
    s = SequenceMatcher(None, a['tok'], b['tok'], autojunk=False).ratio() if a['tok'] or b['tok'] else 1.0
    u = 1.0 if a['pat'] == b['pat'] else (0.5 if a['pat'].split('/')[0] == b['pat'].split('/')[0] else 0.0)
    return 0.75 * s + 0.25 * u


def group(site):
    pages = []
    for slug, rec in load(site):
        r = rec.get('1440') or rec.get('390')
        tok, legacy = tokens(r)
        pages.append({'slug': slug, 'url': r.get('url'), 'tok': tok, 'legacy': legacy, 'pat': url_pattern(slug),
                      'h1440': (rec.get('1440') or {}).get('documentHeight'), 'h390': (rec.get('390') or {}).get('documentHeight'),
                      'widths': sorted(rec), 'title': (r.get('dom') or {}).get('title', '')[:90],
                      'http': r.get('status')})
    templates = []
    # deterministic: shorter/upper-level URLs first so a section index can seed its template
    for p in sorted(pages, key=lambda p: (p['slug'].count('__'), p['slug'])):
        best, bs = None, 0
        for t in templates:
            s = sim(p, t['rep'])
            if s > bs:
                best, bs = t, s
        if best and bs >= JOIN and p['slug'] != 'home':
            best['members'].append((p, bs))
        else:
            templates.append({'rep': p, 'members': [(p, 1.0)]})
    out = []
    for i, t in enumerate(sorted(templates, key=lambda t: -len(t['members']))):
        pats = {}
        for p, _ in t['members']:
            pats[p['pat']] = pats.get(p['pat'], 0) + 1
        name = 'home' if t['rep']['slug'] == 'home' else (max(pats, key=pats.get) if len(t['members']) > 1 else 'one-off')
        hs = [p['h1440'] for p, _ in t['members'] if p['h1440']]
        mu = statistics.mean(hs) if hs else 0
        sd = statistics.pstdev(hs) if len(hs) > 2 else 0
        members = []
        for p, s in t['members']:
            flags = []
            if len(t['members']) > 2 and s < OUTLIER:
                flags.append(f'skeleton-deviates({s:.2f})')
            if sd and p['h1440'] and abs(p['h1440'] - mu) > 2 * sd:
                flags.append(f"height-outlier({p['h1440']} vs mean {mu:.0f})")
            if p['legacy']:
                flags.append('legacy-record')
            if p['http'] and p['http'] != 200:
                flags.append(f"http-{p['http']}")
            if len(p['widths']) < 2:
                flags.append('one-width-only:' + ','.join(p['widths']))
            members.append({k: p[k] for k in ('slug', 'url', 'title', 'h1440', 'h390', 'pat')} | {'sim': round(s, 3), 'flags': flags})
        out.append({'id': f't{i:02d}', 'name': name, 'count': len(members), 'rep': t['rep']['slug'], 'patterns': pats, 'members': members})
    return out


def main():
    sites = sys.argv[1:] or sorted(d.name for d in ROOT.iterdir() if d.is_dir() and '.' in d.name)
    data = json.loads(OUT.read_text()) if OUT.exists() else {}
    for site in sites:
        if not (ROOT / site).exists():
            continue
        ts = group(site)
        data[site] = {'pages': sum(t['count'] for t in ts), 'templates': ts}
        flagged = sum(1 for t in ts for m in t['members'] if any(not f.startswith(('legacy', 'one-width')) for f in m['flags']))
        print(f"{site}: {data[site]['pages']} pages → {len(ts)} templates "
              f"({sum(1 for t in ts if t['count'] == 1)} one-offs), {flagged} flagged")
        for t in ts[:8]:
            print(f"   {t['id']} {t['name']:<28} n={t['count']:<4} rep={t['rep'][:50]}")
    OUT.write_text(json.dumps(data, indent=1))


if __name__ == '__main__':
    main()
