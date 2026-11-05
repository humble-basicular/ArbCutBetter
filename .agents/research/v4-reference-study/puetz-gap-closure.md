# Puetz gap closure — partial bounded result

5 November 2026. Research only; no submission, upload, quote request, marketing consent, paid API, source edit or publication. Stopped exploration on user steer at 2,613,905 cumulative input versus the 2.5M soft estimate. No new retry round or delegation. This evidence is **not independently audited**.

Evidence root `P` = `/Users/matasbasinskas/.ai-powerhouse/research-captures/arbcut-v4/puetzconstruction.com/`. Existing 25 route captures and prior reports were not overwritten. New locality slugs are separate; interactions are under `P/gap-closure/`. `capture.mjs` and `sheets.py` were reused unchanged. All sheets below were actually opened at original detail before viewed flags changed; each sheet-0 includes the original first viewport. Grey sheet padding is not page whitespace.

## Locality evidence actually viewed

Selected Rochester and Woodbury commercial pages to compare different urban markets, and St. Charles, Minnesota versus Arcadia, Wisconsin decks pages to compare regional copy and imagery. Selection does not establish differing layout until inspected. The actual differences and similarities follow.

| URL path | Desktop sheets | Mobile sheets | Heights 1440/390 | Status | Segments 1440/390 |
|---|---|---|---|---|---|
| `/commercial/rochester/` | `P/commercial__rochester/1440/sheet-{0,1}.jpg` | `P/commercial__rochester/390/sheet-{0,1}.jpg` | 6,549 / 9,951 | 200/200 | 3/5 |
| `/commercial/woodbury/` | `P/commercial__woodbury/1440/sheet-{0,1}.jpg` | `P/commercial__woodbury/390/sheet-{0,1}.jpg` | 6,562 / 10,032 | 200/200 | 3/5 |
| `/decks-patios/st-charles-mn/` | `P/decks-patios__st-charles-mn/1440/sheet-{0,1,2}.jpg` | `P/decks-patios__st-charles-mn/390/sheet-{0,1}.jpg` | 7,251 / 10,123 | 200/200 | 4/5 |
| `/decks-patios/arcadia-wi/` | `P/decks-patios__arcadia-wi/1440/sheet-{0,1,2}.jpg` | `P/decks-patios__arcadia-wi/390/sheet-{0,1}.jpg` | 7,302 / 10,277 | 200/200 | 4/5 |

### Commercial: seen

Both use the service-family split hero: shaded commercial flat-roof aerial, tan locality ribbon, white display sales line, three claim rows, enquiry form on pale drawing at right, Google-marked Kaitlin testimony ribbon. Then materials explanation and another commercial roof photo, three process cards, tan team/financing band with roof image, town-community copy beside blank raised map rectangle, three project images, four closed FAQ rows, generic blog links, crew CTA and tan footer.

Rochester and Woodbury change the hero/section photographs, heading wording, prose and FAQ selection. Rochester starts with inspection timing; Woodbury ends with years in business. Their layout and shared project/blog/closing content are very similar. The three recent-project pictures are the same residential houses in both, despite the commercial-roofing title; blog side items are black windows/French doors. These are visible relevance weaknesses, not proof of false project ownership. The displayed testimonial also says roof replacement without establishing commercial context.

At mobile width the roof becomes a separate photo strip, black headline/copy/claim rows precede the full-width form, and process/projects/blog stack. The tan band moves the image above text. Locality names occupy two columns, with only some visibly underlined; no link behaviour was tested. Header navigation disappears into the fixed Menu/phone dock; mobile footer loses desktop navigation columns. Navy/red/tan/olive, uppercase display headings, rounded sans paragraphs, drawing textures and ribbons maintain the same identity as the parent service. No new typography system is visible. Each page exceeds 9,900px mobile, with substantial repeated content. No review-card module appears in these two initial states. The map rectangle remains blank in the captures; no normal live map check was completed here.

Judgement: a shared locality shell can accommodate different pictures, questions and copy. These two examples support that shell only for themselves; they do not prove all 18 commercial URLs match. Commercial buyers need commercially relevant job evidence and reading resources, not merely a city name applied to the residential tail. Keep the general principle of evidence relevance separate from the trade-specific roof systems/financing choices.

### Decks: seen

Both have deck-photo/form heroes, Trex/turnaround/family claims, materials discussion and a second deck photo, Yelp-style named testimony ribbon, unrelated-service cards, manufacturer-mark stack, process, broad team/financing copy and another photograph, local-community/map region, blog and shared crew/footer. There is no dedicated FAQ block or recent-project grid visible in these two pages. This differs from the commercial-locality composition and from the longer parent decks service page.

The pictures differ materially: St. Charles uses completed outdoor seating/deck imagery including its team/financing block; Arcadia's corresponding block uses hands measuring/cutting lumber. Both expose a long vertical column of navy supplier marks, including repeated EDCO/PlyGem/CertainTeed marks, rather than a working horizontal carousel in these captured states. This occurs on desktop and mobile. It remains a rendering caveat, not a recommended layout or diagnosed cause. Mobile stacks related services and full process cards, while the deck photos stay large; these stacks and logos make a roughly 10,000px journey. Locality/map region again has a blank raised white panel.

Copy defects are directly visible: St. Charles's materials text refers to Wisconsin weather and the closing local section names Mondovi and its homeowners; the URL/opening identifies St. Charles, MN. Arcadia's hero calls the business Puetz Roofing while selling decks. Both materials blocks name CertainTeed and LP SmartSide while the hero's material claim is Trex. This juxtaposition is observed; no external product suitability check was performed. Do not infer that the named supplier relationships or performance claims are certified by the photos/logos.

Judgement: city/service consistency must be checked across the whole page, not just H1. Shared design remains recognisable, but duplicated local copy and supplier overflow weaken trust. Appropriate deck materials, regional climate discussion and this particular supplier set are niche decisions; the transferable rule is coherent local facts plus relevant, bounded proof. Two viewed deck URLs do not authorise representing the other 13.

## Safe live checks and their limits

Scripts: `puetz-gap-closure.mjs` uses ordinary headed Chrome without tracker blocking; `puetz-gap-controls.mjs` uses ordinary headless Chrome and CDP screenshots for a focused capture correction. Both close their browser contexts and never submit forms. The earlier T3 preview failure “Preview automation snapshot timed out after 15000ms.” and the explicitly authorised Playwright workflow remain the basis for this workflow.

- **Estimator normal load:** `P/gap-closure/{1440,390,360}/estimator-normal.jpg`, all opened. After eight seconds, the title and closed FAQs load, with no visible address/map/tool controls at all three widths. Recorded DOM finds reCAPTCHA and a zero-size blank iframe, and no ordinary estimator input/select. This corroborates the earlier missing-tool state in a headed browser. It does not establish its cause or prove every real visitor sees the same result. No quote tab or Get Started action was used.
- **Reduced-motion fresh load:** `P/gap-closure/reduced-390.jpg`, opened. The browser reports the reduced-motion media query true and no active Web Animations at the sampled instant; ordinary loads also report none. Initial layout looks the same, still without estimator. This is a fresh-load observation only, not comprehensive scroll/motion conformance or proof all CSS animation respects reduced motion.
- **FAQ:** the initial `faq-open.jpg` files at all three widths were opened but render as near-empty/partial fragments and are unusable for answer analysis. Their viewed flags mean opened, not valid evidence. Separate `P/gap-closure/controls/360-faq.jpg` and `360-menu.jpg` show the financing answer expanded, white body under bordered question, navy minus control, naming FinTurf/Improvifi. The first clips the lower answer; the second shows more text but the fixed bottom dock still intrudes. `1440-faq.jpg` remains visibly closed despite the click. Thus one mobile expansion is visually established, not desktop expansion or complete answer reading.
- **360 navigation:** the first locator expected uppercase MENU and returned `TimeoutError: locator.click: Timeout 5000ms exceeded.` A separate DOM-grounded check found `.menu-toggle` with lowercase text and clicked it. The resulting CDP screenshot does not show a usable full navigation panel; only a partial close indicator at the bottom is visible while the FAQ remains. No claim that 360 navigation is fixed or verified. No more retries were made.

Ten new state images were actually opened (seven initial, three focused); four initial normal/reduced images and the two mobile FAQ-bearing correction images support the limited claims above. Others remain explicitly inconclusive. This is separate from the previous 18 interaction shots, which were untouched. Load More, new gallery/filter states, normal live maps/manufacturer carousel, and full motion/scroll testing were not completed before the budget stop.

## Exact counts and pending work

Added six new route captures at both widths, but **only four routes/eight widths fully viewed**, through all 18 numbered sheets: **34 document segments plus eight first viewports**. Two siding examples are **captured-only** and were not opened or marked viewed:

- `/siding/rochester/`: 1440 height7,304 /390 height10,203.
- `/siding/woodbury/`: 1440 height7,261 /390 height10,292.

Both have status200 and four/five segments by their records. Capturing is not visual analysis. Their sheets were not generated by the earlier sheets pass if the records were still pending; check and generate new-slug sheets before inspection. No original record was overwritten. No article captures were started: inspection/checklist, how-to, ideas and local-interest examples remain an explicit gap, not silently mapped to the two previously viewed articles.

Fresh totals now **31 routes captured /62 widths captured /214 captured segments**, of which **29 routes /58 widths /196 segments /58 first viewports viewed**. Earlier verified25 routes/50 widths/162 segments preserved. The difference is two captured-only siding routes/four widths/18 segments. Ledger still has245 URL rows, no representedBy mappings. **Six locality URLs are now viewed**: two each roofing, commercial and decks, with siding still zero. The remaining54 locality URLs and160 articles are unviewed. (31 fresh routes includes the two pending siding routes.)

Whole-site status stays **partial**. Public pricing/success URLs remain unknown; no submission used to discover them. New closure work has no independent audit. Next owner parent lead: inspect both siding captures and the four missing article formats, then decide whether the documented interaction limitations are sufficient or require a later scoped investigation. Do not keep retrying this round; user states the two-retry limit is reached.
