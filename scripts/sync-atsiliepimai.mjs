/* =====================================================================
   Atsiliepimų sinchronizacija su paslaugos.lt.
   Įvestis: scripts/paslaugos-atsiliepimai.json (iš scripts/paslaugos-export.js)
   Išvestis: src/data/atsiliepimai.js (nekeisti ranka — perrašoma)
   Paleidimas: npm run sync:atsiliepimai [kelias/iki/eksporto.json]
   ===================================================================== */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
const input = process.argv[2] || fileURLToPath(new URL('scripts/paslaugos-atsiliepimai.json', root));
const output = fileURLToPath(new URL('src/data/atsiliepimai.js', root));

// paslaugos.lt „Atlikta paslauga" → svetainės /paslaugos/[slug]
const PASLAUGU_SLUGAI = {
  'Avarinių medžių pjovimas': 'avariniu-medziu-pjovimas',
  'Medžių genėjimas': 'medziu-genejimas',
  'Kelmų naikinimas, frezavimas': 'kelmu-naikinimas-frezavimas',
  'Medžio kirtimas, kelmo naikinimas': 'kelmu-naikinimas-frezavimas',
  'Darbai autobokšteliu': 'darbai-su-autoboksteliu',
  'Šakų išvežimas': 'saku-isvezimas',
  'Gyvatvorių karpymas': 'gyvatvoriu-karpymas',
  'Dažymo darbai aukštyje': 'dazymo-darbai-aukstyje',
  'Lietvamzdžių ir stogo dangos valymas': 'lietvamzdziu-stogo-valymas',
  'Medžių lajos stabilizavimo sistemų montavimas ir priežiūra': 'medziu-lajos-stabilizavimas',
  'Reklaminių iškabų montavimas ir demontavimas': 'reklaminiu-iskabu-montavimas',
  'Kiti aukštuminiai darbai': 'kiti-aukstuminiai-darbai',
  'saules moduliu sukelimas': 'kiti-aukstuminiai-darbai',
};

const exp = JSON.parse(readFileSync(input, 'utf8'));
if (!exp.kiekis || !exp.vidurkis || !Array.isArray(exp.atsiliepimai) || !exp.atsiliepimai.length) {
  throw new Error('Eksportas be kiekio / vidurkio / atsiliepimų — ar profilis tikrai įsikėlė?');
}

const nezinomos = new Set();
const atsiliepimai = exp.atsiliepimai
  // Rodome tik atsiliepimus su tekstu (ne vien emoji).
  .filter((a) => (a.tekstas.match(/\p{L}/gu) || []).length >= 3)
  .map((a) => {
    const k = a.kategorijos || [];
    const slug = a.paslauga ? PASLAUGU_SLUGAI[a.paslauga] || 'kiti-aukstuminiai-darbai' : null;
    if (a.paslauga && !PASLAUGU_SLUGAI[a.paslauga]) nezinomos.add(a.paslauga);
    return {
      vardas: a.vardas,
      data: a.data,
      // Kategorijų vidurkis; seni atsiliepimai be kategorijų — be žvaigždučių (nepramanome).
      zvaigzdes: k.length ? Math.round(k.reduce((s, x) => s + x, 0) / k.length) : null,
      paslauga: slug,
      paslaugaPavadinimas: a.paslauga || null,
      tekstas: a.tekstas.replace(/\n{2,}/g, '\n').trim(),
    };
  });

const src = `/* =====================================================================
   ATSILIEPIMAI — REALŪS, sinchronizuoti su paslaugos.lt (${exp.saltinis}).
   ⚠️ SUGENERUOTA: scripts/sync-atsiliepimai.mjs — nekeisti ranka.
   Nuskaityta ${exp.nuskaityta}: ${exp.vidurkis.toFixed(1)} iš ${exp.kiekis} atsiliepimų,
   ${atsiliepimai.length} su tekstu (originali rašyba išlaikyta, nieko neprasimanyta).
   ===================================================================== */

export const atsiliepimuVidurkis = ${exp.vidurkis};
export const atsiliepimuKiekis = ${exp.kiekis};   // bendras profilio skaičius
export const atsiliepimuSaltinis = ${JSON.stringify(exp.saltinis)};
export const atsiliepimuSinchronizuota = ${JSON.stringify(exp.nuskaityta)};
export const patirtisMetai = ${exp.patirtis ?? 'null'};   // „N m. patirtis" iš profilio

export const atsiliepimai = ${JSON.stringify(atsiliepimai, null, 2)};

/** Atsiliepimai konkrečiai paslaugai (naujausi pirma), papildyti naujausiais bendrais iki limito. */
export function atsiliepimaiPaslaugai(slug, limit) {
  const savi = atsiliepimai.filter((a) => a.paslauga === slug);
  const kiti = atsiliepimai.filter((a) => a.paslauga !== slug);
  return [...savi, ...kiti].slice(0, limit);
}
`;

writeFileSync(output, src);
console.log(`✓ ${atsiliepimai.length}/${exp.atsiliepimai.length} atsiliepimų → src/data/atsiliepimai.js (profilis: ${exp.vidurkis} / ${exp.kiekis}, ${exp.nuskaityta})`);
if (nezinomos.size) console.warn(`⚠ Nežinomos paslaugos (priskirta „kiti"): ${[...nezinomos].join(', ')}`);
