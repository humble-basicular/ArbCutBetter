# ArbCut — integracijos ir paleidimo sąlygos

Atnaujinta 2026-11-11 (šaka `build/arbcut-v5-finish-20261110`).

Sprendimas 2026-11-11 (Matas): dabar forma = paprasta, užklausos keliauja tik el. paštu per Worker'į (ne Web3Forms). Siuntimas į telefoną (SMS/CRM) yra „Offer 2“, vėliau. Svetainėje nuotraukas siūlome siųsti tik el. paštu (SMS/Viber/WhatsApp nuorodų nėra); pokalbių lange – ta pati užklausų forma (`QuoteForm variant="chat"`, žymė „Klausimas iš svetainės“). Visos reikšmės — `src/data/site.js`.

| Integracija | Būsena | Kur | Paleidimo sąlyga |
|---|---|---|---|
| Užklausų forma | Paruošta, peržiūroje inertiška (`#perziura`) | `site.formEndpoint` = JarvisWeb Worker `/t/form`, `site.formSite` = `arbcut` | Worker'yje: patvirtinti Manto Yahoo adresą Email Routing ir įrašyti `arbcut` gavėjus (`FORM_SITE_RECIPIENTS`). Turnstile nebūtinas: dabartinis Worker'is jį tikrina tik meselektra/vensland; be `PUBLIC_TURNSTILE_SITE_KEY` valdiklis nerodomas, build'as nelūžta. Apsauga: slaptas laukas + Worker'io limitai. Žr. `.agents/research/v5-form-launch-steps.md` |
| Nuotraukos formoje | Įjungta (`features.photoUpload`) | QuoteForm | Worker'io priedų šaka turi būti įdiegta, kitaip Mantas nuotraukų nematys; arba `photoUpload: false` |
| Google verslo profilis | Patikrinta 2026-11-10 | `site.google.placeId` `ChIJXVJEko4j50YRTBpOYdx3f6U`, `cid` `11925382126709381708`, `mapsUrl`, `reviewUrl` `https://g.page/r/CUwaTmHcd3-lEBM/review` | Nėra. Nuorodos: poraštė, /kontaktai, /apie, JSON-LD `hasMap`/`sameAs`, llms.txt |
| Atsiliepimų puslapis `/ivertinimas` | Neutralus: visiems Google + Paslaugos.lt mygtukai, atskira privati žinutė | `src/pages/ivertinimas.astro` | Privati forma veikia tik su Worker'io `topic=review` palaikymu (JarvisCo `feat/review-feedback-20261107`). Iki tol klientams siųsti galima tiesiai `reviewUrl` |
| Google atsiliepimų rodymas | Neįjungta (atsiliepimų Google dar nėra) | `src/components/GoogleProfile.astro` (nenaudojamas) | Places UI Kit reikalauja `PUBLIC_GOOGLE_MAPS_KEY` (mokama API) — tik su Mato leidimu |
| Paslaugos.lt atsiliepimai | Rodomi (123, 5,0) | `src/data/atsiliepimai*.js` | `sync:auto` daro commit+push — NEpaleisti be leidimo |
| Žemėlapis | OpenFreeMap + MapLibre, statinis fallback | `src/components/home/AreaMap.astro` | Nėra |
| Sitemap | Tik gamybos build'e (`PUBLIC_PREVIEW` ≠ 1) | `astro.config.mjs` | Pateikti GSC po paleidimo |
| Analitika / sekimas | Nėra | — | Atskiras sprendimas |

## GBP ↔ svetainė (patikrinta 2026-11-10 GBP valdyme; Mantas jau yra GBP savininkas)
- NAP: ArbCut · +370 603 66901 · aukstuminiai.darbai@yahoo.com · Liepų g., Garliava, 53243 Kauno r. sav. (svetainė gatvės nerodo — GBP be namo numerio).
- Darbo laikas: kasdien 08:00–18:00.
- Paslaugos: svetainės 12 pavadinimų = GBP pavadinimai. GBP turi 13-ą „Medžių pjovimas / rovimas“ (nuo 50 €) — svetainėje tai miestų puslapiai. Kainos sutampa. 2026-11-11 GBP pataisyta (Mato leidimu): „Darbai autobokšteliu iki 20 m“ = Nuo 150 €; „Medžių pjovimas / rovimas“ aprašyme vietoj „visoje Lietuvoje“ – miestų sąrašas ir „iki 150 km nuo Garliavos“. Išsaugota ir matoma GBP valdyme; viešai gali atsirasti po Google peržiūros.
- GBP svetainės laukas dar rodo `https://www.arbcut.lt/` — tas pats domenas, keisti nereikia, jei nauja svetainė pakeis senąją tame domene.

## Greitis (2026-11-11)
- Pradinio LCP elementas buvo dekoratyvi žiedų tekstūra. Dabar ji piešiama kaip CSS kaukė ir įjungiama po `load`; LCP = Manto nuotrauka (`fetchpriority=high`).
- Tekstūros suspaustos (rings-hero 254→147 KB, rings-band 178→103 KB, treeline PNG 272 KB → WebP 84 KB), nuotraukų kokybė 78→68.
- Lighthouse mobilus, realus sulėtinimas (`--throttling-method=devtools`): LCP 5,9 → 3,1 s, Performance 74 → 86. Numatytas (simuliuotas) Lighthouse rodo 7,1 s, nes įskaičiuoja visas pirmo ekrano užklausas.
- Oranžinių mygtukų kontrastas (3,3–3,5) paliktas — Mato sprendimas.
