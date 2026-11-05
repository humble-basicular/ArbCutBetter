# ArbCut v4: everything learned from the research and the feedback

Date: 2026-11-05 09:06 Europe/Vilnius. Author: Claude (Opus 5.5), lead. Written at the user's request: "surašyk viską exactly ką išmokai ir pasižymėjai iš šito viso research process", then review it again.
Sources: `v4-hook-deep-study.md`, `v4-betono-detail.md`, `v4-vensland-detail.md`, `v4-preserved-content-contract.md`, the design brief `handoffs/2026-11-04-2015-arbcut-v4-design-brief.md`, the brain `~/WebAgency Biz/brains/04-websites.md`, and user feedback on 4 and 5 Nov.

## 1. What was actually studied

The user asked whether the reference sites were analysed page by page. **They were not.** Only a minority of the pages was looked at:

| Reference | Pages that exist | Pages actually viewed | Interactions |
|---|---|---|---|
| Hook article | 1 article, 10 screenshots | All 10 screenshots, full text | n/a |
| Puetz | 241 sitemap URLs | Homepage only, desktop and mobile, at full depth | Services hover, Resources, quote slide-out, mobile menu, one FAQ |
| Genz-Ryan | 326 | Homepage desktop, mobile panels 00–05 (not the footer) | None |
| Northface | 354 | Homepage desktop and mobile (29 frames) | None |
| Home Front | 51 | Homepage desktop and mobile | None |
| Veterans, Thelen, GreenTek | 184 / 244 / 400 | Captured, **never viewed** | None |
| Smock, True Air, Bear's | 264 / 47 / 142 | **Never captured** (403 in headless; T3 preview not tried) | None |
| Glassperts | ? | **Never loaded** (timeout) | None |
| VensLand | 22 | Homepage and 10 service pages. **10 locality pages and the privacy page never viewed** | None |
| Betono | 25 | 7 of 25 | None |

So "studied the references" means **home pages plus a few inner pages**. Inner pages of the best references (service pages, galleries, review pages, contact pages) are almost entirely unseen. That gap matters: the inner pages are where ArbCut's 37 routes live.

## 2. User feedback log (what was rejected and why)

| When | What | Verdict (verbatim where available) |
|---|---|---|
| v2 `32986e5` | Cream paper, Source Serif, tiny labels, numbered ledgers | "Absolute horror" |
| v3 `bb63bd8` | Dark forest everywhere, Oswald capitals, rust buttons, flat rectangles | "so slop", though better in weight. Copy, order, SEO and function are kept |
| v4 mockup `0b6201d`, 5 Nov | Hero with orange call button and four round text stamps | "looks shit", "i still feel ai slop" |
| Same | Phone pictogram | "the photo svg is horrible, fking dont even ever use svgs for pictograms". It was actually a Unicode `✆` glyph (`v4-proposal/mock.html:77,82,91,93`), which is the same problem |
| Same | Stamp "LRT / rašė apie Mantą" | "nesąmonė rašyti LRT rašė apie Mantą. Nu čia slopas" |
| Same | Trust in general | Use official marks: the actual Google logo, the actual Paslaugos.lt logo, the LRT logo. "the more official it looks, the more trust" |
| Same | Judging a mockup | "i cant really judge this if the site is not done" |
| Answers, 5 Nov | Mantas cut-out on the homepage | Yes |
| Same | Baltic States Tree Climbing Championship 2023 | Yes, he competed. **Placement unknown**: say only that he took part |
| Same | Logo | Current logo is "kinda bland". Make three new ones |

## 3. What the references taught, per site

### Puetz (best-studied page)
- The strongest moment is the "Puetz Promise" band: **a real person (owner and dog) cut out over a large logo mark, with his signature.** This is a real artefact, not an invented graphic.
- **Trust comes from recognisable third-party marks**: a row of real supplier logos and a rating ribbon docked on the photo corner. Their mobile version of the logo row is too tall (about 1,164 px): cap its height.
- One colour system (navy, red, tan), two devices only (ribbon, Minnesota watchtower shape), square red actions, calm white space.
- Weaknesses: four floating widgets compete, and a chat prompt covers the form submit; one action has four labels; the review count differs between the hero (363+) and the widget (375+).
- SEO: a small descriptive H1 (services and region) with a large brand H2. Service cards are whole links with real text, which gives descriptive anchors.

### Genz-Ryan
- **It reads as a brand because the same three colours and the same devices repeat everywhere** (tilted yellow label, sunburst, offset red edge). It reads as busy because every section adds another block, badge or button pair.
- Reviews use the **actual Google mark**, red stars and named reviewers on white cards.
- The city links are a readable, descriptively linked two-column list: SEO presented as navigation.
- The 206 px fixed header is too heavy. Five seals become unreadable on mobile.

### Northface
- Closest to the "clean photographic" direction: white reading surface, blue anchor bands, yellow actions, a geometric sans in sentence case.
- **Real worker, team and fleet photography is the strongest identity on the page.** Generic family photos weaken it.
- Ratings are docked in the base of the form, so the proof sits beside the action.
- The mobile footer drops the service and locality columns. ArbCut must not lose its crawl links through responsive CSS.

### Home Front
- The owner cut-out over red logo geometry, with a signed statement, is the same move as Puetz and again the most distinctive section.
- One repeated shape (opposing rounded corners) holds the site together without extra devices.
- Review section: white cards, source stars and author initials.

### Hook article (10 first screens)
- 6 of 10 have a form or card crossing a section edge.
- **All 10 heroes show a real house, team or family**, never an abstract background.
- Every rating in the launch mockups is shown as a **source logo plus stars** (Google, BBB, etc.), not as home-made text.
- Launch-quality failures they had: placeholder phone, lorem ipsum, empty tiles.

### Betono (the agency's own build)
- Price tables become mobile cards with the price top right and a full-width action. This is the best mobile pattern found.
- One reserved colour for one meaning (cream = price).
- Burned-in watermarks on photos are the biggest quality loss. Inner heroes dim real photos too much. Uppercase and sentence case are mixed for the same component.

### VensLand (the build to beat)
- Good: phone and quote in the header at every width, a layered form with a logo tab, one large lead image with "Žiūrėti visas nuotraukas (120)", and FAQ contact attached to a photo.
- Bad: the hero photo is darkened until it shows nothing; ten services in equal tiles take 4,150 px on mobile; the grass edge repeats until it is wallpaper; a one-off gold colour; system text ("Saugumo patikra…") shown to customers; an H1 breaks mid-word at 390 (`EKSKAVATORIAU / S`); service pages carry no proof and tiny job photos.

## 4. Rules, consolidated

### Trust and proof (rewritten 5 Nov after the user's feedback)
1. **Show proof with official marks**, never as home-made text badges:
   - Google reviews: the actual Google "G" logo, stars and the rating/count from the live profile.
   - Paslaugos.lt: the actual Paslaugos.lt logo, 5,0 and 123 atsiliepimai, linked to the profile.
   - Press: the actual LRT.lt and Valstietis.lt logos as a "Apie mus rašė" press row, each linking to the article, as `bb63bd8` already does in text (`Hero.astro:31`, `Footer.astro:27`).
   - Use each owner's official logo file without changes. Do not redraw marks, recolour them, or put them in made-up seals.
2. Only real facts: 5,0/123 Paslaugos.lt, 15 metų, 20 m lift, LRT.lt, Valstietis.lt, Baltic States Tree Climbing Championship 2023 (participant only).
3. **Never invent proof copy.** The v4 stamp "savas bokštelis" is not in `bb63bd8` (git grep: no match), and "rašė apie Mantą" as a stamp label is slop. Copy comes from `bb63bd8`. Where a mark replaces words, the original words stay as the link's accessible name.
4. Keep proof beside the action (Northface rating dock, Puetz ribbon), but use one proof cluster per screen, not a row of five seals.
5. Proof numbers must match everywhere they appear. Puetz's mismatch is the warning.

### Pictograms and graphics (new rule, 5 Nov)
6. **No SVG, icon-font or Unicode-glyph pictograms.** Pictograms come from Codex `imagegen` as a matching raster set in one style, made for this brand, or the element uses a real photo, or no pictogram at all. Claude does layout and code; Codex makes the imagery. The brain's 25 Oct rule against generated SVG logos already pointed this way.
7. Official third-party logos are not pictograms. Use the owner's file as supplied, even when that file is SVG.

### Identity
8. Identity comes from **real artefacts**: Mantas, his lift, his gear, his work, the official marks and a real logo. Invented decoration (arches, discs, stamps, waves, grass edges) does not create it. The references that feel like brands (Puetz, Home Front, Northface) all lean on a real person or real crew.
9. Two brand devices at most, repeated consistently (Genz shows repetition makes a brand; Genz also shows too many devices make noise).
10. Logo: a wide logo-plus-name design, made with Codex `imagegen`. Three variants, user picks. No text placeholder in mockups once variants exist.

### Layout and photography
11. Hero photos stay visible: light overlay or none. Never darken the subject away (VensLand, Betono).
12. One overlap per page, where it does a job (form or proof crossing the hero edge).
13. Services need a hierarchy (a lead service, varied sizes) and a short mobile run.
14. A large lead image plus a count for the gallery. Captions under photos, not on them.
15. No burned-in text or watermarks. `medziu-genejimas.jpg` and `about-collage.jpg` are out.
16. Ask Mantas for original full-size photos. Only about 5 current photos reach 1,500 px.

### Mobile
17. Phone and quote in the header at every width plus a light fixed call/quote bar. Fixed header and bar together must not take 200 px.
18. Floating elements never cover a form submit or a heading.
19. Rows become cards (Betono) and steps become a vertical sequence (VensLand). Never shrink a desktop row.
20. Test the longest Lithuanian words and diacritics (`Į Ž Ū Ę Ą`) in display type at 360 and 390 before approval.
21. The mobile footer keeps every service and locality link.

### SEO and design together
22. Descriptive H1 with exact service and region. A brand line may be larger, within the headings `bb63bd8` already has.
23. Whole-card links with real text. Locality links styled as useful navigation.
24. The same primary content on mobile; accordions are fine; reviews are not hidden on mobile.
25. One label per action across the site.

### Process (how to avoid slop next time)
26. **The user judges built pages, not mockups.** The approval artefact should be a real built homepage on this branch, on the noindex preview, at true size. Desktop zoomed to 0.6 inside an HTML page hides how a site feels.
27. Finish the study of the inner pages before proposing inner pages.
28. Check every element of a mockup against rules 1–7 before showing it. Any glyph icon, home-made badge or invented phrase fails.

## 5. Review: why the v4 mockup still read as AI slop

I re-read the mockup (`v4-proposal/mock.html`) against the rules above. The causes, specifically:

1. **A row of identical circles holding a number and a caption** is the most common generated-template pattern. It carried no official mark, so it looked self-awarded. The references never do this: they show the source's own logo.
2. **The `✆` glyph** in the call button and the emergency band renders as a different font's character on each device and looks cheap at any size.
3. **Invented copy** ("savas bokštelis", the "rašė apie Mantą" stamp) broke the "keep copy" contract and read as filler.
4. **Generic SaaS styling:** a wide grotesk, an orange rounded button with a soft orange shadow, white pills with drop shadows. Nothing in that hero belonged to tree work.
5. **The identity was built from invented devices** (arch frame, orange disc, stamps) instead of the real artefacts the references rely on.
6. **Placeholder wordmark** ("Arb**Cut**" in text) beside a polished layout makes the whole page feel unfinished.
7. **A scaled mockup** was shown as the approval artefact, which the user cannot judge.
8. **I proposed before the study was complete.** I noted that references use real rating logos, but turned the idea into generic text stamps.

What still stands from the proposal: the palette direction (spruce, shirt orange, light surfaces), Mantas as the hero face (now approved), one overlap per page, sentence-case headings, the motion rules, the `bb63bd8` order, and the mobile rules.

## 6. Inputs still needed

| Input | From | Status |
|---|---|---|
| Official logos: Google "G", Paslaugos.lt, LRT.lt, Valstietis.lt | Brand pages / press kits | Not collected. Check each owner's usage terms |
| Three ArbCut logo variants | Codex `imagegen` | Not started |
| Pictogram set (phone, SMS, pin, clock, etc.) | Codex `imagegen` | Not started |
| Original full-size photos, landscape work shots | Mantas | Not requested yet (needs the user; no client messages from agents) |
| Championship evidence (photo, start list) | Mantas | Optional: it would let the site show a real photo |
| Remaining reference pages (section 1) | Lead | Open |
