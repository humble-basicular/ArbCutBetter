# ArbCut — svetainė

Medžių priežiūros ir aukštuminių darbų įmonės **ArbCut** (arboristas Mantas Gerulis) svetainė.
Statinis Astro puslapis, optimizuotas konversijai (skambučiai / užklausos), SEO ir GEO.

## Stack
- **Astro 5** (statinis output) + `@astrojs/sitemap`
- Grynas CSS (dizaino sistema `src/styles/global.css`), vanilla JS (`src/scripts/site.js`)
- Šriftai: Oswald + Source Sans 3
- Forma: **Web3Forms** + **hCaptcha** (vieši raktai `src/data/site.js`)
- Hostingas: **Cloudflare Pages**

## Komandos
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Struktūra
```
src/
  data/         # turinys: site, paslaugos, vietoves, atsiliepimai, galerija, straipsniai, jsonld
  components/   # Astro komponentai (Hero, Services, About, ChatWidget, ...)
  layouts/      # BaseLayout (meta, OG, JSON-LD)
  pages/        # index + /paslaugos/[slug], /[vietove], /galerija, /tinklarastis, teisiniai
  scripts/      # site.js (nav, reveal, lightbox, modal, chat)
  styles/       # global.css (dizaino tokenai)
public/         # assets/images, llms.txt, robots.txt, logotipai
```

## Turinys
- 12 paslaugų (6 kategorijos), 8 vietovių puslapių, galerija (86 nuotr.), 4 tinklaraščio straipsniai.
- 51 realus atsiliepimas (paslaugos.lt, 5,0/106). **Faktai/kainos — nepramanyti.**
- GEO: JSON-LD (LocalBusiness + AggregateRating + Review + Service + FAQ + BlogPosting), `llms.txt`.

## Deploy (Cloudflare Pages)
- Build command: `npm run build`
- Output dir: `dist`
- (Šiuo metu pokalbių robotas — nemokama rule-based versija, be backend'o.)

## Šventi duomenys (nekeisti be kliento)
- Tel.: **+370 603 66901** · El. paštas: **aukstuminiai.darbai@yahoo.com**
- Facebook: facebook.com/MesGalimeTaiPadaryti

---
Programavimas: [jarvisweb.lt](https://jarvisweb.lt)
