#!/usr/bin/env python3
# C1.2: compare baseline bb63bd8 build with v4 build, route by route.
import json,os,re,sys
from html.parser import HTMLParser
A='/tmp/arbcut-base/dist'; B=sys.argv[1] if len(sys.argv)>1 else 'dist'
class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.title='';s.desc=None;s.canon=None;s.robots=None;s.heads=[];s.hrefs=set();s.ld=[];s.text=[];s.stack=None;s.skip=0;s.buf='';s.h=None;s.ids=set();s.locs=[];s.form=[];s.alts=[]
    def handle_starttag(s,t,a):
        d=dict(a)
        if t=='meta' and d.get('name')=='description': s.desc=d.get('content')
        if t=='meta' and d.get('name')=='robots': s.robots=d.get('content')
        if t=='link' and d.get('rel')=='canonical': s.canon=d.get('href')
        if t=='a' and d.get('href'): s.hrefs.add((d['href'],d.get('target'),d.get('rel')))
        if d.get('id'): s.ids.add(d['id'])
        if d.get('data-loc'): s.locs.append(d['data-loc'])
        if t in('input','select','textarea') and d.get('name'): s.form.append((t,d['name'],'required' in d))
        if t=='script' and d.get('type')=='application/ld+json': s.stack='ld';s.buf=''
        elif t in('script','style'): s.skip+=1
        if t=='title': s.stack='title';s.buf=''
        if t in('h1','h2','h3'): s.h=t;s.hb=''
    def handle_endtag(s,t):
        if t=='script' and s.stack=='ld': s.ld.append(json.loads(s.buf));s.stack=None;return
        if t in('script','style') and s.skip: s.skip-=1
        if t=='title' and s.stack=='title': s.title=s.buf;s.stack=None
        if s.h==t: s.heads.append((t,' '.join(s.hb.split())));s.h=None
    def handle_data(s,x):
        if s.stack: s.buf+=x
        elif not s.skip:
            if s.h: s.hb+=x
            if x.strip(): s.text.append(' '.join(x.split()))
def pages(r):
    o={}
    for dp,_,fs in os.walk(r):
        for f in fs:
            if f.endswith('.html'):
                rel=os.path.relpath(os.path.join(dp,f),r); o['/'+re.sub(r'(index)?\.html$','',rel).rstrip('/')]=os.path.join(dp,f)
    return o
pa,pb=pages(A),pages(B)
print('routes',len(pa),len(pb),'missing',set(pa)^set(pb))
tot={}
def rep(k,r,m):
    tot[k]=tot.get(k,0)+1
    if tot[k]<=int(os.environ.get('MAX',6)): print(f'[{k}] {r}: {m}')
for r in sorted(pa):
    if r not in pb: continue
    a,b=P(),P(); a.feed(open(pa[r]).read()); b.feed(open(pb[r]).read())
    for k in('title','desc','canon','robots'):
        if getattr(a,k)!=getattr(b,k): rep(k,r,(getattr(a,k),getattr(b,k)))
    if a.heads!=b.heads:
        rep('heads',r,[x for x in a.heads if x not in b.heads][:4]+['=>']+[x for x in b.heads if x not in a.heads][:4])
    if a.hrefs!=b.hrefs: rep('hrefs',r,('lost',sorted(a.hrefs-b.hrefs,key=str)[:5],'new',sorted(b.hrefs-a.hrefs,key=str)[:5]))
    if a.ld!=b.ld: rep('jsonld',r,'differs')
    if sorted(set(a.locs))!=sorted(set(b.locs)): rep('data-loc',r,(set(a.locs)-set(b.locs),set(b.locs)-set(a.locs)))
    if a.form!=b.form: rep('form',r,(a.form[:4],b.form[:4]))
    if a.ids-b.ids: rep('ids',r,sorted(a.ids-b.ids)[:8])
    ta,tb=' '.join(a.text),' '.join(b.text)
    wa=set(re.findall(r'\w+',ta.lower())); wb=set(re.findall(r'\w+',tb.lower()))
    if wa-wb: rep('words-lost',r,sorted(wa-wb)[:12])
    if wb-wa: rep('words-new',r,sorted(wb-wa)[:12])
print('summary',tot)
