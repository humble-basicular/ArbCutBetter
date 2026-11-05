# Per-site visual analyst brief (ArbCut v4 reference study, stage B)

You analyse ONE reference website from saved screenshots so the lead can write a cross-site "winning formula" for a tree-care company site (ArbCut, Lithuanian). The user demands impeccable design judgment and that nothing is missed. Read-only research.

## Read first (short)
- `.agents/research/v4-learnings.md` sections 2–4: what the user rejected ("AI slop", glyph pictograms, invented proof copy) and the rules so far. Judge everything against it.
- Brief: `.agents/handoffs/2026-11-05-1205-bulk-capture-brief.md` (Step 2).
- Prior notes for your site if they exist (`puetz-*.md`, `smock-findings.md`, `vensland-baseline.md`, `../v4-hook-deep-study.md`, `../v4-betono-detail.md`, `../v4-vensland-detail.md`): don't redo what's established, extend it and correct it where the screenshots disagree.

## Inputs
- Captures: `~/.ai-powerhouse/research-captures/arbcut-v4/<site>/<slug>/<1440|390>/` with `first-viewport.jpg` (fixed UI visible), `segment-*.jpg` (1440: 2400-px document clips; 390: 844-px viewport frames, fixed UI hidden), `record.json` (headings with font/size/weight/colour, links, forms, fonts, colours, backgrounds, skeleton, schema, fixed elements).
- Templates: `~/.ai-powerhouse/research-captures/arbcut-v4/_sheets/<site>/groups.json`.
- Contact sheets: `~/.ai-powerhouse/research-captures/arbcut-v4/_sheets/<site>/<width>/*.jpg`, index `_sheets/<site>/index.json` (cell number → slug/url).
- Interactions (may still be in progress by another agent): `<site>/_interactions/` + `bulk-interactions.json`. Use what exists; do not run your own interaction script.

## Steps
1. `python3 .agents/research/v4-reference-study/bulk-group.py <site>` then `python3 .agents/research/v4-reference-study/bulk-contact-sheets.py <site>` (safe to rerun).
2. View EVERY contact sheet for the site at both widths. After viewing one, set `"viewed": true` for that key in `_sheets/<site>/index.json`. Note per template: layout sequence, what varies, anomalies; check each cell for broken/blank/odd pages.
3. Full size (view the actual `segment-*.jpg` files, every segment of the page): every one-off page (home, about, contact, prices/financing, gallery/projects, reviews, 404, thank-you, careers, etc.), at least 2 differing examples per template, every page flagged in groups.json or that looked odd on a sheet. Both widths. Also `first-viewport.jpg` at both widths for those pages. 360 width is not captured; note where 390 already looks tight.
4. Pull numbers from record.json, not from guessing: H1/H2 font, size, weight, line-height, colours; page heights; fixed-element heights.
5. Describe, at readable scale and with evidence: hero composition, typography scale and pairing, colour system and where each colour is used, spacing rhythm, section sequence per template, imagery (real vs stock, crop, overlays), brand devices (count them), trust/proof (which official marks, where, beside which action), CTA system (labels, repetition, placement), forms, service/locality/blog templates, internal linking and footer, mobile adaptations (what collapses well/badly), fixed UI cost on mobile, what looks premium vs slop, and quality defects.

## Efficiency (budget is finite; the VensLand pass ran out at 2M)
- Read several images per turn (parallel Read calls); avoid one-image turns.
- 390 frames: build native-resolution strips of 3 consecutive frames side by side (1170 px wide, PIL, write to `/tmp/<site>-strips/`) and view those; that counts as full size. 1440 segments: view as-is.
- Write findings to the output file incrementally (after each template), so a budget stop still leaves a usable file.
- Prioritise: all sheets first, then one-off pages, then template examples, then flagged pages.

## Output (the only file you write)
`.agents/research/v4-reference-study/bulk-findings-<site>.md`:
- Coverage table: templates (id, name, count), sheets viewed (n/n per width), pages viewed full size (slug + widths), flagged pages and what they were, pages that could not be judged and why.
- Per template: structure and observations.
- Findings: "Copy" and "Avoid" lists; each item cites `<site>/<slug>/<width>/<file>` (and the y offset) so the lead can open it. Separate observation from taste. No invented observations: if you didn't see it, don't claim it.
- Up to 6 candidate key screenshots for the final report (path + why).

## Rules
No edits outside your output file and your site's `_sheets/<site>/index.json` "viewed" flags. Never touch bulk-capture.mjs, bulk-ledger.json, src/, public/. No browsing that changes site state; no form submits. Don't commit (the lead commits). Final message: 10–15 line summary, coverage numbers, and anything you could not do.
