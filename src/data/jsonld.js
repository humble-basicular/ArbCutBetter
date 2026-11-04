/* =====================================================================
   JSON-LD struktūruoti duomenys (GEO — kad LLM'ai ir Google cituotų ArbCut).
   Vienas šaltinis: site.js / paslaugos.js / atsiliepimai.js / turinys.js.
   Naudojama BaseLayout (per `schemas` prop) ir puslapiuose.
   ===================================================================== */
import { site } from './site.js';
import { paslaugos } from './paslaugos.js';
import { duk } from './turinys.js';

const abs = (path) => new URL(path, site.url).href;
const telBare = site.telefonasHref.replace('tel:', '');

const areaServed = [
  { '@type': 'AdministrativeArea', name: 'Kauno apskritis' },
  ...site.vietoves.map((v) => ({ '@type': 'City', name: v.miestas })),
  /* „Kaunas, +200 km aplink“ — kaip Paslaugos.lt profilyje */
  {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    geoRadius: 200000,
  },
];

/* --- Pagrindinis verslo subjektas (NAP + paslaugos) ---
   2026-11: AggregateRating/Review pašalinti — atsiliepimai surinkti Paslaugos.lt
   (trečioji šalis), Google nerekomenduoja jų žymėti savo svetainės schema. */
export function localBusiness() {
  const node = {
    '@context': 'https://schema.org',
    '@type': 'LandscapingBusiness',
    '@id': abs('/#business'),
    name: site.pavadinimas,
    alternateName: 'ArbCut — arboristas Mantas Gerulis',
    description: site.metaDescription,
    url: abs('/'),
    telephone: telBare,
    email: site.elPastas,
    image: abs(site.ogImage),
    logo: abs('/assets/arbcut-upgrade-brand/icon-512.png'),
    priceRange: site.priceRange,
    founder: { '@type': 'Person', name: site.savininkas },
    knowsLanguage: 'lt',
    address: {
      '@type': 'PostalAddress',
      addressRegion: site.regionas,
      addressCountry: 'LT',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [site.facebook, site.atsiliepimai.profilis],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ArbCut paslaugos',
      itemListElement: paslaugos.map((p) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: p.pavadinimas,
          description: p.aprasymas,
          url: abs(`/paslaugos/${p.slug}`),
        },
      })),
    },
  };
  return node;
}

/* --- DUK schema (FAQPage) --- */
export function faqPage(items = duk) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.klausimas,
      acceptedAnswer: { '@type': 'Answer', text: q.atsakymas },
    })),
  };
}

/* --- Atskiros paslaugos schema (paslaugų puslapiams) --- */
export function serviceSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.pavadinimas,
    description: p.seo || p.aprasymas,
    serviceType: p.pavadinimas,
    url: abs(`/paslaugos/${p.slug}`),
    provider: { '@id': abs('/#business') },
    areaServed,
    ...(p.kaina && p.kaina.includes('€')
      ? { offers: { '@type': 'Offer', priceCurrency: 'EUR', description: p.kaina } }
      : {}),
  };
}

/* --- Tinklaraščio straipsnis (BlogPosting) --- */
export function articleSchema(s) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: s.title,
    description: s.aprasymas,
    datePublished: s.data,
    dateModified: s.data,
    inLanguage: 'lt',
    mainEntityOfPage: abs(`/tinklarastis/${s.slug}`),
    author: { '@type': 'Person', name: site.savininkas },
    publisher: { '@id': abs('/#business') },
    image: abs(site.ogImage),
  };
}

/* --- Breadcrumbs --- */
export function breadcrumbs(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
