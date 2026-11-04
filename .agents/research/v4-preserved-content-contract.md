# ArbCut v4 preservation contract — bb63bd8

Status: independent source analysis; no visual-reference study, implementation or live verification. All source references below mean **`git show bb63bd8:<path>`**, not the mutable worktree. Exact symbols and line anchors identify the contract. The current board and `2026-11-04-2015-arbcut-v4-design-brief.md` were read; no AGENTS.md was found in this checkout or checked ancestor directories. User-supplied global instructions apply.

## Binding scope

The brief's user decision is “Keep copy, section order, SEO and function from commit `bb63bd8`.” Therefore every baseline visible string, data-driven variant, ordered list, heading, link destination, attribution and action is preserved unless separately approved. This report's recommendations do not authorize changes. Styling, spacing, typography, image framing and restrained motion may change; new copy, reordered sections, fabricated trust marks, changed pricing, new submission channels and silently removed links may not. Implementation still requires the lead's approved proposal. No sync, publication, form submission, paid API or browser was used here.

## Route inventory (source enumeration, not inherited claim)

`getStaticPaths` in `src/pages/paslaugos/[slug].astro`, `src/pages/[vietove].astro`, and `src/pages/tinklarastis/[slug].astro` maps the complete `paslaugos`, `vietoves`, and `straipsniai` arrays respectively. `src/data/vietoves.js::vietoves` derives from `site.vietoves`; it is not an additional city inventory.

**12 static HTML outputs + 12 services + 9 towns + 4 articles = 37 HTML outputs**, including `/404` and `/success`. Thus 36 non-error HTML pages, 33 indexable HTML candidates after excluding privacy, terms, success and 404. `/llms.txt` is a separate generated text endpoint (38 page/endpoint outputs including 404); assets, robots and generated sitemaps are not HTML routes. These are source-derived counts, not a build/sitemap assertion.

- **Static HTML**: `/`, `/404`, `/apie`, `/atsiliepimai`, `/galerija`, `/kainos`, `/kontaktai`, `/paslaugos`, `/privatumo-politika`, `/success`, `/taisykles`, `/tinklarastis`.
- **Services**: `/paslaugos/avariniu-medziu-pjovimas`, `/paslaugos/darbai-su-autoboksteliu`, `/paslaugos/medziu-genejimas`, `/paslaugos/kelmu-naikinimas-frezavimas`, `/paslaugos/saku-isvezimas`, `/paslaugos/medziu-lajos-stabilizavimas`, `/paslaugos/gyvatvoriu-karpymas`, `/paslaugos/dazymo-darbai-aukstyje`, `/paslaugos/reklaminiu-iskabu-montavimas`, `/paslaugos/lietvamzdziu-stogo-valymas`, `/paslaugos/audros-isverstu-medziu-salinimas`, `/paslaugos/kiti-aukstuminiai-darbai`.
- **Towns**: `/medziu-pjovimas-kaunas`, `/medziu-pjovimas-vilnius`, `/medziu-pjovimas-panevezys`, `/medziu-pjovimas-marijampole`, `/medziu-pjovimas-alytus`, `/medziu-pjovimas-jonava`, `/medziu-pjovimas-kedainiai`, `/medziu-pjovimas-kazlu-ruda`, `/medziu-pjovimas-taurage`.
- **Articles**: `/tinklarastis/kiek-kainuoja-medzio-pasalinimas`, `/tinklarastis/ar-reikia-leidimo-pjauti-medi`, `/tinklarastis/kaip-atpazinti-pavojinga-medi`, `/tinklarastis/medis-uzvirto-ant-namo`.

## Template order and content ownership (requirements)

All pages use `BaseLayout`: skip link → Header → `main#main` page content → Footer → shared quote dialog/lightbox/mobile actions. `PageHero` renders breadcrumbs → kicker → H1 → lead → slot → optional call/quote controls, with optional real photograph. Keep action-disabled variants. Preserve one page H1 and baseline heading text/levels; the appendix records literal headings and dynamic expressions.

| Template/source | Required content sequence after shared header |
|---|---|
| `pages/index.astro` | Hero (H1 + short callback form) → Emergency → Services → Moments → Press → SendPhotos → ReviewBoard → AreaMap → “Klausimai prieš skambinant” with call/SMS/quote and `Faq(dukPradzia, openFirst)` |
| `pages/paslaugos/index.astro` | PageHero “Paslaugos” → ServiceIndex grouped ordered service rows → CtaBand “Nerandate savo atvejo?” |
| `pages/paslaugos/[slug].astro` | PageHero `d.h1` → main: “Kada kreiptis”, “Kaip atliekame darbą”, “Mūsų darbai”; parallel price/preparation/quote aside → conditional job Sequences “Taip tai atrodo realiai” → selected reviews → service FAQ → related services and same-group remainder alongside town links → service-aware CtaBand |
| `pages/[vietove].astro` | localized PageHero → town introduction and removal restriction alongside grouped services → reviews → town FAQ → other towns → localized CtaBand |
| `pages/apie.astro` | PageHero → “Kaip dirbame” values/photos → “Su kuo dirbame” equipment → selected reviews → “Susisiekite tiesiogiai” contact facts → CtaBand |
| `pages/kainos.astro` | PageHero → grouped linked price tables with provenance; parallel price factors and conditional real review example → photo preparation instructions alongside price FAQ + price article link → CtaBand |
| `pages/galerija.astro` | PageHero → “Nuo pradžios iki sutvarkytos vietos” / Sequences → “Visos nuotraukos” category filters/count/grid → CtaBand |
| `pages/atsiliepimai.astro` | PageHero with source/date/rating, external profile/write actions (standard hero actions disabled) → all `suTekstu` original reviews with author/date/service/stars → CtaBand |
| `pages/kontaktai.astro` | PageHero (actions disabled) → phone/email/hours/base/social/profile/town links alongside “Užklausa” full form; no page CtaBand |
| `pages/tinklarastis/index.astro` | PageHero “Patarimai” (actions disabled) → ordered article list (title/description/read time) → CtaBand |
| `pages/tinklarastis/[slug].astro` | dated PageHero (actions disabled) → unmodified `s.turinys` HTML alongside phone/quote aside → conditional `s.duk` FAQ → every other article → CtaBand |
| privacy / terms | PageHero (actions disabled) → complete legal prose in existing heading order; no page CtaBand |
| success / 404 | status heading and explanation → call plus home/services recovery links respectively; retain noindex |

`src/data/paslaugu-turinys.js::{grupes,detales,sekos,galerijosKategorijos,galerijosAlt}` owns service grouping, titles/descriptions/H1, introductions, eligibility, steps, price factors, preparation, images, related slugs, FAQs and job sequences. Preserve each keyed record and its array order, not merely template labels. `src/data/turinys.js::{duk,dukPradzia}`, `src/data/vietoves.js::{turinys,vietoves}`, `src/data/straipsniai.js::straipsniai` and `src/data/spauda.js` likewise own verbatim body copy, town grammar, article markup and sourced press quotes. These data files remain the exhaustive content oracle; this report does not paraphrase them into replacement copy.

## Internal-link contract (requirements)

- `Header.astro::{nav,isActive}`: home logo; Paslaugos menu grouped links to all 12 services + `/paslaugos`; Darbai `/galerija`, Kainos, Atsiliepimai, Apie, Kontaktai in that order. Mobile repeats main destinations and grouped services. Preserve current-page state, SMS/call and quote controls.
- `Footer.astro`: all grouped service links, all nine town links, gallery/prices/reviews/about/blog links, legal links; phone/SMS/email, Facebook, Paslaugos.lt and actual LRT/Valstietis destinations. Blog discovery is in footer, not header main nav.
- Service index, home service cards and prices link to service details; service detail links to gallery, `d.susijusios`, remaining same-group services and all towns. Town pages link all applicable services (exclude `saku-isvezimas` outside base), and every other town. Do not convert anchors to decorative cards/buttons or remove crawlable hrefs.
- Home preserves gallery, press source, review index/source/write and town paths; `Faq.astro` preserves optional `q.nuoroda`. Article HTML links are part of `s.turinys`, not optional decorations; articles cross-link every other article. Price FAQ links stump service and price article. Contacts lists all towns. Keep `#top`, `#main`, `#duk`, `#atsiliepimai` and component IDs/actions used by scripts.
- Literal and generated href expressions are inventoried below. Preserve external URL, rel/target and tel/SMS/mailto semantics, not only internal URLs.

## Metadata and schema (requirements)

`BaseLayout.astro::{pageTitle,desc,canonical,ogImg,schemaList,robots}` owns LT document language, per-page title/description, production-origin canonical derived from pathname, OG name/title/description/type/URL/locale/image and Twitter large-image card. Keep page-specific props exactly, including dynamic service `d.title/d.description`, city title/description with base-only removal claim, article title/description/date and service image override. Styling tokens/fonts/theme-color/favicon artwork are visual choices, not SEO copy; updating an approved logo requires coherent asset/schema references.

`src/data/jsonld.js::{localBusiness,faqPage,serviceSchema,articleSchema,breadcrumbs}`: retain LandscapingBusiness `/#business`, NAP/founder/geo/hours/areaServed/catalog/sameAs; service provider reference and conditional EUR offer description; FAQ exact visible question/answer pairs; BlogPosting author/publisher/date/headline/image; ordered absolute BreadcrumbList. No AggregateRating or Review schema: baseline explicitly excludes third-party reviews. Legal pages supply breadcrumbs alone; fallback business schema only applies when no explicit schema array is supplied. Home = business+home FAQ; service = business+service+FAQ+breadcrumbs; town/prices = business+their FAQ+breadcrumbs; articles = business+article+optional FAQ+breadcrumbs; other ordinary pages = business+breadcrumbs.

`astro.config.mjs`: preview disables sitemap integration; production sitemap filters privacy/terms/success. `BaseLayout` applies `noindex,nofollow` to preview and explicit noindex pages (also 404). Preserve `public/robots.txt` and `pages/llms.txt.js::GET` (derived business facts/prices/review provenance). Do not infer sitemap membership/count from HTML route count; actual build not run. Preview needs noindex/inert behavior regardless of visual appearance.

## Conversion and interaction (requirements)

`site.js::site`: preserve Mantas Gerulis, +370 603 66901 / `tel:+37060366901` / `sms:+37060366901`, existing Yahoo email, daily 08:00–18:00, Kaunas base, 20 m own lift, removal only Kaunas/Kaunas district, source-qualified prices and review facts. No new 24/7, guaranteed arrival, coverage or certification promises.

`QuoteForm.astro`: homepage short variant requires telephone (≥8 digits); optional problem message. Full dialog/contact form requires name, telephone and message; optional service/locality; preserve submitted field names, service option values/slugs, labels/autocomplete, photo instructions via SMS/email (no upload field). Production remains POST Web3Forms with existing keys/subject/from_name, honeypot, hCaptcha and `/success` redirect. Preview omits provider credentials/captcha and prevents network submission; displays explicitly unsent status and increments `__arbcutPreviewSubmits`. Preserve error alert, invalid-field focus and success-status focus. No production success is claimed here.

`site.js` behavior blocks are the exact interaction oracle: menu click/outside/Escape/focusout and aria state; mobile close/Escape/Tab loop/scroll lock/focus return; `[data-quote]` dialog opening, `[data-service]` preselection, mobile-menu closure, first-field focus, close/backdrop/focus restoration. Preserve all matching hooks or update markup and script together with equivalent verification. Native FAQ details, gallery filter pressed state/count, grouped visible-image lightbox navigation/caption/arrow keys/backdrop/focus return, click-to-load map, mobile action hiding during field focus and reduced-motion reveal fallback remain functional.

`ReviewBoard.astro::{items,PER,svcs,hasGoogle}`: newest text-bearing entries (≥20 characters), capped at 36; six desktop/four mobile per increment; source/service filters combine, reset limit, announce count/empty state, hide exhausted load-more and focus first added review. Service filter list derives from ≥2 matching entries, top four; Google filter exists only with actual Google entries. `ReviewCard.astro` preserves original review, source/date/service/stars and expand/collapse. `atrinkti.js::atrinkti` selection and `suTekstu` full archive must remain; no invented or rewritten testimonials.

`GoogleProfile.astro` + `site.js` Google block: separate platform scores, Paslaugos.lt dominant; no combined totals. Baseline `site.google.placeId` is empty: preview honest “Ruošiamas” placeholder; production renders no Google card. With real ID/key, production loads near viewport, preview only on click, with attribution, source/write links and failure fallback. Live Google content is contingent, not a verified baseline integration; do not invoke paid APIs to demonstrate it.

`BaseLayout.astro` always loads `site.js`; tracker import condition stays inside script (known Astro script-index pitfall). Production `inquiry-track.ts` counts call/form-open/form-submit using page/location/referrer class/mobile, no personal fields; preview has neither tracker import nor jw-site marker. Preserve valid `data-loc` attribution. Keep accessible skip/main targets, dialog names, labels, focus styles, hidden-state behavior and touch-reachable call/SMS/quote controls.

## Visual recommendations (not new requirements or approval)

Use a clearer display/body type contrast and readable Lithuanian diacritics; establish H1 → section heading → price/action → explanatory detail without changing text or heading semantics. Give real work photos, original reviews and press attribution enough space to read; frame rather than replace evidence. Distinguish primary phone action from secondary quote/SMS while retaining all actions and their locations in the sequence. Use spacing, lighter surfaces and purposeful image crops to differentiate adjacent sections; keep service price and related preparation visually associated. Responsive columns can stack in their baseline reading order; do not use CSS ordering to bypass the approved sequence. Motion may be subtle and reduced-motion-aware, with content accessible without animation. Logo/palette/new creative choices require the lead's user-approved proposal.

## Verification and remaining gaps

Verified by read-only git object extraction and source enumeration: baseline templates, array-driven routes, shared components/scripts, current brief and board. Only this report is authored/staged/committed. No build, browser, network, form, Google integration, indexing or runtime accessibility check was performed. Future implementation owner must compare generated visible content/headings/link graph/meta/schema against this commit and run isolated preview interactions at mobile/desktop. Existing discrepancy: `/apie` description hardcodes “122 atsiliepimai” while shared review data can differ; preserve/report this, do not silently repair during a visual-only pass. Google ID/key availability and client factual confirmation remain outside this analysis. Hook visual research remains with the lead.

## Mechanical source appendix

Expressions below are exact source anchors, not rendered replacement copy. For full text including inline markup and dynamic values use the named baseline source and data symbol. Source line numbers are baseline line numbers.

### `src/pages/404.astro`

```astro
6: <BaseLayout title="Puslapis nerastas — ArbCut" description="Tokio puslapio nėra." noindex={true}>
10: <h1>Tokio puslapio nėra</h1>
13: <a class="btn btn--primary" href="/paslaugos">Paslaugos</a>
14: <a class="btn btn--line" href={site.telefonasHref} data-loc="not-found"><Icon name="phone" size={18} /> {site.telefonas}</a>
```

### `src/pages/[vietove].astro`

```astro
33: <BaseLayout title={title} description={description} schemas={[localBusiness(), faqPage(townFaq), breadcrumbs([{ name: 'Pradžia', path: '/' }, { name: `Medžių pjovimas ${v.kur}`, path: `/${v.slug}` }])]}>
35: title={`Medžių pjovimas ${v.kur}`}
46: <h2>{isBase ? 'Kaunas ir Kauno rajonas' : `Ką darome ${v.kur}`}</h2>
60: <li><a href={`/paslaugos/${s}`}><span>{detales[s].trumpas}</span><small>{byslug[s].kaina}</small><Icon name="arrow" size={16} /></a></li>
71: <div class="sec-head"><p class="kicker">DUK</p><h2>Klausimai apie darbus {v.kur}</h2></div>
78: <ul role="list" class="others">{kitos.map((k) => <li><a href={`/${k.slug}`}>Medžių pjovimas {k.kur}</a></li>)}</ul>
81: <CtaBand title={`Medis ${v.kur}? Aptarkime.`} />
```

### `src/pages/apie.astro`

```astro
15: title="Apie ArbCut — arboristas aukštalipys Mantas Gerulis su komanda"
16: description="ArbCut — arboristas aukštalipys Mantas Gerulis su komanda. Alpinistinė įranga, nuosavas autobokštelis iki 20 m, bazė Kaune. 122 atsiliepimai Paslaugos.lt."
20: title="Mantas Gerulis ir ArbCut komanda"
32: <h2>Kaip dirbame</h2>
52: <h2>Su kuo dirbame</h2>
55: <li><div class="ph eq__ph"><Photo name="autobokstelis-pusyne" alt="ArbCut autobokštelis tarp aukštų pušų" sizes="(max-width: 860px) 100vw, 30vw" /></div><h3>Nuosavas autobokštelis iki 20 m</h3><p>Medžių pjovimas ir genėjimas, latakai, dažymas, iškabos — be technikos nuomos ir pastolių.</p></li>
56: <li><div class="ph eq__ph"><Photo name="pusis-alpinistas" alt="Arboristas su alpinistine įranga aukštoje pušyje" sizes="(max-width: 860px) 100vw, 30vw" position="50% 25%" /></div><h3>Alpinistinė įranga ir virvės</h3><p>Kai bokštelis neprivažiuoja ar reikia aukščiau nei 20 m — lipame į medį ir nuleidžiame dalis virvėmis.</p></li>
57: <li><div class="ph eq__ph"><img src="/assets/images/galerija/galerija-73.jpg" alt="Fiskaras kraunantis šakas" width="283" height="230" loading="lazy" /></div><h3>Fiskaras išvežimui</h3><p>Kaune ir Kauno rajone šakas ir medieną išvežame patys (talpa nuo 20 m³).</p></li>
70: <h2>Susisiekite tiesiogiai</h2>
73: <li><span>Telefonas</span><a href={site.telefonasHref} data-loc="about-call">{site.telefonas}</a></li>
74: <li><span>El. paštas</span><a href={`mailto:${site.elPastas}`}>{site.elPastas}</a></li>
77: <li><span>Facebook</span><a href={site.facebook} target="_blank" rel="noopener">MesGalimeTaiPadaryti <Icon name="external" size={14} /></a></li>
78: <li><span>Atsiliepimai</span><a href={site.atsiliepimai.profilis} target="_blank" rel="noopener">Paslaugos.lt profilis <Icon name="external" size={14} /></a></li>
```

### `src/pages/atsiliepimai.astro`

```astro
14: title={`Atsiliepimai apie ArbCut — ${rating} iš 5, ${atsiliepimuKiekis} atsiliepimai Paslaugos.lt`}
15: description={`Klientų atsiliepimai apie ArbCut ir Mantą Gerulį iš Paslaugos.lt profilio: ${rating} iš 5, ${atsiliepimuKiekis} atsiliepimai. Originalūs tekstai su data.`}
18: <PageHero title="Atsiliepimai" kicker="Paslaugos.lt" lead={`Visi žemiau esantys atsiliepimai parašyti mūsų profilyje Paslaugos.lt. Tekstai pateikti originalūs, nekeisti. Profilio įvertinimas — ${rating} iš 5 (${atsiliepimuKiekis} atsiliepimai, duomenys ${atsiliepimuSinchronizuota}).`} crumbs={[{ label: 'Atsiliepimai' }]} actions={false}>
20: <a class="btn btn--primary" href={site.atsiliepimai.profilis} target="_blank" rel="noopener">Profilis Paslaugos.lt <Icon name="external" size={16} /></a>
21: <a class="btn btn--line" href={site.atsiliepimai.paliktiUrl} target="_blank" rel="noopener">Parašyti atsiliepimą</a>
```

### `src/pages/galerija.astro`

```astro
12: title="Atlikti darbai: medžių pjovimas ir darbai aukštyje | ArbCut"
13: description="Realios ArbCut darbų nuotraukos: pavojingų medžių pjovimas dalimis, audros padariniai, darbai aukštyje, kelmų frezavimas ir gyvatvorės."
16: <PageHero title="Atlikti darbai" kicker="Realios nuotraukos" lead="Nuotraukos iš mūsų darbų — be stockinių vaizdų. Pirmiausia trys darbai nuo pradžios iki pabaigos, žemiau — visa galerija pagal darbų tipą." crumbs={[{ label: 'Darbai' }]} />
20: <div class="sec-head"><p class="kicker">Darbo eiga</p><h2>Nuo pradžios iki sutvarkytos vietos</h2></div>
28: <div><p class="kicker">Galerija</p><h2>Visos nuotraukos</h2></div>
```

### `src/pages/index.astro`

```astro
18: title="Medžių pjovimas Kaune ir darbai aukštyje iki 20 m | ArbCut"
19: description="Arboristas aukštalipys Mantas Gerulis su komanda: pavojingų medžių pjovimas dalimis, genėjimas, kelmai, autobokštelis iki 20 m. Kaunas ir iki 200 km. +370 603 66901."
34: <h2 id="duk-h">Klausimai prieš skambinant</h2>
37: <a class="call__tel" href={site.telefonasHref} data-loc="faq-call"><Icon name="phone" size={34} /> {site.telefonas}</a>
40: <a class="btn btn--primary btn--sm" href={site.smsHref} data-loc="faq-sms"><Icon name="sms" size={20} /> Siųsti nuotraukas</a>
```

### `src/pages/kainos.astro`

```astro
23: title="Medžių pjovimo kainos ir kas jas lemia | ArbCut"
24: description="Orientacinės ArbCut kainos: medžių pjovimas ir genėjimas nuo 50 €, kelmų frezavimas nuo 75 €, išvežimas nuo 80 €. Kas lemia galutinę kainą ir kaip ją sužinoti greičiau."
28: title="Kainos ir kas jas lemia"
39: <h2>{g.pavadinimas}</h2>
44: <tr><th scope="row"><a href={`/paslaugos/${s}`}>{detales[s].h1}</a></th><td>{byslug[s].kaina}</td></tr>
54: <h2 class="pr__h">Kas lemia kainą</h2>
77: <h2>Atsiųskite tai, ką matote</h2>
84: <a class="btn btn--primary" href={site.telefonasHref} data-loc="prices-call"><Icon name="phone" size={18} /> {site.telefonas}</a>
87: <p class="mute">Nuotraukas galite siųsti el. paštu <a href={`mailto:${site.elPastas}`}>{site.elPastas}</a>.</p>
90: <h2 class="pr__h2">Klausimai apie kainą</h2>
92: <p class="mute pr__more">Plačiau: <a href="/tinklarastis/kiek-kainuoja-medzio-pasalinimas">Kiek kainuoja medžio pašalinimas Lietuvoje?</a></p>
```

### `src/pages/kontaktai.astro`

```astro
11: title="Kontaktai — ArbCut, Kaunas · +370 603 66901"
12: description="Susisiekite su ArbCut: +370 603 66901, aukstuminiai.darbai@yahoo.com. Kasdien 08:00–18:00. Bazė Kaune, išvykstame ir į kitus miestus."
15: <PageHero title="Kontaktai" kicker="Susisiekite" lead="Greičiausia — paskambinti. Jei patogiau rašyti, užpildykite formą ir, jei galite, atsiųskite nuotraukų el. paštu." crumbs={[{ label: 'Kontaktai' }]} actions={false} />
19: <a class="ct__big" href={site.telefonasHref} data-loc="contact-call"><Icon name="phone" size={28} /><span><small>Telefonas</small>{site.telefonas}</span></a>
20: <a class="ct__row" href={`mailto:${site.elPastas}`}><Icon name="mail" size={20} /><span><small>El. paštas</small>{site.elPastas}</span></a>
24: <a class="link-arrow" href={site.facebook} target="_blank" rel="noopener">Facebook <Icon name="external" size={14} /></a>
25: <a class="link-arrow" href={site.atsiliepimai.profilis} target="_blank" rel="noopener">Paslaugos.lt profilis <Icon name="external" size={14} /></a>
29: <p>{vietoves.map((v, i) => <><a href={`/${v.slug}`}>{v.miestas}</a>{i < vietoves.length - 1 ? ' · ' : ''}</>)}</p>
33: <h2>Užklausa</h2>
```

### `src/pages/paslaugos/[slug].astro`

```astro
49: <BaseLayout title={d.title} description={d.description} schemas={schemas} ogImage={p.nuotrauka}>
51: title={d.h1}
65: <h2>Kada kreiptis</h2>
69: <h2>Kaip atliekame darbą</h2>
73: <h2>Mūsų darbai</h2>
81: <a class="link-arrow" href="/galerija">Visa darbų galerija <Icon name="arrow" size={16} /></a>
96: <a class="btn btn--line" href={site.telefonasHref} data-loc="service-side-call"><Icon name="phone" size={18} /> {site.telefonas}</a>
106: <div class="sec-head"><p class="kicker">Darbo eiga</p><h2>Taip tai atrodo realiai</h2></div>
120: <h2>Klausimai apie {d.trumpas.toLowerCase()}</h2>
130: <h2 class="rel__h">Dažnai užsakoma kartu</h2>
133: <li><a href={`/paslaugos/${s.slug}`}><span>{detales[s.slug].h1}</span><small>{s.kaina}</small><Icon name="arrow" size={16} /></a></li>
137: <p class="rel__more">Kitos {grupe.pavadinimas.toLowerCase()} paslaugos: {kitos.filter((k) => !d.susijusios.includes(k)).map((k, i, arr) => <><a href={`/paslaugos/${k}`}>{detales[k].trumpas}</a>{i < arr.length - 1 ? ', ' : ''}</>)}</p>
142: <h2 class="rel__h">Kaunas ir kiti miestai</h2>
145: {vietoves.map((v) => <li><a href={`/${v.slug}`}>{v.miestas}</a></li>)}
151: <CtaBand title={`${d.trumpas}: aptarkime jūsų atvejį`} service={slug} />
```

### `src/pages/paslaugos/index.astro`

```astro
9: title="Paslaugos: medžių pjovimas, genėjimas, kelmai, autobokštelis | ArbCut"
10: description="Visos ArbCut paslaugos: pavojingų medžių pjovimas, audros padariniai, genėjimas, lajos stabilizavimas, kelmų frezavimas, išvežimas, gyvatvorės ir darbai aukštyje iki 20 m."
14: title="Paslaugos"
20: <CtaBand title="Nerandate savo atvejo?" text="Papasakokite, ką reikia padaryti aukštyje ar su medžiu — dažniausiai sprendimą randame." />
```

### `src/pages/privatumo-politika.astro`

```astro
11: <BaseLayout title={title} description={description} noindex={true} schemas={schemas}>
12: <PageHero kicker="Teisinė informacija" title="Privatumo politika" crumbs={[{ label: 'Privatumo politika' }]} actions={false} />
18: <h2>Kokius duomenis renkame</h2>
26: <h2>Kam naudojame duomenis</h2>
33: <h2>Saugojimas</h2>
36: <h2>Jūsų teisės</h2>
37: <p>Galite bet kada kreiptis ir paprašyti susipažinti su savo duomenimis, juos ištaisyti arba ištrinti. Tam susisiekite: <a href={site.telefonasHref} data-loc="privacy-rights">{site.telefonas}</a> arba <a href={`mailto:${site.elPastas}`}>{site.elPastas}</a>.</p>
39: <h2>Slapukai</h2>
43: <h2>Kontaktai</h2>
44: <p>{site.pavadinimas}, {site.savininkas}<br />Tel.: <a href={site.telefonasHref} data-loc="privacy-contact">{site.telefonas}</a><br />El. paštas: <a href={`mailto:${site.elPastas}`}>{site.elPastas}</a></p>
```

### `src/pages/success.astro`

```astro
6: <BaseLayout title="Ačiū — ArbCut" description="Ačiū už užklausą — susisieksime artimiausiu metu." noindex={true}>
10: <h1>Ačiū! Susisieksime artimiausiu metu.</h1>
13: <a class="btn btn--primary" href={site.telefonasHref} data-loc="success-card"><Icon name="phone" size={18} /> {site.telefonas}</a>
14: <a class="btn btn--line" href="/">Į pradžią</a>
```

### `src/pages/taisykles.astro`

```astro
11: <BaseLayout title={title} description={description} noindex={true} schemas={schemas}>
12: <PageHero kicker="Teisinė informacija" title="Naudojimosi taisyklės" crumbs={[{ label: 'Naudojimosi taisyklės' }]} actions={false} />
18: <h2>Informacijos pobūdis</h2>
21: <h2>Užklausos ir susitarimai</h2>
24: <h2>Paslaugų atlikimas</h2>
27: <h2>Intelektinė nuosavybė</h2>
30: <h2>Kontaktai</h2>
31: <p>{site.pavadinimas}, {site.savininkas}<br />Tel.: <a href={site.telefonasHref} data-loc="terms">{site.telefonas}</a><br />El. paštas: <a href={`mailto:${site.elPastas}`}>{site.elPastas}</a></p>
```

### `src/pages/tinklarastis/[slug].astro`

```astro
23: <BaseLayout title={`${s.title} | ArbCut`} description={s.aprasymas} schemas={schemas}>
24: <PageHero title={s.title} kicker={`${fmt} · ${s.skaitymas}`} crumbs={[{ label: 'Tinklaraštis', href: '/tinklarastis' }, { label: s.title }]} actions={false} />
33: <a class="btn btn--primary" href="tel:+37060366901" data-loc="blog-cta"><Icon name="phone" size={18} /> +370 603 66901</a>
41: <section class="sec sec--white rule-top"><div class="wrap art2"><h2>Dažni klausimai</h2><Faq items={s.duk} /></div></section>
46: <ul role="list" class="more">{kiti.map((k) => <li><a href={`/tinklarastis/${k.slug}`}>{k.title}<Icon name="arrow" size={16} /></a></li>)}</ul>
```

### `src/pages/tinklarastis/index.astro`

```astro
10: title="Patarimai apie medžius: kainos, leidimai, pavojingi medžiai | ArbCut"
11: description="Praktiški arboristo patarimai: kiek kainuoja medžio pašalinimas, ar reikia leidimo, kaip atpažinti pavojingą medį ir ką daryti, jei medis užvirto ant namo."
14: <PageHero title="Patarimai" kicker="Tinklaraštis" lead="Atsakymai į klausimus, kuriuos klientai užduoda dažniausiai." crumbs={[{ label: 'Tinklaraštis' }]} actions={false} />
19: <li><a href={`/tinklarastis/${s.slug}`}>
```

### `src/components/home/AreaMap.astro`

```astro
20: <h2 id="area-h">Kur važiuojame</h2>
25: <a href={`/${v.slug}`}>
```

### `src/components/home/Emergency.astro`

```astro
13: <h2 id="sos-h"><Icon name="alert" size={52} /> Medis nuvirto ar tuoj virs?</h2>
17: <a class="sos__tel" href={site.telefonasHref} data-loc="sos-call"><Icon name="phone" size={30} /> {site.telefonas}</a>
18: <p><strong>Kasdien 08:00–18:00</strong>, ir savaitgaliais.<br /><a href="/paslaugos/audros-isverstu-medziu-salinimas">Audros padarinių šalinimas, nuo 50 €</a></p>
```

### `src/components/home/Hero.astro`

```astro
19: <h1>Medžių pjovimas ir darbai aukštyje Kaune</h1>
22: <a class="hero__tel" href={site.telefonasHref} data-loc="hero-call">
29: <li><a href={site.atsiliepimai.profilis} target="_blank" rel="noopener"><span class="hero__stars" aria-hidden="true">★★★★★</span> <b>{rating}</b> iš 5 · {atsiliepimuKiekis} atsiliepimai Paslaugos.lt</a></li>
31: <li>Apie Mantą rašė <a href={lrt.url} target="_blank" rel="noopener"><b>LRT.lt</b></a></li>
36: <h2 id="hc-h">Kiek kainuos?</h2>
42: <a class="btn btn--ink btn--sm" href={site.smsHref} data-loc="hero-sms"><Icon name="sms" size={20} /> SMS</a>
43: <a class="btn btn--line btn--sm" href={`mailto:${site.elPastas}?subject=${encodeURIComponent('Medžio nuotraukos kainai')}`} data-loc="hero-mail"><Icon name="mail" size={20} /> El. paštu</a>
```

### `src/components/home/Moments.astro`

```astro
14: <h2 id="mom-h">Taip atrodo darbas</h2>
16: <a class="link-arrow" href="/galerija">Daugiau darbų nuotraukų <Icon name="arrow" size={20} /></a>
```

### `src/components/home/Press.astro`

```astro
14: <h2 id="press-h" class="sr-only">Apie Mantą rašė LRT.lt ir Valstietis.lt</h2>
37: <a class="link-arrow" href={lrt.url} target="_blank" rel="noopener">Skaityti visą interviu LRT.lt <Icon name="external" size={18} /></a>
43: <a href={valstietis.url} target="_blank" rel="noopener">Skaityti Valstietis.lt <Icon name="external" size={16} /></a>
```

### `src/components/home/ReviewBoard.astro`

```astro
22: <h2 id="rvb-h">Ką rašo klientai</h2>
44: <p class="rvb__empty" data-rv-empty hidden>Šiam filtrui atsiliepimų tarp naujausių nėra. <a href="/atsiliepimai">Žiūrėti visus</a></p>
47: <a class="link-arrow" href="/atsiliepimai">Visi atsiliepimai svetainėje</a>
64: <a class="btn btn--ink btn--sm" href={P.url} target="_blank" rel="noopener">Visi atsiliepimai Paslaugos.lt <Icon name="external" size={16} /></a>
65: <a class="link-arrow" href={site.atsiliepimai.paliktiUrl} target="_blank" rel="noopener">Parašyti atsiliepimą</a>
```

### `src/components/home/SendPhotos.astro`

```astro
12: <h2 id="snd-h">Atsiųskite nuotraukas. Pasakysime kainą.</h2>
15: <figcaption>Mantas Gerulis, <a href={valstietis.url} target="_blank" rel="noopener">Valstietis.lt</a></figcaption>
21: <h3>Ką nufotografuoti</h3>
31: <a class="btn btn--primary snd__big" href={site.smsHref} data-loc="photos-sms"><Icon name="sms" size={24} /> Siųsti SMS {site.telefonas}</a>
32: <a class="btn btn--line" href={`mailto:${site.elPastas}?subject=${subj}`} data-loc="photos-mail"><Icon name="mail" size={22} /> El. paštu</a>
34: <p class="snd__mail">El. paštas: <a href={`mailto:${site.elPastas}?subject=${subj}`}>{site.elPastas}</a></p>
```

### `src/components/home/Services.astro`

```astro
33: <h2 id="svcs-h">Ką darome ir kiek kainuoja</h2>
40: <a href={`/paslaugos/${t.slug}`}>
43: <h3>{t.h}</h3>
56: <h3 class="board__h">{g.pavadinimas}</h3>
60: <a href={`/paslaugos/${s}`} class="board__row">
71: <p class="board__foot">Valandinis darbas nuo 20 €/h. <a href="/kainos">Kas lemia kainą</a> · <a href="/paslaugos">Visos paslaugos</a></p>
```
