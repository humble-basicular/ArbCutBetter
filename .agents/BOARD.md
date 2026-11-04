# ArbCut work board

## 4 November 2026 — homepage v3 fixes and private hosting, VERIFIED / READY FOR LEAD

- Owner: Codex implementation sub-agent; owns src/**, public/** and this branch’s .agents/. Six approved fixes complete, code through `a072e11`; verified hosted review: https://jarvisweb-arbcut-preview.pages.dev/ (deployment d1c93d57). Phone 390×844: 14,972 px. 37 routes / 4 widths: 0 problems; ix 26/26, ix2 24/24; production contracts pass. No push/merge. Handoff: `.agents/handoffs/2026-11-04-1955-arbcut-homepage-hosted.md`.

## 4 November 2026 — homepage v3 rebuild, READY FOR LEAD REVIEW

- Owner: Claude (design sub-agent). Branch `design/arbcut-upgrade-20261104`. Homepage + shared header/footer/tokens/review system rebuilt; other pages build but are not redesigned. Handoff: `.agents/handoffs/2026-11-04-2000-arbcut-homepage-v3.md`.

## 4 November 2026 — bespoke redesign, PREVIEW READY, awaiting user review (commit 32986e5)

- Owner: Claude Opus 5.5, Ultrathink, new AI Powerhouse autonomous top-level thread.
- Branch: `design/arbcut-upgrade-20261104`; T3 creates and binds a separate worktree from local `main`.
- Owned files: redesign in `src/**`, applicable `public/**`, local checks and preview documentation. Production checkout remains for integration/this board; no code edits there.
- Branding stage: Codex + built-in GPT image generation, isolated child worktree; own only `public/assets/arbcut-upgrade-brand/**` and its generation manifest. Claude owns the consuming layout/styles. Keep the existing ArbCut text/wordmark; replace the leaf/tree mark and favicon. One owner per file; commit and send asset paths before integration.
- Reviewer: Codex, changed files and preview behavior only, findings first. Max two review rounds; lead reruns acceptance checks.
- Inputs: approved brief below, existing real client content/photos, website brain with current design override, completed 4 Nov SEO research, Betonogaminiai reference build.
- Output: one complete multi-page redesign at a running preview URL; no production deployment, push, merge, DNS/account/GBP/CRM writes or customer messages. No paid API/tool/purchase without approval.
- Acceptance: distinct intentional design, truthful Lithuanian content, useful service coverage/internal links, all real useful URLs mapped, isolated form tests, mobile/desktop interaction and accessibility/performance checks, noindex preview, no fabricated evidence, full raw/source protection.
- Task brief: `.agents/handoffs/2026-11-04-arbcut-upgrade-approved.md`.

- Stage log: 4 Nov 20:15 EET user rejected v3 visuals, kept copy, order, SEO and function. Full visual remake moves to a new thread. Brief: `.agents/handoffs/2026-11-04-2015-arbcut-v4-design-brief.md`.
- Stage log: Codex review r1 changes requested, fixed in `32986e5`; r2 approved. Acceptance rerun by lead. Drive assets saved. Handoff: `.agents/handoffs/2026-11-04-1900-arbcut-preview-ready.md`. Production launch not authorized.
- Stage log: 4 Nov 18:35 EET lead resumed on Claude2 after the `claudeAgent` 5h limit stopped it at 17:00. Brand commit `32fe006` integrated. Fixed: preview shipped the tracker instead of `site.js` (conditional `<script>` in BaseLayout), hidden success block, 320px overflow. Next: Codex review on `codex` (not `codex_codex2`, 92% session), then Drive assets and final report.
- Stage log: `arbcut-brand-mark` delegated 4 Nov to Codex `gpt-6.1-sol` (medium), isolated worktree, owns only `public/assets/arbcut-upgrade-brand/**`, soft budget 1.5M input tokens (estimate; no comparable history).

## Requests / interfaces

- Parent WebAgency Biz thread de5b63f8-4900-46fa-a7f9-69b1d0405fd2 is the origin of user approval. New thread owns completion; no automatic publication or new recurring tasks.
- Do not run `sync:auto` or `sync:atsiliepimai`: README says auto-sync can commit/push/deploy. Existing review sync and production configuration are outside scope.

4 Nov launch accepted: thread mcp:41604850-e9c0-49c4-9ef8-21c06bd2ac37 in ArbCut project mcp:10858f70-cbdc-4588-8d5b-7ca92ae4f70a, explicit Claude Opus5.5/ultrathink, autonomous full access, isolated branch design/arbcut-upgrade-20261104 from localmain e820558. Launch status preparing; source bootstrap/handoff committed, no code or production deployment. New thread owns completion and its branding/review children.

## 4 November — v4 reference study in progress
- Lead: Codex2, branch design/arbcut-v4-20261104. Owns board and handoffs.
- Reference-study child: read-only research; no website file ownership. Inputs: v4 brief, named websites, design brain, existing captures. Output: sourced findings and visual evidence for lead review.
- Acceptance: text before screenshots, distinguish observation from taste, cover all named references, preserve bb63bd8 content/function. Lead then asks design questions and presents exact proposal; explicit approval precedes implementation.

- Reference study initial pass INCOMPLETE: old contact sheet only; missing fresh/mobile captures and Glassperts/Betono visual inspection. User explicitly requires every page and actual screenshots. Continuing same child session for full visual coverage; no implementation authorized. Required output: URL-by-URL coverage manifest, fresh desktop/mobile screenshots and observations, explicit inaccessible-page gaps.

- Lead takeover checkpoint: fresh capture batch running, full study NOT accepted; no implementation. Handoff: .agents/handoffs/2026-11-04-2036-v4-visual-study-incomplete.md. Codex2 session 92%; exact captures and actual inspection separated.

## 4 November — captured-page visual analysis
- Capture batch finished: 183 records including superseded errors, 1666 screenshots. Glassperts unavailable; exact results in /tmp/arbcut-v4-study/capture-manifest.json.
- Lead Codex2 owns board/handoffs and eventual questions/proposal. Claude2 design analyst owns only /tmp/arbcut-v4-study/design-analysis.md and design-inspection.json; read-only website scope. Input: saved actual screenshots, existing lead ledger and design brief. Output: per-page visual observations and coverage ledger, grounded recommendations/questions. Acceptance: actually view each captured page at desktop/mobile, distinguish unavailable and uninspected; no implementation before user approval.
