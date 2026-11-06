# Extract glyph outlines from a real typeface (Bricolage Grotesque 800, static instance) as SVG paths, y-up -> y-down.
import sys, json
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
f = TTFont(sys.argv[1]); text = sys.argv[2]; kern = json.loads(sys.argv[3]) if len(sys.argv)>3 else {}
gs = f.getGlyphSet(); cmap = f.getBestCmap(); upm = f['head'].unitsPerEm
asc = f['OS/2'].sCapHeight
x = 0; out = []
for i,ch in enumerate(text):
    g = cmap[ord(ch)]; pen = SVGPathPen(gs)
    tp = TransformPen(pen, (1,0,0,-1,x,asc))
    gs[g].draw(tp)
    out.append({'ch':ch,'x':x,'d':pen.getCommands(),'adv':gs[g].width})
    x += gs[g].width + kern.get(str(i),0)
print(json.dumps({'upm':upm,'cap':asc,'width':x,'xh':f['OS/2'].sxHeight,'glyphs':out}))
