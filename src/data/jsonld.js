/* =====================================================================
   JSON-LD struktūruoti duomenys (GEO — kad LLM'ai ir Google cituotų ArbCut).
   Vienas šaltinis: site.js / paslaugos.js / atsiliepimai.js / turinys.js.
   Naudojama BaseLayout (per `schemas` prop) ir puslapiuose.
   ===================================================================== */
import { site } from './site.js';
import { paslaugos } from './paslaugos.js';
import { atsiliepimai, atsiliepimuVidurkis, atsiliepimuKiekis } from './atsiliepimai.js';
import { duk } from './turinys.js';

const abs = (path) => new URL(path, site.url).href;
const telBare = site.telefonasHref.replace('tel:', '');

const aggregateRating = {
  '@type': 'AggregateRating',
  ratingValue: atsiliepimuVidurkis.toFixed(1),
  reviewCount: atsiliepimuKiekis,
  bestRating: '5',
  worstRating: '1',
};

const reviewList = (limit = 51) =>
  atsiliepimai.slice(0, limit).map((a) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: a.vardas },
    datePublished: a.data,
    ...(a.zvaigzdes ? { reviewRating: { '@type': 'Rating', ratingValue: String(a.zvaigzdes), bestRating: '5' } } : {}),
    reviewBody: a.tekstas,
  }));

const areaServed = [
  ...site.vietoves.map((v) => ({ '@type': 'City', name: v.miestas })),
  { '@type': 'Country', name: 'Lietuva' },
];

/* --- Pagrindinis verslo subjektas (NAP + reitingas + paslaugos) --- */
export function localBusiness({ withReviews = false } = {}) {
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
    logo: abs('/assets/logo-horizontal.svg'),
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
    aggregateRating,
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
  if (withReviews) node.review = reviewList();
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
    aggregateRating,
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
