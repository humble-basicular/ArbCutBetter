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
