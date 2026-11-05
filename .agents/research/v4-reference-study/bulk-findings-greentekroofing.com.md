# GreenTek saved-capture sheet study

Scope: inherited 104-sheet overview plus the partial native study below. Raw captures/records unchanged; no live browser or live interaction passes. Initial 429 captured pages + 5 linked files and integrity verification are lead-supplied, not visual-quality approval. The historical overview after the native section retains its original scope; current native coverage is in `native/native-progress.json`.

<!-- native-stage:start -->
## Native stage, 2026-11-05 (independent research sub-agent; PARTIAL, see coverage below)

Evidence root `C = ~/.ai-powerhouse/research-captures/arbcut-v4`. Maps: `_sheets/greentekroofing.com/native/` (`selection.json` = all 212 queued pages, tier, every original reason/flag; `manifest.json` = display→source map, `opened` only after a visible read; `native-progress.json` = exact queue). The 212-page, 3,757-file queue is a provisional review queue, **not 212 designs**. No browser, recapture, interaction script, form submit or live check was run.

**Integrity note.** A first pass requested all 66 interaction displays, but those Read results returned `[media removed: request limit]`. Notes written then are withdrawn (`native/withdrawn-notes-interactions.md`, not evidence). Only the images listed below were visibly re-read.

### Saved interactions actually viewed
Under `C/greentekroofing.com/_interactions/`. Saved states only, not live passes. The `round2-*` folders hold 0 JPGs.

| Interaction | Visible outcome |
|---|---|
| Desktop dropdown, home (`home-_/1440/02-dropdown-0.jpg`) | **Saved-state pass:** white rounded panel, 4 whole-word items, label turns green. Ledger says `error` for home `desktop-dropdowns`; a later dropdown frame exists regardless |
| Mobile menu (`display/_interactions/home-fix__390-strip-00.jpg`, try-0/try-1) | **Saved-state pass:** white drawer over a dimmed page, About Us, Services, Resources, Gallery, Materials + Products, Contact; MENU icon becomes ×; second frame closed. Sub-menu expansion not shown; no phone or quote inside the drawer, though the bar stays visible |
| Invalid email, home (`home-_/1440/07-form-0-invalid.jpg`) | **Attempt, no visible feedback:** "invalid-email" typed, no error state. No submit, so submit-time validation is untested. The About Us panel is open in the same frame, a leftover of the test, not a site state |
| Project slider (`home-_/1440/09-slider-t5.jpg`) | **Resolves the gallery artefact:** five 288 px full-bleed tiles in one row with town and name, all with loaded photos. A slide change is not shown |
| Reviews (`home-_/1440/10-scroll-0.3.jpg`) | **Resolves the empty review zone on home at 1440:** loaded widget with Google, Facebook, Yelp, BBB tabs, "Excellent 4.7 \| 696 reviews", named reviewer cards with Google marks, Write a review. Other pages not shown |

| Invalid phone, contact (`contact-_contact_/1440/10-form-0-invalid.jpg`, `contact-_contact___390-strip-00`) | **Attempt, no visible feedback:** "invalid-phone" typed at both widths, no error state. No submit |
| Calculator focus (`service-_roofing_calculator_/1440/06-form-0-empty-focus.jpg`) | Number spinner appears, no clear focus ring. Only page 1 of 3 exists in any viewed frame, so steps 2–3 and a result are unseen. **Not a calculator pass** |
| Project cards (`gallery-_projects_/1440/01-initial.jpg` → `06-scroll-0.3.jpg`) | **Lazy-load shown:** white image areas with dark caption gradient, then real photos. Supports the gradient-panel explanation; Load More itself was not exercised |
| Map (`contact-_contact_/1440/11-scroll-0.3.jpg`) | Place card shows a spinner; it is filled on `contact/1440/segment-000000.jpg`. Timing |
| Reduced motion (`contact …/16`, `faq …/11`, `service …/11`, `home-_/1440/15`) | **Attempt:** all four frames fully rendered, no mid-fade. A still proves nothing about motion itself |
| Hover (`display/_interactions/hover-crops.jpg`) | **Inconclusive:** crops have no baseline; the ledger's home `hover` before/after values for button and card are identical. Nav label is green |
| FAQ chips, Load More, gallery filters, FAQ expansion | **No frame viewed shows any of them operated** |

Scroll frames also show the header losing its black bar (83 px, ledger agrees) and the phone reading (813) 750-0941, where the same page's first frames read (813) 333-1963 (`home-_/1440/02` vs `07`). So the number changes within a session, not only on the 404. **Five numbers seen across frames:** (813) 333-1963, (813) 750-0941, (656) 208-2276 (`contact-_contact_/1440/11-scroll-0.3.jpg`, header and contact card together), (656) 232-2569 (`gallery-_projects_/1440/06-scroll-0.3.jpg`), (656) 650-0280 (`service-_roofing_calculator_/1440/06-form-0-empty-focus.jpg`). The footer legal line separately lists (813) 851-3409. Call tracking is plausible; I do not know the cause.

**Copy:**
1. **Source-tabbed review widget with real marks** (`home-_/1440/10-scroll-0.3.jpg`): rule 1, with named people.
2. **One-row project strip, town + name on each photo** (`home-_/1440/09-slider-t5.jpg`); captions sit on the photo, which rule 14 would move below.
3. **Mobile bottom bar: MENU left, phone pill right** (`home-fix__390-strip-00`): thumb reach, but no quote action (rule 17).

**Avoid:**
1. **Hero overlay flattens the roof** (`home/1440/first-viewport.jpg`): grey cast across the subject; rule 11 weaker case, photo still readable.
2. **Phone number that changes during a visit.**
3. **Rating badge over the map card** (`home-_/1440/09-slider-t5.jpg`): rule 18.
4. **No inline validation on a typed invalid email.**

### Native pages viewed so far (first viewport + all segments at both widths)
`home`, `contact`, `roofing-calculator`, `financing`, `projects`, `about`. Scale caveat: 1440×2400 segments were delivered to me at 1200×2000 (0.83×); 1440×900 first viewports and 390 strips at full size. Small print at 1440 was read from the 390 frames where possible.

**Corrections to the overview text below (these replace it):**
- **The "huge shared project gallery" is a capture artefact on home, not a site layout.** In `home/1440/segment-007200…016800` the project slides stack at full page width. The ledger's home `sliders` record shows `tns-item` slides with `data-lazy-src` and an empty SVG placeholder, and its `motion` record puts the CTA band at y=10277 at 1440, against a recorded document height of 23484. So the capture's height overstates the page by about 13,000 px at 1440. Treat recorded heights of pages carrying this block as inflated.
- **The grey gradient panels are unloaded slides with the caption gradient on them**, not media defects: Gene's, Fernando's and Kenneth's panels are grey on home (`home/1440/segment-012000…014400`), yet the same projects show real photos on `projects/1440/segment-000000.jpg`, and Gene's loads at 390 on home (`display/home/390-strip-04`). Shown for home. `roofing`, `gutters`, `solar-panels` and the county pages stay open until viewed.
- **Empty review zones:** the slot is empty in `home/1440/segment-002400.jpg`, `display/home/390-strip-02` and `services/1440/segment-000000.jpg`. The ledger's home `motion` record lists `ti-review-item` nodes, so a third-party widget exists in the DOM; whether it paints is decided only by the interaction frames.
- **Mobile footers drop the link columns** on all six pages: logo, phone, email, address, legal line, socials only (`display/home/390-strip-07/08`, `contact`, `roofing-calculator`, `financing`, `projects`, `about` last strips). The 1440 footers carry About, Services and Resources lists. The overview's "stacked link list" remark was about t00 articles and is not confirmed here.
- **Fixed geometry exists in the interaction ledger** (`bulk-interactions.json`, home `sticky`): 1440 header 82.66 px after scroll; 390 header 96.25 px + bottom bar 87 px = **183.25 px** of an 844 px viewport, plus the rating badge. The first viewport at 1440 shows 120 px (black bar + nav, measured on the image).

**Home.** Real aerial house under a mid overlay: the roof reads at 1440, softer at 390 (`home/1440/segment-000000.jpg`, `display/home/390-strip-00`). Small descriptive H1 "Tampa Bay's #1 Roofing Company", large "This is Smart Roofing" (rule 22 pattern). At 1440 the form crosses the hero edge and the proof dock hangs from its base, beside the action (rule 4). At 390 the form starts in the second frame, so the first screen is text only. Sequence (ledger `motion` section list plus footer): hero, 3 service cards, marks row, text/photo, calculator band, reviews, process, Florida map, owner, finance, phone video, products, projects, local links, FAQ, articles, CTA, footer: **18 bands**, too many for a local trade. At 1440 process shows only icons and STEP 1–5; step names appear only at 390 (`display/home/390-strip-02`), so desktop names are unverified.

**Contact.** Centred form over a faint solar-cell line pattern, crossing into green, then address/hours/phone cards, map, FAQ. 9 fields + 2 consent blocks; fields are pills here but rounded rectangles in the home hero. About 100 px of blank sits above Terms | Privacy, likely the reCAPTCHA slot (unproven). French bulldog in a white shirt beside the form at 1440, absent at 390.

**Calculator.** Plain questions, required marks, 3 steps, large image choices (`roofing-calculator/1440/segment-000000.jpg`). Square checkboxes for a Yes/No choice. "Next" is left-aligned and pure black while other buttons are dark grey. 390 keeps 195 px single-column cards, so page 1 runs across about 6 frames.

**Financing.** Offers show the real Regions mark and FDIC mark, with the disclosure directly under each offer (`financing/1440/segment-000000.jpg`). Same paragraph appears twice. Offer cards are bank banners in another green.

**Projects.** Nine real roofs, name + town on each card; 3-up at 1440, single column at 390. Filter chips take 4 rows (about 240 px) at 390. "Lakeland . FL" typo.

**About.** A man in a "Greentek Gives Back" T-shirt holding a dark tray of roofing material against the sky (`about/1440/first-viewport.jpg`); uncaptioned, so the overview's "founder" label is unverified. Story with hard facts: 2017, 3 employees, "4000+ homeowners". Five oversized value words, leaf crossing a black band, team-with-schoolchildren photo, community marks.

**Copy findings (native-verified):**
1. **Owner cut-out on black with signature and a first-person quote** (`home/1440/segment-002400.jpg`, document y≈4400–4790): the Puetz/Home Front move again; holds at 390 (`display/home/390-strip-03`). Matches rule 8.
2. **Disclosure attached to each offer** (`financing/1440/segment-000000.jpg`).
3. **Locality links as underlined two-line navigation beside the map** (`home/1440/segment-019200.jpg`, `display/home/390-strip-06`): rule 23, survives at 390.
4. **Image-choice estimator steps** in plain words (`roofing-calculator/1440/segment-000000.jpg`), as a pattern for a quote form; use photos rather than its diagrams (rule 6).
5. **Real branded vehicle in a real street** (`home/1440/segment-021600.jpg`, article card): ArbCut's lift equivalent.
6. **Company video framed in a phone**, captioned John Franco (`home/1440/segment-004800.jpg`): a real person rather than a stock scene. It is an image here; whether anything plays is unverified.

**Avoid findings (native-verified):**
1. **Contradictory financing copy:** "partnered exclusively with Regions" (`financing/1440/segment-000000.jpg`) vs FAQ "Service Finance, Ygrene, Improvifi, and Acorn" (`faq/1440/first-viewport.jpg`). Rule 5 applied to claims.
2. **Broken proof sentence:** "that has allowed GreenTek Roofing & Solar has helped over 4000+ homeowners" (`about/1440/segment-000000.jpg`).
3. **Mobile footer loses crawl links** on six pages: breaks rule 21, same fault as Northface.
4. **Marks row stacks at 390:** seven marks in a left-aligned column, about 500 px (`display/home/390-strip-01`); community marks the same on about (`display/about/390-strip-01`). Puetz's warning again.
5. **Line-icon process steps** on a pale bar (`home/1440/segment-002400.jpg`): rule 6. At 390 black text on mid green, tight spacing (`display/home/390-strip-02`).
6. **Stock-looking couple on a sofa** on financing (`financing/1440/first-viewport.jpg`); origin unknown, weakest image beside so many real roofs.
7. **Too many devices:** curved edges, solar-cell pattern, leaves, Florida map, phone, dog, hand underline, tilted banners. Rule 9 allows two.
8. **Three green treatments on photos:** full green wash on hero and featured card hides the worker (`roofing-calculator/1440/first-viewport.jpg`, article card); rule 11.

**Services** (`services/1440/first-viewport.jpg`, `segment-000000…004800`, `display/services/390-strip-00…03`). Five service cards plus a calculator card as sixth tile on a pale panel; whole page is a short index. "Real Customer Projects in Your Area" heading has nothing under it at either width (`services/1440/segment-002400.jpg`, `display/services/390-strip-02`), and reviews are empty too. Unresolved; the project slot may be the same lazy content. Best image on the site: worker on a ladder beside the branded lift-bed truck (`services/1440/segment-000000.jpg`).

**FAQ** (`faq/1440/…`, `display/faq/390-strip-00/01`). Seven category chips, answers open on the page, not accordions, then Load More. Readable 860 px measure. Chips take 3 rows at 390.

**404** (`blog__reasons…/1440/first-viewport.jpg`, `segment-000000.jpg`, strips). Branded: "This Page Doesn't Have A Green Light From Greentek!", Return To Homepage, five service pills. Confirmed as a 404, no article. **The phone differs by capture: (813) 750-0941 at 1440, (656) 208-2276 at 390**, against (813) 333-1963 on the other pages viewed, in the header/bar and footer together. Call tracking is plausible; I do not know the cause. Only here so far does a MetalOps "Certified Installer" badge appear in the footer, and "Storm Damage" and the phone pill collide at 390 (`display/…/390-strip-00`, middle frame, fixed bar overlapping content in scroll).

**Our team** (`our-team/1440/…`, strips). Nine cards, real names and roles. Chips include a filter of one ("Lead Commercial Estimator"). Plain white-wall portraits work better than the two composites: people and dogs pasted on one aerial roof (Austin Bernard; Kilo & Kobe, "Greentek Mascot/Head Napper"). Filter and info-dot behaviour unseen.

**Careers** (`careers/1440/…`, strips). Dark-left overlay on a house and branded truck, application form on the right with a default browser "Choose File" control. Hero text sits over the bright sky and roof at 390 with weaker contrast (`display/careers/390-strip-00`). One role card. Crew photo on a roof in hi-vis and straw hats is real and strong (`careers/1440/segment-000000.jpg`).

**Added Copy:**
7. **Crew and truck photos as identity** (`careers/1440/segment-000000.jpg`, `services/1440/segment-000000.jpg`): rule 8; ArbCut's equivalent is Mantas, his lift and his gear.
8. **Named team cards with role** (`our-team/1440/segment-000000.jpg`), if ArbCut ever has more than Mantas to show.
9. **A 404 that routes to services** (`blog__reasons…/1440/first-viewport.jpg`).
10. **Answers visible without a click on the FAQ page** (`faq/1440/segment-000000.jpg`): content stays crawlable and readable.

**Added Avoid:**
9. **Same section stack on every page:** fisherman CTA, three-card articles and footer repeat on all 11 pages viewed; the unrelated father-and-son fishing photo closes a page about roofs. Origin unknown.
10. **Headings with nothing under them** (reviews, projects on `services`).
11. **Pasted composites** on the team page: reads as fake beside real photos.
12. **Default file input** inside a styled form (`careers/1440/first-viewport.jpg`).
13. **"Get Started" used for every action**, alongside Get In Touch, Get Your Estimate, Schedule An Inspection, Start Your Project, Get Your New Roof, Ready? Let's Get Started!, Let's Get Started: rule 25 (`home/1440/segment-000000…019200`).
14. **Fixed rating badge covering text and the MENU control** in the 390 first viewports of all 11 pages viewed (`display/*/390-strip-00`); some scrolled frames show it absent, so timing or dismissal rules are unknown. Also over body copy at 1440 (`services/1440/first-viewport.jpg`, "that matches…" clipped): rule 18.
15. **Recoloured Facebook/Google/BBB marks in single green** in the hero dock (`home/1440/segment-000000.jpg`): rules 1 and 7. Hand-made ratings text ("4.7 RATING") next to them.
16. **Proof mismatch to check:** rating badge "4.7 | 696 reviews" vs Google card "4.7 (527)" (`contact/1440/segment-000000.jpg`). Different sources possible; both on one page. Rule 5.

### Retry 1 (2026-11-06): further saved interactions, visibly viewed in batches of 3
Saved states, not live passes. Keyboard, focus trap, motion and 360 stay unknown.

| Source | Visible outcome |
|---|---|
| `home-_/1440/03–05`, `home-fix/1440/dropdown-2/3/4` | **Saved-state panels on home:** Other Services (3 items), Resources (5), About Us (4). `home-fix/1440/dropdown-5.jpg` hovers Materials + Products: no panel; the label has no chevron, so it reads as a plain link |
| `home-_/1440/06-form-0-empty-focus.jpg` | Inconclusive: no focus ring on any field. About Us panel left open by the test; the phone reads (813) 750-0941 |
| `home-_/1440/08-slider-t0.jpg` | Blank white viewport under the header: unpainted scroll state, not a slide. Says nothing about the site |
| `home-_/1440/11-scroll-0.7.jpg` | Project strip loaded, one row of five; rating badge over the first caption ("Dana's Project Story") |
| `display/_interactions/home-___390-strip-00.jpg` | 390 form typing frames: "invalid-email" typed, no message. Typing alone is not a validation result. Name, email and phone fields are about 150 px wide in a 360 px card. Badge covers form text |
| `contact-_contact_/1440/01-initial.jpg` | Rest state of the contact form; header 120 px with black bar |
| `contact-_contact_/1440/02–05` | **Saved-state panels on contact:** Roofing Services (4), Other Services (3), Resources (5), About Us (4). On the white page the panel has almost no visible edge and covers the H1 |
| `contact-_contact_/1440/06-dropdown-7.jpg` | Not a menu: scrolled page, header mid-transition. Inconclusive |
| `contact-_contact_/1440/07-dropdown-8.jpg`, `08-dropdown-9.jpg` | Not menus: footer headings Services and Resources turn green. Rating badge covers the start of the footer legal line. About 180 px of empty black sits under the link columns; cause unknown (the 404 shows a MetalOps badge in that column zone, a candidate only) |
| `contact-_contact_/1440/09-form-0-empty-focus.jpg` | Inconclusive: no focus ring visible on any field |

**Added Copy:** short whole-word dropdown panels with a green active label, consistent on home and contact (saved states only).

**Added Avoid:** a white panel on a white page with no clear edge (`contact-_contact_/1440/02-dropdown-0.jpg`); a fixed badge over legal text (`contact-_contact_/1440/07-dropdown-8.jpg`); half-width fields inside a 360 px mobile card (`home-___390-strip-00`).

**Retry stop (soft budget steer 3,066,974 > 3,000,000).** No native page displays were opened this retry. Interaction images only. Unseen sources are listed in `native-progress.json`; the page queue is unchanged.

### Semantic refinement of the 212-page queue
`native/selection.json` keeps all 212 pages with every original reason and flag; nothing was removed.

| Tier | Pages | Meaning | Native state |
|---|---:|---|---|
| T1 functional/one-off | 23 | home, contact, calculator, financing, projects, faq, about, services, audit, careers, job, team, founder, products, referrals, videos, blog, 404, accessibility, 3 policy pages, award post | **11 closed, 12 not started** |
| T2 two differing examples per family | 14 | 7 semantic families × 2 | 0 |
| T3 actual visual outliers | 12 | county clone, Orlando, Westlake, brown metal, Tina, restaurants post, table/mobile articles, snowy article, solar-panels | 0 |
| T4 residual | 163 | mostly `skeleton-deviates` heuristics on editorial/locality pages; flagged, not designs | 0 |

### Coverage and limits
- **Closed at both widths (first viewport + all segments): 11 pages:** home, contact, roofing-calculator, financing, projects, about, services, faq, 404 (`blog__reasons-you-need-an-annual-roof-inspection-in-florida`), our-team, careers. **81 of 404 prepared page displays opened (144 source files).**
- **Interactions after retry 1: 39 of 66 prepared displays viewed:** 51 unique source JPGs seen, 12 byte-identical copies of those, **35 of 98 unseen**, listed in `native/native-progress.json`.
- **Remaining: 201 pages** (12 T1, 14 T2, 12 T3, 163 T4), 3,613 files, listed with reasons, flags and exact files in `native-progress.json` → `remaining`. Prepared displays not opened: `remainingDisplaysPrepared`.
- **Still open:** gradient panels and empty review/project slots on any page other than home; `roofing`, `gutters`, `solar-panels`, county pages; 10 blank-band flags except where home is covered; Orlando photos; article tables at 390; policy-loader pages; calculator steps 2–3; FAQ/gallery filters and Load More; lightbox; video; keyboard; 360 width; child-span styles; logo/photo provenance.
- Stopped at the soft budget steer (2,220,496 > 2,000,000).
- 1440×2400 segments arrived at 1200×2000, so small print at 1440 was not read at true scale. 390 strips and 1440×900 frames arrived at full size.
- Older overview text below is historical where it conflicts with this section. "Native opened 0 / interaction passes 0" described that earlier stage.

### Candidate screenshots (now viewed)
1. `greentekroofing.com/home/1440/segment-002400.jpg`: owner cut-out and signature, document y≈4400–4790.
2. `greentekroofing.com/_interactions/home-_/1440/10-scroll-0.3.jpg`: review widget with real source marks.
3. `greentekroofing.com/financing/1440/segment-000000.jpg`: disclosure attached to each offer.
4. `greentekroofing.com/services/1440/segment-000000.jpg`: worker and branded truck.
5. `greentekroofing.com/home/1440/segment-012000.jpg`: capture artefact, not to be read as design.
6. `greentekroofing.com/home/390/first-viewport.jpg` (in `display/home/390-strip-00`): badge over MENU and fixed-UI cost.

<!-- native-stage:end -->

## Incremental observations
- t00 desktop sheets 0–5 (120 cells): green photographic title band, narrow overlapping white article surface, interspersed roofing images, map, optional curved photo CTA, black footer. Content density and image frequency vary considerably. Sheet 0 cell 11 (restaurants) is unusually short; sheet 2 cell 3 unusually long.
- Potential content reuse to inspect: t00 desktop sheet 4 cells 19–20 and sheet 5 cells 3–5 show substantially matching image/heading sequences across different article slugs. This is an overview flag, not a text-duplication verdict.
- Emoji-like coloured marks appear beside some article headings (sheet 0 cells 3–4, sheet 4 cells 14–18); avoid adopting this treatment under v4 rule 6.

Full-size opened: 0. Interaction passes: 0. Exact opened-sheet and native-review queues are in the site manifests described below; final counts supersede incremental counts.

- t00 desktop sheets 6–13: all cells inspected. Repeated image/heading sequences also in sheet 6 cells 3/7, sheet 8 cells 14/15. Blank inset panels appear in sheet 7 cell 10, sheet 9 cell 16, sheet 13 cell 10; unresolved embed/reveal/content artefacts, not proven site defects. Some articles omit curved footer CTA. Sheet 6 cell 13 is a very short award/news article, a semantic variant within t00. Tables in long comparison posts need native mobile review.

- t00 mobile sheets 0–6: all cells inspected, single reading column and source-rating strip near introduction; footer link columns become a long stacked link list, not visibly absent. Mobile tables remain multi-column (sheet 0 cells 10/12, sheet 5 cell 17), no responsive/usability pass. Repeated sequences persist. Desktop blank inset panels sometimes collapse on mobile; attribution still pending records.

- t00 mobile sheets 7–13 complete: long multi-column tables are especially compressed in how-often-should-you-replace-your-roof (sheet 7 cell 4), comparison metal-roof-vs-tile variants (sheet 8 cells 14–15), and water-leaking-from-ceiling (sheet 13 cell 2). No cell is an obvious whole-page error screen. This does not validate body readability.

- t01 (32 article pages) is a structural heuristic split, visually the same editorial family as t00; all four sheets checked. Some landscape imagery looks highly polished/stylised; origin is unknown.
- t02 (25 pages) mixes commercial-roofing and roofing routes: same form hero, three pale-green service cards, alternating text/photo, Real Reviews heading with little visible content below, process band, map/local links, optional FAQ rows, related posts, photo CTA/footer. All four sheets checked. Do not call this a commercial semantic template just because its group is named that way. Commercial slugs showing residential/home language need content-specific review. Orlando service cards 2–3 lack photos in both sheet overviews; check loading vs intentional omission. Mobile process becomes a long vertical icon run; avoid copying its cumulative length or line pictograms.

- t03 extended locality/service-locality family: 24 pages, all four sheets checked. Adds descriptive content, material cards, supplier marks, calculator band, owner cutout/signature and second form to t02 sequence; mobile pages reach 16–24k recorded heights shown on sheet. This overwhelms a short local-service decision. t04 (10 pages) is the short locality family again; both sheets checked, FAQ density varies, some Get the Facts bands have no visible question rows.
- t05 project detail (9 pages), both sheets checked: plain green title block, large stacked site photos, small location/service/material facts and previous/next navigation. Brown-metal project lacks the facts panel visible on peers. This is a useful factual alternative to invented proof. Mobile rating/phone overlay visibly crosses gallery imagery (all 9 cells); project mobile footer shows contact/legal/social information without the extensive service/location lists visible on desktop. Still no link/function pass.

- t06 six service pillars: all cells both widths. White image/text hero plus form, calculator band, benefit panels, review-heading gap, map, extensive shared project gallery, FAQ/posts/footer. Huge gallery includes grey gradient panels at both widths (gutters/roofing/solar); unresolved loading/media artefacts. Images repeat across unrelated services.
- t07 six material-brand catalogues: both sheets, swatch grids and jump links; Eagle notably longer, two-column mobile swatches. Supplier logo beside product name is useful attributable identity; source assets not verified. Mobile overlay crosses swatches.
- t08 six short project pages: both sheets, single photo plus previous/next and footer; same project family as t05 but lacks facts/case narrative. t09 four legacy service/locality pages: both sheets, white text/photo hero, simple alternating content and green FAQ, no large form hero; shorter but sparse proof. Footer also shortened on mobile.

- t10 legal group is semantically three distinct utility pages; disclaimer/privacy show policy-loading fallback text rather than actual policies, accessibility has prose; all six cells checked. No legal/accessibility compliance pass.
- t11 groups three DIFFERENT indexes: FAQ with category chips and visible Q&A; projects with filter chips, 3-column desktop / single mobile cards; videos with thumbnail grid. All are one-offs for later native review. Load-more/filter appearance does not prove operation.
- t12/t14 articles (3+2) share editorial family despite skeleton splits: narrower comparison tables at mobile, snowy roof imagery in Florida maintenance article is contextually questionable, not proof of stock origin. t13 extended locality (3) repeats t03. t15 two commercial county URLs visibly repeat roofing pillar content and gallery (including gradient panels) instead of a county-specific commercial layout. All sheets through t15 complete.

- One-offs t16–t21 (12 sheets): about uses founder-at-work photo, oversized values words, team photo on black band, organisation marks; blog index uses featured article hero, many chips, 3-column desktop cards/pagination and stacked mobile; careers uses dark van photo/form plus role card and crew photo; contact centres large form across white/green edge then address/hours/phone and map; financing has three parallel offer cards with lender marks/disclosures becoming stacked cards; roof-audit lead page adapts green form-hero/locality sequence to offer/service proof. All viewed only as sheets. Mobile contact mascot/cutout is absent relative to desktop; mobile form contains long consent prose. Source attribution of all proof/offer claims is unverified.

- t22–t27 both-width sheets complete: home combines dark aerial hero/form, three service cards, supplier marks, material image, calculator, empty review area, process, Florida map, owner/signature, phone image, product grid, huge shared project gallery, local map/list, FAQ/posts/footer. Several large gradient-only gallery panels persist on mobile. Team index uses photos/names/roles and category chips (9 visible cards). Products/materials index groups supplier-photo cards by roof type and a flat-roof black band, calculator card. Referrals uses form crossing green hero, smiling-person image then posts/footer. Calculator shows roof-shape diagrams, pitch diagrams, material photos and question fields; many fields look empty at this state; no calculation attempted. Services index shows 5 service cards plus calculator, photo/text, empty review/project zones then FAQ/posts/footer. Main devices count: repeated curved section edges plus faint diagonal roof-line pattern; leaves/map silhouette/phone graphic are additional occasional devices. Do not import all of them.

- Final singleton sheets t28–t35: terms is another policy-loader fallback; best-roof-shingles and installing-roof-shingles share the article family despite singleton heuristic IDs; **reasons-you-need-an-annual-roof-inspection-in-florida is a branded 404**, not an article at either width (t31 sheets; record headings confirm). Its mobile phone differs visibly from ordinary captures; provenance/current number unverified. Job detail is long text plus application form, founder detail reuses about-page values/team band, Westlake is a long swatch catalogue, Tina is the multi-photo project family. No article/editorial credit for the 404.

## Final coverage and semantic map

Capture root `C = ~/.ai-powerhouse/research-captures/arbcut-v4`; sheet root `S = C/_sheets/greentekroofing.com`. All references below are local saved evidence. No browser, regeneration or interaction was used.

| Coverage | Result |
|---|---|
| Existing sheets opened and every cell inspected | **104/104**, 52/52 at 1440, 52/52 at 390 |
| Page previews | **858/858 cells**, 429 unique slugs at both widths |
| Heuristic clusters | 36; not 36 semantic templates |
| Native first-viewport/segment images opened | **0**; singleton sheets also earn no native credit |
| New interaction passes | **0** |
| Lead-reported linked files | 5; not visually inspected here |
| Remaining sheets | **0** |

| Provisional semantic family | Pages | Heuristic groups | Native example selection |
|---|---:|---|---|
| Editorial articles | 309 | t00/t01/t12/t14/t29/t30 | contractor list + best-roof-shingles-for-florida comparison; flags add variants |
| News/award | 1 | within t00 | greentek-roofing-wins-award, retained as one-off |
| Short locality | 35 | t02/t04 | commercial-roofing/citrus-park + roofing/port-charlotte |
| Extended service/locality | 27 | t03/t13 | roofing/davenport + roofing/wesley-chapel/metal-roof-system |
| Service pillar | 8 | t06/t15 | roofing + gutters; both county clones retained |
| Project detail | 16 | t05/t08/t35 | Dana multi-photo/facts + black-shingle single-photo; all projects retained |
| Material-brand catalogue | 7 | t07/t34 | Brava + Eagle; Westlake retained as heuristic singleton |
| Legacy service/locality | 4 | t09 | Tampa repair + Plant City services |
| Policy loader | 3 | t10/t28 | all three, because missing policy text is unresolved |
| Distinct one-off routes | 19 | accessibility; faq/projects/videos within t11; t16–t27; t31–t33 | all, including 404, role detail and founder detail |

The semantic families describe visible page roles, not final text equivalence. URL and skeleton clusters alone do not establish a template. All conservative non-editorial pages are queued, beyond the minimum two examples.

## Copy / avoid (overview findings, not native approval)

Citations point to **sheets**, named cells/regions; no native y-coordinate is claimed from these scaled previews. Every cited key below is in `index.json` and `site-study-manifest.json` with its exact path and slug mapping.

| Decision | Evidence | Observation → judgment for ArbCut |
|---|---|---|
| Copy principle: named work with factual context | `S/390/t05-projects_x-0.jpg`, cells 3–9, photo/facts region | Real-site photo sequence plus location/service/material facts offers concrete proof. Use verified ArbCut facts, not generic seals. |
| Copy principle: recognisable people | `S/1440/t16-one-off-0.jpg`, founder/team regions; `S/1440/t03-roofing_x-0.jpg`, owner band | Person and team images carry more identity than abstract values words. Ownership/authenticity of GreenTek images is not independently established. |
| Copy principle: supplier identity at choice | `S/390/t07-products_x-0.jpg`, all six cells; `S/390/t24-one-off-0.jpg`, supplier cards | Logo/name beside the actual material makes identity attributable; do not invent or redraw marks. |
| Copy principle: form belongs to a distinct surface | `S/1440/t19-one-off-0.jpg`, top/form region; `S/390/t19-one-off-0.jpg`, first strip | One green/white overlap gives the contact action hierarchy. Form behavior and accessibility remain unverified. |
| Copy principle: useful locality navigation | `S/390/t02-commercial-roofing_x-0.jpg`, map/list regions | Text locality links are visible beside maps rather than buried prose. Link destinations and crawlability are unverified. |
| Avoid: galleries with unresolved media | `S/1440/t06-_1-0.jpg`, gallery regions; `S/390/t22-home-0.jpg`, later gallery strip | Large grey gradient panels persist across widths; label as artefacts/unknown, not confirmed broken production images. |
| Avoid: repeated SEO content structure without specificity | `S/1440/t00-blog_x-5.jpg`, cells 3–5; `S/1440/t15-commercial-roofing_x-0.jpg`, both cells | Matching sequences warrant native copy review. Commercial county routes display the general roofing pillar; don't equate coverage with relevant content. |
| Avoid: mobile accumulation | `S/390/t03-roofing_x-0.jpg`, all 20 cells; `S/390/t22-home-0.jpg` | Repeated proof, process, extra form, cards and galleries create an extremely long run. Retain the decision-making sections, not the entire stack. |
| Avoid: drawn process icons / heading pictograms | `S/390/t02-commercial-roofing_x-0.jpg`, green process regions; `S/390/t00-blog_x-0.jpg`, cells 3–4 | Line pictograms/emoji-like marks conflict with v4 rule 6. Official supplier/source logos are a different category. |
| Avoid: shortened mobile navigation and overlay competition | `S/390/t05-projects_x-0.jpg`, all cells; `S/390/t08-projects_x-0.jpg` | Footer service/locality columns visible on desktop are not shown on these mobile previews; rating/phone overlay crosses content. No exact viewport obstruction height/pass established. |
| Avoid: policy loading text and error slugs counted as content | `S/390/t10-_1-0.jpg`, cells 2–3; `S/390/t28-one-off-0.jpg`; `S/390/t31-one-off-0.jpg` | Policies are not readable here, and one blog URL displays 404. Do not claim content completeness or legal compliance. |

## Record-derived styles and limits

All numbers here come from `C/greentekroofing.com/<slug>/<width>/record.json`, `dom.headings`, `dom.colors/backgrounds`, and `documentHeight`, **not** scaled image estimation. Exact sampled values are also copied into `site-study-manifest.json.sampledRecordStyles`.

| Record sample | 1440 | 390 |
|---|---|---|
| home descriptive H1 | Outfit 15px/15px, 400, white | same |
| home display H2 | Outfit 50px/50px, 300, white | 44px/44px, 300 |
| roofing__davenport H1 / display H2 | 15px/15px 400 / 50px/50px 600 | 15px/15px 400 / 44px/44px 600 |
| blog__4-top-roofing-contractors-in-tampa H1/H2 | 40px/40px 600, white/black | 30px/30px 600 |
| same article H3 | 26px/26px 500 | 22px/22px 500 |
| projects__danas-project-story H1 | 50px 600, line-height normal | 44px 600, line-height normal |
| contact H2 | 50px/50px 600, green | 44px/44px 600, green |
| document heights: home / Davenport / contractor article | 23484 / 14605 / 7250 px | 19829 / 22938 / 8185 px |

Core recorded palette: green `rgb(24,160,74)` (#18a04a), pale green `rgb(227,244,233)` (#e3f4e9), white, black and dark grey. Green anchors heroes/process/FAQ; pale green supports cards/forms; white handles prose; black anchors owner/calculator/footer regions. This is one sans family with weight/scale variation, not evidence of a font pairing.

**Child-span caveat:** heading records sample computed wrapper styles. Descendant spans may override size, weight, colour or font; do not treat a recorded 300 wrapper weight as proof that every rendered word is 300. Child-span styles were not inspected. Records list fixed header/mobile handler/navigation/review/dialog/reCAPTCHA nodes but omit their geometry; fixed UI height, overlap at real viewport scale and 360 layout are unknown. Sheet rendering hides some fixed UI by capture design; first-viewport review is still required.

Artefact attribution: sampled 1440 records for home, roofing and gutters contain patched map iframes at y=20575, 4142 and 2945 respectively. Those map patches do not explain the gallery gradient panels elsewhere. `services` and policy-loader samples list no iframes. Empty review zones may involve third-party widgets, reveal timing or missing content; cause is unresolved. The pixel blank-band scan is a separate heuristic, never visual-review credit.

## Exact continuation and candidate evidence

`S/site-study-manifest.json` is the exact opened manifest and remaining native queue: each opened sheet key/path, every cell slug/URL, semantic representatives, all queued pages with reasons, original heuristic flags, sheet flags, first-viewport path, and **every segment path with y/height at both widths**. `sheetsRemaining=[]`, `fullSizeOpened=[]`, `interactionPasses=[]`. Reuse it without reopening the 104 completed sheets. Every native queue entry remains not-opened; no raw record flags changed.

Candidate screenshots for the lead, selected from sheet composition only; **native files below have not been opened or quality-approved**:
- `C/greentekroofing.com/contact/1440/segment-000000.jpg` (y=0): contact form overlap.
- `C/greentekroofing.com/projects__danas-project-story/1440/segment-000000.jpg` (y=0): large work photos.
- `C/greentekroofing.com/products__brava/390/segment-000000.jpg` (y=0): supplier/swatch adaptation; check header before use.
- `C/greentekroofing.com/about/1440/segment-000000.jpg` (y=0): founder and values/team sequence.
- `C/greentekroofing.com/home/390/first-viewport.jpg` (viewport y=0): establish real fixed UI and hero cost.
- `C/greentekroofing.com/blog__reasons-you-need-an-annual-roof-inspection-in-florida/390/segment-000000.jpg` (y=0): captured 404 exception.

Unverified gates: native scale/readability/crops, every queue segment, first viewports and fixed geometry, 360 layout/Lithuanian text, child-span styling, logo/photo provenance, proof-number consistency, actual policies, embed causes, links/navigation/forms/validation/calculator/FAQ/filter/load-more/gallery/video/motion/reduced-motion. No interaction pass is inferred from a closed FAQ or visible button. No new capture, submission or external action occurred. The initial 4M soft budget was an estimate; the final user steer reported 4,038,371 input tokens against 4,000,000. Exploration stopped; no further images opened.

Native queue verified: **212 pages**, **424 first viewports + 3333 segments**, all pending at both widths. Includes all **99 group-flagged pages**, all heuristic singletons, all non-editorial routes, differing semantic examples, and all **10 blank-band page-width flags across 10 pages**. Blank flags are enumerated with exact y/height in the site manifest and all affected pages are queued. Queue file existence verified; visual quality is not.

Done · 104-sheet overview stage. Verified · opened-sheet/cell accounting, queue coverage and saved path existence. Not verified · native visual and interaction gates above. Next · lead reviews/commits findings and owns native-review stage.


## Lead verification of retry1 — ordinal20

Verified39/66interactiondisplayflags,51distinctseenJPGsources+12byte-identicalcopiesofseenimages,35unseenoriginalJPGs(27pendingdisplays). Recomputedall13duplicate byte equalities, with12currentlyanchoredtoseensources;lastduplicatepairremainsunseen. Everypreparedpage/interactiondisplay and source path exists. Nativecoverageunchanged81/404displays144sources11completepairs;remaining201pages3613sourcefiles. Workerimagejudgments attributed,nofreshleadvisualpass. Withdrawninitialmedia-removednotesremainexcluded. "360px mobilecard" refers to card width inside390capture,not a360viewporttest. No invalid-submit/keyboard/motion/livepass claimed. OneFINALretry2allowed,next exactfalseflags;leadownsresidueaftercap.
