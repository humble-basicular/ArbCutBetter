# Stage-B findings: vensland.lt

Date: 2026-11-05. Initial analyst: Claude Opus 5.5; incremental gap pass: Codex (research sub-agent). Offline capture review only.
**Status: bounded incremental gap pass by Codex, 2026-11-05. Prior sheet/full-size coverage is inherited, not repeated. Capture timestamps are mixed: 10:53–10:57Z plus desktop replacements at 11:11–11:20Z and Vilnius mobile at 11:20Z. Exact additions are in section 1; residual gaps are in section 6. A subsequent bounded 33-image mobile provenance pass resolves the two previously partial mobile pages; its evidence is separate below.**

Standing: this is the agency's own build, so it is the build to beat. Per `vensland-baseline.md`, the user does not treat it as a winning example. Nothing here is evidence for the winning formula.

Paths are relative to `~/.ai-powerhouse/research-captures/arbcut-v4/`. Y values are file pixels read by eye, so they are approximate. `record` means the number comes from `record.json`.

Inherited findings below retain the previous analyst’s observations. Where a desktop capture was overwritten, inherited y offsets are not freshly verified; use the incremental evidence log for capture-specific claims.

Change tags against the first pass (commit ff43fb1): **[CHANGED]** the site or my reading differs now, **[HOLDS]** rechecked on current captures, **[NEW]** first seen in this pass, **[LEGACY ONLY]** not recaptured, so it may be out of date.

## 0. Evidence traps

**Trap 1 is resolved: the site did change on 5 Nov. [CHANGED]**
The 07:30Z captures were an older build. Current state on all templates:

| Element | Old build (07:30Z) | Current build |
|---|---|---|
| Nav | 5 links | 6 links with `Kontaktai`; service pages have 4; mobile menu has 8 |
| Utility strip | `Vilniaus r. · +30 km aplink` | `Vilnius ir Vilniaus r.` |
| Form | One step, upload visible | Two steps: `1 iš 2 · Kontaktai`, name and phone side by side, `TOLIAU` |
| Service page | Form in hero, 3,544–3,980 px at 1440 | Rebuilt: no hero form, 4,892–5,648 px at 1440 |
| Footer | No contact link | `Kontaktai ir rekvizitai` |
| Home height | 11,401 / 17,510 | 11,187 / 17,298 (`record`) |

**Trap 2: capture artefacts. Do not report these as site faults.**

| What it looks like | Cause | Evidence |
|---|---|---|
| Earlier `home` and `vilnius` at 1440 had whole sections blank | **Superseded evidence:** records now say 11:14:14.915Z (`home`) and 11:20:06.518Z (`vilnius`). All five replacement segments of each were opened in this pass: about, services, gallery, reviews, prices and areas now render. Sticky FAQ media remains absent at desktop | Current `home/1440/segment-000000.jpg` through `segment-009600.jpg`; same five offsets for `vilnius/1440` |
| Faded/blank blocks at 390 | Earlier home evidence remains inherited. **Vilnius replacement still has artefacts**, despite capturedAt 11:20:21.617Z: faded about/service content at offsets 002532–004220; 005064 and 005908 are entirely pale bands. No live test was performed; these captures cannot establish site failure | `vensland.lt/vilnius/390/segment-002532.jpg`, `segment-003376.jpg`, `segment-004220.jpg`, `segment-005064.jpg`, `segment-005908.jpg` |
| Blank left half of the FAQ at 1440 | `v3-faq__media` is sticky, so it was hidden during segment capture. The photo card shows at 390 | `vensland.lt/paslaugos/1440/segment-007200.jpg` y≈800–1300 |
| Empty right column on Kontaktai at 1440 | `v3-quote` is sticky and was hidden the same way. It shows in the first viewport | `vensland.lt/kontaktai/1440/segment-000000.jpg` |
| White band under the utility strip | Header hidden during capture | All `segment-000000.jpg` files |
| Black gallery frame at 390 | Early frame; the 1440 shot shows the photo loaded | `vensland.lt/_interactions/home-_/390/11-gallery-open.jpg` |

The earlier 50-capture blank-row ratios described superseded files; they are not measurements of the replacements. This pass read `capturedAt`, `dom.pageHeight` and `iframePatches` in the records rather than rerunning scripts. The 11:xx desktop replacement records have `iframePatches: []`; the Vilnius mobile replacement has no such key. Neither establishes that every reveal/sticky item rendered. Riešė's desktop FAQ has an empty left column, while `riese/390/segment-012660.jpg` and `segment-013504.jpg` show its photo/phone card; its map consent panel explicitly asks the user to load Google Maps and is not a missing-map defect.

**Timestamp boundary:** twelve home/locality desktop records were replaced at 11:11:42.819–11:20:06.518Z (all ten localities, `home`, `paslaugos`). This pass opened replacement segments for `home`, `riese`, `vilnius`, plus the replacement `paslaugos` first viewport. Previous complete desktop segment coverage of `paslaugos` and `trakai` belongs to the preceding captures, not independently verified replacements. No sheet was reopened; existing sheet flags record prior viewing, not a new audit of later captures.

## 1. Coverage

| Template | Name | Count | Members |
|---|---|---|---|
| t00 | Locality + home clone | 11 | 10 localities, `paslaugos` |
| t01 | Service | 10 | `paslaugos/*` |
| t02 | Home | 1 | `home` |
| t03 | Contact | 1 | `kontaktai` |
| t04 | Legal | 1 | `privatumo-politika` |
| t05 | 404 | 1 | `author__tomas-venslovas24gmail-com` |

- **Pages:** 25 current, at both widths. `aciu` and the 404 probe were not recaptured; they exist only in `_backup-vensland.lt-legacy-20261105/`.
- **Sheets viewed:** 6/6 at 1440 and 6/6 at 390. All 12 are flagged in `index.json`.

| Page | 1440 | 390 |
|---|---|---|
| `paslaugos` (home reference) | 5/5 inherited preceding capture; replacement first viewport now viewed | 21/21 inherited + first viewport now viewed |
| `trakai` | First viewport + 5/5 inherited preceding capture; replacement not reopened | First viewport + 22/22 inherited |
| `vejos-irengimas` | First viewport + 3/3 | First viewport + 11/11 |
| `laistymo-sistemos` | 3/3 inherited + first viewport now viewed | First viewport + 9/9 inherited |
| `kontaktai` | First viewport + 2/2; final 57-px segment now viewed | First viewport + 6/6 inherited |
| `privatumo-politika` | 1/1 inherited + first viewport now viewed | First viewport + 5/5 inherited |
| `author…` 404 | First viewport inherited + 1/1 segment now viewed | First viewport inherited + 1/1 segment now viewed |
| `home` | First viewport inherited; all 5/5 replacement segments now viewed | First viewport + 21/21 current segments actually viewed in provenance pass; exact files below |
| `mini-ekskavatoriaus` | 3/3 + first viewport; final segment/FV now viewed | First viewport + 10/10 current segments actually viewed in provenance pass; exact files below |
| `vilnius` | Replacement first viewport + 5/5 now viewed | Replacement first viewport + 22/22 now viewed; reveal artefacts persist |
| `riese` | First viewport + 5/5 (incremental pass) | First viewport + 22/22 (incremental pass) |
| `vejos-lyginimas-levelingas` | First viewport + 3/3 now viewed | First viewport + 10/10 now viewed |
| 7 other localities, 6 other services | Sheet only (prior sheets) | Sheet only (prior sheets) |

### Incremental evidence log (this pass only)

- `riese/1440`: `first-viewport.jpg`, `segment-000000.jpg`, `segment-002400.jpg`, `segment-004800.jpg`, `segment-007200.jpg`, `segment-009600.jpg`; record capturedAt `2026-11-05T11:18:45.693Z`.
- `riese/390`: `first-viewport.jpg` and all 22 `segment-*.jpg`, offsets `000000, 000844, 001688, 002532, 003376, 004220, 005064, 005908, 006752, 007596, 008440, 009284, 010128, 010972, 011816, 012660, 013504, 014348, 015192, 016036, 016880, 017724`; record capturedAt `2026-11-05T10:53:54.406Z`. Viewed in eight native 390-wide side-by-side strips; grey padding after the final frame is strip padding, not page content.
- `vilnius`: `first-viewport.jpg` at both widths; all five 1440 segments, offsets `000000, 002400, 004800, 007200, 009600`; all 22 mobile segments at the same exact offsets listed for Riešė above (eight native strips). Record capturedAt `2026-11-05T11:20:06.518Z` / `2026-11-05T11:20:21.617Z` respectively. These replace the previously viewed first viewports; they are new capture evidence.
- `paslaugos__vejos-lyginimas-levelingas`: both `first-viewport.jpg`; all three 1440 segments, offsets `000000, 002400, 004800`; all ten 390 segments, offsets `000000, 000844, 001688, 002532, 003376, 004220, 005064, 005908, 006752, 007596` (four native strips). Record capturedAt `2026-11-05T10:55:30.853Z` / `2026-11-05T10:55:38.590Z`.
- `home/1440`: all five replacement segments, offsets `000000, 002400, 004800, 007200, 009600`; capturedAt `2026-11-05T11:14:14.915Z`. These are replacement-version views, not repeats of the earlier captures.
- First-viewport gaps filled: `paslaugos/{1440,390}/first-viewport.jpg`; `paslaugos__laistymo-sistemos/1440/first-viewport.jpg`; `privatumo-politika/1440/first-viewport.jpg`; `paslaugos__mini-ekskavatoriaus-paslaugos/1440/first-viewport.jpg`.
- Other segment gaps filled: `kontaktai/1440/segment-002400.jpg` (57 px, plain dark footer tail; no additional content); `paslaugos__mini-ekskavatoriaus-paslaugos/1440/segment-004800.jpg`; `author__tomas-venslovas24gmail-com/{1440,390}/segment-000000.jpg` (one at each width).
- **This incremental pass: 87 source images opened = 76 segment files + 11 first viewports; 54 of the mobile segments were viewed in 20 native side-by-side strips.** Full-depth additions: Riešė and levelling at both widths, Vilnius replacements at both widths, home replacement desktop; remaining first-viewport/utility gaps as above. This is an image-view count, not 87 unique pages.
- All 12 sheet flags were already true; no sheets reopened and no flag edits needed. At the end of that earlier pass, partial `home`/`mini` counts did not identify viewed filenames. The subsequent bounded provenance pass below resolves current-file coverage by reopening all files; it does not reconstruct the earlier viewing history.

### Bounded mobile provenance pass (2026-11-05; separate from the 87-image pass above)

VensLand is the own-site baseline, not a winning external reference. This pass deliberately reopens every record-listed segment and first viewport of only the two formerly partial mobile pages; earlier counts cannot identify which filenames were viewed. All source images are pasted without scaling into native 390-wide strips of at most three frames, with filenames above them. Temporary strips live under `/tmp/vensland-provenance-c9r2op63/`; grey below a short final frame is strip padding, not page blankness.

- **`home/390`: 22 source images actually viewed (21 segments + 1 first viewport), eight strips.** Record capturedAt `2026-11-05T10:53:24.060Z`. Exact files: `first-viewport.jpg`, `segment-000000.jpg`, `segment-000844.jpg`, `segment-001688.jpg`, `segment-002532.jpg`, `segment-003376.jpg`, `segment-004220.jpg`, `segment-005064.jpg`, `segment-005908.jpg`, `segment-006752.jpg`, `segment-007596.jpg`, `segment-008440.jpg`, `segment-009284.jpg`, `segment-010128.jpg`, `segment-010972.jpg`, `segment-011816.jpg`, `segment-012660.jpg`, `segment-013504.jpg`, `segment-014348.jpg`, `segment-015192.jpg`, `segment-016036.jpg`, `segment-016880.jpg`. Hero/FV, form, about, service cards, process, gallery, reviews, prices, FAQ, areas/map consent, CTA and footer are visible across this set. **Capture caveats:** the green trust-strip content near the bottom of `segment-000844.jpg` and top of `segment-001688.jpg` is faded; the portrait and about heading in `segment-001688.jpg` are also washed out. No wholly blank segment observed. `segment-016880.jpg` is only 418 px tall; record y=16880 but actualScrollY=16454, so its filename is not an exact page-coordinate guarantee. Static pixels do not establish reveal completion or live behaviour.

- **`paslaugos__mini-ekskavatoriaus-paslaugos/390`: 11 source images actually viewed (10 segments + 1 first viewport), four strips.** Record capturedAt `2026-11-05T10:56:06.846Z`. Exact files: `first-viewport.jpg`, `segment-000000.jpg`, `segment-000844.jpg`, `segment-001688.jpg`, `segment-002532.jpg`, `segment-003376.jpg`, `segment-004220.jpg`, `segment-005064.jpg`, `segment-005908.jpg`, `segment-006752.jpg`, `segment-007596.jpg`. Hero, description/inclusions/result, one job photograph, service-specific request checklist, first form step, three closed FAQ rows, three related-service cards and footer are visible. **Capture caveats:** no wholly blank segment or conspicuous reveal fade observed in this set. H1 splits `EKSKAVATORIAU / S PASLAUGOS` in both FV and `segment-000000.jpg`. Final `segment-007596.jpg` is 487 px tall, record y=7596 but actualScrollY=7239; grey below it in the strip is padding. Closed FAQ rows and the initial form state do not verify interaction behaviour.
- **This bounded pass total: 33 source images actually viewed = 31 record-listed segments + 2 first viewports, in 12 native strips.** These are repeat views to establish exact current provenance, not 33 newly discovered images or a reconstruction of inherited viewed filenames. Zero current-file viewing gaps remain for these two mobile pages. No inspection of the 13 sheet-only pages was performed; representative-template sampling remains the approved scope.
- **Read integrity verified after all views:** SHA-256 of both `record.json` files and all 33 source images matched the before-view manifest. Records and their false `viewed` flags were not changed. Record hashes: `home/390/record.json` = `f44a6ffb6a1486ef3075932299358f69c89d9e6bc56e3654572050566c2dd795`; `paslaugos__mini-ekskavatoriaus-paslaugos/390/record.json` = `59b74a473f9a31564664fb43ac7058ace6518a80d3b588fb2552a2ac9f84caff`. Temporary manifest: `/tmp/vensland-provenance-c9r2op63/manifest.json`.

**Flagged pages:**
- `paslaugos`: height outlier, because it is the home page grouped with localities.
- `author…`: HTTP 404, carried in `groups.json` as `legacy-record` (see Avoid 12).

**Interaction shots viewed (current, `vensland.lt/_interactions/`):**
- `home-_/390`: 01, 02, 05, 08, 09, 10, 11, 14, 16.
- `contact-_kontaktai_/390`: 01, 05, 08.
- `home-_/1440`: 03, 08, 10, 18.
- The service, gallery and FAQ roles were all `not-present` in `bulk-interactions.json`, so there is no current interaction evidence on service pages.

**Could not be judged:**
- **Form step 2:** never displayed, because nothing was submitted. Its fields come from the DOM only.
- **360 width:** interaction shots exist only in the legacy backup.
- **Contact CTA at 390:** the check timed out in `bulk-interactions.json`.

No page looked broken on the sheets beyond the Trap 2 artefacts.

## 2. Templates

### Home (t02) and clone `/paslaugos/`
Sequence: utility strip + header → hero with form → green trust band → about → 10 service tiles + phone tile → 4 steps → job gallery → reviews + rating panel → prices → FAQ → areas + map consent → final CTA → footer. **[HOLDS]**

`/paslaugos/` has the same title, H1 and heights as home, with canonical `https://vensland.lt/` (`record`). `Visos paslaugos` on service pages links to `https://vensland.lt/#paslaugos` (`record`). **There is no services hub.** **[HOLDS, target now verified]**

### Contact (t03)
Header → short photo hero (y124, h427) → 3 contact cards crossing the hero edge (y463, h123) → left column of founder quote, 4 step cards and `Rekvizitai`, with a sticky form on the right → footer. 2,457 px at 1440, 4,642 px at 390 (`record`). **[HOLDS]**
- At 390 the order is cards → quote → steps → Rekvizitai → form, so the form starts near y≈3,370.
- Not seen on the page: opening hours, a map, reviews.

### Locality (t00)
Home template plus a local block after the trust band: `Trakai ir apylinkės`, a short paragraph, `Visos paslaugos ir vietovės`, and a black card with `Dažni darbai Trakuose` and neighbour chips. 11,705–11,749 px at 1440, 17,981–18,135 px at 390 (`record`). **[HOLDS]**
- **What varies (Trakai read in full):** hero chip, lime H1 line, sub copy, local block, the outlined current place, `Taip pat:` line.
- **What does not vary:** the 10 localities look identical on the sheets, with the same photos and reviews.
- **Incremental Riešė check:** `riese/1440/segment-000000.jpg` y≈1200–1500 and `riese/390/segment-001688.jpg` show renewal-focused local copy (scarifying, CORE aeration, spreading sand and levelling), with Didžioji Riešė, Bukiškis and Lavoriškės chips. The black card lists installation/irrigation, aeration and scarifying. Do not restore the old claim that all local copy is identical: Trakai, Riešė and Vilnius have now been read, while seven other localities remain sheet-only.
- Riešė keeps the same generic gallery/reviews and complete 10-service/10-locality footer; no pictured job is visibly attributed to Riešė. `riese/1440/segment-004800.jpg`, `segment-009600.jpg`; `riese/390/segment-009284.jpg` through `segment-017724.jpg`. Its map is an explicit consent panel, not a failed/blank map.

- **Vilnius locality variation now visible:** private-house and apartment-yard copy mentions new/renewed lawn and irrigation; chips add Pilaitė, Pašilaičiai, Fabijoniškės, Antakalnis and Valakampiai. Its three common-work labels match Riešė (installation/irrigation, CORE aeration, scarifying), but the paragraph and neighbours differ. Same gallery/reviews, with no visible locality attribution. `vilnius/1440/segment-000000.jpg` y≈1200–1550, `segment-004800.jpg`; footer/active Vilnius row in `segment-009600.jpg`. Mobile whole-page completeness is limited by Trap 2.

### Service (t01) **[CHANGED: rebuilt]**
Hero with no form, house visible → thin grass edge → breadcrumb → problem copy + `Kaip…` process card → `Kas įeina į paslaugą` + `Ką gaunate` on a paper band → `Mūsų atlikti darbai` → `Ką atsiųsti užklausoje` beside the form → FAQ → `Susijusios paslaugos` (3–4 photo cards, `Plačiau`) → `Visos paslaugos` → footer.
- **Heights:** 4,892–5,648 px at 1440, 7,538–8,769 px at 390 (`record`).
- **Better than before:** body starts near y≈930 at 390 instead of about 1,800. Related links are photo cards, not plain text cards. The FAQ has 1–3 rows on the sheets; `vejos-lyginimas-levelingas` is now confirmed to have exactly one visible row at both widths.
- **Still weak:** the same hero on every service. Job photos stay about 320 px wide at 1440 with the right side empty. The FAQ leaves the right third empty. At 390 the first form sits low, near y≈4,220 on `vejos-irengimas`.
- **Skeleton variant:** `laistymo-sistemos` and `vejos-tresimas-purskimas` have no `Mūsų atlikti darbai` section (`record`, sim 0.956).

**Levelling variant [NEW, full-depth]:** Two job photos have captions below (`Smėlio vežimėlis vejos levelingui`, `Veja po levelingo su smėliu`), rather than text on the photographs. At desktop they occupy only the left portion; mobile stacks them at readable width. One closed FAQ row asks whether levelling includes excavating the whole plot. Form prompts ask for unevenness photos/depth, sand delivery access, existing sand/mix and timing. Related cards are aeration, scarifying and fertilising. `paslaugos__vejos-lyginimas-levelingas/1440/segment-000000.jpg` y≈2200–2400 and `segment-002400.jpg` y≈0–2100; `390/segment-002532.jpg` through `segment-005908.jpg`. The form starts at approximately document y≈4,140 on the mobile frames, after those prompts. No rating/source mark appears beside it. Taste: retain the specific preparation prompts and captions; improve the amount and placement of real proof rather than cloning this layout.

### Legal and utility
- **Privacy:** plain reading column with header and full footer. H1 is sentence case. **[HOLDS]**
- **404:** H1, one line, green `Į pradžią`; no header or footer. **[HOLDS]**
- **`aciu`:** `Užklausos būsena`, phone fallback, home link. **[LEGACY ONLY]**

## 3. System measurements (`record` unless marked)

| Item | 1440 | 390 |
|---|---|---|
| H1 element (computed; not child spans) | 65.6/75.44 white; visibly uppercase | 35.88/41.26 |
| H2 section | 44/47.52, sentence case | 29.6/31.97 |
| H2 reviews | 60.8/65.66, uppercase | 38.4/41.47 |
| H2 final CTA | 54.4/58.75, uppercase | 32/34.56 |
| H2 form | 28/44.8, uppercase | Same |
| H2 service cards | 20.8 | Same |
| Home height | 11,187 | 17,298 (about 20.5 phone screens) |
| Fixed top | 124 at load, 84 scrolled | About 108 at load (read from image), 68 scrolled |
| Fixed bottom | None | Dock 64 px at y770–834, hidden at load |

- **Fonts:** masked as `V3 Head` and `V3 Sans`. The real families are unknown.
- **Colours:** green `rgb(31,122,46)` for actions, lime `rgb(140,198,63)` for accents and the H1 place line, ink `rgb(21,22,26)`, grey text `rgb(85,88,95)`, bands `rgb(16,19,17)`, pale surface `rgb(244,247,241)`, gold `rgb(237,201,103)` only for the rating button. **[HOLDS]**
- **Mobile fixed cost once scrolled:** 68 px top plus 74 px from the dock top to the screen edge = 142 of 844 px (17%).
- **Form (DOM):** only phone is required, with pattern `[0-9\s\+\-\(\)]+`. Step 2 holds `Objekto vietovė`, two location buttons and `Pridėti failus`. The `website` field looks like a honeypot (inference). The privacy page describes a `Nustatyti vietą` action using OpenStreetMap.

**Brand devices: at least 9 site-wide, against the rule of two. [CHANGED: was 8]**
Grass edge, double-slash eyebrow, diagonal hatch, green left rule, logo tab, arrow plates, green arrow disc, lime H1 line, green top-edge card.
- The count is high on home and locality pages. Inner pages are calmer: about 4 on service pages and 4 on Kontaktai.
- Grass edges: 5 on Trakai, 1 on service pages, 0 on Kontaktai and privacy.
- Hatch: 3 on the home template (portrait, steps corner, price CTA corner).

## 4. Findings

### Copy (observation first, taste marked)
1. **Contact cards crossing the hero edge.** Three white cards, each with a label, a value and, where relevant, an action. The house reads clearly. Taste: the best composition on the site. **[HOLDS]** `vensland.lt/kontaktai/1440/first-viewport.jpg` y≈462–586.
2. **Service-specific prompts beside the form.** `Ką atsiųsti užklausoje` changes per service; the mini-excavator list asks for stump count, access width and underground utilities. Useful, specific, and placed at the point of action. Taste: the best idea on the service template. **[NEW]** `vensland.lt/paslaugos__mini-ekskavatoriaus-paslaugos/1440/segment-002400.jpg` y≈420–890.
3. **Legal details as proof.** `Rekvizitai` lists name, company code, address and VAT code, with the Registrų centras line. **[HOLDS]** `vensland.lt/kontaktai/1440/segment-000000.jpg` y≈1395–1725.
4. **Compact two-step form.** At 1440 it ends at y≈840, inside the first viewport. Only the phone is required. **[HOLDS]** `vensland.lt/home/1440/first-viewport.jpg`.
5. **Quote modal fits the phone.** The whole card, including the button and phone fallback, fits in 844 px at 390, and focus lands on `Vardas`. This removes the bottom clipping noted in `vensland-baseline.md`. **[CHANGED]** `vensland.lt/_interactions/home-_/390/05-cta-open-23.jpg`.
6. **Sticky form on Kontaktai at 1440.** It stays in view beside the left column (`bulk-interactions.json`, sticky check). **[NEW]**
7. **Logo tab on the form.** One device for one purpose, in hero, modal and service forms. **[HOLDS]** `vensland.lt/trakai/1440/first-viewport.jpg` y≈184–242.
8. **Gallery with a lead image and a count.** Real job photos and `Žiūrėti visas nuotraukas (120)`. Taste: the most convincing section. **[HOLDS]** `vensland.lt/paslaugos/1440/segment-004800.jpg` y≈30–780.
9. **Price rows as one object.** Service, amount, unit and VAT stay together, and the mobile order holds. **[HOLDS]** `vensland.lt/trakai/1440/segment-007200.jpg` y≈250–860.
10. **Full-screen mobile menu.** Large targets, with quote and call actions in reach. Caution: the `01–08` numbering is close to the numbered ledgers the user rejected in v2. **[HOLDS]** `vensland.lt/_interactions/home-_/390/02-menu-open.jpg`.
11. **Steps rebuilt for phones.** A vertical list on home; calmer numbered cards on Kontaktai. **[HOLDS]** `vensland.lt/kontaktai/390/segment-000844.jpg`.
12. **Locality list that marks the current place.** Green outline on the active row, and the footer keeps all 20 links at 390. **[HOLDS]** `vensland.lt/trakai/1440/segment-009600.jpg` y≈700–790.
13. **Phone on a photo in the FAQ.** Contact attached to a real job image. **[HOLDS]** `vensland.lt/paslaugos/390/segment-012660.jpg`.
14. **Related services as photo cards.** Real photos with a clear `Plačiau` action. **[NEW]** `vensland.lt/paslaugos__vejos-irengimas/1440/segment-002400.jpg` y≈1780–2200.

### Avoid
1. **Home-made proof, no official marks. [HOLDS]** `5.0 ĮVERTINIMAS / 10 atsiliepimų Paslaugos.lt` uses a generic check icon, and `Paslaugos.lt` appears only as a chip and as underlined text. No image filename on any of the 25 pages suggests a Google, Paslaugos.lt or press logo (`record`; inline SVGs are not covered by this check). This breaks learnings rule 1. `vensland.lt/paslaugos/1440/segment-000000.jpg` y≈990–1020, y≈1715.
2. **Rating solicitation outweighs the reviews. [HOLDS]** The black and gold panel is larger than any review card, and its five stars read as a score when they are a prompt. `vensland.lt/paslaugos/1440/segment-004800.jpg` y≈1520–1860.
3. **Pictograms everywhere. [HOLDS]** Wrench, tag, pin, check and shield in the trust band, steps, cards and Rekvizitai. This breaks learnings rule 6. `vensland.lt/trakai/1440/segment-000000.jpg` y≈1000, y≈1280.
4. **Form on top of the hero's subject. [HOLDS, now stronger]** The rebuilt service hero shows the house clearly at 1440 because no form covers it. The home hero hides it. At 390 every hero crop shows only dark foliage. `vensland.lt/paslaugos__vejos-irengimas/1440/first-viewport.jpg` vs `vensland.lt/home/1440/first-viewport.jpg`, `vensland.lt/home/390/first-viewport.jpg`.
5. **Same hero on every page. [HOLDS]** No service or place is shown. `vensland.lt/paslaugos__laistymo-sistemos/1440/segment-000000.jpg`, `vensland.lt/trakai/1440/first-viewport.jpg`.
6. **Corporate headshot as the only person. [HOLDS]** Nobody is shown working. `vensland.lt/trakai/1440/segment-000000.jpg` y≈1650–2200.
7. **Too many devices on the home template. [HOLDS]** See section 3. `vensland.lt/paslaugos/1440/segment-002400.jpg` y≈1490, y≈2230.
8. **One action, many labels. [HOLDS, now counted]** Link counts across 25 pages (`record`): `Gauti kainą` 105, `Pradėti nuo 1 žingsnio` 12, `Sužinoti kainą` 12, `Susisiekti` 12. `TOLIAU` adds another inside the form. Same fault as Puetz.
9. **System text shown to customers. [HOLDS]** `Saugumo patikra bus įkelta…` sits under the inline form, and `Įkeliama saugumo patikra…` shows in the modal. `vensland.lt/home/1440/first-viewport.jpg` y≈755; `vensland.lt/_interactions/home-_/390/05-cta-open-23.jpg`.
10. **Type defects in heavy caps. [HOLDS]**
    - Mid-word break `EKSKAVATORIAU / S PASLAUGOS`: `vensland.lt/paslaugos__mini-ekskavatoriaus-paslaugos/390/first-viewport.jpg` y≈262–305.
    - The `Į` tail nearly touches the `Ž` caron: `vensland.lt/home/1440/first-viewport.jpg` y≈345.
    - Uppercase and sentence case are mixed across H2s (`ATSILIEPIMAI` vs `Ką atliekame`).
11. **Tile titles on busy photo areas. [HOLDS]** `VEJOS AERAVIMAS`, `TREŠIMAS IR` and `MINI` sit on the machines. `vensland.lt/trakai/1440/segment-002400.jpg` y≈360, y≈780, y≈1240.
12. **Public sitemap lists a dead, email-derived URL. [HOLDS]** `wp-sitemap-users-1.xml` lists `/author/tomas-venslovas24gmail-com/`, which returns 404. The slug looks like an email address. Check ArbCut does not repeat this.
13. **Kontaktai mobile: logo tab detached. [HOLDS, confirmed on current]** A white tab shows at the very top of the viewport over the utility strip, and the form further down has none. `vensland.lt/kontaktai/390/first-viewport.jpg` y≈0–15; `vensland.lt/_interactions/contact-_kontaktai_/390/05-form-0-invalid.jpg`. It is present at load, so hiding fixed UI does not explain it. Not confirmed in a real phone browser.
14. **No services hub. [HOLDS]** `/paslaugos/` repeats home, and `Visos paslaugos` jumps to a home anchor.
15. **Identical proof on every locality. [HOLDS on sheets]** Same photos and reviews, so nothing shows work in the named place.
16. **Polished images stand in where real ones are missing (inference). [HOLDS]** The two glossy tiles, `LAISTYMO SISTEMOS` and `TREŠIMAS`, are the two services with no `Mūsų atlikti darbai` section. I cannot verify where those images came from. `vensland.lt/trakai/1440/segment-002400.jpg` y≈130, y≈570.
17. **Job photos stay small on service pages. [NEW wording]** About 320 px wide at 1440, with the right side empty, and a single photo on some pages. `vensland.lt/paslaugos__vejos-irengimas/1440/segment-000000.jpg` y≈2300, `vensland.lt/paslaugos__mini-ekskavatoriaus-paslaugos/1440/segment-000000.jpg` y≈2350.
18. **Stray H3 in the price notes. [HOLDS]** `Ar pagrindo paruošimas įskaičiuotas?` sits between small print. Dialog H2s also pollute the outline (`record`). `vensland.lt/trakai/1440/segment-007200.jpg` y≈900.
19. **Mobile services run. [HOLDS]** Ten equal tiles plus the phone tile take about 4,000 px at 390 (read from the frames). `vensland.lt/paslaugos/390/segment-003376.jpg` to `-006752.jpg`.
20. **Dock covers content. [HOLDS]** Green and white buttons in a dark container cover the rating panel heading while scrolling. `vensland.lt/_interactions/home-_/390/14-slider-t5.jpg`.

**Withdrawn or not rechecked:**
- **One-question FAQ narrowed. [CHANGED]** Not a general service-template claim: levelling is now visually confirmed to have one row at both widths; the other sheet variants show 2–3.
- **Tight heading under the sidebar. [CHANGED]** That layout is gone.
- **Mobile gallery viewer and 360 tightness. [LEGACY ONLY]** Not recaptured.

### Corrections to prior notes
- **Dock:** `v4-vensland-detail.md` says "always present". It is hidden at load and visible by 30% scroll (`bulk-interactions.json`). I did not determine the exact trigger.
- **Sitemap:** `vensland-baseline.md` says 22 URLs and no contact page. The ledger shows 23, including `/kontaktai/`.
- **Service pages:** every service-template note in `v4-vensland-detail.md` and `vensland-baseline.md` describes the old build.
- **Modal clipping at 390:** `vensland-baseline.md` no longer applies at 390. 360 is unknown.
- **Validation bubble:** the English `Please match the requested format.` is the browser's own message, so its language should follow the browser locale. I did not test a Lithuanian locale.

## 5. Candidate key screenshots
1. `vensland.lt/kontaktai/1440/first-viewport.jpg`: best composition; cards cross the edge and the photo reads.
2. `vensland.lt/paslaugos__mini-ekskavatoriaus-paslaugos/1440/segment-002400.jpg`: service-specific prompts beside the form.
3. `vensland.lt/paslaugos__vejos-irengimas/1440/first-viewport.jpg`: hero with the house visible, to compare with #4.
4. `vensland.lt/home/1440/first-viewport.jpg`: compact form, covering the house.
5. `vensland.lt/home/1440/segment-004800.jpg`: replacement viewed this pass; real gallery above the over-weighted rating panel.
6. `vensland.lt/paslaugos__mini-ekskavatoriaus-paslaugos/390/first-viewport.jpg`: mid-word H1 break.

## 6. Exact residual gaps (lead)
- **No first-viewport gaps remain among the named representative pages in the table**, counting inherited first viewports. Replacement desktop first viewport of `home` and both first/segments of `trakai` were not reopened; `paslaugos` replacement desktop segments were not reopened. Their prior viewed flags/counts must not be treated as fresh validation of replacement files.
- **Mobile provenance resolved:** `home/390` 21/21 segments + FV and `paslaugos__mini-ekskavatoriaus-paslaugos/390` 10/10 segments + FV actually viewed in the bounded pass above. Exact filenames are logged there; zero unviewed current record-listed files remain for these two pages. Earlier ambiguous counts are superseded for current coverage, not attributed to particular historical views. Faded home content remains a capture limitation, not an unviewed-file gap.
- **Only prior-sheet coverage:** localities `avizieniai`, `juodsiliai`, `lentvaris`, `maisiagala`, `nemencine`, `pagiriai`, `rudamina`; services `paslaugos__apleistu-sklypu-tvarkymas`, `paslaugos__gyvatvoriu-sodinimas-prieziura`, `paslaugos__vejos-aeravimas-core`, `paslaugos__vejos-skarifikavimas`, `paslaugos__vejos-tresimas-purskimas`, `paslaugos__zoles-pjovimas`. No new full-size coverage claimed for these 13 pages.
- **Capture limitations:** Vilnius mobile remains faded at offsets 002532–004220 and blank at 005064/005908 even after its 11:20Z replacement. Sticky FAQ desktop media is absent on the inspected home/locality captures; the contact desktop sticky form was already evidenced by its first viewport/interactions. Home mobile fades are now directly rechecked in `segment-000844.jpg` and `segment-001688.jpg`; no wholly blank home segment was observed. Mini mobile has no conspicuous fade or wholly blank segment in this set. Any recapture is lead-owned; none was performed here.
- **Behaviour still unknown/current capture absent:** form step 2 visually, current service interactions, 360 width, Kontaktai CTA at 390 (timeout), `aciu` and the separate 404 probe. The captured author 404 is fully viewed at both widths; it does not replace those absent routes.
- **Numbers/typography:** section 3 contains inherited computed values, not new measurements of child text styles. A parent H1 colour cannot establish the lime child span colour; the visible lime place line is screenshot evidence. Exact font family behind aliases remains unknown. No new metrics were inferred from parent computed styles.
- No browser, recapture, submissions, delegated tasks or commits. Only this report was edited; all 12 external sheet flags were already true and were left unchanged. Lead verifies and commits.
