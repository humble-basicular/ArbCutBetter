# Smock HVAC — bulk contact-sheet overview

Scope: 274 saved pages, both 1440/390 widths; overview only. No new full-size inspection, interaction, browser, recapture or live-site verification. Sources: bulk-analyst-brief.md, Step 2 of 2026-11-05-1205-bulk-capture-brief.md, v4-learnings.md §§2–4, and concise system/coverage portions of smock-findings.md.

Evidence root R = ~/.ai-powerhouse/research-captures/arbcut-v4/smockhvac.com; sheet root S = ../_sheets/smockhvac.com (relative to R). Sheet citations below use index keys, cell numbers map to exact source URLs in S/index.json. Source pixels: R/<slug>/<width>/segment-*.jpg; metrics/DOM: record.json. Contact-sheet scale supports structure/composition judgments, not exact copy, font legibility or interaction behavior. Grey unused cell canvas is not a site blank.

## Capture and provenance gates

Existing scripts regenerated groups and 66 sheets (548 page-width cells). Automatic groups are structural clusters, not semantic templates: t02 merges services, company pages, intake, blog listing and results. Semantic distinctions are retained below.

30 legacy desktop records have 2880-pixel source widths for 1440 CSS pixels; the existing generic generator crops these incorrectly. Rebuilt sheets using the same existing module with in-memory Image.open normalization (2880→1440 and height/2), without changing scripts or raw captures. All rebuilt sheets need actual opens before this pass credits viewed flags.

Blank checker: blog__heat-pump-replacement/1440 y8216–8672 (456px) requires later source/iframe check. _superseded/390 y6696–7452 is excluded historical data, not a current page. No blank is labelled a site defect.

Prior smock-findings.md reports 30 exact documents deeply studied at both widths (436 segments, 207 old numbered sheets, 60 first viewports). Reused only as historical provenance, not fresh full-size credit; new sheet normalization does not validate old interaction or screenshot claims. This pass full-size opens = 0.

## Incremental overview findings

Completed incrementally below.

### Articles: first desktop sweep (t00 sheets 0–8), initial mobile sweep (0–2)
Observed all cells in those sheets. Narrow white editorial column, rectangular lead image crossing a red curved divider, black title, red subheads, inline technical/customer photos, lists and occasional comparison tables; family closing CTA and red footer. Short legacy posts and very long newer guides share the shell, not the same content density. Desktop sheet 0 cells 1–4 are short; cells 5–20 are long. Sheet 1 cell 5 (air-conditioner-size-cal) is unusually tall (13215 desktop /13415 mobile per sheet label). Sheet 4 cell 1 heat-pump-replacement has a white gap before closing CTA, matching blank-check flag; defer cause. Sheet 1 cells 14–15 and sheet 7 cell 19 are parks/restaurants/things-to-do articles, a genuine topic shift within the blog, not locality service pages. Repeated technician/van images ground brand identity more than unrelated lifestyle photos. Mobile sheets wrap long pages into two miniature columns inside a cell: that is contact-sheet packaging, not a two-column mobile layout. Tables remain visibly tabular in mobile miniatures; readability/overflow needs full size. No blocked/error screen apparent in this opened batch.

Copy candidates: restrained white article surface, explicit red subhead hierarchy, topic-relevant equipment images and compact closing action (S/1440/t00-blog_x-0 c6; R/blog__ac-capacitor-replacement-cost/1440/segment-*.jpg). Avoid candidates: copied article decoration/emoji-like heading markers on ArbCut (sheet 1 c6/c9); very long list-heavy content without navigation visible at overview scale (sheet 1 c5). Technical accuracy, dates and pricing not validated.

### Article clusters t00/t01: both-width sweep complete (193 pages)
All t00 and t01 cells opened at both widths. t01 continues the same editorial shell: no need to invent a separate semantic template from its skeleton cluster. Taxonomy/product comparison, symptoms, step guides, cost guides and company roundups are content variants. S/1440/t01-blog_x-0 c1 (Trane/Carrier) uses comparison/list rhythm; c17 water-heater-replacement-cost uses a pricing table; S/390/t01-blog_x-1 c3 water-heater sizing contains a particularly dense multi-column table. Flag those tables for mobile full-size checks; overview cannot prove overflow. S/1440/t01-blog_x-1 c7 is an additional Damascus-company article with a suffixed slug; exact URL/canonical equivalence must be checked later rather than merged with t00 sheet5 c12. No new obvious blank/block page in t01. The desktop heat-pump-replacement gap is not prominent in the corresponding mobile preview (t00/390 sheet4 c1); supports capture-state caution, not proof of cause.

### t02 desktop semantic split (26 pages, two sheets)
S/1440/t02-_1-0 c2–5,c7,c13–20 and sheet1 c1,c3–4,c6: service-detail shell = dark photo/text hero → marks → explanation/form → usually reviews and three plan cards → image/red copy split → localities/map → offers → FAQ → three articles → closing family CTA → footer. Distinct category variants c6 (air-conditioning), sheet1 c2 (heating),c5 (indoor-air-quality) use red text hero and early photographic destination cards instead of dark service hero. Concrete early task navigation is the transferable idea; all promotions are not required for ArbCut. Ductless-ac (sheet0 c14) uses one compact plan panel, while ductless-mini-split c15 has three plan cards. HVAC sheet1 c4 has two locality/map regions. Map placeholders across this legacy group remain unresolved capture states (prior report: desktop blank/mobile loaded), not site defects.

Other t02 semantics: about c1 uses narrow team photo/story → red values panel; blog c9 uses featured split card then three-column article grid; careers c10 uses employee-photo hero, job cards, training photo and application form, without marketing tail; comfort-assessment c11 uses long intake form/president portrait, then offices/localities; assessment-results c8 is much shorter, red next-step panel then closing CTA/footer; community c12 uses event/team imagery, logos and gallery. No workflow outcome inferred from a publicly captured results URL.

### t02 mobile comparison / t03 locality services (24)
All t02 mobile cells opened: desktop columns collapse into long single-column content; hero forms follow hero copy, categories stack destination cards, plan/offer/article blocks each stack. About shows three value panels on mobile versus one expanded desktop panel. Air-scrubbers mobile includes video thumbnail in the otherwise sparse content region; not played. Footer desktop link columns are absent from these mobile previews; full-size/source confirmation remains a gate.

All t03 cells opened at both widths: 14 HVAC localities + 10 water-heater localities. Desktop form is inside hero (unlike many generic service pages, where form follows hero). Then source marks → local service image/text → service cards crossing white/red process boundary → C.A.R.E. process over technician image → second image/text → locality/map → FAQ → articles → closing CTA/footer. Water-heater variation retains same general service-card row despite topic narrowing; exact link relevance needs later check. Photos/headings vary, while all ten water-heater desktop previews have 7332px labels; shared length alone does not prove copied content. Mobile form/cards/process stack and maps are visibly loaded, as are desktop maps here. Thus legacy desktop map blanks in t02 cannot be generalized to all desktop pages. No visually blocked/blank locality page.

Copy: form beside concise locality/service statement and visible real work photos (S/1440/t03-hvac_x-0 c3; R/hvac__frederick/1440/segment-000000.jpg, y0 onward). Avoid: heavy hero dimming and huge repeated marketing sequence before practical locality detail; no conversion claim. ArbCut must keep official proof but must not imitate service glyphs seen here.

### t04 short/medium articles (11); t05 jobs (3); t06 legal (2)
All cells, both widths opened. t04 is the same blog shell again, mostly short text/list posts; repair-cost c5 and service-plan c6 are much longer. Cells c1,c9 omit the family closing image/CTA and go straight to footer at both widths: a genuine captured template variation, not a blank. Mobile c1 first subheading looks partially interrupted; flag a source-scale seam/text check before declaring site defect. c10 gas-smell and c8 sleep-health content are not medical/safety guidance verified here.

Jobs: red text title/Apply panel → dated role description/bullets and share row → application overlapping footer boundary → offices/footer. Same short composition for all three roles, mobile title wraps without obvious cut-off. White space supports a task-specific page rather than the long service marketing tail. Role-specific form preselection and Apply scrolling remain untested (prior study reported generic position selector). Evidence S/<width>/t05-careers_x-0 c1–3, source R/careers__hvac-technician etc.

Legal: red title band → narrow long white text column with bold black subheads → family closing CTA/footer. Mobile becomes naturally longer text, no apparent missing blocks at overview. Privacy includes many policy subsections; terms numbered sections. This is layout observation, no legal validity assessment. Evidence S/<width>/t06-_1-0 c1–2; R/privacy-policy and R/terms. Copy: keep legal reading surface calm; avoid unnecessary promotional detours for task-specific documents.

### One-offs t07 contact, t08 FAQ, t09 financing
Both widths, c1 of each corresponding sheet opened. Contact = white heading/intro → appointment form with small human portrait → office band → lifestyle/service copy → locality map/links → footer. Mobile retains form before office cards, then map; duplicating offices in band/footer increases repetition. Useful task-first page, no need for photo hero everywhere.

FAQ = red title → category chips/tabs → open-looking text Q&A list → family CTA/form/footer. Mobile chips wrap and Q&A remains a narrow single column. Selection/filter behavior and whether all answers are accessible remain untested.

Financing = red split photo/text hero → separate Trane then Carrier mark/promotion/Apply blocks → lifestyle benefits split → FAQs → offer coupons → family CTA/form/footer. Mobile logos and applications remain individually visible, then benefits/coupons stack. Copy recognisable partner marks attached to relevant decisions; avoid long generic promotion after visitor has reached a focused financing choice. No rates, approval, affiliation or actual application state validated. Source R/contact, R/faq, R/financing; S/<width>/t07/t08/t09-one-off-0 c1 (exact keys t07-one-off-0 etc.).

### One-offs t10 homepage, t11 maintenance plan, t12 specials
Both widths/c1 opened. Home is the only sheet here preserving a substantial visible header region in the stitched overview: doorstep technician photo, overlapping white intro, three path buttons, four services, red process, quality photo/text, marks/reviews, red values, coupons, plans, team photo/red copy, locality/map, FAQ/articles, family CTA/form/footer. Mobile is 15307px and stacks nearly every promotional block. Branded people/team/fleet are stronger identity than the recurring red decorative waves; this remains a judgement, not a conversion finding. Header/fixed cost cannot be measured from fixed-hidden document segments; first-viewports are pending fresh review.

Maintenance plan: red split family/photo hero → illustrated video preview and explanation → three benefits cards → task copy/form → FAQs → articles → technician closing photo/CTA/footer. Mobile stacks all. Video unplayed; illustration is a site observation, not recommended ArbCut art direction.

Specials: red title → category chips → ten coupon cards in desktop grid → offer-selection form → footer. Mobile coupons make a long single column; form follows. No standard family closing tail: useful focused exception. Coupon restrictions and selector behavior require readable/interaction pass. Copy task-specific entry and form; avoid copying HVAC discount mechanics into an unrelated trade. Sources R/home, R/hvac-maintenance-plan, R/hvac-specials; S/<width>/t10-home-0, t11-one-off-0, t12-one-off-0 c1.

### One-offs t13 troubleshooting, t14 team, t15 referrals
Both widths/c1 opened. Troubleshooting: dark photo/text hero → eight alternating image/instruction rows → help copy/form → footer. Mobile image precedes each step; standard marketing tail omitted. Useful visual task sequence; technical instructions not validated. Error-code/man image has a horizontal seam in desktop preview: source/stitch check pending, not a site defect.

Team: red title → four-column headshot/name grid over red field → recruitment card → FAQ → footer. Mobile uses a very long single-column portrait run (16983px vs 5481px desktop labels). Consistent uniform/portrait identity; extreme mobile length. Photo provenance not verified from miniatures.

Referrals: red split lifestyle hero → experience/reward copy/photo → marks → community gallery → FAQ → articles → closing form/footer. Desktop shows three gallery pictures/fragments versus one mobile; carousel not advanced. Community-like gallery content needs readable relevance check. No referral workflow verified. Sources R/hvac-troubleshooting, R/meet-the-team, R/referrals; S/<width>/t13-one-off-0, t14-one-off-0, t15-one-off-0 c1.

### One-offs t16 reviews, t17 services, t18 shop
Both widths/c1 opened. Reviews = red title → small category control → four very large circular reviewer portraits with name/text/black stars in two desktop columns → family CTA/footer. Mobile stacks all four; stars and portraits dominate text. Distinct from compact Google-marked carousel on service pages; do not transfer anonymous giant stars as proof design. Source identity/currentness and other review states unverified.

Services = red split van hero → support intro/four photographic service cards → family-owned photo/text → red process → coupons → FAQ/articles → closing form/footer. Mobile cards/process/promotions all stack; van is a business-specific artefact. Useful early service navigation, but long general tail.

Shop = effectively only family CTA/footer, both widths, no visible product/estimator content. Flag app/embed/capture-state gate, not a confirmed broken shop. Mobile also shows a floating phone pill across office-card region despite fixed-hidden capture; inspect first viewport/record before calling it an obstruction defect. Sources R/reviews, R/services, R/shop; S/<width>/t16-one-off-0, t17-one-off-0, t18-one-off-0 c1.

### One-offs t19 Trane, t20 water heaters, t21 nested AC category
Both widths/c1 opened. Trane = dark hero with form → marks → efficiency photo/text → general service cards → red process → warranty photo/text → locality/map → reliability split → FAQs/articles → closing CTA/footer. Mobile stacks form early, then all cards. Manufacturer-specific content sits within the locality-style shell, rather than being a unique visual system. Source R/trane-hvac; S/<width>/t19-one-off-0 c1.

Water-heaters = dark hero without form → marks → explanation/form → reviews/plans → family installation split → locality/map → offers/FAQ/articles → closing CTA/footer. Closely resembles water-heater-replacement, but exact URL remains separately represented. Source R/water-heaters; S/<width>/t20-one-off-0 c1. Nested services/air-conditioning = red category hero → five photo destination cards → family split → locality/map → technician split → offers → FAQs/articles → closing form/footer. It resembles /air-conditioning, with fresh maps/article images visible; duplication/canonical/redirect relationships not inferred from appearance. Source R/services__air-conditioning; S/<width>/t21-one-off-0 c1.

## Copy / avoid synthesis (judgement, not measured conversion)

Copy the coherent red/white/charcoal system and consistent type weight, but give ArbCut its own palette and real assets. Business-specific uniforms, van, team and work matter more than ornamental curves (home; services; locality sheets). Carry forward photographic service navigation early (category pages), focused contact/recruitment layouts, and source marks tied to relevant actions (financing, service reviews). Narrow editorial surfaces and visible section hierarchy help distinguish articles from sales pages.

Avoid transferring HVAC memberships/coupons, cartoon/video art, giant review portraits/stars, pictogram service/process icons, or every generic promotional section. Red curves and opposing rounded corners are two recurring shape devices; layered cards and red photographic process backgrounds amplify the busy effect. On mobile, plans/offers/articles/staff grids compound length. Topic relevance and actual proof outrank adding another block. Do not treat arbitrary badge quantities, synthetic proof copy, or dark overlays as a recipe. Existing user bans on glyph/SVG pictograms and invented proof remain binding.

## Unverified gates / capture-state flags

- No new full-size segments or first viewports opened. Exact text, crop/contrast, body legibility, narrow-screen tables, footer link retention, fixed UI heights/obstruction and 360px remain open.
- No interaction work: menu/dropdowns, FAQ/category filters, galleries/reviews, forms/validation, booking, estimator/shop hash states, assessment/result flow, video, motion/reduced-motion. No submitted state verified.
- Shop: both previews omit main app content; HTTP200 and record has no iframe; cause unknown. A floating phone pill persists on mobile. Do not equate HTTP200/captureComplete with a working estimator.
- Article heat-pump-replacement: blank 1440 y8216–8672, no iframe recorded; mobile differs. Source-scale/capture timing investigation needed. Not an established map/iframe issue or site defect.
- Legacy desktop map blanks in t02/home versus visible maps in fresh t03/t19/t20/t21 and mobile: capture provenance matters. Some legacy records lack iframe metadata, so absence of metadata is not evidence of absence of embeds.
- Odd source checks: t04 mobile c1 interrupted-looking subheading; troubleshooting desktop error-code image seam; dense mobile tables in article sizing/cost/comparison guides. Stitch/thumbnail artefacts must be excluded first.
- No visually obvious access-block page among all 548 cells. This overview is not an HTTP/security audit or proof of exhaustive URL discovery. Actual404 not represented; shop fragment states and file resources not separately covered.
- Automatic grouping flags (183 pages) remain backlog indicators, not 183 defects. Legacy-record flags mean missing skeleton provenance; do not treat them as design outliers. Detailed exact flags are preserved below.
- Account usage is user-reported (71% session /76% weekly at assignment); no live meter was available in this pass. No claim about current percentages or token consumption.

## Verified overview coverage

All opens used view_image in eleven batches of six sheets; flags written only after the corresponding image output was inspected. No full-size coverage credit added.

| Cluster | Pages | Desktop sheets opened | Mobile sheets opened |
|---|---:|---:|---:|
| t00 blog/* (blog__3-iaq-devices-that-work-to-improve-your-indoor-air-quality) | 166 | 9 | 9 |
| t01 blog/* (blog__trane-vs-carrier) | 27 | 2 | 2 |
| t02 /1 (about) | 26 | 2 | 2 |
| t03 hvac/* (hvac__clarksburg) | 24 | 2 | 2 |
| t04 blog/* (blog__avoid-cooling-problems-preventative-spring-hvac-maintenance) | 11 | 1 | 1 |
| t05 careers/* (careers__hvac-technician) | 3 | 1 | 1 |
| t06 /1 (privacy-policy) | 2 | 1 | 1 |
| t07 one-off (contact) | 1 | 1 | 1 |
| t08 one-off (faq) | 1 | 1 | 1 |
| t09 one-off (financing) | 1 | 1 | 1 |
| t10 home (home) | 1 | 1 | 1 |
| t11 one-off (hvac-maintenance-plan) | 1 | 1 | 1 |
| t12 one-off (hvac-specials) | 1 | 1 | 1 |
| t13 one-off (hvac-troubleshooting) | 1 | 1 | 1 |
| t14 one-off (meet-the-team) | 1 | 1 | 1 |
| t15 one-off (referrals) | 1 | 1 | 1 |
| t16 one-off (reviews) | 1 | 1 | 1 |
| t17 one-off (services) | 1 | 1 | 1 |
| t18 one-off (shop) | 1 | 1 | 1 |
| t19 one-off (trane-hvac) | 1 | 1 | 1 |
| t20 one-off (water-heaters) | 1 | 1 | 1 |
| t21 one-off (services__air-conditioning) | 1 | 1 | 1 |

Total: **66/66 sheets; 33/33 at 1440, 33/33 at 390; 548/548 cells = 274/274 pages at both widths. Remaining overview sheet/cell list: empty.** Fresh full-size coverage: 0/274. Prior reported deep studies: 30/274, provenance only; no new certification of their completeness.

## Exact later full-size backlog (not executed)

Both widths, every segment and first viewport for each selected route. Priority: one-offs and mixed-group unique pages first; then differing semantic template examples; then all flagged/odd pages. The complete 274-row fresh-review inventory follows so nothing is silently dropped. Prior-30 entries may reuse the old report after lead verification, rather than redo by default. Unflagged template members still have no fresh full-size credit.

| Cluster / slug (R prefix) | Sheet:cell (same mapping both widths) | Group flags | Prior provenance |
|---|---|---|---|
| t00 `blog__3-iaq-devices-that-work-to-improve-your-indoor-air-quality` | t00-blog_x-0 c1 | height-outlier(3154 vs mean 8706) | No prior deep credit reused |
| t00 `blog__3-reasons-why-thermostats-go-into-recovery-mode` | t00-blog_x-0 c2 | skeleton-deviates(0.75); height-outlier(2511 vs mean 8706) | No prior deep credit reused |
| t00 `blog__4-main-reasons-why-heat-pumps-freeze-up-in-frederick-md` | t00-blog_x-0 c3 | skeleton-deviates(0.80); height-outlier(3378 vs mean 8706) | No prior deep credit reused |
| t00 `blog__4-reasons-why-your-ac-smells-weird-in-frederick-md` | t00-blog_x-0 c4 | height-outlier(3267 vs mean 8706) | No prior deep credit reused |
| t00 `blog__ac-blowing-warm-air` | t00-blog_x-0 c5 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-capacitor-replacement-cost` | t00-blog_x-0 c6 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-coil-cleaning` | t00-blog_x-0 c7 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-compressor-replacement-cost` | t00-blog_x-0 c8 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-condenser` | t00-blog_x-0 c9 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-efficiency-rating` | t00-blog_x-0 c10 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-fan-not-working` | t00-blog_x-0 c11 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-freon-recharge` | t00-blog_x-0 c12 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-installation-cost` | t00-blog_x-0 c13 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-leaking-water-inside` | t00-blog_x-0 c14 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-making-loud-noise` | t00-blog_x-0 c15 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-refrigerant-leak` | t00-blog_x-0 c16 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-repair-companies-in-frederick` | t00-blog_x-0 c17 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-repair-companies-in-new-market` | t00-blog_x-0 c18 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-repair-cost-gaithersburg-faq` | t00-blog_x-0 c19 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-replacement` | t00-blog_x-0 c20 | skeleton-deviates(0.80); height-outlier(12083 vs mean 8706) | No prior deep credit reused |
| t00 `blog__ac-short-cycling` | t00-blog_x-1 c1 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-smells-musty` | t00-blog_x-1 c2 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-tune-up-cost` | t00-blog_x-1 c3 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ac-unit-freezing-up` | t00-blog_x-1 c4 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__air-conditioner-size-calculator` | t00-blog_x-1 c5 | skeleton-deviates(0.80); height-outlier(13215 vs mean 8706) | No prior deep credit reused |
| t00 `blog__air-duct-cleaning-cost` | t00-blog_x-1 c6 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__air-products` | t00-blog_x-1 c7 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__air-purification-systems` | t00-blog_x-1 c8 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__best-air-conditioner-brands` | t00-blog_x-1 c9 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__best-furnace-filters` | t00-blog_x-1 c10 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__best-hvac-filter-for-allergies` | t00-blog_x-1 c11 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__best-hvac-system-for-home` | t00-blog_x-1 c12 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__best-mini-split-brands` | t00-blog_x-1 c13 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__best-parks-in-maryland` | t00-blog_x-1 c14 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__best-restaurants-in-maryland` | t00-blog_x-1 c15 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__best-time-to-buy-a-furnace-and-air-conditioner` | t00-blog_x-1 c16 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__best-water-heaters` | t00-blog_x-1 c17 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__boiler-replacement` | t00-blog_x-1 c18 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__boiler-vs-furnace` | t00-blog_x-1 c19 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__central-air-not-cooling` | t00-blog_x-1 c20 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__central-air-vs-ductless` | t00-blog_x-2 c1 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__commercial-hvac-installation` | t00-blog_x-2 c2 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__cooling-installation` | t00-blog_x-2 c3 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__cooling-maintenance` | t00-blog_x-2 c4 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__cost-to-install-tankless-water-heater` | t00-blog_x-2 c5 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__deciding-between-repairing-replacing-ac-system` | t00-blog_x-2 c6 | height-outlier(3242 vs mean 8706) | No prior deep credit reused |
| t00 `blog__diy-furnace-tune-up` | t00-blog_x-2 c7 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__does-homeowners-insurance-cover-hvac-damage` | t00-blog_x-2 c8 | height-outlier(3349 vs mean 8706) | No prior deep credit reused |
| t00 `blog__dont-let-condensate-drain-line-ac-system-clog` | t00-blog_x-2 c9 | height-outlier(2999 vs mean 8706) | No prior deep credit reused |
| t00 `blog__dual-fuel-heat-pump` | t00-blog_x-2 c10 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__ductless-hvac-system` | t00-blog_x-2 c11 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__electric-furnace-vs-gas` | t00-blog_x-2 c12 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__emergency-furnace-repair` | t00-blog_x-2 c13 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__energy-efficient-water-heater` | t00-blog_x-2 c14 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__floor-heating-systems` | t00-blog_x-2 c15 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__forced-air-vs-central-air` | t00-blog_x-2 c16 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__fpr-vs-merv` | t00-blog_x-2 c17 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-blowing-cold-air` | t00-blog_x-2 c18 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-heat-exchanger` | t00-blog_x-2 c19 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-ignitor-replacement` | t00-blog_x-2 c20 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-maintenance` | t00-blog_x-3 c1 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-not-heating` | t00-blog_x-3 c2 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-parts` | t00-blog_x-3 c3 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-repair-companies-in-frederick` | t00-blog_x-3 c4 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-repair-companies-in-mount-airy` | t00-blog_x-3 c5 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-repair-cost-damascus-faq` | t00-blog_x-3 c6 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-repair-cost-germantown-faq` | t00-blog_x-3 c7 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-replacement-cost` | t00-blog_x-3 c8 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-short-cycling` | t00-blog_x-3 c9 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__furnace-troubleshooting` | t00-blog_x-3 c10 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__garage-air-conditioner` | t00-blog_x-3 c11 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__gas-vs-electric-water-heater` | t00-blog_x-3 c12 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__gym-ventilation-system` | t00-blog_x-3 c13 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-not-working-in-house` | t00-blog_x-3 c14 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-efficiency-rating` | t00-blog_x-3 c15 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-installation-cost` | t00-blog_x-3 c16 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-installation-cost-frederick-faq` | t00-blog_x-3 c17 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-maintenance` | t00-blog_x-3 c18 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-not-heating` | t00-blog_x-3 c19 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-repair` | t00-blog_x-3 c20 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-replacement` | t00-blog_x-4 c1 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-thermostat-wiring` | t00-blog_x-4 c2 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-vs-ac` | t00-blog_x-4 c3 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-vs-central-air` | t00-blog_x-4 c4 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heat-pump-vs-furnace` | t00-blog_x-4 c5 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heating-installation` | t00-blog_x-4 c6 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__heating-maintenance` | t00-blog_x-4 c7 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__high-efficiency-water-heater` | t00-blog_x-4 c8 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__home-hvac-system-cost` | t00-blog_x-4 c9 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-does-a-hot-water-heater-work` | t00-blog_x-4 c10 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-does-a-mini-split-work` | t00-blog_x-4 c11 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-does-a-tankless-water-heater-work` | t00-blog_x-4 c12 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-long-do-ac-units-last` | t00-blog_x-4 c13 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-long-does-a-furnace-last` | t00-blog_x-4 c14 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-long-does-a-furnace-last-2` | t00-blog_x-4 c15 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-long-does-hvac-installation-take` | t00-blog_x-4 c16 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-long-does-it-take-a-hot-water-heater-to-heat-up` | t00-blog_x-4 c17 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-many-gallons-per-minute-does-a-shower-use` | t00-blog_x-4 c18 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-often-to-change-air-filter` | t00-blog_x-4 c19 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-change-ac-filter-in-house` | t00-blog_x-4 c20 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-clean-ac-filter` | t00-blog_x-5 c1 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-clean-air-ducts` | t00-blog_x-5 c2 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-clean-outside-ac-unit` | t00-blog_x-5 c3 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-find-ac-filter` | t00-blog_x-5 c4 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-keep-house-warm-in-winter` | t00-blog_x-5 c5 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-reduce-humidity-in-house` | t00-blog_x-5 c6 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-save-money-on-heating-bill` | t00-blog_x-5 c7 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-save-on-heating-bill` | t00-blog_x-5 c8 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-turn-off-water-heater` | t00-blog_x-5 c9 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-unclog-ac-drain-line` | t00-blog_x-5 c10 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__how-to-winterize-ac-unit` | t00-blog_x-5 c11 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-damascus` | t00-blog_x-5 c12 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-frederick` | t00-blog_x-5 c13 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-gaithersburg` | t00-blog_x-5 c14 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-germantown` | t00-blog_x-5 c15 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-ijamsville` | t00-blog_x-5 c16 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-md` | t00-blog_x-5 c17 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-middletown` | t00-blog_x-5 c18 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-monrovia` | t00-blog_x-5 c19 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-mount-airy` | t00-blog_x-5 c20 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-new-market` | t00-blog_x-6 c1 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-urbana` | t00-blog_x-6 c2 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-companies-in-walkersville` | t00-blog_x-6 c3 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-cost-frederick-faq` | t00-blog_x-6 c4 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-cost-mount-airy-faq` | t00-blog_x-6 c5 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-design` | t00-blog_x-6 c6 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-drain-pan` | t00-blog_x-6 c7 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-emergency-repair` | t00-blog_x-6 c8 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-energy-savings` | t00-blog_x-6 c9 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-financing` | t00-blog_x-6 c10 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-inspection` | t00-blog_x-6 c11 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-load-calculation` | t00-blog_x-6 c12 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-maintenance-checklist` | t00-blog_x-6 c13 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-noises` | t00-blog_x-6 c14 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-system-lifespan` | t00-blog_x-6 c15 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-system-replacement` | t00-blog_x-6 c16 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-technicians` | t00-blog_x-6 c17 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-troubleshooting` | t00-blog_x-6 c18 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-tune-up-cost` | t00-blog_x-6 c19 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-upgrade` | t00-blog_x-6 c20 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-warranty` | t00-blog_x-7 c1 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hvac-zoning-systems` | t00-blog_x-7 c2 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__hybrid-water-heater` | t00-blog_x-7 c3 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__indoor-air-quality-products` | t00-blog_x-7 c4 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__is-it-better-to-keep-ac-running-or-turn-off` | t00-blog_x-7 c5 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__is-it-cheaper-to-keep-ac-at-constant-temperature` | t00-blog_x-7 c6 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__mini-split-energy-cost` | t00-blog_x-7 c7 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__mini-split-vs-central-air` | t00-blog_x-7 c8 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__mitsubishi-hvac` | t00-blog_x-7 c9 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__most-efficient-heating-system` | t00-blog_x-7 c10 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__no-hot-water` | t00-blog_x-7 c11 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__old-air-products` | t00-blog_x-7 c12 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__on-demand-hot-water-heaters` | t00-blog_x-7 c13 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__recommended-thermostat-settings-for-summer-and-winter` | t00-blog_x-7 c14 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__repair-or-replace-furnace` | t00-blog_x-7 c15 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__smart-thermostat-benefits` | t00-blog_x-7 c16 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__tankless-water-heater-cost` | t00-blog_x-7 c17 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__thermostat-replacement-cost` | t00-blog_x-7 c18 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__things-to-do-in-maryland` | t00-blog_x-7 c19 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__trane-ac-unit-cost` | t00-blog_x-7 c20 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__trane-commercial-hvac-units` | t00-blog_x-8 c1 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__trane-furnace` | t00-blog_x-8 c2 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__trane-heat-pump-prices` | t00-blog_x-8 c3 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__trane-thermostat-models` | t00-blog_x-8 c4 | skeleton-deviates(0.80) | No prior deep credit reused |
| t00 `blog__what-does-ice-air-conditioner-mean` | t00-blog_x-8 c5 | height-outlier(3195 vs mean 8706) | No prior deep credit reused |
| t00 `blog__why-is-my-air-conditioner-using-more-electricity` | t00-blog_x-8 c6 | height-outlier(2477 vs mean 8706) | No prior deep credit reused |
| t01 `blog__trane-vs-carrier` | t01-blog_x-0 c1 | height-outlier(7289 vs mean 9187) | No prior deep credit reused |
| t01 `blog__types-of-air-conditioners` | t01-blog_x-0 c2 | — | No prior deep credit reused |
| t01 `blog__types-of-furnaces` | t01-blog_x-0 c3 | — | No prior deep credit reused |
| t01 `blog__types-of-hvac-systems` | t01-blog_x-0 c4 | — | No prior deep credit reused |
| t01 `blog__types-of-water-heaters` | t01-blog_x-0 c5 | — | No prior deep credit reused |
| t01 `blog__uv-light-for-hvac` | t01-blog_x-0 c6 | — | No prior deep credit reused |
| t01 `blog__water-heater-expansion-tank` | t01-blog_x-0 c7 | — | No prior deep credit reused |
| t01 `blog__water-heater-installation-cost` | t01-blog_x-0 c8 | — | No prior deep credit reused |
| t01 `blog__water-heater-leaking` | t01-blog_x-0 c9 | — | No prior deep credit reused |
| t01 `blog__water-heater-lifespan` | t01-blog_x-0 c10 | — | No prior deep credit reused |
| t01 `blog__water-heater-making-noise` | t01-blog_x-0 c11 | — | No prior deep credit reused |
| t01 `blog__water-heater-not-working` | t01-blog_x-0 c12 | — | No prior deep credit reused |
| t01 `blog__water-heater-pressure-relief-valve` | t01-blog_x-0 c13 | — | No prior deep credit reused |
| t01 `blog__water-heater-replacement-companies-in-frederick` | t01-blog_x-0 c14 | — | No prior deep credit reused |
| t01 `blog__water-heater-replacement-companies-in-germantown` | t01-blog_x-0 c15 | — | No prior deep credit reused |
| t01 `blog__water-heater-replacement-companies-in-walkersville` | t01-blog_x-0 c16 | — | No prior deep credit reused |
| t01 `blog__water-heater-replacement-cost` | t01-blog_x-0 c17 | — | No prior deep credit reused |
| t01 `blog__what-is-a-water-heater` | t01-blog_x-0 c18 | — | No prior deep credit reused |
| t01 `blog__what-is-central-air` | t01-blog_x-0 c19 | — | No prior deep credit reused |
| t01 `blog__what-is-merv-rating` | t01-blog_x-0 c20 | — | No prior deep credit reused |
| t01 `blog__what-is-the-5000-rule-for-hvac` | t01-blog_x-1 c1 | — | No prior deep credit reused |
| t01 `blog__what-size-furnace-do-i-need` | t01-blog_x-1 c2 | — | No prior deep credit reused |
| t01 `blog__what-size-water-heater-do-i-need` | t01-blog_x-1 c3 | — | No prior deep credit reused |
| t01 `blog__whole-house-dehumidifier` | t01-blog_x-1 c4 | — | No prior deep credit reused |
| t01 `blog__why-is-my-central-ac-running-but-not-blowing-air` | t01-blog_x-1 c5 | — | No prior deep credit reused |
| t01 `blog__wifi-air-conditioner` | t01-blog_x-1 c6 | — | No prior deep credit reused |
| t01 `blog__hvac-companies-in-damascus__https:____smockhvac.com__blog__hvac-companies-in-damascus` | t01-blog_x-1 c7 | — | No prior deep credit reused |
| t02 `about` | t02-_1-0 c1 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `ac-maintenance` | t02-_1-0 c2 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `ac-repair` | t02-_1-0 c3 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `ac-replacement` | t02-_1-0 c4 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `air-cleaning-services` | t02-_1-0 c5 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `air-conditioning` | t02-_1-0 c6 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `air-scrubbers` | t02-_1-0 c7 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `assessment-results` | t02-_1-0 c8 | skeleton-deviates(0.75); height-outlier(1965 vs mean 6843); legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `blog` | t02-_1-0 c9 | skeleton-deviates(0.75); legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `careers` | t02-_1-0 c10 | height-outlier(3125 vs mean 6843); legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `comfort-assessment` | t02-_1-0 c11 | skeleton-deviates(0.75); legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `community-involvement` | t02-_1-0 c12 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `controls-and-thermostats` | t02-_1-0 c13 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `ductless-ac` | t02-_1-0 c14 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `ductless-mini-split` | t02-_1-0 c15 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `furnace-maintenance` | t02-_1-0 c16 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `furnace-repair` | t02-_1-0 c17 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `furnace-replacement` | t02-_1-0 c18 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `heat-pump-maintenance` | t02-_1-0 c19 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `heat-pump-repair` | t02-_1-0 c20 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `heat-pump-replacement` | t02-_1-1 c1 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `heating` | t02-_1-1 c2 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `humidifiers` | t02-_1-1 c3 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `hvac` | t02-_1-1 c4 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `indoor-air-quality` | t02-_1-1 c5 | legacy-record | Prior-30 capture; see smock-findings.md |
| t02 `water-heater-replacement` | t02-_1-1 c6 | legacy-record | Prior-30 capture; see smock-findings.md |
| t03 `hvac__clarksburg` | t03-hvac_x-0 c1 | height-outlier(7538 vs mean 7370) | No prior deep credit reused |
| t03 `hvac__damascus` | t03-hvac_x-0 c2 | — | No prior deep credit reused |
| t03 `hvac__frederick` | t03-hvac_x-0 c3 | — | No prior deep credit reused |
| t03 `hvac__gaithersburg` | t03-hvac_x-0 c4 | — | No prior deep credit reused |
| t03 `hvac__germantown` | t03-hvac_x-0 c5 | — | No prior deep credit reused |
| t03 `hvac__ijamsville` | t03-hvac_x-0 c6 | — | No prior deep credit reused |
| t03 `hvac__middletown` | t03-hvac_x-0 c7 | — | No prior deep credit reused |
| t03 `hvac__monrovia` | t03-hvac_x-0 c8 | — | No prior deep credit reused |
| t03 `hvac__mt-airy` | t03-hvac_x-0 c9 | — | No prior deep credit reused |
| t03 `hvac__new-market` | t03-hvac_x-0 c10 | — | No prior deep credit reused |
| t03 `hvac__spring-ridge` | t03-hvac_x-0 c11 | — | No prior deep credit reused |
| t03 `hvac__thurmont` | t03-hvac_x-0 c12 | — | No prior deep credit reused |
| t03 `hvac__urbana` | t03-hvac_x-0 c13 | — | No prior deep credit reused |
| t03 `hvac__walkersville` | t03-hvac_x-0 c14 | — | No prior deep credit reused |
| t03 `water-heater-replacement__damascus` | t03-hvac_x-0 c15 | skeleton-deviates(0.75) | No prior deep credit reused |
| t03 `water-heater-replacement__frederick` | t03-hvac_x-0 c16 | skeleton-deviates(0.75) | No prior deep credit reused |
| t03 `water-heater-replacement__gaithersburg` | t03-hvac_x-0 c17 | skeleton-deviates(0.75) | No prior deep credit reused |
| t03 `water-heater-replacement__germantown` | t03-hvac_x-0 c18 | skeleton-deviates(0.75) | No prior deep credit reused |
| t03 `water-heater-replacement__ijamsville` | t03-hvac_x-0 c19 | skeleton-deviates(0.75) | No prior deep credit reused |
| t03 `water-heater-replacement__middletown` | t03-hvac_x-0 c20 | skeleton-deviates(0.75) | No prior deep credit reused |
| t03 `water-heater-replacement__monrovia` | t03-hvac_x-1 c1 | skeleton-deviates(0.75) | No prior deep credit reused |
| t03 `water-heater-replacement__mt-airy` | t03-hvac_x-1 c2 | skeleton-deviates(0.75) | No prior deep credit reused |
| t03 `water-heater-replacement__new-market` | t03-hvac_x-1 c3 | skeleton-deviates(0.75) | No prior deep credit reused |
| t03 `water-heater-replacement__walkersville` | t03-hvac_x-1 c4 | skeleton-deviates(0.75) | No prior deep credit reused |
| t04 `blog__avoid-cooling-problems-preventative-spring-hvac-maintenance` | t04-blog_x-0 c1 | — | No prior deep credit reused |
| t04 `blog__gaithersburg-md-iaq-common-indoor-air-pollutants` | t04-blog_x-0 c2 | — | No prior deep credit reused |
| t04 `blog__how-can-pet-owners-maintain-their-iaq-in-germantown-md` | t04-blog_x-0 c3 | — | No prior deep credit reused |
| t04 `blog__hvac-maintenance-plans-home-warranties-which-better` | t04-blog_x-0 c4 | — | No prior deep credit reused |
| t04 `blog__hvac-repair-cost` | t04-blog_x-0 c5 | — | No prior deep credit reused |
| t04 `blog__hvac-service-plan` | t04-blog_x-0 c6 | height-outlier(9411 vs mean 4129) | No prior deep credit reused |
| t04 `blog__signs-indicate-ac-system-about-to-break-down` | t04-blog_x-0 c7 | — | No prior deep credit reused |
| t04 `blog__the-impact-of-indoor-air-quality-on-sleep-health-in-frederick-md` | t04-blog_x-0 c8 | — | No prior deep credit reused |
| t04 `blog__whats-air-scrubber-how-improve-iaq` | t04-blog_x-0 c9 | — | No prior deep credit reused |
| t04 `blog__why-smell-gas-coming-out-heater-mount-airy-md` | t04-blog_x-0 c10 | — | No prior deep credit reused |
| t04 `blog__will-snow-and-ice-damage-your-heat-pump-in-frederick-md` | t04-blog_x-0 c11 | — | No prior deep credit reused |
| t05 `careers__hvac-technician` | t05-careers_x-0 c1 | legacy-record | Prior-30 capture; see smock-findings.md |
| t05 `careers__maintenance-technician` | t05-careers_x-0 c2 | legacy-record | Prior-30 capture; see smock-findings.md |
| t05 `careers__residential-hvac-installer` | t05-careers_x-0 c3 | legacy-record | Prior-30 capture; see smock-findings.md |
| t06 `privacy-policy` | t06-_1-0 c1 | — | No prior deep credit reused |
| t06 `terms` | t06-_1-0 c2 | — | No prior deep credit reused |
| t07 `contact` | t07-one-off-0 c1 | — | No prior deep credit reused |
| t08 `faq` | t08-one-off-0 c1 | — | No prior deep credit reused |
| t09 `financing` | t09-one-off-0 c1 | — | No prior deep credit reused |
| t10 `home` | t10-home-0 c1 | legacy-record | Prior-30 capture; see smock-findings.md |
| t11 `hvac-maintenance-plan` | t11-one-off-0 c1 | — | No prior deep credit reused |
| t12 `hvac-specials` | t12-one-off-0 c1 | — | No prior deep credit reused |
| t13 `hvac-troubleshooting` | t13-one-off-0 c1 | — | No prior deep credit reused |
| t14 `meet-the-team` | t14-one-off-0 c1 | — | No prior deep credit reused |
| t15 `referrals` | t15-one-off-0 c1 | — | No prior deep credit reused |
| t16 `reviews` | t16-one-off-0 c1 | — | No prior deep credit reused |
| t17 `services` | t17-one-off-0 c1 | — | No prior deep credit reused |
| t18 `shop` | t18-one-off-0 c1 | — | No prior deep credit reused |
| t19 `trane-hvac` | t19-one-off-0 c1 | — | No prior deep credit reused |
| t20 `water-heaters` | t20-one-off-0 c1 | — | No prior deep credit reused |
| t21 `services__air-conditioning` | t21-one-off-0 c1 | — | No prior deep credit reused |

## Record-derived scale and later report candidates

DOM records checked (not inferred from thumbnails): home/1440/record.json H1 13px/900/16.9px AvenirPro95Black, H2 56px/900/67.76px, charcoal rgb(67,67,67). hvac__frederick/1440/record.json uses the same H1/H2 scale in white. blog__ac-capacitor-replacement-cost/1440/record.json uses 56px article H1 rgb(58,58,58), 46px/900/55.9999px red H2 rgb(211,32,39). These samples do not establish every route's computed style. Exact body metrics/spacing/fixed UI remain deferred.

Candidate source screenshots for later full-size validation, all existing files (not freshly opened here):

- R/home/1440/segment-000000.jpg, y0: real technician/white overlapping intro and early paths (S/1440/t10-home-0 c1).
- R/hvac__frederick/1440/segment-000000.jpg, y0: locality hero with form and early service structure (S/1440/t03-hvac_x-0 c3).
- R/blog__ac-capacitor-replacement-cost/1440/segment-000000.jpg, y0: editorial hierarchy (S/1440/t00-blog_x-0 c6).
- R/meet-the-team/1440/segment-000000.jpg, y0: uniform portrait grid; pair later with mobile length (S/1440/t14-one-off-0 c1).
- R/contact/1440/segment-000000.jpg, y0: task-first intake instead of ornamental hero (S/1440/t07-one-off-0 c1).
- R/hvac-specials/1440/segment-000000.jpg, y0: focused coupon grid/form exception (S/1440/t12-one-off-0 c1).

## Stop state

User stage-budget steer received after overview completion (reported 2,620,856 > 2,500,000 input tokens). Exploration stopped. All 66 actually opened sheets /548 cells are recorded; overview remaining = zero. Exact later inventory is the 274-row appendix, including all automatic flags. No fresh full-size/interaction/360px/404 gate closed. Shop/app state, article blank band, odd preview seams and mobile tables remain flagged. No raw capture or ledger flags altered; no browser, recapture, submissions, delegation, commit, push, merge or deploy. Groups/sheets/index artifacts are external; lead owns independent verification and commit. Other pre-existing untracked research files seen in git status were not edited by this pass.

Done · overview findings and external sheet artifacts · Verified: 66 image opens, 66 existing indexed files and viewed flags, 274 unique cells at each width · Not verified: full-size, interactions, capture anomalies and live behavior · Next: lead verifies and commits; later analyst follows backlog only when authorized.
