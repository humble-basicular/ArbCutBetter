# Puetz: inner-page evidence, first US milestone

**Partial study.** Eight complete initial page states viewed at 1440×900 and 390×844. Not the whole website. Further scripted captures remain unviewed; ledger is authoritative. No submissions. Local agency builds are not winning examples.

Evidence root `P` = `/Users/matasbasinskas/.ai-powerhouse/research-captures/arbcut-v4/puetzconstruction.com/`. For each URL below, the matching `P/<slug>/<width>/record.json` contains headings with measured styles, links, forms, image sources and page height. `sheet-N.jpg` combines labelled ordered segments, opened in original detail: desktop at 720px per segment, mobile at 390px. First-viewport captures retain fixed UI; document segments hide it. All **47 segments + 16 first viewports** for these eight pages were viewed. A subsequent larger batch is not part of that count.

## What is actually seen

### Services: /roofing/ and /windows-doors/

Evidence: `P/roofing/{1440,390}/sheet-{0,1,2}.jpg`, `P/windows-doors/{1440,390}/sheet-{0,1}.jpg`; [desktop opening](puetz-service-desktop.jpg), [mobile opening](puetz-service-mobile.jpg).

Desktop has an approximately 70/30 photo-and-form split: service-specific house/roof or windows at left, white form over a pale construction drawing at right. A small tan ribbon carries the descriptive H1; the much larger display H2 carries the sales line. A source-marked testimonial ribbon attaches to the bottom corner, immediately adjacent to the form. Then come alternating photographic explanations, process cards, locality links, project photos, FAQ, review-summary module, blog links, related services and closing crew-photo CTA/footer. Roofing adds separate storm-damage, repair, inspection and replacement sections; windows has an installation-worker photo and a door-specific tan band. So the common system accommodates different content rather than copying the same blocks blindly.

The H1 on roofing is 16px Sen; H2 is 40px `neilvard_semibold_oneregular`; form H3 is 25px; navy headings compute to `rgb(24,44,83)`. These are CSS measurements, not an assertion about font licensing. The display treatment is uppercase; paragraphs use Sen. Navy, red, tan and white are repeated by function: navy anchors, red main actions, tan supporting bands/ribbons, white reading space. Other partner/logotype colours are exceptions, not extra interface accent colours.

Mobile makes a substantial transformation: service photo becomes a separate top strip, and the overlaid white desktop text becomes dark centred text on a white/drawing surface below it. The form follows; proof remains attached to it. Process cards stack, and alternating desktop bands become photo above copy. Project photos become large one-per-row images. A compact bottom menu/phone dock replaces desktop navigation.

Judgement: the useful pattern is **recognisable components plus service-specific evidence and explanation**. Work photos interrupt sales prose at a useful scale. The page does not depend on a large slogan alone. But roofing is 13,805px tall on mobile, and windows is 11,202px; repeating full process, related content and multiple CTAs has a real scrolling cost. The windows “recent projects” module shows roof/framing/building imagery rather than clearly demonstrated window work. That is a relevance weakness, despite a polished component.

Unresolved rendering limitation: several routes contain a raised white rectangle in the locality module; the live contact DOM identifies a Google Maps iframe at that position. Service-page review modules show a summary with no cards in these captures, whereas the dedicated reviews page loads cards. Do not call the blank state intentional negative space or attribute it to site code without further diagnosis. No tracker blocking was used.

### Projects: /projects/

Evidence: `P/projects/1440/sheet-{0,1}.jpg`, `P/projects/390/sheet-0.jpg`; [desktop](puetz-projects-desktop.jpg).

This page drops the service hero and lead form. White header, small ribbon H1, larger page line, project-type filter row, then a two-column grid of six large photos and Load More. Mobile wraps filter controls over several rows and uses a single image column. Photographs include completed siding, foundations, framing and interiors. The common crew CTA and tan footer close the page.

Judgement: **let the work be the content**. The same brand survives without replaying the sales hero. Large images carry more authority than small thumbnail decoration. Weakness: the display heading specifies roofing, while visible categories and photos cover broader work; labels should reflect the actual collection. Initial grid has no persistent job captions. Hover reveals a dark overlay with an Expand control; clicking opens a large photo in a dimmed modal with a close control. Load-more results are unverified.

### Reviews: /customer-reviews/

Evidence: `P/customer-reviews/{1440,390}/sheet-{0,1}.jpg`; [mobile first screen](puetz-reviews-mobile.jpg).

A short grey-olive construction-drawing title band replaces a photo hero. Under a simple title, score/stars/count and a small Write a Review action, the actual review cards dominate: avatar/initial, reviewer, relative date, coloured Google G, red stars and text. Three masonry columns become one mobile column. The first review is extraordinarily long and occupies several mobile screens; the uneven desktop column heights leave substantial white space. Load More follows, then blog links/footer; this route does not need the large crew CTA to carry its identity.

Judgement: **source identity is attached to the testimony, and the testimony outweighs solicitation**. That directly supports the user’s official-proof preference. It is visual evidence of the displayed Google mark, not independent verification of every review or count. The unbounded first card is a mobile scanning defect; a polished proof module still needs controlled reading length.

### About: /about/

Evidence: `P/about/{1440,390}/sheet-{0,1}.jpg`; [desktop](puetz-about-desktop.jpg).

Short split hero: brand-colour story panel next to a roofer at work, rather than a lead form. A narrower reading column introduces the named owner, a large family photograph, personal background and a real organisation-support section with the Cystic Fibrosis Foundation mark. A community/work photo band follows, then three value cards with a matching illustrated style, common crew CTA and footer. Mobile puts the work photo above the opening copy and stacks the story, imagery and values.

Judgement: **specific people and artefacts give generic values something to stand on**. The named family and work images distinguish the story more than the three abstract value cards. Reuse the principle of substantiated identity, not this company’s personal story, charity or imagery. Do not infer supplier or licence status from an unrelated organisation mark.

### Contact: /contact/

Evidence: `P/contact/{1440,390}/sheet-{0,1}.jpg`; [mobile](puetz-contact-mobile.jpg).

Desktop places plain email, phone and street address beside the form, not after a long marketing introduction. The white form sits on a regional landscape image, with source-rating ribbon nearby. Below are a worker cutting masonry, reassurance copy, a locality/map module, blog links and footer. Mobile moves the regional photograph to the top, then contact details, then the form and proof. Form fields: name, email, phone, postcode and message. Fields use pale grey fills and visible placeholder-style labels. Live validation/submission success is not established by a screenshot.

Judgement: **offer a direct channel and a form together, with clear contact details before the mobile form**. Regional imagery contributes place; a large generic nature hero alone would not prove competence, so the worker image matters. The contact form stays visually consistent with service forms despite the different backdrop. The lower blog module is a secondary exit, not the primary conversion path.

### FAQ: /faq/

Evidence: `P/faq/1440/sheet-{0,1}.jpg`, `P/faq/390/sheet-0.jpg`; [mobile](puetz-faq-mobile.jpg).

Same short title-band family as reviews and financing. The main content is a narrower reading column, topic filters and **already-visible answers**, separated by horizontal rules. This differs from the boxed collapsed FAQ components embedded in service/financing pages. Initial eight answers cover company information, licence, materials, timing and financing; Load More follows, then common crew CTA/footer. Mobile wraps filters and keeps questions/answers legible instead of shrinking a desktop sidebar.

Judgement: **the dedicated FAQ is a reference page; the service FAQ is a compact decision aid**. They need not use the same composition to belong to the same site. Useful grouping and readable answers beat a decorative icon beside every question. A Financing filter click was also inspected at all three widths: its navy selected state and financing answers are visible. Complete filtered results and Load More remain unverified.

### Financing: /financing/

Evidence: `P/financing/1440/sheet-{0,1}.jpg`, `P/financing/390/sheet-0.jpg`; [mobile](puetz-financing-mobile.jpg).

Short title band → one crew-at-truck image beside an explanation and Contact Us About Financing action → testimonial ribbon → three boxed FAQ prompts → review summary → blog links → crew CTA/footer. Mobile puts the crew photo before the explanation. The finance provider is named in prose; there is no prominent provider-logo row, loan table, payment calculator or clear rate/term comparison in the viewed page state.

Judgement: the page successfully retains the site’s identity and human photography, but it is a **lead-generation finance explainer**, not evidence for a winning price/comparison page. Do not invent rates, finance features or legal assurances from this layout. A dedicated public-prices reference is still missing from the US evidence.

## Shared identity and the parts not to copy

Seen across these routes: consistent logo, uppercase display type, navy/red/tan system, squared actions, pale drawing/grain surfaces, pointed testimonial ribbons, recurring crew image and forest silhouette footer. These are recognisable even as heroes, content width, imagery and form presence change. Identity is a system; identical page structure is not required.

Footer: desktop has service/resource/company columns; mobile captures retain logo/contact/social/legal but drop those navigation columns. That is a weakness against ArbCut’s explicit requirement to preserve all service/locality links. Some service cards use white line pictograms; their mere presence is not evidence that ArbCut should use them—the user’s pictogram restriction remains binding.

Numbers: phone numbers differ between page sessions and widths. I do not know whether every number is a valid tracking destination. Do not report this as wrong-business contact data solely from visual variation. Different testimonial ribbons also rotate between captures; preserve source/state rather than treating them as fixed copy.

## Read-only interaction evidence

`P/interactions/{1440,390,360}/record.json` records six screenshot states per width. All **18 screenshots** were actually viewed in labelled `overview.jpg` sheets, desktop at half scale and mobile at native width. They are additional interaction evidence, not additional whole-page coverage.

- Project image opens a photograph modal at all three widths. The screenshot contains no explanatory job caption. Mobile screenshots after an artificial hover only establish that rendered state; they do not prove touch users discover a hover affordance.
- Roofing filter produces a selected button and a query-string state. Mobile first-image content changes to aerial roof work. The desktop screenshot still shows the original first house, so complete asynchronous desktop replacement is not established by that shot.
- FAQ Financing filter visibly selects the category and displays finance answers at all widths. No form submission was involved.
- Desktop Services hover exposes a compact white text dropdown. At 390, Menu reveals a centred list with nested-category arrows and social links; the landscape strip above it remains visible. At 360 the shot labelled `menu-open` **still shows the closed menu**, despite the click returning without an error. A working 360 menu is unverified and needs a state-aware retry, not an assertion that it opened.
- The third-party blue text-chat launcher and its introductory bubble can overlap content and sit above the mobile menu/phone dock. This weakens the otherwise restrained brand and crowds small screens. No chat was opened or sent. Contact field DOM was inspected, but validation and submission were not attempted.

## Coverage, inventory and limits

[URL-by-URL ledger](puetz-ledger.json) includes 241 freshly fetched sitemap entries: 162 posts, 78 page entries, and one KML entry. The latter is geodata, excluded from visual-page coverage. Additional same-site navigation/footer URLs and a 404 probe have their own rows; use the machine ledger for the current exact count. Initial plain HTTP sitemap fetch got 403; ordinary headed Chrome loaded the same public sitemap/index and three children with HTTP 200, without any challenge bypass.

The eight routes above have both widths marked viewed. Homepage remains earlier evidence in `../v4-hook-deep-study.md`; do not add it to fresh counts. At the end of this first batch, locality templates and blog hub/articles were not yet analysed; the [second milestone](puetz-articles-localities.md) now supplies five additional fully viewed routes. Remaining unique services, careers, leadership, estimator, legal and utility states are captured but unviewed. No thank-you URL has been established; do not guess one. Representative mappings remain unset until actual template comparisons are made. Full-site completion is not claimed.

## Provisional rules to test against the other US sites

1. Service: service-specific imagery, explanation and relevant proof; shared visual components, different content rhythm. Trim repetition on mobile.
2. Gallery: large photographs, an understandable filter, easy inspection; collection labels match what is shown.
3. Reviews: source mark, author, stars and readable text dominate; keep asking-for-reviews secondary and control mobile card length.
4. About: named people, real work and substantiated facts before value-card decoration.
5. Contact: direct contacts and a consistent form together; details remain easy to find before the mobile fields.
6. FAQ: compact decision aid on a sales page, grouped reference material on its own page.
7. Financing: retain visual identity, but judge actual information and comparison quality separately from polish. Price-page formula still unknown.

These are page-type research rules, not an ArbCut layout proposal or a measured conversion result. Other US sites still need to confirm, refine or contradict them.
