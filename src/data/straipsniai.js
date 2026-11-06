/* =====================================================================
   TINKLARAŠTIS — GEO turinys. Straipsniai parašyti taip, kaip žmonės KLAUSIA
   (pilnais sakiniais), kad cituotų Google ir LLM'ai (ChatGPT, Perplexity…).
   Faktai bendri ir atsargūs; teisiniais klausimais raginama tikslintis savivaldybėje.
   ===================================================================== */

import { site } from './site.js';
import { getPaslauga } from './paslaugos.js';

const kaina = (slug) => getPaslauga(slug).kaina;
/* Tikros pirmo paskelbimo datos nežinomos: seniausias įrodymas yra pirmas šio failo įrašas (2026-06-04). */
const PASKELBTA = '2026-06-04';

export const straipsniai = [
  {
    slug: 'kiek-kainuoja-medzio-pasalinimas',
    title: 'Kiek kainuoja medžio pašalinimas Lietuvoje?',
    aprasymas:
      'ArbCut medžio pjovimo įkainiai, kas lemia kainą, kas skaičiuojama atskirai ir realus pavyzdys: trys medžiai už 470 € su išvežimu.',
    data: PASKELBTA,
    atnaujinta: '2026-11-06',
    skaitymas: '4 min',
    turinys: `
      <p><strong>Trumpas atsakymas:</strong> ArbCut medžio pjovimas kainuoja ${kaina('avariniu-medziu-pjovimas')}, tačiau tai mūsų mažiausias įkainis, o ne Lietuvos rinkos vidurkis. Galutinę sumą lemia medžio dydis, kas aplink jį, ar privažiuoja autobokštelis ir ar reikia išvežti medieną.</p>
      <h2>Realus pavyzdys</h2>
      <p>Klientas Ramūnas 2025 m. gruodį parašė: „Pjovė 3 medžius, kaina 470 su išvežimu. Greit ir švariai viską padarė, su autobokšteliu.“ Tai vienas darbas, o ne kainoraštis: medžių dydžio ir vietos atsiliepime nėra, todėl jūsų kaina gali būti kitokia.</p>
      <h2>Mūsų įkainiai</h2>
      <table>
        <thead><tr><th>Darbas</th><th>Kaina</th></tr></thead>
        <tbody>
          <tr><td><a href="/paslaugos/avariniu-medziu-pjovimas">Medžio pjovimas</a></td><td>${kaina('avariniu-medziu-pjovimas')}</td></tr>
          <tr><td><a href="/paslaugos/medziu-genejimas">Genėjimas</a></td><td>${kaina('medziu-genejimas')}</td></tr>
          <tr><td><a href="/paslaugos/darbai-su-autoboksteliu">Darbai su autobokšteliu</a></td><td>${kaina('darbai-su-autoboksteliu')}</td></tr>
          <tr><td><a href="/paslaugos/kelmu-naikinimas-frezavimas">Kelmo frezavimas</a></td><td>${kaina('kelmu-naikinimas-frezavimas')}</td></tr>
          <tr><td><a href="/paslaugos/saku-isvezimas">Šakų ir medienos išvežimas</a> (tik Kaune ir Kauno r.)</td><td>${kaina('saku-isvezimas')}</td></tr>
        </tbody>
      </table>
      <h2>Kas didina kainą</h2>
      <ul>
        <li><strong>Medžio dydis.</strong> Aukštus, storus medžius pjauname dalimis, tai užtrunka ilgiau.</li>
        <li><strong>Kas aplink medį.</strong> Prie namo, tvoros ar laidų kiekvieną dalį tenka nuleisti virvėmis arba autobokšteliu.</li>
        <li><strong>Prieiga.</strong> Ar privažiuoja autobokštelis, ar reikia lipti su alpinistine įranga.</li>
        <li><strong>Atstumas.</strong> Tolimesniems išvykimams įtakos turi kelionė, todėl datą suderiname iš anksto, o kelių kaimynų darbus galima atlikti per vieną atvykimą. Važiuojame iki ${site.zona.km} km nuo Kauno.</li>
      </ul>
      <h2>Kas skaičiuojama atskirai</h2>
      <ul>
        <li><strong>Išvežimas</strong> yra atskira paslauga ir atliekama tik Kaune ir Kauno rajone. Galime jį įtraukti į bendrą kainą, tai sutariame iš anksto.</li>
        <li><strong>Kelmas.</strong> Pjovimas kelmo nepašalina, frezavimas yra atskiras darbas.</li>
        <li>Toliau nuo Kauno šakas ir medieną sukrauname tvarkingomis krūvomis jūsų sklype.</li>
      </ul>
      <h2>Kaip sužinoti savo kainą</h2>
      <p>Preliminarią kainą pasakome pagal nuotraukas iš kelių pusių, tikslią atvažiavę į vietą. Kainą ir darbų apimtį sutariame prieš pradedant. Daugiau: <a href="/kainos">kainos ir kas jas lemia</a>.</p>
    `,
    duk: [
      { klausimas: 'Koks mažiausias ArbCut medžio pjovimo įkainis?', atsakymas: `Medžio pjovimas ${kaina('avariniu-medziu-pjovimas')} už darbą. Galutinė kaina priklauso nuo medžio dydžio, vietos, prieigos ir to, ar reikia išvežti medieną.` },
      { klausimas: 'Ar galite pasakyti kainą pagal nuotraukas?', atsakymas: 'Dažnai taip: preliminarią kainą pasakome pagal nuotraukas iš kelių pusių, tikslią atvažiavę į vietą.' },
      { klausimas: 'Ar išvežimas įskaičiuotas į kainą?', atsakymas: 'Išvežimas yra atskira paslauga ir atliekamas tik Kaune ir Kauno rajone. Galime jį įtraukti į bendrą kainą, tai sutariame iš anksto.' },
    ],
  },
  {
    slug: 'ar-reikia-leidimo-pjauti-medi',
    title: 'Ar reikia leidimo pjauti medį privačiame sklype?',
    aprasymas:
      'Kurie medžiai saugotini, kada reikia savivaldybės leidimo, kas galioja nuo kovo 15 iki rugpjūčio 1 d. ir kokia atsakomybė gresia už neteisėtą kirtimą.',
    data: PASKELBTA,
    atnaujinta: '2026-11-06',
    skaitymas: '5 min',
    pastaba: 'Tai bendra informacija, ne teisinė konsultacija. Sąlygos skiriasi pagal savivaldybę, todėl prieš pjaudami pasitikrinkite savo savivaldybėje.',
    saltiniai: [
      { pavadinimas: 'Vyriausybės nutarimas Nr. 206 dėl saugotinų želdinių kriterijų (e-tar.lt)', url: 'https://www.e-tar.lt/portal/lt/legalAct/TAR.E0E342F72CDE/asr', data: 'suvestinė redakcija nuo 2021-12-24' },
      { pavadinimas: 'Aplinkos ministerija: medžių kirtimas ir genėjimas pavasarį', url: 'https://am.lrv.lt/lt/naujienos/medziu-kirtimas-ir-genejimas-pavasari-ka-butina-zinoti/', data: '2025-03-14' },
      { pavadinimas: 'Aplinkos ministerija: draudimas pjauti saugotinus želdinius', url: 'https://am.lrv.lt/lt/naujienos/perintiems-pauksciams-reikia-ramybes-isigalioja-draudimas-pjauti-saugotinus-zeldinius/', data: '2022-03-14' },
      { pavadinimas: 'Aplinkos apsaugos departamentas: kada galima genėti ir šalinti želdinius', url: 'https://aad.lrv.lt/lt/naujienos/kokiais-atvejais-galite-geneti-ir-salinti-zeldinius/', data: '2022-05-06' },
      { pavadinimas: 'Aplinkos ministerijos išaiškinimas apie kirtimą nuosavame sklype (forest.lt)', url: 'https://www.forest.lt/naujienos/am-medziu-ar-krumu-kirtimas-nuosavame-sklype-ka-turi-zinoti-gyventojai/', data: '2022-07-28' },
      { pavadinimas: 'Vilniaus miesto savivaldybė: saugotini medžiai privačiuose sklypuose', url: 'https://vilnius.lt/savivaldybe/miesto-pletra/zeldynai/svarbi-informacija-apie-saugotinus-medzius-privaciu-sklypu-savininkams' },
    ],
    turinys: `
      <p><strong>Trumpas atsakymas:</strong> priklauso nuo medžio rūšies, storio ir vietos. Saugotiną medį nukirsti ar intensyviai genėti galima tik su savivaldybės leidimu, net ir savo sklype. Tujos, tuopos, drebulės ir vaismedžiai saugotini nėra.</p>
      <h2>Kurie medžiai saugotini</h2>
      <p>Kriterijus tvirtina Vyriausybė. Pagal Aplinkos ministerijos išaiškinimą gyvenamosiose teritorijose <strong>mieste</strong> saugotini sąraše esantys medžiai (pvz., ąžuolai, uosiai, klevai, liepos, maumedžiai, beržai, pušys) nuo <strong>20 cm</strong> skersmens, <strong>ne mieste</strong> nuo <strong>30 cm</strong>. Skersmuo matuojamas 1,3 m aukštyje. Pajūrio juostoje ribos mažesnės.</p>
      <p>Savivaldybės turi ir savo sąrašus. Pavyzdžiui, Vilniaus taryba saugotinų medžių sąrašą papildė 2026 m. kovo 18 d., todėl vien kriterijų nepakanka: savo medžio statusą pasitikrinkite savivaldybėje.</p>
      <h2>Kada reikia leidimo</h2>
      <ul>
        <li><strong>Kirsti</strong> saugotiną medį.</li>
        <li><strong>Intensyviai genėti</strong> saugotiną medį, tai yra pašalinti daugiau nei 30 % lajos.</li>
      </ul>
      <p>Dėl leidimo kreipiamasi į savivaldybę. Vilniuje pilnas prašymas nagrinėjamas 20 darbo dienų, kitur terminai gali skirtis. Leidimas gali būti susijęs su atkuriamosios vertės mokėjimu.</p>
      <h2>Kas, jei medis kelia pavojų</h2>
      <p>Leidimo nereikia, kai darbus būtina atlikti nedelsiant, nes dėl gamtinio, eismo ar kito įvykio saugotinas medis tapo pavojingas žmonėms, turtui, statiniams ar eismui. Tada per 3 darbo dienas raštu pranešama savivaldybei, nurodoma vieta ir pateikiamos 3 nuotraukos. Todėl prieš pjaudami nufotografuokite medį. Jei medis užkrito ant laidų, nelieskite jo ir praneškite elektros tinklų operatoriui.</p>
      <h2>Kas galioja nuo kovo 15 iki rugpjūčio 1 d.</h2>
      <p>Tai intensyviausias paukščių veisimosi laikotarpis. Tuo metu saugotinų medžių <strong>viešuosiuose želdynuose</strong> kirsti ir intensyviai genėti negalima, išskyrus kai jie kelia pavojų žmonėms, turtui ar eismui. Šakų iki 5 cm skersmens pjūvio vietoje šis draudimas neliečia.</p>
      <p><strong>Privatiems želdynams</strong> draudimas netaikomas: gavęs savivaldybės leidimą, savininkas gali dirbti ir šiuo metu, nors Aplinkos apsaugos departamentas prašo to vengti.</p>
      <h2>Kas gresia už neteisėtą kirtimą</h2>
      <p>Aplinkos ministerijos 2022 m. išaiškinime nurodyta bauda gyventojui nuo 60 iki 200 €, įmonės vadovui nuo 80 iki 300 €. Dar reikia atlyginti žalą, kuri skaičiuojama pagal kelmo skersmenį ir medžio rūšį. Vilniaus savivaldybė nurodo, kad už saugotino medžio sužalojimą ar iškirtimą skaičiuojama suma dešimt kartų didesnė už medžio atkuriamąją vertę. Sumos keičiasi, todėl aktualias tikrinkite savivaldybėje.</p>
      <h2>Kaip dirbame mes</h2>
      <p>Mantas LRT.lt sakė: „Mes kertame medžius tik turėdami leidimus.“ Jei nesate tikri dėl savo medžio, <a href="/kontaktai">paskambinkite</a>, aptarsime, nuo ko pradėti. Reikia tik sumažinti lają? Žr. <a href="/paslaugos/medziu-genejimas">medžių genėjimas</a>.</p>
    `,
    duk: [
      { klausimas: 'Ar visada reikia leidimo medžiui pjauti savame sklype?', atsakymas: 'Ne. Leidimo reikia saugotiniems medžiams. Tujos, tuopos, drebulės ir vaismedžiai saugotini nėra. Tikslų medžio statusą pasako savivaldybė.' },
      { klausimas: 'Nuo kokio storio medis saugotinas?', atsakymas: 'Gyvenamosiose teritorijose mieste sąraše esantys medžiai saugotini nuo 20 cm skersmens, ne mieste nuo 30 cm. Matuojama 1,3 m aukštyje. Savivaldybės turi ir savo sąrašus.' },
      { klausimas: 'Ar galima pjauti medį nuo kovo 15 iki rugpjūčio 1 d.?', atsakymas: 'Saugotinų medžių viešuosiuose želdynuose šiuo metu kirsti ir intensyviai genėti negalima, išskyrus pavojaus atvejus. Privatiems želdynams šis draudimas netaikomas, bet saugotinam medžiui vis tiek reikia savivaldybės leidimo.' },
      { klausimas: 'Kur sužinoti, ar mano medis saugotinas?', atsakymas: 'Kreipkitės į savo savivaldybės administraciją: ji pasakys medžio statusą ir ar reikia leidimo.' },
    ],
  },
  {
    slug: 'kaip-atpazinti-pavojinga-medi',
    title: 'Kaip atpažinti pavojingą medį?',
    aprasymas:
      'Požymiai, rodantys, kad medis gali būti pavojingas ir gali tekti jį genėti arba pašalinti: pakrypimas, įtrūkimai, sausos šakos, puviniai.',
    data: PASKELBTA,
    skaitymas: '4 min',
    turinys: `
      <p>Pavojingas medis ne visada atrodo akivaizdžiai blogai. Kartais požymiai subtilūs, todėl verta žinoti, į ką atkreipti dėmesį — ypač jei medis auga prie namo, automobilio ar tako.</p>
      <h2>Įspėjamieji ženklai</h2>
      <ul>
        <li><strong>Staigus pakrypimas</strong> — jei medis neseniai pakrypo arba prie šaknų pakilo žemė.</li>
        <li><strong>Įtrūkimai kamiene ar šakų išsišakojimuose</strong> — gilūs plyšiai rodo silpną vietą.</li>
        <li><strong>Sausos, nulūžusios šakos</strong> lajoje — jos gali nukristi per vėją.</li>
        <li><strong>Grybai ar puvinys</strong> prie kamieno pagrindo — ženklas, kad mediena yra pažeista.</li>
        <li><strong>Tuščiavidurė kamieno dalis</strong> arba lupanti žievė.</li>
      </ul>
      <h2>Ką daryti pastebėjus</h2>
      <p>Ne kiekvieną pavojingą medį būtina pašalinti — kartais pakanka <strong>genėjimo</strong> arba <strong>lajos stabilizavimo sistemos</strong>, kuri suriša šakas ir sumažina lūžimo riziką. Sprendimą geriausia priimti įvertinus medį iš arti.</p>
      <p>Jei matote bent vieną iš šių ženklų ir medis stovi šalia pastato ar tako — nedelskite. Atsiųskite nuotrauką arba paskambinkite, ir įvertinsime, ar medį galima išsaugoti, ar saugiau jį pašalinti.</p>
    `,
    duk: [
      { klausimas: 'Ar pakrypusį medį visada reikia pjauti?', atsakymas: 'Nebūtinai. Jei medis pakrypo seniai ir yra stabilus, jo pašalinti gali ir nereikėti. Bet jei pakrypo staiga arba prie šaknų pakilo žemė — tai pavojaus ženklas ir medį reikia įvertinti.' },
    ],
  },
  {
    slug: 'medis-uzvirto-ant-namo',
    title: 'Ką daryti, jei medis užvirto ant namo?',
    aprasymas:
      'Veiksmų eiga, kai medis užvirsta ant namo, automobilio ar tvoros po audros: sauga, draudimas ir kaip greitai pašalinti.',
    data: PASKELBTA,
    skaitymas: '3 min',
    turinys: `
      <p>Po stiprios audros medis, užvirtęs ant namo ar automobilio, kelia ne tik žalą turtui, bet ir realų pavojų. Štai ką svarbu padaryti.</p>
      <h2>1. Pasirūpinkite saugumu</h2>
      <p>Pasitraukite nuo pavojingos zonos. Jei pažeistos elektros linijos arba dujotiekis — nesiartinkite ir iškart skambinkite pagalbos tarnyboms. Neilipkite ant užvirtusio medžio ir nebandykite jo pjauti patys — įtempta mediena gali staigiai atšokti.</p>
      <h2>2. Užfiksuokite padarinius</h2>
      <p>Jei saugu, nufotografuokite situaciją — nuotraukos pravers ir specialistui, ir draudimui.</p>
      <h2>3. Kvieskite specialistus</h2>
      <p>Užvirtusio medžio šalinimas yra <strong>aukštos rizikos darbas</strong>: dažnai reikia pjauti įtemptą medieną dalimis, kad nepadidėtų žala. Tai turi atlikti patirties turintis arboristas su tinkama įranga.</p>
      <p>Užvirtusius ir pavojingai pasvirusius medžius šaliname iki ${site.zona.km} km nuo Kauno, o po darbų sutvarkome teritoriją. Įvykus tokiai situacijai — <strong>skambinkite iškart</strong>, aptarsime greičiausią sprendimą.</p>
    `,
    duk: [
      { klausimas: 'Ar galiu pats nupjauti ant namo užvirtusį medį?', atsakymas: 'Nerekomenduojama. Užvirtęs medis būna įtemptas ir pjaunant gali staigiai atšokti ar padidinti žalą. Tokį darbą saugiau patikėti patyrusiam arboristui su tinkama įranga.' },
    ],
  },
];

export const getStraipsnis = (slug) => straipsniai.find((s) => s.slug === slug);
