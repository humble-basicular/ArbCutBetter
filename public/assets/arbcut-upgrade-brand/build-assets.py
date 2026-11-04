"""Reproduce brand exports from the untouched generated concept 2. Requires Pillow and potrace."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import subprocess, json, hashlib
P=Path(__file__).resolve().parent
D='#1D3227'; L='#F3EFE7'
R=Image.Resampling
# Threshold generated alpha to remove inconsistent interior opacity and stray pixels.
a=Image.open(P/'originals/concept-2.png').convert('RGBA').getchannel('A').point(lambda v:255 if v>=128 else 0)
a=a.crop(a.getbbox())
# Keep one pixel of transparent padding at native raster size for clean trace margins.
pad=Image.new('L',(a.width+4,a.height+4)); pad.paste(a,(2,2)); a=pad
# Trace only the generated silhouette, never draw a replacement symbol.
pbm=Image.eval(a,lambda v:255-v).convert('1'); pbm.save(P/'trace-source.pbm')
subprocess.run(['potrace',str(P/'trace-source.pbm'),'-s','-o',str(P/'mark-dark.svg'),'--turdsize','8','--alphamax','1'],check=True)
s=(P/'mark-dark.svg').read_text().replace('#000000',D)
(P/'mark-dark.svg').write_text(s)
(P/'mark-light.svg').write_text(s.replace(D,L))
# Raster exports use the same thresholded generated alpha, antialiased on resize.
a=a.resize((round(a.width*1152/a.height),1152),R.LANCZOS)
def mark(color,mask=a):
 i=Image.new('RGBA',mask.size,color); i.putalpha(mask); return i
def save(i,name): i.save(P/name,optimize=True)
for name,color in [('dark',D),('light',L)]: save(mark(color),f'mark-{name}.png')
def font(size):
 f=ImageFont.truetype(str(P/'fonts/PlayfairDisplay.ttf'),size); f.set_variation_by_axes([700]); return f
def lockup(color,height):
 # Generous spacing; exact wordmark is always independently typeset.
 h=height-4; m=mark(color).resize((round(a.width*h/a.height),h),R.LANCZOS)
 f=font(round(height*.85)); box=f.getbbox('ArbCut'); tw=round(f.getlength('ArbCut'))
 i=Image.new('RGBA',(m.width+round(height*.23)+tw+8,height))
 i.alpha_composite(m,(2,2)); ImageDraw.Draw(i).text((m.width+round(height*.23),round((height-(box[3]-box[1]))/2)-box[1]),'ArbCut',font=f,fill=color)
 return i
for name,color in [('dark',D),('light',L)]:
 save(lockup(color,88),f'logo-horizontal-{name}.png')
 save(lockup(color,352),f'logo-horizontal-{name}-large.png')
def tile(size):
 # Forest tile ensures off-white symbol contrast on both light and dark browser chrome.
 i=Image.new('RGBA',(size,size),D); m=mark(L); m.thumbnail((round(size*.81),round(size*.86)),R.LANCZOS)
 i.alpha_composite(m,((size-m.width)//2,(size-m.height)//2)); return i
for size in [16,32]: save(tile(size),f'favicon-{size}.png')
save(tile(180).convert('RGB'),'apple-touch-icon.png')
for size in [192,512]: save(tile(size).convert('RGB'),f'icon-{size}.png')
tile(256).save(P/'favicon.ico',sizes=[(16,16),(32,32),(48,48)])
# Review sheet includes actual-size and nearest-neighbour enlarged favicons on both backgrounds.
sheet=Image.new('RGB',(1200,860),L); draw=ImageDraw.Draw(sheet)
label=ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc',18)
for row,(bg,fg,name) in enumerate([(L,D,'dark'),(D,L,'light')]):
 y=row*430; draw.rectangle((0,y,1200,y+430),fill=bg)
 draw.text((30,y+20),f'ARBCUT / {name.upper()} ASSETS / Playfair Display Bold',font=label,fill=fg)
 m=mark(fg); m.thumbnail((190,210),R.LANCZOS); sheet.paste(m,(35,y+80),m)
 logo=Image.open(P/f'logo-horizontal-{name}-large.png'); logo.thumbnail((650,130),R.LANCZOS); sheet.paste(logo,(290,y+110),logo)
 draw.text((30,y+325),'Favicons: 16px / 32px actual; 4x nearest-neighbour',font=label,fill=fg)
 for size,x in [(16,560),(32,610)]:
  im=tile(size); sheet.paste(im,(x,y+325),im)
  big=im.resize((size*4,size*4),R.NEAREST); sheet.paste(big,(720+(size==32)*110,y+280),big)
save(sheet,'preview-sheet.png')
# Compact visual comparison of all original generated silhouettes.
cs=Image.new('RGB',(1000,380),L)
for n in range(1,4):
 im=Image.open(P/f'originals/concept-{n}.png').convert('RGBA'); im.thumbnail((300,300),R.LANCZOS)
 cs.paste(im,((n-1)*330+15,25),im); ImageDraw.Draw(cs).text(((n-1)*330+20,345),f'Concept {n}'+(' — selected' if n==2 else ''),font=label,fill=D)
save(cs,'concept-comparison.png')
checks={}
for p in sorted(P.glob('*.png')):
 im=Image.open(p); corners=[im.getpixel(q)[3] for q in [(0,0),(im.width-1,0),(0,im.height-1),(im.width-1,im.height-1)]] if im.mode=='RGBA' else None
 checks[p.name]={'size':list(im.size),'mode':im.mode,'corner_alpha':corners}
 if p.name.startswith(('mark-','logo-horizontal-')):
  assert im.mode=='RGBA' and corners==[0]*4
  rgb=im.convert('RGB'); expected=tuple(bytes.fromhex((D if '-dark' in p.name else L)[1:]))
  assert all(rgb.getpixel((x,y))==expected for y in range(im.height) for x in range(im.width) if im.getpixel((x,y))[3]>0) if p.name.startswith('mark-') else True
checks['favicon.ico']={'sizes':sorted([list(z) for z in Image.open(P/'favicon.ico').ico.sizes()])}
checks['originals_byte_identical']={f'concept-{n}.png':hashlib.sha256((P/f'originals/concept-{n}.png').read_bytes()).hexdigest() for n in range(1,4)}
checks['bytes_excluding_originals']=sum(f.stat().st_size for f in P.rglob('*') if f.is_file() and 'originals' not in f.parts)
checks['originals_bytes']=sum(f.stat().st_size for f in (P/'originals').glob('*'))
(P/'verification.json').write_text(json.dumps(checks,indent=2)+'\n')
print(json.dumps(checks,indent=2))
