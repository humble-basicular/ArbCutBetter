# ArbCut design brain (v4) — rules, system and build spec

Date: 2026-11-06. Author: Claude Opus 5.5 (lead). Status: **written; not yet user-reviewed.**
Inputs: [`v4-learnings.md`](v4-learnings.md) (user rejections, §2), [`v4-preserved-content-contract.md`](v4-preserved-content-contract.md) (binding), [`v4-reference-study.md`](v4-reference-study.md) + its CLOSURE table (evidence and gaps), the per-site `v4-reference-study/bulk-findings-*.md`, and the agency brain `~/WebAgency Biz/brains/04-websites.md` (read only; not edited).

Confidence: every rule below is a **design judgement** from screenshots actually viewed. No reference site's conversion rate was measured. Where a rule rests on the user's own words, it is marked **[USER]**; those win over any reference.

The document has three parts:
- **Part A:** reusable rules for any home-service client site, agency-wide.
- **Part B:** ArbCut-specific decisions: palette, type, devices, imagery.
- **Part C:** the build spec per page type, with acceptance checks.

---

## Part A — Reusable home-service rules (agency-wide)

### A1. What actually made the strong references feel like real companies
1. **A real person in the hero or in a dedicated owner band.** Puetz's owner and dog, HomeFront's signed owner statement, Genz's uniformed crew, Northface's fleet photos and True Air's crew all show this. It was the most distinctive section on every strong site. Abstract backgrounds never were. (`v4-learnings.md` §3; `bulk-findings-homefrontexteriorsmn.com.md` Copy 5; `bulk-findings-trueairconditioningandheating.com.md` Copy 1)
2. **One colour system repeated everywhere, plus at most two brand devices.** Genz and Smock prove that repetition creates a brand. Thelen and Betono (5 devices) show that a third device turns into noise. (`bulk-findings-callthelen.com.md` Avoid 5; `bulk-findings-betonogaminiai.lt.md` Avoid 5)
3. **Proof uses the source's own official mark, beside the action.** Examples: the Google G on review cards (Genz, Thelen, Northface), official marks under the submit button (True Air) and a rating dock under the form (Northface). Home-made text badges read as self-awarded. **[USER]** "the more official it looks, the more trust".
4. **Unequal hierarchy.** True Air uses one tall lead service with a wide second tile, instead of six equal cards. Equal-weight card runs are the commonest mobile defect (Veterans, Glassperts, VensLand at 4,150 px).
5. **A page-specific composition inside one shared vocabulary.** Puetz keeps its type, colour and photo treatment across pages, but each page type lays out its own job. Repeating the homepage skeleton on every page is not what makes a site coherent. (`v4-reference-study.md` provisional rules table)

### A2. Defects that recur across references — never ship these
- Wrong-locality copy on a locality page (True Air, Puetz Faribault/Albert Lea, Thelen). Guard: every town page must render its own town name in its H1, intro and FAQ. Check this at build time.
- Rating numbers that disagree between widgets (Puetz 363 vs 375, True Air 4.5 vs 4.9, Betono 15 vs 21 years). Guard: render every number from one data source and never type a number into markup.
- The mobile footer dropping the service and locality link columns (Northface, Genz, True Air). Guard: the same footer links at every width; collapse them into accordions if needed, but never `display:none`.
- Floating chat or CTA elements covering a form submit (Puetz). Guard: the mobile action bar hides while any field has focus (the existing `.is-typing` behaviour).
- Darkened hero photos that hide their subject (VensLand, Betono, Thelen). Guard: at most a 35% scrim, and only behind the text column.
- The same promotional tail (resources + map + towns + CTA + footer) on every page, longer than the content on short pages (Thelen ≈2,500 px). Guard: inner pages get one CTA band and the footer, nothing more.
- Empty or default-widget pages (Thelen `/services`), lorem ipsum, placeholder phone numbers, grey "image loading" panels.
- Compressed multi-column tables at 390 (Puetz deck comparison). Guard: rows become cards at ≤600 px, as in Betono's price cards (`bulk-findings-betonogaminiai.lt.md` Copy 1).
- Emoji, SVG, icon-font or Unicode-glyph pictograms. **[USER]** "dont even ever use svgs for pictograms".
- Invented proof copy, stamps and seals. **[USER]** "nesąmonė rašyti LRT rašė apie Mantą… slopas".
- One action carrying many labels (Betono 6, VensLand). Guard: one label per action across the site.

### A3. Layout patterns worth reusing
| Pattern | Use | Evidence |
|---|---|---|
| Form/proof card crossing the hero's bottom edge | Once per page, max | Hook article 6 of 10 heroes; HomeFront home y640–740; VensLand kontaktai |
| Descriptive small H1 (service + town) with a larger brand line | Every page, within existing headings | Northface 155 locality pages; Puetz |
| Rating dock: official logo + number + count, at the base of the form | Home hero, quote dialog | Northface; True Air ductwork |
| Price rows → mobile cards, price top right, full-width action | Prices, service sidebar | Betono suliniu-ziedai/390 |
| Lead gallery image + "Žiūrėti visas nuotraukas (N)" | Gallery, home moments | VensLand paslaugos/1440 |
| Service-specific "what to send" prompts beside the form | Service pages | VensLand mini-ekskavatoriaus y420–890 |
| Steps as a horizontal row on desktop → vertical sequence on mobile | Service "Kaip atliekame" | Thelen home/390; Genz |
| Town list beside a map, as readable link columns | Home areas, contacts | Genz t18; GreenTek; Thelen t10 |
| Legal details (company code, address) in the footer | Footer | VensLand Rekvizitai; Betono footer |
| Useful 404: status text, call action, services link | 404 | Betono, Northface |

### A4. Mobile acceptance (applies to every client)
360 and 390 px: `scrollWidth == innerWidth`, the longest Lithuanian word in display type does not break mid-word (VensLand `EKSKAVATORIAU/S`), and header + action bar together stay ≤ 140 px (Betono 124). Phone and quote are reachable in the first screen. Reviews are not hidden on mobile; use load-more instead.

### A5. Process rule **[USER]**
The user judges built pages at true size, not mockups. Check every element against A2 before showing anything.

---

## Part B — ArbCut decisions

### B1. Concept in one line
"The man in the orange shirt in the tree." ArbCut's identity is Mantas himself (real photos, orange work shirt), his 20 m lift, ropes and real cut timber. The site is a bright, clean photographic surface with spruce structure and one orange accent for actions. No invented decoration.

### B2. Rejected — never reintroduce **[USER]**
- v2: cream paper, Source Serif, tiny labels, numbered ledgers.
- v3 (`bb63bd8` visuals): dark forest everywhere, Oswald capitals everywhere, rust buttons, flat stacked rectangles.
- v4 mockup: round text stamps, the Unicode ✆, orange SaaS pill buttons with soft orange shadows, an arch frame, the "rašė apie Mantą" stamp and the "savas bokštelis" invented copy.
- Current shield/leaf logo: "kinda bland". It gets replaced by one of the three Codex options (`public/assets/arbcut-v4-brand/`, pending) once the user picks.

### B3. Palette (tokens)
| Token | Value | Use |
|---|---|---|
| `--spruce-900` | `#0F2A20` | Footer, the one dark band per page, text on light at large sizes |
| `--spruce-700` | `#1B4634` | Structure, headings accent, header on scroll |
| `--spruce-100` | `#E7EFEA` | Quiet alternate section surface |
| `--paper` | `#FFFFFF` | Main reading surface (white, **not cream**) |
| `--stone` | `#F3F4F1` | Cards and form fields on white |
| `--ink` | `#14201A` | Body text |
| `--ink-2` | `#4A564F` | Secondary text (≥ 7:1 on white) |
| `--orange` | `#E2611B` | **Actions only**: primary buttons, link underlines, focus ring. Derived from Mantas's real work shirt (`lajoje-vasara.jpg`) |
| `--orange-ink` | `#B7470C` | Orange text on white, and button hover |

Contrast is a build check, not an assumption. If white text on `--orange` measures below 4.5:1, use `--orange-ink` as the button fill, or ≥ 19 px bold label text (3:1 large-text rule), and record which one was used. The orange appears on actions only, never as a section fill. Rule from Betono: one reserved colour for one meaning.

### B4. Type
- **One family, hierarchy by width/weight/size** (Northface rule, A1). Proposal: **Archivo** variable (`@fontsource-variable/archivo`, with the `wdth`+`wght` axes and the latin-ext subset). Display: width 112–125, weight 800, **sentence case**, tracking −0.01em. Body: width 100, weight 400/600, 18 px base, line-height 1.55. If the build finds that this package lacks the `wdth` axis or Lithuanian glyphs, use **Archivo + Archivo Narrow** or **Figtree**, and log the reason. Never use Oswald or a serif.
- The scale is fluid with `clamp()`. H1 home tops out at ~4.4rem desktop and ~2.6rem at 390. The brand line may be larger than the descriptive H1, as allowed by the contract.
- Diacritics check: render `ĮŽŪĘĄČŠĖ` and "Avarinių medžių pjovimas", "Lietvamzdžių ir stogo valymas" and "Reklaminių iškabų montavimas" at H1 sizes, at 360/390 px. There must be no clipping and no mid-word break (`hyphens: manual`, `overflow-wrap: normal`; size the type to fit).

### B5. The two brand devices (and nothing else)
1. **The cut corner.** Every photo frame, the form card and the CTA band have exactly one corner cut at 45° (`clip-path`, about 28 px desktop and 18 px mobile), always the top-right. It is the name ("Cut") made physical. Do not stack it, outline it or animate it.
2. **Mantas layered over the frame edge.** One real cut-out of Mantas (from `mantas-portretas.jpg`, extracted with macOS Vision subject-lift, so no generated imagery) overlaps a photo or band edge. It is used **once on the home hero and once on /apie only**. The cut-out must be clean at 2× (inspect the hair edges). If the extraction is poor, use the uncut portrait inside a cut-corner frame instead. Do not fake it.

Separate sections with surface colour and spacing; **no rules, borders or seams between sections** (agency brain, 25 Oct). The only motion is A-brain's (Ken Burns hero 1.08→1 over 22 s, fade-up 24 px with ≤350 ms stagger, smooth same-page scroll) under `prefers-reduced-motion: no-preference`. Content is visible without JS.

### B6. Imagery
- **All 15 real photos are portrait** (e.g. `autobokstelis-prie-namo.jpg` 1667×2000, `medis-prie-muro.jpg` 1500×2000, `pusis-alpinistas.jpg` 640×1339). Do not force them into full-bleed landscape heroes, because that crops the subject and upscales the image. Use tall frames: a split hero (text + tall photo), paired portrait frames and vertical gallery cards.
- Only photos ≥ 1,000 px wide go in emphasised slots. Smaller ones (`autobokstelis-pusyne` 675, `pusis-alpinistas` 640, `egle-prie-namo` 671) go in small frames or the gallery.
- The light overlay rule applies (A2). Captions go under photos, not on them. Watermarked files (`medziu-genejimas.jpg`, `about-collage.jpg`) are excluded (learnings rule 15).
- **Open input:** the user/Mantas still needs to supply original full-size landscape photos. This was requested in learnings §6 and never sent; agents must not message the client.

### B7. Trust — exactly what may appear
| Proof | Display | Source of truth |
|---|---|---|
| Paslaugos.lt rating | Official Paslaugos.lt logo + "5,0" + "123 atsiliepimai", linked to the profile. **Dominant** source | `src/data/atsiliepimai.js` (`atsiliepimuVidurkis`, `atsiliepimuKiekis`), rendered, never typed |
| Google | Official G mark on Google-sourced review cards only. **No Google rating number** while `site.google.placeId` is empty (contract: production shows no Google card) | `src/data/site.js` |
| Press | Official LRT.lt and Valstietis.lt logos in a "press" row, each linking to its article. The bb63bd8 words stay as the link's accessible name | `src/data/spauda.js` |
| Experience / kit | "15 metų" and "autobokštelis iki 20 m", from data, as plain text in the hero, not as badges | `atsiliepimai.js` `patirtisMetai`; `site.js` |
| Championship | **New copy, approved fact only**: Mantas took part in the Baltic States Tree Climbing Championship 2023. Placement unknown, so never imply a result. Not in bb63bd8 (`git grep` = 0), so the build must show its exact Lithuanian wording to the user before adding it | user answer 5 Nov, `v4-learnings.md` §2 |
| Not allowed | AggregateRating/Review schema, combined totals, seals, "#1", 24/7, arrival-time guarantees | contract §Metadata/§Conversion |

Ratings show as the number next to the official logo. **No star glyphs.** If the user later wants stars, they must come as a raster set from Codex `imagegen` (rule 6). The official mark files arrive from the Codex child task into `public/assets/marks/` together with `SOURCES.md`. Use them unmodified.

### B8. Controls without pictograms
Use text labels: "Meniu" / "Uždaryti", "Ankstesnė" / "Kita" in the lightbox, "Skambinti" + the number, "SMS", "El. paštu". External links get a visually-hidden "(atsidaro naujame lange)" instead of an icon. FAQ open/close uses a CSS-drawn plus/minus made from two bars (a control state, not a pictogram); if the user objects, change it to the text "Rodyti". `Icon.astro` and all its call sites get removed.

---

## Part C — Build spec per page type

**Binding for every page:** the copy, section order, headings, link graph, metadata, schema, form fields, IDs and script hooks of `bb63bd8`, exactly as listed in the contract. Only the visual layer changes. The single exception is B7's championship line, which is gated on user wording.

| Page type (routes) | Composition |
|---|---|
| Header (all) | White, sticky. On scroll it shrinks to 64 px and turns `--spruce-900`. Logo on the left at 4.4rem/3rem (agency brain). Desktop nav as in the contract. On the right: "Skambinkite kasdien 08–18" + the number in display type, then the orange "Gauti kainą". Mobile: logo, number, "Meniu". The full-screen menu keeps the contract's order and its sticky SMS/quote foot. |
| Home `/` | **Hero:** split layout. Left: who-line, H1, lead, a large call button (number in display type), hours, proof row (Paslaugos.lt logo + rating, 15 metų, LRT logo link). Right: tall `autobokstelis-prie-namo` (or `medis-prie-muro`) in a cut-corner frame, with the Mantas cut-out overlapping its left edge. The short form card crosses the hero bottom (the page's one overlap). **Emergency:** a single `--spruce-900` band. **Services:** a lead tile (pavojingi medžiai, tall) + two tiles + the full 12-row price list as two columns, which become cards on mobile. **Moments:** lead image + count. **Press:** official logos with quotes on white. **SendPhotos:** stone surface. **ReviewBoard:** white cards, source mark per card, filters and load-more kept. **AreaMap:** town link columns + click-to-load map. **FAQ:** sticky call card, as in bb63bd8. |
| Service ×12 `/paslaugos/*` | PageHero with service H1, a service photo in a cut-corner frame on the right (light page, not dark), and call + quote. Main column: "Kada kreiptis" / "Kaip atliekame" (steps horizontal → vertical) / "Mūsų darbai" photo pair. Sticky aside: price as a large figure, preparation list, quote button carrying `data-service`. Then Sequences, reviews, FAQ, related services + town links as readable columns, and the service CtaBand. |
| Town ×9 `/medziu-pjovimas-*` | Light hero naming the town; intro + Kaunas-only hauling note (data-driven); grouped service links styled as navigation rows with prices; reviews; town FAQ; other towns; CtaBand. Build check: the town name appears in H1, H2 and FAQ heading (A2). |
| Services index | PageHero + grouped rows (name, short description, price, whole-row link) + CtaBand. |
| Prices `/kainos` | Grouped price tables → cards ≤600 px; factors aside; photo-preparation block; FAQ; article link. |
| Gallery `/galerija` | Sequences first, then filters (pressed state + count) and a portrait-friendly masonry grid; lightbox with text controls. |
| Reviews `/atsiliepimai` | Hero with the official Paslaugos.lt logo, rating and sync date; profile + "Parašyti atsiliepimą" actions; every original review on white cards. |
| About `/apie` | Mantas cut-out device #2 (or framed portrait); "Kaip dirbame" values beside photos; "Su kuo dirbame" three kit cards with real photos; reviews; contact facts list; CtaBand. |
| Contacts `/kontaktai` | Big call card, email, hours, base, social/profile links, all town links; the "Užklausa" full form on a stone card (sticky on desktop). No CtaBand. |
| Blog index + 4 articles | Calm 46rem reading column, dated hero without actions, phone/quote aside (sticky on desktop, after the article on mobile), FAQ, list of other articles, CtaBand. `s.turinys` HTML stays unmodified; style it with `.prose`. |
| Legal ×2, success, 404 | Text column. 404/success: status heading, call button, recovery links; keep noindex. |
| Footer (all) | `--spruce-900`. Logo, contacts, all 12 services grouped, all 9 towns, pages, blog, legal, press links. **Same links at 360 px**. Credit "Programavimas: jarvisweb.lt" per the agency brain. Confirm that with the user, because bb63bd8 is the copy oracle. |

### C1. Acceptance checks (the build thread runs them; the reviewer re-runs them)
1. `PUBLIC_PREVIEW=1 npm run build` passes and emits exactly 37 HTML pages + `llms.txt`.
2. For each route, compare against the bb63bd8 build: title, description, canonical, H1–H3 text and order, internal href set, JSON-LD (diffed). Allowed differences: only the B7 championship line, if approved, plus visual-only attributes.
3. 360/390/768/1440 on every route: no horizontal overflow and no mid-word H1 break. Screenshots are actually viewed.
4. Keyboard: menu open/close/Escape/focus return; quote dialog focus trap and `data-service` preselect; lightbox arrows/Escape; FAQ; review filters and load-more; gallery filters.
5. Forms are inert in preview: no network request, `__arbcutPreviewSubmits` increments, error and success focus.
6. Contrast (B3), `prefers-reduced-motion` (0 animated elements), no-JS content visible.
7. `grep` the built HTML for `<svg` outside official marks, and for `★✆☎` glyphs: expect 0.
8. Lighthouse-style practical check of LCP image size/priority on home and one service page. Report numbers; do not promise "perfect".
9. Other-engine (Codex) review of the diff + preview, max 2 rounds, ending in "Verdict: approved/changes requested".

### C2. Open inputs (owner)
- Logo pick from three options: user (assets pending from the Codex child `arbcut-v4-brand-assets`).
- Official mark files + usage notes: Codex child; confirm Paslaugos.lt logo usage is acceptable.
- Championship wording; footer credit line: user.
- Original landscape photos and confirmation of the 2023 championship photo: Mantas, requested via the user only.
- Live Google placeId/key: absent; leave the honest preview state.
