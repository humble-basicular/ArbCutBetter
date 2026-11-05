# Glassperts — saved-capture overview findings

[Certain] Overview inspection complete: **86 existing sheets + 2 additive sheets, every cell, both 1440 and 390**. **0 pages reviewed full size.** This is a semantic triage report for the lead, not completion of the analyst brief's native-size phase.

## Coverage and reconciliation

All external paths below are relative to `/Users/matasbasinskas/.ai-powerhouse/research-captures/arbcut-v4/` (R). Evidence: tracked `bulk-capture-reconciliation.md`, read-only `bulk-ledger.json → sites.theglassperts.com`, R/`bulk-integrity-reconciliation.json → resolvedAlternateRoot`, and the two sheet indexes.

| Measure | Verified result |
|---|---:|
| Ledger status captured / file / blocked / failed | 474 / 9 / 0 / 0 |
| Primary grouped folders / algorithmic groups | 465 / 26 |
| Existing sheets opened, desktop / mobile | 42/42 / 44/44 |
| Existing cells, desktop / mobile | 462 / 465 |
| Additive sheets opened, desktop / mobile | 1/1 / 1/1 |
| Additive cells, desktop / mobile | 12 / 9 |
| Total overview cells, desktop / mobile | 474 / 474 |
| Distinct final URLs in captured ledger entries | 471 |
| Full-size pages / interactions / 360px | 0 / 0 / 0 |

The 21 initially missing width lookups all resolve in sibling RAW `glassexpertsfl.com`; no raw copied or changed. Twelve alternate slugs: nine wholly absent from original sheets, three present at 390 only (`window-repair-for-commercial-property-what-to-expect`, `4-tips-to-fixing-a-sliding-door`, `helpful-fix-to-squeaking-sliding-door`). Thus 465 primary grouped slugs + 9 additional slugs = 474 ledger slugs, spread across 477 host/slug storage locations because three split across hosts. Do not report 474 unique canonical pages, 477 designs, or 948 full-size reviews.

Redirect aliases: `emergency-glass-repair` → `emergency-glass-and-window-repair`; `miami-broken-sliding-glass-door` and `sliding-door-repair-in-miami` → `miami-dade-county`. These are three excess ledger entries over 471 final URLs; their original sheets were still inspected. Equal final URLs do not establish byte-identical captures. Nine file-status entries are not page screenshot coverage.

**Exact evidence manifests:** R/`_sheets/theglassperts.com/review-manifest.json` maps all 474 ledger URLs × widths to actual record paths and sheet/cell identities; `openedSheets` lists all 88 opened image paths and cells. Original sheet paths remain unchanged. R/`_sheets/glassexpertsfl.com/index.json` maps the two additive images. R/`_sheets/theglassperts.com/sheet-review-notes.json` records overview observations; `semantic-membership.json` lists every ledger entry under the working semantic families below. Independently checked all mapped records are `captureComplete` and all first-viewport/segment files nonempty (9,648 distinct JPG paths). This integrity check does not certify render fidelity.

## Semantic reading

Counts below are ledger entries including aliases. These are working semantic families, not claims that every member shares exactly the same DOM. Algorithmic grouping both merges different purposes and splits one article family.

| Semantic family | Entries | Observed sequence / variation |
|---|---:|---|
| Service + locality editorial | 238 | Photo title banner → main image/article + short navy enquiry sidebar → long question-led copy with second image → video/CTA → footer. Occasional pale styling variants. |
| Core service editorial | 14 | Same shell, often much shorter; lower FAQ/video and sidebar service/locality links. Nested Naples versions may be long. |
| Designed core service | 2 | Window installation/repair: intro and enquiry → product/benefit cards → process band → FAQ/maps → footer. |
| Locality service grid | 64 | Hero (county, coastal-photo or city-form variant) → intro/video → six navy service cards → photographic CTA → optional alternating editorial → reviews/footer. |
| Rich locality | 17 | Service intro/form → varied service cards/benefits → FAQ → local description/directions → map/location blocks. Naples/Orlando add exceptionally long article runs. |
| Plain locality editorial | 4 | Coral Gables beach hero → broad plain article → video/CTA/photo → optional questions → footer. |
| Blog detail | 63 | Photo title → article + contents/form/latest sidebar; some add lower full-width video/FAQ/resources, some map/contact text. Several nested/repeated article-block anomalies. |
| Blog index | 5 | Title banner → thumbnail/excerpt cards (3 columns desktop, single column mobile) → pagination/footer. Some cards lack images. |
| Date archive | 58 | Linked gold title/image/excerpt → footer; later variants add large “Day” heading; a few contain multiple posts or no image. |
| Semantic singletons | 9 | Home, about, contact, areas directory, sitemap, booking, FAQ, reviews, services index. Each remains in later native-size queue. |

Semantic evidence: service family `theglassperts.com/1440/t00-_1-0.jpg` cells 1–20 and matching 390 sheet; locality family `1440/t01-_1-0.jpg` and corresponding 390 sheet; rich localities `t06`, `t07`, `t18`, `t19`; plain localities `t15`/`t16`; blog `t03`–`t05`, `t08`, `t11`, `t17`, `t21` and additive sheets; archives `t02`, `t13`, `t14`, `t25`. These are **sheet paths under R/_sheets/**, not raw page paths. The machine-readable membership resolves each cell back to raw URL/width/path.

Home: hero with enquiry form, source-mark row, video/intro, six equal service cards, CTA band, alternating glass/service copy, reviews, four locations, latest posts and footer. At 390 the form, three source tiles, service cards and maps stack into a long run. Evidence: `theglassperts.com/1440/t22-home-0.jpg` and `390/t22-home-0.jpg`, cell 1. About is company narrative, photos, video, reviews, three maps and latest blogs; contact is a form/maps utility, booking is a distinct embedded service-selection flow. Evidence: `t10` cell 1; `1440/t00-_1-1.jpg` cell 18; `1440/t00-_1-0.jpg` cell 16 and matching mobile sheets. No booking or form interaction was attempted.

## Copy / avoid for ArbCut

These are design judgments from overviews; no conversion-performance claim or wholesale copy endorsement.

- **Copy:** keep photographic service navigation explicit. The navy six-card block pairs a relevant image, service name and action, making the offer scannable. Use hierarchy and a shorter mobile run for ArbCut. Evidence: `theglassperts.com/1440/t01-_1-0.jpg`, cells 1–20, service block; corresponding 390 sheet shows the cost of six stacked cards.
- **Copy:** locality content can include useful local information, directions and service links rather than just a renamed heading. Evidence: `1440/t06-osceola-county_x-0.jpg`, cells 1–5, lower local/map blocks; paired 390 sheet. Verify accuracy before adapting any principle.
- **Copy:** recognisable source marks and review cards are stronger reference material than invented trust seals. Evidence: home `t22` source row/reviews, `t24` review feed. Exact ratings, authenticity and live counts were not verified; do not transplant them to ArbCut.
- **Avoid:** long near-identical editorial columns as the main service experience. Many desktop pages leave the right side empty after the short sidebar; mobile delays the form until after extensive copy. Evidence: `t00-_1-0` cells 1–5 at both widths. This is a visual repetition judgment, not a claim of plagiarism, AI authorship or SEO effectiveness.
- **Avoid:** pale gold links/headings on white and dark text on dark navy where seen in compressed overviews; verify contrast at native size before a defect verdict. Evidence: `390/t23-one-off-0.jpg` sitemap rows; `390/t05-_1-0.jpg` latest-blog sidebar; pale service variants in `1440/t00-_1-2.jpg` cells 2/13.
- **Avoid:** inconsistent visual systems across related routes: navy versus pale/yellow/gray form treatments, rectangular versus circular service crops, multiple icon styles. Evidence: `t07-miami-dade-county_x-0` cells 1–5, both widths; `t00` pale variants. ArbCut's no-glyph-pictogram rule still applies; do not copy reference icons.
- **Avoid:** repeated embedded hero/article blocks and very tall narrow sidebars. Evidence: `1440/t03-_1-0.jpg` cell 15, plus additive desktop cells 2–3; corresponding mobile/additive sheets. Treat as high-priority native-size inspection, not yet a root-cause diagnosis.

Palette observed at overview: white reading surfaces, navy service/sidebar bands, cyan card buttons, gold links/small actions, charcoal footer; photographs supply most visual variety. This competing cyan/gold action language is less coherent than one primary action system. Exact CTA-label consistency, typography comfort, spacing, image provenance, official-mark legitimacy and fixed-widget cost cannot be settled from these sheets.

Record-only typography example (not full-size visual validation): RAW `theglassperts.com/24-hour-commercial-glass-repair-naples/1440/record.json → dom.headings` reports Poppins H1 70px/100px, weight 600, white; H2 40px/55px, weight 600, rgb(11,42,74). Home record contains multiple H1 entries at different sizes, so do not mistake every DOM heading entry for a simultaneously visible heading. No font-size values were inferred from thumbnail scale.

## Exceptions and capture limits

- `homestead-fl` desktop overview has large missing photo/service areas while mobile shows content (`1440/t01-_1-1.jpg` cell 1, paired 390). Its 1440 record lists no iframes; scroll reveal/render timing remains plausible. Do not call this intentional whitespace or a live-site defect.
- `broward-county__fort-lauderdale` desktop has empty image areas that are populated on mobile (`t19`, cell 1). Same unresolved reveal/capture distinction.
- Large white gaps in `emergency-glass-repair-miami`, `shop-window-repair-miami`, `window-repair-orlando` are queued; screenshot boundaries and lazy/reveal content need native-size checking (`t00` desktop sheets 3/8/12 respectively, cells 4/5/2).
- Several blog desktop lower video panels are black while paired mobile shows a poster (`t04`, `t05`, `t08`, `t11`). Existing records include iframe metadata/patches; playback was not tested. These are capture/widget limitations until investigated, not proof of broken videos.
- Pale/no-banner pages and no-image date excerpts are retained, not replaced by invented “complete” imagery. The plain alternate `how-to-choose-the-best-sliding-glass-door-repair` appears at both widths; its cause is unknown.
- Original t17/t21 “one-width-only” flags are stale storage-root artifacts: their missing desktop records are in the additive sheet. Keep the semantic anomalies, remove the missing-capture interpretation.
- Sheet gray below actual page height is padding, and wrapped side-by-side columns inside a cell are contact-sheet packing, not webpage columns. Header/fixed elements were hidden in segments; first viewports were **not** separately inspected. No fixed-UI, hover, menu, FAQ action, form validation or responsive 360px claim is made.
- Discovery cannot prove orphan-page completeness. No distinct price/financing/careers/gallery/thank-you/404 page was established in this captured ledger; do not infer those pages are absent from the live site. No browser/recapture performed. The blank-check script was read but not executed because it writes a shared `_blank-check.json` outside assigned scope.

## Exact remaining native-size queue

**Overview remaining: none. Full-size remaining: 105 ledger slugs, all not started, both widths.** R/`_sheets/theglassperts.com/fullsize-queue.json` is the executable handoff: exact URL, raw record, first-viewport path and every segment path/y/height for each width, with reasons. Includes every semantic singleton, both designed core services, all algorithmic flags (including storage-only flags for transparency), visual outliers and differing examples below. Deduplicate redirect targets only after recording the alias relationship; no inspection credit transfers automatically.

| Repeated semantic family | Two differing examples queued |
|---|---|
| service-locality-editorial | `24-hour-commercial-glass-repair-naples`, `bathroom-mirror-installation-tampa` |
| core-service-editorial | `board-up-services`, `sliding-glass-door-repair` |
| core-service-designed | `window-installation`, `window-repair` |
| locality-service-grid | `altamonte-springs`, `altamonte-springs-fl` |
| locality-rich | `collier-county__marco-island`, `miami-dade-county__kendall` |
| locality-plain-editorial | `coral-gables-commercial-glass-repair`, `coral-gables-window-glass-repair` |
| blog-detail | `5-benefits-of-energy-efficient-glass-in-miami`, `advantages-of-professional-sliding-glass-door-track-repair` |
| blog-index | `blogs`, `blogs__page__4` |
| date-archive | `2023__07__04`, `2025__03__12` |

Exact remaining slug list (same 105 entries as JSON; first viewport + all segments at 1440 and 390):

- `home`
- `blogs`
- `patio-door-roller-replacement`
- `how-to-replace-rollers-on-sliding-glass-door`
- `how-to-choose-the-best-sliding-glass-door-repair`
- `window-repair-for-commercial-property-what-to-expect`
- `4-tips-to-fixing-a-sliding-door`
- `helpful-fix-to-squeaking-sliding-door`
- `how-to-know-when-its-time-for-a-professional-glass-repair`
- `how-to-replace-glass-door-rollers`
- `sliding-door-wheel-and-roller-repair__naples`
- `sliding-door-wheel-and-roller-repair__miami`
- `commercial-glass-repair__naples`
- `commercial-glass-repair__miami`
- `board-up-services__naples`
- `residential-glass-repair__miami`
- `window-installation-tampa`
- `window-installation`
- `sliding-glass-door-repair`
- `window-repair`
- `glass-shower-door-replacement-hialeah`
- `sliding-glass-door-seal-replacement-tampa`
- `glass-cutting-service-tampa`
- `custom-glass-cutting-tampa`
- `plate-glass-repair-tampa`
- `tempered-glass-installation-tampa`
- `safety-glass-installation-tampa`
- `window-glass-supply-tampa`
- `decorative-glass-installation-tampa`
- `tinted-glass-installation-tampa`
- `impact-glass-tampa`
- `residential-glazier-tampa`
- `glazier-services-tampa`
- `emergency-glass-and-window-repair`
- `sliding-glass-door-repair-doral`
- `sliding-glass-door-repair-in-tampa-fl`
- `sliding-glass-door-repair-in-north-miami`
- `sliding-door-repair-hialeah`
- `window-repair-orlando`
- `shop-window-repair-miami`
- `areas`
- `sitemap`
- `commercial-glass-repair`
- `sliding-door-wheel-and-roller-repair`
- `board-up-services`
- `residential-glass-repair`
- `lee-county__cape-coral`
- `broward-county__fort-lauderdale`
- `faqs`
- `miami-dade-county__kendall`
- `miami-dade-county__doral`
- `osceola-county__kissimmee`
- `emergency-glass-repair-miami`
- `testimonials`
- `about`
- `homestead-fl`
- `osceola-county__celebration`
- `osceola-county__poinciana`
- `contact`
- `book-service`
- `services`
- `2024__12__06`
- `2024__06__15`
- `2025__01__15`
- `2024__02__15`
- `2025__05__15`
- `2025__10__23`
- `2025__10__05`
- `2025__08__19`
- `2025__07__31`
- `2025__07__24`
- `2025__05__31`
- `2025__06__04`
- `2025__04__15`
- `2025__04__08`
- `2025__03__15`
- `2025__02__03`
- `2025__02__01`
- `2025__02__15`
- `2024__01__10`
- `2024__01__04`
- `2023__10__27`
- `2024__12__15`
- `2024__11__15`
- `2024__10__15`
- `2024__09__15`
- `2024__08__15`
- `2024__07__15`
- `2024__05__15`
- `2024__04__15`
- `2024__03__15`
- `emergency-glass-repair`
- `24-hour-commercial-glass-repair-naples`
- `bathroom-mirror-installation-tampa`
- `altamonte-springs`
- `altamonte-springs-fl`
- `collier-county__marco-island`
- `coral-gables-commercial-glass-repair`
- `coral-gables-window-glass-repair`
- `5-benefits-of-energy-efficient-glass-in-miami`
- `advantages-of-professional-sliding-glass-door-track-repair`
- `blogs__page__4`
- `2023__07__04`
- `2025__03__12`

- `2024__11__18`

## Candidate overview evidence for the lead

At most six; these are contact sheets, not approved native-size screenshots:

1. R/`_sheets/theglassperts.com/1440/t22-home-0.jpg` — overall homepage sequence.
2. R/`_sheets/theglassperts.com/390/t22-home-0.jpg` — mobile stacking cost.
3. R/`_sheets/theglassperts.com/1440/t00-_1-0.jpg` — long service template mixed with utility exceptions.
4. R/`_sheets/theglassperts.com/1440/t07-miami-dade-county_x-0.jpg` — rich locality visual inconsistency.
5. R/`_sheets/glassexpertsfl.com/1440/alternate-resolved-0.jpg` — redirected-root coverage and nested article anomalies.
6. R/`_sheets/theglassperts.com/390/t24-one-off-0.jpg` — review feed/maps structure.

Done · 88-sheet overview and URL/width reconciliation. Verified · opened-image manifest, all 948 cell mappings, parseable records/nonempty referenced first/segment JPGs. Not verified · full-size/copy/contrast/fixed UI/live interactions/discovery completeness. Next · lead verifies, commits/reviews, then owns the 105-entry native-size queue. No commit, board or handoff edit performed. The 3.6M soft-budget figure was a planning estimate supplied by the lead, not measured Glassperts usage; no claim of measured cost.

---

# Native stage (2026-11-06, Claude research sub-agent) — STOPPED AT BUDGET STEER (partial)

Scope: saved-state inspection only. No browser, recapture, blank-check, grouping or global helper was run. Interaction JPGs live under R/`theglassperts.com/_interactions/` (94 files: home 25, services 21, contact 25, faqs 23, gallery-missing 0 — empty 1440/390 dirs). All interaction URLs are on alias host `glassexpertsfl.com`. Saved JPGs are 1440×900 / 390×844 viewports (sips). An image counts as inspected only when its pixels were returned to me; any request-limit/media-removed result stays unopened.

## Interaction metadata (record, not pixels) — `bulk-interactions.json → entries[site=theglassperts.com]` (100 entries)

- Desktop nav: Services dropdown (7 services: Sliding Glass Door Repair, Sliding Door Wheel and Roller Repair, Residential, Commercial, Window Repair, Window Installation, Board Up) and Locations (8 counties incl. Tampa Bay) with nested county flyouts (e.g. Miami Dade → Coral Gables, Cutler Bay, Doral, Homestead, Kendall, Miami).
- Home form (Gravity-style): First, Last, Phone(Required), Email(Required), Message; DOM `required` false on all (validation is plugin-side). Contact form: LinkedIn (text, presumably honeypot — label only, not verified), First, Last, Phone*, Email, address fieldset incl. State select, "What Service Can We Help You With?*". Services and FAQ pages: `forms: []`.
- FAQ toggle: 1440 first item height 159 → 62 after click (the first item appears pre-open and the click collapsed it); 390 height 297 → 297 (no recorded change). Pixel check below.
- Fixed UI by DOM: reCAPTCHA badge (60px) on all pages; JivoChat "Send us a message" bar 40px at 1440 bottom (home/services/faqs, not contact); Jivo mobile button 85px at 390 bottom-right (home both positions, faqs only at 0.7). Home 390 first sticky sample reports viewport height 948 vs 844 elsewhere — unexplained, recorded as metadata only.
- Hover: nav/button background → rgb(227,185,45) gold with 8px translateY (transform matrix …,0,8).
- Gallery: "No distinct matching page found in homepage navigation" → 20 not-present entries, 0 screenshots. Do not read as "site has no gallery".

## Interaction JPG inspection log (pixels returned and viewed; batches of 3)

Paths relative to R/`theglassperts.com/_interactions/`.

### home-_/1440 (16/16 viewed)
- `01-initial` first viewport: white 207px header, multicolour hexagon logo left, eight gold text nav links (Home, Services▾, Locations▾, Areas, About, FAQs, Contact, Blogs); no phone or CTA in header. Hero photo (house + sliding glass) with dark overlay; huge white "THE GLASSPERTS" + "The Top Rated Sliding Glass Door Repair & Installation Company"; two ghost outlined buttons "BOOK ONLINE" and "(877) 748-0365" at y≈817–876 (bottom edge of the 900px fold). Right: translucent navy form card (First/Last, Phone, Email, Message, gold "Submit") — the form is fully above the fold; its card is cut at the fold. No reCAPTCHA badge or Jivo bar visible in this frame although DOM lists them (timing unknown).
- Visible type renders as a neo-grotesque resembling Arial/Helvetica (straight-sided G/S), not visibly geometric. Record lists Poppins for headings on another page; whether Poppins failed to load here is **not** established — pixel impression only.
- `02`–`09` dropdowns: white panels, dark text rows ~45px with hairline separators, active parent turns gray. Services (7 rows) overlays hero copy; Locations (8 counties) has ▶ flyouts opening right at x≈967–1267: Broward→Fort Lauderdale; Miami Dade→6 cities; Collier→Naples, Marco Island; Lee→Bonita Springs, Cape Coral; Orange→Orlando; Osceola→Celebration, Poinciana, Kissimmee. Sarasota and Tampa Bay have no arrow. Flyouts cover the form's first fields. Hover-opened states only; keyboard/settled-close unknown.
- `10` focus: First Name gets a ~3px near-black outline — visible, but low contrast against the navy card. `11` invalid: "invalid-phone" typed into Phone with focus outline; **no inline error message visible** in the saved frame (native bubbles are not in screenshots; DOM `required` false).
- `12` scroll 0.3: header not sticky (scrolls away). YouTube poster (left) whose thumbnail contains home-made "LICENSED & INSURED" and "5 STAR GOOGLE RATING" badges, framed by a dashed gold corner and dot grid. Right copy column runs to x≈1428 — ~12px right margin at 1440, visibly cramped versus the 130px left margin. Jivo "Send us a message" bar bottom-right over the navy band.
- `13` scroll 0.7: navy service band with cyan outlined "LEARN MORE" buttons at three different y positions (≈0, 7, 41) — staggered; reveal-animation mid-state plausible, not a confirmed layout bug. Photo CTA band "Schedule Your Glass Repair Service Today!" + ghost phone button. Then "Glass Window Repair And Replacement" slate-blue heading with short gold rule; body copy line ends ("…door is", "…but it", "…at") are clipped under the image starting x≈782 — saved-state overlap, cause unknown (image entrance animation plausible).
- `14` hover button (element crop): BOOK ONLINE fills gold rgb(227,185,45) with white text — white on that gold is low contrast by eye. `15` hover nav (crop): "Home" turns gray from gold.
- `16` reduced-motion (scrolled ≈720px): below hero, a pale-gray band with three white rating cards with gold top rule — BBB-style "A+" mark 5.0 "Based on 628 reviews", Google "G" 4.9 / 245, Facebook "f" 5.0 / 383, orange stars. Then letter-spaced "S I N C E  2 0 0 0" eyebrow + navy H2 "Your premier destination…" with gold rule; the left half beside it is empty white in this frame (image not rendered — reveal/lazy cause unknown, also under reduced-motion emulation). Ratings/counts are page text as captured, not verified live or as authentic.

### home-_/390 (9/9 viewed)
- `01` first viewport: 207px white header (logo ≈ 25% of the 844px fold) with a small gray hamburger at right; no phone/CTA in header. Hero: left-aligned "THE GLASSPERTS" + 3-line subhead, BOOK ONLINE / phone ghost buttons at y≈607–652, form card starts y≈683 (First/Last visible). Form begins inside the first viewport.
- ~~Logo colour arrangement differs at 390~~ **Withdrawn:** re-viewing `home-_/390/01-initial` beside `contact-_contact_/390/01–03` shows the same cyan/navy hexagon logo as 1440. No logo-variant claim.
- `02` menu-open / `03` submenu-open / `04` menu-close: **identical to `01` except the hamburger turns gold**; no drawer, list or submenu is visible in any saved frame. Record `items` is whitespace only (`"\n\n\n\n"`). Mobile menu content, open animation, focus trap and close are **unknown** — not "menu broken".
- `05` focus: First Name dark outline (same as desktop). `06` invalid: page auto-scrolled 29px; "invalid-phone" in Phone with outline at the fold; no visible inline error.
- `07` scroll 0.3: centred body copy is clipped at the right viewport edge ("cutting-e…", "commit…", "indus…") — text column wider than 390 in this frame; horizontal overflow vs entrance-transform mid-state not established. Navy "Our Services" + cyan rule + outlined "VIEW ALL SERVICES" → service photo card.
- `08` scroll 0.7: centred long paragraph; house photo bleeds off the left edge (x<0) with rounded right corners only — slide-in mid-state plausible. Jivo round mail button (≈64px, navy) overlaps the heading "Sliding Door & Glass Repair in Florida".
- `09` reduced-motion (scrolled into form): stacked form fields full-width inside navy card, gold Submit; then BBB A+ rating card full-width. Mobile form = 5 fields + 300px-tall message box ≈ 600px of scroll.

### service-_services_/1440 (in progress)
- `01` first viewport: same header; hero photo with centred "Our Services" title rendered **semi-transparent gray** (fade-in mid-state) + ghost BOOK ONLINE/phone. Navy band below: "Our Services" heading flush at x=0 and "VIEW ALL SERVICES" outlined button flush to x=1440 — no container margin in this saved frame (mid-animation vs layout not established).
- `02` Services dropdown: on this page the dropdown items render **gold text on white** (home rendered them dark) — inconsistent dropdown styling between pages; gold-on-white legibility weak by eye.
- `03`–`09` Locations dropdown + 6 county flyouts: same structure as home, all rows gold on white; active row gray. Jivo bar (bottom-right, ≈300×40) overlaps the "VIEW ALL SERVICES" button in `07`–`09`. 14/14 viewed.
- `10` scroll 0.3 / `14` reduced-motion: "Our Services" heading still at x=0 and button at x=1440 across three separate frames → this edge-to-edge alignment is consistent in saved states (not just one animation frame), though only saved states were seen. Cards: 3 columns, 440px photos with ~8px radius, 20px outer gutters, UPPERCASE light-weight titles, centred white body copy, cyan "LEARN MORE" buttons whose pale-cyan label on teal fill is low-contrast by eye; buttons not bottom-aligned (follow copy length).
- `11` scroll 0.7 (copy as captured): Commercial Glass Repair card text is a near-copy of the Residential card ("cracked window, shattered glass door, or foggy double-pane window … commercial space"); Board Up card says "remodeling or needing a new, tailored piece of glass" — copy does not match the service. Photos are specific and relevant (boarded storefront, shattered door). Hover crops `12`/`13` identical to home (gold fill; gray nav text).

### service-_services_/390 (7/7 viewed)
- `01`: 207px header + hamburger; hero "Our Services" (faded) + two ghost buttons; navy "Our Services" repeated immediately below with "VIEW ALL SERVICES" — the heading is duplicated within one fold.
- `02`–`04`: again only the hamburger colour changes; no drawer visible.
- `05`/`06`/`07`: one-column stacked cards (photo → uppercase 3-line title → copy → LEARN MORE). LEARN MORE sits ~6px above the next card photo — cramped vertical rhythm. No Jivo mobile button in these frames (DOM sticky for services 390 lists only reCAPTCHA).

### contact-_contact_/1440 (in progress)
- `01` first viewport: hero identical photo, faded "Contact" title + ghost buttons; below fold edge a navy block starts at x≈755 — **no form or phone/address visible in the first viewport**.
- `10` focus (scrolled): white shadowed form card flush to x=0; centred "Contact us here at The Glassperts Today!" plus a second heading "Contact Form" (two headings for one form); `"*" indicates required fields`; Name* (First/Last), Phone*, Email (not marked), **Address* required** (Street, Line 2, City, State select pre-filled "Florida"). Focus = dark 2px outline on First. Right: navy column with a loaded Google map (Miami, "Open in Maps") and a second navy block with **no map rendered** — record 390 lists these iframes as `about:blank` (lazy); not a live defect.
- `13` scroll 0.7: lower form — State select "Florida", "What Service Can We Help You With?*" textarea with "0 of 600 max characters" counter, gold Submit (white label on gold, weak contrast by eye); long empty white area under Submit inside the card because the map column is taller. Right column: Naples map + "THE GLASSPERTS NAPLES LOCATION" (uppercase letter-spaced), cyan pin/phone glyph icons, address and (239) 350-5488; Orlando map tile still **loading (gray + spinner)** — lazy iframe, not a live defect; Orlando 4700 Millenia Blvd Ste 175-R, 407-214-3771. Miami card in `12`: 13991 SW 144th Ave #302, (786) 558-7575. Three different local phone numbers plus the (877) number in the hero — four phone numbers on one page.
- `16` reduced-motion: same layout settled; Naples map shows Google place card with a blank star rating placeholder ("★ __") — map widget partially loaded.
- `02`–`09` dropdowns: gold-on-white variant (same as services); form card visibly moves up between frames (top y≈846 → 740 → 707) — entrance animation, so first-viewport position is time-dependent. `14`/`15` hover crops identical to home. 16/16 viewed.

### contact-_contact_/390 (3/9 viewed: `01`, `02`, `03`)
- `01` first viewport: 207px header + hero photo with "Contact" title and two ghost buttons; **no form, address or local phone in the first 844px** (only the generic (877) button). `02`/`03`: only hamburger turns gold; no drawer visible (same as home/services).

## Status at stop (budget steer: 4.17M > 4M soft input)

**Interaction JPGs: 65 / 94 pixel-viewed**, 0 media-removed/limit results (every Read returned an image). Breakdown: home 25/25, services 21/21, contact 1440 16/16, contact 390 3/9. One extra re-view (`home-_/390/01`) used only to correct my own claim.

**Exact unviewed interaction queue (29) — no pixel observations exist for these:**
- `contact-_contact_/390/`: `04-menu-close`, `05-form-0-empty-focus`, `06-form-0-invalid`, `07-scroll-0.3`, `08-scroll-0.7`, `09-reduced-motion` (6)
- `faq-_faqs_/1440/`: `01-initial` … `15-reduced-motion` (all 15)
- `faq-_faqs_/390/`: `01-initial` … `08-reduced-motion` (all 8)
FAQ toggle behaviour is therefore known only from record metadata (above), not pixels.

**Not started this stage:** functional one-offs beyond the interaction set (reviews/`testimonials`, `areas`, `sitemap`, `book-service`, `about`, `blogs`, 404/careers — none captured as distinct pages per prior report), the 2-per-family native examples, visual outliers, and alias refinement. The **105-entry native queue in R/`_sheets/theglassperts.com/fullsize-queue.json` remains 0 inspected** — interaction frames are not credited to it (home/services/contact/faqs queue entries need their own first-viewport + segment inspection). Note: the prior report's slug list visibly contains 106 bullets (`2024__11__18` after a blank line) versus the stated 105; reconcile against the JSON before use. No glassexpertsfl.com native records opened. 360 / keyboard / focus-trap / settled-close / live motion remain unknown.

## Supported cross-page findings so far (interaction frames only)

| Finding | Evidence | Confidence |
|---|---|---|
| Header is 207px tall at both widths, not sticky, contains no phone/CTA; mobile logo ≈25% of the fold | all `01-initial`, `home-_/1440/12` | Certain (saved states) |
| Home puts a 5-field form in the first viewport at 1440 and starts it in the 390 fold; contact page shows no form/contact data in its first viewport at either width | `home-_/1440/01`, `home-_/390/01`, `contact-_contact_/1440/01`, `/390/01` | Certain |
| Dropdown text colour differs between pages (dark on home, gold-on-white on services/contact) | `home-_/1440/02` vs `service-_services_/1440/02`, `contact-_contact_/1440/02` | Certain |
| Mobile menu content never visible in saved frames; only hamburger colour changes | `*/390/02–04` for home, services; contact 02–03 | Certain about frames; cause unknown |
| No visible inline error after invalid phone; DOM `required` false | `*/11-form-0-invalid`, `*/06` | Certain about frames |
| Home video poster uses home-made "Licensed & Insured" / "5 Star Google Rating" badges; rating row uses real BBB/Google/Facebook marks with counts | `home-_/1440/12`, `/16` | Certain (pixels); counts unverified |
| Edge-to-edge headings/buttons on services (x=0 / x=1440) across 3 frames; 12px right margin in home copy column | `service-_services_/1440/01,10,14`; `home-_/1440/12` | Likely layout, saved states only |
| Clipped/overlapping text at 390 and 1440 during scroll frames | `home-_/390/07`, `home-_/1440/13` | Cause unknown (animation mid-state plausible) |
| Jivo chat bar/button overlaps CTAs and headings | `service-_services_/1440/07–09`, `home-_/390/08` | Certain in frames |
| Service card copy mismatch/duplication (Commercial ≈ Residential; Board Up describes glass pieces) | `service-_services_/1440/11` | Certain (copy as captured) |

**ArbCut implications (judgment):** copy — real third-party rating marks row; specific job photos on service cards; county→city nav model. Avoid — home-made badge art in media; 207px header; contact page that hides contact details below a decorative hero; multiple competing phone numbers; gold-on-white text and white-on-gold buttons; chat widgets covering CTAs; required full address on a quote form.

Done · 65/94 interaction JPGs inspected and logged; one self-correction. Verified · each logged frame returned pixels; record metadata cross-read from `bulk-interactions.json`. Not verified · 29 interaction frames, all 105 native queue entries, live behaviour. Next (lead) · commit this report; assign remaining 29 frames + native queue. No commit, board, handoff, raw or global-helper change made by me.


## Lead saved-interaction closure and queue reconciliation — ordinal17

All94savedinteractionJPGs now inspected:65 initialClaude views remain attributed to the worker's explicit group/file log; lead actually viewed remaining29 via12 native-pixel compositions+2 direct hover crops. Exact94-source ledger in external `native/interaction-manifest.json`; lead14display→29source/outcome map `native/lead-interactions/manifest.json`. Every source exists. No rawflags changed, no native page segment credited from an interaction frame. Native queue still0/105opened. Lead checked every nativequeue record/firstviewport/segment path exists across both host roots, not its visual quality.

**Queue-count correction:** regex-counted original markdown slug list is105uniqueentries, exactly equal to105JSONslugs, including2024__11__18. The worker's106warning was a counting error; no missing106thpage and no silently removed scope. Original105queue remains authoritative and unmodified.

- Contact390 `04-menu-close.jpg` shows gold hamburger and hero without exposed links. `05-form-0-empty-focus.jpg` outlines FirstName; `06-form-0-invalid.jpg` shows invalid-phone without visible feedback. Address has an asterisk and required-fields explanation, but actual submit enforcement remains untested; DOMrequired=false is recorded metadata, not a full validation-code audit. `07-scroll-0.3.jpg` shows address/state/message fields; `08-scroll-0.7.jpg` has navy Naples/Orlando blocks with empty map regions and visible addresses/local phones. These are saved lazy/load states, not proven current map failures. `09-reduced-motion.jpg` shows form only; no motion pass.
- FAQ1440 `01-initial.jpg` has firstquestion expanded/gold with visible answer; `10-faq-open.jpg` instead shows it collapsed, with down-chevron and next row adjacent. This **visibly corroborates expanded→collapsed saved-state change**, regardless of misleading filename. `11/12-scroll` retain collapsed rows; reducedmotion15 again shows firstanswerexpanded. No live activation/keyboard/animation pass follows. Mobile `05-faq-open.jpg` keeps the hero and topquestion, without a demonstrable answer transition; `08-reduced-motion.jpg` shows expandedfirstanswer, so mobileactivation remains inconclusive.
- FAQ1440 `02..09-dropdown` expose Services and nested county/city menus: Broward→FortLauderdale,MiamiDade→citylist,Collier→Naples/MarcoIsland,Lee→BonitaSprings/CapeCoral,Orange→Orlando,Osceola→Celebration/Poinciana/Kissimmee. Useful hierarchy, but actual links/keyboard usability untested. FAQ390menu/submenu/close frames show only hamburger colour changes and page, no drawer content.
- FAQ scrolls show navy question rows/white labels, gold active question and white answer panel; the right-lower Jivochat bar overlaps rows in desktop11/12. Mobile late scroll07shows footer QuickLinks and floating envelope widget. These saved overlaps are relevant warnings; no production-cause assertion. Direct hover crops show whiteBOOKONLINEongold and grayHomelabel, not matched-baseline hover changes.

ArbCut: make FAQ expanded/collapsed states clear and verify real keyboard/touch behavior locally; retain useful regional hierarchy and keep chat controls clear of content. Do not turn invalid typing without feedback into a validation-defect claim. Nativeoneoffs/templateexamples/outliers/aliasrefinement remain open; all105queue entries have no new nativecredit from this closure. No live360/focus-trap/motion/submission pass claimed.

---

# Native page stage — retry1 (Claude research sub-agent, 2026-11-06)

Interaction work is closed (94/94 per lead appendix above); not reopened. **Manifest created before any view:** R/`_sheets/theglassperts.com/native/page-manifest.json` — 8 functional pages (faqs, contact, book-service, areas, sitemap, about, testimonials, home), every first viewport + every segment at both widths mapped to 69 display files under `native/pages/<slug>/<width>/`. Displays are read-only derivations: 1440 segments cropped into ≤1200px-tall pieces at native width; 390 segments joined three-per-strip side by side at native size (gray 10px gutter between frames is packing, not page). `viewed` flips only after pixels return; `falseFlagChecks` records each original algorithmic flag and its outcome. **Iframe metadata correction:** all 1440 records (bulk-capture.mjs) have a root `iframes` list; all 390 records (scrolled-viewport method) have **no `iframes` field at all** — manifest marks `rootIframesField: absent`, which is not "zero iframes" (contact 390 pixels show three maps). All 8 pages resolve to raw host `theglassperts.com`; `blogs` (glassexpertsfl.com host) deferred.

## faqs
- **1440 (3/3 viewed: first-viewport, seg0–1200, seg1200–2359).** Shared 207px header; hero "FAQS" + BOOK ONLINE / phone ghost buttons; first question row visible at y≈798 inside the fold. Accordion: 1150px-wide navy rows (white bold title-case questions with chevrons), first row open — gold question, white answer panel with hairline border. 15 questions, most pairing a service with a city (Miami/Naples/Tampa/Orlando) — locality-SEO phrasing, short answers. Footer: charcoal, logo, Quick Links (4), Services We Offer (4 of 7 services), Contact Us (877-748-0365, Sales@glassexpertsfl.com) with small gold glyph icons; copyright bar + Facebook/Instagram/Google round icons. No form, no sidebar, no CTA after the FAQ — the page ends in footer after ~110px white.
- Flag `height-outlier(2359)`: **real short page**, not capture loss.
- **390 (3/3 viewed: first-viewport, strip 0–2532, strip 2532–3673).** Fold: 207px header + 510px hero; first question row starts y≈758 (only its first line in the fold). Accordion rows become 2–3-line bold questions (~85–115px each) in a 350px column with ~20px side margins; first answer open. 15 rows ≈ 1,700px of navy before the footer. Footer stacks logo → Quick Links → Services → Contact → copyright/social; ends ~3673px. Header is not hidden in 390 segments (repeats in segment 0) — no separate fixed-UI conclusion. The gray area right of the final strip frame is strip padding.
- ArbCut: copy the plain readable accordion (clear open state with distinct colour + bordered answer); avoid city-stuffed question titles and an FAQ page with no follow-on CTA/form.

## contact
- **1440 (4/4 viewed).** First viewport = header + 500px decorative hero + only the top of the form card and first map; no address/local phone/form fields above the fold. Below: left white shadowed card flush to x=0 (two headings, then Name*, Phone*, Email, Address* with Street/Line 2/City/State=Florida, "What Service…*" textarea, gold Submit); right navy column, three stacked 630×300 maps each with an uppercase location label, pin/phone glyph rows: Miami 13991 SW 144th Ave #302 / (786) 558-7575; Naples 3201 Tamiami Trail N / (239) 350-5488; Orlando 4700 Millenia Blvd Ste 175-R / 407-214-3771. **Map pixels at 1440 are iframe patches** (`iframeCheck: patched`, 3 patches at x765, y792/1264/1736) — they show Google place cards with 4.9★ (212) Naples and 4.9★ (175) Orlando; these are patched third-party renders, not verified ratings. ~400px white gap below the card bottoms before the footer. Footer social row: Facebook icon rendered, Instagram/Google circles empty in this capture (icon-font/load timing; not a live defect claim).
- **390 (3/3 viewed).** Fold = header + hero only (form starts ≈y844+). Card holds the full form at 350px width (~1,250px), then three map blocks (render visibly despite the absent iframe field), then footer; doc 4843px. Contact info sits ~2,000px below the fold.
- Flag `height-outlier(2843)` at 1440: **real** — short utility page; not capture loss.
- ArbCut: put phone/area/hours and the form in the first viewport of the contact page; one phone number; ask only name/phone/postcode/message.

## Retry1 status at stop (budget steer 3.68M > 3.5M)

**Native displays viewed: 13 / 69** in `native/page-manifest.json` (faqs 6/6, contact 7/7). Every view returned pixels; 0 media-removed. The attempted `book-service/1440/first-viewport.jpg` read was **rejected before display — never opened, no observations**.
**Native queue credit:** 2 / 105 slugs complete at both widths (`faqs`, `contact`), first viewport + all segments. 103 not started. Flags: `faqs` and `contact` height-outlier flags → confirmed real short pages; all other flags `pending` in the manifest.

**Exact unviewed functional displays (56), all prepared in the manifest:**
- book-service: 1440 fv + 2 crops; 390 fv + 2 strips (6) — booking iframe present (1 root iframe, patched)
- areas: 1440 fv + 2; 390 fv + 2 (6)
- sitemap: 1440 fv + 3; 390 fv + 2 (7)
- about: 1440 fv + 4; 390 fv + 4 (10)
- testimonials: 1440 fv + 5; 390 fv + 4 (11)
- home: 1440 fv + 7; 390 fv + 7 (16)
- blogs (raw host glassexpertsfl.com) — not yet in the manifest.

**Remaining semantic gates (none started):** two examples each for designed core service (`window-installation`, `window-repair`), core service editorial (`board-up-services`, `sliding-glass-door-repair`), rich locality (`collier-county__marco-island`, `miami-dade-county__kendall`), locality grid (`altamonte-springs`, `altamonte-springs-fl`), service-locality editorial, blog detail, blog index, date archive, plus outliers (`homestead-fl`, `broward-county__fort-lauderdale`, white-gap service pages) and alias refinement. The original 105-entry queue and its reasons are unchanged.

**Unknown:** 360px, keyboard, motion, focus trap, live map/booking behaviour. Saved states only.

Done · manifest of 69 displays + 13 viewed (2 pages fully). Verified · each logged display returned pixels; iframe field presence was checked in each record. Not verified · 56 displays, 103 queue slugs. Next (lead) · commit; book-service → home order; template examples after that. No commit, board, raw or shared-file change by me.


## Lead verification of retry1 — ordinal18

Manifest69prepared displays partitions13viewed/56unviewed, two complete pairs `faqs`/`contact`, **18unique original sourceJPGs**. Every display/source/record path exists. Verified each viewed1440segment crop group is contiguous from0tofull originalimageheight, so splitting into1200px pieces does not leave unseen segment gaps. Visual coverage remains worker-attributed, no new lead image reinspection. Nativequeue103/105notstarted;94savedinteractions remain inspected, not reopened. Rootiframe presence versus absent390field distinction preserved; absence is not zeroiframes. Contact address is **labelled required**; submit enforcement remains untested as recorded in the lead ordinal17 note. Two heightflags resolve to short utility pages at the saved-capture level, not blanket capture-fidelity proof.


---

# Native page stage — FINAL retry2 (Claude research sub-agent, 2026-11-06)

Fresh session; retry1 ledger `native/page-manifest.json` reused, flags flipped only after pixels returned. Saved states only; no live pass.

## book-service
- **1440 (3/3).** Shared 207px header; 500px hero "SERVICE BOOKING" + BOOK ONLINE/phone ghost buttons; navy "Call Now And Get 15% Off Your First Order!" / "Does not apply to Special Orders" at y≈785, immediately above the widget. Booking is a Workiz iframe patch (record: x0 y875 1420×700): four-step rail Items→Schedule→Details→Summary, "What will you need for this service?", five item cards priced **$0.00** with ±quantity steppers, four of them gray wrench placeholders. Fifth card (COMMERCIAL GLASS REPAIR) is cut by the frame bottom and the sticky "Powered by WORKIZ / Continue" bar; Continue is disabled-gray. Frame stops 20px short of right edge (1420 wide), leaving a visible tint edge. Names truncate ("RESIDENTIAL WINDOW GLASS …", "RESIDENTIAL SLIDING GLASS…" twice, so two cards are indistinguishable). "Call Now" headline sits over a book-online tool with no tel link visible at that point other than the hero button.
- **390 (3/3).** Fold = header + hero + 2-line offer only; widget starts in frame 2. Rail drops step labels except "Items"; 2-col cards; Continue overlays cards 3–4. Frame ends y≈765 of the 844 frame, then blank white into footer. Doc 2872px.
- Flag `height-outlier(2153)`: **real** short utility page. Patched third-party render; the 5-card state and clipping belong to this saved load, booking was not exercised.
- ArbCut: a step rail is useful clarity; do not show $0.00 prices, placeholder tiles, truncated indistinguishable options, or a "Call Now" headline above a booking tool. Keep the commitment action clear of content on 390.

## areas
- **1440 (3/3).** Same header + "AREAS WE SERVE" hero with same pool/dog photo, then left-aligned "Locations To Serve You" with teal rule and a 4×10 bullet list = 40 "City, FL" places, 44px row pitch, navy on white. No map, no grouping, no intro, no CTA after the list. Inconsistent casing visible: "Tarpon springs", "Key largo". List items show no link styling in the capture; link status not checked from pixels.
- **390 (3/3).** Fold = header + hero + heading only; list is a single column in four groups with 84px gaps at each desktop column break (a column-stack artifact with no group labels). Doc 4018px, ~2,300px of list.
- Flags `skeleton-deviates(0.75)` and `height-outlier(1909)`: **real** list-only page, not capture loss.
- **Font-state evidence:** areas renders Poppins/Lato and Facebook/Instagram/Google icons; book-service renders a Helvetica-like fallback with only Facebook icon. Same template, so saved captures differ by font/icon load; earlier contact empty-icon note fits this. Do not treat typeface differences between saved pages as design decisions.
- ArbCut: a service-area list is cheap and scannable, but group it by region/county with labels, link it, and end with a CTA; avoid unlabelled gaps on mobile.

## sitemap
- **1440 (4/4; last crop `seg002400-h30` is 30px of footer charcoal only).** Header then bare black "Sitemap" H1, no hero, no CTA. 1140px zebra table of **29 raw URLs** as small gold underlined text on white/#f4f4f4 rows: low-contrast gold, no labels or grouping. Mix of city, county/city, and service-locality slugs in an arbitrary order (`/miami-broken-sliding-glass-door/`, `/tampa-bay/`, `/sarasota-county/sarasota/`, `/coral-gables-commercial-glass-repair/`, `/marco-island-fl/`, `/lee-county/cape-coral/`, `/oviedo/`). Reveals parallel slug schemes on one site; 29 rows is far fewer than the 105 queue, so it is not a full inventory.
- **390 (3/3).** Same table, 370px wide; longer URLs wrap to two lines. Footer as elsewhere. Doc 3289px.
- ArbCut: not a design reference. Lesson: one slug scheme, and a human-readable labelled sitemap if any.

## about
- **1440 (5/5).** Fold: shared header + "ABOUT US" hero, only the navy band edge and top of "About The" below. Sequence: navy two-column story (Miami skyline photo on teal dotted offset block; "since 2000", three locations) → white "What Sets Us Apart" 4-bullet list + rounded photo of hand with drill on door handle, flush to right edge → dimmed interior-photo band with YouTube patch "24/7 Emergency Glass Repair Services in Miami" (thumbnail shows Licensed & Insured and 5 Star Google Rating badges) + "See Why We At The Glassperts Are The Top-Rated…" + BOOK/phone → reviews widget "4.9 / Based on 342 reviews", three cards all "2 years ago" → navy "3 Locations To Serve You", three maps/addresses/local phones → "Latest Blogs" 3 cards, VIEW ALL BLOGS → footer. Trust claims are saved third-party/self-claims, not verified. Widget chrome is degraded in this save: slider arrows are plain gold rectangles, "powered by" and "review us on" lack logos, and the profile image is a small dark thumbnail.
- Layout habits: headings and cards flush to viewport edges in several bands ("Latest Blogs" at x≈0, last card touches right edge, "3 Locations" at x≈10). No team, no owner names, no real job proof besides the video; copy is generic ("top-notch", "unwavering commitment"). Blog titles use both "Glassperts" and "Glass Experts FL".
- **390 (5/5).** Doc 8203px. Long center-aligned paragraphs and center-aligned bullets (ragged, bullet dots stranded left) are hard to read; review widget squeezes into a narrow 80px name column ("The / Glassperts / Sliding / Glass / Door &…") beside a clipped carousel; text cut mid-line in card. Maps stack with one per location; "THE GLASSPERTS ORLANDO LOCATION" wraps. Blog cards image-left with 4–7 line uppercase titles.
- ArbCut: copy the proof *order* (story→differentiators→video→reviews→locations) only if each has real evidence; avoid centered long copy on mobile, edge-flush headings, and third-party widgets in narrow columns. Use named people and real job photos.

## testimonials
- **1440 (6/6).** Unique hero variant: 355px dark Miami skyline, "Customers Reviews" (grammatical slip), no hero CTAs. Left 760px column "Overall Rating" with five stars and **no number or count**, then **20 visible review entries** (name, avatar, relative date, stars, text) all 5-star, all "2 years ago"/"3 years ago", and a "More reviews" link. Right rail: six white boxed service links, ending y≈1090, leaving ~2,300px of empty right column beside the reviews. Then "Look for us on the map!" with three full-width map/address cards, footer. No booking CTA anywhere between hero and footer.
- Strongest content on the site: specifics a generic template cannot fake — named technicians (Eddy, Juan, Alejandro), upfront estimate at the low end, no upsell to hurricane windows, non-standard glass in stock same day, text ETA, post-install check, clean-up. Several entries are star-only. Review dates are saved relative strings, and ratings are unverified.
- **390 (5/5).** Doc 8579px. Fold ends at first reviewer name. Single column reads well, left-aligned (contrast with About's centered text); service buttons move below all reviews (~6,000px down); "Look for us on the map!" heading sits flush at x≈0.
- ArbCut: copy the *specifics*: quote real customer language about response, price honesty, clean-up. Avoid age-stale reviews, empty side rails, and proof pages with no next step. Keep any rating claim sourced and dated.

## home
- **1440 (8/8).** Fold (900px): shared header; hero photo with left-aligned "THE GLASSPERTS", "The Top Rated Sliding Glass Door Repair & Installation Company", BOOK ONLINE/phone ghost buttons; right translucent navy lead form First/Last/Phone/Email/Message + gold Submit, fully inside the fold. **Best fold on the site; only page with a form in the hero.** Headline is the brand name, the service is secondary.
- In the full capture the hero photo stops at y=900 and a flat gray block fills to y≈1085 under the form card. 390 has no such band, so this is likely capture of a viewport-height background; not a live-defect claim.
- Sequence: 3 rating cards (A+ 5.0/628, Google 4.9/245, Facebook 5.0/383) → "SINCE 2000" + YouTube patch + long editorial → navy "Our Services" 6 image cards (one image is a real broken door, one a real plywood board-up; rest stock/AI-looking) with teal LEARN MORE; second row is a different size/offset from the first → "Schedule Your Glass Repair Service Today!" band, phone only and off-center from heading → two editorial SEO blocks → review carousel → navy "4 Locations To Serve You" (adds Tampa 8270 Woodland Center Blvd / (813) 564-0611) → Latest Blogs → footer. Doc 7692px.
- **Claim inconsistencies in saved pixels:** Google count 245 in rating card vs "342 reviews" in widget; "4 Locations" (home) vs "3 Locations" (about) and three on contact/testimonials; editorial says Miami, Naples, Orlando, Fort Lauderdale, Miramar; "24 hours a day, 7 days a week" appears in copy. Could be stale values or separate profiles; none verified. Third blog title clips at x=1290 ("HOMEOWNERS" cut, "DOUBLE PANE" cut) at 1440 in narrow column.
- **390 (8/8).** Doc **15,729px**, about twice the 1440 height. Fold shows heading, CTAs and the first two form fields; rest of the form continues to ~y1300. Long center-aligned editorial (in two runs); the services stack alone runs y≈3,930–7,480. **Review carousel at y≈9,950–10,650 collapses in this save:** three ~55px-wide cards with text breaking inside words ("Ve/ry/pro/fes"), avatar alone at left, and ≈1,000px of mostly blank white around it. About's 390 widget differs, so this is a saved widget state, cause unknown, and needs a live check before being treated as a defect. Fourth map narrower than the other three.
- ArbCut: copy the fold structure (clear service statement + call + short form visible at both widths), but lead with the service, and ask for fewer fields. Keep real job images over stock. State one verifiable rating with source/date. Cut the 390 page length: no long centered SEO copy; test any third-party review embed at 390.

## Functional page cross-read (8 pages, 69/69 displays)
- Consistent system: 207px header with oversized badge logo, gold nav text on white (low contrast), photo hero with ghost buttons, navy/teal/gold bands, charcoal footer. Identity is coherent, but heading/card left edges vary (x≈0, 10, 30, 150, 160, 180).
- Header consumes 23% of a 900px fold and 25% of an 844px fold. Hamburger is small and gray.
- Home is the only page combining fold form + CTAs. Utility pages put the task below the fold (contact) or behind a third-party frame (booking).
- Service coverage inconsistent: footer lists 4 services, testimonials rail 6, home 6.
- Saved font/icon states vary per page, so no type conclusions from individual captures.

## blogs (raw host glassexpertsfl.com; queue entry `blogs`)
- **1440 (5/5).** Shared header/hero "Blog Posts" (larger H1 than other heroes), centered "Latest Blogs", 3-column rounded cards with thin gold outline: image, gold category pill, bold title, 3-line excerpt, gold READ MORE», date, "No Comments". Ten posts on page 1 (Apr 8–Oct 23, 2025), pagination 1–5. Cards are the cleanest component on the site. Faults in this save: May 31 card has no image, leaving a white hole; one card labelled UNCATEGORIZED; gold READ MORE and gray excerpts are low-contrast; last row one orphan card with two empty columns; every card says "No Comments".
- **390 (5/5).** Different hero image from 1440: **a real branded Glassperts van with a uniformed technician**, the most credible photo seen, used only at mobile width and only here so far. Single-column cards, ~610px each, listing ~6,800px.
- ArbCut: copy card hierarchy (image→title→excerpt→date). Remove comment count and uncategorized labels; require an image or a designed no-image variant. Use a real van/technician photo at every width.

Blogs 390 tail (`strip007596-007732`, 136px) viewed: footer social row only, Facebook icon filled, other two empty. Blogs complete: 10/10 displays.

## window-repair (designed core service; raw host theglassperts.com)
- **1440 (8/8).** Doc 7638px. Fold: shared "WINDOW REPAIR" hero, then H2 and the top of a navy "Contact Us" sidebar; form fields fall below the fold. Two-column main: left centered H2 "Expert Window Repair in Miami, Naples, Orlando, FL & Surrounding Areas" + copy + stock photo; right 413px navy sidebar with the long contact form (Name, Phone, Email, Address with Street/Line 2/City/State=Florida, service textarea, Submit), "Our Services" links, schedule card, and location links. Sidebar's City/State fields misalign. Below its content the navy column runs ~800px empty.
- Content: "Residential & Commercial Window Repair Service" 7 cards in a 3-col grid (gray alternate panels, stock imagery, one orphan double-width card) → "Benefits of choosing" alternating image/text bands that run near-edge to edge → navy 6-step process "Our Window Repair Process from start to finish" (gold numbered headings, centered paragraphs, single gold "Contact Our Team" CTA) → FAQ accordion (first open, navy rows, full width 1126px) → "3 Locations" → photo CTA band → footer.
- The Miami map shows a second pin, "The Sliding Door Experts", in this saved patch, which the map on other pages did not show. Third-party map content, no claim.
- Process section is the strongest section type on the service templates: explicit estimate-before-work and approval step, though the copy is generic and centered paragraphs are long.
- **390 (3/8 only: first viewport, strips 0–2532 and 2532–5064; PARTIAL).** Fold = header + hero + first line of H2; H2 runs five large centered lines. The form sidebar is not seen in this range: it does not precede the content at 390. Service cards stack single-column, left-aligned, with gray panels on alternates (~560px each). Five later strips unviewed, so form/process/FAQ order at 390 is unknown. window-repair gets **no** both-width credit.
- ArbCut: copy the visible step sequence with an estimate/approval step and the service FAQ; avoid sidebar forms that leave empty columns, and long multi-city H2s.

## FINAL retry2 status at stop (budget steer 4.17M > 4M)

**Ledger:** `native/page-manifest.json` 90/115 displays viewed, 122 unique source JPGs behind viewed displays. Flags set only after pixels returned; 0 media-removed or missing. Functional 69/69, blogs 10/10, window-repair 11/16, board-up-services 0/10, homestead-fl 0/10 (prepared, never opened).
**Queue credit:** 9/105 queue slugs complete at both widths: faqs, contact, book-service, areas, sitemap, about, testimonials, home, blogs. 96 remain. These are queue entries, not 96 unique designs. Original queue file unchanged.
**Exact unviewed prepared displays (25):** window-repair 390 strips 5064-7596, 7596-10128, 10128-12660, 12660-15192, 15192-16826; board-up-services 5+5; homestead-fl 5+5.
**Not started, not in ledger:** window-installation; sliding-glass-door-repair; collier-county__marco-island; miami-dade-county__kendall; altamonte-springs; altamonte-springs-fl; 24-hour-commercial-glass-repair-naples; bathroom-mirror-installation-tampa; 5-benefits-of-energy-efficient-glass-in-miami; advantages-of-professional-sliding-glass-door-track-repair; blogs__page__4; 2023__07__04; 2025__03__12; broward-county__fort-lauderdale; white-gap service pages.
**Alias metadata (records only, no view credit):** raw `glassexpertsfl.com` holds 12 slugs. Three have a 390 record under `theglassperts.com` too (`4-tips-to-fixing-a-sliding-door`, `helpful-fix-to-squeaking-sliding-door`, `window-repair-for-commercial-property-what-to-expect`), each with the same glassexpertsfl.com final URL. Pixel equality between those copies not checked.
**Unknown:** 360px, keyboard, motion, focus trap, live map/booking/review-widget behaviour, link targets, and all rating/count/hours claims. Saved states only.


## Lead verification of FINALretry2 — ordinal19

All115 prepared display files, their mapped source files and records exist. Verified90viewed/25pending partition,122unique source JPG paths represented behind viewed displays;9wholepagepairs complete,`window-repair`11/16partial,`board-up-services`/`homestead-fl`unopened. The122count includes source paths for the partial page and is not122entireindependentpageinspections. Nine complete pairs are faqs/contact/book-service/areas/sitemap/about/testimonials/home/blogs; original105queue therefore96notcomplete. Workervisualcoverage attributed,not secondleadvisualpass. Prior94savedinteractions remainclosed withoutreopening. Re-encodingquality88 onnewderiveddisplays is recorded, rawfilesunchanged; no sourcepixelidentity claim.

"Home is the only page with a form and CTAs in the hero" is bounded to **the native functional pages inspected so far**, not all105queueentries or unknowncurrentproductionpages. "Stock/AI-looking" is appearance judgment, not establishedimageprovenance. All ratings/counts/hours/locations are capturedreferencecontent, not verifiedbusinessfacts or ArbCutproof.

FINALretrycapexhausted:leadowns25prepareddisplays (5window-repairmobile+10board-up+10homestead),remainingtemplate2example/outlier/aliasgates and broader96entryqueue;no thirdchildretry. Exactfalseflags remaininexternalnative/page-manifest.json,originalqueueunchanged.
