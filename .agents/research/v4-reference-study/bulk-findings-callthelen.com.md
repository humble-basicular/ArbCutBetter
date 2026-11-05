# Call The Len / Thelen Plumbing, Heating & Air (callthelen.com) — bulk visual findings

Analyst: Claude research sub-agent, 2026-11-05. Stage: sheets only, stopped by the soft input budget (about 1.62M of 1.4M) after finishing sheet scope. **All 48 contact sheets viewed; 0 full-size segments, 0 first viewports, 0 interaction images opened. Whole-site study is incomplete.** Evidence is about 200 px page previews plus record.json. Small text, logos and small defects are not verified. Paths are relative to `~/.ai-powerhouse/research-captures/arbcut-v4/`. Sheet paths are under `_sheets/callthelen.com/`.

## Coverage

| Item | Status |
|---|---|
| Pages | 288 captured at both widths (`bulk-ledger.json`), 576 records read by script |
| Templates | 16 (4 one-offs), 44 flagged (`groups.json`) |
| Sheets viewed | **48/48** (24/24 per width), `index.json` viewed=48, missing files=0, each opened before flagging; list in `opened-manifest.txt` |
| Full-size segments, first viewports | **0 opened**, queued |
| Interactions | 9 folders, 61 images queued, **0 opened** |
| HTTP | 284 × 200, 4 × 404 (`air-conditioning-ac-installation`, `air-conditioning-ac-replacement`, `maintenance-agreements`, `sewer-line-replacement`) |
| Redirects | 3: `filtration-systems` → `/water-filtration/`, `our-locations` → `/service-area/`, `offers` → `/specials` |
| Horizontal overflow | None: `scrollWidth` never exceeds the viewport in any record |

Queue: `later-fullsize-interaction-queue.json`: 80 pages, 2,991 first-viewport and segment files at both widths, 61 interaction images, all `queued` and `opened:false`. Priority 1 one-offs (23), 2 template examples (18), 3 flagged and outliers (37), 4 archives over 30,000 px (2). Flagged archives also fall in earlier tiers, so sample their segments rather than reading all of them.

| Template | Name | Count | Height 1440 min/median/max | Height 390 min/median/max |
|---|---|---|---|---|
| t00 | blog posts + `blog/page/N` | 160 | 3,472 / 8,931 / 12,241 | 7,284 / 13,517 / 18,632 |
| t01 | service pillars | 30 | 6,572 / 8,323 / 9,891 | 10,291 / 13,486 / 16,307 |
| t02 | hvac-services/city | 17 | 5,620 / 6,746 / 7,476 | 9,464 / 11,292 / 12,344 |
| t03 | plumbing/city | 17 | 5,588 / 6,699 / 6,916 | 9,244 / 11,262 / 11,682 |
| t04 | category archive pages | 12 | 68,896 / 78,906 / 88,971 | 86,664 / 100,073 / 118,120 |
| t05 | utility pages + 404 | 11 | 2,773 / 3,282 / 13,054 | 5,247 / 5,732 / 19,326 |
| t06 | service-area pages | 11 | 6,445 / 6,642 / 7,521 | 10,226 / 10,864 / 12,370 |
| t07 | core inner pages | 9 | 3,924 / 4,502 / 8,880 | 6,599 / 8,392 / 15,282 |
| t08 | author archive pages | 9 | 68,072 / 75,924 / 89,968 | 87,123 / 97,447 / 119,073 |
| t09 | category topics | 4 | 12,250 / 18,830 / 22,013 | 20,249 / 27,610 / 32,493 |
| t10 | service area, our-locations | 2 | 3,936 | 7,498 |
| t11 | job pages | 2 | 3,414 / 3,551 | 7,189 / 7,771 |
| t12 | home | 1 | 6,769 | 11,755 |
| t13–15 | author one-offs | 3 | 32,918 to 74,920 | 39,391 to 93,156 |

## Numbers (record.json)
- **Fonts on home:** `acumin-pro-semi-condensed` 47, `fairweather` 45, `parkside` 16, `acumin-pro-condensed` 4. Inference: fairweather is the condensed heading face and parkside the script eyebrow, matching what the sheets show.
- **Inner H1:** fairweather 117px/900, line-height 105.3px, `rgb(234,112,65)` at 1440; 61.2px/55.08px at 390.
- **Section H2:** fairweather 60px/800, line-height 56px at 1440; 52px/56px at 390. Line-height is below font size at 1440. Text H2 40px/44px. H3 32px/44.8px or 36px/34px.
- **Colours on home:** navy `rgb(0,29,52)`, blue `rgb(0,90,135)`, orange `rgb(234,112,65)`, red-orange `rgb(229,75,33)`, cream `rgb(252,231,194)`, teal `rgb(0,192,167)`. Background counts: cream 7,414, navy 3,378, white 1,484, red-orange 113, teal 51.
- **Fixed UI:** 390 has one `uk-sticky` element plus the off-canvas menu in the pages sampled. Service pages at 1440 also list a fixed `uk-panel`. Heights were not pulled; I do not know the mobile fixed cost.
- **CTAs on home:** "Schedule Service" 5, "(763) 262-2181" 3, plus "Give Us A Call" on `tel:7632622181`.
- **Form on home:** Gravity Forms, 5 visible fields (two text, email, tel, textarea) plus submit. Contact has 2 forms of 17 fields each, hidden fields included.
- **Schema on home:** WebSite, Organization, credentials, ContactPoint, opening hours, Person, PostalAddress, GeoCoordinates, City.
- **H1 gaps:** 169 of 288 pages have no H1 in `headings` at 1440, including home, contact and accessibility, and the blog posts sampled. Home's hero line "Expert Plumbing & HVAC for Every Season" is not in `headings` at all. No page has more than one H1. Whether the capture missed a heading is not ruled out; check the DOM evidence before citing this as a defect.
- **Alt text on home:** 37 of 47 images have empty alt; many are decorative dots. Three different card icons (`Plumbing-card-icon.svg`, `Heating-and-cooling-card-icon.svg`, `Drain-Card-Icon.svg`) all carry alt "icon of a faucet leak".

## Templates (sheet-level observation)
- **Home** (`1440/t12-home-0.jpg`, `390/t12-home-0.jpg`): top bar; header with logo, nav, phone, teal action; navy hero with centred caps headline, orange curved base; 3 service cards; navy "Every visit" band with van breaking the bottom edge; 4 numbered steps; reviews heading; financing split with truck photo in a curved frame; 3 resource cards; map + town list; navy footer with cream cards and an orange base.
- **Core inner pages** (t07): very large orange H1 on cream over a pale oversized wordmark; navy strip "See why your local community loves working with us" plus action; content; shared closing modules. `about`, `careers`, `financing` and `maintenance-plan` use real-looking crew and van photos. `specials` is a grid of offer cards. `reviews` is a card wall.
- **Service pillars** (t01): navy hero, form crossing the hero base into a white body, one job photo, FAQ accordion, reviews band, steps, resources, map, footer. At 390 the form moves far below the hero.
- **City pages** (t02/t03): the same shell, H1 is the city name, body text only with no photo in any cell. City pages share heading patterns, so inference: templated copy.
- **Service-area pages** (t06): same shell; `minneapolis-mn/*` adds service-by-city pages.
- **Blog posts** (t00): white article card on cream, lead image above the title, byline, many inline images that look like stock, navy "Need quality service?" card with van at the end, no sidebar. `blog__page__N` is a different layout (4-column cards) grouped here by the script.
- **Archives** (t04/t08/t09/t13–15): appear to print full post bodies, up to 119,073 px at 390, with a default WordPress-style sidebar at the top.
- **Utility** (t05): `services` is nearly empty (2,773 px, heading and breadcrumb only). `faqs` shows no FAQs on the sheet, only search, Recent Posts and Recent Comments. 404 pages keep the normal closing modules.
- **Jobs** (t11): navy body with the application form beside the text at 1440; stacks at 390.

## Artefacts and unresolved flags
- **Reviews band:** empty navy in most cells. Cards appear only in `hvac-services__delano`, `plumbing__buffalo` and `service-area__minneapolis-mn__sump-pump-repair` at 1440 and in no 390 cell seen. Inference: a late-loading widget, so a capture artefact, not a site defect. Home shows the same empty slot. `reviews` loaded it (349 images).
- **"Every visit" band:** the left side is empty on home and contact at 1440, and at 390 a thin line sits in empty navy. Record lists no iframe there (only the Google map), so a video or lazy image is suspected. Unconfirmed.
- **Map:** 245 Google iframes at 1440, all `ok`. Some sheets show the site header painted over the map, and many posts show an empty outlined box (`1440/t00-blog_x-0.jpg` cells 2, 4, 9, 10). Suspected capture or iframe-patch artefact; the 390 maps look normal. Do not report as a site defect.
- **Blank bands from the log:** `author__kevin__page__10`, `blog__emergency-ac-repair`, `blog__how-does-a-tankless-water-heater-work`, `category__articles__page__11`, `category__articles__page__2`. Queued, not judged.
- **White gaps in articles at 1440:** `1440/t00-blog_x-1.jpg` cells 3, 14; `1440/t00-blog_x-3.jpg` cell 15. Cause unknown, queued.
- **Heading glyphs:** small coloured marks sit beside many article headings on the sheets, but no emoji appears in heading text in 148 post records. Identity unknown; check at full size.

## Copy
Sheet-level; confirm at full size before using.
1. **One strong colour system, repeated everywhere.** Navy, cream and orange, with teal for actions, make every template recognisably one brand (`1440/t07-_1-0.jpg`). Taste: this has more personality than the cream or dark-forest ArbCut versions because of the retro logo and warm contrast, but see Avoid 5.
2. **Real vehicles as a brand device.** The van breaks a section edge and the truck fills a curved frame (`1440/t12-home-0.jpg`, y about 3,700 and 5,300 in page terms, estimated from the sheet). ArbCut equivalent: Mantas's lift. Note the filename `truck-ai_cutout-1.svg`; the van's origin is unverified.
3. **Crew photos on about, careers, financing and maintenance** (`1440/t07-_1-0.jpg` cells 1, 3–5): the most convincing imagery on the site.
4. **Form crossing the hero edge on service pages** (`1440/t01-_1-0.jpg`), which matches rule 12. Check its height against the 1440 fold.
5. **Rating line above the H1 on service and city heroes** (`390/t02-hvac-services_x-0.jpg`): proof sits beside the headline. The mark and numbers are too small to verify.
6. **Numbered 4-step module** becomes a clean vertical sequence at 390 (`390/t12-home-0.jpg`), matching rule 19.
7. **Town list beside a map, with town links** (`1440/t10-_1-0.jpg`), kept at 390 (`390/t10-_1-0.jpg`), so SEO links survive on mobile.
8. **Offer cards with a large price and one action** (`390/t07-_1-0.jpg` cell 9): each stacks clearly.
9. **Real third-party award by the action:** `MNBest_2026_Silver_Winner_logo` near the "Every visit" button on home (filename evidence, mark too small to read).

## Avoid
1. **Stock imagery in the blog.** Most post images look like stock (`1440/t00-blog_x-0.jpg`), which undercuts the crew photos. Inference from previews.
2. **City pages with no local proof or photo** (`1440/t02-hvac-services_x-0.jpg`): walls of text with interchangeable structure.
3. **The same closing stack on every page.** Resource cards, map, town list and footer take about 2,500 px at 1440, and at 390 they exceed the content on short pages (`390/t05-_1-0.jpg`). Cap this for ArbCut.
4. **Empty or thin public pages.** `services` and `faqs` (`1440/t05-_1-0.jpg` cells 9, 5) and 4 linked-looking 404s; inbound links not checked.
5. **Decoration load.** Curved orange edges, dotted corners, watermark wordmark, script eyebrows, notched cards and green rules add up to more than 2 devices, against rule 9. Taste: the notched cards and script eyebrows are the closest thing to slop here.
6. **Icon medallions on cards** are SVG pictograms (`Plumbing-card-icon.svg` etc.), which ArbCut's rule 6 forbids.
7. **City mismatch:** hero says "Provided in Minneapolis" while the body heading names St. Michael, Big Lake or Albertville (`1440/t01-_1-0.jpg` cells 1, 2, 5; H1 "Air Conditioning Services in St. Michael, MN" in record).
8. **Archives printing full posts**, up to 119,073 px at 390. Use excerpts.
9. **Duplicate topics:** `blog__boiler-vs-furnace` and `-2`, `blog__heat-not-working-in-house` and `-2` are separate URLs with near-identical subjects.
10. **Empty proof slot risk:** if the reviews widget really loads late, the page shows a large empty navy band with a promise above it. Render proof server-side.

## Candidate key screenshots
None opened at full size, so these are candidates to confirm:
1. `callthelen.com/home/1440/first-viewport.jpg`: hero, header, curved base.
2. `callthelen.com/about/1440/segment-000.jpg` or the first listed in the queue: crew photo with watermark H1.
3. `callthelen.com/air-conditioning/1440/first-viewport.jpg`: form crossing the hero.
4. `callthelen.com/specials/390/first-viewport.jpg`: offer cards on mobile.
5. `callthelen.com/service-area/1440/first-viewport.jpg`: H1 and strip; town list is further down.
6. `callthelen.com/plumbing__buffalo/1440/`: the segment holding loaded review cards.

## Remaining
1. Priority 1–3 of the queue at both widths, then archive samples.
2. Interaction images (menu, form states, FAQ).
3. Fixed element heights at 390, hero composition and the logo at readable scale.
4. Resolve the reviews band, "Every visit" band, map and heading-glyph questions.
