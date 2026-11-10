/* Paslauga × miestas puslapiai (.agents/research/v5-service-city-page-map.md, 1 ir 2 partijos).
   Bendras faktinis šablonas: tikra paslauga tikrai aptarnaujamoje vietoje. Medienos išvežimas tik Kaune ir Kauno rajone. */
import { vietoves } from './vietoves.js';

const miestas = (v) => v.slug.replace('medziu-pjovimas-', '');
const kaunas = vietoves.find((v) => v.pagrindinis);

export const miestuPaslaugos = [
  ...vietoves.map((v) => ({ slug: `medziu-genejimas-${miestas(v)}`, paslauga: 'medziu-genejimas', v, h1: `Medžių genėjimas ${v.kur}`, trumpas: 'Medžių genėjimas' })),
  { slug: 'kelmu-frezavimas-kaunas', paslauga: 'kelmu-naikinimas-frezavimas', v: kaunas, h1: 'Kelmų frezavimas Kaune', trumpas: 'Kelmų frezavimas' },
  { slug: 'darbai-su-autoboksteliu-kaunas', paslauga: 'darbai-su-autoboksteliu', v: kaunas, h1: 'Darbai su autobokšteliu Kaune', trumpas: 'Darbai su autobokšteliu' },
  { slug: 'gyvatvoriu-karpymas-kaunas', paslauga: 'gyvatvoriu-karpymas', v: kaunas, h1: 'Gyvatvorių karpymas Kaune', trumpas: 'Gyvatvorių karpymas' },
  { slug: 'lietvamzdziu-valymas-kaunas', paslauga: 'lietvamzdziu-stogo-valymas', v: kaunas, h1: 'Latakų ir lietvamzdžių valymas Kaune', trumpas: 'Latakų ir lietvamzdžių valymas' },
];

export const paslaugosMiestuose = (paslauga) => miestuPaslaugos.filter((m) => m.paslauga === paslauga);
export const miestoPaslaugos = (slug) => miestuPaslaugos.filter((m) => m.v.slug === slug);

export const atvykimas = (v) => (v.pagrindinis
  ? 'Mūsų bazė Garliavoje, šalia Kauno, todėl Kaune atvykstame greičiausiai. Tikslų laiką pasakome telefonu pagal tos dienos darbus.'
  : `${v.kur} dirbame suderinę datą iš anksto. Kelių kaimynų darbus galima atlikti per vieną atvykimą.`);

export const isvezimas = (v) => (v.pagrindinis
  ? 'Kaune ir Kauno rajone šakas ir medieną galime išvežti fiskaru.'
  : `${v.kur} šakas ir medieną sukrauname tvarkingomis krūvomis. Išvežimą atliekame tik Kaune ir Kauno rajone.`);
