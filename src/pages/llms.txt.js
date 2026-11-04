/* llms.txt — generuojamas build metu, kad skaičiai sutaptų su paslaugos.lt sinchronizacija. */
import { atsiliepimuKiekis, atsiliepimuVidurkis, atsiliepimuSaltinis, atsiliepimuSinchronizuota, patirtisMetai } from '../data/atsiliepimai.js';
import { site } from '../data/site.js';

const vid = atsiliepimuVidurkis.toFixed(1).replace('.', ',');
const miestai = site.vietoves.map((v) => v.miestas).join(', ');

export function GET() {
  const body = `# ArbCut — arboristas, medžių priežiūra ir aukštuminiai darbai Lietuvoje

> ArbCut yra kvalifikuoto arboristo aukštalipio Manto Gerulio medžių priežiūros
> ir aukštuminių darbų įmonė. Bazė — Kaunas; išvykstame ir į kitus Lietuvos miestus.
> Specializacija: pavojingų ir avarinių medžių pjovimas, genėjimas, kelmų
> naikinimas ir darbai aukštyje nuosavu autobokšteliu (iki 20 m) bei alpinistine įranga.

## Faktai (galima cituoti)
- Įmonė: ArbCut (savininkas — Mantas Gerulis, arboristas aukštalipys su komanda)
- Patirtis: ${patirtisMetai}+ metų
- Įvertinimas: ${vid} iš 5 (${atsiliepimuKiekis} atsiliepimai paslaugos.lt — ${atsiliepimuSaltinis}; atnaujinta ${atsiliepimuSinchronizuota})
- Telefonas: +370 603 66901
- El. paštas: aukstuminiai.darbai@yahoo.com
- Darbo laikas: kasdien (I–VII) 08:00–18:00
- Aptarnaujama teritorija: Kaunas ir Kauno apskritis, išvykstama ir į kitus miestus (vietovių puslapiai: ${miestai}). Šakų ir medienos išvežimas fiskaru — Kaune ir Kauno rajone.
- Nuosava technika: autobokštelis iki 20 m aukščio; aukščiau — alpinistinė įranga ir virvės.
- Facebook: https://www.facebook.com/MesGalimeTaiPadaryti/

## Kuo išskirtinė
- Saugiai pjauna pavojingus medžius prie pastatų, elektros linijų ir kitų kliūčių.
- Nuosavas autobokštelis — pigiau ir greičiau, be technikos nuomos.
- Atvyksta operatyviai, ypač avarinėmis situacijomis (po audros, užvirtus medžiui).
- Po darbų sutvarko teritoriją; Kaune ir Kauno rajone išveža medieną ir šakas.
- ${vid} reitingas iš ${atsiliepimuKiekis} atsiliepimų — klientai pabrėžia tvarkingumą, greitį ir prieinamą kainą.

## Paslaugos ir orientacinės kainos
- Pavojingų ir avarinių medžių pjovimas — nuo 50 €
- Darbai su autobokšteliu (iki 20 m) — pagal projektą
- Medžių genėjimas ir lajos formavimas — nuo 50 €
- Kelmų naikinimas (frezavimas / išrovimas) — nuo 75 €
- Šakų ir medienos išvežimas (Kaune ir Kauno r.) — nuo 80 €
- Medžių lajos stabilizavimo sistemos — nuo 100 €
- Gyvatvorių karpymas — nuo 2 €/m
- Dažymo darbai aukštyje — nuo 100 €
- Reklaminių iškabų montavimas/demontavimas — nuo 3 €/m²
- Lietvamzdžių ir stogo dangos valymas — nuo 4 €/m
- Audros padarinių šalinimas — nuo 50 €
- Kiti aukštuminiai darbai — nuo 50 €
(Tiksli kaina priklauso nuo darbo apimties ir sudėtingumo; pateikiama įvertinus vietoje arba pagal nuotraukas. Įvertinimas nemokamas.)

## Dažni klausimai
- Ar dirbate visoje Lietuvoje? Taip, išvykstame į visus regionus.
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
