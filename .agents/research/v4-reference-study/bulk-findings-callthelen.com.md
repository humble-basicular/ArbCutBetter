# Call The Len / Thelen Plumbing, Heating & Air (callthelen.com) — bulk visual findings

Analyst: Claude research sub-agent, 2026-11-05. Stage: sheets only, stopped by the soft input budget (about 1.62M of 1.4M) after finishing sheet scope. **All 48 contact sheets viewed; 0 full-size segments, 0 first viewports, 0 interaction images opened. Whole-site study is incomplete.** Evidence is about 200 px page previews plus record.json. Small text, logos and small defects are not verified. Paths are relative to `~/.ai-powerhouse/research-captures/arbcut-v4/`. Sheet paths are under `_sheets/callthelen.com/`.

## Native stage, 2026-11-05 (PARTIAL; stopped at the soft budget steer, 2,026,888 > 2,000,000)

The 48/48 overview stays as it was. **Native coverage: 2 of 49 selected pages complete at both widths (`home`, `about`); 17 of 407 prepared displays opened.** The other 47 pages were prepared but not viewed. Manifest and queue: `_sheets/callthelen.com/native/` (`selection.json`, `manifest.json` where each display is marked opened only after it was viewed, `native-stage-remaining.json`, and strips under `display/<slug>/`). No interaction images were opened, no live interaction was run, no 360 check was done, and no keyboard or motion checks were done.

Side effect: running `bulk-blank-check.py` rewrote the shared `research-captures/arbcut-v4/_blank-check.json` so that it holds only callthelen results. A copy is in `native/blank-check-min1440-300.json`. The file's previous contents were not preserved.

### Verified at native size (home, about; 1440 segments plus 390 strips of three frames)
- **The hero photo is darkened until the subject almost disappears** (`callthelen.com/home/1440/first-viewport.jpg`): a branded van under a navy overlay. Only the van's outline reads. This breaks rule 11. The headline is a cream condensed caps line with an orange script eyebrow, one teal "Schedule Service" button and the orange phone number. At 390 (`home/390/first-viewport.jpg`) the same hero fits within the first frame.
- **Home has no H1** (record: the first heading at 390 is H2 "HVAC + Plumbing Services in Minneapolis & the Twin Cities"). The hero line is not a heading. The descriptive H2 is good SEO copy in the wrong level. Confirmed in `home/390/record.json`, `dom.headings`.
- **"Every visit" band, left half empty:** at 390 the frame shows a broken-image box (`native/display/home/390-strip-01.jpg`, middle frame). `home/390/record.json` lists 5 images with `src:""`, `complete:false`. So the captured DOM has an empty image source. The live site was not checked, so this is a capture-time missing image, not a proven site defect.
- **Reviews section is a heading with nothing under it** at both widths (`home/1440/segment-002400.jpg`, y≈2,800–3,500 page; `home/390` strip-02 middle frame). The paragraph "See what homeowners say…" is followed directly by the financing band. Whether the widget loads later on the live site: I do not know. The lesson still holds: a proof promise with nothing under it.
- **Map header artefact confirmed:** the top of the 1440 map iframe shows the site's own logo and nav painted inside the frame (`home/1440/segment-004800.jpg`, y≈640; `about/1440/segment-002400.jpg`, y≈970), while the Google UI "4.9 ★ (1,025)" and "Open in Maps" render below it. 390 maps are clean. This is an `iframePatches` capture artefact (record: 1 patch at x120 y5444 476×408), not a site defect.
- **Fixed UI at 390:** one sticky header about 94 px tall (phone pictogram, centred logo, hamburger), visible in `home/390/first-viewport.jpg`. There is no bottom call bar. Record `fixed`: `uk-sticky uk-sticky-fixed` plus the off-canvas menu. Height is measured from the image; the record has no height field.
- **Locality list mixes linked and plain towns:** 8 linked (blue: Albertville, Elk River, Golden Valley, Maple Grove, Minneapolis, Plymouth, Robbinsdale, Rogers) and 9 plain black. The full list is kept at 390 (`home/390` strip-04 left frame). The footer has no service or locality columns, only office addresses, licences and 5 "Helpful Links" buttons.
- **About:** the H1 "ABOUT US" sits over a pale "Thelen" script watermark, then a navy strip "See why your local community loves working with us!" whose only action is "Schedule Service". The strip promises proof but gives none. Two real crew photos in branded clothing (`about/1440/segment-000000.jpg` y≈540 and y≈1,570) are the strongest assets. Founder Nick Thelen is named in the copy, but no identifiable photo of him was seen. The 4 "Why choose" cards are text-only. The "MN Best Silver Winner 2026" mark sits beside "Schedule Service" (y≈940) and is readable at native size.
- **Closing stack measured on about 1440:** resources, then map and towns, then footer, from y≈2,580 to the page end at 4,894. That is about 2,300 px of shared modules on a page whose own content ends near 2,460.

### Copy (native-verified)
1. **Real crew in branded clothing as the main imagery** (`about/1440/segment-000000.jpg`). The ArbCut equivalent is Mantas on the job.
2. **A real third-party award next to the action** (MN Best mark beside "Schedule Service", `about/1440/segment-000000.jpg` y≈940; `home/1440/segment-002400.jpg` y≈100). The mark is used as supplied, which fits rule 1.
3. **4-step sequence becomes a vertical card stack at 390** (`home/390` strip-02 left frame), matching rule 19.

### Avoid (native-verified)
1. A darkened hero photo (rule 11).
2. A reviews heading with no visible review content beneath it, and a "community loves us" strip with no proof.
3. SVG medallion pictograms on cards: faucet, fan, drain, card, gear and pencil (`home/1440/segment-000000.jpg` y≈1,180; rule 6).
4. Script eyebrow on every section, plus notched card sides, dotted corners and a watermark: 4 or more devices (rule 9).
5. No H1 on home.

### Remaining gates (exact)
- 47 prepared pages unviewed, in this order: `contact` (its 1440 first viewport was **not** viewed; the read was declined at the steer), reviews, specials, financing, careers, maintenance-plan, blog, service-area, site-map, services, faqs, glossary, accessibility, maintenance-agreements, both job pages, 5 service pillar/child pages, 7 city/service-area pages, 8 blog posts, blog__page__2/13, 9 archive samples. The list with flags and reasons is in `native-stage-remaining.json`.
- Not settled: whether the empty-`src` image and the empty reviews slot are a capture problem or the live site; empty `faqs`/`services`; the 4 404s; blank bands (65 pages flagged at 1440, mostly about 370 px at the reviews slot, plus a 1,008 px band in blog posts); heading glyphs; the city mismatch on service pages.
- Resolved by record only, no images needed: `offers`→`/specials`, `our-locations`→`/service-area/` and `filtration-systems`→`/water-filtration/` share the final URL, title and height. The duplicate topic pairs have different titles (`boiler-vs-furnace` vs `-2`, `heat-not-working-in-house` vs `-2`).
- Interactions: 61 saved images, 0 opened. Live, 360, keyboard and motion: none performed.

## Native stage, resume (2026-11-05; PARTIAL, stopped at the soft budget steer 3,007,145 > 3,000,000)

**Coverage after the resume:** 57 of 407 prepared displays opened, which is 40 more than the 17 from the first pass.
- **Complete at both widths (6):** home, about, contact, reviews, specials, financing.
- **Partly opened (4):** `services`, `faqs` and `maintenance-agreements` (404) each have 3 of 6 displays opened: 1440 first viewport, 1440 `segment-000000` and 390 strip-00. `air-conditioning` has 3 of 11 opened: 1440 first viewport, 1440 `segment-000000` and 390 strip-00. The displays I did not open hold only the shared resources, map and footer stack, which was seen on the 6 complete pages, but they are still counted as **not viewed**.
- **Unopened pages (39):** listed in `native/native-stage-remaining.json`.
- **Saved interactions:** 61 images in 4 folders (contact 16+6, home 14+4, service-area 14+4, home-fix mobile menu 3), **0 opened**. Five folders hold no images: faq-missing, gallery-missing and the three round2 folders.
- **Not performed:** live checks, 360, keyboard and motion. No helper that writes outside `native/` was run in this resume.
- **Notes:** `native/notes-resume.md`.

### Gates resolved on screen
- **Contact** (`contact/1440/segment-000000.jpg`): 3 offices with "get directions" links, phone and hours on the left; a form card on the right. The submit is Gravity Forms' default blue "Send Message" (y≈1,280), which is off-brand next to the teal and orange buttons. Asterisks are shown, but the record has `required:false` on every field. At 390 the form starts only after the addresses and social links. The hero "CONTACT OUR TEAM TODAY!" is not an H1; the record's first headings are the office H3s.
- **Reviews** (`reviews/1440/segment-000000.jpg` y≈575–1,250): on this page the Google widget did render. White cards show the reviewer's avatar, name and date, the Google "G" mark, 5 stars, a verified tick, an excerpt, "Read more" and "Load more". The excerpts are unedited (one says "Thelan Mechanical"). There are 12 cards at 1440 and 3 at 390. There is no aggregate rating block. **So the empty reviews slot on home and contact is a widget that did not load in those captures; that is not proven to be a site defect.**
- **Specials** (`specials/1440/segment-000000.jpg`): 7 cards, each with a large orange price, a label and a script link "schedule service". There are no expiry dates or terms. The 1440 grid is 3+3+1, leaving one card on its own row. At 390 the cards stack at about 238 px each. The top bar's "$89 AC Tune-Up" matches card 1.
- **Financing** (`financing/1440/segment-000000.jpg`): the **best photo use on the site**, a sunlit, undarkened branded van (y≈540–1,030). Three partner cards carry the official Service Finance, Synchrony and GoodLeap logos beside "apply online", which follows rules 1 and 4. Copy drift: the home financing band names 2 partners, this page names 3.
- **Services:** HTTP 200, but the page holds only the H1 and a breadcrumb, then the shared stack (`services/1440/first-viewport.jpg`). It is an empty hub as captured.
- **FAQs:** HTTP 200. The main column is empty. The sidebar shows default WordPress widgets: a search with a grey default button, Recent Posts, and "No comments to show." (`faqs/1440/first-viewport.jpg`; at 390 the sidebar stacks first). This is a template leak. Whether the live page now has content: I do not know.
- **404** (`maintenance-agreements`, status 404): branded "THIS PAGE DOESN'T EXIST!" with a "RETURN HOME" button. There is no search, no service links and no phone in the page body. The other 3 404 pages share its height and status in the records; they were not opened. Whether anything links to them was not checked.
- **City mismatch confirmed:** `air-conditioning/1440/first-viewport.jpg` shows the line "…SERVICES PROVIDED IN MINNEAPOLIS" (not a heading) above the H1 "AIR CONDITIONING SERVICES IN ST. MICHAEL, MN" (y≈260 vs y≈830). The same order appears at 390 (strip-00). Records show pillar pages mixing St. Michael, Big Lake and Minneapolis; for example, the water-heater-repair H1 says St. Michael while its first H2 says Big Lake.
- **Hero proof on service pages:** "EXCELLENT ★★★★★ 4.9 | 1,024 reviews" with no Google mark, while the map card says 4.9 (1,025). The count drifts by one between widgets. "Angie's List Super Service Award Winner" is a plain text bullet, not the official mark.
- **Capture artefact, not site layout:** in `air-conditioning/1440/segment-000000.jpg` the hero form loses its card and title, leaving bare inputs floating (y≈340–820). The card is sticky and was hidden during the segment pass. The first viewport shows the real layout.

### Copy (added)
1. **Official partner logos inside the cards they belong to,** each beside its action (financing).
2. **A real Google review wall with the G mark, names and dates,** and "Load more" on mobile instead of hiding reviews (reviews page).
3. **Undarkened real-vehicle photo** (financing): the counter-example to the dark heroes.
4. **Price-first offer cards** that stack cleanly at 390 (specials). For ArbCut, add terms and dates.

### Avoid (added)
1. A display line naming one city sitting above an H1 naming another.
2. Public pages that are empty or show default widgets (`/services/`, `/faqs/`), and a default-styled form submit.
3. Award claims written as text bullets, and rating counts that disagree between widgets.
4. A 404 page with no route back into services or to the phone number.

### Remaining gates (exact)
- **Unopened pages (39):** reviewing these is the next step. Template pairs first (pillar and child, cities, service area, jobs, blog), then the outliers (glossary, site-map, the blank-band blog posts), then the archive samples. The order is in `native-stage-remaining.json`.
- **Partly opened pages:** the unopened displays of the 4 partial pages.
- **Interactions:** visual judgement of all 61 saved interaction images.
- **Not done at all:** 360, keyboard, motion and live-site checks.

## Final retry: saved interactions (61 of 61 source images viewed, 2026-11-05)

These outcomes come from looking at the saved images, not from file names. The displays and the source-to-display map are in `native/interactions-manifest.json`, which holds 45 displays: 390 frames in strips of 3, and the 1440 hover crops combined into one image per folder. No live action, no form submit, no keyboard or 360 test was run; every finding is about the saved state only.

| Interaction (folders: home, contact, service-area at 1440/390; home-fix 390) | Visible outcome |
|---|---|
| Desktop dropdowns, Cooling / Drain Cleaning / Plumbing | **Pass ×3 per page**: a white panel with an orange rule and 4 items (`home-_/1440/05–07`) |
| Heating dropdown | **Caught mid-fade**: semi-transparent panel, 9 items barely legible over the hero (`home-_/1440/04-dropdown-7.jpg`) |
| About (dropdown-5/6) | **Inconclusive**: the label changes colour but no panel appears in any of the 3 folders |
| Schedule Service CTA modal | **Pass**: the modal opens over a dimmed page. The close control is an **empty outlined square with no visible ×** (`home-_/1440/08-cta-open-55.jpg`, top right), and the submit is the default blue "Send Message" |
| Contact form focus | **Inconclusive**: the modal from the previous step is still fading over the page (`contact-_contact_/1440/09`) |
| Contact form invalid | **Attempt, no visible feedback**: "invalid-email" is typed, with no red state and no message (1440 `10`, 390 strip-00). No submit was made, so submit-time validation is untested |
| Mobile menu (`home-fix/390`) | **Pass**: a navy off-canvas panel with an orange × and accordion groups; the About group expands to About / Service Area / Reviews / Maintenance Plan / Financing / Specials / Blog / Careers. No phone or CTA appears in the captured part of the panel |
| Scroll 0.3 / 0.7 | Sections reveal on scroll: headings grey, cards absent or fading (`home-_/1440/10`, `service-_service_area_/1440/10`) |
| Reduced motion (`14`/`16`) | **Attempt, mixed**: home 1440 still shows service cards mid-fade (`home-_/1440/14-reduced-motion.jpg`). Contact and service-area frames look fully rendered |
| Hovers | Contact: the card medallion turns **teal** (navy at rest) = a visible hover change. Every nav crop shows only the logo, so nav hover is inconclusive. The button crops have no baseline |

**Artefacts the interaction images resolve:**
- **"Every visit" band (1440):** the scroll frames show a real technician photo in a curved frame on both home (`home-_/1440/09-scroll-0.3.jpg`) and contact (`contact-_contact_/1440/11-scroll-0.3.jpg`). So the empty left half in the native 1440 segments was lazy-load or reveal timing for those two pages at 1440. The 390 empty-`src` box is still open: no 390 frame shows the image.
- **Empty outlined map box:** the service-area sequence goes from an empty outlined box (`01`) to a spinner (`02–04`) to a loaded Google card (`06`). This is iframe load timing, not a site defect.
- **Reviews slot on home/contact:** still unresolved. The loaded widget on `/reviews/` is only a candidate explanation (lead clarification), and no interaction frame shows the home or contact reviews slot loaded.
- **Contact hero:** in `contact-_contact_/1440/01-initial.jpg` the navy hero and H1 are not painted yet, while the native first viewport shows them. This is capture timing.

**Copy:**
1. **Short dropdown panels**, about 4 items, with whole-word labels.
2. **Accordion mobile menu** that keeps every service link reachable (rule 21 spirit).

**Avoid:**
1. **A modal close control with no visible ×.**
2. **Default blue form submit** that ignores the brand.
3. **No inline validation feedback** on a typed invalid email.
4. **Scroll-reveal that hides content** until it is triggered and still animates under reduced motion. For ArbCut, render content visible by default.

**Final retry stop (soft budget steer 4,097,967 > 4,000,000).** Page displays are unchanged this retry: **57 of 407 opened, 350 unseen**. Every unseen path is listed in `native/native-stage-remaining.json` → `unseenPageDisplays`, and the original flags and reasons are kept in `remainingQueueInOrder`. Not started: finishing the 4 partly opened pages (17 displays: services, faqs and 404 each have `1440/segment-002400` plus 390 strips 01–02; air-conditioning has `1440/segment-002400/004800/007200` plus 390 strips 01–05), careers and the job pages, service-area, the two-example pairs for pillars, localities and blog, and the genuine outliers. The lead owns the remainder; there is no third retry.

## Historical overview coverage (before native stages above)

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

## Lead verification and side-effect limit
Leadparsednative/manifest.json:17opened/390pending/407totaldisplays;all407displaypathsandlistedsourcesexist. Home/aboutworkerclaimsareattributed,nosecondfullleadvisualpassatallowancecheckpoint. NativecoverageisPARTIAL. Sharedexternal`_blank-check.json`wasoverwrittenbychildrunningbriefstep0;childreportspriorcontentslost. Per-sitecopyexistsatnative/blank-check-min1440-300.json. Exactpriorglobalcontentsrecoveryunverified; do not claim raws/sourcecaptureslost or originalglobalrestored. FutureworkersmustNOT runblankcheckerorotherhelperwithsharedoutput; useexistingper-siteevidence. Globalderivedartifactrecovery/remediationremainsleadqueue.

## Lead verification of resume1
Manifest57opened/350pending/407totaldisplays,6complete/4partial/39unopenedpagesverified;allsource/displaypathsremainpresent. Theseareworker-attributedvisualfindings,nosecondleadvisualpassatallowancecheckpoint. Loadedreviewwidgetonreviewspageversusemptyhome/contactsupportsacapture/widget-loadingcandidate,notaconclusivecauseorlivestatus. Partialpagesdonotgainunseenclosingsegmentcredit. Savedinteractions0/61remainpending;finalretry2prioritizesthem. Priorhistoricalstopsectionsretainprovenance,notcurrentcompletion.

## Current lead verification after finalretry2
Interactionmanifest45openeddisplays61uniquesources/allpathsverified;pagequeueunchanged57opened350unseen407total. Sixcompletepagepairs/fourpartial/39unopenedworker-attributed;noindependentleadvisualpassatallowancecheckpoint. Savedinvalid-emailframeisnotanewleadtypingaction,nosubmissionpassclaimed. Latepaintedtechnician/mapframes supportload-timingcandidate,notindependentcausalproofaboutlivestate. Two-retrycapEXHAUSTED;leadowns17remainingdisplaystofinishpartialsplusothergenuinenative/template/outliergates. Oldercoverage/stoppingsectionsarehistorical. All61savedimageinspectionclosed,livekeyboardvalidationmotionandremainingnativeuncertaintyexplicit. Sharedderivedblanksummaryrecoveryremainsunverified.
