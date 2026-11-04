# ArbCut v4: betonogaminiai.lt detail study (partial)

Status: PARTIAL, stopped at the soft input budget. 7 of 25 routes viewed at both widths; 88 of 279 captured frames viewed. The full-scope request is not met. Coverage at the end is authoritative. A route counts as viewed only when its sheets were opened.

## Homepage (viewed: 7/7 desktop frames, 9/9 mobile frames)

Evidence: `/tmp/arbcut-v4-betono-detail/sheets/home-1440-{0,1}.jpg`, `home-390-{0,1,2}.jpg`. DOM/CSS from T3 preview at 1280 px.

| # | Section (DOM) | Desktop | Mobile |
|---|---|---|---|
| 1 | `header.hdr--overlay` 187 px | Transparent over hero: logo, hours, phone/email, `Užsisakyti` CTA, then Oswald nav row. Compacts to a dark translucent sticky bar with nav + phone | Black bar 67 px: logo, round blue call button, burger. Bottom sticky bar `SKAMBINTI` / `GAUTI KAINĄ` |
| 2 | `section.hero` 868 px, H1 | Real product still life (rings, green and black lids) under a dark overlay; centred eyebrow + two-line Oswald H1 44 px/600; two CTAs | Same image cropped, H1 three lines, CTAs stack full width |
| 3 | 3 service cards, H2 26 px | White panel overlaps hero bottom edge; 3 columns, hairline dividers, blue line icons, arrow links | Separate stacked bordered cards, no overlap |
| 4 | `Apie mus` H2 40 px | Title left + subtitle right with two-tone rule; text left, video thumbnail right; 15 years and 2005 emphasised inline | Stacked; title, subtitle, rule, text, then video |
| 5 | `Gaminių galerija` | 3-col portrait crops, burned-in watermark text, then `Žiūrėti daugiau nuotraukų` | 2-col |
| 6 | `section.banner` 627 px | Full-bleed yard photo: blue factory + ring pyramid, play button, burned-in domain | Same, shorter |
| 7 | `why` | Form card pulled up left, copy right, 3 stat tiles 21 / 2236 / 524 in Oswald | Form first, copy, stacked tiles |
| 8 | `footer.ftr` | Blue layered wave divider, logo + legal IDs, contacts, map card, link list | Stacked; wave kept |

Mechanics observed: Astro build (`Base.astro_astro_type_script`), Montserrat variable + Oswald, fallback font metrics, `#2575AA` buttons, radius 0 on header CTA, footer credit `Programavimas: jarvisweb.lt`.

Capture limits: the cookie card covers the lower left on desktop and about 115 px above the bottom bar on mobile in every frame. With the 67 px header and bottom bar, mobile frames show about 640 px per 800 px step, so bands can be hidden.

## /apie-mus/ (viewed: 5/5 desktop, 8/8 mobile)

Evidence: `sheets/apie-mus-1440-{0,1}.jpg`, `apie-mus-390-{0,1}.jpg`.

- Inner hero is a short band, not the home hero: solid dark header (no overlay), dimmed yard photo, centred Oswald H1 `APIE MUS`. About 260 px of the first desktop frame after the header; mobile about 185 px.
- Title pattern switches to sentence case here (`Dailius ir ko`, `Mūsų gaminiai`), with a hand-drawn blue underline under the last word. Home uses uppercase for the same component.
- `Mūsų gaminiai`: text and a tall factory photo (Hyster pallet truck, ring on a blue rig) side by side; this is the strongest real-kit image so far, though a white burned-in domain crosses it.
- Three inline links inside the product list (`Betoninių šulinių dangčiais`, `Ketaus…`, `Plastikiniais…`) in blue italic; the other list items are plain. Links exist only where a page exists.
- `Kokybė ir patikimumas` mirrors the layout (video left, text right), then the form card + `Kodėl verta rinktis mus` + stats, then `Mūsų tikslas` closing in bold italic.
- Footer here has no wave (the home page does). Grey page tint with a hairline replaces it.
- Mobile: tall photo and video stack directly, form lands mid-page, three stat tiles stack and consume about 450 px.

DOM vs visual: H1 `Apie mus`, H2 `Dailius ir ko`, H2 `Mūsų gaminiai`, H2 `Kokybė ir patikimumas`, H3 `Gauti pasiūlymą`, H2 `Kodėl verta rinktis mus`, H2 `Mūsų tikslas`. Visual order matches DOM order. The H3 form title renders larger than its level suggests.

## /betono-gaminiai/ (viewed: 4/4 desktop, 6/6 mobile)

Evidence: `sheets/betono-gaminiai-1440-0.jpg`, `betono-gaminiai-390-{0,1}.jpg`.

- Hub page: dim band hero (rings and a culvert with running water), H1 `BETONO GAMINIAI`, then `ŠULINIAI` with the subtitle `Įgyvendiname jūsų viziją – tai ir darome`.
- Two equal link cards (`Šulinių žiedai`, `Betoniniai šulinių dangčiai`), each icon, title, text, arrow. On desktop the first card's content is behind the cookie card in the y0 frame and behind the sticky bar in y800, so its top is only confirmed on mobile.
- Form card left, `Seno tipo:` / `Nauji gaminiai:` comparison right, then a YouTube facade (real production photo, red play button).
- Form sits before the explanation it depends on. On mobile the form separates the cards from the comparison by about 700 px.

DOM vs visual: `Seno tipo:` and `Nauji gaminiai:` are H2 at the same level as `Šuliniai`, though they read as subheads of one comparison.

## /betono-gaminiai/suliniu-ziedai/ (viewed: 5/5 desktop, 11/11 mobile)

Evidence: `sheets/betono-gaminiai-suliniu-ziedai-1440-{0,1}.jpg`, `-390-{0,1,2}.jpg`.

- Price-led catalogue page. Desktop: main column of three spec tables (`Šulinio žiedai`, `Paaukštinimai`, `Šulinio žiedai su dugnu`) with thumbnail, code, weight, dimensions, blue bold price and a `UŽSAKYTI` button on every row.
- Right rail: cream `Mūsų kainynas` card with `ATSISIŲSTI PDF`, then the form card. The cream fill is the only warm surface found so far, and it marks price information.
- Mobile transformation is the best pattern on the site: each table row becomes a card with thumbnail, code, price top right, a two-column spec grid and a full-width `UŽSAKYTI`. No horizontal scroll was visible in any frame. Cost: 11 frames, the longest catalogue page.
- Mobile order moves the rail below the tables, so `Mūsų kainynas` and the form arrive after the FAQ.
- FAQ is plain H3 + paragraph, always open, with no accordion. `Kainos skaičiavimo pavyzdys` works the sum through in prose and bolds `529 € su PVM`.
- Thumbnails are tiny product photos on a blue backdrop with a burned-in label, repeated across rows, so the repetition reads as a stock tile.

DOM vs visual: H2 `Šulinio žiedai geriamo vandens šuliniams` then H3 per table, H2 FAQ, H3 per question. This matches the visual order on desktop. `Mūsų kainynas` is H3 and comes after the FAQ in DOM order, which matches mobile rather than the desktop rail position.

## /betono-gaminiai/betoniniai-suliniu-dangciai/ (viewed: 4/4 desktop, 8/8 mobile)

Evidence: `sheets/betono-gaminiai-betoniniai-suliniu-dangciai-1440-0.jpg`, `-390-{0,1}.jpg`.

- Same template as rings. Adds a two-line key (`L` lengvo tipo, `A` armuoti) in blue before the tables, so the code letters are explained once instead of per row.
- Three tables: `Šulinio perdangos su anga`, `Šulinio dangčiai be angos`, `Šulinio dugnai – padai`. No FAQ on this route.
- Hero reuses the ring image on desktop. Mobile crop shows rings plus lids, so the same asset reads differently per width.

## /galerija/ (viewed: 7/7 desktop, 6/6 mobile)

Evidence: `sheets/galerija-1440-{0,1}.jpg`, `galerija-390-{0,1}.jpg`.

- Two titled groups, `Gaminių galerija` and `Darbų galerija`, in a tight 3-col grid (2-col on mobile) with about 5 px gaps and uniform crops. No captions in the page layout; all labelling is text burned into the photos.
- Photography is the site's strongest proof: excavator setting a ring, tripod and hoist over a dug shaft, crane truck, trench, finished green lids in real gardens. It is also uneven: phone snapshots, mixed colour, watermarks in several fonts and sizes, some cropped mid-word by the grid.
- Last rows are ragged (2 of 3 cells filled) in both groups.
- Lightbox behaviour not tested.

## /kontaktai/ (viewed: 3/3 desktop, 5/5 mobile)

Evidence: `sheets/kontaktai-1440-0.jpg`, `kontaktai-390-{0,1}.jpg`.

- H1 `Mūsų kontaktai`, H2 `Susisiekite su mumis`, form left, legal block and four contact cards right (small uppercase label, bold value, blue line icon): phone, email, hours, coordinates.
- Full-bleed map placeholder (static gradient, pin, `Atidaryti Žemėlapiuose`, `Rodyti žemėlapį`) directly above a footer holding a second smaller map, and the same contact details again. Mobile shows the details about three times.
- Mobile puts the form first, so phone and hours cards come after roughly a screen of fields; the sticky `SKAMBINTI` bar offsets this.

## Cross-route findings (7 viewed routes only)

| Area | Observed | Status |
|---|---|---|
| Type | Oswald for H1, nav, stats; Montserrat for everything else. Home H1 44/55 px weight 600 uppercase; section H2 40/50 px 700; card H2 26/31 px 600 | Measured on home at 1280 px only |
| Title device | Hand-drawn blue underline on the last word, plus a two-tone rule under subtitles | Seen on all 7 |
| Colour | White and `#FAFAFA`-range tints, black header, `rgb(37,117,170)` buttons, cream only for price cards | Button and footer values measured; rest by eye |
| Heroes | One large home hero; inner routes use a short dimmed band that hides much of the photo | Seen on all 7 |
| Layering | Service panel over the hero is the main overlap on home; form card pulled into content is the other | Seen |
| Proof | Founded 2005, `15 metų`, stats 21 / 2236 / 524, real photos, prices on the page. No reviews or ratings on the viewed routes | Seen; site's own figures, not verified |
| CTA | Header `Užsisakyti`, per-row `UŽSAKYTI`, repeated form card, mobile bar `SKAMBINTI` / `GAUTI KAINĄ` | Seen; destinations not tested |
| Semantics | One H1 per checked route. Visual order follows DOM on the viewed routes, except the desktop rail on catalogue pages. Form title is H3 and footer columns are H2 site-wide | DOM fetched from 15 routes |
| Build | Astro script bundle, LocalBusiness/Organization JSON-LD on home, one JSON-LD block on all 15 fetched routes | Observed |

Inference: the footer credit `Programavimas: jarvisweb.lt` suggests this is the user's own agency build. Not confirmed.

## Reusable rules for ArbCut v4

These are research recommendations, not an approved proposal. They change presentation only: `bb63bd8` copy, order, SEO and function stay, and no sections are added.

1. Let one real photo carry the hero, with a light overlay. Betono's inner bands show how heavy dimming wastes real photography.
2. Keep one overlap per page, placed where it does a job, as the home service panel does.
3. Keep photos clean. Burned-in domains are the largest quality loss on the viewed routes, which fits the approved clean photographic direction.
4. Use a tight uniform grid only with consistent crops, and handle the ragged last row.
5. Turn dense rows into mobile cards with the key value top right and a full-width action, as the catalogue pages do.
6. Use one reserved colour for one meaning, as cream marks price here.
7. Keep two-action mobile access (call, quote), and check that consent UI does not stack over it and hide content.
8. Show contact details once per screen area; avoid a second map directly above the footer map.
9. Keep one title case across pages. Betono mixes uppercase and sentence case for the same component.
10. Align heading levels with what is visible, within what `bb63bd8` already defines.

## Coverage

Captured: 25 routes, 2 widths, 279 frames (114 desktop, 165 mobile). Viewed: 88 frames.

| Route | Desktop | Mobile | Live DOM headings |
|---|---|---|---|
| `/` | 7/7 | 9/9 | yes, plus computed CSS |
| `/apie-mus/` | 5/5 | 8/8 | yes |
| `/betono-gaminiai/` | 4/4 | 6/6 | yes |
| `/betono-gaminiai/suliniu-ziedai/` | 5/5 | 11/11 | yes |
| `/betono-gaminiai/betoniniai-suliniu-dangciai/` | 4/4 | 8/8 | yes |
| `/galerija/` | 7/7 | 6/6 | yes |
| `/kontaktai/` | 3/3 | 5/5 | yes |
| `/paslaugos/` | 0/5 | 0/8 | yes |
| `/paslaugos/transporto-paslaugos/` | 0/4 | 0/5 | yes |
| `/paslaugos/lietaus-nuoteku-surinkimo-sitemos/` | 0/5 | 0/9 | yes |
| `/paslaugos/vietine-kanalizacijos-irengimas/` | 0/5 | 0/9 | yes |
| `/plasmases-ir-ketaus-gaminiai/` | 0/4 | 0/7 | yes |
| `/privatumo-politika/` | 0/3 | 0/4 | yes |
| `/suliniu-kasimas/` | 0/9 | 0/15 | yes |
| `/product/kontrolinis-stebejimo-liukas-25-t/` | 0/4 | 0/5 | yes |
| 10 other `/product/…` routes | 0/40 | 0/50 | no |

## Known gaps

- 18 routes have no visual inspection; 191 frames remain, all with sheets ready in `/tmp/arbcut-v4-betono-detail/sheets/`.
- Not tested: mobile menu, desktop burger, gallery lightbox, video play, map load, `UŽSAKYTI` destination. The FAQ was seen only as static open text on `suliniu-ziedai`. No forms were submitted.
- Viewed frames are 720 px downscales on desktop; no detail crops were made.
- Every frame carries the cookie card. Mobile frames show about 640 px per 800 px step, so bands can be hidden between frames. The mobile copyright row appears in no viewed mobile frame.
- Computed CSS is from home at 1280 px, not 1440 or 390.
- No lazy-load failure was seen on the viewed routes; the other routes are unchecked.
- `capture-manifest.json` still shows `inspected: false`; that file is outside this task's ownership.
