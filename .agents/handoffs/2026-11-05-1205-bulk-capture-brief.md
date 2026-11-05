# Handoff: ArbCut v4 bulk capture, then analysis (replaces batch-by-batch method)
From: Claude lead · To: new bulk-capture thread · Date: 2026-11-05T12:05+02:00

## Objective
Two steps, run fast. (1) One unattended capture of every findable page on all 13 agreed sites at 1440 and 390. (2) Analysis from contact sheets plus full-size checks. The user approved this method on 2026-11-05 because the per-batch "view every sheet full size" method was far too slow (17/265 Smock pages after hours).

## Sites (from 2026-11-05-0915 brief)
puetzconstruction.com, smockhvac.com, veteranscontractingllc.com, genzryan.com, northfaceconstruction.com, bearsplumbing.net, trueairconditioningandheating.com, homefrontexteriorsmn.com, callthelen.com, greentekroofing.com, theglassperts.com, vensland.lt, betonogaminiai.lt.

## Step 1: `.agents/research/v4-reference-study/bulk-capture.mjs`
- Discovery per site: robots.txt → every sitemap/sub-sitemap, plus homepage seed and BFS over internal links found on every captured page. Normalise: drop `#hash` and `?query`; skip wp-admin, wp-json, feed, cart/checkout/my-account/login, mailto/tel; list (don't screenshot) PDFs/images/other files. Cap 800 pages/site; log if hit.
- Capture: reuse the corrected method in `smock-capture.mjs` exactly (scroll passes for lazy load, `content-visibility: visible`, image decode + fonts wait, first viewport with fixed UI, then hide fixed/sticky, CDP clip segments of 2400 px at 1440, scrolled-viewport segments at 390 with last crop). Real Chrome (`/Applications/Google Chrome.app`), headless OK; no request/tracker blocking.
- Save per page/width into `~/.ai-powerhouse/research-captures/arbcut-v4/<host>/<slug>/<width>/` (same layout as now): segments, first-viewport.jpg, record.json with true height, headings, links, forms, fonts/colours, schema, fixed elements, plus a `skeleton` (section structure: tag + normalised classes of large blocks) for template grouping.
- Skip pages whose record.json already has `captureComplete` at that width (Smock, Puetz, Vensland work is reused).
- Concurrency: global pool ~8 contexts (16 GB RAM), max 2 per site. Each page navigation 45 s timeout.
- Failures: 401/403/429/503, Cloudflare/"Just a moment"/"Access denied" → status `blocked`, never bypass; redo afterwards in a headed browser or T3 preview. Other errors → one retry, then `failed`. Nothing dropped silently.
- Ledger: `.agents/research/v4-reference-study/bulk-ledger.json` (every URL: source sitemap/link, status captured/blocked/failed/file/capped, widths). Make the script resumable (rerun skips done pages). Run it in the background with a log file; monitor without polling loops that burn context.
- Disk: ~58 GB free; use JPEG quality ~75; no thumbs/sheets during capture.

## Step 2: analysis
- `bulk-group.py`: group each site's pages into templates by skeleton similarity + URL pattern; flag pages that deviate from their template.
- `bulk-contact-sheets.py`: per site/template, ~20 page previews per image (stitched page scaled down) at both widths. View every contact sheet; that is how every page gets seen.
- Full size: every one-off page (home, about, contact, prices/financing, gallery/projects, reviews, 404, thank-you), at least 2 differing examples per template, every flagged outlier. 360 width on key pages only.
- Interaction pass (separate small script per site): mobile menu, desktop dropdowns, quote/booking CTA target, form fields + validation WITHOUT submitting, FAQ, lightbox/gallery, sliders, sticky bars, hover, load/scroll motion, reduced-motion.
- Report: update `.agents/research/v4-reference-study.md` with the cross-site winning formula, each rule citing site + page + width + screenshot path; coverage ledger per site incl. known limits (orphan pages unfindable; blocked pages).

## Constraints
No edits to `src/`/`public/`. No forms submitted, no consent/purchases/messages, no access-control bypass, no push/merge/deploy. Commit only scripts, ledger, report and ≤40 key JPGs under 300 KB in git; raw captures stay outside git. Commit at each step. Read `.agents/research/v4-learnings.md` before analysis (user design constraints and rejections). Handoff at ~80% usage naming commit + next step.

## State at handoff
Commit aefeb94 (Smock ledger checkpoint). Smock: 17+ pages captured/viewed in detail, findings in `smock-findings.md`. Puetz: ~35/246 studied, notes in `puetz-*.md`. Vensland baseline in `vensland-baseline.md`. Old `smock-*` batch scripts are superseded; don't continue them. The old thread makes no further edits in this worktree.
