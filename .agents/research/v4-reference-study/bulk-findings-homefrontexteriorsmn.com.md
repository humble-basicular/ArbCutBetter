# Home Front Exteriors (homefrontexteriorsmn.com): stage-B findings

Status: **partial**. Stopped at the input-token budget steer. All 44 contact sheets were viewed. Only the homepage at 1440 was viewed at full size, and that capture is mostly unloaded images (see artefacts). Everything below marked *(sheet)* was read from contact-sheet scale. Treat it as layout-level evidence, not detail-level. Paths are relative to `~/.ai-powerhouse/research-captures/arbcut-v4/`.

## Coverage

| Item | Result |
|---|---|
| Pages captured | 52, both widths |
| Templates (`_sheets/homefrontexteriorsmn.com/groups.json`) | 22: t00 blog/* (15), t01 locality A (7), t02 product/service B (4), t03 FAQ/privacy/projects/reviews (4, loose group), t04 locality B (3), t05 Brava/wood-decks (2), t06 gutters/windows (2), plus 15 one-offs (about, avhs-cheer, blog, careers, commercial-roofing, contact, decks, financing, home, roofing, services, siding, terms-conditions = 404, trex-decking, careers/sales-representative) |
| Sheets viewed | 22/22 at 1440, 22/22 at 390 (`index.json` flags set) |
| Full size | home/1440 (`first-viewport.jpg`, segments 0, 2400, 4800, 7200). Not yet viewed: home segment-009600, home/390 and every other page. 390 strips for 33 priority pages are built in `/tmp/homefront-strips/` (123 files, not yet viewed) |
| Groups flagged | drone-thermal-scan, ice-dam-removal, columbia-heights-mn, privacy-policy, projects, reviews (skeleton deviations: the layouts differ, no breakage seen at sheet scale); terms-conditions (`http-404`: the URL serves the site's 404 page) |
| Blank-check (`MIN1440=300`) | minnetonka-mn/1440 y1328 h456 and owatonna-mn/1440 y1368 h400. Both sit in the "Storm Alert" section. Their records list `iframes: []` (patched recapture), so a map iframe does not explain them. The same white box is visible on the 390 sheet. Not resolved: it could be a lazy image or an embed that did not load, or a real empty block on the site |

### Capture artefacts (not site defects)
- **home/1440 captured with almost no raster images loaded** (10:19 UTC). The hero photo is a grey block (`home/1440/first-viewport.jpg`) and the service-area map is white. The two-col photo, services tab photo, process icons, owner photo, projects grid, CTA family photo, footer logo, footer icons and review-source stars are all grey squares (`home/1440/segment-002400.jpg`, `segment-004800.jpg`, `segment-007200.jpg`). In segment-000000 the hero tiles did load: house, Founders kids with the yard sign, red square. The 390 home sheet shows all images. So **the homepage cannot be judged for imagery at 1440 from this capture.**
- Same grey-placeholder failure on the 1440 captures of projects (grid tiles, CTA, footer logo), decks (tab photo, "Your Trust" photo, CTA, footer), terms-conditions (footer logo/icons) and blog__ice-dams-101 (CTA, footer logo). At 390, decks and terms-conditions also show grey placeholders (sheet). Projects/390 loads.
- Map iframe ("Proudly Serving Minnesota and Wisconsin") is a white box at 1440 on pages captured before the 11:07 UTC iframe patch: home, certainteed, lp-smartside, gutters, windows, commercial-roofing, contact, avhs-cheer, roofing, siding. On drone-thermal-scan/1440 (patched, `iframePatches` 1 entry) and on every 390 sheet the map renders. Not a site defect.

## Site-wide system (sheet + home full size)

- **Type:** one family, `basic` / `basic-bold` (record `fonts`: basic 159, basic-bold 76). Home H1 is 36 px/800/line-height 36 at 1440 and 24 px at 390. It is set as two lines: a thin, wide-tracked caps line "YOUR HOME, OUR CANVAS:" over a heavy caps line "ENDLESS POSSIBILITIES" (`home/1440/first-viewport.jpg` y200–280). Section H2s are 36–46 px/700–800 in sentence/title case. Eyebrows are 14 px/400 tracked caps ("OUR REVIEWS", "OUR PROCESS"). One accent word in red within headings ("Creating Homes", "Across The Midwest", "Our Latest News").
- **Colour (record `colors`/`backgrounds`, home 1440):** white, black, red `rgb(224,52,59)` (14 text uses, the largest coloured background area), charcoal `rgb(38,38,38)`, light grey `rgb(246,246,246)` panels. Dark bands use a charcoal-to-maroon gradient (services tab band, owner band, footer). Red is reserved for actions, accent words, bullets and the logo. That is one colour with one job, and it is consistent on every sheet.
- **Brand devices (count = 3):** (1) the square red bullet/block taken from the logo's "h" mark, used as list bullets, a red square on the hero photo tile and a red block behind the owner (`segment-000000.jpg` y150–210, bullets y330–420). (2) Opposing rounded corners on photos and cards: one or two corners large-radius, the others square (hero tiles, two-col photos, the services tab photo, `segment-002400.jpg` y60–600 and y925–1445). (3) A giant pale-red quote mark on the grey review panel (`segment-000000.jpg` y1160–1290). This **confirms the earlier note** of one repeated shape and adds two minor devices.
- **Header (1440):** logo, About/Resources/Services dropdowns, Projects, "Visualize your project", a phone pill with a round phone glyph, and a red "GET IN TOUCH ▸" pill (`first-viewport.jpg` y30–90). At 390 the record lists `#mobile-handler` "Menu / Call Now! - (763) 312-0812" as fixed. Its height was not measured.
- **CTA labels:** "Get In Touch" (header, hero form, CTA band), "Let's Begin", "See Our Options", "View All Services", "More About Us", "Leave a Review", "Learn More". Get In Touch dominates, but secondary labels vary. The arrow is a ▸ glyph on every button.
- **Proof:** Google "G" and Facebook "f" marks with ★★★★★ "5.0 Rating" plus avatar stack "TRUSTED BY YOUR NEIGHBORS" in the hero (`first-viewport.jpg` y585–635). The stars are glyphs and no review count is given. Review cards carry initials avatar circles in red, name, date, full text and a source icon (grey square in the broken capture). A supplier logo strip (CertainTeed, SmartSide, EDCO, Brava, etc.) sits under the owner band on locality/service pages *(sheet)*. Brava "Preferred Contractor" round seal on the Brava page *(sheet)*.
- **Owner band** "Your Problems, Our Solutions: Creating Success Together" carries a quote attributed to "TRAVIS MONAHAN // OWNER & CEO", "More About Us" and "Leave a Review", then a values ticker (Honesty, Communication, Quality Workmanship, Accountability, Integrity, Trust) (`home/1440/segment-004800.jpg` y520–980). The owner photo did not load at 1440 home. On the sheets (eau-claire, gutters, certainteed etc.) he appears cut out over a red block, with a signature and an ID-badge-like card. This **confirms the earlier "owner cut-out over logo geometry with signed statement" note**. The values ticker is new.
- **Footer:** the "Your Dream Exterior Awaits." CTA band with a stock-looking family photo sits on every page. Below it is a 4-column footer: About, Resources, Services (9 links), Service Locations (9 cities) (`home/1440/segment-007200.jpg` y1640–1930). On 390 the sheets show only logo, phone, email, address and social icons: **the service and locality columns are dropped on mobile** *(sheet, every 390 cell)*. That is the Northface failure again.

## Homepage (full size 1440, imagery broken)

Sequence (record `skeleton` + segments): header → dark hero (H1, paragraph, 3 red-square bullets, rating marks, photo tile collage) → **horizontal pill form crossing the hero base** (7 fields + "Get In Touch", `segment-000000.jpg` y540–610) → service areas (map + 8 underlined city links with red square bullets) → reviews (grey rounded panel, 3 white cards that overhang its bottom edge) → two-col "Transforming Houses, Creating Homes" with a review snippet docked on the photo corner ("Spot on contractor…", Scott C.) → dark services tab list 01–06 with photo and sub-tags → process 4 steps (step 1 enlarged) → financing two-col ("loan requests up to $200,000", "2-3 business days") → owner band + values ticker → projects grid (4) → "Setting The Standard Across The Midwest" with "Licensed in Both Minnesota and Wisconsin!" chip and a review card over a photo → FAQ accordion (5) → latest news (3 cards) → CTA band → footer. Page 9,799 px at 1440 and 13,595 px at 390.

- Copy: **the inline hero form as a white pill crossing the dark/white edge**. It is one row, real fields, and the submit is the only red block (`home/1440/segment-000000.jpg` y540–610). It is the clearest "one overlap that does a job" example so far.
- Copy: **review snippets docked on photo corners** with an initials ring (`segment-002400.jpg` y545–640; `segment-004800.jpg` y1640–1830). Proof sits beside content, not in a wall.
- Copy: review cards that overhang the grey panel. A white card breaks a soft panel edge, which is subtle and not a seal row (`segment-000000.jpg` y1180–1910).
- Copy: dark numbered services tab list 01–06 with the active item expanded. Six services fit in about 815 px at 1440 (`segment-002400.jpg` y715–1525). On 390 the sheet shows it as an expanded first item plus a numbered list, which is a short mobile run (rule 13).
- Avoid: an H1 that is a slogan ("Your Home, Our Canvas: Endless Possibilities") with no service or region. The descriptive wording only arrives in the paragraph.
- Avoid: rating marks with glyph stars, no count and no link target seen (`first-viewport.jpg` y595–625).
- Avoid: a 7-field one-row form at 1440 ("How did you hea…", "Referred by a tea…" truncated, `first-viewport.jpg` y755–795). The labels are cut off.
- Avoid: the first "Latest News" card has no image ("Why Winter Roof Leaks…", `segment-007200.jpg` y805–1140). The blog index sheet at both widths shows the same, so it is a real missing featured image, not an artefact.
- Taste: the homepage repeats almost every module (form, reviews, process, FAQ, news, CTA) that also appears on inner pages, so the inner pages read as re-orderings of one kit.

## Per template (sheet scale unless stated)

- **t00 blog (15):** dark photo hero with centred title and date/author → long single-column text with red H2/H3 → "SHARE THIS ARTICLE" → CTA band → footer. No sidebar, no related posts, no inline form. **All 15 posts have 0 H1** (record `headings` at 390). The title is not an H1. At 390 the share row shows a literal **`[novashare_inline_content]` shortcode** in several cells (e.g. blog__5-reasons, guide-to-choose-shingle-color, preparing-your-home: sheet `390/t00-blog_x-0.jpg`, needs a full-size check). Hero photos are a mix of real-looking houses and stock (icicles, drone).
- **t01 locality A (7: eau-claire, madison, minnetonka, owatonna, plymouth, savage, twin-cities):** dark photo hero with "Your Local Exterior Experts Proudly Serving {City}, {State}" (H1 40 px/800 at 390) and contacts on the left, form card on the right. Optional "Storm Alert: {date} Hail & Wind Damage in {City}" block (minnetonka, owatonna, plymouth; plymouth shows a hail-in-hand photo). Then 6 alternating service rows (photo + text + "Learn More"), "Why {City} Homeowners Choose Us", 3 reviews, owner band + supplier logos, CTA, footer. The text varies by city, the photos are reused across cities. At 390 the hero text is long, so the form starts around frame 2 *(sheet)*. Twin-cities drops "Why choose" and adds "OUR SERVICES".
- **t04 locality B (3: apple-valley, columbia-heights, eagan):** same hero and form. Services become the dark numbered tab list (01–06) rather than 6 rows, so the page is shorter (5.2k vs 7–8k px). Columbia-heights reverts to rows, hence the flag.
- **t02 product/service B (certainteed, drone-thermal-scan, ice-dam-removal, lp-smartside):** dark hero with a **large curved bottom-left edge** and a form card that has a red block tucked behind its lower-left corner. The H1 is 40 px (descriptive: "Certainteed Shingles: Beauty, Durability, and Proven Protection") beside rating marks. Then alternating photo/text rows with rounded corners, process, owner band, map + city list, reviews, CTA, footer. Ice-dam has a different hero ("Contact Us" form) and its own photo set.
- **t05 (brava, wood-decks):** Brava is long (8.4k/12.6k) with dark product bands (Cedar Shake, Old World Slate, Spanish Barrel), a Brava Preferred Contractor seal, FAQ and "Ready for your new Brava roof?". Wood-decks is short: hero, 3 rows, process, reviews, CTA.
- **t06 (gutters, windows):** dark hero with form → reviews first → feature rows with red accent words ("Gutter Genius", "Pella Windows") → dark band → process → map → owner → FAQ → news → CTA.
- **One-offs:** About: hero with owner couple photo, story, "Roofing Reimagined", **"Meet The Home Front Team" grid of 10 real staff portraits in matching black polos on a dark band** plus a "Looking for a new position?" tile, "Pledging 100% Satisfaction", "See Our Work", the Minnesota/Wisconsin map with a review card, "To Us, You Are More Than Just A Job", FAQ, news. Contact: hero photo with form, owner avatar quote, reviews, map, "Reliable Excellence", FAQ, news. Financing: hero with photo tile and 3 loan facts (not read at full size), "Payments in Easy Pieces", FAQ. Services: heading + supplier logo strip + tab list + process + all-in-one band + FAQ. Projects: 3×4 grid with "+" lightbox markers (loaded at 390). Reviews: very long 3-column card wall (8.9k px at 1440, **21.9k px at 390**). 404 (`/terms-conditions/`): "Oops…You Seem To Be Lost!" + service pills; **the footer "Terms" link leads to a 404**. Careers: one open position, team photo, map, news. Sales-rep page: job text + "Apply Now!" form with resume upload. AVHS Cheer: community fundraiser page with real cheer-team photos (an "Apple Valley Eagles" banner photo in the hero).

## SEO notes (record)
- Inner one-offs use a **14 px/400 eyebrow as the H1** with a large H2 visually leading. Roofing H1 "Midwest's Top Residential Roofing Experts", siding "#1 Siding Contractor In The Midwest", windows "Midwest Window Installation", gutters "Midwest Installation", about "About Us", contact "Contact Us". This is the Puetz small-descriptive-H1 pattern, but the wording here is mostly generic.
- Locality and t02 pages have a visible 40 px descriptive H1 containing city and state.
- Blog posts have no H1 at all.
- Schema: `GeneralContractor` + `Place` with Eagan address and geo, `priceRange $$$`. The opening hours string is malformed (`"Tu 01:00-:2400"`).

## Interactions
`bulk-interactions.json` has 100 entries for this site (contact, faq, projects, home, services; 1440 and 390), plus `home-fix` and `round2-*` folders. The desktop-dropdown check on home logged `error: Target page… closed`, though the dropdown items were recorded (About: Careers / Customer Reviews / Community Spotlight; Services: Residential Roofing / Brava Roof Tiles / Commercial Roofing / Energy loss…). The primary CTA "Get In Touch" links to `/contact/`. **Not analysed further**: no interaction screenshot was viewed, and `bulk-interactions-fix.json` was not checked for this site.

## Copy / Avoid (summary)

Copy
1. Pill-shaped inline form crossing the hero edge, with one red submit (`homefrontexteriorsmn.com/home/1440/segment-000000.jpg` y540–610).
2. Review snippet docked on a photo corner with an initials ring (`home/1440/segment-002400.jpg` y545–640).
3. Numbered dark service tab list: six services in one short block, also short on mobile (`home/1440/segment-002400.jpg` y715–1525; t04 sheets).
4. One accent colour with one job (red = action, accent word, logo square), plus the opposing-rounded-corner shape repeated everywhere.
5. Real team grid on the About page (10 matching portraits) and the owner band with name, title and signature. Real people as identity (rule 8).
6. City links as visible underlined navigation beside the map on many pages (`home/1440/segment-000000.jpg` y860–960).

Avoid
1. Mobile footer that drops all service and locality links (every 390 sheet cell).
2. Slogan H1 on the homepage and generic eyebrow H1s on inner pages. Blog posts with no H1.
3. A literal shortcode `[novashare_inline_content]` shown to readers (390 blog sheet; confirm at full size).
4. Footer link to a page that 404s (`terms-conditions`), and a blog card with no image.
5. Glyph stars and "5.0 Rating" with no count or link; ▸ glyph arrows on every button (the user's no-glyph rule applies).
6. Locality pages that are one template with the city swapped and the same photos; a 21.9k px review wall on mobile.
7. Generic stock family in the site-wide CTA band (taste: weaker than the real team photos).

## Candidate key screenshots
1. `homefrontexteriorsmn.com/home/1440/segment-000000.jpg`: pill form crossing the hero edge, hero tile collage, review cards overhanging the panel (the images that did load are enough here).
2. `homefrontexteriorsmn.com/home/1440/segment-002400.jpg`: docked review snippet and numbered service tabs (imagery grey: use for layout only).
3. `homefrontexteriorsmn.com/home/1440/segment-004800.jpg`: owner statement band with name/title and values ticker (photo missing; prefer an eau-claire-wi/1440 segment once viewed).
4. `_sheets/homefrontexteriorsmn.com/1440/t07-one-off-0.jpg` → `about/1440` team-grid segment (not yet located at full size).
5. `_sheets/homefrontexteriorsmn.com/390/t01-_1-0.jpg`: shows the mobile footer without service/locality links across 7 pages.

## Gaps (what remains)
- Full-size viewing of every one-off (both widths), 2 examples per template, flagged pages and home/390. The strips are ready in `/tmp/homefront-strips/`. The highest-value next views are home/390, about, contact, eau-claire-wi, certainteed and blog__5-reasons (to confirm the shortcode).
- Resolve the minnetonka/owatonna Storm Alert blank box (the 390 frame at full size).
- Fixed header and mobile bar heights at 390 (from `first-viewport.jpg` and the record `fixed` boxes).
- Interaction screenshots (`_interactions/*`) and the `bulk-interactions-fix.json` entries.
- A home/1440 recapture with images loaded, if the lead wants homepage imagery judged at desktop.
