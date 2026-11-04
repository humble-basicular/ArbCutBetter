# ArbCut v4: VensLand detailed comparison (incomplete)

Stage v4-vensland-detail, 2026-11-04. Owner Claude2 Opus 5.5. Research only: no website edits, no forms submitted, no paid APIs.

## Status: incomplete, three budget stops, retries exhausted
Pass 1 (`21ceb32`) stopped at 513,293 against 450,000. Pass 2 (`0a69615`) stopped at 762,498 against 650,000. Pass 3 stopped at 555,047 against 400,000, after finishing all service panels but before any live interaction. **The 22-route objective is not complete.**

| State | Pairs of 44 |
|---|---|
| Viewed by this agent, whole capture | 21: `/` at 1440; all 10 service routes at both widths |
| Viewed jointly: this agent y0-12000, lead the tail | 1: `/` at 390 |
| Not viewed | 22: 10 locality routes and `/privatumo-politika/`, at both widths |

"Viewed" never means every pixel. See seam limits below, so no route here is claimed as a full-page visual. Locality findings are text-only.

**Live interactions: none observed.** T3 preview opened `https://vensland.lt/` successfully in background tab `tab_2_d36ed8f1-d952-42a4-88b7-a5f8651dabf1` (1280x800, correct title). The next call, a resize to 390x844, was interrupted with no result, and the budget stop came before a retry. No menu, gallery, disclosure or FAQ click was made. That is one interrupted call, not a documented T3 failure, so no fallback was used. No forms were submitted.

## Coverage ledger
Source: `/tmp/arbcut-v4-study/capture-manifest.json`, viewports 1440x900 and 390x900, 800 px scroll step. All 22 routes returned HTTP 200 and match the 22 `<loc>` entries in `https://vensland.lt/sitemap.xml`. All chunk files exist on disk.

| Route | 1440 capture | 1440 inspected | 390 capture | 390 inspected |
|---|---|---|---|---|
| `/` | 11401 px, 15 chunks | Viewed, 8 native panels (`p0` also viewed by lead) | 17510 px, 22 chunks | y0-12000 this agent; tail (`home-390-s2-y12000`) viewed by lead; bar seams apply |
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
| `/paslaugos/vejos-irengimas/` | 3953 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 6478 px, 9 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/laistymo-sistemos/` | 3544 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 5860 px, 8 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/vejos-aeravimas-core/` | 3845 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 6381 px, 8 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/vejos-skarifikavimas/` | 3939 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 6122 px, 8 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/vejos-lyginimas-levelingas/` | 3912 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 6355 px, 8 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/vejos-tresimas-purskimas/` | 3585 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 5848 px, 8 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/zoles-pjovimas/` | 3939 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 6021 px, 8 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/apleistu-sklypu-tvarkymas/` | 3939 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 6146 px, 8 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/mini-ekskavatoriaus-paslaugos/` | 3980 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 6269 px, 8 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/gyvatvoriu-sodinimas-prieziura/` | 3980 px, 5 chunks | Viewed, 2 panels at 0.75 scale | 6268 px, 8 chunks | Viewed, 1 native 4-column sheet; seams apply |
| `/privatumo-politika/` | 2087 px, 3 chunks | Not viewed | 3227 px, 5 chunks | Not viewed |

Outside the sitemap, HTML only: `/aciu/` (200, `noindex,follow`, also disallowed in `robots.txt`) and a nonexistent URL (404, `noindex,nofollow`).

Duplicate manifest records exist at 1440 for `/lentvaris/`, `/maisiagala/` and `/nemencine/` (8-9 chunk partial runs). The stitcher used the 15-chunk record.

## Method notes
- Stitched pages and panels: `/tmp/arbcut-v4-vensland-detail/stitched/`, `panels/`. Scripts `stitch2.py`, `panel.py`, `diff.py`. Route HTML: `html/`.
- Chunks overlap by only 100 px, which the fixed header covers, so overlap cannot validate seams. The stitcher pastes in reverse order and clamps the last chunk to pageHeight minus 900.
- Pass 1 mobile panels (`/`) show the fixed action bar about every 800 px, because earlier chunks were pasted on top. That is an artefact, not page content, and the bar covers real content at each seam.
- Pass 2 mobile sheets paste forward, so the fixed header repeats about every 800 px instead. Chunk comparison shows a fixed header at the top and a fixed bar at the bottom of each 900 px chunk, so a strip of roughly 45 px per seam (estimate) is hidden in both chunks. Text clipped at those seams was not recovered.
- Service 1440 panels are scaled to 0.75. On `/paslaugos/vejos-irengimas/`, `/vejos-skarifikavimas/`, `/vejos-lyginimas-levelingas/`, `/zoles-pjovimas/` and `/apleistu-sklypu-tvarkymas/`, the single FAQ row is clipped or blank at a chunk seam. This is likely a capture or reveal artefact, unverified live. All five rows read normally at 390.
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

## Homepage `/` at 390 (y0-12000 by this agent, tail by lead)
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

Tail, y12000-17510, viewed by the lead rather than this agent: prices, FAQ with contact-photo card, area links, map consent, final CTA and the full mobile footer with service and locality links. Fixed-bar seams apply there too, so this is not a complete tail read.

Fixed bar: black rounded container with `Skambinti` and `Gauti kainą`, always present. It keeps both actions in reach, but its heavy outline is visually loud and overlaps content while scrolling.

## Service routes (10 of 10 viewed, seams apply)
Shared pattern, seen on all 10:
- **Hero:** the same darkened house photo as the homepage on every route, so nothing shows the service itself. H1 is all white caps, without the homepage lime. The full form stays in the hero and sets its height.
- **Header:** nav changes to `Apie paslaugą`, `Paslaugos`, `Kur dirbame`. Useful page-level navigation.
- **Hero base:** a thin green grass edge, then white. No trust band, reviews or prices anywhere on these pages, so the service pages carry almost no proof.
- **Body at 1440:** breadcrumb, then two H2 + short paragraph blocks on the left and a tinted sidebar on the right (`Darbų apimtis`, `Ką pasiruošti užklausai`, `Nuo ko priklauso kaina`, `Aptarti darbą`). The sidebar is taller, leaving a large empty area under the left text.
- **Photos:** 0-2 small captioned job photos, about 320 px wide at 1440, left aligned, with the right side empty. The strongest asset is the smallest thing on the page.
- **FAQ:** one question under a large heading. Heavy treatment for one row.
- **Links:** `Kitos paslaugos` is a 3x3 grid of plain text cards with keyword anchors, then `Visos paslaugos`, then the full footer. Strong crawl path, visually flat.
- **390:** order holds. Hero and form take about 1,700 px before the breadcrumb, so body content starts on about the third screen. The 9 link cards take about 1,000 px. Sidebar stacks after the text and reads well.

| Route | Widths viewed | H1 at 1440 | Photos | Route-specific note |
|---|---|---|---|---|
| `/paslaugos/vejos-irengimas/` | both | 3 lines | 2: turf rolls, prepared base by house | Best photo pair: shows real ground work |
| `/paslaugos/laistymo-sistemos/` | both | 4 lines | 0 | No irrigation image at all. `Dažniausi klausimai` sits tight under the sidebar |
| `/paslaugos/vejos-aeravimas-core/` | both | 4 lines | 2: aerator, both same machine | Real kit gives credibility; one scope item makes the sidebar sparse |
| `/paslaugos/vejos-skarifikavimas/` | both | 4 lines, `VEJOS` alone | 1: red scarifier | Single photo leaves most of the row blank |
| `/paslaugos/vejos-lyginimas-levelingas/` | both | 3 lines | 2: sand cart, sanded lawn | Clear process evidence, but no before/after pairing |
| `/paslaugos/vejos-tresimas-purskimas/` | both | 4 lines, `Ę Š Ž Ų` in caps | 0 | Same tight heading as irrigation. H1 drops `Vilniaus rajone` |
| `/paslaugos/zoles-pjovimas/` | both | Viewed, 2 panels at 0.75 scale | 1: striped lawn | Viewed, 1 native 4-column sheet; seams apply |
| `/paslaugos/apleistu-sklypu-tvarkymas/` | both | 4 lines | 1: cleared site by fence | Honest mid-job photo; a before/after would prove more. 6 lines at 390 |
| `/paslaugos/mini-ekskavatoriaus-paslaugos/` | both | 5 lines | 1: excavator on prepared ground | **Defect at 390:** H1 breaks mid-word, `EKSKAVATORIAU / S PASLAUGOS` |
| `/paslaugos/gyvatvoriu-sodinimas-prieziura/` | both | 5 lines | 1: planted hedge | Longest H1, with `bei` instead of `ir`; dull overcast photo |

For ArbCut's longest Lithuanian service words, test heavy display type at 390 before approval: VensLand's wide face overflows at this size.

To beat this: make the service photo the visual lead in each hero and enlarge the job photos, within the `bb63bd8` sequence. Avoid the empty left column, and stop one-question FAQs looking like full sections.

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

**`/privatumo-politika/`.** H1 plus 6 H2 sections, indexable, 2 images.

**SEO, `/`.** `index,follow`, self-canonical, `LocalBusiness` + `WebSite` schema, one H1. H2s include form and rating-dialog headings (`Gaukite kainą` twice, `Kaip įvertintumėte mūsų darbą?`, `Padėkite mums tobulėti`), which add noise to the outline.

## Reusable rules
Homepage evidence only, written in pass 1, with rule 3 corrected in pass 2. All apply to the visual layer; `bb63bd8` copy, order, SEO and function stay as they are.

Keep, and do better:
1. Put phone and quote actions in the header on every width, plus a fixed mobile bar, but make the bar lighter than VensLand's black outline.
2. Layer the form as an object on the hero; a brand tab breaking the card edge is cheap and effective.
3. Corrected: do **not** add a post-hero trust band. `bb63bd8` order forbids a new section there. Real facts (5,0 and 123 on Paslaugos.lt, 15 years, 20 m lift, LRT) may only be styled as badges inside sections that already exist, in their existing sequence.
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
Exact remaining scope:
- 10 locality routes at 1440 and 390 (20 pairs): stitches exist in `/tmp/arbcut-v4-vensland-detail/stitched/`, no panels. Findings are text-only.
- `/privatumo-politika/` at 1440 and 390: stitches exist, no panels.
- `/aciu/` and the 404 page: HTML only, never captured or viewed.
- All live interactions: mobile menu, gallery dialog (120 photos), `Ko reikia kainai įvertinti?` disclosure, FAQ open state and motion. Also nav dropdowns, form validation without submit, file upload UI, review carousel, map consent, rating dialog, hovers, scroll or entrance motion.
- Seam strips listed under Method notes, on all viewed mobile pages, and the five clipped FAQ rows at 1440.

Other limits:
- No images were found missing on the viewed routes. Other routes were not checked for lazy-load gaps.
- Font names are masked (`V3 Head`, `V3 Sans`); actual families were not identified.
- Y positions, seam strip size and the 93% figure are estimates.
- No direct side-by-side with ArbCut was done here. The lead owns the synthesis.

`/tmp` evidence may vanish.
