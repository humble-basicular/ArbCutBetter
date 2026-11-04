/* =====================================================================
   PASLAUGŲ PUSLAPIŲ TURINYS (2026-11 peržiūros dizainas).
   Šaltiniai: src/data/paslaugos.js (Paslaugos.lt profilio paslaugos, kainos
   „nuo"), src/data/turinys.js (DUK), straipsniai.js (kainos veiksniai).
   Nieko neprasimanyta: jokių sertifikatų, draudimo, 24/7, garantijų ar
   konkrečių objektų vietų. Išvežimas — TIK Kaune ir Kauno rajone.
   Nuotraukos aprašytos pagal tai, kas jose matyti (ne vieta/data).
   ===================================================================== */

const G = (n) => `/assets/images/galerija/galerija-${String(n).padStart(2, '0')}.jpg`;

/* Bendri kainos veiksniai, kartojami tik ten, kur tinka. */
const kainaMedziai = [
  'Medžio aukštis, kamieno storis ir rūšis',
  'Kas yra po medžiu: namas, tvora, laidai, kapavietė ar atvira vieta',
  'Ar privažiuoja autobokštelis, ar reikia lipti su alpinistine įranga',
  'Ar reikia išvežti medieną ir šakas (Kaune ir Kauno rajone)',
  'Ar reikia pašalinti kelmą',
];

export const grupes = [
  {
    id: 'medziai',
    pavadinimas: 'Medžiai',
    aprasymas: 'Pjovimas, genėjimas, kelmai ir sutvarkymas po darbų.',
    slugs: [
      'avariniu-medziu-pjovimas',
      'audros-isverstu-medziu-salinimas',
      'medziu-genejimas',
      'medziu-lajos-stabilizavimas',
      'kelmu-naikinimas-frezavimas',
      'saku-isvezimas',
      'gyvatvoriu-karpymas',
    ],
  },
  {
    id: 'aukstyje',
    pavadinimas: 'Darbai aukštyje',
    aprasymas: 'Nuosavas autobokštelis iki 20 m ir alpinistinė įranga.',
    slugs: [
      'darbai-su-autoboksteliu',
      'lietvamzdziu-stogo-valymas',
      'dazymo-darbai-aukstyje',
      'reklaminiu-iskabu-montavimas',
      'kiti-aukstuminiai-darbai',
    ],
  },
];

/* Situacijos (pagrindinio puslapio „Koks jūsų atvejis?"). */
export const situacijos = [
  { tekstas: 'Medis prie namo ar laidų', slug: 'avariniu-medziu-pjovimas' },
  { tekstas: 'Medis nuvirto po audros', slug: 'audros-isverstu-medziu-salinimas' },
  { tekstas: 'Reikia apgenėti medį', slug: 'medziu-genejimas' },
  { tekstas: 'Liko kelmas', slug: 'kelmu-naikinimas-frezavimas' },
  { tekstas: 'Latakai, stogas, fasadas', slug: 'darbai-su-autoboksteliu' },
  { tekstas: 'Gyvatvorė', slug: 'gyvatvoriu-karpymas' },
];

export const detales = {
  'avariniu-medziu-pjovimas': {
    trumpas: 'Medžių pjovimas',
    h1: 'Medžių pjovimas ir pavojingų medžių šalinimas',
    title: 'Medžių pjovimas ir pavojingų medžių šalinimas | ArbCut, Kaunas',
    description:
      'Pavojingų ir avarinių medžių pjovimas prie namų, tvorų ir elektros laidų: dalimis, nuleidžiant virvėmis arba autobokšteliu iki 20 m. Kaina nuo 50 €. +370 603 66901.',
    ivadas:
      'Kai medis stovi šalia namo, tvoros, laidų ar kapavietės, jo negalima tiesiog nuversti. Pjauname dalimis: kiekviena atpjauta dalis nuleidžiama virvėmis arba nuimama nuo autobokštelio, kad nenukentėtų tai, kas po medžiu.',
    tinka: [
      'Pasviręs, išdžiūvęs ar įskilęs medis šalia pastato',
      'Medis, kurio šakos siekia elektros laidus ar stogą',
      'Didelis medis ankštame kieme, kur nėra kur jo nuversti',
      'Medis kapinėse ar prie tvoros, kur reikia ypač atsargiai',
    ],
    eiga: [
      'Apžiūrime medį ir aplinką vietoje arba pagal jūsų nuotraukas.',
      'Parenkame būdą: alpinistinė įranga, autobokštelis arba abu.',
      'Pjauname nuo viršūnės dalimis, šakas ir kamieno atkarpas nuleidžiame kontroliuotai.',
      'Sutvarkome: Kaune ir Kauno rajone galime išvežti medieną, toliau ją sukrauname krūvoje.',
    ],
    kaina: kainaMedziai,
    paruosti: [
      'Kelios medžio nuotraukos iš toliau, kad matytųsi aplinka',
      'Adresas arba vietovė',
      'Ar reikia išvežti medieną ir šalinti kelmą',
    ],
    duk: [
      {
        klausimas: 'Ar galite pjauti medį prie elektros linijų?',
        atsakymas:
          'Taip, turime patirties dirbti šalia elektros linijų ir pastatų. Medį pjauname dalimis ir nuleidžiame virvėmis. Konkrečią situaciją aptariame apžiūrėję vietą ar nuotraukas.',
      },
      {
        klausimas: 'Ar reikia leidimo nupjauti medį savo sklype?',
        atsakymas:
          'Tai priklauso nuo medžio rūšies, dydžio ir vietos. Tikslias taisykles nustato savivaldybė, todėl prieš darbus rekomenduojame pasitikslinti savo savivaldybėje. Plačiau — straipsnyje apie leidimus.',
        nuoroda: '/tinklarastis/ar-reikia-leidimo-pjauti-medi',
      },
      {
        klausimas: 'Kiek kainuoja nupjauti medį?',
        atsakymas:
          'Kaina prasideda nuo 50 €, bet galutinė suma priklauso nuo medžio dydžio, vietos ir to, ar reikia išvežti medieną. Tikslią kainą pasakome įvertinę darbą.',
        nuoroda: '/kainos',
      },
    ],
    nuotraukos: [G(14), G(27), G(21), G(15), G(16), G(39)],
    susijusios: ['audros-isverstu-medziu-salinimas', 'kelmu-naikinimas-frezavimas', 'saku-isvezimas'],
  },

  'audros-isverstu-medziu-salinimas': {
    trumpas: 'Audros padariniai',
    h1: 'Audros išverstų ir užvirtusių medžių šalinimas',
    title: 'Audros išverstų medžių šalinimas | ArbCut',
    description:
      'Po audros užvirtę ant namo, tvoros ar automobilio medžiai pašalinami saugiai ir dalimis. Įvertiname situaciją ir sutariame greičiausią sprendimą. +370 603 66901.',
    ivadas:
      'Po audros ar stipraus vėjo medis dažnai guli ant stogo, tvoros, automobilio ar kelio. Tokį medį reikia nuimti taip, kad nesukeltume daugiau žalos: dalimis, prilaikant virvėmis, nuo viršaus į apačią.',
    tinka: [
      'Medis užvirto ant namo, pavėsinės ar tvoros',
      'Išverstas medis su šaknimis guli kieme',
      'Nulaužtos šakos kabo ant medžio ar laidų',
      'Po vėjo medis pavojingai pasviro',
    ],
    eiga: [
      'Paskambinkite ir, jei galite, atsiųskite nuotraukų — aptarsime greičiausią sprendimą.',
      'Įvertiname, kas laiko medį ir kur jis gali judėti.',
      'Nuimame medį dalimis, kad neapkrautume stogo ar konstrukcijų.',
      'Supjaustome, sutvarkome teritoriją; Kaune ir Kauno rajone galime išvežti.',
    ],
    kaina: [
      'Kur ir ant ko guli medis',
      'Medžio dydis ir kiek jo dalių reikia nuimti',
      'Ar reikia autobokštelio',
      'Medienos išvežimas (Kaune ir Kauno rajone)',
    ],
    paruosti: [
      'Nuotraukos iš kelių pusių',
      'Ar yra pažeistų laidų — jei taip, pirmiausia praneškite tinklų operatoriui',
      'Adresas ir privažiavimas',
    ],
    duk: [
      {
        klausimas: 'Ką daryti, jei medis užvirto ant namo?',
        atsakymas:
          'Pirmiausia pasirūpinkite žmonių saugumu ir nelipkite ant stogo. Jei medis paliečia laidus, kreipkitės į tinklų operatorių. Tada skambinkite mums — aptarsime, kaip saugiai nuimti medį. Plačiau — straipsnyje.',
        nuoroda: '/tinklarastis/medis-uzvirto-ant-namo',
      },
      {
        klausimas: 'Kaip greitai atvykstate?',
        atsakymas:
          'Atvykstame operatyviai, bet tikslus laikas priklauso nuo atstumo ir tos dienos darbų. Paskambinkite +370 603 66901 — pasakysime, kada galime būti.',
      },
    ],
    nuotraukos: [G(81), G(83), G(82), G(16)],
    susijusios: ['avariniu-medziu-pjovimas', 'darbai-su-autoboksteliu', 'saku-isvezimas'],
  },

  'medziu-genejimas': {
    trumpas: 'Genėjimas',
    thumb: G(2),
    h1: 'Medžių genėjimas ir lajos formavimas',
    title: 'Medžių genėjimas ir lajos formavimas | ArbCut, Kaunas',
    description:
      'Sausų ir pavojingų šakų šalinimas, lajos prašviesinimas ir formavimas alpinistine įranga arba autobokšteliu. Kaina nuo 50 €. +370 603 66901.',
    ivadas:
      'Genėjimas leidžia medį palikti: pašaliname sausas, sergančias ar trinčiai linkusias šakas, prašviesiname ir formuojame lają. Dirbame alpinistine įranga arba autobokšteliu, todėl pasiekiame ir aukščiausias šakas nelipdami ant medžio su kopėčiomis.',
    tinka: [
      'Sausos šakos virš stogo, kiemo ar automobilių stovėjimo vietos',
      'Laja užstoja šviesą arba remiasi į pastatą',
      'Šakos trinasi viena į kitą ar auga link laidų',
      'Norite medį išsaugoti, bet sumažinti riziką',
    ],
    eiga: [
      'Apžiūrime medį ir aptariame, ką norite pasiekti.',
      'Paaiškiname, kurias šakas siūlome šalinti ir kodėl.',
      'Genime iš lajos vidaus alpinistine įranga arba nuo autobokštelio.',
      'Surenkame šakas; Kaune ir Kauno rajone galime jas išvežti.',
    ],
    kaina: [
      'Medžio dydis ir kiek šakų reikia šalinti',
      'Prieiga: ar privažiuoja autobokštelis',
      'Ar šakos virš pastato ar laidų',
      'Šakų išvežimas (Kaune ir Kauno rajone)',
    ],
    paruosti: ['Medžio nuotraukos', 'Kurios šakos kelia nerimą', 'Adresas'],
    duk: [
      {
        klausimas: 'Kada geriausia genėti medžius?',
        atsakymas:
          'Tai priklauso nuo medžio rūšies ir tikslo. Sausas ar pavojingas šakas galima šalinti bet kuriuo metų laiku, o formuojamąjį genėjimą patariame atlikti tinkamu tam medžiui metu. Apžiūrėję pasakysime, ką ir kada verta daryti.',
      },
      {
        klausimas: 'Ar genėjimas nepakenks medžiui?',
        atsakymas:
          'Tinkama pjūvio vieta ir saikas lemia, ar medis greitai užgis. Visada paaiškiname, kurias šakas šaliname ir kodėl.',
      },
    ],
    nuotraukos: [G(2), G(44), G(24), G(46)],
    susijusios: ['medziu-lajos-stabilizavimas', 'darbai-su-autoboksteliu', 'avariniu-medziu-pjovimas'],
  },

  'medziu-lajos-stabilizavimas': {
    trumpas: 'Lajos stabilizavimas',
    h1: 'Medžių lajos stabilizavimo sistemos',
    title: 'Medžių lajos stabilizavimas (atotampos) | ArbCut',
    description:
      'Lajos stabilizavimo sistemų montavimas ir priežiūra vertingiems medžiams su įtrūkusia ar persišakojusia laja. Kaina nuo 100 €. +370 603 66901.',
    ivadas:
      'Ne kiekvieną rizikingą medį reikia nupjauti. Kai medis vertingas, bet jo laja persišakojusi ar įtrūkusi, sumontuojame stabilizavimo (atotampų) sistemą: ji suriša šakas ir sumažina lūžimo riziką per vėją ar apkrovą.',
    tinka: [
      'Senas, vertingas medis prie namo ar sodyboje',
      'Laja skyla į kelias pagrindines šakas',
      'Matomas įtrūkimas šakų išsišakojime',
    ],
    eiga: [
      'Apžiūrime medį ir įvertiname, ar sistema tinka.',
      'Pasiūlome sprendimą ir aptariame kainą.',
      'Sumontuojame sistemą lajoje.',
      'Vėliau sistemą galime patikrinti ir prižiūrėti.',
    ],
    kaina: ['Medžio dydis ir lajos sandara', 'Kiek tvirtinimo taškų reikia', 'Prieiga prie lajos'],
    paruosti: ['Lajos ir išsišakojimo nuotraukos', 'Adresas'],
    duk: [
      {
        klausimas: 'Ar stabilizavimas tinka kiekvienam medžiui?',
        atsakymas:
          'Ne. Kiekvienas atvejis vertinamas atskirai — kartais saugiau medį apgenėti ar pašalinti. Apžiūrėję pasakysime, kas jūsų atveju prasminga.',
      },
    ],
    nuotraukos: [G(46), G(2), G(17)],
    susijusios: ['medziu-genejimas', 'avariniu-medziu-pjovimas'],
  },

  'kelmu-naikinimas-frezavimas': {
    trumpas: 'Kelmų naikinimas',
    h1: 'Kelmų frezavimas ir išrovimas',
    title: 'Kelmų frezavimas ir naikinimas | ArbCut, Kaunas',
    description:
      'Kelmų pašalinimas frezavimu iki žemės lygio ar giliau arba išrovimu — vieta paruošta sodinti ar statyti. Kaina nuo 75 €. +370 603 66901.',
    ivadas:
      'Kelmą šaliname frezavimo būdu arba išrovimu — pagal kelmo dydį, vietą ir tai, ką planuojate daryti toliau. Frezuojant kelmas susmulkinamas iki žemės lygio ar giliau, todėl vietoje galima sėti veją ar sodinti.',
    tinka: [
      'Liko kelmas po medžio pjovimo',
      'Ruošiate vietą naujam sodinimui, takeliui ar statybai',
      'Kelmai po nupjautų tujų ar gyvatvorės',
      'Kelmas kapinėse ar šalia takelių',
    ],
    eiga: [
      'Įvertiname kelmo dydį ir prieigą frezai.',
      'Frezuojame iki sutarto gylio arba išrauname.',
      'Sugrėbiame drožles, vieta lieka tvarkinga.',
    ],
    kaina: ['Kelmo skersmuo ir kiekis', 'Prieiga ir paviršius aplink', 'Pageidaujamas gylis'],
    paruosti: ['Kelmų nuotraukos su mastu (pvz., greta padėta pėda ar įrankis)', 'Kiek kelmų', 'Adresas'],
    duk: [
      {
        klausimas: 'Ar po frezavimo galima sodinti?',
        atsakymas:
          'Taip, frezuojant kelmas pašalinamas iki žemės lygio ar giliau, todėl vietą galima paruošti sodinimui ar vejai.',
      },
    ],
    nuotraukos: [G(84), G(85), G(86), G(72)],
    susijusios: ['avariniu-medziu-pjovimas', 'gyvatvoriu-karpymas', 'saku-isvezimas'],
  },

  'saku-isvezimas': {
    trumpas: 'Išvežimas',
    h1: 'Šakų ir medienos išvežimas Kaune ir Kauno rajone',
    title: 'Šakų ir medienos išvežimas Kaune | ArbCut',
    description:
      'Po medžių darbų Kaune ir Kauno rajone išvežame šakas ir medieną fiskaru (nuo 20 m³). Toliau mediena paliekama tvarkingoje krūvoje. Kaina nuo 80 €.',
    ivadas:
      'Kaune ir Kauno rajone po darbų išvežame šakas ir medieną nuosavu fiskaru (talpa nuo 20 kubinių metrų). Toliau už Kauno rajono medį nupjauname ir sutvarkome, o šakas ir medieną sukrauname krūvoje. Kas išvežama ir už kokią kainą, sutariame iš anksto.',
    tinka: [
      'Po medžių pjovimo ar genėjimo Kaune ar Kauno rajone',
      'Po audros liko daug šakų ir kamienų',
      'Sklypo tvarkymas, kai susikaupė daug medienos',
    ],
    eiga: [
      'Sutariame, kas išvežama ir kiek.',
      'Fiskaru pakrauname šakas ir medieną.',
      'Išvežame ir paliekame sutvarkytą teritoriją.',
    ],
    kaina: ['Kiekis (kubiniai metrai)', 'Privažiavimas fiskarui', 'Ar išvežimas kartu su pjovimo darbais'],
    paruosti: ['Nuotraukos, kiek yra šakų ir medienos', 'Adresas Kaune ar Kauno rajone'],
    duk: [
      {
        klausimas: 'Ar išvežate medieną už Kauno rajono ribų?',
        atsakymas:
          'Išvežame Kaune ir Kauno rajone. Kitur medį nupjauname ir sutvarkome, o šakas bei medieną paliekame tvarkingoje krūvoje.',
      },
    ],
    nuotraukos: [G(73), G(16), G(39), G(20)],
    susijusios: ['avariniu-medziu-pjovimas', 'medziu-genejimas', 'audros-isverstu-medziu-salinimas'],
  },

  'gyvatvoriu-karpymas': {
    trumpas: 'Gyvatvorės',
    h1: 'Gyvatvorių karpymas ir formavimas',
    title: 'Gyvatvorių karpymas ir formavimas | ArbCut',
    description:
      'Įvairaus aukščio gyvatvorių ir tujų karpymas bei formavimas. Kaina paprastai nuo 2 iki 7 € už bėginį metrą, sutariama individualiai. +370 603 66901.',
    ivadas:
      'Karpome ir formuojame įvairaus aukščio gyvatvores, pašaliname peraugusias ar apdžiūvusias dalis. Aukštas gyvatvores pasiekiame ir iš viršaus. Po darbų nukarpytas šakas surenkame, o Kaune ir Kauno rajone galime jas išvežti.',
    tinka: [
      'Peraugusi tujų ar kitų augalų gyvatvorė',
      'Aukšta gyvatvorė, kurios viršaus nepasiekiate',
      'Pavieniai formuojami krūmai',
    ],
    eiga: ['Aptariame aukštį ir formą.', 'Karpome ir lyginame.', 'Surenkame nukarpytas šakas.'],
    kaina: [
      'Gyvatvorės aukštis, plotis ir ilgis',
      'Kiek peraugusi',
      'Šakų išvežimas (Kaune ir Kauno rajone)',
    ],
    paruosti: ['Gyvatvorės nuotrauka ir apytikslis ilgis metrais', 'Adresas'],
    duk: [
      {
        klausimas: 'Kiek kainuoja gyvatvorės karpymas?',
        atsakymas:
          'Paprastai nuo 2 iki 7 € už bėginį metrą — priklauso nuo aukščio, pločio ir ilgio. Tikslią kainą sutariame pamatę gyvatvorę ar jos nuotrauką.',
      },
    ],
    nuotraukos: [G(77), G(74), G(75), G(79)],
    susijusios: ['kelmu-naikinimas-frezavimas', 'medziu-genejimas'],
  },

  'darbai-su-autoboksteliu': {
    trumpas: 'Autobokštelis',
    h1: 'Darbai su autobokšteliu iki 20 metrų',
    title: 'Autobokštelio paslaugos iki 20 m | ArbCut, Kaunas',
    description:
      'Aukštuminiai darbai nuosavu autobokšteliu iki 20 m: medžių pjovimas ir genėjimas, latakai, dažymas, iškabos. Aukščiau dirbame alpinistine įranga. +370 603 66901.',
    ivadas:
      'Turime nuosavą autobokštelį, kuriuo saugiai pasiekiame iki 20 metrų aukštį. Juo pjauname ir genime medžius, valome latakus, dažome, montuojame iškabas. Kai reikia aukščiau arba bokštelis neprivažiuoja dėl ankštos aplinkos, dirbame alpinistine įranga ir virvėmis.',
    tinka: [
      'Medžių pjovimas ir genėjimas ten, kur privažiuoja technika',
      'Latakų, stogo ar fasado darbai be pastolių',
      'Iškabų montavimas ar demontavimas',
      'Trumpi darbai aukštyje, kuriems nesinori nuomotis technikos',
    ],
    eiga: [
      'Aptariame darbą ir patikriname, ar bokštelis privažiuos.',
      'Atvykstame su technika ir įranga.',
      'Atliekame darbą ir sutvarkome aplinką.',
    ],
    kaina: ['Darbo trukmė ir pobūdis', 'Aukštis ir privažiavimas', 'Atstumas iki objekto'],
    paruosti: ['Objekto nuotraukos', 'Ar galima privažiuoti prie pat objekto', 'Adresas'],
    duk: [
      {
        klausimas: 'Ką daryti, jei autobokštelis neprivažiuoja?',
        atsakymas:
          'Tada dirbame alpinistine įranga ir virvėmis — taip pasiekiame ir aukščiau nei 20 m, ir ankštose vietose.',
      },
    ],
    nuotraukos: [G(4), G(63), G(57), G(70)],
    susijusios: ['lietvamzdziu-stogo-valymas', 'dazymo-darbai-aukstyje', 'medziu-genejimas'],
  },

  'lietvamzdziu-stogo-valymas': {
    trumpas: 'Latakai ir stogas',
    h1: 'Lietvamzdžių, latakų ir stogo dangos valymas',
    title: 'Latakų ir stogo valymas su autobokšteliu | ArbCut',
    description:
      'Lietaus latakų ir lietvamzdžių valymas nuo lapų, stogo dangos valymas nuo samanų; žiemą — sniego, ledo ir varveklių šalinimas. Kaina nuo 4 €/m.',
    ivadas:
      'Užsikimšę latakai ir lietvamzdžiai sukelia drėgmės problemų ir gadina fasadą. Išvalome latakus nuo lapų ir sąnašų, taip pat lietvamzdžius, nuvalome stogo dangą nuo samanų ir nešvarumų. Žiemą šaliname sniegą, ledą ir varveklius nuo stogų.',
    tinka: [
      'Latakai prisipildė lapų ir vanduo bėga per kraštą',
      'Ant stogo dangos samanos',
      'Žiemą ant stogo krašto kabo varvekliai',
    ],
    eiga: [
      'Aptariame stogo aukštį ir latakų ilgį.',
      'Dirbame nuo autobokštelio arba su alpinistine įranga.',
      'Surenkame nuvalytas šiukšles.',
    ],
    kaina: ['Latakų ilgis metrais', 'Stogo aukštis ir prieiga', 'Užterštumas'],
    paruosti: ['Stogo ir latakų nuotraukos', 'Apytikslis latakų ilgis', 'Adresas'],
    duk: [
      {
        klausimas: 'Kiek kainuoja latakų valymas?',
        atsakymas: 'Nuo 4 € už metrą. Galutinė kaina priklauso nuo aukščio, prieigos ir užterštumo.',
      },
    ],
    nuotraukos: [G(67), G(68), G(66), G(61)],
    susijusios: ['darbai-su-autoboksteliu', 'dazymo-darbai-aukstyje', 'kiti-aukstuminiai-darbai'],
  },

  'dazymo-darbai-aukstyje': {
    trumpas: 'Dažymas aukštyje',
    h1: 'Dažymo darbai aukštyje',
    title: 'Pakalimų ir fasadų dažymas aukštyje | ArbCut',
    description:
      'Namų pakalimų, fasadų elementų ir kitų aukštai esančių paviršių dažymas su autobokšteliu, be pastolių. Kaina nuo 100 €. +370 603 66901.',
    ivadas:
      'Dažome namų pakalimus, fasadų elementus, stogo detales ir kitus sunkiai pasiekiamus paviršius. Dirbame su autobokšteliu, todėl nereikia statyti pastolių. Paviršių paruošiame, nudažome ir sutvarkome aplinką. Kartu galime išvalyti latakus ar atlikti smulkų remontą aukštyje.',
    tinka: ['Pakalimai ir vėjalentės', 'Fasado elementai aukštyje', 'Stogo detalės'],
    eiga: ['Aptariame paviršius ir medžiagas.', 'Paruošiame paviršių.', 'Dažome ir sutvarkome aplinką.'],
    kaina: ['Paviršiaus plotas ir aukštis', 'Paruošimo apimtis', 'Prieiga autobokšteliui'],
    paruosti: ['Paviršių nuotraukos', 'Pageidaujami dažai, jei jau pasirinkote', 'Adresas'],
    duk: [
      {
        klausimas: 'Ar reikia statyti pastolius?',
        atsakymas: 'Dažniausiai ne — dirbame nuo autobokštelio iki 20 m aukščio.',
      },
    ],
    nuotraukos: [G(62), G(65), G(66), G(69)],
    susijusios: ['lietvamzdziu-stogo-valymas', 'darbai-su-autoboksteliu'],
  },

  'reklaminiu-iskabu-montavimas': {
    trumpas: 'Iškabos',
    h1: 'Reklaminių iškabų montavimas ir demontavimas',
    title: 'Reklaminių iškabų montavimas aukštyje | ArbCut',
    description:
      'Reklaminių iškabų, stendų ir ženklų montavimas bei demontavimas aukštyje su autobokšteliu ar alpinistine įranga. Kaina nuo 3 €/m². +370 603 66901.',
    ivadas:
      'Montuojame ir demontuojame reklamines iškabas, stendus bei ženklus aukštyje — prie pastatų fasadų ir ant aukštų konstrukcijų. Dirbame nuo autobokštelio arba alpinistine įranga, be brangaus pastolių statymo.',
    tinka: ['Iškaba ant pastato fasado', 'Reklaminis stendas ant konstrukcijos', 'Plakato keitimas aukštyje'],
    eiga: ['Aptariame iškabos dydį ir tvirtinimą.', 'Montuojame arba demontuojame.', 'Sutvarkome aplinką.'],
    kaina: ['Iškabos plotas (nuo 3 €/m²)', 'Aukštis', 'Tvirtinimo sudėtingumas'],
    paruosti: ['Vietos nuotrauka', 'Iškabos matmenys', 'Adresas'],
    duk: [
      {
        klausimas: 'Ar dirbate ant daugiaaukščių fasadų?',
        atsakymas:
          'Taip, kai autobokštelis nepasiekia, dirbame alpinistine įranga. Konkretų darbą aptariame pamatę vietą.',
      },
    ],
    nuotraukos: [G(48), G(49), G(53), G(57)],
    susijusios: ['darbai-su-autoboksteliu', 'kiti-aukstuminiai-darbai'],
  },

  'kiti-aukstuminiai-darbai': {
    trumpas: 'Kiti darbai aukštyje',
    h1: 'Kiti aukštuminiai darbai',
    title: 'Aukštuminiai darbai alpinistine įranga | ArbCut',
    description:
      'Varveklių ir sniego šalinimas, dekoracijų kabinimas, smulkus remontas ir montavimas aukštyje alpinistine įranga ar autobokšteliu. Kaina nuo 50 €.',
    ivadas:
      'Be medžių, atliekame ir kitus darbus aukštyje: šaliname varveklius ir sniegą nuo stogų, kabiname kalėdines dekoracijas ir lemputes, atliekame smulkų remontą ir montavimą sunkiai prieinamose vietose. Turite netipinį darbą aukštyje — paskambinkite ir aptarsime, ar galime padėti.',
    tinka: ['Varvekliai ir sniegas ant stogo', 'Dekoracijos ir lemputės', 'Smulkus remontas sunkiai pasiekiamoje vietoje'],
    eiga: ['Aptariame darbą telefonu ar pagal nuotraukas.', 'Parenkame įrangą.', 'Atliekame darbą.'],
    kaina: ['Darbo pobūdis ir trukmė', 'Aukštis ir prieiga'],
    paruosti: ['Vietos nuotraukos', 'Trumpas darbo aprašymas'],
    duk: [
      {
        klausimas: 'Ar imatės darbų, kurių nėra sąraše?',
        atsakymas: 'Dažnai taip. Paskambinkite ir papasakokite — pasakysime, ar galime padėti.',
      },
    ],
    nuotraukos: [G(59), G(56), G(52), G(47)],
    susijusios: ['darbai-su-autoboksteliu', 'lietvamzdziu-stogo-valymas'],
  },
};

/* Darbo eiga nuotraukose — aprašyta tik tai, kas matyti. */
export const sekos = [
  {
    pavadinimas: 'Aukšta eglė šalia namo',
    paslauga: 'avariniu-medziu-pjovimas',
    kadrai: [
      { src: '/assets/images/Work1.jpg', tekstas: 'Prieš: eglė auga prie pat namo' },
      { src: G(14), tekstas: 'Viršūnė nuimama dalimis' },
      { src: G(15), tekstas: 'Kamienas nuleidžiamas atkarpomis' },
      { src: G(16), tekstas: 'Mediena supjaustyta ir sukrauta' },
    ],
  },
  {
    pavadinimas: 'Po audros — medis ant stogo',
    paslauga: 'audros-isverstu-medziu-salinimas',
    kadrai: [
      { src: G(81), tekstas: 'Išverstas medis užvirto ant pastato' },
      { src: G(83), tekstas: 'Medis pjaunamas dalimis nuo stogo' },
      { src: G(82), tekstas: 'Stogas atlaisvintas nuo kamieno' },
    ],
  },
  {
    pavadinimas: 'Kelmo frezavimas',
    paslauga: 'kelmu-naikinimas-frezavimas',
    kadrai: [
      { src: G(84), tekstas: 'Kelmų freza darbe' },
      { src: G(85), tekstas: 'Kelmas sufrezuojamas' },
      { src: G(86), tekstas: 'Vieta paruošta vejai ar sodinimui' },
    ],
  },
];

/* Galerijos kategorijos (pagal tai, kas matyti nuotraukose). */
export const galerijosKategorijos = [
  { id: 'medziai', pavadinimas: 'Medžių pjovimas', nr: [2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46] },
  { id: 'audra', pavadinimas: 'Po audros', nr: [81, 82, 83] },
  { id: 'aukstyje', pavadinimas: 'Darbai aukštyje', nr: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70] },
  { id: 'kelmai', pavadinimas: 'Kelmai ir išvežimas', nr: [72, 73, 84, 85, 86] },
  { id: 'gyvatvores', pavadinimas: 'Gyvatvorės', nr: [74, 75, 77, 78, 79, 80] },
];

export const galerijosAlt = {
  medziai: 'Medžio pjovimo darbai',
  audra: 'Audros išversto medžio šalinimas',
  aukstyje: 'Darbai aukštyje',
  kelmai: 'Kelmų frezavimas ir medienos išvežimas',
  gyvatvores: 'Gyvatvorių karpymas',
};
