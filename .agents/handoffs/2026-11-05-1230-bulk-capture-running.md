# Handoff: bulk capture running (ArbCut v4 reference study)
From: Claude lead (bulk-capture thread) · Date: 2026-11-05T12:30+02:00 · Brief: `2026-11-05-1205-bulk-capture-brief.md`

## State
- Scripts committed: `.agents/research/v4-reference-study/bulk-capture.mjs` (46177eb + this commit), `bulk-group.py`, `bulk-contact-sheets.py`.
- Smoke test: genzryan.com/ and bearsplumbing.net/ captured at 1440 + 390, viewed stitched (complete; Genz desktop has one empty white band, likely a third-party widget, check at full size).
- Full run started 12:18 EET in the background: `nohup node bulk-capture.mjs >> ~/.ai-powerhouse/research-captures/arbcut-v4/bulk-run.log`. Pool 8, max 2/site, headless real Chrome; headless-blocked pages auto-retry in a headed ordinary Chrome window (no spoofing/evasion).
- Discovery: all 13 sites have sitemaps (Smock/True Air sitemaps read through Chrome after plain fetch got 403). theglassperts.com now redirects to glassexpertsfl.com (aliased; dir name stays theglassperts.com). ~3,300 pages queued.
- Speed ≈ 5–6 pages/min (memory-bound: Chrome ~12 GB, swap 8 GB) → ETA ~10 h from 12:18.
- Grouping + sheets tested on vensland.lt: `_sheets/vensland.lt/{1440,390}/*.jpg` + `index.json`. Legacy records (old scripts) lack `skeleton`, so they group by URL only (privacy page fell into localities template).

## Known issue
- Ledger entry `theglassperts.com/home` was queued with https://theglassperts.com/ (TLS timeout) before aliasing → will end `failed`. Rerunning `node bulk-capture.mjs` after the run rewrites the URL to glassexpertsfl.com and retries failed pages (resumable).

## Next (owner: whoever continues this thread)
1. If the process died: rerun the same command; it skips completed record.json files.
2. When done: per-site counts from `bulk-ledger.json` (`counts`), commit ledger; rerun once for failed; redo `blocked` in headed browser/T3 preview.
3. `python3 bulk-group.py && python3 bulk-contact-sheets.py`; view every sheet (mark `viewed` in `_sheets/<site>/index.json`), full-size checks, interaction pass, report in `.agents/research/v4-reference-study.md`. Read `v4-learnings.md` first.
