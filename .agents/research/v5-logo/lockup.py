import json
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
SP='#0F2E23'; OR='#E2611B'; W='#FFFFFF'
def text_paths(fonts, text, size, x0, ybase, track=0, kern=None):
    out=[]; x=x0
    for i,ch in enumerate(text):
        if ch==' ': x+= size*0.28 + track; continue
        for f in fonts:
            cm=f.getBestCmap()
            if ord(ch) in cm: break
        gs=f.getGlyphSet(); upm=f['head'].unitsPerEm; s=size/upm; g=cm[ord(ch)]
        pen=SVGPathPen(gs); gs[g].draw(TransformPen(pen,(s,0,0,-s,x,ybase)))
        out.append((ch,pen.getCommands())); x+= gs[g].width*s + track + (kern.get(i,0) if kern else 0)
    return out, x
wm=TTFont('brico-800-w90-cut.ttf'); tg=[TTFont('figtree-750-lat.ttf'),TTFont('figtree-750-ext.ttf')]
marks={m['name']:m for m in json.load(open('marks.json'))}
def build(name, theme, layout='h'):
    m=marks[name]; vx,vy,vw,vh=map(float,m['vb'].split())
    fg = SP if theme=='light' else W
    markH=120.0; ms=markH/vh; markW=vw*ms
    cap=58.0; size=cap/0.66  # cap height 660/1000
    gap=18 if name!='aukstalipys' else 12
    x0=markW+gap; base=74.0
    kern={0:-5,1:1,2:3,3:0,4:0}
    glyphs,xend=text_paths([wm],'ArbCut',size,x0,base,track=0,kern=kern)
    tagsize=15.2; tagtext='ARBORISTAI AUKŠTALIPIAI'
    # fit tagline to wordmark width with tracking
    _,tw=text_paths(tg,tagtext,tagsize,0,0,track=0)
    track=((xend-x0)-tw)/(len(tagtext)-1)
    tagp,_=text_paths(tg,tagtext,tagsize,x0,base+30,track=track)
    parts=[]
    mark_colors = [(fg if c==SP else c) for c,_ in m['parts']]
    g_mark=''.join(f'<path fill="{col}" d="{d}"/>' for col,(c,d) in zip(mark_colors,m['parts']))
    parts.append(f'<g transform="translate(0,{(110-markH)/2+(-2):.1f}) scale({ms:.4f}) translate({-vx:.2f},{-vy:.2f})">{g_mark}</g>')
    for ch,d in glyphs:
        col = fg if ch in 'Arb' else OR
        parts.append(f'<path fill="{col}" d="{d}"/>')
    tagcol = fg if theme=='light' else '#F4B731'
    parts.append(''.join(f'<path fill="{tagcol}" d="{d}"/>' for _,d in tagp))
    W_=xend+4; H_=110
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 {W_:.1f} {H_+6}">{"".join(parts)}</svg>'
    fn=f'lockup-{name}-{theme}.svg'; open(fn,'w').write(svg); return fn
for n in ('a-egle','aukstalipys','pjuvis'):
    for t in ('light','dark'): print(build(n,t))
