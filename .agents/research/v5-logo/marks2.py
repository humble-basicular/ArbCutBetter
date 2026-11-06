import numpy as np, json
from shapely.geometry import Polygon, LineString, Point, box, MultiPolygon
from shapely.ops import unary_union
from shapely import affinity
SP='#0F2E23'; OR='#E2611B'
def quad(p0,p1,p2,n=14):
    t=np.linspace(0,1,n)[:,None]; p0,p1,p2=map(np.array,(p0,p1,p2)); return list(map(tuple,(1-t)**2*p0+2*(1-t)*t*p1+t**2*p2))
def path(pts):
    out=[]
    for seg in pts:
        if seg[0]=='q': out+=quad(out[-1],seg[1],seg[2])[1:]
        else: out.append(seg)
    return out
def svgd(geom):
    gs = geom.geoms if hasattr(geom,'geoms') else [geom]; d=''
    for g in gs:
        if g.is_empty: continue
        for ring in [g.exterior]+list(g.interiors):
            c=list(ring.coords); d+='M'+' L'.join(f'{x:.2f},{y:.2f}' for x,y in c[:-1])+'Z '
    return d
def spruce(cx=100, top=4, base=206, tiers=5, w0=30, w1=68, asym=(1.0,0.92), trunkw=18, trunkb=236):
    # one side generator: returns list of points going down (side=-1 left) or up (side=+1 right)
    ys=top+18+(base-top-18)*np.linspace(0,1,tiers)**0.92
    def side(s, f):
        pts=[]
        prev_in=top
        for i,y in enumerate(ys):
            w=(w0+(w1-w0)*((i/(tiers-1))**0.85))*f
            yin=y-(ys[1]-ys[0])*0.62 if i>0 else top+8
            xin=cx+s*(trunkw/2+2+ i*1.2)
            tip=(cx+s*w, y+4)
            pts.append((xin if i>0 else cx+s*2, yin if i>0 else top+4))
            pts.append(('q',(cx+s*w*0.55, y-6),tip))
            pts.append((cx+s*(w-5), y+1))
            pts.append((cx+s*(trunkw/2+4+i*1.5), y-3))
        return pts
    Lp=[(cx,top)]+side(-1,asym[0])+[(cx-trunkw/2,base),(cx-trunkw/2,trunkb),(cx+trunkw/2,trunkb),(cx+trunkw/2,base)]
    Rp=side(+1,asym[1])
    # reverse right side order: we need going up
    Rr=[]
    seq=[]
    # build right by mirroring logic: generate going down then reverse with q handling -> easier: sample polygon then reverse
    rpts=path([(cx,top)]+Rp)[1:]
    return Polygon(path(Lp)+rpts[::-1])
# ---------- A: Pjūvis (top section cut off and lifted along the kerf: sectional felling) ----------
tree=spruce().buffer(0)
k0,k1=np.array([40,104.]),np.array([170,76.])
d=(k1-k0)/np.linalg.norm(k1-k0); n=np.array([-d[1],d[0]])
def half(sign,gap):
    p=[k0-d*300+n*sign*gap, k1+d*300+n*sign*gap, k1+d*300+n*sign*400, k0-d*300+n*sign*400]; return Polygon([tuple(x) for x in p])
low=tree.intersection(half(1,2.6)); top_=tree.intersection(half(-1,2.6))
top_=affinity.translate(top_, *(d*7 - n*5))
A={'name':'pjuvis','parts':[(SP,svgd(low)),(OR,svgd(top_))],'bbox':unary_union([low,top_]).bounds}
# ---------- B: Aukštalipys ----------
trunkB=Polygon(path([(92,236),('q',(95,150),(98,74)),(103,74),('q',(105,150),(109,236))]))
stub1=LineString([(97,154),(83,143)]).buffer(3.4,cap_style=2); stub2=LineString([(104,124),(117,114)]).buffer(3.0,cap_style=2)
def plate(x0,x1,ytop,ybot,seed):
    r=np.random.default_rng(seed); xs=np.linspace(x0,x1,9)
    topp=[(x, ytop+ (6 if i in (0,8) else r.uniform(-2,3))) for i,x in enumerate(xs)]
    bot=[]
    for i,x in enumerate(xs[::-1]):
        bot.append((x, ybot + (0 if i in (0,8) else r.uniform(-1,4)*(1 if i%2 else -0.6))))
    pts=[(x0-2,(ytop+ybot)/2)]+topp+[(x1+2,(ytop+ybot)/2)]+bot
    return Polygon(pts).buffer(3,join_style=1).buffer(-1.5,join_style=1)
p1=plate(56,150,30,52,3); p0=plate(78,126,18,32,5); p2=plate(28,84,74,90,7); p3=plate(116,174,64,80,9)
br=unary_union([LineString([(99,98),(60,84)]).buffer(2.8),LineString([(103,92),(144,74)]).buffer(2.8),LineString([(100,76),(92,48)]).buffer(2.6),LineString([(103,76),(118,48)]).buffer(2.4)])
pine=unary_union([trunkB,stub1,stub2,p0,p1,p2,p3,br]).buffer(0)
rope=LineString([(106,80),(129,152)]).buffer(1.7)
body=LineString([(128,156),(138,134)]).buffer(5.4,cap_style=1)
head=Point(142,124).buffer(6.4)
legs=unary_union([LineString([(128,158),(110,166)]).buffer(3.8,cap_style=1),LineString([(129,160),(112,178)]).buffer(3.8,cap_style=1)])
arm=LineString([(137,138),(131,128),(127,138)]).buffer(2.7,cap_style=1,join_style=1)
climber=unary_union([body,head,legs,arm]).buffer(0)
pine_cut=pine.difference(climber.buffer(2.6))
B={'name':'aukstalipys','parts':[(SP,svgd(pine_cut)),(OR,svgd(unary_union([rope.difference(climber.buffer(0.5)),climber])))],'bbox':unary_union([pine,climber]).bounds}
# ---------- C: A-eglė ----------
outer=Polygon(path([(100,6),(110,30),(104,32),(120,62),(112,64),(130,98),(121,100),(140,136),(131,138),(150,174),(141,176),(166,236),(130,236),(118,204),(82,204),(70,236),(34,236),(59,176),(50,174),(69,138),(60,136),(79,100),(70,98),(88,64),(80,62),(96,32),(90,30)]))
counter=Polygon([(100,106),(113,166),(87,166)])
Aform=outer.difference(counter)
ropeline=LineString(path([(50,180),('q',(100,197),(150,180))]))
ropeC=ropeline.buffer(4.6,cap_style=1)
# braid: thin diagonal negative slashes along the rope
sl=[]
for t in np.linspace(0.06,0.94,15):
    p=np.array(ropeline.interpolate(t,normalized=True).coords[0]); 
    sl.append(LineString([tuple(p+np.array([-2.6,4.2])),tuple(p+np.array([2.6,-4.2]))]).buffer(0.8))
ropeC=ropeC.difference(unary_union(sl))
tails=unary_union([LineString(path([(150,180),('q',(158,186),(156,200))])).buffer(2.6,cap_style=1)])
Aform_cut=Aform.difference(ropeline.buffer(7.2,cap_style=1))
C={'name':'a-egle','parts':[(SP,svgd(Aform_cut)),(OR,svgd(unary_union([ropeC,tails])))],'bbox':unary_union([Aform,ropeC,tails]).bounds}
json.dump([A,B,C],open('marks.json','w'))
for m in (A,B,C):
    x0,y0,x1,y1=m['bbox']; pad=4
    vb=f'{x0-pad:.1f} {y0-pad:.1f} {x1-x0+2*pad:.1f} {y1-y0+2*pad:.1f}'
    m['vb']=vb
    body=''.join(f'<path fill="{c}" d="{d}"/>' for c,d in m['parts'])
    open(f"mark-{m['name']}.svg",'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">{body}</svg>')
json.dump([A,B,C],open('marks.json','w'))
print('ok')
