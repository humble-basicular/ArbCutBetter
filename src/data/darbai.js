/* Atrinkti darbai: tik tai, ką klientas pats parašė atsiliepime. Vieta, data ir kaina rodomos tik jei yra atsiliepime.
   Nuotraukos nepriskiriamos: nežinome, kuri galerijos nuotrauka iš kurio darbo. Naujus darbus pildyti tik su patvirtintais faktais. */
import { atsiliepimai } from './atsiliepimai.js';

const irasai = [
  {
    vardas: 'Aldona', data: '2026-06-18', pavadinimas: 'Šimtametis kaštonas prie pat namo',
    problema: 'Sodyboje reikėjo nugenėti šimtametį kaštoną, augantį prie pat gyvenamojo namo.',
    salygos: 'Medis gerokai pasviręs, baimintasi, kad per stiprų vėją neužvirstų ant namo.',
    darbas: 'Medį genėjome, jo nešalinome.',
    nuoroda: { href: '/paslaugos/medziu-genejimas', tekstas: 'Medžių genėjimas' },
  },
  {
    vardas: 'Gintautas Cesevičius', data: '2026-10-15', pavadinimas: 'Didelė eglė šalia namo',
    problema: 'Reikėjo nupjauti didelę eglę šalia namo.',
    salygos: 'Medis augo šalia namo.',
    darbas: 'Eglę nuleidome žemyn dalimis, o baigę sutvarkėme aplinką.',
    nuoroda: { href: '/paslaugos/avariniu-medziu-pjovimas', tekstas: 'Pavojingų medžių pjovimas' },
  },
  {
    vardas: 'Ramūnas', data: '2025-12-18', pavadinimas: 'Trys medžiai už 470 € su išvežimu',
    problema: 'Reikėjo nupjauti tris medžius ir išvežti medieną.',
    salygos: 'Kaina atsiliepime: 470 € kartu su išvežimu.',
    darbas: 'Dirbome su autobokšteliu.',
    nuoroda: { href: '/kainos', tekstas: 'Kainos ir kas jas lemia' },
  },
  {
    vardas: 'Gintarė', data: '2025-12-04', pavadinimas: 'Kelmas kapinėse',
    problema: 'Kapinėse reikėjo pašalinti kelmą.',
    salygos: 'Šalia kitos kapavietės, kurių negalima pažeisti.',
    darbas: 'Kelmą sufrezavome iki žemės lygio ir sutvarkėme teritoriją.',
    nuoroda: { href: '/paslaugos/kelmu-naikinimas-frezavimas', tekstas: 'Kelmų naikinimas' },
  },
  {
    vardas: 'Hilda Miliauskaitė', data: '2026-05-30', pavadinimas: 'Tujos ir kelmai prie kaimynų mašinų',
    problema: 'Reikėjo nupjauti aštuonerių metų tujas ir pašalinti kelmus, kad vietoje būtų galima sodinti.',
    salygos: 'Šalia kaimynų sklypas ir jų mašinos.',
    darbas: 'Tujas nupjovėme, kelmus panaikinome, viską pridengėme ir sugrėbėme.',
    nuoroda: { href: '/paslaugos/kelmu-naikinimas-frezavimas', tekstas: 'Kelmų naikinimas' },
  },
  {
    vardas: 'Dalius Kazakevicius', data: '2025-08-29', pavadinimas: 'Namo pakalimas nuo autobokštelio',
    problema: 'Reikėjo nudažyti namo pakalimą aukštyje.',
    salygos: 'Pakalimo lentutės buvo beveik iškritusios, latakai neišvalyti.',
    darbas: 'Dažėme nuo autobokštelio, papildomai išvalėme latakus ir pritvirtinome lentutes.',
    nuoroda: { href: '/paslaugos/dazymo-darbai-aukstyje', tekstas: 'Dažymo darbai aukštyje' },
  },
];

export const darbai = irasai.map((d) => {
  const a = atsiliepimai.find((x) => x.vardas === d.vardas && x.data === d.data);
  if (!a) throw new Error(`Nerastas atsiliepimas: ${d.vardas} ${d.data}`);
  return { ...d, atsiliepimas: a };
});
