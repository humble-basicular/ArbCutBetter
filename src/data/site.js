/* =====================================================================
   ArbCut — CENTRINIS KONFIGŪRACIJOS FAILAS
   Visa svetainė skaito reikšmes iš čia. Telefonas/el. paštas — ŠVENTI,
   turi sutapti visur (žr. CLAUDE.md).
   ===================================================================== */

import { atsiliepimuKiekis, atsiliepimuVidurkis, patirtisMetai } from './atsiliepimai.js';

/* Peržiūros režimas (PUBLIC_PREVIEW=1): noindex, forma neišsiunčia, be sekimo. */
export const PREVIEW = import.meta.env.PUBLIC_PREVIEW === '1';

/* Viešas leidimas be Turnstile rakto neleidžiamas: forma be apsaugos sulauktų šiukšlių. */
if (import.meta.env.PROD && !PREVIEW && !import.meta.env.PUBLIC_TURNSTILE_SITE_KEY) {
  throw new Error('Trūksta PUBLIC_TURNSTILE_SITE_KEY. Žr. .agents/research/v5-form-launch-steps.md');
}

export const site = {
  pavadinimas: 'ArbCut',
  savininkas: 'Mantas Gerulis',
  tagline: 'Kvalifikuotas arboristas aukštalipys su komanda',

  // --- Kontaktai (ŠVENTI — nekeisk be kliento) ---
  telefonas: '+370 603 66901',
  telefonasHref: 'tel:+37060366901',
  smsHref: 'sms:+37060366901',
  elPastas: 'aukstuminiai.darbai@yahoo.com',
  facebook: 'https://www.facebook.com/MesGalimeTaiPadaryti/',

  darboLaikas: 'Pirmadienis–Sekmadienis: 08:00–18:00',
  regionas: 'Kauno apskritis',
  baze: 'Kaunas',
  // Bazė Kaune; išvykstame ir į kitus miestus (išvykimą derinti iš anksto).
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

  // Bazė Kaune (apytikslės koordinatės — GEO/JSON-LD areaServed centras)
  geo: { lat: 54.8985, lng: 23.9036 },

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
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || '',

  // --- Statistika (count-up) — REALŪS skaičiai, sinchronizuojami su paslaugos.lt profiliu ---
  statai: [
    { skaicius: atsiliepimuKiekis, priesaga: '+', etikete: `klientų atsiliepimų · ${atsiliepimuVidurkis.toFixed(1).replace('.', ',')} ★` },
    { skaicius: patirtisMetai, priesaga: '+', etikete: 'metų patirtis' },
    { skaicius: 20, priesaga: ' m', etikete: 'aukštyje su nuosavu autobokšteliu' },
  ],

  // --- Funkcijų vėliavėlės (būsimos integracijos — žr. INTEGRATIONS.md) ---
  features: {
    chatWidget: true,    // rule-based pokalbių robotas (DUK + užklausos surinkimas)
    reviews: true,       // Google atsiliepimų sekcija (rodo „palikite atsiliepimą", kol nėra realių)
  },

  // --- Atsiliepimai (paslaugos.lt — klientas dar neturi Google Business profilio) ---
  // Kai bus Google profilis, užpildyk googlePlaceId ir reviewUrl persijungs automatiškai.
  /* Google verslo profilis (dar nesukurtas). Užpildžius placeId:
     atsiranda Google įvertinimo blokas ir „Palikite atsiliepimą Google“.
     Raktas — PUBLIC_GOOGLE_MAPS_KEY aplinkos kintamasis (ne repozitorijoje). */
  google: {
    placeId: '',
    get mapsKey() { return import.meta.env.PUBLIC_GOOGLE_MAPS_KEY || ''; },
    get reviewUrl() { return this.placeId ? `https://search.google.com/local/writereview?placeid=${this.placeId}` : ''; },
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
    paliktiUrl: 'https://paslaugos.lt/atsiliepimas/aa777',     // „palikti atsiliepimą" forma
    get reviewUrl() {
      return this.paliktiUrl;
    },
  },
};
