# Call The Len / Thelen Plumbing, Heating & Air (callthelen.com) — bulk visual findings

**Current status, lead ordinal29 (2026-11-06): selected captured sampling accepted.** All 407 prepared displays across 49 selected page pairs are inspected within the manifest's scope; 61 saved interaction JPGs were inspected previously. Nine archive pairs are sampled, and four additional articles have first-strip-only mobile coverage. Unselected raw segments and live/360/keyboard/motion/submission behavior remain unverified. Final ordinal29 sections supersede historical pending counts below. Exact ledger: `_sheets/callthelen.com/native/{manifest.json,native-stage-remaining.json,lead-ordinal29-closure.json}`.

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


## Lead completion of four partial page pairs — ordinal14

Lead actually opened17 remaining displays for `services`, `faqs`, `maintenance-agreements` and `air-conditioning`, all source mappings in external `native/lead-partial-closure.json`. Earlier three displays per page remain worker-attributed; they were not reopened. Current prepared coverage is **10 complete page pairs /74 of407 displays**, with **39 wholly unopened selected pages /333 displays**. Saved61interactionJPGs remain previously inspected; no new live checks. This closes those four partial queues only, not the site study or remaining template/outlier gates. All displays returned visible. Desktop segment rendering can scale images; no new claim of 1:1 small-print verification. Magenta around mobile columns/tail is generated strip padding, not site styling.

- `services/1440/segment-002400.jpg`, mobile `display/services/390-strip-01..02`: the remainder is resource CTA, rendered map, locality list and footer. Footer retains office addresses/hours, licence text, Privacy/Accessibility/Site Map and service/financing/specials/maintenance/careers links on mobile rather than deleting navigation columns. Licence words are visible content, not independently verified credentials.
- `faqs/1440/segment-002400.jpg`, mobile `display/faqs/390-strip-01..02`: shared resources/map/locality/footer sequence. Tall condensed locality heading wraps through five lines at390 but remains readable. These remaining images do not show FAQ interaction; preserve prior interaction limits.
- `maintenance-agreements/1440/segment-002400.jpg`, mobile `display/maintenance-agreements/390-strip-01..02`: the same long reusable tail follows the membership content. Its length is template reuse, not an independent page design or a defect by itself. Helpful links remain stacked full-width actions at390.
- `air-conditioning/1440/segment-002400.jpg`: narrow left text column lists concrete symptoms and service choices, with brand van photo and four-question FAQ (first answer visible). `segment-004800.jpg` has the large empty navy review region then numbered4-step process, paired actions and resource cards. Empty review cause remains unproven; do not equate it to missing testimonials in production. `segment-007200.jpg` finishes loaded map/locality/footer. Mobile `display/air-conditioning/390-strip-01..05` retains the full repair/install/replace/maintenance explanation and linked terms, then FAQ, a Schedule Service form, empty review zone and one-column process/resource cards/map/footer. **The mobile inline van photo forces adjacent prose into a thin column** (`390-strip-02`, middle panel); use a full-width or stacked photo on ArbCut instead of copying that squeeze. The form overlaps the visible FAQ region in this frozen composition; normal-flow/sticky/widget cause remains unverified. No form-validation or FAQ-toggle pass inferred.

ArbCut transfer: preserve useful footer/locality links and explicit process steps at mobile widths; avoid excessive decorated card stacks, narrow text wraps beside images and blank proof reservations. These are design judgments from the cited images, not authorization to change preserved content/section order or fabricate credentials. Lead still owns39unopenedselectedpages after exhausted worker retry cap.

## Lead ordinal29 — four functional pages, actual saved pixels
Opened all31 previously false displays for careers/maintenance-plan/blog/service-area (1440 first viewports and all segments;390 all native three-frame strips). Exact paths/source mapping retained in external `native/lead-ordinal29-closure.json`; magenta is composition padding, not page colour. Native total105/407displays and14/49completepairs;35selectedpages302displays remain. No repeated61interactions or live submission. Desktop tall segments are tool-scaled, so this establishes layout/content sequencing; it is not a small-print or font raster audit.

- **Careers:** branded technician photos carry the story, paired with short text and repeated Open Positions actions; four value cards precede two full-time job rows. On390 the photos and text stack cleanly but four value cards plus the shared three-resource/map/footer stack lengthen the route. Evidence: `careers/1440/segment-000000.jpg`, `segment-002400.jpg`; native390strips00–03. Useful transfer: show real work and named, concrete next actions. ArbCut needs no careers feature invented from this reference.
- **Maintenance plan:** cream intro/photo→navy six-benefit grid→one visible Happy Home Plan card at$19.95/mo→signup→shared resource/map/footer. Intro names Happy Home Club and **Platinum**; signup radio offers Happy Home Plan and **Premium**, while no second pricing card is visible. Saved copy/option inconsistency, not a pricing/business fact. Form sits after benefits and plan, with Name/Email/Phone/plan radios and blue default Send Message button.390 stacks all six benefit cards before the plan; long approach to signup. Evidence:`maintenance-plan/1440/segment-000000.jpg`,`segment-002400.jpg`,390strips00–03. Transfer clear price/inclusion proximity; avoid a choice with no matching explanation and lengthy generic benefits ahead of the task.
- **Blog index:**12cards in four columns become one long390column; date/title/image/script Read Article, no excerpts. A2024dated item leads2026items (possibly pinned; mechanism unknown). Pagination1/2/3/4/13/next visible; no click tested. Resource cards repeat below the list before map/footer. Evidence:`blog/1440/segment-000000.jpg`,390strips00–04. Transfer descriptive titles and image hierarchy, retain crawlable pagination. Avoid decorative watermark/script and turning a small advice library into excessive mobile scrolling.
- **Service-area hub:** generic hero/CTA→large map plus linked/plain town list→two office map/address cards→shared resource cards→footer. Mobile puts the large map first, then the entire town list; the specific office/contact choices arrive later. Desktop map patches contain duplicated site-header fragments; mobile map lacks them, matching the previously bounded iframe capture artefact. Evidence:`service-area/1440/segment-000000.jpg`,390strips00–03. Transfer labelled town links and office facts. ArbCut should keep its base-only hauling boundary beside relevant local services; do not infer US coverage claims or copy huge map-first scrolling.

All copied prices/office facts are reference observations only. No360/keyboard/reduced-motion/form-validation/booking delivery added. Whole-site semantic research gates remain open.

### Ordinal29 utilities and job-template pair
A further47 actual display opens close site-map/glossary/accessibility and both careers__hvac-installer/careers__hvac-service-technician. All first viewports/segments at1440 and all390strips seen; current152/407displays,19completepairs,30selectedpages255displays unopened. Exact new paths appended to `native/lead-ordinal29-closure.json`.

- **Sitemap:** long labelled Posts→Pages→Services→Services Areas→Categories lists; child services/town services indented. Desktop uses a narrow left list with large unused right space, mobile wraps titles/date lines into very long reading. Height-outlier is genuine list volume, not a new layout or blank capture. Top generic sales hero/CTA and final resource/map/footer repeat even here. Evidence:`site-map/1440/segment-000000.jpg` through007200 and390strips00–06. Useful: human-readable hierarchy and nested links. Avoid decorative utility-page hero and unhelpful publication dates on every navigation item.
- **Glossary:** no visible introductory title or hero; immediately a tiny unspaced alphabet row, then term-heading/definition/Top link repeated toZ. Both widths contain the full long definition list and shared closing stack; no giant missing section seen. Alphabet targets are visibly much smaller than a comfortable touch area, but actual clickable boxes were not measured. Captured R-22 entry uses future-tense2015 wording; this is stale-looking captured copy, no technical/regulatory fact verified here. Evidence:`glossary/1440/first-viewport.jpg`,allsegments000000–012000,390strips00–07. Do not import HVAC advice or build ArbCut a glossary merely to match a reference. Prefer descriptive title, readable measure and usable jump navigation where such a library exists.
- **Accessibility statement:** plain heading/prose/bullets/date, no sales hero; then the long common resource/map/footer. Underlined phrases introduce prose topics without stronger subheading hierarchy.390paragraphs fit but remain dense. Statement claims are not proof of tested accessibility. Evidence:`accessibility/1440/first-viewport.jpg`,segments000000/002400,390strips00–02. Transfer direct support contact; verify actual keyboard/focus/contrast in ArbCut instead of adding a claim.
- **Two job pages:** same navy two-column template; full-time/title/description/responsibilities/requirements left, cream application form right. Differing descriptions and requirements establish two real content examples, not aliases. No role is preselected in either saved form.390places form after full description/requirements; installer form appears earlier because its copy is shorter. Name first/last boxes lack visible individual sublabels; resume accepts PDF/DOC/DOCX with visible25MB limit; no upload/submit tested. Shared financing/maintenance/tips/map/footer is irrelevant to the applicant task. Evidence: each job's1440firstviewport/allsegments and390strips00–03. Transfer task-specific form proximity and concrete labels only; no hiring/upload feature added to ArbCut.

### Ordinal29 core service and child-service contrasts
All44displays for camera-inspections/hvac-repair/air-conditioning__ac-installation/water-heaters__water-heater-repair actually opened at both widths. Current196/407displays,23completepairs,26selectedpages211displays pending. Exact mapping appended to lead-ordinal29-closure.json. With inherited air-conditioning, these provide several differing service contents across the shared hero/form/editorial/FAQ/reviews/process/resource/map/footer shell; heuristic child/pillar bins are not separate designs.

- **Shared conversion shell:** desktop first viewports paint a cream labelled hero form; stitched segment000000 loses its background/labels while keeping white fields.390moves the form far down, visibly covering the end of FAQ/content in these saved frames. This is a capture/layout discrepancy needing live confirmation, not an established production overlap bug. Empty review bands recur at both widths (widget failed to paint in these saved loads; prior reviews page did paint). Firstviewports are the reliable evidence for the intended labelled desktop form. Long dark van hero obscures the work image.
- **Camera inspections:** genuine height/content outlier: far longer editorial than HVAC-repair, with comparison, what inspection reveals, process, cost factors and when to schedule; real technician using the equipment. Hero Minneapolis→body Big Lake locality shifts. Strong content type: concrete process and scope/cost factors; avoid repetitive generic benefit paragraphs and empty right rail after form. Native1440segments000000–009600,390strips00–06.
- **HVAC repair:** short main editorial with one equipment/technician image and four FAQ prompts; same large empty review area and generic four-step process. Shows that short/long content does not require separate visual templates. Native1440segments000000–004800,390strips00–04.
- **AC installation:** longer bullet-led service scope/selection/efficiency/ductless/replacement sections, two-row FAQ module; same photo as HVAC repair. Hero Minneapolis→body St.Michael. Template skeleton deviation reflects content length/heading sequence; no additional layout system found. Native1440segments000000–007200,390strips00–05.
- **Water-heater repair:** text-only main editorial, symptom lists/electric-vs-gas/repair-vs-replace/process; its FAQ answers are plain headings/prose instead of the boxed accordions of the other three. Hero Minneapolis→first body heading St.Michael→body Big Lake, captured location-copy inconsistency. No invented inference about which town the company actually serves. Native1440segments000000–007200,390strips00–05.

Transfer for ArbCut: service-specific real photos, eligible situations, cost/preparation factors and approval-before-work are useful; all already have explicit preserved content slots. Keep the page's own town/service consistent, maintain a readable measure and make call/quote reachable without relying on an empty review widget. The generic reference four-step promises (including free inspection) are not ArbCut facts. No new FAQ toggle,360,keyboard,motion or real form pass.

### Ordinal29 locality and locality/service contrasts
All66displays for Delano/Andover HVAC, Buffalo/Maple Grove plumbing, Minneapolis/Monticello broad locality and Minneapolis sump-pump repair actually opened at1440/390. Current262/407displays,30/49completepairs;19selectedpages145displays remain. Exact mapping in external lead-ordinal29-closure.json. No live interaction or independent business-claim verification.

- **Two HVAC localities:** Delano has four short generic text sections, no main image; Andover has a much longer five-reason company essay. Same van hero, labelled desktop quote form and shared tail; different lengths do not establish separate designs. Delano desktop review widget paints four cards/rating/write action, Andover desktop is empty; both390captures are empty. The observed discrepancy is saved-load variation, not proof the widget is always broken. Evidence: each1440firstviewport/allsegments and390strips00–04(Delano)/00–05(Andover).
- **Two plumbing localities:** Buffalo's four short sections contrast Maple Grove's seven symptom subheads and long metaphoric copy. Same template, generic claims without local job proof/main photography. Buffalo desktop reviews paint; Maple Grove desktop and both mobile sets are empty. Evidence: Buffalo1440segments000000–004800,390strips00–03; Maple Grove same desktop range,390strips00–04.
- **Broad localities:** Minneapolis contains longer locally specific housing/tree-canopy prose, linked service groups and three plain FAQ answers. Monticello has three trade groups, a four-step process embedded in prose and plain FAQs. Both skip the shared map/town block after resource cards and proceed to footer. Minneapolis is a genuine main-content length outlier, not a new visual system or missing-tail inference. Monticello's Census reference and free-inspection/24h claims were not verified and are not ArbCut facts. Evidence: Minneapolis1440segments000000–007200,390strips00–05; Monticello1440segments000000–004800,390strips00–04.
- **Locality/service child:** Minneapolis sump-pump repair uses the same locality shell with concrete symptoms, backup choices, related service links, plain FAQs and explicit parent Minneapolis link in its closing CTA. No map/town tail here either; desktop reviews paint, mobile is empty. This is a useful service/town content variant, not a separate design. Evidence:1440firstviewport/segments000000–004800 and390strips00–04.

Desktop first viewports retain form labels/cream panel; stitched desktop panels lose them while retaining fields.390form covers final main-copy lines in saved compositions. Live layout/timing cause remains unverified. Transfer a clear service-and-town H1, relevant service/parent-area links, truthful local scope and real work proof; avoid generic long essays, opaque van imagery and repeated process/FAQ stacks. ArbCut's base-only hauling restriction remains binding; no reference24/7/free-inspection claims imported. No360/keyboard/motion/form delivery or FAQ toggle tested.

### Ordinal29 article template and actual length outliers
Opened70prepared displays for eight article topics. Current332/407selecteddisplays,38/49selectedpairs complete **within their declared scope**;11index/archive pairs75displays pending. Emergency AC/tankless/window-AC/hot-water-shortage are all-segment pairs at both widths; purifier/dirty-filter/condenser/capacitor have all1440segments but only first390strip (first viewport plus first two segments), as explicitly selected in manifest. Their later mobile content is not inspected or credited. Same scope qualification applies to earlier sampled inherited records; complete pair never means every raw image on a route.

- **Shared editorial template:** single bordered white article panel on cream, wide topical image→condensed H1→publication date→company-logo byline→rule→sectioned prose/bullets/photos→van schedule banner. No sidebar or explicit contents navigation. At390 the long condensed H1 consumes much of the first viewport and author/date occupy additional space before the opening answer. Emoji decorate many headings, including dirty-filter H1; do not transfer these to ArbCut. Emergency AC gives six numbered steps and repeated generic company claims; tankless gives seven considerations plus four benefits. These are different contents of one design.
- **Tankless captured media issue:** two inline images render broken-image glyph/alt text in desktop segment000000/002400 and390strips00/03; lead image and technician image do paint. No claim about current live resources or technical accuracy. Useful transfer: graceful image failure and meaningful alt text; verify all ArbCut asset URLs locally.
- **Window-AC height outlier:** full content includes benefits, a ten-row three-column comparison, seven numbered steps, inline tool/safety/material lists, maintenance and three plain FAQ answers. Length is genuine article volume. Desktop table is readable;390strips01–02 compress it into narrow columns with broken words (Installation/Energy Consumption and column headings). Avoid fitting a large comparison into three tiny columns; use horizontal scroll with an accessible label or a readable mobile comparison pattern when ArbCut's existing content needs it. No equipment-installation advice endorsed here.
- **Hot-water-shortage short outlier:** same template, one hero image, no additional inline images, brief explanation plus three culprit subheads and closing CTA. It genuinely ends far sooner than the window article; footer and shared resource/map tail remain. Evidence:all1440segments000000–004800 and390strips00–03.
- **Four topic variations:** purifier uses six named product paragraphs and five selection factors; dirty-filter uses five steps; condenser uses five steps and maintenance tips; capacitor compares start/run function through headings/bullets. No new component/template found. Several large white image reservations remain in stitched desktop segments (dirty-filter/condenser); live lazy-loading cause unknown. Capacitor desktop map is blank while the other article maps paint, supporting captured-load variation. Full later390credit deliberately withheld. Product, medical, electrical and safety claims are reference copy only, not verified or imported into ArbCut.

Transfer descriptive advice titles, visible authorship/date, concrete scannable steps and relevant service links; avoid generic filler, repeated sales tails, decorative emoji and the mobile table failure. ArbCut's preserved article content/facts/order remain binding. Evidence paths are fully mapped in lead-ordinal29-closure.json; no live validation,keyboard,360 or motion pass added.

### Ordinal29 index/archive closure and semantic acceptance
The final75actual display opens close the selected blog pagination and nine archive samples. **All407prepared displays for49selectedpairs are now inspected within declared scope**. Ordinal29 adds39previously unopened selectedpairs/333displays/625mapped source references. Earlier74displays/10pairs and61saved interaction images retain their recorded attribution; they were not reopened. Exact paths in external native/manifest.json and lead-ordinal29-closure.json; archived earlier status sections above are historical.

- **Blog pagination2/13:** same four-column card grid→single390column seen on root. Page2 has12cards; last page13 has4cards and no forward arrow. Both show current page underline and earlier-page links. Actual short/long list contrast, not a new template. All prepared segments at both widths inspected. Pagination actions are visible, not clicked; target correctness/live traversal remain untested. Evidence:blog__page__2/13 firstviewports/allsegments and respective390strips00–04/00–03.
- **Category archive Articles root/page2/page11:** plain cream main column, orange linked article title, long full body and inline photos; narrow right sidebar Search/Recent Posts/Recent Comments only at top. Articles root visibly transitions from HVAC-definition post into capacitor post after several full sections. This confirms full-post output instead of excerpts, explaining the extreme-height flag; skipped interstitial portions remain unviewed. Page2 begins efficiency-rating article and sampled later transition shows air-handler→brands-to-avoid; page11 begins AC-troubleshooting and sampled middle shows furnace-filter article. Large blank image reservations/broken-image alt text recur in some captured sections, without a new visual system. Topic category HVAC and Plumbing use the same layout with different first posts; no visible category title/description in their opening viewport. Mobile begins full main post, with no sidebar in the sampled opening/tail. Search was not submitted; no sidebar-location or pagination conclusion drawn from skipped portions.
- **Author archive Kevin root/page4/page10/page13:** same full-post/sidebar template with a small Author:Kevin heading above the first article, no visible author biography. Root begins furnace repair/replace then furnace maintenance;page4 begins pipe repairs;page10 AC leaks, sampled middle filter maintenance→emergency furnace repair;page13 starts water-heater repair. Different subjects establish differing examples of one archive design. Sampled image reservations and long main column persist; all sampled endings reach the common footer. No implication that an author slug proves expertise, or that all intervening bodies have been inspected.

**Sampling boundary:** nine archive pairs have explicit scope=sampled. Their selected beginning/interior/tail frames were opened; every unselected raw segment is still unviewed. Four extra articles retain first-strip-only390scope. No extension to new captures or exhaustive URL-by-URL review is needed to identify these template/content mechanisms. Broad overview flags remain overview-level evidence.

**Semantic disposition:** home and singletons/about/contact/reviews/offers/financing/membership/careers/service hub/area hub/FAQ/glossary/sitemap/accessibility/one branded404 have explicit inspected examples. Jobs have two differing examples. Core/child service pages and two HVAC/two plumbing localities share the conversion/editorial shell, with broad locality and locality/service variants separately documented. Four fully inspected articles establish short/long/table/image-failure contrasts; additional desktop topics and nine bounded archive samples resolve the selected skeleton/height variations. Blog root/page2/last-page establish pagination length contrast. URL-role bins are not treated as independent visual templates. Three other404routes and metadata-confirmed redirect aliases retain record-only attribution, not visual credit.

**Accepted for captured design synthesis:** selected static sampling and61savedinteractions complete; retain explicit live/360/keyboard/reduced-motion/submission, unselected segments, current widget/image availability and technical/business-fact limits. Do not call this a full live-site accessibility/SEO audit. Global blank-summary operational reconstruction is recorded elsewhere; original historical bytes remain unknown. Whole ArbCut objective, other reference gates, required Claude design brain/frontend and build acceptance remain unfinished.
