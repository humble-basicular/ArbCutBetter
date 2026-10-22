/* =====================================================================
   ArbCut — CENTRINIS KONFIGŪRACIJOS FAILAS
   Visa svetainė skaito reikšmes iš čia. Telefonas/el. paštas — ŠVENTI,
   turi sutapti visur (žr. CLAUDE.md).
   ===================================================================== */

export const site = {
  pavadinimas: 'ArbCut',
  savininkas: 'Mantas Gerulis',
  tagline: 'Kvalifikuotas arboristas aukštalipys su komanda',

  // --- Kontaktai (ŠVENTI — nekeisk be kliento) ---
  telefonas: '+370 603 66901',
  telefonasHref: 'tel:+37060366901',
  elPastas: 'aukstuminiai.darbai@yahoo.com',
  facebook: 'https://www.facebook.com/MesGalimeTaiPadaryti/',

  darboLaikas: 'Pirmadienis–Sekmadienis: 08:00–18:00',
  regionas: 'Kauno apskritis',
  aptarnavimas: 'Visa Lietuva',
  priceRange: '€€',

  // Bazė Kaune (apytikslės koordinatės — GEO/JSON-LD areaServed centras)
  geo: { lat: 54.8985, lng: 23.9036 },

  // Aptarnaujamos vietovės — pagrindiniai LT miestai (lokalus SEO + areaServed).
  // Kaunas pagrindinis (čia ir išvežimas fiskaru); kiti — išvykstame visoje Lietuvoje.
  vietoves: [
    { miestas: 'Kaunas',       slug: 'medziu-pjovimas-kaunas',       pagrindinis: true },
    { miestas: 'Vilnius',      slug: 'medziu-pjovimas-vilnius' },
    { miestas: 'Panevėžys',    slug: 'medziu-pjovimas-panevezys' },
    { miestas: 'Marijampolė',  slug: 'medziu-pjovimas-marijampole' },
    { miestas: 'Alytus',       slug: 'medziu-pjovimas-alytus' },
    { miestas: 'Jonava',       slug: 'medziu-pjovimas-jonava' },
    { miestas: 'Kėdainiai',    slug: 'medziu-pjovimas-kedainiai' },
    { miestas: 'Kazlų Rūda',   slug: 'medziu-pjovimas-kazlu-ruda' },
  ],

  // --- SEO ---
  url: 'https://arbcut.lt',
  metaTitle: 'ArbCut — Medžių priežiūra ir aukštuminiai darbai Lietuvoje',
  metaDescription:
    'Kvalifikuotas arboristas aukštalipys. Medžių pjovimas, genėjimas, pavojingų medžių šalinimas, darbai su autobokšteliu iki 20 m. Skambinkite: +370 603 66901.',
  ogImage: '/assets/images/2b536cb7-4a17-4d5d-9cad-8733ba243b27.jpg',

  // --- Forma (Web3Forms — IŠSAUGOTI raktai iš veikiančios svetainės) ---
  web3formsKey: '5d05475d-520b-4671-bc6e-79848e14dd02',
  hcaptchaSiteKey: '50b2fe65-b00b-4b9e-ad62-3ba471098be2',

  // --- Statistika (count-up) — REALŪS skaičiai iš paslaugos.lt profilio ---
  statai: [
    { skaicius: 106, priesaga: '+', etikete: 'klientų atsiliepimų · 5,0 ★' },
    { skaicius: 13, priesaga: '+', etikete: 'metų patirtis' },
    { skaicius: 20, priesaga: ' m', etikete: 'aukštyje su nuosavu autobokšteliu' },
  ],

  // --- Funkcijų vėliavėlės (būsimos integracijos — žr. INTEGRATIONS.md) ---
  features: {
    chatWidget: true,    // rule-based pokalbių robotas (DUK + užklausos surinkimas)
    reviews: true,       // Google atsiliepimų sekcija (rodo „palikite atsiliepimą", kol nėra realių)
  },

  // --- Atsiliepimai (paslaugos.lt — klientas dar neturi Google Business profilio) ---
  // Kai bus Google profilis, užpildyk googlePlaceId ir reviewUrl persijungs automatiškai.
  google: { placeId: '' },
  atsiliepimai: {
    profilis: 'https://paslaugos.lt/mantas-gerulis-aa777',     // viešas profilis (skaityti)
    paliktiUrl: 'https://paslaugos.lt/atsiliepimas/aa777',     // „palikti atsiliepimą" forma
    get reviewUrl() {
      return this.paliktiUrl;
    },
  },
};
