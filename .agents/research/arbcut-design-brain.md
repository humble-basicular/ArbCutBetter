# ArbCut design brain (v5)

Date: 2026-11-06. Author: Claude Opus 5.5 (v5 lead). Status: **written; the user judges the built homepage, not this file.**
Replaces v4 Parts B and C, which made the site flat and restrained ("block after block"). Part A2 and A4 are carried over unchanged because the brief keeps them.

Inputs actually viewed for this version, at readable size (1000 px wide tiles, 1500 px tall):
- All 20 walkthrough crops in `v4-success-walkthrough/` (the 14 agreed steps) plus `vensland-logo-avoid.png`.
- Full 1440 homepages: Genz-Ryan (6 tiles, hero to footer), Puetz (5, hero to footer), GreenTek (4 of 11, hero to products), Home Front (4 of 5, hero to news), Smock (2 of 5, hero to values band), Northface (2 of 6, hero to areas). Phones at 390: Genz (first tile), Puetz (first tile). One inner page: Genz `/service-area/apple-valley-mn` 1440. Captures at `~/.ai-powerhouse/research-captures/arbcut-v4/<site>/home/`.
- The user's four v4 fault screenshots (hero and form, proof row, reviews, map) and every real ArbCut photo (`src/assets/photos`, `public/assets/images/**`, 86 gallery thumbnails).
Not viewed this time: remaining GreenTek/Smock/Northface tiles, Bears/Thelen beyond their crops, other inner pages. Their earlier notes are in `v4-reference-study/bulk-findings-*.md`.

---

## Part A — Reusable home-service rules (agency-wide)

### A1. What actually makes the strong references feel like a real, proud company
Read from the captures above, not from memory.
1. **The company is in the picture, big, in the first second.** Genz: the owner in a branded polo standing in front of a row of branded vans, cut out over a blue sunburst. Puetz: the yard sign with the logo and phone. Home Front: the owner's kids holding the yard sign. Smock: a technician at a front door. No site opens on a stock lawn.
2. **Full, layered screens.** Every strong hero has 4–6 layers: texture or rays, a brand shape, a real photo, a cut-out person crossing the photo edge, a tilted label, badges sitting on a curved edge, and a form card that crosses into the next band. Nothing sits in a lonely white rectangle.
3. **One owned colour, used as whole bands.** Genz alternates full red, full blue and white, with yellow only for tags. Smock runs a full red band behind the process with the photo tinted red. GreenTek runs a full green band. The colour is the band, not the button.
4. **A visual world of their own.** Genz: sunburst rays, halftone dots, tilted yellow tags, curved band edges with a stroke. Puetz: blueprint line drawings behind the hero, gold ribbon tags, tree-ring texture behind the FAQ, pine silhouettes in the footer, the state outline with a fire tower. GreenTek: roof-grid lines on the green band. Home Front: a red square between offset rounded photos. Each world repeats on every section.
5. **Headlines have more than one voice.** Light tracked kicker then heavy display (all six sites); a highlighted word in the brand colour (Home Front "Creating Homes"); a tilted label box (Genz hero, process step names); a hand script line (Thelen "Local Home Comfort Experts").
6. **Named things.** "Puetz Promise", "HomePulse", "Smock C.A.R.E. Process", "Customer For Life Mindset", "Genz-Ryan Guarantee". A name turns a paragraph into an asset.
7. **Proof is official and everywhere.** Source logo + gold stars + number + count, locked into one unit: Genz header "G 4.7 Google Rating, based on 9097 reviews"; GreenTek's white rating card hanging off the form "4.7 | 696 reviews"; Northface's three-up dock under the form; Puetz's gold ribbon with G and f ratings; certification and maker logos in a strip right under the hero (Puetz EDCO/LP/GAF, GreenTek GAF/BBB/TAMKO). Reviews show stars, a name, an avatar or initials and the source mark; the totals appear as giant numbers (Genz "4.70" and "9097" on tilted white cards).
8. **Custom icons, one style.** Genz: full-colour flat icons in a white circle above each card. Puetz: white line icons on darkened service photos. Smock: red line icons in white rounded tiles. Never mixed styles; never emoji.
9. **The owner signs it.** Puetz: owner cut-out over the giant logo mark, quote, handwritten signature. GreenTek: owner cut-out breaking the top of a black band, quote, signature. Home Front: owner with a "100% client satisfaction guaranteed" seal and a signature.
10. **Small human moments.** GreenTek: a speech bubble with a face, "You'll have an assigned team member every step". Northface: rep cards with photos. Home Front: a review card overlapping a project photo with initials in a red ring.
11. **Visible finish.** Soft long shadows under cards, offset colour blocks behind photos (Genz red offset behind the map and team photo), rounded corners used consistently, curved band edges, a utility bar above the header.
12. **A sales-page spine.** Hero and form → proof strip → services → process → owner → reviews → area → final call band → footer.

### A2. Defects that recur across references — never ship these
- Wrong-locality copy on a locality page (True Air, Puetz Faribault/Albert Lea, Thelen). Guard: every town page must render its own town name in its H1, intro and FAQ. Check this at build time.
- Rating numbers that disagree between widgets (Puetz 363 vs 375, True Air 4.5 vs 4.9, Betono 15 vs 21 years). Guard: render every number from one data source and never type a number into markup.
- The mobile footer dropping the service and locality link columns (Northface, Genz, True Air). Guard: the same footer links at every width; collapse them into accordions if needed, but never `display:none`.
- Floating chat or CTA elements covering a form submit (Puetz). Guard: the mobile action bar hides while any field has focus (the existing `.is-typing` behaviour).
- Darkened hero photos that hide their subject (VensLand, Betono, Thelen). Guard: at most a 35% scrim, and only behind the text column.
- The same promotional tail (resources + map + towns + CTA + footer) on every page, longer than the content on short pages (Thelen ≈2,500 px). Guard: inner pages get one CTA band and the footer, nothing more.
- Empty or default-widget pages (Thelen `/services`), lorem ipsum, placeholder phone numbers, grey "image loading" panels.
- Compressed multi-column tables at 390 (Puetz deck comparison). Guard: rows become cards at ≤600 px.
- Emoji, SVG, icon-font or Unicode-glyph pictograms. **[USER]** "dont even ever use svgs for pictograms".
- Invented proof copy, stamps and seals. **[USER]** "nesąmonė rašyti LRT rašė apie Mantą… slopas".
- One action carrying many labels (Betono 6, VensLand). Guard: one label per action across the site.

### A3. v4 failure modes (do not repeat)
Calling the full references "busy" and banning decoration; pale tints with orange only on buttons; "5 iš 5" text instead of stars; text instead of icons; one font in one weight, wide and flat; white card after white card; proof as a logo next to loose text; a rough cut-out with a halo; logos straight from image prompts; a CSS ring diagram passed off as a map; screenshots studied but motion never seen.

### A4. Mobile acceptance (applies to every client)
360 and 390 px: `scrollWidth == innerWidth`, the longest Lithuanian word in display type does not break mid-word (VensLand `EKSKAVATORIAU/S`), and header + action bar together stay ≤ 140 px (Betono 124). Phone and quote are reachable in the first screen. Reviews are not hidden on mobile; use load-more instead. Same energy as desktop (Genz 390: logo big, two coloured action buttons right under the header, the tilted headline tag, badges kept).

### A5. Process rule **[USER]**
The user judges built pages at true size, not mockups. Check every element against A2 before showing anything.

---

## Part B — ArbCut decisions (v5)

### B1. Concept
**"Mantas's crew, up in the tree."** A proud Kaunas climbing-arborist company: spruce-green bands with growth rings, shirt-orange rope and action, gold for stars and tags, Mantas big in every key screen, and a tree mark used large like Puetz uses its monogram.

### B2. Never reintroduce **[USER]**
- v2: cream backgrounds, serif type, tiny labels, numbered ledgers.
- v3: dark forest on every band, Oswald capitals, rust buttons, flat rectangles.
- v4 mockup: round generic text stamps, Unicode ✆, orange SaaS pills with soft shadows, the arch frame, the "rašė apie Mantą" stamp, "savas bokštelis".
- v4 build: everything in A3.
- SVG or glyph pictograms. Icons, stars and seals are raster art made for this brand.

### B3. Colour — committed bands
| Token | Value | Role |
|---|---|---|
| `--spruce-950` | `#0B231B` | Utility bar, footer base |
| `--spruce-900` | `#0F2E23` | Hero band, promise band, reviews band |
| `--spruce-700` | `#1A4A37` | Ring texture strokes, raised cards on spruce |
| `--spruce-500` | `#2F7556` | Links on light, small accents |
| `--spruce-100` | `#E4EFE8` | Light band (area, FAQ); never the main surface twice in a row |
| `--orange` | `#E2611B` | Shirt orange: emergency band, process band, call buttons, rope line. White text on it only bold ≥ 19 px (3.52:1) |
| `--orange-ink` | `#B7470C` | Orange text and links on white (5.36:1) |
| `--gold` | `#F4B731` | Stars, tilted tags, giant review numbers' cards, highlights. Text on gold = `--spruce-950` |
| `--paper` | `#FFFFFF` | White bands and cards |
| `--ink` / `--ink-2` | `#13201A` / `#4A5952` | Body text on light |

Band rhythm on the homepage: spruce (hero) → white (form dock, logos) → orange (emergency) → white (services) → orange (process) → spruce (promise) → white (crew and work) → light (press) → spruce (reviews) → white (area map) → light (FAQ) → spruce (final call with Lithuania symbol) → spruce-950 (footer). Never two dark bands touching.

Photos on colour bands are tinted with the band colour (multiply/overlay, as Smock and Genz service tiles do), never greyed out and never under a scrim above 35%.

### B4. Type — three voices
| Voice | Family | Use |
|---|---|---|
| Display | **Bricolage Grotesque** variable (wght 200–800, wdth 75–100, opsz 12–96) | Headlines 800, opsz 96, wdth 88–92, tight leading 0.95–1.02, letter-spacing −0.02em. The light kicker line: 400, uppercase, tracking 0.16em |
| Text | **Figtree** variable (300–900) | Body 17–18 px desktop, 16–17 px phone, line-height 1.55; UI labels 600–700 |
| Hand | **Caveat** variable (400–700) | Mantas's own voice only: speech bubble, the promise sign-off, handwritten notes on photos ("čia aš"). Max one hand line per section |

All three cover every Lithuanian letter (fonttools check on the latin-ext subsets, 2026-11-06). Display never in all caps except tilted tags and the kicker. Not Archivo, not Oswald.

Headline patterns (each section uses one): kicker + heavy line; heavy line with one word on a gold highlighter stroke; tilted tag box above or across the headline; hand line under the headline.

### B5. The ArbCut visual world (repeat everywhere)
1. **Growth rings.** Organic, slightly irregular tree rings drawn in a slightly lighter tone on spruce bands, radiating from behind Mantas in the hero and from behind the promise cut-out. Procedural raster, not CSS circles. On orange bands the same rings at low contrast.
2. **The rope.** An orange braided arborist rope as the stroke along curved band edges, as the headline underline, and as the line that links the process steps. Raster rope texture on a curve.
3. **Curved band edges.** Hero, promise and reviews end on a gentle arc with the rope along it (Genz arc + stroke).
4. **Tilted tags.** Gold or white boxes rotated −2°, Bricolage 800 caps: the hero kicker, process step names, "123 atsiliepimai".
5. **Offset blocks.** Photos and the map sit on an offset orange or spruce block (Genz red offset), with 14 px radius and a long soft shadow.
6. **The height scale.** A slim 0–20 m measuring scale beside the lift photo and on the lift service tile.
7. **Treeline.** A spruce treeline silhouette rising behind the final call band and into the footer.

### B6. Logo — professional process (separate stage, see `v5-logo/PROCESS.md`)
Tree-like, ownable, legible at 32 px, built as real vector on a grid with an adapted real typeface, tested on the shirt, the lift and a van. Must not resemble VensLand: no round badge, no symmetric leafy crown, no drawn leaves, no roots, no grass, no lime. Not generic landscaping. AI only for exploring. Shown to the user as several options in the real header at true size; the build uses the strongest until the user picks. Used big: header, promise band (giant mark behind Mantas), footer, favicon, seal.

### B7. Proof — official units, real data only
- **Paslaugos.lt rating unit:** official Paslaugos.lt logo + five raster gold stars + "5,0" + "123 atsiliepimai", one designed white unit with shadow; links to the profile. Numbers from `src/data/atsiliepimai.js`. Used in the utility bar, header (desktop), form dock and reviews band.
- **15 metų seal:** the one seal for a real value: a growth-ring medallion "15 metų patirtis" (real figure, `patirtisMetai`). Raster.
- **Lift badge:** "Nuosavas autobokštelis iki 20 m" with the raster lift icon.
- **Press:** official LRT.lt and Valstietis.lt marks, linked to the actual articles, labelled honestly ("Apie Mantą rašė" is banned; use "Interviu LRT.lt" / "Straipsnis Valstietis.lt" with the date).
- **Gear brands:** strip after the press marks only once Mantas confirms which brands he uses; preview shows a clearly marked placeholder slot, never shipped.
- **Google:** nothing while `site.google.placeId` is empty. No AggregateRating schema (unchanged).
- **Championship:** "Baltic States Tree Climbing Championship 2023" participant, wording pending the user (Q4). The orange championship shirt photo itself is real and may be used.

### B8. Icons, stars, seal, textures — raster set
One style: flat two-colour illustrations (spruce `#0F2E23` + orange `#E2611B`, gold `#F4B731` accents), chunky 3 px-equivalent outlines, slight hand-made wobble, transparent PNG/WebP at 2× sizes, each inside a white circle when placed on colour (Genz pattern). Made by Codex `imagegen` from an explicit brief, checked by the lead at 48 and 96 px. Textures (rings, rope, treeline) are procedural or traced by the lead. Never presented as photos of ArbCut work.

### B9. Imagery
- Real photos first: Mantas portrait (orange championship shirt, helmet, saw) is the hero subject; the lift at the brick house; climbers in crowns; storm damage; the fiskaras truck; stump grinder; winter larch.
- New clean cut-out of Mantas from `mantas-portretas.jpg` with a proper matte (Apple Vision subject mask, edge decontamination), no halo, no green fringe.
- Gallery images are 283×230: small cards and strips only, never enlarged.
- AI imagery only where no real photo can fill the slot: textures, band backgrounds, map art, icons, service tiles for services without a sharp photo. Captions never claim AI images are ArbCut jobs.

### B10. Motion (detail in `v5-motion-study.md`)
Subtle, crafted, from real timings measured on the references: section reveals (fade + 16–24 px rise), slow parallax on layered hero and promise layers, count-up on 5,0 / 123 / 15 / 20, hover lift on tiles and cards, the rope drawing along the band edge once. `prefers-reduced-motion`: everything static. Without JS: all content visible.

### B11. Map
MapLibre GL JS with OpenFreeMap vector tiles (free, no key), custom style in brand colours, loads by itself when near the viewport. Kaunas base pin, nine served-town pins (links), a soft coverage zone drawn around the served towns (no invented radius), Šiauliai and Klaipėda marked "per toli" with a direction cue. Attribution: OpenFreeMap, © OpenMapTiles, © OpenStreetMap contributors. Static fallback image + town links when WebGL or JS is missing.

---

## Part C — Homepage spec (v5) and later pages

### C1. Homepage, top to bottom
| # | Band | Content (existing headings kept) | 14-step |
|---|---|---|---|
| 0 | Utility bar (spruce-950) | Hours, Paslaugos.lt rating unit (small), "Atsiųskite nuotrauką" SMS link | 7, 11 |
| 1 | Header (white) | Big logo, nav (unchanged links), rating unit (desktop), orange phone button, spruce "Gauti kainą" | 3, 4 |
| 2 | Hero (spruce, rings) | Tilted gold tag with `hero__who`; H1 unchanged; lead; phone + quote buttons; Mantas cut-out large in front of the lift photo on an offset block; height scale; arc edge with rope; proof units on the arc (rating, 15 metų seal, lift, press) | 1, 2, 3, 6 |
| 3 | Form dock (white card crossing the arc) | Tab label "Kiek kainuos?" (H2 kept), short form, SMS/e-mail photo buttons, rating unit hanging off the card; logo strip: LRT, Valstietis, gear placeholder | 2, 3 |
| 4 | Emergency (orange) | H2 "Medis nuvirto ar tuoj virs?", storm photo tilted with white border, big white phone button | 5 |
| 5 | Services (white) | H2 kept; three big photo tiles with white icon circle + tilted name + price; price board as a designed price list with icons | 9 |
| 6 | Process = SendPhotos (orange, rings) | H2 "Atsiųskite nuotraukas. Pasakysime kainą." kept; five named steps on a rope, raster icons, Mantas's Valstietis quotes, what-to-photograph list, SMS/e-mail actions; speech bubble with Mantas's face | 8, 12 |
| 7 | Manto pažadas (spruce) | Cut-out over the giant logo mark, drafted promise text and signature **placeholders, preview only** | 7 |
| 8 | Crew and work = Moments (white) | H2 "Taip atrodo darbas" kept; big overlapping real photos with hand captions; kit row (lift, ropes, fiskaras) | 10 |
| 9 | Press (light) | LRT and Valstietis quotes as now, official marks, big quote | 3 |
| 10 | Reviews (spruce, rings) | Giant "5,0" and "123" on gold tilted cards, review cards with gold stars and initials, filters and load-more kept | 11 |
| 11 | Area (white) | H2 kept; MapLibre map on an orange offset block; town links with raster pin icons; hauling rule | 13 |
| 12 | FAQ (light) | Unchanged content and call card | — |
| 13 | Final call (spruce) | Lithuania outline symbol with the tree mark rising from Kaunas, call + quote | 6 |
| 14 | Footer (spruce-950) | Same links as now, big logo, treeline | 4 |
Section order change versus bb63bd8: SendPhotos moves before Moments, the promise and final call bands are new. Headings, links, forms, hooks and `data-loc` stay; every change is reported.

### C2. Later pages (after the user approves the homepage)
Page-specific compositions in the same world: service pages open on a spruce hero with the service photo on an offset block and the price unit; town pages on the map; reviews page on the giant numbers; about page on the promise and kit. One CTA band and the footer on inner pages.

### C3. Acceptance checks
1. `PUBLIC_PREVIEW=1 npm run build` passes; homepage diffed against bb63bd8 (title, description, canonical, H1–H3, hrefs, JSON-LD, forms, ids, data-loc); every difference listed.
2. 360/390/768/1440: no overflow, no mid-word heading break, screenshots viewed.
3. Keyboard and form checks as in v4 (menu, dialog, FAQ, review filters, inert preview form).
4. Contrast per B3; reduced motion; no-JS content visible.
5. Built HTML: 0 inline `<svg>` pictograms, 0 `★✆☎` glyphs.
6. Map loads without a click, attribution visible, fallback works.

### C4. Open inputs (owner)
Logo pick; Mantas's signature, promise words, gear brands and full-size photos; championship wording; footer credit; Paslaugos.lt "Nr.1" logo acceptability; "iki 200 km" copy vs the map; `/apie` 122 vs 123. All with the user.
