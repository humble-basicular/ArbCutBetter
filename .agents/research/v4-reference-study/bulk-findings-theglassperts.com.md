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
