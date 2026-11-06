# Handoff: ArbCut v5 audit fixes (8 areas)
From: Claude Opus 5.5 lead · To: next owner · Date: 2026-11-06 23:00 Europe/Vilnius

## Objective
All eight areas from `~/WebAgency-Biz-worktrees/arbcut-audit-handoff-20261106/.agents/handoffs/2026-11-06-arbcut-v5-audit-fixes.md`. No push, merge, deploy, publish, client messages, real sends, spend.

## State (branch `build/arbcut-v5-site-20261106`, code head `0da8e3a`)
1. Photos: optional upload in hero, dialog, contact and service-city forms (`ec01b6f`..`0ebbf37`, freeze fix `0da8e3a`). Flag `features.photoUpload`.
2. Mobile bar and question button (`a66c4ee`).
3. Coverage in `site.zona` (150 km; Klaipėda, Šiauliai excluded); llms.txt prices from data (`ec01b6f`).
4. Homepage: work before process, less repeated photo copy, calmer labels (`8935e4d`).
5. Job examples from reviews on /galerija (`f31b07b`, data `src/data/darbai.js`).
6. Permit and pricing articles rewritten with sources; article date 2026-06-04 is the earliest provable date; author Organization.
7. Grammar: `apieKa`, `grupes.kitos`.
8. Service-city routes kept; production build checked locally.

## Verified
Codex review: r1 changes requested (3 findings, all fixed), r2 `Verdict: approved`. 49 routes at 4 widths: 0 errors, overflow, duplicate titles, broken links. Production build: sitemap 46 URLs, noindex only on legal, thank-you and 404 pages, real form action, JSON-LD parses. Preview: all noindex, all forms inert, no sitemap. Photos through a local copy of the Worker: stored, read back byte-identical with token, 401 without.

## Not verified
Real phones, live Turnstile, inbox delivery, current fine amounts in the Administrative Offences Code (article cites the ministry's 2022 figures with that date; full text of Nr. 206 annex not read, thresholds come from ministry and Vilnius pages).

## Open (user/Mantas)
Photo visibility in alert email (launch gate); free assessment; PVM and travel fee; Mantas as article reviewer; real job details and photos; true article publication dates.

## Next
User answers. Worker owner: `.agents/research/v5-form-launch-steps.md`.
