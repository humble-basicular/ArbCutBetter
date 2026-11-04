# ArbCut v4: Hook reference deep study (INCOMPLETE, stopped by budget steer)

Status 2026-11-04: stopped at the 1.5M input-token soft limit (1,514,291 reported). This is the verified inventory and article-screenshot layer only. No live page of any featured site was viewed in this run, so there are no live-site, CSS, interaction or SEO findings here.

## Coverage

Article: complete text read (10 featured companies), all 10 article screenshots viewed at full size (1200x700; True Air 1440x968).

| Site | Base | Sitemap URLs | Crawl-known URLs | Captured 1440 | Captured 390 | Chunks | Live chunks viewed | Errors |
|---|---|---|---|---|---|---|---|---|
| puetz | https://puetzconstruction.com | 241 | 244 | 1 | 1 | 28 | 0 | {'page.evaluate: Target page, cont': 1} |
| smock | https://smockhvac.com | 264 | not run | 0 | 0 | 0 | 0 | none |
| veterans | https://veteranscontractingllc.com | 184 | 196 | 2 | 2 | 52 | 0 | {'page.evaluate: Target page, cont': 1} |
| genz | https://genzryan.com | 326 | 328 | 1 | 1 | 37 | 0 | {'page.evaluate: Target page, cont': 1} |
| northface | https://northfaceconstruction.com | 354 | 360 | 1 | 0 | 16 | 0 | {'page.evaluate: Target page, cont': 1} |
| bears | https://bearsplumbing.net | 142 | not run | 0 | 0 | 0 | 0 | none |
| trueair | https://trueairconditioningandheating.com | 47 | not run | 0 | 0 | 0 | 0 | none |
| homefront | https://homefrontexteriorsmn.com | 51 | 53 | 1 | 1 | 31 | 0 | {'page.evaluate: Target page, cont': 1} |
| thelen | https://callthelen.com | 244 | 244 | 2 | 2 | 46 | 0 | {'page.evaluate: Target page, cont': 1} |
| greentek | https://greentekroofing.com | 400 | 404 | 1 | 1 | 42 | 0 | {'page.evaluate: Target page, cont': 1} |

Totals: 2253 sitemap URLs; 9 desktop and 8 mobile page-widths captured; 252 chunks; 0 viewed; 2274 URLs pending. Interactions checked: 0.

Counts are a floor: the internal crawl did not finish, so URLs absent from sitemaps are not yet known. Sitemap URLs include posts and taxonomy pages. Pending list: `/tmp/arbcut-v4-deep-hook/pending-urls.json` (may vanish; regenerate with `scripts/inventory.py`).

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

1. One element crosses a section edge in 8 of 10 screens, usually the form or card row.
2. Eight of 10 hero images show a specific house, team or family, not an abstract background.
3. The mobile bottom bar is present in all 10 and costs reading space; check it never covers the H1 (Genz-Ryan does).
4. Mobile restacks: photo first, then label, headline, text. Headline position then depends on photo height.
5. Launch-quality checks: no placeholder phone, lorem ipsum or empty tiles.

For ArbCut, separate from any edit: rule 2 suits the clean photographic direction with real ArbCut photos; rule 1 could carry the existing quote CTA without changing content or order; only real facts may become badges. bb63bd8 copy, order, SEO and function stay unchanged. Logo variants are not addressed here.

## SEO and design harmony

Not done. No heading semantics, internal links, hidden content, schema or performance data were reviewed, and no official search guidance was read, so this report makes no SEO claims. `scripts/capture.mjs` now extracts these fields, but none has been analysed. Rankings and analytics are unknown.

## Method notes and gaps

- T3 preview opened after an initial unavailable status. I used Playwright for bulk capture anyway, because preview needs a tool call per screenshot. This departs from the "fallback only if unavailable" wording.
- Headless Chrome got 403s from Smock and True Air ("Checking your browser") and Bear's ("403 Forbidden"). I stopped requesting those sites from it and did not try to get around the check. Preview did load True Air's title, but no capture was taken. Off-screen headed Chrome was authorised only for Paslaugos.lt, so it was not used.
- Bulk capture blocks analytics and tag-manager requests, so widgets injected that way would be missing. Keep this in mind on resume.
- A stale-log error forced a clean restart; earlier partial captures were deleted from my own folder.

## Pending

1. Decide how to capture Smock, True Air and Bear's (lead or user).
2. Resume: `cd /tmp/arbcut-v4-deep-hook && node scripts/capture.mjs puetz,veterans,genz,northface,homefront,thelen,greentek` (skips finished URL and width pairs).
3. View every chunk, interactions, computed CSS and SEO review: all still open.
