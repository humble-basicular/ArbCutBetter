# ArbCut v4: Hook reference deep study (INCOMPLETE, stopped by budget steer)

Status 2026-11-04: incomplete. Three budget steers so far (latest 2,178,775 of 2M). Live viewing: 48 of 252 chunks, covering the full Puetz home (28) and Genz-Ryan home (20). Puetz home is the one page analysed to full depth; see "Puetz home: completed depth". The 2,253+ page inventory remains pending.

## Coverage

Article: complete text read (10 featured companies), all 10 article screenshots viewed at full size (1200x700; True Air 1440x968).

| Site | Base | Sitemap URLs | Crawl-known URLs | Captured 1440 | Captured 390 | Chunks | Live chunks viewed | Errors |
|---|---|---|---|---|---|---|---|---|
| puetz | https://puetzconstruction.com | 241 | 244 | 1 | 1 | 28 | 28 | {'page.evaluate: Target page, cont': 1} |
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

## Puetz home: completed depth

URL: https://puetzconstruction.com/ . Ledger: `/tmp/arbcut-v4-deep-hook/puetz/ledger.json`. Bounded milestone for one page, not the site.

### Evidence and coverage

| Evidence | Viewed | Notes |
|---|---|---|
| Desktop chunks | 13 of 13 | Half-scale panels `d0` to `d2`. Fine left-column text comes from DOM, not these images |
| Mobile chunks | 15 of 15 | Native panels `m0` to `m3`. They stop in the blog section |
| Mobile recovery | 21 of 21 bands, plus 14 gap strips | Bands cover only the area between fixed bars, 703 px each, step 680, full page to the legal line. Strip positions may have drifted |
| Desktop recovery | Right column (8 pieces), footer tail | Widgets hidden with injected CSS. Read-only change in my browser |
| Interactions | Services hover, quote tab, mobile menu, one FAQ toggle | T3 preview, nothing submitted |

Why recovery was needed: the saved heights were wrong. Mobile saved 10,992 px; with `content-visibility` forced visible the page measures 13,935 px, so the old chunks miss the closing CTA and footer. Desktop saved 9,820 px; live measures 10,484 px, so the last old chunk stops at the address. Fixed bars also hid 77 px at each old mobile join. Bands recover these.

Capture differences: old chunks blocked analytics and tag-manager requests; recovery runs did not, except that the band run forced `content-visibility`. Podium chat and the quote tab appear in old desktop chunks, so those widgets are not blocked there.

### Article vs today

The layout skeleton survives: split hero, form strip, ribbon, red CTA. The content changed. "Transforming Daydreams into Blueprints" is gone, the finished home is replaced by a wrapped job-site house with a phone banner, and the header CTA now reads "Let's Begin Today".

### Section notes

| Section | Purpose | Composition and hierarchy | Proof, CTA, image | Weak points |
|---|---|---|---|---|
| Header | Route and contact | Fixed, 109 px, logo left, four nav items, phone chip, red CTA | Red solid button is the single strongest element | Mobile logo bar has no action |
| Hero | Say who, where, what | Text left on faint blueprint linework, photo bleeds right to the top edge. Tan ribbon, 40 px headline, three icon facts | Real job-site photo with company banner: memorable and local | Banner number differs from the page number |
| Form strip | Immediate lead | White card overlaps hero base; five fields in one row | Short, clear; rating ribbon docks on the photo corner | At 1440x900 the Podium prompt covers the submit button on load |
| Trust logos | Supplier credibility | Single row, 205 px, restrained on desktop | Real supplier marks | Mobile: oversized stack, about 1,164 px, uneven sizes, repeats. Worst mobile decision on the page |
| Services | Route to services | Image cards, icon plus title over a dark overlay; 2 + 2 + 1 centred | Whole card is one link; real project photos | White text on pale interior photo is weak on Home Remodels |
| Puetz Promise | Human accountability | Navy band, owner and dog cut out over large logo mark, signature | Strongest brand moment: a real person layered on a brand device | Long quote is set small on desktop |
| Trusted partner | Reassure | Text left, crew photo right | Casual real crew photo | Generic copy block |
| Reviews | Third-party proof | Widget, three cards with carousel on desktop | Named Google reviews | Different type voice; the heading is a `span`. Mobile shows no review cards |
| Process | Reduce uncertainty | Three white cards; "Call Now!" flag on step one | Clear first step | Mobile takes about 1,350 px |
| Service area | Local relevance | Minnesota shape with watchtower breaks out of the navy band | Licence numbers; distinctive device | Lifestyle copy; no city links |
| One stop | Summarise range | Photo left, text right | Clean porch photo | Long paragraph repeats the services |
| Recent projects | Show work | Three equal photos, "See More" | Good real photos | Heading turns black, off the navy system |
| Project map | Local proof | Embedded third-party map | Mapped jobs concept | Grey and "no projects" in the capture. Loaded state not verified. Not visible in mobile bands |
| FAQ | Answer objections | Title left, boxed accordion right; first open | Offset review strip keeps proof nearby | Answers closed by default |
| Blog | Depth | One feature plus two side items | Topical real images | "Keep Reading" is repeated |
| Closing CTA | Final action | Framing photo under navy gradient, 48 px centred line | One clear button | Plain compared with the Promise band |
| Footer | Contact and routes | Tan, large logo, four link columns, pine silhouette | NAP, licence, legal links | Logo is very large for a footer |

### Why it reads as professional, and what undercuts it

Strengths: one colour system (navy, red, tan); real local photos; two brand devices used sparingly (ribbon, Minnesota watchtower shape); consistent square red actions; calm white space on desktop.

Undercutting it: four floating conversion elements compete at 1440 (quote callout, quote tab, Podium prompt, Text us); mobile supplier logos break the rhythm; labels vary for one action (Let's Begin Today, Get Started Today, Contact Us, Call Now).

Proof is inconsistent: hero copy says 363+ Google reviews, the widget says over 375. Six different phone numbers appeared across sessions (507-932-8806, 442-6467, 668-8547, 690-3987, 410-4643, 418-5765). This looks like call tracking; that is an inference.

### Mobile adaptation

- Hero reverses: photo, ribbon, centred headline, facts, then stacked form. Text centres almost everywhere; service cards stay left aligned.
- Fixed bars take 197 of 900 px (109 top, 88 bottom). The bottom bar keeps Menu and phone in thumb reach, which is the best mobile decision here.
- Menu opens in place: socials first, then accordion items, with Contact added. The photo stays visible above it.
- The Promise band moves text above the portrait, which works well.

### Parity (corrected)

The old 312-word mobile count was an artefact. With a mobile user agent, 9 sections use `content-visibility: auto`, and `innerText` skips off-screen ones. Scrolling each section into view gives equal text in 10 of 14 sections. Remaining differences:

| Section | Desktop visible words | Mobile visible words | Cause |
|---|---|---|---|
| Trust logos | 6 | 0 | Logos only |
| Reviews | 769 | 13 | Review cards present in DOM but not rendered on mobile |
| FAQ | 115 | 47 | Same 176 words in DOM; open state differs |
| Hero | 91 | 91 | Equal |

In preview at 390 with a desktop user agent, no section reported `content-visibility: auto`, so it may depend on the user agent. Cause not confirmed.

### Semantics (live DOM)

Recovered outline, with size in px and weight:

- H1 "Southern Minnesota Roofing, Siding & Remodeling Contractors": 16, Sen 500, inside the tan ribbon.
- H2 "Your Local Full Service Construction Company": 40, weight 400. This is the visual headline.
- H3 "Get Started Today!": 25.
- H2 "Contracting Services We Offer": 36, then five service names as H5 at 20.
- H3 "The Puetz Promise" 30, H3 "Your Trusted Contracting Partner For Life" 36.
- H2 "Our Process" 36; each step is H5 "Step One:" at 20 above H4 "Reach out" at 35, so tag level and size invert.
- H2 "Licensed in Minnesota, Wisconsin & Iowa" 15, above H3 "Your Local Contractor in Southeastern Minnesota" 36.
- H3 "One Stop Building Solution" 36, H3 "Recent Projects" 30, H2 "Frequently asked questions" 30, FAQ questions H3 at 25.
- H2 "Fresh From our Blog" 30, H2 "Quality Work, Done Right" 48.
- Reviewer names (Glen S., Billy Reed) are H5. Phone, email and address are H6.
- "What Our Customers Say About Us" is a 36 px `span`, not a heading.

Display font `neilvard_semibold_oneregular` reports weight 400, so its weight is built into the file. Body is Sen 16/25.6 px.

Reading: the small H1 keeps exact service and region wording while the large H2 carries the brand line. The title repeats service and region. Tags are partly used for styling: reviewer names and contact details sit in the outline, while the review heading is missing. Google says [heading order does not affect Search](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), though semantic order helps screen readers, so this is a clarity and accessibility issue, not a ranking finding.

### Links, content and conversion

- Service cards are single links whose text includes title and description, so "Learn More" is not the real anchor. That suits Google's [descriptive anchor guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). This corrects the assumption that visible "Learn More" means generic anchors.
- Body-copy links: 0 in saved DOM. The service-area and FAQ text name towns (Rochester, Winona, Mankato and others) with no links. Whether matching pages exist was not checked.
- "See More" appears twice and "Contact Us" twice, which is weaker than the service cards.
- Accordions are acceptable under [mobile-first guidance](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing), which also asks for the same primary content on mobile. Review cards hidden on mobile deserve a check; whether Puetz treats them as primary content is unknown.
- Conversion path: phone and form sit at the top, then proof and service routes, with a closing CTA. Analytics, conversions and rankings: unknown.

### Interactions and mechanics

| Check | Result |
|---|---|
| Services hover | White dropdown, five links, overlaps headline; label turns red |
| Resources | Parent has no href; opens on hover. Touch behaviour on desktop widths untested |
| Fixed header | `position: fixed`, 0.3 s transition |
| Red CTA | #c01931, white, 16 px, radius 0, padding 12 x 36, soft shadow, `transition: all`. Links to `/contact/`, no dialog |
| Instant Roof Quote | Slide-out wrapper 1,152 px wide loading `app.roofle.com`. No `role` or `aria-modal`; close control is a `div`. Screenshot caught the transition, so its contents were not seen |
| Mobile menu | `button.menu-toggle`, opens as above. Wrapper `aria-expanded` read false while open, but that wrapper measured 0 x 0, so this may be the wrong element. Unresolved |
| FAQ | Clicking the H3 toggles it; one open at a time. H3 has `tabindex=-1` and no `aria-expanded` was found. Keyboard not tested |
| Motion | Reduced-motion rule exists; no scroll-animation markers found. Actual motion not tested |
| Hero image | `fetchpriority=high`, responsive 1536 and 768 variants; about 1,439 px natural shown at 645 px on desktop |

Not tested: hover and focus states beyond the above, review carousel, map load, quote flow contents. Preview screenshots saved at 1280x800 despite a 1440x900 setting, so the widget overlap should be rechecked at exact size; `d0`, captured at 1440x900, shows it too.

### Rules for ArbCut (recommendations only, no edits)

bb63bd8 copy, order, SEO and function stay. Implementation needs approval.

1. One real person over one brand device is the strongest move here (Puetz Promise). It suits the clean photographic direction if real ArbCut photos exist.
2. Reserve display type for a small set of headings and keep accent devices to two.
3. Keep one label per action across the page.
4. Check that floating elements never cover a form submit.
5. Limit logo strips on mobile by height; test them at 390, not just desktop.
6. If reviews are hidden on mobile, decide that deliberately. Keeping proof visible matches the agreed review section.
7. Whole-card links with real text are a good model for service cards.
8. Test true page height after lazy rendering when auditing ArbCut's own pages.

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
- Puetz word-count gap (1770 desktop, 312 mobile) was a measurement artefact; see Puetz parity below. Thelen's difference (684 and 1453) is not rechecked.
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
3. View the remaining 204 captured chunks (`viewed-ledger.json` lists unviewed panels; Puetz is now done, see `puetz/ledger.json`), then continue page by page at Puetz depth.
4. Interactions, hover, focus, motion and dialogs: all still open. Fix the heading field bug before new capture.
