/* =====================================================================
   ArbCut — CENTRINIS KONFIGŪRACIJOS FAILAS
   Visa svetainė skaito reikšmes iš čia. Telefonas/el. paštas — ŠVENTI,
   turi sutapti visur (žr. CLAUDE.md).
   ===================================================================== */

import { atsiliepimuKiekis, atsiliepimuVidurkis, patirtisMetai } from './atsiliepimai.js';

/* Peržiūros režimas (PUBLIC_PREVIEW=1): noindex, forma neišsiunčia, be sekimo. */
export const PREVIEW = import.meta.env.PUBLIC_PREVIEW === '1';

export const site = {
  pavadinimas: 'ArbCut',
  savininkas: 'Mantas Gerulis',
  /* Rekvizitai iš sąskaitos AA-1 (2026-04-22). Namų adreso viešai nerodome (Mato sprendimas 2026-11-11). */
  ivPazyma: '879632',   // individualios veiklos pažymos Nr.
  tagline: 'Kvalifikuotas arboristas aukštalipys su komanda',

  // --- Kontaktai (ŠVENTI — nekeisk be kliento) ---
  telefonas: '+370 603 66901',
  telefonasHref: 'tel:+37060366901',
  /* Nuotraukos kainai — tik el. paštu (SMS/Viber/WhatsApp svetainėje nesiūlome, Mato sprendimas 2026-11-11) */
  get mailFotoHref() { return `mailto:${this.elPastas}?subject=${encodeURIComponent('Nuotraukos kainai')}`; },
  elPastas: 'aukstuminiai.darbai@yahoo.com',
  facebook: 'https://www.facebook.com/MesGalimeTaiPadaryti/',

  darboLaikas: 'Pirmadienis–Sekmadienis: 08:00–18:00',
  regionas: 'Kauno apskritis',
  // Bazė pagal Google verslo profilį (2026-11-10): Liepų g., Garliava, 53243 Kauno r. sav. Namo numerio GBP nerodo.
  baze: 'Garliava',
  bazeKur: 'Garliavoje, Kauno r.',
  adresas: { miestas: 'Garliava', savivaldybe: 'Kauno r. sav.', pastoKodas: '53243' },
  // Išvykstame ir į kitus miestus (išvykimą derinti iš anksto).
  // Išvežimas fiskaru — TIK Kaune ir Kauno rajone.
  aptarnavimas: 'Kaunas, Kauno rajonas ir miestai iki 150 km nuo Kauno',
  // Vienas šaltinis visiems aptarnavimo teiginiams (matomam tekstui, meta, JSON-LD, llms.txt).
  // Patvirtino Matas 2026-11-06: 150 km; Klaipėda ir Šiauliai Mantui per toli, nors Šiauliai patenka į spindulį.
  zona: {
    km: 150,
    trumpai: 'Kaunas, +150 km aplink',
    nevaziuojame: 'Į Klaipėdą ir Šiaulius nevažiuojame.',
  },
  priceRange: '€€',

  // Bazė: Google žemėlapių ArbCut žymeklio koordinatės (vieša Maps kortelė, 2026-11-10)
  geo: { lat: 54.8357587, lng: 23.8691275 },
  // Spindulio centras: Kaunas (svetainė sako „iki 150 km nuo Kauno“)
  zonosCentras: { lat: 54.8985, lng: 23.9036 },
  // Papildomos GBP aptarnaujamos vietovės be atskiro puslapio (JSON-LD, llms.txt, žemėlapio sąrašas)
  kitosVietoves: ['Garliava'],

  // Aptarnaujamos vietovės — pagrindiniai LT miestai (lokalus SEO + areaServed).
  // Kaunas pagrindinis (čia ir išvežimas fiskaru); kiti — miestai aptarnavimo zonoje (site.zona).
  vietoves: [
    { miestas: 'Kaunas',       slug: 'medziu-pjovimas-kaunas',       pagrindinis: true },
    { miestas: 'Vilnius',      slug: 'medziu-pjovimas-vilnius' },
    { miestas: 'Panevėžys',    slug: 'medziu-pjovimas-panevezys' },
    { miestas: 'Marijampolė',  slug: 'medziu-pjovimas-marijampole' },
    { miestas: 'Alytus',       slug: 'medziu-pjovimas-alytus' },
    { miestas: 'Jonava',       slug: 'medziu-pjovimas-jonava' },
    { miestas: 'Kėdainiai',    slug: 'medziu-pjovimas-kedainiai' },
    { miestas: 'Kazlų Rūda',   slug: 'medziu-pjovimas-kazlu-ruda' },
    { miestas: 'Tauragė',      slug: 'medziu-pjovimas-taurage' },
  ],

  // --- SEO ---
  url: 'https://arbcut.lt',
  metaTitle: 'ArbCut — Medžių priežiūra ir aukštuminiai darbai Lietuvoje',
  metaDescription:
    'Kvalifikuotas arboristas aukštalipys. Medžių pjovimas, genėjimas, pavojingų medžių šalinimas, darbai su autobokšteliu iki 20 m. Skambinkite: +370 603 66901.',
  ogImage: '/assets/images/2b536cb7-4a17-4d5d-9cad-8733ba243b27.jpg',

  // --- Forma: JarvisWeb Cloudflare Worker (gavėjai laikomi Workerio privačioje konfigūracijoje, ne čia) ---
  formEndpoint: 'https://jarvisweb.lt/t/form',
  formSite: 'arbcut',
  /* Nebūtina: dabartinis Workeris arbcut Turnstile netikrina (tik meselektra/vensland). Be rakto valdiklis nerodomas. */
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || '',

  // --- Statistika (count-up) — REALŪS skaičiai, sinchronizuojami su paslaugos.lt profiliu ---
  statai: [
    { skaicius: atsiliepimuKiekis, priesaga: '+', etikete: `klientų atsiliepimų · ${atsiliepimuVidurkis.toFixed(1).replace('.', ',')} ★` },
    { skaicius: patirtisMetai, priesaga: '+', etikete: 'metų patirtis' },
    { skaicius: 20, priesaga: ' m', etikete: 'aukštyje su nuosavu autobokšteliu' },
  ],

  // --- Funkcijų vėliavėlės (būsimos integracijos — žr. INTEGRATIONS.md) ---
  features: {
    photoUpload: true,   // nuotraukos keliauja el. laiško priedais (Workerio priedų šaka + FORM_ATTACHMENT_SITES); žr. .agents/research/v5-form-launch-steps.md
    chatWidget: true,    // rule-based pokalbių robotas (DUK + užklausos surinkimas)
    reviews: true,       // Google atsiliepimų sekcija (rodo „palikite atsiliepimą", kol nėra realių)
  },

  // --- Google verslo profilis (ArbCut, Garliava) ---
  /* Place ID perskaitytas iš viešos Google žemėlapių kortelės 2026-11-10 (ArbCut, Liepų g., Garliava,
     (0-603) 66901). CID = GBP fid.
     Google atsiliepimų dar nėra; svetainėje rodomi tik Paslaugos.lt atsiliepimai. */
  google: {
    placeId: 'ChIJXVJEko4j50YRTBpOYdx3f6U',
    cid: '11925382126709381708',
    get mapsUrl() { return `https://www.google.com/maps?cid=${this.cid}`; },
    get mapsKey() { return import.meta.env.PUBLIC_GOOGLE_MAPS_KEY || ''; },
    // Oficiali GBP „Prašyti atsiliepimų“ nuoroda (perskaityta GBP valdyme 2026-11-10)
    reviewUrl: 'https://g.page/r/CUwaTmHcd3-lEBM/review',
  },
  /* Paslaugos.lt profilio faktai (2026-11-04) */
  profilis: {
    nuo: 2019,
    lankytojai: '19 335',
    skambuciai: '1 192',
    laiskai: '108',
    nuotraukos: 93,
    kainaNuo: 'nuo 20 €/h',
  },
  atsiliepimai: {
    profilis: 'https://paslaugos.lt/mantas-gerulis-aa777',     // viešas profilis (skaityti)
    paliktiUrl: 'https://paslaugos.lt/atsiliepimas/aa777',     // „palikti atsiliepimą" forma (naudoja tik /ivertinimas)
    ivertinimas: '/ivertinimas',                               // visi „Parašyti atsiliepimą" mygtukai veda čia (neutralus: visiems tos pačios viešos nuorodos + atskira privati žinutė)
    get reviewUrl() {
      return this.paliktiUrl;
    },
  },
};
