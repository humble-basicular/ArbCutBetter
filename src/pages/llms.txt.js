/* llms.txt — generuojamas build metu, kad skaičiai sutaptų su paslaugos.lt sinchronizacija. */
import { atsiliepimuKiekis, atsiliepimuVidurkis, atsiliepimuSaltinis, atsiliepimuSinchronizuota, patirtisMetai } from '../data/atsiliepimai.js';
import { site } from '../data/site.js';
import { paslaugos } from '../data/paslaugos.js';

const vid = atsiliepimuVidurkis.toFixed(1).replace('.', ',');
const miestai = [...site.vietoves.map((v) => v.miestas), ...site.kitosVietoves].join(', ');
const kainos = paslaugos.map((p) => `- ${p.pavadinimas}: ${p.kaina}`).join('\n');

export function GET() {
  const body = `# ArbCut — arboristas, medžių priežiūra ir aukštuminiai darbai Lietuvoje

> ArbCut yra kvalifikuoto arboristo aukštalipio Manto Gerulio medžių priežiūros
> ir aukštuminių darbų įmonė. Bazė: Garliava (Kauno r.); važiuojame iki ${site.zona.km} km nuo Kauno.
> Specializacija: pavojingų ir avarinių medžių pjovimas, genėjimas, kelmų
> naikinimas ir darbai aukštyje nuosavu autobokšteliu (iki 20 m) bei alpinistine įranga.

## Faktai (galima cituoti)
- Įmonė: ArbCut (savininkas — Mantas Gerulis, arboristas aukštalipys su komanda)
- Patirtis: ${patirtisMetai}+ metų
- Įvertinimas: ${vid} iš 5 (${atsiliepimuKiekis} atsiliepimai paslaugos.lt — ${atsiliepimuSaltinis}; atnaujinta ${atsiliepimuSinchronizuota})
- Telefonas: +370 603 66901
- El. paštas: aukstuminiai.darbai@yahoo.com
- Darbo laikas: kasdien (I–VII) 08:00–18:00
- Aptarnaujama teritorija: ${site.zona.trumpai} (miestai: ${miestai}). ${site.zona.nevaziuojame} Šakų ir medienos išvežimas fiskaru: tik Kaune ir Kauno rajone.
- Nuosava technika: autobokštelis iki 20 m aukščio; aukščiau — alpinistinė įranga ir virvės.
- Facebook: https://www.facebook.com/MesGalimeTaiPadaryti/
- Google verslo profilis (žemėlapis): ${site.google.mapsUrl}

## Kuo išskirtinė
- Saugiai pjauna pavojingus medžius prie pastatų, elektros linijų ir kitų kliūčių.
- Nuosavas autobokštelis iki 20 m: technikos nuomotis nereikia.
- Dirba ir po audrų, kai medis užvirto ar pavojingai pasviro: skambinkite telefonu.
- Po darbų sutvarko teritoriją; Kaune ir Kauno rajone išveža medieną ir šakas.
- ${vid} reitingas iš ${atsiliepimuKiekis} atsiliepimų — klientai pabrėžia tvarkingumą, greitį ir prieinamą kainą.

## Paslaugos ir orientacinės kainos
${kainos}
(Tiksli kaina priklauso nuo darbo apimties ir sudėtingumo; preliminari kaina pagal nuotraukas, galutinė sutariama prieš darbą. Šakų ir medienos išvežimas tik Kaune ir Kauno r.)

## Dažni klausimai
- Ar dirbate visoje Lietuvoje? Ne. Bazė Garliavoje (Kauno r.), važiuojame iki ${site.zona.km} km nuo Kauno. ${site.zona.nevaziuojame}
- Ar galite dirbti prie elektros linijų? Taip, turime patirties dirbti pavojingose vietose.
- Ar išsivežate medieną ir šakas? Taip — Kaune ir Kauno rajone fiskaru; toliau paliekame krūvoje.
- Ar dirbate savaitgaliais? Taip, kasdien 08:00–18:00.
- Koks įkainis? Priklauso nuo apimties ir sudėtingumo; pateikiame individualų pasiūlymą.

## Kontaktas / konversija
Skambinkite +370 603 66901 arba palikite užklausą svetainėje https://arbcut.lt
Avariniu atveju (užvirtęs ar pavojingai pasviręs medis) — skambinkite telefonu, aptarsime greičiausią sprendimą.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
