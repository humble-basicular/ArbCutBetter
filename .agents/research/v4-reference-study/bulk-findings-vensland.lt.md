# Stage-B findings: vensland.lt

Date: 2026-11-05. Analyst: Claude Opus 5.5 (research sub-agent). Read-only.
**Status: PARTIAL.** All contact sheets were viewed, but the stage token budget stopped full-size viewing early. Gaps are in the coverage table.

Standing: this is the agency's own build, so it is the build to beat. Per `vensland-baseline.md`, the user does not treat it as a winning example. Nothing here is evidence for the winning formula.

Paths are relative to `~/.ai-powerhouse/research-captures/arbcut-v4/`. Y values are file pixels, read by eye from the images, so treat them as approximate. Numbers marked `record` come from `record.json`.

## 0. Read this first: two evidence traps

**Trap 1: the site changed during the capture day (inferred, not verified live).**
24 of the 27 captures are `legacy-record` (about 07:17–07:31Z). `kontaktai`, `paslaugos` and the author 404 are fresh (about 10:43–10:46Z). The fresh pages show a newer site:

| Element | Legacy captures (home, localities, services) | Fresh captures (`kontaktai`, `paslaugos`) |
|---|---|---|
| Nav | 5 links | 6 links, adds `Kontaktai` |
| Utility strip | `Vilniaus r. · +30 km aplink` | `Vilnius ir Vilniaus r.` |
| Form | One step, stacked fields, upload visible, `GAUTI KAINĄ` | Two steps, `1 iš 2 · Kontaktai`, name and phone side by side, `TOLIAU` |
| Security line | Body size, above the button | Small, below the button |
| Footer | No contact page link | Adds `Kontaktai ir rekvizitai` |

So home, locality and service screenshots may be out of date for the header, form and footer. The fresh `/paslaugos/` page is the best current picture of the home template. Its height is 11,187 px at 1440 and 17,298 px at 390, against home's 11,401 and 17,510 (`record`), about 212 px shorter at both widths. The form is the visible difference.

**Trap 2: some apparent defects are capture artefacts. Do not report these as site faults.**

| What it looks like | Cause | Evidence |
|---|---|---|
| Blank left half of the FAQ at 1440 | `v3-faq__media` is in the `fixed` list and was hidden during segment capture. The photo card is present at 390 | `vensland.lt/paslaugos/1440/segment-007200.jpg` y≈800–1300; `record` |
| Empty right column on Kontaktai at 1440 | The form `v3-quote` was hidden the same way. It shows in the first viewport | `vensland.lt/kontaktai/1440/segment-000000.jpg`; `.../first-viewport.jpg` |
| Blank white band under the utility strip | The header was hidden | All `segment-000000.jpg` files |
| Grey block behind the rating panel, Riešė | Incomplete paint; `vensland-baseline.md` already notes a repair | `vensland.lt/riese/1440/segment-004800.jpg` y≈2190 |
| Blurry tiles, gallery and review backgrounds | Lazy-image placeholders not swapped. Same images are sharp in `paslaugos` | `vensland.lt/home/1440/segment-002400.jpg` vs `vensland.lt/paslaugos/1440/segment-002400.jpg`; also `riese/1440/segment-004800.jpg` |

Do not judge photo sharpness from `home/1440` or `riese/1440`.

## 1. Coverage

| Template | Name | Count | Members |
|---|---|---|---|
| t00 | Locality (plus privacy, mis-grouped) | 11 | 10 localities, `privatumo-politika` |
| t01 | Service | 10 | `paslaugos/*` |
| t02 | 404 | 2 | Probe URL, author URL |
| t03 | Request status | 1 | `aciu` |
| t04 | Home | 1 | `home` |
| t05 | Contact | 1 | `kontaktai` |
| t06 | Home clone | 1 | `paslaugos` |

- **Page count:** 27 in groups = 25 in the ledger + `aciu` + the 404 probe.
- **Sheets viewed:** 7/7 at 1440 and 7/7 at 390. All 14 are flagged `viewed` in `index.json`.
- **Stale files:** `t02-one-off-0.jpg` at both widths is left over from an older run and is not in the index. Ignored.

| Page | 1440 full size | 390 full size |
|---|---|---|
| `home` | First viewport + 5/5 segments | First viewport + 8/8 |
| `paslaugos` | First viewport + 5/5 | First viewport + 21/21 (native-size montage) |
| `kontaktai` | First viewport + 2/2 | First viewport + 6/6 |
| `vilnius` | First viewport + 5/5 | First viewport + 8/8 (segment 0 direct, all 8 in montage) |
| `trakai` | **Sheet only** | 8/8 (montage); first viewport not viewed |
| `riese` (paint flag) | 1/5 (`segment-004800`) | 8/8 (montage); first viewport not viewed |
| `paslaugos__vejos-irengimas` | First viewport + 2/2 | 3/3 (montage); first viewport not viewed |
| `paslaugos__laistymo-sistemos` (height flag) | **Sheet only** | 3/3 (montage); first viewport not viewed |
| `paslaugos__mini-ekskavatoriaus-paslaugos` | **Sheet only** | 3/3 (montage); first viewport not viewed |
| `privatumo-politika`, `aciu`, both 404s | **Sheet only** | **Sheet only** |
| 7 other localities, 7 other services | Sheet only | Sheet only |

Legacy 390 montages put four 2400-px clips side by side and display at the same scale as a direct read (about 0.83).

**Flagged pages:**
- `privatumo-politika`: a legal page mis-grouped with localities (skeleton 0.73, height outlier). Not a defect.
- `paslaugos__laistymo-sistemos`: short because it has no job photos.
- `author__tomas-venslovas24gmail-com`: HTTP 404 (see Avoid 12).
- `arbcut-reference-study-not-found`: an intentional 404 probe.

**Interaction shots viewed:**
- 390: `menu`, `quote-open`, `modal-scrolled`, `quote-guidance`, `validation-modal`, `gallery-delayed`, `rating-open`, `reviews-next`, `faq-open`, `footer-with-sticky`.
- 360: `initial`, `menu`, `quote-open`, `rating-open`, `footer-with-sticky`.
- 1440: **none this pass**; `vensland-baseline.md` covers them.
- All shots are legacy-era, so the two-step form was never exercised, and step 2 is unseen.

**Could not be judged:** step 2 of the form, the current home, locality and service pages if Trap 1 is right, and all 7 "sheet only" localities and services beyond structure. No page looked broken on the sheets.

## 2. Templates

### Home (t04) and clone (t06)
Sequence: utility strip + header → hero with form → green trust band → about → 10 service tiles + phone tile → 4 steps → job gallery → reviews + rating panel → prices → FAQ → areas + map consent → final CTA → footer. `v4-vensland-detail.md` has the section table; it still holds apart from section 5 below.

`/paslaugos/` is the same page as home with canonical `https://vensland.lt/` (`record`). **The site has no services hub.** The URL appears in `wp-sitemap-posts-page-1.xml`. I did not check where `Visos paslaugos` links.

### Contact (t05), new and not in prior notes
Sequence (`record` skeleton): header → short photo hero (y124, h427) → 3 contact cards crossing the hero edge (y463, h123) → grid of quote card, 4 step cards, `Rekvizitai` table, with the form beside it → footer. Total 2,457 px at 1440, 4,642 px at 390.

- **At 1440:** the strongest composition on the site. With no form on top of it, the house photo reads clearly.
- **At 390:** order is cards → quote → steps → Rekvizitai → form. The form starts near y≈2,500.
- **Not seen on the page:** opening hours, a map, reviews.

### Locality (t00)
Home template plus a local block after the trust band. All 10 share the structure on the sheets; I read Vilnius, Trakai and Riešė in detail.

- **What varies:** hero chip (neighbours), lime last line of the H1, hero sub copy, the local H2 and paragraph, chips under `VAŽIUOJAME Į` (2–5), the outlined current place in the area list, and a `Taip pat:` line.
- **What does not vary:** image filenames are identical across home, `paslaugos`, Vilnius and Trakai (`record`, 149 images each).
- **Correction:** `v4-vensland-detail.md` says the `Dažni darbai` lines change. On Vilnius, Trakai and Riešė the same three lines appear; only the heading's place name changes.

### Service (t01)
Hero with form → thin grass edge → breadcrumb → 2 H2 blocks + tinted sidebar → 0–2 captioned photos → one-row FAQ → 9 link cards → footer.

- Photos are about 320 px wide at 1440, with the right side empty (`vensland.lt/paslaugos__vejos-irengimas/1440/segment-000000.jpg` y≈2080).
- A gap of about 400 px sits under the left text.
- At 390 the breadcrumb lands near y≈1,800, on the legacy form.
- Heights: 3,544–3,980 px at 1440, 5,848–6,478 px at 390 (`record`).

### Utility (t02, t03) and legal
From sheets only: 404 is H1, one line and a green button, with no header or footer. `aciu` is H1, a phone fallback and a home link. Privacy is a plain reading column with header and footer. These match `vensland-baseline.md`.

## 3. System measurements (`record` unless marked)

| Item | 1440 | 390 |
|---|---|---|
| H1 | 65.6/75.44 white, uppercase | 35.88/41.26 |
| H2 section | 44/47.52, sentence case | 29.6/31.97 |
| H2 reviews | 60.8/65.66, uppercase | 38.4/41.47 |
| H2 final CTA | 54.4/58.75, uppercase | 32/34.56 |
| H2 form | 28/44.8, uppercase | Same |
| H2 sidebar (service) | 20/26 | Same |
| Home height | 11,401 | 17,510 (about 20.7 phone screens) |
| Locality height | 11,927–11,971 | 18,193–18,347 |
| Fixed top | 125 at load (40 strip + 84 header) | 109 at load; about 69 once scrolled (read from image) |
| Fixed bottom | None | Dock about 70 px (read from image), `v3-dock is-hidden` at load |

- **Fonts:** masked as `V3 Head` and `V3 Sans`, reported weight 400. The real families are unknown.
- **Colours:** green `rgb(31,122,46)` for actions, lime `rgb(140,198,63)` for accents and the H1 place line, ink `rgb(21,22,26)`, grey text `rgb(85,88,95)`, bands `rgb(16,19,17)`, pale surface `rgb(244,247,241)`, gold `rgb(237,201,103)` only for the rating button.
- **Mobile fixed cost:** about 139 of 844 px (16%) once scrolled.

**Brand devices: at least 8, against the rule of two.** Grass edge, double-slash eyebrow, diagonal hatch, green left rule, logo tab, arrow plates, green arrow disc, lime H1 line.
- Grass edge count: 5 on home and locality pages, 1 on service pages, 0 on Kontaktai.
- Hatch count: 3 on home (portrait, process corner, price CTA corner).

## 4. Findings

### Copy (observation first, taste marked)
1. **Contact cards crossing the hero edge.** Three white cards with a clear label, value and action. This is the layered move with the least decoration. Taste: the best moment on the site. `vensland.lt/kontaktai/1440/first-viewport.jpg` y≈462–586.
2. **Legal details as proof.** `Rekvizitai` lists name, company code, address and VAT code, with the Registrų centras source line. Real, checkable, no invented copy. `vensland.lt/kontaktai/1440/segment-000000.jpg` y≈1395–1725.
3. **Compact two-step form.** At 1440 the whole form including the button ends at y≈840, inside the first viewport. The legacy form ran past 900. `vensland.lt/paslaugos/1440/first-viewport.jpg`; compare `vensland.lt/home/1440/first-viewport.jpg`.
4. **Logo tab on the form.** Same device in hero, contact and modal. One device, used for one purpose. `vensland.lt/paslaugos/1440/first-viewport.jpg` y≈184–242.
5. **Gallery with a lead image and a count.** Real job photos and `Žiūrėti visas nuotraukas (120)`. Taste: the most convincing section. `vensland.lt/paslaugos/1440/segment-004800.jpg` y≈30–780.
6. **Price rows as one object.** Service, amount, unit and VAT stay together, and the mobile order holds. `vensland.lt/paslaugos/390/segment-010972.jpg`.
7. **Full-screen mobile menu.** Large targets, quote and call actions in reach, clean at 360. Caution: the `01–07` numbering is close to the numbered ledgers the user rejected in v2. `vensland.lt/interactions/390/menu.jpg`, `vensland.lt/interactions/360/menu.jpg`.
8. **Steps rebuilt for phones.** Vertical circle and plate list instead of a shrunken row. The Kontaktai card version is calmer. `vensland.lt/paslaugos/390/segment-007596.jpg`; `vensland.lt/kontaktai/390/segment-000844.jpg` y≈560–840.
9. **Locality list that marks the current place.** Green outline on the active row, and the footer keeps all 20 links at 390. `vensland.lt/vilnius/1440/segment-009600.jpg` y≈210–285.
10. **Phone on a photo in the FAQ.** Contact attached to a real job image. `vensland.lt/paslaugos/390/segment-012660.jpg`.
11. **Service prep prompts.** `Ką pasiruošti užklausai` gives useful, specific input. `vensland.lt/paslaugos__vejos-irengimas/1440/segment-000000.jpg` y≈1580–1750.

### Avoid
1. **Home-made proof, no official marks.** `5.0 ĮVERTINIMAS / 10 atsiliepimų Paslaugos.lt` uses a generic check icon, the `Paslaugos.lt` chip is text, and review sources are underlined text. No Paslaugos.lt or Google logo appeared on any page viewed. This breaks learnings rule 1. `vensland.lt/paslaugos/1440/segment-000000.jpg` y≈990–1020, y≈1715.
2. **Rating solicitation outweighs the reviews.** The black and gold panel is larger than any review card, and its five stars read as a score when they are a prompt. It also opens an internal dialog first. `vensland.lt/paslaugos/1440/segment-004800.jpg` y≈1520–1860.
3. **Pictograms everywhere.** Wrench, tag, pin, check and shield in the trust band, steps, cards and Rekvizitai. This breaks learnings rule 6. `vensland.lt/paslaugos/1440/segment-000000.jpg` y≈1000; `.../segment-002400.jpg` y≈1800.
4. **Form on top of the hero's subject (corrects prior notes).** Prior notes blame the darkening alone. At 1440 the same photo reads well on Kontaktai, where no form covers the house. On home, the form covers it and a heavy scrim covers the left. At 390 the crop shows only dark foliage. `vensland.lt/kontaktai/1440/first-viewport.jpg` vs `vensland.lt/paslaugos/1440/first-viewport.jpg`, `vensland.lt/paslaugos/390/first-viewport.jpg`.
5. **Same hero on every page.** No service or place is shown. `vensland.lt/paslaugos__vejos-irengimas/1440/first-viewport.jpg`, `vensland.lt/vilnius/1440/first-viewport.jpg`.
6. **Corporate headshot as the only person.** No one is shown working. Used large on home and as a round crop on Kontaktai. `vensland.lt/paslaugos/1440/segment-000000.jpg` y≈1170–1690.
7. **Too many devices** (section 3). The grass edge is the main offender. `vensland.lt/paslaugos/1440/segment-002400.jpg` y≈1490, y≈2230.
8. **One action, many labels.** `Gauti kainą`, `Pradėti nuo 1 žingsnio`, `Sužinoti kainą`, `Aptarti darbą`, and possibly `Susisiekti` (targets not checked). Same fault as Puetz.
9. **System text shown to customers.** `Saugumo patikra bus įkelta…` remains on the new form, and the modal shows `Įkeliama saugumo patikra…`. `vensland.lt/paslaugos/1440/first-viewport.jpg` y≈755; `vensland.lt/interactions/390/quote-open.jpg`.
10. **Type defects in heavy caps.**
    - Mid-word break `EKSKAVATORIAU / S`, confirmed: `vensland.lt/paslaugos__mini-ekskavatoriaus-paslaugos/390/segment-000000.jpg` y≈260.
    - The `Į` tail nearly touches the `Ž` caron at 1.15 leading: `vensland.lt/paslaugos/1440/first-viewport.jpg` y≈345.
    - Uppercase and sentence case are mixed across H2s (`ATSILIEPIMAI` vs `Ką atliekame`).
11. **Tile titles on busy photo areas.** `VEJOS AERAVIMAS`, `TREŠIMAS IR` and `MINI` sit on the machines. `vensland.lt/home/390/segment-002400.jpg` y≈1900; `vensland.lt/home/390/segment-004800.jpg` y≈600, y≈1705.
12. **Public sitemap lists a dead, email-derived URL.** `wp-sitemap-users-1.xml` lists `/author/tomas-venslovas24gmail-com/`, which returns 404. The slug exposes what looks like an email address. The default WordPress sitemap runs beside the custom one (ledger). Check ArbCut does not repeat this.
13. **Kontaktai mobile: logo tab detached (new; confirm live).** The tab sits at the very top of the viewport over the utility strip, and the form further down has none. `vensland.lt/kontaktai/390/first-viewport.jpg` y≈0–15; `vensland.lt/kontaktai/390/segment-003376.jpg` y≈0. It appears in the first viewport, so hiding fixed UI does not explain it.
14. **No services hub.** `/paslaugos/` repeats home. Ten service pages have no index page.
15. **Identical proof on every locality.** Same photos and reviews, so nothing shows work in the named place.
16. **Polished images stand in where real ones are missing (inference).** The two glossy tiles (`LAISTYMO SISTEMOS`, `TREŠIMAS`) are the two services with 0 job photos on their own pages. I cannot verify the source of those images. `vensland.lt/paslaugos/390/segment-003376.jpg`.
17. **Spacing failure.** `Dažniausi klausimai` sits directly under the sidebar. `vensland.lt/paslaugos__laistymo-sistemos/390/segment-002400.jpg` y≈620.
18. **One-question FAQ with a full section heading.** All service pages viewed.
19. **Stray H3 in the price notes.** `Ar pagrindo paruošimas įskaičiuotas?` sits between small print. Dialog H2s also pollute the outline (`record`).
20. **Mobile gallery viewer wastes the screen.** A landscape photo fills 203 of 844 px, with no caption visible (`followup.json`). `vensland.lt/interactions/390/gallery-delayed.jpg`.
21. **360 is tight.** The fifth rating star touches the dialog edge, and hero ticks wrap to two lines. `vensland.lt/interactions/360/rating-open.jpg`, `vensland.lt/interactions/360/initial.jpg`.
22. **Heavy dock.** Black container with two buttons. It merges with dark sections and is loud on white. `vensland.lt/interactions/390/faq-open.jpg`.

### Corrections to prior notes
- **Dock:** `v4-vensland-detail.md` says it is "always present". It is hidden at load (`v3-dock is-hidden`, absent from first viewports) and appears once scrolled. I did not determine the trigger.
- **Sitemap:** `vensland-baseline.md` says 22 URLs and no standalone contact page. The ledger now shows 23 in `sitemap.xml`, including `/kontaktai/`.
- **`Dažni darbai` and hero darkening:** see section 2 and Avoid 4.
- **Validation bubble:** the English `Please fill out this field.` is the browser's own message, so its language should follow the browser locale. I did not test a Lithuanian locale.

## 5. Candidate key screenshots
1. `vensland.lt/kontaktai/1440/first-viewport.jpg`: best composition, cards crossing the edge, photo readable.
2. `vensland.lt/paslaugos/1440/first-viewport.jpg`: compact form inside the first viewport; also shows the form covering the house.
3. `vensland.lt/paslaugos/1440/segment-004800.jpg`: real gallery beside the over-weighted rating panel.
4. `vensland.lt/home/390/segment-009600.jpg`: mobile price objects, plus the rating panel taking most of a screen.
5. `vensland.lt/paslaugos__mini-ekskavatoriaus-paslaugos/390/segment-000000.jpg`: mid-word H1 break.
6. `vensland.lt/kontaktai/390/first-viewport.jpg`: detached logo tab.

## 6. Remaining work
- Recapture the 24 legacy pages at both widths to settle Trap 1 (lead or capture agent).
- Full-size views still owed: `trakai/1440`, `riese/1440` (4 of 5 segments), `laistymo` and `mini` at 1440, `privatumo-politika`, `aciu`, both 404s, and the 390 first viewports listed in section 1.
- Rerun the interaction pass on the current site, including form step 2 without submitting, and confirm Avoid 13 live.
