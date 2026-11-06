#!/usr/bin/env python3
# sheet.py out.png w_each maxh img...  — lay screenshots side by side, each scaled to w_each, cropped to maxh
import sys
from PIL import Image
out, w, mh, *imgs = sys.argv[1:]; w=int(w); mh=int(mh)
ims=[]
for f in imgs:
    i=Image.open(f).convert('RGB'); h=int(i.height*w/i.width); i=i.resize((w,h)); ims.append(i.crop((0,0,w,min(h,mh))))
H=max(i.height for i in ims); S=Image.new('RGB',((w+12)*len(ims),H),(120,120,120))
for n,i in enumerate(ims): S.paste(i,(n*(w+12),0))
S.save(out)
