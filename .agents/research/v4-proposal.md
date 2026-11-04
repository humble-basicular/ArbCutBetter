# ArbCut v4 — exact visual proposal (awaiting user approval)

Date: 2026-11-05 · Lead: Claude Opus 5.5 · Status: PROPOSED, not approved. No website edits until the user approves.
Mockup: `v4-proposal/mock.html` (hero, emergency band, services start; desktop + 390 phone). Cut-out made locally with macOS Vision (`v4-proposal/cutout.swift`), no generated imagery.

## Fixed (from bb63bd8)
Copy, section order, headings, SEO, schema, forms, links, scripts, routes (37). Visual layer only.

## Concept
"Daylight work, the man and his lift." The colours are the ones on the job: Mantas's orange shirt and spruce green, on light leaf-grey and white surfaces.

## System
- Colour: spruce `#0F3B2C` (headings, dark surfaces, secondary buttons), shirt orange `#F2801F` (call buttons, brand disc, price chips; spruce text on it), leaf-grey `#EEF3EC` and white surfaces. Dark spruce only for review background, send-photos section and footer. No third accent.
- Type: Archivo variable, one family with width contrast. H1/H2 extra-bold, wide (wdth ~118), sentence case. Numbers in stamps condensed (wdth ~70). Body regular width. No all-caps headings. Diacritics Į Ž Ū Ę Ą checked at 66 px.
- Devices (two only): 1) arch-topped tall photo frame (suits the portrait-only photo stock); 2) round fact stamps for real facts only (5,0 · 123 Paslaugos.lt, 15 metų, 20 m bokštelis, LRT). Plus once, in the hero: Mantas cut-out in front of an orange disc, breaking the arch edge.
- One overlap per page: the hero quote card crosses the hero/emergency seam.
- Radius 12–20 px on cards/buttons, soft shadows, no decorative lines (brain rule 25 Oct).

## Homepage, in bb63bd8 order
1. Header: white, new logo (pending), phone number, orange "Gauti kainą". Mobile: logo, orange call square, menu.
2. Hero: leaf-grey. Left: kicker, H1, lead, big orange call button, four stamps. Right: arch photo of the lift beside the house with Mantas cut-out. Short "Kiek kainuos?" form as a white bar across the bottom seam (desktop), a white card under the photo (phone). Phone button stays on the first screen at laptop and phone heights.
3. Emergency: full orange band, spruce text, big spruce phone button.
4. Services: white. Three lead photo tiles of different widths, price chip top right, whole-card link; grouped price rows below in two columns, spruce text, orange prices.
5. Moments: leaf-grey. One large lead photo plus a horizontal step sequence; captions under photos, not on them.
6. Press: white. LRT quote in large regular-weight type, small arch portrait, source links.
7. Send photos: dark spruce. Arch portrait (Valstietis photo), checklist, orange SMS button.
8. Reviews: leaf-grey, white cards, Paslaugos.lt summary card dominant with large 5,0 stamp; Google card secondary; filters as pills.
9. Area map: white, map in a rounded frame, town links as pills.
10. FAQ: leaf-grey, arch photo beside native details, call/SMS/quote.
11. Footer: spruce, all services and towns.

## Other pages
PageHero on every inner page: leaf-grey band, breadcrumbs, H1 left, arch photo right (service photo where sharp enough, else a real work photo; never empty). Service pages: two-column body with sticky price/quote card on desktop. Gallery: one large lead image, filter pills, count. Prices: two-column grid, orange prices. Contacts: facts card beside the full form. Articles: readable 68ch column with a sticky call card. Legal/success/404: plain, same type.

## Motion
Hero arch photo Ken Burns 1.06→1 over 22 s; H1, lead, button, stamps and form fade up in sequence; Mantas rises 16 px and fades in after H1; stamps scale 0.92→1 with 60 ms stagger. Section reveal fade-up 24 px, stagger ≤ 350 ms. Tile hover: photo zoom 1.03, card lift. Smooth same-page scroll below sticky header. All off under prefers-reduced-motion; nothing hidden without JS.

## Different from rejected versions
v2: cream paper, serif, tiny labels, ledgers → now white/leaf-grey, wide grotesk, large readable labels, photo tiles.
v3: dark forest everywhere, Oswald caps, flat rectangles, one darkened photo → now mostly light, sentence case, the real person and lift composed in layers, arches, round stamps, rounded cards.

## Open inputs
- Logo: three wide lockups via Codex imagegen after direction approval; current shield lockup to be replaced.
- Originals: only ~5 photos ≥1500 px; service tiles 340 px need originals. `medziu-genejimas.jpg` and `about-collage.jpg` carry advert text, not used.
- Mantas's shirt reads "Baltic States Tree Climbing Championship 2023": a stamp only if Mantas confirms he competed/placed.
