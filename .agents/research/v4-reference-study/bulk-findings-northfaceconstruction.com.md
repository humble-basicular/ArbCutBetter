# Northface Construction (northfaceconstruction.com) — bulk visual findings

Analyst: Claude research sub-agent, 2026-11-05. Read-only study of saved captures under `~/.ai-powerhouse/research-captures/arbcut-v4/northfaceconstruction.com/`. Paths below are relative to that root unless stated. Status: **BOUNDED STOP at budget checkpoint** (soft budget 3.5M input exceeded at ~3.8M). Contact sheets 78/108 viewed; **no full-size segment or first-viewport file was opened in this pass**. Findings below are sheet-level (≈200 px-wide page previews) plus record.json numbers; treat fine detail as unverified.

## Capture facts (from ledger / record.json, not screenshots)
- Ledger `bulk-ledger.json` → `sites.northfaceconstruction.com.counts`: captured 409, file 20, failed 1 (`/blog/ridge-vent/` ERR_TOO_MANY_REDIRECTS at 1440), capped false. Discovery = sitemaps + BFS links; orphan pages not linked anywhere cannot be known. **Not whole-site-complete.**
- `bulk-group.py` → 409 pages, 43 templates (16 one-offs), 78 flagged (`_sheets/northfaceconstruction.com/groups.json`). 54 contact sheets per width.
- Redirects (record.json `finalUrl` ≠ `url`): 57 of 409 captured slugs land on another page (e.g. 10 old blog/metal URLs → `/roofing/`, 7 → `/siding/`, 3 → home). So ~352 distinct destinations; many "outlier" flags are redirect duplicates, not distinct designs.
- 8 slugs in t10 are HTTP 404 (`blog__chimney-flashing`, `…-repair`, `house-siding-options(-compared)`, `how-much-snow-…`, `roof-collapse-from-snow`, `tar-and-gravel-roof-cost/-overview`) — linked from live pages, i.e. real broken internal links.

## Coverage

| Item | Status |
|---|---|
| Templates | 43 (16 one-offs), from `_sheets/northfaceconstruction.com/groups.json` |
| Contact sheets viewed | 78/108 (`viewed:true` set in `_sheets/northfaceconstruction.com/index.json` only for sheets actually rendered to me) |
| Full-size segments / first viewports opened | **0** — not done |
| Interactions (`_interactions/`) | listed only (contact, faq, gallery, home, home-fix, round2-*, service); **no images opened** |
| record.json numbers | pulled for `home` 1440 + 390 only |
| Blank-band check | run via copy `/tmp/nf-scripts/blank.py` writing `/tmp/nf-scripts/blank-check.json` (shared `_blank-check.json` not touched); 31 page-widths flagged, see below |

### Actually-opened file manifest (this pass)
Contact sheets under `~/.ai-powerhouse/research-captures/arbcut-v4/_sheets/northfaceconstruction.com/`, both `1440/` and `390/` unless noted:
t15-home-0; t27…t42 one-off-0 (all 16); t22-_1-0; t23-_1-0; t25-_1-0; t12-_1-0; t14-_1-0; t16-_1-0; t21-_1-0; t13-siding_x-0; t24-window-installation_x-0; t17/t18/t19/t20/t26-blog_x-0; t10-blog_x-0; t00-blog_x-0…4; t01-blog_x-0; plus `390/t01-blog_x-1` and `1440/t01-blog_x-3` only.
Other files read: `bulk-analyst-brief.md`, handoff `2026-11-05-1205-bulk-capture-brief.md`, `../v4-learnings.md` §2–4, Northface sections of `../v4-hook-deep-study.md`, `bulk-ledger.json` (Northface entry), `home/{1440,390}/record.json`, all Northface 1440 `record.json` `finalUrl` fields (redirect scan).

### Exact remaining queue
1. Sheets not viewed (30): `1440/t01-blog_x-1`, `1440/t01-blog_x-2`, `390/t01-blog_x-2`, `390/t01-blog_x-3`; both widths of `t02-roofing_x-0..2`, `t03-siding_x-0..1`, `t04-gutters_x-0..1`, `t05-storm-damage-roof-repair_x-0`, `t06-window-installation_x-0`, `t07-blog_x-0`, `t08-commercial-roofing_x-0`, `t09-blog_x-0`, `t11-roofing_x-0`.
2. Full size, both widths, every segment + first-viewport: home, about, contact, schedule-appointment, financing, reviews, team, careers, projects, projects__the-browns-exterior-remodel, faq, services, blog, contest, bosso-permanent-lighting, ice-dam-removal, a 404 (`blog__chimney-flashing`), privacy-policy, youtube; 2 examples per template (e.g. roofing + gutters for pillar; siding__edina + window-installation__stillwater-mn for locality; one old + one emoji-heading blog).
3. Outliers: `blog__roof-types` (1440 blank bands at 21832/22648), `schedule-appointment` (blank 1040–2392 @1440, 3 bands @390 — likely booking iframe; check `record.json.iframes`), `blog__pros-and-cons-of-diy-siding` (17490/25821 px), `blog__emergency-roof-leak-repair`, `blog__siding-color-trends`, `blog__tpo-roof-installation` (grey CTA image at 1440).
4. The 30 pages flagged with a 336 px band at 1440 are all service-pillar pages or redirects to them (`roofing`, `siding`, `commercial-roofing`, `storm-damage-roof-repair`, `solar-shingles`…), always at the same offset → likely one lazy/iframe element (e.g. video) per pillar; verify in segments + `iframes` before calling it a defect.
5. Interaction images in `_interactions/*/{1440,390}/` (menu-open, dropdowns, form invalid states, hover, reduced-motion).
6. Typography/colour numbers for one locality, one pillar, one blog, contact and 404 record.json.

## Numbers (record.json, `home`)
- Fonts: Plus Jakarta Sans only (Semi/ExBold/Reg cuts) + system-ui fallback count 28. One family, weight-driven hierarchy.
- H1 = eyebrow "5-Star Minneapolis Roofing Contractor": 12 px / 800 / lh 16.8 / `rgb(237,179,43)` yellow, both widths.
- Hero H2 "Protecting Minneapolis Families with Trusted Roofing & Exteriors": 46 px/800/lh 57.5 white @1440 → 34 px/lh 42.5 @390.
- Section H2: 34 px/800/lh 40.8 navy `rgb(18,43,117)` @1440 → 28 px/lh 33.6 @390. Eyebrow H2s 12 px/800 `rgb(87,132,225)`.
- Colour counts (text/elements): white 70, mid-blue `#5784E1` 57, body `#222` 45, navy `#122B75` 39, `#181D27` 22, grey `#939393` 17, yellow `#EDB32B` 13. Yellow is rare = reserved for actions/eyebrows.
- Page height: 12035 px @1440, 18748 px @390 (×1.56).
- Fixed elements: HEADER, 2 DIVs, BUTTON, NAV at both widths; heights not recorded in `fixed` (null). Prior live check (`../v4-hook-deep-study.md`): mobile header ~86 px + bottom bar ~122 px ≈ 208 px — over the 200 px rule 17.
- Caveat: `headings` records the heading element's computed style; styled child spans (e.g. coloured words) are not separately captured, so a visually different word inside a heading would not show here.

## Templates (sheet-level observations)
- **Home (t15, 4 = home + 3 redirects to it)**: blue diagonal hero, headline left, family/house photo right, white form card crossing photo edge with rating dock under it → two image/text "education" splits → 6 photo service cards → pale-blue testimonial → worker photo + about → office map split → blue "We partner with you" process band with hexagon seal → dark "Check out projects" band → team/fleet photos + values → materials split → map + locality links → blue FAQ → 3 articles → family-photo CTA "Let's Make You a Customer for Life" crossing into footer. Mobile reorders photo above headline; form sits ~2 screens down.
- **Service pillar (t12/t14/t16/t21/t20/t33/t29 and redirects)**: same hero-with-form; split; testimonial; process band; projects band; split; map+localities; "Ask About Our 19-Point Inspection" navy banner with hexagon seal; FAQ; split; articles; CTA; footer. Only the photos and copy change.
- **Locality pages (t02–t06, t11, t13, t24; ~180 pages)**: hero "<City>'s Go-To/Locally-Trusted … Contractors" + form; 3 service cards; testimonial; 1–3 content splits that vary per city (count and photos differ, e.g. `siding__maple-grove` long article block vs `siding__zimmerman` short); process band; map; FAQ; articles; CTA. Mostly stock house photography; the project carousel is absent here.
- **Blog article (t00/t01/t17–t19/t26/t37–t40, ~200)**: blue header band with date/author, white article card overlapping it, inline photos, own branded infographics (yellow/blue, e.g. cedar shake vs shingle), staff YouTube thumbnails, share icons, CTA, footer. Newer posts use emoji as heading icons (`blog__wood-siding-types`, `blog__tile-roofing`, `blog__thermal-cracking-shingles`).
- **404 (t10, 8 linked URLs)**: "Oops! You May Be Lost!" + real roofer-at-work photo + "Our Comprehensive Services" pill links + CTA. Useful recovery page.
- **One-offs**: about (photo collage hero, fleet group photo, founders card), team (8 uniform headshots, navy polo, green bokeh), reviews (masonry of Google review cards, initials or photo avatars, yellow stars), services (6 photo cards + certification logo row + crew photos), contact (worker-on-roof hero + form + office cards + map + logo row), schedule-appointment (calendar widget), financing (stock couple photos), careers (collage + unstyled native job form), projects (9-photo grid) + project story (`projects__the-browns-exterior-remodel`: owners' photo, facts list, quote, full-bleed project photos), faq (long unstyled Q/A list), contest (duck colouring contest, long text), privacy/terms (plain text).

## Findings for ArbCut
### Copy
- One typeface, hierarchy by weight and size only (record.json: Plus Jakarta Sans, 46/34/12 px @1440). Cite `home/1440/record.json`.
- Yellow reserved for actions and eyebrows (13 of ~270 colour uses). Navy/blue for structure, white reading surface. Sheet: `_sheets/.../1440/t15-home-0.jpg`.
- Real crew/fleet/headshot photography as identity: `team` and `about` sheets (`1440/t36-one-off-0.jpg`, `1440/t27-one-off-0.jpg`); uniform headshot style reads premium.
- Project story page with owners on site, facts list (location, services, materials), quote and big real photos: `1440/t41-one-off-0.jpg`. Strong model for an ArbCut case-study page.
- 404 page that routes to every service: `390/t10-blog_x-0.jpg`.
- Reviews as Google-sourced cards with name and stars: `1440/t34-one-off-0.jpg` (verify full size whether the real Google logo is used before citing as official-mark proof).
- Rating dock under the hero form (proof beside action) — established earlier; repeats on every pillar/locality page per sheets.
- Brand-made infographics in house colours instead of stock: `1440/t18-blog_x-0.jpg` cells 2–3.

### Avoid
- Project carousel cards escaping the "Check out projects" band and overlapping the next section at 1440 on home and every pillar page (`1440/t15-home-0.jpg`, `1440/t33-one-off-0.jpg`, `1440/t16-_1-0.jpg`, left edge). Earlier live check reproduced it (`../v4-hook-deep-study.md`), so likely real.
- Same 13-section shell on ~180 locality pages; only hero photo and 1–3 splits change → near-duplicate pages, stock houses.
- Long text pages with no design: `faq` (`1440/t23-_1-0.jpg` cell 1), `contest`, unstyled native careers form with "Choose File" (`390/t30-one-off-0.jpg`).
- Emoji used as heading icons in blog posts — breaks learnings rule 6 (no glyph pictograms).
- 57 of 409 discovered URLs redirect, 8 linked URLs return 404 → stale internal links.
- Mobile CTA pill "(phone) | Schedule Appointment" appears over content in the first 390 frame of nearly every page (`390/t27-one-off-0.jpg` y≈213, `390/t30-one-off-0.jpg`). Probably the fixed bottom bar captured before hiding, i.e. a capture artefact — verify full size; the ~208 px fixed UI cost itself is real (prior study).
- Footer phone number differs per capture on 404 pages ((763) 265-7013, 265-7535, 250-5418, 888-8581, 292-4282… `390/t10-blog_x-0.jpg`) — call-tracking number pool. For ArbCut keep one number (rule 5: proof/contact consistency).
- Mobile "Get To Know Our Team" heading clipped by the diagonal edge (`390/t36-one-off-0.jpg` y≈340) — verify full size.

## Candidate key screenshots (sheet-level; full-size frames still to pick)
1. `_sheets/northfaceconstruction.com/1440/t36-one-off-0.jpg` — uniform real team headshots.
2. `_sheets/northfaceconstruction.com/1440/t41-one-off-0.jpg` — project story layout.
3. `_sheets/northfaceconstruction.com/390/t10-blog_x-0.jpg` — 404 recovery + rotating phone numbers.
4. `_sheets/northfaceconstruction.com/1440/t15-home-0.jpg` — full home sequence incl. carousel overflow.
5. `_sheets/northfaceconstruction.com/1440/t34-one-off-0.jpg` — review card wall.
6. `_sheets/northfaceconstruction.com/1440/t13-siding_x-0.jpg` — locality template sameness.

## Limitations
Sheet previews are ~200 px wide per page: text, logos and small defects are not readable, so no claim here about exact copy, official-mark files or alignment is verified. No full-size, no first-viewport, no interaction images were opened. Not whole-site-complete: 1 failed URL (`/blog/ridge-vent/`), orphan pages undiscoverable, 30 sheets unviewed.
