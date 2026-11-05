# Handoff: v4 bulk study in flight (capture + parallel analysts)
From: Claude lead (Opus 5.5, claudeAgent) · 2026-11-05 13:30 EET · Supersedes `2026-11-05-1230-bulk-capture-running.md`
User (13:00): run the whole scan + analysis today, miss nothing, design quality matters; lead decides everything.

## Running processes (background, survive this session)
- Main capture `node bulk-capture.mjs` (PID 92928, restarted 13:07 with iframe patch) → log `~/.ai-powerhouse/research-captures/arbcut-v4/bulk-run.log`, ledger `.agents/research/v4-reference-study/bulk-ledger.json`. ETA ~17:30 EET. Rerun the same command if it dies (resumable).
- Side recapture of 119 pages that had blank iframe bands: `BULK_LEDGER=bulk-ledger-recapture-iframes.json node bulk-capture.mjs --pool 2 --per-site 1 --only …` → log `bulk-run-recapture.log`. Old images in `_backup-pre-iframe/`.
- Pending-at-end: `theglassperts.com/home` entry uses old https://theglassperts.com URL → rerun main command after finish (rewrites to glassexpertsfl.com and retries failed).

## Delegated stages (T3 task ids; resume with continueTaskId)
| Stage | Provider/model | Status |
|---|---|---|
| v4-bulk-interactions | Codex2 gpt-6.1-sol | done r1+r2 (515/1300 done; rest mostly legit not-present). Lead fix pass `bulk-interactions-fix.json` closed all 5 missing mobile menus + 3 dropdown sites. Remaining: FAQ captures on genz/bears/thelen/veterans, scheduler-open verification |
| v4-analyst-vensland.lt | Claude2 Opus high | partial (budget). Gaps listed in file: home/vilnius had reveal blanks (now in recapture list), localities only trakai full |
| v4-analyst-betonogaminiai.lt | Claude2 | done (all sheets, all templates) |
| v4-analyst-homefrontexteriorsmn.com | Claude Opus high | running (task …homefront-initial-1) |
| v4-analyst-trueairconditioningandheating.com | Codex2 gpt-6.1-sol high | running (task …trueair-initial-1) |
| remaining 8 sites | — | dispatch on "SITE DONE" (Claude2 weekly 78% → prefer claudeAgent + codex_codex2) |

Analyst brief: `.agents/research/v4-reference-study/bulk-analyst-brief.md` (step 0 artefact check, efficiency rules). Outputs `bulk-findings-<site>.md`. Analysts don't commit; lead commits.

## Capture defects found + fixed
1. Cross-origin iframes paint blank in 1440 CDP clips → `patchIframes()` in bulk-capture.mjs + `bulk-iframe-patch.py` (a02a40b). Detector `bulk-blank-check.py` (`MIN1440=300`).
2. Scroll-reveal unfinished on a few pages (VensLand home/vilnius) → in recapture list; check again with blank-check after runs.
3. Real site defects seen in data: horizontal overflow at 390 — Glassperts 395 px (most pages), True Air 463/580 (2 pages), Bears 782 (1 page).

## Next (lead)
1. On each SITE DONE: run analyst for that site. When main + recapture end: per-site counts line to user; `MIN1440=300 python3 bulk-blank-check.py`; recapture remaining flagged; blocked → headed/T3 preview.
2. After all findings: write cross-site winning formula into `.agents/research/v4-reference-study.md` (read `v4-learnings.md` first), ≤40 key JPGs <300 KB in git, coverage ledger per site; Codex review ("Verdict:" line), max 2 rounds.
