# ArbCut v4: Hook reference deep study (INCOMPLETE, stopped by budget steer)

Status 2026-11-04: stopped twice by budget steers (1,514,291 of 1.5M, then 844,163 of 750k). Live viewing so far: 20 of 252 chunks, all Genz-Ryan home. Everything else on live pages is DOM data only, or not done. See "Corrective batch" below.

## Coverage

Article: complete text read (10 featured companies), all 10 article screenshots viewed at full size (1200x700; True Air 1440x968).

| Site | Base | Sitemap URLs | Crawl-known URLs | Captured 1440 | Captured 390 | Chunks | Live chunks viewed | Errors |
|---|---|---|---|---|---|---|---|---|
| puetz | https://puetzconstruction.com | 241 | 244 | 1 | 1 | 28 | 0 | {'page.evaluate: Target page, cont': 1} |
| smock | https://smockhvac.com | 264 | not run | 0 | 0 | 0 | 0 | none |
| veterans | https://veteranscontractingllc.com | 184 | 196 | 2 | 2 | 52 | 0 | {'page.evaluate: Target page, cont': 1} |
| genz | https://genzryan.com | 326 | 328 | 1 | 1 | 37 | 20 | {'page.evaluate: Target page, cont': 1} |
| northface | https://northfaceconstruction.com | 354 | 360 | 1 | 0 | 16 | 0 | {'page.evaluate: Target page, cont': 1} |
| bears | https://bearsplumbing.net | 142 | not run | 0 | 0 | 0 | 0 | none |
| trueair | https://trueairconditioningandheating.com | 47 | not run | 0 | 0 | 0 | 0 | none |
| homefront | https://homefrontexteriorsmn.com | 51 | 53 | 1 | 1 | 31 | 0 | {'page.evaluate: Target page, cont': 1} |
| thelen | https://callthelen.com | 244 | 244 | 2 | 2 | 46 | 0 | {'page.evaluate: Target page, cont': 1} |
| greentek | https://greentekroofing.com | 400 | 404 | 1 | 1 | 42 | 0 | {'page.evaluate: Target page, cont': 1} |

Totals (viewed figure superseded by the corrective batch): 2253 sitemap URLs; 9 desktop and 8 mobile page-widths captured; 252 chunks; 0 viewed; 2274 URLs pending. Interactions checked: 0.

Every Errors entry is a page open when I stopped the job, not a site fault. Counts are a floor: the internal crawl did not finish, so URLs absent from sitemaps are not yet known. Sitemap URLs include posts and taxonomy pages. Pending list: `/tmp/arbcut-v4-deep-hook/pending-urls.json` (may vanish; regenerate with `scripts/inventory.py`).

The four earlier homepage capture sets in `/tmp/arbcut-v4-study/captures` were not re-viewed.

## Official domains

| # | Company | Domain | Evidence |
|---|---|---|---|
| 1 | Puetz Construction | puetzconstruction.com | Hook lookbook link |
| 2 | Smock Heating & Air | smockhvac.com | Hook lookbook link; ericsmockhvac.com redirects here |
| 3 | Veterans Contracting | veteranscontractingllc.com | Hook lookbook link; "Elevating Roofs" in home HTML |
| 4 | Genz-Ryan | genzryan.com | Hook lookbook link; article says no longer Hook's build |
| 5 | Northface Construction | northfaceconstruction.com | Hook lookbook link |
| 6 | Bear's Plumbing Services | bearsplumbing.net | Not in lookbook links. Directory listings give this domain with 281-350-2327, the number in the article screenshot |
| 7 | True Air Conditioning and Heating | trueairconditioningandheating.com | Not in lookbook links. GuildQuality listing; "True Difference" in home HTML |
| 8 | Home Front Exteriors | homefrontexteriorsmn.com | Hook lookbook link; "Our Canvas" in home HTML. Earlier guess homefrontexteriors.com was wrong |
| 9 | Thelen Mechanical | callthelen.com | Lookbook links thelenmechanical.com, which redirects here |
| 10 | GreenTek Roofing & Solar | greentekroofing.com | Lookbook links greentekps.com, which redirects here |

## Article screenshot vs today

Only a raw home-HTML string check was done, not a visual comparison. "Stand a Chance" (Bear's) and "Smart Roofing" (GreenTek) were not found. That may mean changed copy or split markup: I do not know which. Home Front's title now reads "Fast Insured Roofing You Can Trust | Proudly Serving MN & WI". Screenshots are Hook's launch mockups, not current pages.

## Observed in article screenshots

Source: `/tmp/arbcut-v4-deep-hook/article/*.png`, copied from hookagency.com/wp-content/uploads. All of this is visual reading of one first screen per site. No measurements or CSS.

| Site | Composition seen | Weak or unresolved |
|---|---|---|
| Puetz | Split: text on faint blueprint linework, house photo bleeds right. Tan ribbon label, form strip overlaps photo edge, rating ribbon on the photo corner | Rating logos are tiny |
| Smock | Red wave header over full photo, white card holds headline, two-colour heading, Google card on photo, three path buttons | Article calls it a cozy family photo; whether it is a real customer or stock: I do not know |
| Veterans | White left column cut over a large roof photo, black form bar crossing into a drone photo | Ratings are small and sit over the photo |
| Genz-Ryan | Family cut out over a blue house image, red label, yellow CTA, offer cards crossing the hero base, top offer bar | Mobile: the call button and bar cover the last H1 line. Dense first screen |
| Northface | Blue diagonal field, form card overlapping a couple-and-dog photo, ratings docked in the form base | Mobile headline starts after a full photo |
| Bear's | Real team before wrapped vans, photo fades to black, condensed caps, red benefit strip | Mobile: team is very small; mascot unreadable at that size |
| True Air | Dark panel, blue-framed photo of two people and a dog with units, centred logo above a nav bar | Plain beside the others; little visible proof |
| Home Front | Black field, rounded photo tiles with red square, thin and heavy caps pairing, pill form crossing into white | Placeholder 763.000.0000 and an empty grey tile in the mockup |
| Thelen | Blue field, circular photo, curved base, form card crossing the curve | "Lorem ipsum" visible in the video callout of the mockup. Whether it is live: I do not know |
| GreenTek | Dark roof photo, centred headline with underlined "Smart", green arc, form crossing it, ratings tab beneath | Text over a busy photo depends on the dark overlay |

## Provisional rules (10 first screens only)

Treat these as hypotheses until live pages are viewed.

1. A form or card row clearly crosses a section edge in 6 of 10 screens (Puetz, Genz-Ryan, Northface, Home Front, Thelen, GreenTek). Smock and Veterans are borderline; Bear's and True Air do not.
2. All 10 hero images show a house, team or family, not an abstract background.
3. The mobile bottom bar is in all 10 launch mockups and costs reading space. Live Genz-Ryan differs: its viewed mobile chunks show a top sticky bar instead.
4. Eight of 10 mobile screens put the photo before the headline, so headline position depends on photo height. True Air leads with text; GreenTek sets text over the photo.
5. Launch-quality checks: no placeholder phone, lorem ipsum or empty tiles.

For ArbCut, separate from any edit: rule 2 suits the clean photographic direction with real ArbCut photos; rule 1 could carry the existing quote CTA without changing content or order; only real facts may become badges. bb63bd8 copy, order, SEO and function stay unchanged. Logo variants are not addressed here.

## Corrective batch: viewed evidence

Ledger: `/tmp/arbcut-v4-deep-hook/viewed-ledger.json`. Viewed 20 chunks in 9 panels; no image was removed. 232 captured chunks in 93 panels remain unviewed.

- Desktop: genzryan.com home, `caps/genz/home/1440`, y0 to y11700, 16 chunks, header to footer.
- Mobile: same page, `caps/genz/home/390`, y0 to y2340, 4 chunks only. The rest of that mobile page is unviewed.

Panels stack source chunks at native scale, with no downscaling (desktop 2 per panel, mobile 4 side by side), so they are not the reduced overview rejected earlier. Limits of this view:

- The fixed header covers content at each join: about 206 px on desktop, because panels crop the 120 px overlap, and about 68 px on mobile. The hidden strips were not seen. Example: the first process text and some card headings.
- Analytics and tag-manager requests were blocked, so widgets loaded that way are absent. Chat or popups: I do not know.
- The grey map, one blank job photo and the white mobile family photo may be capture timing, not site faults. Unverified.

### Genz-Ryan home at 1440 (today, not the article build)

The live page differs from the article mockup: owner and vans replace the family hero, rating reads 4.7 from 9097 reviews (mockup 4.9 from 262), and the footer credits Ferocious Media.

| Section | Composition and type | Colour and image | Proof and CTA | Weak points |
|---|---|---|---|---|
| Header | Three tiers: utility bar, logo row, red nav. Fixed, 206 px measured, 23% of a 900 px viewport | Blue, white, red; yellow quote tab | Rating, Book and phone always visible; "I Love Those Guys!" slogan beside logo | Heavy on every scroll, and it sits over content |
| Hero | Tilted yellow label holds the H1, left column, owner overlaps label and van row | Sunburst blue beside a real van-fleet photo | Book and phone buttons; five seals across a curved base | Seals crop into the fold edge; many signals at once |
| Three red cards | Centred text, icon circle breaks the card top | Red with yellow buttons | Financing, HomePulse, Coupons paths | Card titles are styled paragraphs, not headings |
| About | Split: text left, family photo right with offset red block | Real family photo, rounded | Family and "Since 1950" tags | Generic "Learn More" |
| Process | Five numbered cards on halftone red, first card yellow | Illustrated icons | Book and phone repeated | Tall cards with uneven text starts |
| Services | Blue-tinted job photos, tilted yellow labels; 3 + 2 centred | Duotone unifies mixed photos | Each card is a route | Duotone reduces the photo detail |
| Troubleshooting | White card on blue with offset red shadow; video left | Real presenter | Useful self-help content, Learn More and phone | Below it, red titles sit on blue with poor legibility |
| HomePulse plans | Comparison grid, tilted tier tags | Tier colours | Prices and annual value stated | Dense but clear |
| Coupons | Three dashed coupon cards, logo breaking the top | Sunburst repeat | Expiry dates, Book on each | Logo repeated three times; details hidden behind a toggle |
| Value cards | Four red cards | Icon circles | Four "Learn More" buttons | Large empty card interiors |
| Job map feed | Map plus dated job cards with city tags | Real job photos | Recent local work | Different type style; feels embedded |
| Reviews | Two white cards plus red summary | Sunburst | Named Google reviews | Short reviews leave large empty cards; summary is a long text block |
| Form | White card overlapping blue and pale bands | Offset red edge | Full form, two consent notices | Long form; large gap around guarantee badge |
| Guarantee | Badge overlaps card edge, five icon columns | Blue badge | Named guarantees | Blank right side beside badge |
| Service area | Text left, 26 underlined city links in 3 columns, map right | Blue map | Local coverage | Strong: readable and descriptive links |
| Closing band | Owner photo with white-boxed heading | Red panel, lightning van graphic | Book and phone | Repeats earlier CTA pattern |
| Footer | Curved top, four columns, licence numbers | Sunburst repeat | Book, phone, locations accordions | Clear; location details hidden until opened |

Why it reads as a brand rather than a template: the same three colours, tilted yellow label, sunburst and offset red edge repeat across unrelated sections. Why it feels busy: nearly every section adds another colour block, button pair or badge.

### Genz-Ryan home at 390 (first four chunks only)

The header becomes logo, menu and a split Schedule and phone bar, 188 px tall in view. The hero drops the owner and van photo in the viewed area: label, line, two full-width buttons, then five small seals. Cards stack one per screen, so the three paths take over two screens. Text centres throughout. Seals become too small to read comfortably.

### Measured mechanics (saved DOM)

Display font `ezra`, body `proxima-nova` 16 px with 25.6 px line height in #686868, about 69 characters per line at 550 px. H1 48 px uppercase, H2 40 px, brand red #c92a39, square buttons. `prefers-reduced-motion` found in readable CSS. Font weights were lost to a script bug. The tilt mechanism was not inspected.

## SEO and design harmony (first pass)

DOM figures below cover all 17 captured page-widths, but only Genz-Ryan was viewed. Rankings, traffic and conversions are unknown; nothing here claims them.

Google Search Central points used:

- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): heading order does not affect Search, though semantic order helps screen readers. Images should sit near relevant text.
- [Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable): crawlable `<a>` links, descriptive anchors, links in context.
- [Mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing): keep the same primary content on mobile; tabs and accordions are acceptable; do not lazy-load primary content on interaction.
- [Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): people-first content, not pages made mainly for search visits.
- [Page experience](https://developers.google.com/search/docs/appearance/page-experience): Core Web Vitals are used, but there is no single signal and good scores guarantee nothing.

Visual prominence versus heading tags (home pages, 1440):

| Site | H1 | What looks like the headline |
|---|---|---|
| Genz-Ryan | Slogan, 48 px | Same. The service and area line is a 28 px DIV |
| GreenTek | 15 px eyebrow, "Tampa Bay's #1 Roofing Company" | H2 at 50 px |
| Northface | 12 px eyebrow, "5-Star Minneapolis Roofing Contractor" | H2 at 46 px |
| Puetz | 16 px eyebrow with services and region | H2 at 40 px |
| Thelen | None found | 117 px DIV |
| Home Front | 36 px slogan | Same; next heading is an 18 px H3 |
| Veterans | 64 px, plus blog titles also marked H1 | First H1 |

Pattern: GreenTek, Northface and Puetz keep descriptive service text in a small H1 and a brand line in a large H2. That separates search-descriptive wording from visual hierarchy. Whether it helps is unknown. Google's guide does not make skipped levels a Search problem, so treat them as accessibility issues.

Other DOM signals:

- Links in body paragraphs: 0 to 2 on every captured page; card links 5 to 133; nav and footer 54 to 125. Internal linking lives in cards and menus. Genz-Ryan's repeated "Learn More" is less descriptive than its city links.
- Titles: most name service and area; Veterans uses "Home - Veterans Contracting".
- Hidden content: Genz-Ryan about 5,200 characters and Veterans about 3,300 in closed or hidden elements. The selector is heuristic.
- Word counts differ by width (Puetz 1770 desktop, 312 mobile; Thelen 684 and 1453). This may be capture timing, so it is not proof of a parity gap.
- Performance figures came from seven sites crawling at once with trackers blocked. They are not benchmarks and are not used.

## ArbCut implications (separate recommendations, no edits)

bb63bd8 copy, order, SEO and function stay as the baseline. Approval comes before implementation.

1. Keep a small repeated device system, as Genz-Ryan does, but limit it to one or two devices to avoid its busyness.
2. Keep the fixed header well below Genz-Ryan's 206 px.
3. Check whether section card titles that act as headings are real headings.
4. A readable, descriptively linked service-area block is worth matching.
5. Reviews need layouts that survive short quotes without empty cards.

## Method notes and gaps

- T3 preview opened after an initial unavailable status. I used Playwright for bulk capture anyway, because preview needs a tool call per screenshot. This departs from the "fallback only if unavailable" wording.
- Headless Chrome got 403s from Smock and True Air ("Checking your browser") and Bear's ("403 Forbidden"). I stopped requesting those sites from it and did not try to get around the check. Preview did load True Air's title, but no capture was taken. Correction from the lead: an ordinary browser is allowed for this task, so that restriction was wrong. Use T3 preview for these sites, without evading access controls. Not attempted yet.
- Bulk capture blocks analytics and tag-manager requests, so widgets injected that way would be missing. Keep this in mind on resume.
- Script bug: heading records lost text and font weight (position fields overwrote them). Section headings and H1 text survive. The 390 fixed-element list also missed Genz-Ryan's sticky header, so treat it as incomplete.
- A stale-log error forced a clean restart; earlier partial captures were deleted from my own folder.

## Pending

1. Capture Smock, True Air and Bear's through T3 preview if normally accessible.
2. Resume: `cd /tmp/arbcut-v4-deep-hook && node scripts/capture.mjs puetz,veterans,genz,northface,homefront,thelen,greentek` (skips finished URL and width pairs).
3. View the remaining 232 captured chunks first (`viewed-ledger.json`), then continue in complete capture, view and notes batches.
4. Interactions, hover, focus, motion and dialogs: all still open. Fix the heading field bug before new capture.
