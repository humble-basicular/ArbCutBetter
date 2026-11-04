# ArbCut v4: VensLand detailed comparison (incomplete)

Stage v4-vensland-detail, 2026-11-04. Owner Claude2 Opus 5.5. Research only: no website edits, no forms submitted, no paid APIs.

## Status: stopped early
The soft input budget was exceeded (513,293 against 450,000), so this pass stopped before the planned scope. **Visual findings cover the homepage only.** Of 44 route/viewport pairs, 1 was viewed in full, 1 in part, and 42 were not viewed in this pass. Findings on the other 21 routes come from HTML and text comparison, and are labelled that way. Do not treat them as visual evidence.

T3 preview and computer use were not attempted, so no interaction, animation or hover state has been observed here. No capture failed; the work simply did not reach that step.

## Coverage ledger
Source: `/tmp/arbcut-v4-study/capture-manifest.json`, viewports 1440x900 and 390x900, 800 px scroll step. All 22 routes returned HTTP 200 and match the 22 `<loc>` entries in `https://vensland.lt/sitemap.xml`. All chunk files exist on disk.

| Route | 1440 capture | 1440 inspected | 390 capture | 390 inspected |
|---|---|---|---|---|
| `/` | 11401 px, 15 chunks | **Viewed in full**, 8 panels at native width | 17510 px, 22 chunks | **Partly viewed**, y0-12000 of 17510; y12000+ not viewed |
| `/vilnius/` | 11971 px, 15 chunks | Not viewed | 18347 px, 23 chunks | Not viewed |
| `/avizieniai/` | 11927 px, 15 chunks | Not viewed | 18249 px, 23 chunks | Not viewed |
| `/riese/` | 11927 px, 15 chunks | Not viewed | 18237 px, 23 chunks | Not viewed |
| `/pagiriai/` | 11927 px, 15 chunks | Not viewed | 18221 px, 23 chunks | Not viewed |
| `/rudamina/` | 11927 px, 15 chunks | Not viewed | 18193 px, 23 chunks | Not viewed |
| `/juodsiliai/` | 11927 px, 15 chunks | Not viewed | 18193 px, 23 chunks | Not viewed |
| `/nemencine/` | 11927 px, 15 chunks | Not viewed | 18253 px, 23 chunks | Not viewed |
| `/lentvaris/` | 11927 px, 15 chunks | Not viewed | 18193 px, 23 chunks | Not viewed |
| `/trakai/` | 11927 px, 15 chunks | Not viewed | 18193 px, 23 chunks | Not viewed |
| `/maisiagala/` | 11927 px, 15 chunks | Not viewed | 18225 px, 23 chunks | Not viewed |
| `/paslaugos/vejos-irengimas/` | 3953 px, 5 chunks | Not viewed | 6478 px, 9 chunks | Not viewed |
| `/paslaugos/laistymo-sistemos/` | 3544 px, 5 chunks | Not viewed | 5860 px, 8 chunks | Not viewed |
| `/paslaugos/vejos-aeravimas-core/` | 3845 px, 5 chunks | Not viewed | 6381 px, 8 chunks | Not viewed |
| `/paslaugos/vejos-skarifikavimas/` | 3939 px, 5 chunks | Not viewed | 6122 px, 8 chunks | Not viewed |
| `/paslaugos/vejos-lyginimas-levelingas/` | 3912 px, 5 chunks | Not viewed | 6355 px, 8 chunks | Not viewed |
| `/paslaugos/vejos-tresimas-purskimas/` | 3585 px, 5 chunks | Not viewed | 5848 px, 8 chunks | Not viewed |
| `/paslaugos/zoles-pjovimas/` | 3939 px, 5 chunks | Not viewed | 6021 px, 8 chunks | Not viewed |
| `/paslaugos/apleistu-sklypu-tvarkymas/` | 3939 px, 5 chunks | Not viewed | 6146 px, 8 chunks | Not viewed |
| `/paslaugos/mini-ekskavatoriaus-paslaugos/` | 3980 px, 5 chunks | Not viewed | 6269 px, 8 chunks | Not viewed |
| `/paslaugos/gyvatvoriu-sodinimas-prieziura/` | 3980 px, 5 chunks | Not viewed | 6268 px, 8 chunks | Not viewed |
| `/privatumo-politika/` | 2087 px, 3 chunks | Not viewed | 3227 px, 5 chunks | Not viewed |

Outside the sitemap, HTML only: `/aciu/` (200, `noindex,follow`, also disallowed in `robots.txt`) and a nonexistent URL (404, `noindex,nofollow`).

Duplicate manifest records exist at 1440 for `/lentvaris/`, `/maisiagala/` and `/nemencine/` (8-9 chunk partial runs). The stitcher used the 15-chunk record.

## Method notes
- Stitched pages and panels: `/tmp/arbcut-v4-vensland-detail/stitched/`, `panels/`. Scripts `stitch2.py`, `panel.py`, `diff.py`. Route HTML: `html/`.
- Chunks overlap by only 100 px, which the fixed header covers, so overlap cannot validate seams. The stitcher pastes in reverse order and clamps the last chunk to pageHeight minus 900.
- In the mobile panels the bottom action bar repeats about every 800 px. That is a capture artefact of a fixed element, not page content.
- The first overlap mismatch check was invalid for the same reason and is not used as evidence.
- Pixel diff against `/vilnius/` is not usable: that page is 44 px taller at 1440, so everything below the offset differs. Clone claims below rest on text diff of live HTML.

## Homepage `/` at 1440 (viewed in full)
y positions are approximate, read from panels.

| Section, y | Hierarchy and type | Space and photo | Brand device | Assessment |
|---|---|---|---|---|
| Utility bar + header, 0-125 | Black strip with area and phone; nav of 5 links; phone block; green CTA | Compact and clear | Tree logo at usable size | Strong. Phone and CTA are readable at once |
| Hero, 125-1140 | Very wide heavy caps, 4 lines, last two lime; location pill above; sub copy; 2 buttons; 3 ticks | House and garden darkened until the photo is mood rather than subject | Logo tab sits on top of the form card | Clear offer, but the photo does no selling. Heading breaks poorly (`VILNIUJE IR / RAJONE`) |
| Form card, same band | White card, caps title, 3 fields, upload, privacy, CTA | About 840 px tall, so it dictates hero height | Green top edge plus logo tab | Best layered moment on the page. The line `Saugumo patikra bus įkelta pradėjus pildyti formą...` is system text shown to customers |
| Trust band, 1140-1315 | 4 icon + caps pairs | Solid green | Jagged grass edge top and bottom | Facts land quickly (`5.0 ĮVERTINIMAS`, `10 atsiliepimų Paslaugos.lt`). The grass edge is literal and is reused repeatedly |
| About, 1385-2050 | Eyebrow, big title, 2 paragraphs, 3 ticks, source chip | Owner portrait with hatched offset block and overlapping name pill | Stripe hatch; double-slash eyebrow mark | A real named person helps. It is a corporate headshot in a suit, with no link to lawn work |
| Services, 2050-3990 | 3-column grid of 10 photo tiles + green phone tile | Tall tiles, real work photos mixed with a polished garden image; dark bottom gradient | Green arrow disc on each tile | Scannable. Title sits on busy photo on some tiles (`VEJOS AERAVIMAS`, `TREŠIMAS`). All tiles share one weight, so no service leads. Two empty grid slots remain bottom right |
| Process, 4105-4850 | Centred title, 4 numbered circles on white arrow plates | Black band, hatch top right | Arrow plates | Most distinctive layout on the page, though it reads as a stock infographic |
| Work, 4850-5800 | Title, one large image + grid, then `Žiūrėti visas nuotraukas (120)` | Real job photos, one large lead image gives rhythm | None | Most convincing section. 120 photos is the strongest proof on the site, yet it sits low |
| Reviews, 5892-6982 | Black tag, caps title with lime rule, 3 white cards, arrows, black rating CTA box | Darkened site photo background; sand texture dominates the lower half | Gold stars and gold button are a new colour | White cards on photo read well. The large CTA box outweighs the reviews themselves |
| Prices, 6982-8133 | 2-column rows, left green rule, heavy green price, VAT detail in small grey | Dense but ordered, black CTA strip below | Left green rule | Public prices build trust. VAT breakdown is very small, and wraps awkwardly in several rows |
| FAQ, 8133-8928 | Photo left with green phone overlay, accordion right | Good overlap of contact card on photo; first answer open | None | Clean. Phone in a photo card is a reusable move |
| Areas, 8928-10290 | Title, paragraph, 10 stacked link rows; map consent panel right | Map panel is a black box until opted in; large empty area above it | Pin discs | Strong SEO links, weak visually. Long list against a floating black box looks unbalanced |
| Final CTA, 10290-10764 | Centred caps title, 2 buttons | House photo washed in a green gradient, with the photo barely visible | Grass edge again | Clear but generic |
| Footer, 10764-11401 | 4 columns: brand, services, areas, contact | Black, ordered | Logo on white plate | Complete crawl path to all 20 service and area routes. Credit reads `Programavimas: jarvisweb.lt` |

## Homepage `/` at 390 (y0-12000 viewed)
| Band, y | Observation |
|---|---|
| 0-110 | Area strip, logo, green phone disc, black menu button. Compact and well sized |
| 110-830 | Heading in 5 lines, full-width stacked buttons, ticks. The call action is on the first screen; the photo is almost invisible |
| 830-1730 | Full form sits before all proof, about 900 px, pushing everything else down. Confirms the earlier note in `/tmp/arbcut-v4-study/design-analysis.md` line 54 |
| 1800-2110 | Trust band stacks to 4 rows and stays readable |
| 2150-3250 | Portrait crop holds up; long paragraph text |
| 3300-7450 | Services run single-column, about 4,150 px, around 5 phone screens of same-shaped tiles. Biggest mobile weakness |
| 7500-8380 | Process turns into a vertical list of circle + arrow plate. The best responsive adaptation seen |
| 8400-9500 | Work: one lead image, then 2-column grid |
| 9620-10800 | Reviews become a one-card carousel. The rating box takes nearly a screen |
| 10900-12000+ | Prices become stacked rows; each row is tall because VAT detail wraps, so it is long but legible |

Fixed bar: black rounded container with `Skambinti` and `Gauti kainą`, always present. It keeps both actions in reach, but its heavy outline is visually loud and overlaps content while scrolling.

## Other routes (HTML and text only, not visual)
**Area pages (10 routes).** Each differs from `/vilnius/` by only 23-24 of about 353 text lines. Changes: area name, neighbour list, one local paragraph, `Dažni darbai` lines. Against `/`, `/vilnius/` changes 21 lines and adds a local section (`Vilnius ir apylinkės`). Each has its own title, description, canonical and `BreadcrumbList`. The H2 order was checked on `/vilnius/` and `/avizieniai/` and matches the homepage after the local section.

| Route | Neighbour line in page text |
|---|---|
| `/vilnius/` | Vilnius · Pilaitė · Pašilaičiai · Fabijoniškės |
| `/avizieniai/` | Avižieniai · Sudervė · Bendoriai · Riešė |
| `/riese/` | Riešė · Didžioji Riešė · Bukiškis · Lavoriškės |
| `/pagiriai/` | Pagiriai · Rudamina · Juodšiliai · Gineitiškės |
| `/rudamina/` | Rudamina · Pagiriai · Kalveliai |
| `/juodsiliai/` | Juodšiliai · Valčiūnai · Pagiriai |
| `/nemencine/` | Nemenčinė · Bezdonys · Kalviai |
| `/lentvaris/` | Lentvaris · Grigiškės · Trakų Vokė |
| `/trakai/` | Trakai · Lentvaris · Rykantai |
| `/maisiagala/` | Maišiagala · Zujūnai · Avižieniai |

**Service pages (10 routes).** Only `/paslaugos/vejos-irengimas/` and `/paslaugos/zoles-pjovimas/` were parsed. Both follow: H1, form, service-specific H2s, `Darbų apimtis`, `Ką pasiruošti užklausai`, `Nuo ko priklauso kaina`, FAQ, `Kitos paslaugos`. Both add `Service` schema to `LocalBusiness` and `BreadcrumbList`. They carry only 6-7 `<img>` tags, against 149 on `/`, `/vilnius/` and `/avizieniai/`. That is consistent with the earlier "thin set" note, but it has not been checked visually, and the other 8 service pages are unparsed beyond their download size (about 121-122 KB each).

**`/privatumo-politika/`.** H1 plus 6 H2 sections, indexable, 2 images.

**SEO, `/`.** `index,follow`, self-canonical, `LocalBusiness` + `WebSite` schema, one H1. H2s include form and rating-dialog headings (`Gaukite kainą` twice, `Kaip įvertintumėte mūsų darbą?`, `Padėkite mums tobulėti`), which add noise to the outline.

## Reusable rules
Homepage evidence only, unless stated. All apply to the visual layer; `bb63bd8` copy, order, SEO and function stay as they are.

Keep, and do better:
1. Put phone and quote actions in the header on every width, plus a fixed mobile bar, but make the bar lighter than VensLand's black outline.
2. Layer the form as an object on the hero; a brand tab breaking the card edge is cheap and effective.
3. Turn real facts into a band right after the hero. For ArbCut only 5,0 and 123 on Paslaugos.lt, 15 years, 20 m lift and LRT qualify.
4. Use one large lead image in the job gallery, and show the photo count.
5. Attach contact to a photo (FAQ card) rather than adding another CTA band.
6. Rebuild steps for mobile as a vertical sequence rather than shrinking the desktop row.
7. Keep a footer that links every service and area.

Beat:
1. Keep hero photos visible. VensLand's overlay removes the subject; ArbCut needs tree work to be seen.
2. Show the owner or crew working, not a studio-style headshot.
3. Use one signature edge sparingly. VensLand repeats its grass edge on most section joins until it becomes wallpaper.
4. Give services hierarchy, with a lead service and varied tile sizes, and shorten the mobile run. VensLand spends about 4,150 px on equal tiles.
5. Control heading breaks, and check Lithuanian diacritics. `Į`, `Ž` and `Ū` in heavy caps collide with neighbouring lines at VensLand's tight leading.
6. Keep text off busy photo areas, or give it a real panel rather than relying on a gradient.
7. Stop reviews CTA boxes outweighing the reviews.
8. Avoid extra one-off colours: the gold appears only in the review box.
9. On mobile, test proof before the full form, or a shorter form entry, without changing the `bb63bd8` order unless the user approves it. This is a question for the user, not a decision.
10. Never show system messages such as the security-check notice to customers as body copy.
11. If area pages are reused, vary at least the local section visually. Text is 93% shared at VensLand (about 23 of 353 lines changed); visual sameness is unverified.

## Explicit gaps
- 42 of 44 route/viewport pairs not viewed; `/` at 390 not viewed from y12000 (rest of prices, FAQ, areas, final CTA, footer).
- Service page layouts, their photo use and responsive behaviour are unverified.
- `/aciu/` and the 404 page have not been viewed.
- Not observed: mobile menu, nav dropdowns, form validation, file upload, `Ko reikia kainai įvertinti?` disclosure, gallery dialog (120 photos), review carousel, FAQ animation, map consent, rating dialog, hovers, scroll or entrance motion.
- No images were found missing on the homepage. Other routes were not checked for lazy-load gaps.
- Font names are masked (`V3 Head`, `V3 Sans`); actual families were not identified.
- Y positions and the 93% figure are estimates from panels and line counts.
- No direct side-by-side with ArbCut was done here. The lead owns the synthesis.

## Next
Lead decides whether to fund a second pass. Cheapest order: `/` at 390 from y12000, one service page at both widths, `/vilnius/` local section, then T3 preview for the mobile menu, gallery and form disclosure. Panel tooling is ready, but `/tmp` may vanish.
