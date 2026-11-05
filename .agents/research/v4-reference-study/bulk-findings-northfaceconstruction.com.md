# Northface Construction (northfaceconstruction.com) — bulk visual findings

Analyst: Claude research sub-agent, 2026-11-05, two passes (pass 1 bounded at ~3.8M input, an estimate; pass 2 is this continuation, stopped by the 1.4M soft budget after finishing its sheet scope). Read-only study of saved captures under `~/.ai-powerhouse/research-captures/arbcut-v4/northfaceconstruction.com/`. Paths are relative to that root unless stated. Status: **all 108 contact sheets viewed; 0 full-size segments, 0 first viewports, 0 interaction images opened. Whole-site study is incomplete.** Findings are sheet-level (about 200 px-wide page previews) plus record.json numbers; treat fine detail as unverified.

## Capture facts (ledger / record.json, not screenshots)
- Ledger `bulk-ledger.json` → `sites.northfaceconstruction.com.counts`: captured 409, file 20, failed 1 (`/blog/ridge-vent/` ERR_TOO_MANY_REDIRECTS at 1440), capped false. Discovery = sitemaps + BFS links; orphan pages linked nowhere cannot be known. **Not whole-site-complete.**
- `bulk-group.py` → 409 pages, 43 templates (16 one-offs), 78 flagged (`_sheets/northfaceconstruction.com/groups.json`). 54 contact sheets per width.
- Redirects, measured in pass 2 over record.json at both widths: **56** of 409 captured slugs have a `finalUrl` different from `url`. Pass 1's "57" did not reproduce. All 56 destinations are also captured non-redirect URLs. Distinct normalised `finalUrl` strings among captured slugs: **353**. That is a URL count, not a count of unique designs or content: it includes 8 separate 404 URLs. Pass 1's "57 redirects, so ~352 destinations" was subtraction and did not establish a count.
- Top redirect destinations: `/roofing` 10, `/siding` 7, then `/commercial-roofing`, home, `/gutters`, `/storm-damage-roof-repair` 3 each.
- A title + height check over 1440 records found no pair with the same title and height at different final URLs, so the identical-looking cells checked are redirects (for example `window-installation__east-bethel` → `-mn`, `blog__soffit-repair-cost`/`-guide` → `/blog/cost-replace-gutters-soffit-facia`, `siding__how-to-cut-vinyl-siding` → `/siding/minneapolis`). This does not rule out near-duplicate text.
- 8 slugs in t10 return HTTP 404 (`blog__chimney-flashing`, `…-repair`, `house-siding-options(-compared)`, `how-much-snow-…`, `roof-collapse-from-snow`, `tar-and-gravel-roof-cost/-overview`). Each has at least 1 inbound link in captured link records (1–3 each). The only source for `blog__chimney-flashing-repair` is the slug `blog__chimney-flashing`, itself a 404, so "linked from live pages" is not true for all 8. Sources of the others were not all inspected. 52 of 56 redirect source URLs also have inbound captured links.

## Coverage

| Item | Status |
|---|---|
| Templates | 43 (16 one-offs), from `_sheets/northfaceconstruction.com/groups.json` |
| Contact sheets viewed | **108/108** (54/54 per width): 78 pass 1 + exactly 30 pass 2, none repeated, none regenerated. `index.json` viewed=108, unviewed=0, missing files=0 |
| Full-size segments / first viewports opened | **0** — queued |
| Interactions (`_interactions/`) | 11 folders listed, 100 images queued, **0 opened** |
| record.json numbers | `home` both widths; pass 2 scripted reads of headings, links, `fixed`, `iframes`, `status`, `finalUrl` across all records |
| Blank-band check | pass 1 only, copy at `/tmp/nf-scripts/blank-check.json` (31 page-widths flagged); copied into the queue manifest because `/tmp` may vanish |

### Opened-file manifests
- Pass 2 (30 sheets, one key per line): `_sheets/northfaceconstruction.com/opened-manifest-pass2.txt`. Each was opened before its flag was set: `1440/t01-blog_x-1`, `1440/t01-blog_x-2`, `390/t01-blog_x-2`, `390/t01-blog_x-3`; both widths of `t02-roofing_x-0..2`, `t03-siding_x-0..1`, `t04-gutters_x-0..1`, `t05-storm-damage-roof-repair_x-0`, `t06-window-installation_x-0`, `t07-blog_x-0`, `t08-commercial-roofing_x-0`, `t09-blog_x-0`, `t11-roofing_x-0`.
- Pass 1 (78 sheets, both widths unless noted): t15-home-0; t27…t42 one-off-0 (all 16); t22-_1-0; t23-_1-0; t25-_1-0; t12-_1-0; t14-_1-0; t16-_1-0; t21-_1-0; t13-siding_x-0; t24-window-installation_x-0; t17/t18/t19/t20/t26-blog_x-0; t10-blog_x-0; t00-blog_x-0…4; t01-blog_x-0; plus `390/t01-blog_x-1` and `1440/t01-blog_x-3` only.
- Other files read in pass 1: `bulk-analyst-brief.md`, handoff `2026-11-05-1205-bulk-capture-brief.md`, `../v4-learnings.md` §2–4, Northface sections of `../v4-hook-deep-study.md`, `bulk-ledger.json`, `home/{1440,390}/record.json`, all 1440 `finalUrl` fields. Pass 2 read the brief, Step 2, learnings §2–4 and this report.

### Exact remaining queue
Exact per-file list: `_sheets/northfaceconstruction.com/later-fullsize-interaction-queue.json` (97 pages, 1,841 first-viewport/segment files at both widths, 100 interaction images, blank-check copy). None of it has been opened.
1. **Key pages and one-offs:** home, about, contact, schedule-appointment, financing, reviews, team, careers, projects, projects__the-browns-exterior-remodel, faq, services, blog, contest, bosso-permanent-lighting, ice-dam-removal, privacy-policy, terms, youtube, the pillars and all other one-offs, plus 404 samples.
2. **Two examples per template:** shortest and tallest non-redirect member, chosen in the manifest.
3. **Flagged pages:** every flagged page that is not a redirect. In the 10 templates covered by pass 2, 15 of 44 flagged slugs are redirects and resolve to their destination, so they need no separate view.
4. **Outliers:** `blog__roof-types` (1440 blank bands at 21832/22648), `schedule-appointment` (blank 1040–2392 @1440; `record.json` lists a 968×2700 `link.remodelerengine.com` booking iframe at y=349, so a capture artefact is likely but unconfirmed), `blog__pros-and-cons-of-diy-siding`, `blog__emergency-roof-leak-repair`, `blog__siding-color-trends`, `blog__tpo-roof-installation`.
5. **New from pass 2:** `gutters__lino-lakes` (no CTA card on the sheet, see t04), `blog__gutter-colors` (chart may exceed the article column, `1440/t01-blog_x-1` cell 4), pillar project/map overlap at 390 (`390/t07-blog_x-0`, `390/t09-blog_x-0`).
6. **336 px band at 1440:** 30 pages flagged, service pillars or redirects to them. `roofing/1440/record.json` lists one iframe at y=4962 (535×598, empty `src`); the link to the band is unverified. Check segments before calling it a defect.
7. **Interactions:** menu-open, dropdowns, form invalid states, hover, reduced-motion in `_interactions/`.
8. **Numbers still to pull:** contact and 404 typography.

## Numbers (record.json)
- `home` fonts: Plus Jakarta Sans only (Semi/ExBold/Reg cuts) + system-ui fallback count 28. One family, weight-driven hierarchy.
- `home` H1 = eyebrow "5-Star Minneapolis Roofing Contractor": 12 px / 800 / lh 16.8 / `rgb(237,179,43)` yellow, both widths.
- All 155 locality final pages use the same pattern: a 12 px yellow H1 carrying service + city (`siding__blaine`: "5-Star Siding Installation In Blaine, MN"), then a 46 px white H2 brand line. `/roofing` does the same. Blog H1s are the large 46 px white title instead (`blog__roof-flashing`).
- `home` hero H2: 46 px/800/lh 57.5 white @1440 → 34 px/lh 42.5 @390.
- `home` section H2: 34 px/800/lh 40.8 navy `rgb(18,43,117)` @1440 → 28 px/lh 33.6 @390. Eyebrow H2s 12 px/800 `rgb(87,132,225)`.
- `home` DOM colour counts: white 70, mid-blue `#5784E1` 57, body `#222` 45, navy `#122B75` 39, `#181D27` 22, grey `#939393` 17, yellow `#EDB32B` 13. **These count DOM entries, not pixel coverage**, so they say nothing about how much of the page is yellow.
- Yellow is used for actions and eyebrows: the 12 px H1 eyebrow is yellow, CTA pills are yellow, and sheets also show yellow FAQ toggles. Section eyebrows are mid-blue. "Reserved" overstated it.
- `home` page height: 12035 px @1440, 18748 px @390 (×1.56).
- Fixed elements: HEADER, 2 DIVs, BUTTON, NAV at both widths; heights not recorded in `fixed`. Prior live check (`../v4-hook-deep-study.md`): mobile header ~86 px + bottom bar ~122 px ≈ 208 px, over the 200 px rule 17.
- Caveat: `headings` records the heading element's computed style; coloured child spans are not separately captured.

## Templates (sheet-level observations)
Template ids are skeleton-similarity buckets, not page types: t02 holds siding and storm pages, t11 is mixed, and t07/t09 are mostly redirects.

- **Home (t15, 4 = home + 3 redirects to it)**: blue diagonal hero, headline left, family/house photo right, white form card crossing the photo edge with rating dock under it → two image/text "education" splits → 6 photo service cards → pale-blue testimonial → worker photo + about → office map split → blue "We partner with you" process band with hexagon seal → dark "Check out projects" band → team/fleet photos + values → materials split → map + locality links → blue FAQ → 3 articles → family-photo CTA "Let's Make You a Customer for Life" crossing into the footer. Mobile puts the photo above the headline; the form sits about 2 screens down.
- **Service pillar (t12/t14/t16/t21/t20/t33/t29, plus t07 and t09)**: t07 is 11 slugs resolving to `/roofing` (10901 px) + `solar-shingles`; t09 is 8 slugs resolving to `/siding` (7228 px). `/roofing`: hero + form → 3 splits → testimonial → about split → process band → projects band → map + locality links → "Ask About Our 19-Point Inspection" banner with hexagon seal → "Materials and Brands We Trust" → FAQ → split → articles → CTA → footer. `/siding` drops the extra splits and the materials block. At 390 `/roofing` is 18152 px.
- **Locality pages (155 final pages in t02–t06, t08, t11, t13, t24: roofing 39, siding 39, window-installation 24, storm 23, gutters 21, commercial 9)**: pass 1's "~180" counted redirects. Fixed shell: hero + form, "Your Go-To Home Exterior Service Provider" 3 cards, testimonial, process band, map, FAQ, "Industry Guidance at Your Fingertips", CTA, footer. Varying: hero photo, H2 wording, and 2–5 content splits in different orders. The project carousel is absent.
  - t02 roofing: two length families, about 6,900–7,100 and 8,400–8,800 px; the taller ones add a list block ("Why Trust Professional Roofing?", "Signs It's Time to Replace Your Roof", "Roof Maintenance Tips") and locality link columns (`1440/t02-roofing_x-0`, `_x-1`).
  - t03 siding: repeated "Why We Choose LP SmartSide" and "Northface Was Founded on the Idea of Putting Clients First" blocks; some map headings localise to Wisconsin (`siding__hudson`, `siding__sauk-rapids`).
  - t04 gutters: more subject-specific detail photos than the other services. `gutters__lino-lakes` shows no CTA card at 1440, and its record has no "Let's Make You a Customer for Life" heading at either width (present on `gutters__edina`); height 6567 vs about 7200. Looks like a real omission; verify full size.
  - t05 storm: storm-specific heroes (tarp, fallen tree); heading voice shifts to "Storm Hero"/"Repair Heroes".
  - t06 windows: interior and family photos; a "Window Installation Services" sub-block on some cities; `window-installation__wayzata` (8944 px) adds a list and extra splits.
  - t08 commercial: apartment-block heroes, long "Signs of Commercial Roof Damage" list, but the founder block uses home/family photos on most cells. Hero claims "#1 Multi-Family Roofing Company" for several cities (read from sheet).
  - t11: mixed bucket, 3 of 8 are redirects (`locations__blaine-roofing-services-company` → `/roofing/blaine`, `storm-damage__forest-lake` → `/storm-damage-roof-repair/forest-lake`, `videos__matching-materials-for-siding-video` → `/roofing/hugo`).
- **Blog article (t00/t01/t17–t19/t26/t37–t40; 163 final blog pages with status 200)**: blue header band with date/author, white article card overlapping it, inline photos, branded charts and infographics (yellow/blue), staff video thumbnails, share icons, CTA, footer. 47 of 163 have emoji in heading text (regex over `headings`); no non-blog page does. Pass 1's "newer posts" was not dated and is withdrawn. Long cases: `blog__siding-color-trends` 20499 px, `blog__roof-vent-types` 14497 px. `blog__roof-scupper` uses a comparison table.
- **404 (t10, 8 URLs)**: "Oops! You May Be Lost!" + roofer-at-work photo + "Our Comprehensive Services" pill links + CTA. Useful recovery page.
- **One-offs**: about (photo collage hero, fleet group photo, founders card), team (8 uniform headshots, navy polo, green bokeh), reviews (masonry of Google review cards, initials or photo avatars, yellow stars), services (6 photo cards + certification logo row + crew photos), contact (worker-on-roof hero + form + office cards + map + logo row), schedule-appointment (calendar widget), financing (couple photos), careers (collage + unstyled native job form), projects (9-photo grid) + project story (`projects__the-browns-exterior-remodel`: owners' photo, facts list, quote, full-bleed project photos), faq (long unstyled Q/A list), contest (duck colouring contest, long text), privacy/terms (plain text).
- **Sheet seams, not defects (likely):** thin horizontal lines cross many cells. On `roofing__big-lake-mn` the line falls at about 4,800 px, matching a 2,400-px segment join. Treat as stitching until a segment shows otherwise.
- No cell on the 30 pass-2 sheets was wholly blank at sheet scale.

## Findings for ArbCut
Photo provenance: whether a photo is real company work or stock **cannot be established from sheets** and no provenance data exists. "Real" below is either the prior study's judgement, attributed as such, or a description of what the photo shows.

### Copy
- One typeface, hierarchy by weight and size only (Plus Jakarta Sans, 46/34/12 px @1440). `home/1440/record.json`.
- Small descriptive H1 with exact service + city, larger brand H2, consistently on all 155 locality pages. Matches rule 22. `siding__blaine/1440/record.json`.
- Yellow used sparingly on actions and eyebrows against navy/blue structure and a white reading surface (visual judgement, not a measured share). `_sheets/.../1440/t15-home-0.jpg`.
- Crew, fleet and headshot photography as identity: the prior study (`../v4-learnings.md` §3) rated real worker, team and fleet photography the strongest identity on the page. Sheets show a uniform headshot style and a branded-fleet group photo (`1440/t36-one-off-0.jpg`, `1440/t27-one-off-0.jpg`); authenticity not verified here.
- Project story page with owners on site, facts list, quote and big project photos: `1440/t41-one-off-0.jpg`. Strong model for an ArbCut case-study page.
- 404 page that routes to the services: `390/t10-blog_x-0.jpg`.
- Reviews as Google-sourced cards with name and stars: `1440/t34-one-off-0.jpg` (verify full size whether the real Google logo is used before citing as official-mark proof).
- Rating dock under the hero form, proof beside the action: established by the prior study; sheets show it on pillar and locality pages.
- Northface-branded infographics rather than stock: `1440/t18-blog_x-0.jpg` cells 2–3; `1440/t01-blog_x-2.jpg` cell 12.
- Locality link columns under the map as useful navigation: `1440/t02-roofing_x-0.jpg` cell 2.

### Avoid
- **Service sections not adapted to the page.** All 84 non-roofing locality pages (siding, gutters, windows) carry the "Residential Roofing", "Multifamily & Commercial Roofing" and "Storm Damage" cards, and all 155 locality pages use the FAQ heading "All Your Roofing Answers." (`headings` in record.json; visible on `1440/t03-siding_x-0.jpg`). ArbCut service pages must change these blocks per service.
- Project carousel cards escaping the "Check out projects" band and overlapping the next section at 1440 on home and the pillar sheets viewed (`1440/t15-home-0.jpg`, `1440/t33-one-off-0.jpg`, `1440/t16-_1-0.jpg`, `1440/t07-blog_x-0.jpg`, `1440/t09-blog_x-0.jpg`, left edge). Earlier live check reproduced it (`../v4-hook-deep-study.md`), so likely real. 390 sheets show a similar project/map stack (`390/t09-blog_x-0.jpg`); unverified.
- One shell on 155 locality pages with the same 3 cards and articles; only hero, H2 and splits change → near-duplicate pages. The same photos recur across cities (fleet group photo, yellow-chair photo).
- Imagery unrelated to the subject in filler slots: family and living-room photos on commercial and window pages (`1440/t08-commercial-roofing_x-0.jpg`, `1440/t06-window-installation_x-0.jpg`). Whether stock or not is unknown; the mismatch is the point.
- Repeated superlatives ("#1", "Top-Tier", "5-Star") across cities with no proof beside them (rules 1, 3).
- Long text pages with no design: `faq` (`1440/t23-_1-0.jpg` cell 1), `contest`, unstyled native careers form with "Choose File" (`390/t30-one-off-0.jpg`).
- Emoji used as heading icons in 47 blog posts: breaks learnings rule 6.
- 56 discovered URLs redirect (52 have captured inbound links) and 8 return 404 → stale internal links.
- Mobile CTA pill "(phone) | Schedule Appointment" over content in the first 390 frame of nearly every page, also on the pass-2 390 sheets (`390/t27-one-off-0.jpg` y≈213, `390/t02-roofing_x-0.jpg`). The element matches `#mobile-handler` in `fixed`, so it is probably the fixed bar captured before hiding, i.e. a capture artefact. Verify full size. The ~208 px fixed UI cost is from the prior study.
- Phone number variation, **observed**: 22 distinct `tel:` numbers across records. `7634332269` appears on 266 pages at 1440 and 390 at 390; 143 slugs show different numbers at the two widths seconds apart (`roofing__blaine`: 7632924282 @1440, 7634332269 @390). It is not limited to 404 pages. **Inference, unproven:** call tracking or number rotation. For ArbCut keep one number (rule 5).
- Mobile "Get To Know Our Team" heading clipped by the diagonal edge (`390/t36-one-off-0.jpg` y≈340): verify full size.
- Empty heading elements: 102 of 155 locality pages have at least one empty H2/H3 in `headings` at 1440. May be hidden or decorative markup; not visually checked.

## Candidate key screenshots (sheet-level; full-size frames still to pick)
1. `_sheets/northfaceconstruction.com/1440/t36-one-off-0.jpg` — uniform team headshots.
2. `_sheets/northfaceconstruction.com/1440/t41-one-off-0.jpg` — project story layout.
3. `_sheets/northfaceconstruction.com/390/t10-blog_x-0.jpg` — 404 recovery + varying phone numbers.
4. `_sheets/northfaceconstruction.com/1440/t15-home-0.jpg` — full home sequence incl. carousel overflow.
5. `_sheets/northfaceconstruction.com/1440/t34-one-off-0.jpg` — review card wall.
6. `_sheets/northfaceconstruction.com/1440/t03-siding_x-0.jpg` — locality sameness and roofing leftovers on siding pages.

## Limitations
Sheet previews are about 200 px wide per page: small text, logos and small defects are not readable, so no claim here about exact copy, official-mark files or alignment is verified. Headings quoted from sheets are large text only; those from record.json are marked. Full-size, first-viewport and interaction images remain unopened. Not whole-site-complete: 1 failed URL (`/blog/ridge-vent/`), orphan pages undiscoverable. The 1.4M pass-2 budget was an estimate based on pass 1's 78 sheets costing ~3.8M input, not measured for this pass; the stop signal reported 1,511,353.

## Pass 3 — native full-size study (in progress, written incrementally)
Method: 1440 files opened directly; 390 files opened as native 3-frame side-by-side strips (`/tmp/northface-strips/<slug>__390__NN.jpg`, built by `/tmp/nf-scripts/strips.py`; order = first-viewport, then segments ascending). Every display and its exact source files: `_sheets/northfaceconstruction.com/native-display-manifest.json`. All paths below relative to `northfaceconstruction.com/`.

**Capture note, both widths, every page so far:** the 390 `segment-000000.jpg` still shows the fixed bottom bar (phone + "Schedule Appointment") over content, same as `first-viewport.jpg`; later 390 segments do not. The brief's "fixed UI hidden" is not true for segment 0 here. Saved sticky record (`bulk-interactions.json`, home/services/contact/projects/faq @390): `#masthead` 0–86 px + `#mobile-handler` top 722, height 122 → **208 px of 844 fixed (24.6 %)**, measured, both scroll fractions 0.3 and 0.7. @1440 header 110 px.

### about (1440: fv + 2 segs; 390: 8/8 files)
- Hero: "Made In Minnesota" 5-photo collage (team meal, family walk, crew at polar plunge, drone roof shot, roofer thumbs-up) on pale-blue diagonal; video pill with Josh's face "LEARN ABOUT NORTHFACE" (`about/1440/first-viewport.jpg`). Real-looking crew photos, casual, not staged.
- Branded fleet group photo (~40 staff in grey polos with branded trucks) heading the story (`about/1440/segment-000000.jpg` y≈680–1030). Story text uses concrete dated facts: founded January 10th 2010, licence 2013, first employee 2017, 100 projects next year, 150 by 2019. **Copy:** dated milestones as proof instead of adjectives.
- Founders card: Josh & Katie Swisher with baby, white card crossing a navy diagonal (`segment-000000.jpg` y≈1560–2000).
- Then articles row (3 cards, dates 2025) → stock-looking couple-on-sofa CTA "Let's Make You a Customer for Life" (`about/1440/segment-002400.jpg` y≈905–1375) → footer.
- 390: collage keeps 5 photos but the 3rd is cut by the right viewport edge (`about/390/first-viewport.jpg`, `segment-000000.jpg`); founders text centred in card. **Mobile footer** has logo, phone, email, 2 office cards, socials only; About/Resources/Services columns are gone (`about/390/segment-004220.jpg`, `-005064.jpg`). Confirms learnings §3 at native scale.
- Footer @1440 (`about/1440/segment-002400.jpg` y≈1400–2000): 5 columns, 2 office cards with addresses, one phone (763) 433-2269 on this capture.

### reviews (1440: fv + 2 segs; 390: 8/8)
- Blue gradient header band "Hear From Our Happy Customers", then a 3-column masonry of 9 cards, each "Name | Google Review", 5 yellow stars, initials disc or photo avatar (`reviews/1440/segment-000000.jpg`).
- **No Google logo, no aggregate numerical rating, no total review count, no link to the profile** anywhere on the page (both widths). "Google Review" is text only. Under rule 1 this is exactly the home-made form to avoid.
- **Defect:** the first card "Michael W. | Google Review" carries FAQ copy, not a review: "Of course! Even if your insurance claim is approved, you will have an out-of-pocket deductible…" (`reviews/1440/first-viewport.jpg` y≈660–745; same at 390 `reviews/390/segment-000000.jpg`). Fabricated-looking proof; a warning for ArbCut rule 3.
- 390: single column, 9 cards ≈ 5 screens; reviews stay visible (rule 24 ok).

### team (1440: fv + 3 segs; 390: 10/10)
- Blue header band "Meet the Northface Team" → the same fleet group photo as about → "Big or Small, We Build Them All" paragraph → "Get To Know Our Team" 3-column grid of **8** cards over a navy diagonal (`team/1440/segment-000000.jpg` y≈1080–2000, `segment-002400.jpg` y≈0–380).
- 7 of 8 headshots share one shoot: outdoor green bokeh, black polo with GAF "Master Elite" patch + Northface logo, several in branded caps. **Copy:** a uniform shoot is what makes staff photos read as one brand; the GAF patch is a real third-party mark worn, not a badge drawn.
- **Avoid:** 8th card (Joey Langemeier) is a black-and-white formal/wedding photo (`team/1440/segment-002400.jpg` y≈0–300), breaking the set. "+" expanders on 5 of 8 cards only (Dylan, Jeff, Brian have none): inconsistent affordance. The expand state is not captured.
- 390: "Get To Know Our **Team**" — the second line "Team" is overlapped/clipped by the navy diagonal (`team/390/segment-000844.jpg` y≈430–500, in strip `team__390__00.jpg` pane 3). **Confirmed real at native scale** (rule 18 analogue: decoration must not cover a heading).

### Saved interaction records (metrics read; 0 of 100 interaction images opened)
From `bulk-interactions.json` (5 pages × 2 widths) and `bulk-interactions-fix.json`:
- **Successful records (status done):** forms, sliders (home/services: carousel text changed t0→t5), sticky, hover, motion; fix-pass desktop dropdowns (About/Services/Resources, `home-fix/1440/dropdown-1..3.jpg`) and fix-pass mobile menu (`home-fix/390/mobile-menu-1-open.jpg`). Visual success of these states is **not verified**: images unopened.
- **Errors / attempts:** first-pass desktop-dropdowns @1440 and mobile-menu @390 on all 5 pages, plus CTA on home/contact, ended "browser.newContext: Target page… closed". `round2-*` folders are empty. FAQ and gallery checks "not-present" everywhere (no accordion/lightbox control matched), so FAQ toggles seen on sheets are untested.
- Forms (home, contact): 8 fields — Name*, Phone*, Email*, Zip Code*, service select, "How you heard" select, consent checkbox, submit (+ Facebook/Comments text). **No field has `required`**; empty and invalid states both returned `valid: true, messages: []`, i.e. no native validation; any JS validation not captured. Inconclusive for the visible state until `05/06-form-*` images are viewed.
- Hover: yellow `#EDB32B` button → mid-blue `#5784E1` with white text; cards and nav show no hover change.
- Motion: no running animations normally; reduced-motion shows short CSS transitions (0.01 s). No scroll-reveal opacity < 1 recorded.
- Header phone differs per load in saved text: (763) 284-8603, 265-7544, 292-2340, while page captures show 433-2269 — consistent with the number-rotation observation above (still inference).
- Not available: 360 width, keyboard focus order, live validation messages, motion over time (only two frames).

## Coverage (after pass 3, budget stop)
| Item | Status |
|---|---|
| Contact sheets | 108/108 (passes 1–2), not reopened |
| Pages closed at native size, every first viewport + all segments, both widths | **3: about, reviews, team** (36 source files via 20 displays) |
| Home | Not reopened in pass 3. Prior study viewed a **different, earlier live capture** (`/tmp/arbcut-v4-deep-hook/panels/northface__home__1440__00–07.jpg`, fresh mobile m00–m28, `../v4-hook-deep-study.md` §"Northface fresh mobile + desktop recovery"); bulk files `home/*` remain unopened |
| Interaction images | 0/100 opened; records read (above) |
| Remaining exact queue | `_sheets/northfaceconstruction.com/native-progress.json`: **94 pages, 1,805 files**, with original flags/reasons; plus 100 interaction images |
| Capture artefacts | 390 segment-000000 includes fixed bottom bar (seen on all 3 pages); blank bands, 336-px bands, schedule-appointment iframe still unchecked |
| Failed / not captured | `/blog/ridge-vent/` (1440 redirect loop); 360 width; orphan pages |

Next pages in priority: contact, schedule-appointment (iframe), services, projects, projects__the-browns-exterior-remodel, financing, careers, faq, one 404, then two-per-type examples (`roofing`, `siding__minnetonka`, `gutters__lino-lakes`, `blog__window-insulation`, `blog__siding-color-trends`) and the interaction images `home-fix/*`, `contact-_contact_/*/0[3-6]-form-*`.

### Lead verification of pass3
Manifest20displays/36sourcesverifiedallpresent;leadopenedreviews/1440/first-viewport.jpg directly. CardsDOshowfivegoldstars,soabovewordingclarifiedtoabsentaggregateNUMERICALrating,totalcount/profilelink. FirstMichaelW.carddoescontaininsurance-deductible/financingFAQ-likecopy;thisconfirmscapturedcontentmismatch,notitslivecauseoractualreviewauthenticity. Threepagepairs remainboundedpartial;94nativepages/100savedinteractionimagespendingpermanifest.
