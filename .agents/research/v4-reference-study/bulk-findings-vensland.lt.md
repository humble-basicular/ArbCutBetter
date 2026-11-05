# Stage-B findings: vensland.lt

Date: 2026-11-05. Analyst: Claude Opus 5.5 (research sub-agent). Read-only.
**Status: second pass on the current site (recapture 10:53–10:57Z). All sheets viewed. Most required full-size views are done, but the stage budget stopped the pass before all of them. Gaps are in section 1.**

Standing: this is the agency's own build, so it is the build to beat. Per `vensland-baseline.md`, the user does not treat it as a winning example. Nothing here is evidence for the winning formula.

Paths are relative to `~/.ai-powerhouse/research-captures/arbcut-v4/`. Y values are file pixels read by eye, so they are approximate. `record` means the number comes from `record.json`.

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
| Whole sections blank on `home` and `vilnius` at 1440 | Scroll-reveal content did not fire. These two pages started the capture run at 10:53:01. Text and tiles are missing while the band backgrounds remain | `vensland.lt/home/1440/segment-002400.jpg`, `.../segment-007200.jpg` |
| Faded or washed-out blocks on `home` and `vilnius` at 390 | Same reveal, caught partway through | `vensland.lt/home/390/segment-000844.jpg`, `-001688.jpg` |
| Blank left half of the FAQ at 1440 | `v3-faq__media` is sticky, so it was hidden during segment capture. The photo card shows at 390 | `vensland.lt/paslaugos/1440/segment-007200.jpg` y≈800–1300 |
| Empty right column on Kontaktai at 1440 | `v3-quote` is sticky and was hidden the same way. It shows in the first viewport | `vensland.lt/kontaktai/1440/segment-000000.jpg` |
| White band under the utility strip | Header hidden during capture | All `segment-000000.jpg` files |
| Black gallery frame at 390 | Early frame; the 1440 shot shows the photo loaded | `vensland.lt/_interactions/home-_/390/11-gallery-open.jpg` |

Blank-row check on all 50 page/width captures: only `home` and `vilnius` stand out at 1440 (0.56 and 0.54 of rows flat, against about 0.22–0.23 for the other full-length pages). `vilnius` also stands out mildly at 390 (0.18 against 0.13–0.14). **Use `paslaugos` as the home reference and `trakai` as the locality reference.**

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
| `paslaugos` (home reference) | 5/5 segments; first viewport **not** viewed | 21/21 frames in strips; first viewport **not** viewed |
| `trakai` | First viewport + 5/5 | First viewport + 22/22 |
| `vejos-irengimas` | First viewport + 3/3 | First viewport + 11/11 |
| `laistymo-sistemos` | 3/3; first viewport **not** viewed | First viewport + 9/9 |
| `kontaktai` | First viewport + 1/2 (footer segment not viewed) | First viewport + 6/6 |
| `privatumo-politika` | 1/1; first viewport **not** viewed | First viewport + 5/5 |
| `author…` 404 | First viewport; segment via sheet | First viewport; segment via sheet |
| `home` | First viewport + 3/5 (artefacts) | First viewport + 9/21 |
| `mini-ekskavatoriaus` | 2/3; first viewport **not** viewed | First viewport + 6/10 |
| `vilnius` | First viewport only (artefacts) | First viewport only |
| 8 other localities, 7 other services | Sheet only | Sheet only |

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
- **Earlier correction narrowed:** I said the `Dažni darbai` lines are identical on Vilnius, Trakai and Riešė. That came from the old build. On the current build I have read only Trakai.

### Service (t01) **[CHANGED: rebuilt]**
Hero with no form, house visible → thin grass edge → breadcrumb → problem copy + `Kaip…` process card → `Kas įeina į paslaugą` + `Ką gaunate` on a paper band → `Mūsų atlikti darbai` → `Ką atsiųsti užklausoje` beside the form → FAQ → `Susijusios paslaugos` (3–4 photo cards, `Plačiau`) → `Visos paslaugos` → footer.
- **Heights:** 4,892–5,648 px at 1440, 7,538–8,769 px at 390 (`record`).
- **Better than before:** body starts near y≈930 at 390 instead of about 1,800. Related links are photo cards, not plain text cards. The FAQ has 1–3 rows on the sheets (`vejos-lyginimas` looks like one).
- **Still weak:** the same hero on every service. Job photos stay about 320 px wide at 1440 with the right side empty. The FAQ leaves the right third empty. At 390 the first form sits low, near y≈4,220 on `vejos-irengimas`.
- **Skeleton variant:** `laistymo-sistemos` and `vejos-tresimas-purskimas` have no `Mūsų atlikti darbai` section (`record`, sim 0.956).

### Legal and utility
- **Privacy:** plain reading column with header and full footer. H1 is sentence case. **[HOLDS]**
- **404:** H1, one line, green `Į pradžią`; no header or footer. **[HOLDS]**
- **`aciu`:** `Užklausos būsena`, phone fallback, home link. **[LEGACY ONLY]**

## 3. System measurements (`record` unless marked)

| Item | 1440 | 390 |
|---|---|---|
| H1 | 65.6/75.44 white, uppercase | 35.88/41.26 |
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
- **One-question FAQ. [CHANGED]** Most service pages now have 2–3 rows; only `vejos-lyginimas` may still have one.
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
5. `vensland.lt/paslaugos/1440/segment-004800.jpg`: real gallery beside the over-weighted rating panel.
6. `vensland.lt/paslaugos__mini-ekskavatoriaus-paslaugos/390/first-viewport.jpg`: mid-word H1 break.

## 6. Remaining work (lead)
- Recapture `home` and `vilnius` so scroll reveal completes.
- Rerun interactions on one service page, at 360, and for the Kontaktai CTA at 390. Step 2 needs a way to display it without submitting.
- Full-size views still owed: first viewports listed in section 1, `kontaktai/1440/segment-002400.jpg`, `mini/1440/segment-004800.jpg`, the remaining `home` and `mini` frames, and `vilnius` once recaptured.
- Recapture `aciu` and the 404 probe if current versions are needed.
