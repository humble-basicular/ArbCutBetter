# Stage-B findings: betonogaminiai.lt

Agency's own earlier build. Extends and corrects `../v4-betono-detail.md`. Paths are relative to `~/.ai-powerhouse/research-captures/arbcut-v4/betonogaminiai.lt/`. y offsets are native pixels inside the cited file, approximate. Measured = `record.json` or `bulk-interactions.json`. By eye = read from the screenshot. Taste is labelled.

## Coverage

| Template (groups.json) | Pages | Real content | Full size |
|---|---|---|---|
| t00 product/* | 11 | One product template | 4 at both widths: `plastikinis-dangtis-780-pe-juodas`, `kontrolinis-stebejimo-liukas-1-5-t`, `plastmasinis-sulinio-dangtis`, `istatomasis-…-p-315-40-t`. Other 7 on sheets only |
| t01 product-tag/* | 4 | Real 404 page | `product-tag__ketus` both widths. Other 3 on sheets |
| t02 /1 | 3 | Mixed: `apie-mus`, `betono-gaminiai`, `paslaugos` | All, both widths |
| t03 /1 | 3 | Mixed: `galerija`, `privatumo-politika`, `suliniu-kasimas` | All, both widths |
| t04 home | 2 | `home`; `naujienos` redirects to `/` | `home` both widths. `naujienos` on sheets; first 1440 segment has no pixel difference from home at threshold 24 |
| t05 /1 | 2 | `plasmases-ir-ketaus-gaminiai`; `product-category…` redirects to it | First both widths. Second on sheets; first 1440 segment differs only in a 43×3 px strip |
| t06 betono-gaminiai/* | 2 | Price catalogue | Both, both widths |
| t07 paslaugos/* | 2 | Service article | Both, both widths |
| t08 one-off | 1 | `kontaktai` | Both widths |
| t09 one-off | 1 | `paslaugos__transporto-paslaugos` | Both widths |

- Sheets viewed: 10/10 at 1440, 10/10 at 390. Index flags set: 20/20.
- Full-size frames viewed: 1440 38/60; 390 129/189 (as native 3-frame strips). All 22 + 60 unviewed frames belong to the 7 sheet-only products, 2 redirects and 3 duplicate 404s.
- First viewports: 390 native for 17 pages. 1440 native for 3 (`home`, `suliniu-kasimas`, product `juodas`); 14 more at half scale in a montage, which counts as a sheet, not full size. `plastmasinis` and `istatomasis` first viewports not viewed at either width.
- Flagged (6): 4 × `http-404` (intended 404 page, status 404, so the 4 tag URLs are dead); `privatumo-politika` and `suliniu-kasimas` `skeleton-deviates(0.75)`, which are simply different layouts grouped together.
- Could not be judged: no page was blocked. Overflow: `scrollWidth` equals viewport on all 31 pages at both widths. 360 px not captured.

## Numbers (measured)

| Item | 1440 | 390 |
|---|---|---|
| Home H1 | Oswald 44/55, 600, white | 30/36 |
| Inner H1 | Oswald 44/52.8, 700, white | 30/36 |
| Section H2 | Montserrat 40/50, 700 (home, gallery, first on hub/about); 32/42 others | 28/38; 26 |
| Card H2 | Montserrat 26/31, 600 | 22/28 |
| Table title H3 | 24/30, 500 | not pulled |
| Article H2/H3 | 22/30 and 22/29.7, 700 (visually same level) | same |
| Form title H3 | 24/26.4, 600, white | 24 |
| Product H1 | Montserrat 28/35, 700 | 28 |
| Product tile title | 15/20.25, 500 | 13 |
| Desktop header | 187 px static; `nav is-stuck` 68 px after scroll | n/a |
| Mobile header | n/a | 66 px fixed |
| Mobile bar `.mbar` | n/a | about 58 px by eye, so about 124 px fixed; about 232 px with the cookie card |
| Inner hero | 330 px, so content starts at y517 of a 900 viewport | 190 px; 228 product; 269 longest product breadcrumb |
| Home hero | 868 px | 447 px |

Page heights 1440/390: home 5166/7120; about 3823/6105; hub 2616/4201; rings 3662/8097; covers 2980/6450; `suliniu-kasimas` 6663/11471; gallery 5277/4674; contact 2341/3466; products about 2457–2651/3687–3928.

Colours: text `rgb(21,21,21)`; page `rgb(250,250,250)`; white cards; copyright band `rgb(245,245,245)`; button `rgb(37,117,170)`, hover `rgb(29,101,150)`; `rgb(52,152,219)` and `rgb(30,115,190)` also present; cream `rgb(251,243,226)` on the two catalogue pages only.

## Per template

**Home.** Header over hero, centred eyebrow, H1, two buttons; three whole-card service links overlap the hero edge; about; 6-photo gallery; full-bleed yard banner; form + why + stats; wave; footer. No scroll reveals; stats are count-up numbers (captured mid-count as 16/1714/402 in `_interactions/home-_/1440/03-form-0-invalid.jpg`).

**Hubs (`betono-gaminiai`, `paslaugos`).** Short hero, title + subtitle, link cards. `paslaugos` alternates text and factory photos, then four service cards at the very end (`paslaugos/1440/segment-002400.jpg` y0–610; about y4,800+ of 6,128 at 390).

**Catalogue (t06).** Tables left, cream price card and form right. At 390 each row is a card. Rings adds FAQ and a worked price sum; covers adds the `L`/`A` key.

**Service (t07, transporto, `suliniu-kasimas`).** Short hero, long article, alternating images, closing form with a one-paragraph prompt. `Dominanti prekė` is prefilled per service (`Šulinio kasimas`, `Transporto paslauga`, `Lietaus nuotekų sistema`, `Vietinė kanalizacija`). `suliniu-kasimas` adds a rail on desktop, but on 390 the form arrives at about y8,580 of 11,471.

**Category and product.** Hero shows the category name, not the product. Then 4-up tiles or photo + buy box, one-tab `Aprašymas`, four `Panašūs produktai`. 8 of 11 products say `Kaina pagal užklausą`; 3 show prices. The same few tiles recur as related products.

**404 and privacy.** 404 has a link list and a call button. Privacy is five short plain-language sections with a working-looking `Slapukų pasirinkimas` link (not tested).

**Footer.** Logo, legal IDs, contacts, socials, map placeholder, five links. All columns remain at 390, but only five links exist: no about, gallery or individual services. Wave is on home only.

**Mobile menu.** Right drawer with a logo and all routes in nested lists (`_interactions/home-_/390/02-menu-open.jpg`). `Galerija` and `Šulinių kasimas` each appear twice. Desktop dropdowns: none detected.

**Forms.** Required: name and phone only. Optional: email, product, question. Honeypot `svetaine` and source fields present. `Gauti kainą` opens the same form in a dialog with focus on name (`_interactions/home-_/390/04-cta-open-18.jpg`).

## Corrections to `v4-betono-detail.md`

1. Home form is not pulled up at 1440: it starts about 30 px below the banner (`home/1440/segment-002400.jpg` y1406 vs y1436). Only the service panel overlaps.
2. Uppercase vs sentence case is not home vs inner: `galerija` and hub `ŠULINIAI` are inner pages and use uppercase.
3. Mobile `UŽSAKYTI` is not card-wide: it spans the text column only (about x101–363 in a x15–375 card, `betono-gaminiai__suliniu-ziedai/390/segment-000844.jpg`).
4. Ring thumbnails are not one repeated tile: ring shape and colour vary by row. They share a blue backdrop and an unreadable label, so they read similar at 64 px.
5. The cookie card and sticky bar limit no longer applies: 1440 segments and 390 frames are free of fixed UI.
6. Prior "no lazy-load failure": `record.json` lists one incomplete image on every page sampled (`dangtisB…webp`). No blank was visible; cause unknown.

## Copy

1. **Rows to cards with key value top right.** Price stays scannable, no horizontal scroll. `betono-gaminiai__suliniu-ziedai/390/segment-000844.jpg`. Make the action card-wide.
2. **Spec facts beside real kit.** Bold capacities next to four real truck photos; ArbCut's 20 m lift fits this exactly. `paslaugos__transporto-paslaugos/1440/segment-000000.jpg` y577–1122.
3. **Side-by-side evidence opening a service page.** Two real well photos compare quality before any copy. `suliniu-kasimas/1440/segment-000000.jpg` y577–1057. Put captions under the photos, not on them.
4. **Prefilled enquiry per service.** Fewer fields to complete and better lead context. `paslaugos__transporto-paslaugos/1440/segment-000000.jpg` y1406+.
5. **Two required fields.** Name and phone only, plus `Arba skambinkite` under submit.
6. **Reserved colour for one meaning.** Cream means price, on two pages only. `betono-gaminiai__suliniu-ziedai/1440/segment-000000.jpg` y577–1298.
7. **Semantic callouts.** Blue for a note, red for `Atsargiai, pavojus!`. `suliniu-kasimas/1440/segment-004800.jpg` y208 and y735. Useful for DIY tree-felling risk, using existing `bb63bd8` copy only.
8. **Worked example.** `529 € su PVM` with what is excluded. `betono-gaminiai__suliniu-ziedai/1440/segment-002400.jpg` y523.
9. **Useful 404.** Real status, links and call button. `product-tag__ketus/1440/segment-000000.jpg`.
10. **Mobile two-action bar.** Filled `SKAMBINTI`, white `GAUTI KAINĄ`; header + bar about 124 px, under the 200 px limit. `home/390/first-viewport.jpg`.
11. **Official legal details.** Company code, VAT and address in the footer add plain credibility. Show only ArbCut's real details. `home/1440/segment-004800.jpg`.
12. **Clean hero with a visible subject.** Home is the best image use on the site. `home/1440/first-viewport.jpg`.

## Avoid

1. **Burned-in domains.** On most product and job photos, and cut off by grid cells. `galerija/1440/segment-000000.jpg`, `home/1440/segment-002400.jpg` y1280.
2. **One action, six labels.** `Užsisakyti`, `Užsakyti`, `Gauti pasiūlymą`, `Gauti kainą`, `Išsiųsti pranešimą`, plus `Skambinti`. Breaks learnings rule 25.
3. **Proof mismatch.** `15 metų` copy vs `21 Darbo metų` tile on the same page. `home/1440/segment-000000.jpg` y1469, `segment-002400.jpg` y1944. Breaks rule 5.
4. **Home-made proof only.** No review, rating or third-party mark on any viewed page. No owner or team portrait; people appear only in a video still and a few job photos.
5. **Too many devices** (count 5): hand-drawn underline, two-tone rule, blue pictograms, form header block, home wave. Rule 9 allows two.
6. **Two button systems.** Flat square vs rounded glossy with outline. `home/1440/segment-000000.jpg` y1646.
7. **Three play buttons.** Indigo ring, white ring, YouTube red. `paslaugos/1440/segment-000000.jpg`, `home/1440/segment-002400.jpg`, `betono-gaminiai/1440/segment-000000.jpg`.
8. **Mixed image languages on service pages.** Low-res supplier diagrams with a ghost `HD` mark, cut-outs in white boxes on a tinted page, 3D renders. `paslaugos__lietaus-nuoteku-surinkimo-sitemos/1440/segment-000000.jpg` y838 and y1685.
9. **Header + hero cost.** 517 px before content on every inner page, and the rings photo reused with lids cropped off at 1440. `suliniu-kasimas/1440/first-viewport.jpg`.
10. **Hero not naming the page.** Product hero shows the category; at 390 product name and price fall below the first screen. `product__plastikinis-dangtis-780-pe-juodas/390/first-viewport.jpg`.
11. **Long unbroken mobile article.** 11,471 px with no accordion or jump links, form at about y8,580. On desktop the right rail is empty for about 4,000 px of capture (stickiness untested). `suliniu-kasimas/1440/segment-002400.jpg`.
12. **Prompt beside a tall form.** Two lines of text next to a 640 px form leaves a void. `paslaugos__lietaus-nuoteku-surinkimo-sitemos/1440/segment-002400.jpg` y280.
13. **Contact repetition.** Big map placeholder directly above footer map. `kontaktai/1440/segment-000000.jpg` y1459.
14. **CMS residue.** `Rodomi visi rezultatai: 11`, a single-tab `Aprašymas`, dead `/product-tag/` URLs, misspelt slugs (`plasmases`, `sitemos`).
15. **Over-long measure.** Full 1,140 px text lines. `apie-mus/1440/segment-000000.jpg` y734.
16. **Ambiguous codes.** Same code on rows with different diameters (`ŠD 7–0,48–0,11 L`, `ŠZ 7–7 DU`). `betono-gaminiai__betoniniai-suliniu-dangciai/1440/segment-000000.jpg`.
17. **Duplicate gallery photo and ragged rows.** Same cover stack twice in `Gaminių galerija`, y722 and y1302; 11 and 26 photos leave 2-cell last rows.
18. **Weak wraps.** Orphan `t` in tiles (`product__plastikinis-dangtis-780-pe-juodas/1440/segment-000000.jpg` y1944).

Taste: premium feel comes from catalogue precision and real kit. Dated feel comes from the glossy buttons, wave, clip-art-like blue pictograms and the logo's unreadable embedded domain. The site's raster pictograms are specific to the trade yet still feel generic, so a raster set alone will not satisfy rule 6's intent. Whether the home and hub hero images are composites: I do not know.

360 risk: at 390, `BETONINIAI ŠULINIŲ ŽIEDAI` and `Ar pristatote betono gaminius?` already run nearly edge to edge. No mid-word break seen in viewed frames.

## Candidate key screenshots

1. `betono-gaminiai__suliniu-ziedai/390/segment-000844.jpg`: best mobile pattern.
2. `betono-gaminiai__suliniu-ziedai/1440/segment-000000.jpg`: prices, cream rail, form.
3. `paslaugos__transporto-paslaugos/1440/segment-000000.jpg`: specs beside real fleet.
4. `suliniu-kasimas/1440/segment-000000.jpg`: comparison proof and rail.
5. `home/1440/first-viewport.jpg`: visible real subject, plus header weight.
6. `galerija/1440/segment-002400.jpg`: strong real work damaged by watermarks.

## Gaps

- Not viewed full size: 7 products, 2 redirects, 3 duplicate 404s (sheets only).
- Not tested here: `UŽSAKYTI`, header `Užsisakyti` and product `Gauti pasiūlymą` destinations (buttons, not links in `record.json`; only the mobile bar dialog is proven), desktop burger, video play, map load, lightbox (the interaction script found none; gallery cells have no links), validation messages (the `invalid-phone` frames show no error, but no submit occurred).
- Turnstile: an empty slot shows at 1440 and on transporto at 390, the widget elsewhere at 390. Treated as capture timing, not a site defect.
- Hero overlay strength is by eye. 1440 first viewports for 14 pages were judged at half scale.
