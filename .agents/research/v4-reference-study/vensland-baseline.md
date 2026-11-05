# ArbCut v4 — whole-site reference evidence

Status: **LOCAL BASELINE ONLY. Not a winning-example recommendation.** 5 November 2026. Owner: Codex, gpt-6.1-sol high. No website implementation.

## User clarification — baseline only

User: “dont take any of the sites ive built for the best example … the real learning is from the ones in the usa”. VensLand and Betono are ordinary local comparisons. All rules/judgements below are baseline observations or questions to test against the US references, **not evidence of the winning formula**. No new ArbCut design is proposed.

## What “winning” means here

These are visual/usability judgements, not measured conversion results. I do not know which reference converts best: no analytics or experiments were supplied. Observations below come before the recommended rule. Previous findings in `v4-learnings.md` remain prior evidence, not screenshots newly viewed by this thread.

## Evidence convention and method

`R` = `/Users/matasbasinskas/.ai-powerhouse/research-captures/arbcut-v4/`. `V` = `R/vensland.lt/`. Relative key-image links below are committed, compressed copies; ordered full-resolution segments, stitched previews and JSON DOM/style records live under `V/<path-slug>/<width>/`. `home` means `/`; slashes in slugs become `__`.

Fresh pages: all 22 sitemap routes, direct `/aciu/`, and intentional 404 probe `/arbcut-reference-study-not-found/`. All 48 page/width captures were opened in readable sheets: desktop segments at 720px wide; mobile segments at their original 390px. All 200 document segments plus 48 original first viewports were viewed. Riešė desktop had incomplete image paint; supplementary decoded segments at `R/decode-repair/vensland.lt/riese/1440/segment-{004800,007200}.jpg` were opened and correct that region. Other repair segments remain unviewed and do not inflate coverage. Sheets identify their constituent segment filenames. Every capture is recorded separately from its viewed state.

Capture workflow: real installed Chrome through Playwright, no tracker/request blocking, whole-page scroll with repeated height checks, `content-visibility:visible`, fonts ready. Original first viewport retains fixed UI; subsequent document segments hide fixed/sticky elements with visibility, preserving layout. CDP document clips are at most 2,400px high, avoiding the 16,384px capture wrap. A full-resolution stitched preview is saved separately. Document captures intentionally do not describe sticky behaviour; interaction captures retain the original UI. Lazy lightbox images required a separate five-second wait.

T3 preview opened successfully but two snapshot calls both returned `Preview automation snapshot timed out after 15000ms.` The explicitly recommended Chrome capture workflow was used for remaining interaction work. Capture scripts are retained in `v4-reference-study/`. Their Playwright import currently depends on `/tmp/arbcut-tools/node_modules/playwright-core`; install/resolve that dependency if it disappears. Raw evidence itself is durable.

Prior VensLand evidence was copied from `/tmp/arbcut-v4-vensland-detail/` into `R/legacy-vensland/` (panels, stitched images, HTML, sitemap and stitch manifest). This preserves earlier evidence without claiming this thread re-viewed it. Fresh document captures now supersede old service/home seam gaps. They do not replace original fixed-UI interaction captures.

## Observed first: VensLand across page types

### Locality pages — same site, specific location, little specific visual proof

Seen: [Vilnius desktop](vensland-locality-desktop.jpg), [Vilnius mobile](vensland-locality-mobile.jpg), plus `V/avizieniai/{1440,390}/sheet-{0,1,2}.jpg` and `V/vilnius/{1440,390}/sheet-{0,1,2}.jpg`.

The complete sequence on all ten localities is header → hero with form → green four-item proof strip → local introduction plus black common-work/neighbour card → owner/about → ten service cards plus call card → four steps → job-photo grid → reviews plus large review-request panel → prices → FAQ/photo/contact → locality list and map consent → closing call/quote → footer.

Desktop: wide photo hero, left headline, right white form with logo tab; local name is green. Below, the local paragraph and dark neighbour card make a clear two-column unit. The owner photograph and all subsequent work images repeat across the locality variants. The area list outlines the current locality. Mobile: hero content precedes the entire form; local paragraph precedes its neighbour card. Services become one long single-column sequence, while gallery retains a large lead image and two-column supporting grid. Footer retains all ten service links and all ten locality links.

Measured page heights (from each `record.json`): Vilnius 11,971px at 1440 and 18,347px at 390; Avižieniai 11,927px and 18,249px. Both widths have document scrollWidth equal to viewport width. That does not prove every text crop is correct.

Judgement: matching navigation, photos and component language make these feel like one business. The location is unmistakable before scrolling. But these are effectively full homepages with a small local module: the same photos do not demonstrate work in the named locality. The mobile service catalogue imposes a long interruption before the project/review proof. **Rule:** use the shared visual system, but ensure location-specific content has an identifiable place and any claimed local job/photo actually belongs there. Do not equate swapping a town name with unique proof. Do not change ArbCut’s contracted section order on this research recommendation.

### Service pages — focused, but visually under-proved

Seen: all ten `/paslaugos/<slug>/` routes at 1440 and 390, `V/paslaugos__<slug>/<width>/sheet-{0,1}.jpg`. This closes the earlier seam gaps without relying on obstructed joins.

Shared sequence: header (service nav labels differ from home), same garden-photo hero + form, breadcrumb, two explanatory H2 blocks with right-hand scope/preparation/price-factors panel, optional captioned job photos, one closed FAQ, nine related-service links, complete footer. The service pages do **not** repeat homepage reviews, owner, price table or process. Mobile moves the scope panel below the explanation and before the photos; the related links become a long one-column list.

| Service slug | Distinct content/image evidence seen |
|---|---|
| `vejos-irengimas` | Seed/turf choice and ground preparation; turf installation and bare ground photos |
| `laistymo-sistemos` | Watering zones, design/installation; no job-photo pair |
| `vejos-aeravimas-core` | Core aeration distinction and work timing; two aerator photos |
| `vejos-skarifikavimas` | Work extent and debris removal; one red scarifier photo |
| `vejos-lyginimas-levelingas` | Unevenness and sand spreading; two equipment/result photos |
| `vejos-tresimas-purskimas` | Requested maintenance and prior treatments; no job-photo pair |
| `zoles-pjovimas` | Maintained lawn vs tall grass, recurring cuts; one striped-lawn photo |
| `apleistu-sklypu-tvarkymas` | Remove/retain vegetation, subsequent plans; one clearing photo |
| `mini-ekskavatoriaus-paslaugos` | Excavation/base preparation, stump access; one working excavator photo; at 390 `EKSKAVATORIAU / S` still breaks mid-word |
| `gyvatvoriu-sodinimas-prieziura` | New planting vs existing hedge maintenance; one planted-hedge photo |

Measured on `vejos-irengimas`: H1 65.6/75.44px desktop versus 35.88/41.262px mobile; body H2 44/47.52px versus 29.6/31.968px (`record.json`). Same masked `V3 Head` family, white H1, dark H2. The same backdrop does not visually identify each service. Desktop photos are small, and the tall scope panel leaves empty space under short copy. On mobile the real work photos gain useful relative size. Useful preparation prompts are a baseline strength; proof hierarchy and photo scale are questions for comparison with the US sites. Do not extrapolate this template as a winner.

### Prices — the unit and conditions are part of the visual hierarchy

Seen: `V/vilnius/1440/segment-007200.jpg`, `V/vilnius/390/segment-{009600,012000}.jpg`; [mobile price detail](vensland-prices-mobile.jpg).

Desktop prices occupy two columns of white rows on a pale surface, green edge rule, bold green amount at right. Mobile uses one column and moves the amount below its service label. Units vary (m², aras, project, hour); VAT calculations, materials and minimum-order caveats stay visible in smaller grey text. A dark estimate CTA follows the entire list. This is a section, not a standalone price page.

Judgement: the bold amount makes comparison easy; dense tax arithmetic competes with conditions on mobile. **Rule:** group service, amount, unit and inclusion/exception as one readable object; a large number alone is insufficient. Reserve the main action colour for useful prices/actions rather than introducing an unrelated price colour.

### Legal — continuity without marketing composition

Seen: `V/privatumo-politika/{1440,390}/sheet-0.jpg`; [mobile](vensland-legal-mobile.jpg).

A plain white reading column uses the site’s heavy H1 and smaller bold H2s, six sections, updated-date line, underlined inline links and a return-home link. Header and complete footer remain; no photo hero, badges, price blocks or lead form interrupt the text. Mobile is naturally reflowed prose rather than cards.

Judgement: this is a useful contrast to the sales pages. **Rule:** preserve the brand’s type/navigation, but give legal content a comfortable reading column and explicit subhead hierarchy. No evidence here justifies turning policy text into promotional cards. This is visual research, not a legal-compliance assessment.

### Success / direct access — do not fabricate a successful submission

Seen: `V/aciu/{1440,390}/sheet-0.jpg`; [mobile](vensland-success-mobile.jpg). HTTP 200, direct navigation, **no form submitted**.

The page says `Užklausos būsena`, with a phone fallback if confirmation was not received and a home link. It has no ordinary header/footer and no large decorative success symbol. It does not claim a submission succeeded merely because the URL was visited.

Judgement: the state is honest, but the sparse unbranded screen feels detached from the main site. **Rule:** the visual hierarchy must make actual state, next step and fallback obvious; do not infer a completed submission from this evidence. I do not know what the real post-submit confirmed state looks like.

### 404 — a visible exit, but minimal continuity

Seen: `V/arbcut-reference-study-not-found/{1440,390}/sheet-0.jpg`; [mobile](vensland-404-mobile.jpg). HTTP **404** verified in capture records.

Plain H1 `Puslapis nerastas`, one short instruction and green `Į pradžią` button. No full header/footer, no photo or illustration.

Judgement: the exit is clear; the missing brand context is weaker than the privacy page. **Rule:** prioritise explanation plus a real recovery link. A giant error number or decorative illustration is not necessary to make the page useful.

## Cross-site systems — current new evidence is VensLand only

All screenshots below are from `https://vensland.lt/`; widths 1440×900, 390×844 and 360×844. Evidence: `V/interactions/<width>/<state>.jpg`, `record.json`, `followup.json` and separate validation records.

| System | Seen | Judgement / rule | Exact evidence |
|---|---|---|---|
| Desktop nav/hover | Services hover adds a green underline; no dropdown appeared in the observed state | Match the interaction to the actual navigation structure; do not assume a hover label exposes a service mega-menu | `1440/services-hover.jpg` |
| Mobile menu | Full-screen dark panel, seven numbered section links, large quote and call actions, explicit close. At 360 both actions and all items fit | Transform navigation for touch instead of shrinking desktop links | `390/menu.jpg`, `360/menu.jpg`; [key](vensland-menu-mobile.jpg) |
| Quote | Header/hero quote action opens white modal over a dim backdrop. Same fields/style as inline form, logo tab, visible close; Escape closes it | Consistent form identity works. At 390/360 the initial modal’s bottom action is partly clipped; scrolling it into view makes the whole button visible, verified in `390/modal-scrolled.jpg` and `360/modal-scrolled.jpg`; no click/submit | `1440/quote-open.jpg`, `390/quote-open.jpg`, `360/quote-open.jpg` |
| Guidance/upload | Disclosure expands into useful instructions: place, approximate area, work, site photos. Upload UI advertises up to eight files, 10MB each, 25MB combined | Give people concrete estimate inputs; no file selected or uploaded, so upload functionality remains unverified | `<width>/quote-guidance.jpg`, DOM forms in locality records |
| Validation | Initial test used a union selector and validated the background inline field while the dialog was open. Those `validation.jpg` shots are superseded, not evidence of modal validation | Test the visible form instance; native constraint results alone do not prove submission works | Initial records retained with this limitation; corrected `validation-modal.json`/`.jpg` now show the open-dialog phone receiving focus and native required-field feedback at all three widths; no submit event |
| Gallery | Full black viewer, counter `1 / 120`, close, previous/next. Next changes counter to 2; Escape closes. Initial 300ms shots were blank/partially painted; after five seconds the first photo is fully visible at all widths | Do not report a load failure from an early frame. Natural image aspect ratio is preserved; landscape photos leave large black margins on mobile | `<width>/gallery-{open,next,delayed}.jpg`; [loaded mobile](vensland-gallery-mobile.jpg) |
| FAQ | First answer starts open; opening another leaves both open. Fine green border and minus distinguish open rows | Clear question, readable answer, state change; no separate decorative panel needed for every question | `<width>/faq-open.jpg` |
| Reviews | Three cards at desktop initial state, one at mobile; next changes visible reviewers. Source is underlined `Paslaugos.lt` text. Large black/gold request-for-review panel follows | The solicitation has more visual weight than the evidence. Give the reviews priority; preserve readable source/author | `<width>/reviews-next.jpg` |
| Rating dialog | Request CTA opens an internal star-selection dialog; no stars selected and no feedback sent. At 360 the fifth star is clipped at the right edge | External-looking source CTA should not hide a poorly fitted intermediate UI | `<width>/rating-open.jpg`; [360 defect](vensland-rating-360.jpg) |
| Sticky UI/footer | At scrolled mobile states a white header and black-outlined two-action bottom dock remain. Footer keeps service/locality links. In FAQ screenshots the scrolled heading is partly behind the header | Test with fixed UI enabled as well as clean document captures; unobstructed screenshots alone cannot pass this | `<width>/footer-with-sticky.jpg`, `390/faq-open.jpg`, `360/faq-open.jpg` |
| Motion | Follow-up records contain normal and emulated reduced-motion animation states and accessible CSS rules | Fresh-load 390 test: normal state has `v3-motion`, 22s hero pan and 700–800ms entrance effects; reduce-before-navigation has no motion class, no animations and no hero transform, initially and after scroll. This supports that tested path only; live preference switching remains unverified | `<width>/followup.json`; `390/motion-{no-preference,reduce}.{json,jpg}` |

No map consent action, phone link, external review link, actual file upload, form submission or network bypass was used.

## Per ArbCut page type: current status and rule strength

| Type | New evidence in this milestone | Rule status |
|---|---|---|
| Homepage | Fresh full page both widths plus interaction states | Local baseline only; fresh capture closes earlier seam gaps |
| Service (12 ArbCut routes) | All ten service routes freshly viewed both widths | Local baseline: focused inner template, small desktop proof, long mobile related-links list |
| Locality | All ten complete locality examples, both widths | Supported: shared brand system plus identifiable local module; local-photo specificity is missing here |
| Gallery | Embedded gallery and opened viewer, both main widths plus 360 | Supported: lead image + secondary grid, count, full-photo viewer; standalone projects/gallery page comparison pending |
| Prices | Price section, both widths | Supported: service/amount/unit/conditions grouped together; standalone price/finance page pending |
| Reviews | Carousel and rating modal | Supported: source-labelled readable cards should outweigh solicitation; standalone review pages pending |
| About | Repeated owner/about section inside locality pages | Supported at section level only; dedicated about-page comparison pending |
| Contact | Header/quote form/dialog, phone alternatives | Supported at component level only; dedicated contact-page comparison pending |
| Articles | None | I do not know the winning article composition yet |
| FAQ | Embedded FAQ open states | Supported at component level only; dedicated FAQ page comparison pending |
| Legal | Complete policy at both widths | Supported: reading column, hierarchy and brand navigation |
| Success | Direct-access state only | Supported: truthful state plus next action/fallback; submitted state unknown |
| 404 | Actual HTTP 404 at both widths | Supported: short explanation and visible recovery action; brand continuity could be stronger |

## Corrections / limits on v4-learnings.md

1. Locality visual sameness was previously unknown. It is now directly seen on all ten routes at both widths. They repeat the same owner, service and project photos and sequence.
2. “One overlap per page” and “two devices at most” are design constraints, not demonstrated causal thresholds. Keep user-approved constraints, but do not present these numbers as measured winning formulas.
3. Official logos are the user’s explicit preference. Fresh VensLand review cards actually use underlined source text, not an official logo; do not generalise that every trustworthy reference uses source logos everywhere. Existing Google/press observations belong to their cited earlier sites.
4. “All interactions” cannot be inferred from a page screenshot. The delayed gallery inspection specifically disproved the apparent blank-gallery result from early captures.
5. The prior typography names remain masked (`V3 Head`, `V3 Sans` in saved computed-style records); I do not know the underlying commercial family names. New DOM records include computed H1–H3 family/size/weight/leading/colours per route/width, not a font identification guess.

## Exact coverage ledger

Machine ledger: [vensland-ledger.json](vensland-ledger.json). It lists all **22 current sitemap URLs + direct success + intentional 404 probe** separately. All 24 rows now have both widths captured and viewed, with the Riešė paint caveat and supplementary evidence retained. No page is counted as viewed through a representative.

| Site | URL inventory known from prior work | Prior actual visual work (not re-viewed here) | This milestone | Remaining gap |
|---|---:|---|---|---|
| VensLand | 22 sitemap, freshly verified; 24 ledger rows including utility probes | Home + ten services, both widths, with seam/FAQ gaps | 24 routes × two widths viewed; 200 document segments; 43 interaction shots viewed (three superseded validation shots retained) | Map load, upload, success after real submit, all 120 gallery items and live reduced-motion switching untested; no standalone article/review/about/contact pages in sitemap |
| Puetz | 241 (prior inventory) | Home + several interactions | None yet | Full current inventory reconciliation and every inner type |
| Smock | 264 (prior) | None | None | Prior 403; ordinary browser fallback not yet attempted here |
| Veterans | 184 (prior) | Captured, not viewed | None | All types |
| Genz-Ryan | 326 (prior) | Home desktop, partial mobile | None | Mobile tail and inner pages |
| Northface | 354 (prior) | Home desktop/mobile | None | Inner pages and interactions |
| Bear’s | 142 (prior) | None | None | Prior 403; ordinary browser fallback pending |
| True Air | 47 (prior) | None | None | Prior 403; ordinary browser fallback pending |
| Home Front | 51 (prior) | Home desktop/mobile | None | Inner pages and interactions |
| Thelen | 244 (prior) | Captured, not viewed | None | All types |
| GreenTek | 400 (prior) | Captured, not viewed | None | All types |
| Glassperts | Unknown | No successful load | None | Headed/T3 load, inventory and all pages pending |
| Betono | 25 (prior) | Seven routes, both widths, with occlusion gaps | None | Eighteen routes, interactions and earlier occlusion repair |

Domains and earlier evidence: `v4-hook-deep-study.md`, `v4-vensland-detail.md`, `v4-betono-detail.md`. Counts in other-site rows are inherited, not freshly verified. No assertion that those inventories are exhaustive/current. No optional site added.

## Working synthesis — provisional, not the final winning formula

The strongest supported whole-site principle so far is **consistent identity with composition suited to the task**: locality pages retain the business system; price information becomes scannable value/condition groups; legal becomes prose; utility pages make state and recovery immediate. Repeating the entire homepage everywhere creates consistency, but also repeats a very long mobile catalogue and unlocalised proof. These are baseline comparisons only. The US references must supply the primary evidence for any winning formula.
