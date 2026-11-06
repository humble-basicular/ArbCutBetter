# Handoff: v5 user feedback fixes and review choices
From: codex · To: either · Date: 2026-11-06, Europe/Vilnius

## Objective
Address the reported hero-caption overlap and expanding orange gallery panel; show actual horizontal review designs for the user to choose. The broader until-complete objective remains PAUSED; no continuation update was made.

## User decisions & constraints
- “Del komandos tai tada geriau ir rasyk kas Arboristas aukstalipys su komanda.”
- Prefers simple horizontal reviews; rejected answering an abstract layout question: “go onto the sites that are succesefull and give me examples ill choose the best”.
- Find better stock pictograms; no paid assets purchased, no icon replacement selected yet.
- Prior feedback still open: dominant ring background, weak experience badge, short form wording/height, invented promise copy. Do not treat these as resolved by this bounded patch.

## State
- Done: implementation commit `dcaca1b` fixes hero caption text/position, adds a stable positioned and isolated containing block to each gallery card, and removes the unsupported story about how photographs were taken.
- Reproduced before fix: hero caption/badge bounding boxes overlap; after reveal finishes the orange pseudo-element expands to 1180×906.938 px around a 394.664×560.578 px card. A live `position: relative` probe shrank the panel to its own card, proving the cause.
- Verified after fix: preview build exited 0; 12 browser checks passed across 360/390/768/1024/1280/1440, normal and reduced motion, checking caption/badge separation, bounded photo accent, no horizontal overflow, exact approved caption and noindex.
- Captured live review examples: Puetz open three-column slider, Smock open three-column slider with more spacing, Northface single centered quote band. Stock Phosphor Duotone and Tabler Outline samples fetched from official GitHub sources, MIT licences checked. Sources included in the comparison UI.
- Partial: review redesign and icon replacement await user selection. No review component changed.

## Files & artifacts
- Committed code: `src/components/home/Hero.astro` (only three caption hunks staged), `src/components/home/Moments.astro` and board at `dcaca1b`.
- Preserved inherited uncommitted lead edits: `public/assets/v5-brand/raster/texture/treeline.png`, Header, AreaMap, other Hero hunks, Press, Seal, area-map.js and untracked `public/assets/v5-brand/raster/seal/seal-rings-512.png`. They were present before this work; the verification used this complete working tree.
- Live captures and source snapshots: `/tmp/arbcut-v5-feedback-20261106/`; final images `puetz-widget.png`, `smockhvac.com-reviews.png`, `northface-band.png`; fixed screenshots `fixed-{hero,photos}-{390,1440}.png`; icon samples under `icons/`.
- Throwaway diagnostics kept in clearly named debug files: `/tmp/arbcut-tools/pw/feedback-layout-check.mjs`, `feedback-references.mjs`, `feedback-detail.mjs`. They are not production code.

## Checks run
- `PUBLIC_PREVIEW=1 npm run build` → exit 0, 37 existing routes built; existing Vite bundle-size/empty-chunk warnings remain. Other pages were not redesigned.
- `node /tmp/arbcut-tools/pw/feedback-layout-check.mjs` → exit 0, all 12 pass. No real form submissions.
- `git diff --cached --check` → clean before implementation commit.
- Comparison HTML checked with `html_preview` at 728 px: content height 1494, no console messages; inspected actual returned image.

## Pending choice
User chooses A Puetz, B Smock or C Northface; stock pictogram samples P Phosphor or T Tabler shown separately. Current recommendation: A and P, subject to user taste. Actual specialist service-symbol coverage still needs checking before replacement; sample stock icons are not installed on site.

## External actions
Read-only live reference visits, captures and free icon downloads. No push, merge, deploy, publish, client contact, real submission, paid API or sync scripts. Local preview remains :4331.

## Browser fallback
T3 preview initially opened and reproduced bugs. Two `preview_snapshot` attempts returned “Preview automation snapshot timed out after 15000ms.” Status/reconnect attempted; switched to the existing project Playwright/Chrome workflow. Puetz delays carousel JS until pointer/wheel interaction; using real mouse/wheel events loaded it. GreenTek review widget remained blank and Genz later unavailable, so neither was used as a live comparison example.

## Next action + owner
User picks the review design; implementation owner then applies that style to homepage reviews, checks the existing review/form hooks and verifies phone/desktop behavior. Keep the full-site stage paused until homepage approval.
