# Handoff: ArbCut v4, learnings recorded, proposal needs rework
From: claude · To: either · Date: 2026-11-05T09:06+02:00

## Objective
Remake the visual layer of the whole ArbCut site (Mantas Gerulis, arborist, Kaunas). Keep copy, section order, SEO and function from `bb63bd8`. "NO AI SLOP". Full background: `2026-11-04-2015-arbcut-v4-design-brief.md`.

## User decisions & constraints (verbatim where possible)
- The 5 Nov reaction to the v4 mockup (`0b6201d`): "looks shit", "i still feel ai slop".
- "dont even ever use svgs for pictograms … Thats the entire point of us having codex and claude". Pictograms come from Codex imagegen as raster, never from SVG, icon fonts or Unicode glyphs.
- "using the official looking star embedations, For example the actual google logo … paslaugos lt logo … LRT galima naudoti lrt logo … the more official it looks, the more trust".
- "nesąmonė rašyti LRT rašė apie Mantą. Nu čia slopas". Replace with the official LRT.lt and Valstietis.lt marks, linked to the articles.
- "i cant really judge this if the site is not done". The next approval artefact should be built pages, not a mockup.
- Answers:
  1. Mantas cut-out on the homepage: yes.
  2. He competed at the Baltic States Tree Climbing Championship 2023: yes. Placement unknown, so say only that he took part.
  3. Make three new logo variants (the current logo is "kinda bland").
- Still in force:
  - Clean photographic direction.
  - "cool basic animations".
  - Real photos only.
  - No AI or DI wording on the site.
  - No deploy, push, merge, DNS, GBP, CRM or client messages.
  - Never run `sync:auto` or `sync:atsiliepimai`.
  - The preview stays noindex.
  - No paid services without asking.

## State
- Done (verified how):
  - `.agents/research/v4-learnings.md`: every learning, rule and user verdict, with an honest coverage table and a self-review of why the mockup was slop.
  - Claims checked against the source: the glyph `✆` is at `mock.html:77,82,91,93`; "savas bokštelis" has no match in `bb63bd8`; the press text is at `Hero.astro:31` and `Footer.astro:27` at `bb63bd8`.
- Partial:
  - The proposal (`v4-proposal.md`) is superseded in three parts:
    - Trust stamps become official marks.
    - Glyph icons become Codex raster pictograms.
    - Invented stamp copy is removed.
  - Still valid from the proposal: the palette, the Mantas hero, one overlap per page, the motion rules and the mobile rules.
- Not done:
  - Reference study of inner pages. See the table in learnings §1: Hook homepages only, Betono 7 of 25, VensLand without its localities, Glassperts never loaded.
  - No website files have been edited.

## Files & artifacts touched
- `.agents/research/v4-learnings.md`: new.
- This handoff, and a line in `.agents/BOARD.md`.

## Checks run
- `git grep` on `bb63bd8` for the stamp copy. Result: "rašė" is only in Hero, Footer and Press; "savas bokšt" has no match.

## Pending approvals / questions for the user
- Approve building the reworked homepage on this branch as the approval artefact, then judge it on the noindex preview. That build would be implementation, which the brief allows only after approval.
- Official logo files: they come from each owner's brand or press page. Check the Google and LRT usage terms before use.

## External actions already taken
None.

## Next action + owner
1. Codex: imagegen three ArbCut wide logo lockups (spruce `#0F3B2C`, shirt orange `#F2801F`), plus one raster pictogram set (phone, SMS, pin, clock, upload, check) in one style.
2. Lead: collect the official Google, Paslaugos.lt, LRT.lt and Valstietis.lt marks.
3. Lead (Claude): after the user approves building, rebuild the homepage on `design/arbcut-v4-20261104` following learnings rules 1–28, and check it at 360, 390 and 1440.
4. User: ask Mantas for original full-size photos, landscape where possible.

## Omitted context
- Earlier handoffs: `2026-11-04-2218-v4-proposal-prep.md` (photo limits) and `2026-11-04-2015-arbcut-v4-design-brief.md`.
- Research files: `v4-hook-deep-study.md`, `v4-betono-detail.md`, `v4-vensland-detail.md`, `v4-preserved-content-contract.md`.
- Mockup and cut-out script: `v4-proposal/`.
