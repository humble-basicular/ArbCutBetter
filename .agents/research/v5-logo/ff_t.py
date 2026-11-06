import fontforge, psMat
f = fontforge.open('brico-800-w90.ttf')
g = f['t']
xmin,ymin,xmax,ymax = g.boundingBox()
print('t bbox', g.boundingBox(), 'adv', g.width)
# keep region: everything except a triangle cutting the top of the stem diagonally (saw cut rising to the right)
pen = g.glyphPen(replace=False)
# big polygon covering glyph except top-left diagonal: points clockwise (y up)
cut_y_left = ymax - 120; cut_y_right = ymax + 10
pen.moveTo((xmin-50, ymin-50)); pen.lineTo((xmin-50, cut_y_left - 60)); pen.lineTo((xmax+50, cut_y_right+40)); pen.lineTo((xmax+50, ymin-50)); pen.closePath()
pen = None
g.intersect()
g.removeOverlap(); g.simplify(0.5); g.round()
print('new bbox', g.boundingBox())
f.generate('brico-800-w90-cut.ttf')
for ch in 'ArbCut':
    f[ch].export(f'gl-{ch}.svg')
