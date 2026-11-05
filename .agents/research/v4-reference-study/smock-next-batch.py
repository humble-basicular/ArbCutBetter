# Explicit bounded queue runner: no viewed flags inferred and no unviewed backlog allowed.
from pathlib import Path
import json,subprocess,sys
base=Path(__file__).parent
subprocess.run([sys.executable,str(base/'smock-ledger.py')],check=True)
d=json.loads((base/'smock-ledger.json').read_text())
if any(w['captured'] and not w['viewed'] for r in d['urls'] for w in r['widths']):
 raise SystemExit('Inspect captured records before next batch')
priority=lambda r:(0 if r['pageType']=='service' else 1 if r['pageType'] not in ['article','hvac locality (URL classification; unverified template)','water-heater-replacement locality (URL classification; unverified template)'] else 2,r['url'])
queue=sorted([r for r in d['urls'] if not all(w['viewed'] for w in r['widths']) and r['pageType'] not in ['geographic data, not HTML','shop application state (unverified)']],key=priority)
urls=[r['url'] for r in queue[:int(sys.argv[1] if len(sys.argv)>1 else 2)]]
print('EXACT NEXT BATCH',urls,flush=True)
subprocess.run(['node',str(base/'smock-capture.mjs'),*urls],check=True)
subprocess.run([sys.executable,str(base/'smock-sheets.py')],check=True)
subprocess.run([sys.executable,str(base/'smock-ledger.py')],check=True)
