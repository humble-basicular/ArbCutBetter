/* =====================================================================
   PASLAUGOS — 12 realių paslaugų iš paslaugos.lt profilio + kainos.
   Kainos iš profilio („Kaina nuo X €"). Slug'ai = paslaugų puslapių URL
   (/paslaugos/[slug]) ir atitinka nuotraukų failus public/assets/images/paslaugos/.
   SVARBU: jokių „smulkinimas/smulkintuvas" — klientas pardavė smulkintuvą.
   ===================================================================== */

export const paslaugos = [
  {
    slug: 'avariniu-medziu-pjovimas',
    pavadinimas: 'Pavojingų ir avarinių medžių pjovimas',
    aprasymas: 'Pavojų keliančių medžių pjovimas šalia pastatų, elektros linijų ir kitų kliūčių — saugiai, dalimis, nuleidžiant virvėmis.',
    seo: 'Pavojingų ir avarinių medžių pjovimas yra sudėtingiausias arboristo darbas: medis dažnai stovi šalia namo, tvoros, elektros laidų ar kapavietės, todėl jį tenka pjauti dalimis ir kontroliuojamai nuleisti virvėmis arba autobokšteliu. Turime 13+ metų patirties dirbant tokiose situacijose visoje Lietuvoje. Įvertiname medžio būklę, pasvirimą bei aplinką ir parenkame saugiausią pjovimo būdą, kad nenukentėtų jūsų turtas. Po darbų galime surinkti šakas, išvežti medieną ir sutvarkyti teritoriją.',
    kaina: 'nuo 50 €',
    nuotrauka: '/assets/images/paslaugos/avariniu-medziu-pjovimas.jpg',
    ikona: 'pavojus',
    featured: true,
  },
  {
    slug: 'darbai-su-autoboksteliu',
    pavadinimas: 'Darbai su autobokšteliu (iki 20 m)',
    aprasymas: 'Aukštuminiai darbai iki 20 metrų nuosavu autobokšteliu — greitai, saugiai ir be papildomos technikos nuomos.',
    seo: 'Turime nuosavą autobokštelį, kuriuo saugiai pasiekiame iki 20 metrų aukštį. Tai leidžia greitai ir tvarkingai atlikti medžių pjovimą, genėjimą, dažymo, valymo ar montavimo darbus aukštyje be papildomos technikos nuomos. Kai reikia dar aukščiau arba bokštelis nepasiekia dėl ankštos aplinkos, dirbame alpinistine įranga ir virvėmis. Nuosava technika reiškia mažesnę kainą jums ir lankstesnį darbų grafiką.',
    kaina: 'pagal projektą',
    nuotrauka: '/assets/images/Technika.jpg',
    ikona: 'autobokstelis',
    featured: true,
  },
  {
    slug: 'medziu-genejimas',
    pavadinimas: 'Medžių genėjimas ir lajos formavimas',
    aprasymas: 'Profesionalus genėjimas, sausų ir pavojingų šakų šalinimas bei lajos formavimas, kad medis liktų sveikas ir saugus.',
    seo: 'Profesionalus genėjimas pailgina medžio gyvenimą ir sumažina riziką: pašaliname sausas, sergančias ar trinčiai linkusias šakas, formuojame lają ir prašviesiname vainiką. Dirbame arboristiniu būdu — alpinistine įranga arba autobokšteliu — todėl pasiekiame ir aukštas, sunkiai prieinamas šakas nepažeisdami medžio. Tinkamas genėjimo laikas ir pjūvio vieta lemia, ar medis greitai užgis, todėl visada paaiškiname, ką ir kodėl darome.',
    kaina: 'nuo 50 €',
    nuotrauka: '/assets/images/galerija/galerija-02.jpg',
    ikona: 'genejimas',
    featured: false,
  },
  {
    slug: 'kelmu-naikinimas-frezavimas',
    pavadinimas: 'Kelmų naikinimas (frezavimas / išrovimas)',
    aprasymas: 'Kelmų pašalinimas frezavimo būdu arba išrovimas iki žemės lygio — teritorija paruošta sodinimui ar statyboms.',
    seo: 'Likęs kelmas trukdo sodinti, statyti ar tiesiog gadina vaizdą. Kelmus šaliname frezavimo būdu arba išrovimu — priklausomai nuo kelmo dydžio, vietos ir to, ką planuojate daryti toliau. Frezavimas pašalina kelmą iki žemės lygio (ar giliau), todėl vieta lieka tvarkinga ir tinkama naujam sodinimui. Dirbame ir sudėtingose vietose, pvz. kapinėse ar šalia takelių, su pagarba aplinkai.',
    kaina: 'nuo 75 €',
    nuotrauka: '/assets/images/paslaugos/kelmu-naikinimas-frezavimas.jpg',
    ikona: 'kelmas',
    featured: false,
  },
  {
    slug: 'saku-isvezimas',
    pavadinimas: 'Šakų ir medienos išvežimas',
    aprasymas: 'Po darbų išvežame šakas ir medieną fiskaru (Kaune ir Kauno rajone), paliekame švarią teritoriją.',
    seo: 'Po pjovimo lieka šakos ir mediena — pasirūpiname ir tuo. Kaune ir Kauno rajone turime fiskarą, kuriuo išvežame susidariusią medieną ir šakas (talpa nuo 20 kubinių metrų), o teritoriją paliekame sutvarkytą. Toliau už Kauno rajono medį nupjauname ir sutvarkome, o šakas bei medieną paliekame krūvoje. Visada iš anksto sutariame, kas išvežama ir už kokią kainą — be netikėtumų.',
    kaina: 'nuo 80 €',
    nuotrauka: '/assets/images/paslaugos/saku-isvezimas.jpg',
    ikona: 'sunkvezimis',
    featured: false,
  },
  {
    slug: 'medziu-lajos-stabilizavimas',
    pavadinimas: 'Medžių lajos stabilizavimo sistemos',
    aprasymas: 'Lajos stabilizavimo sistemų montavimas ir priežiūra — išvengsime galimos rizikos žmonėms ir turtui, o medis lieka gyvas.',
    seo: 'Ne kiekvieną pavojingą medį būtina nupjauti. Kai medis vertingas, bet turi įtrūkusią ar persišakojusią lają, sumontuojame lajos stabilizavimo (atotampų) sistemą, kuri suriša šakas ir sumažina lūžimo riziką per vėją ar apkrovą. Kiekvienas atvejis vertinamas individualiai — apžiūrime medį, pasiūlome sprendimą ir prižiūrime sistemą vėliau. Taip išsaugomas medis ir apsaugomi žmonės bei turtas.',
    kaina: 'nuo 100 €',
    nuotrauka: '/assets/images/paslaugos/medziu-lajos-stabilizavimas.jpg',
    ikona: 'saugu',
    featured: false,
  },
  {
    slug: 'gyvatvoriu-karpymas',
    pavadinimas: 'Gyvatvorių karpymas',
    aprasymas: 'Gyvatvorių formavimas ir karpymas — kaina priklauso nuo aukščio, pločio ir ilgio, sutariama individualiai.',
    seo: 'Tvarkingai apkarpyta gyvatvorė formuoja viso kiemo vaizdą. Karpome ir formuojame įvairaus aukščio gyvatvores, pašaliname peraugusias ar apdžiūvusias dalis. Kaina priklauso nuo gyvatvorės aukščio, pločio ir ilgio — paprastai svyruoja nuo 2 iki 7 € už bėginį metrą ir sutariama individualiai. Po darbų surenkame ir, jei reikia, išvežame nukarpytas šakas.',
    kaina: 'nuo 2 €/m',
    nuotrauka: '/assets/images/paslaugos/gyvatvoriu-karpymas.jpg',
    ikona: 'gyvatvore',
    featured: false,
  },
  {
    slug: 'dazymo-darbai-aukstyje',
    pavadinimas: 'Dažymo darbai aukštyje',
    aprasymas: 'Pakalimų, fasadų ir kitų aukštai esančių paviršių dažymas su autobokšteliu — kokybiškai ir tvarkingai.',
    seo: 'Atliekame dažymo darbus aukštyje — namų pakalimus, fasadų elementus, stogo detales ir kitus sunkiai pasiekiamus paviršius. Dirbame su autobokšteliu, todėl darbas vyksta greitai ir saugiai, be pastolių statymo. Paviršius paruošiame, nudažome kokybiškai ir tvarkingai, o aplinką po darbų sutvarkome. Klientai vertina, kad kartu galime atlikti ir gretimus darbus — latakų valymą ar smulkų remontą aukštyje.',
    kaina: 'nuo 100 €',
    nuotrauka: '/assets/images/paslaugos/dazymo-darbai-aukstyje.jpg',
    ikona: 'dazymas',
    featured: false,
  },
  {
    slug: 'reklaminiu-iskabu-montavimas',
    pavadinimas: 'Reklaminių iškabų montavimas ir demontavimas',
    aprasymas: 'Reklaminių iškabų, stendų ir ženklų montavimas bei demontavimas aukštyje su autobokšteliu.',
    seo: 'Montuojame ir demontuojame reklamines iškabas, stendus bei ženklus aukštyje. Nuosavas autobokštelis leidžia saugiai dirbti prie pastatų fasadų ir aukštų konstrukcijų be brangaus pastolių statymo. Kaina skaičiuojama nuo 3 € už kvadratinį metrą, priklausomai nuo iškabos dydžio, aukščio ir tvirtinimo sudėtingumo. Dirbame tvarkingai ir laikomės saugos reikalavimų.',
    kaina: 'nuo 3 €/m²',
    nuotrauka: '/assets/images/paslaugos/reklaminiu-iskabu-montavimas.jpg',
    ikona: 'reklama',
    featured: false,
  },
  {
    slug: 'lietvamzdziu-stogo-valymas',
    pavadinimas: 'Lietvamzdžių ir stogo dangos valymas',
    aprasymas: 'Lietaus latakų, lietvamzdžių ir stogo dangos valymas nuo lapų, samanų ir nešvarumų — su autobokšteliu.',
    seo: 'Užsikimšę latakai ir lietvamzdžiai sukelia drėgmės problemų ir gadina fasadą. Išvalome namų lietaus latakus nuo lapų ir kitų sąnašų, prabėgame lietvamzčius, nuvalome stogo dangą nuo samanų ir nešvarumų. Dirbame su autobokšteliu, todėl pasiekiame ir aukštų bei sudėtingų stogų vietas. Kaina nuo 4 € už metrą; žiemą papildomai šaliname sniegą, ledą ir varveklius nuo stogų.',
    kaina: 'nuo 4 €/m',
    nuotrauka: '/assets/images/paslaugos/lietvamzdziu-stogo-valymas.jpg',
    ikona: 'lasai',
    featured: false,
  },
  {
    slug: 'audros-isverstu-medziu-salinimas',
    pavadinimas: 'Audros padarinių šalinimas',
    aprasymas: 'Audros ar stipraus vėjo išverstų ir užvirtusių medžių šalinimas — atvykstame operatyviai.',
    seo: 'Po audros ar stipraus vėjo medžiai dažnai užvirsta ant namų, automobilių, tvorų ar kelio — tokius darbus reikia atlikti greitai ir atsakingai. Atvykstame operatyviai, įvertiname situaciją ir saugiai pašaliname išverstus ar pavojingai pasvirusius medžius bei nulaužtas šakas. Dirbame visoje Lietuvoje, turime visą reikiamą įrangą, o po darbų sutvarkome teritoriją. Kilus avarinei situacijai — skambinkite, aptarsime greičiausią sprendimą.',
    kaina: 'nuo 50 €',
    nuotrauka: '/assets/images/paslaugos/audros-isverstu-medziu-salinimas.jpg',
    ikona: 'audra',
    featured: false,
  },
  {
    slug: 'kiti-aukstuminiai-darbai',
    pavadinimas: 'Kiti aukštuminiai darbai',
    aprasymas: 'Įvairūs darbai aukštyje alpinistine įranga arba autobokšteliu — varveklių šalinimas, dekoracijų kabinimas ir kt.',
    seo: 'Be medžių, atliekame ir kitus aukštuminius darbus, kuriems reikia alpinistinės įrangos ar autobokštelio: varveklių ir sniego šalinimą nuo stogų, kalėdinių dekoracijų bei lempučių kabinimą, smulkų remontą ir montavimą aukštyje sunkiai prieinamose vietose. Jei turite netipinį darbą aukštyje — paskambinkite ir aptarsime, ar galime padėti. Dažniausiai sprendimą randame.',
    kaina: 'nuo 50 €',
    nuotrauka: '/assets/images/paslaugos/kiti-aukstuminiai-darbai.jpg',
    ikona: 'alpinizmas',
    featured: false,
  },
];

export const featuredPaslaugos = paslaugos.filter((p) => p.featured);
export const secondaryPaslaugos = paslaugos.filter((p) => !p.featured);
export const getPaslauga = (slug) => paslaugos.find((p) => p.slug === slug);

/* =====================================================================
   KATEGORIJOS — tos pačios 12 realių paslaugų sugrupuotos į 6 blokus
   (pagrindinio puslapio „paslaugų" sekcijai — kortelės su nuotrauka + sąrašu).
   „nuoroda" veda į pagrindinį tos kategorijos paslaugos puslapį.
   SVARBU: jokio „smulkinimo" — tik realios paslaugos.
   ===================================================================== */
export const kategorijos = [
  {
    nr: '01',
    pavadinimas: 'Medžių pjovimas ir šalinimas',
    ikona: 'pavojus',
    nuotrauka: '/assets/images/paslaugos/avariniu-medziu-pjovimas.jpg',
    punktai: [
      'Pavojingų ir avarinių medžių pjovimas',
      'Darbai prie pastatų ir elektros linijų',
      'Pjovimas dalimis alpinistine įranga',
      'Audros išverstų medžių šalinimas',
    ],
    nuoroda: '/paslaugos/avariniu-medziu-pjovimas',
  },
  {
    nr: '02',
    pavadinimas: 'Genėjimas ir medžių priežiūra',
    ikona: 'genejimas',
    nuotrauka: '/assets/images/paslaugos/gyvatvoriu-karpymas.jpg',
    punktai: [
      'Genėjimas ir lajos formavimas',
      'Sausų ir pavojingų šakų šalinimas',
      'Medžių lajos stabilizavimo sistemos',
      'Sodų ir vaismedžių priežiūra',
    ],
    nuoroda: '/paslaugos/medziu-genejimas',
  },
  {
    nr: '03',
    pavadinimas: 'Darbai su autobokšteliu (iki 20 m)',
    ikona: 'autobokstelis',
    nuotrauka: '/assets/images/Technika.jpg',
    punktai: [
      'Aukštuminiai darbai iki 20 metrų',
      'Dažymo darbai aukštyje',
      'Reklaminių iškabų montavimas',
      'Lietvamzdžių ir stogo dangos valymas',
    ],
    nuoroda: '/paslaugos/darbai-su-autoboksteliu',
  },
  {
    nr: '04',
    pavadinimas: 'Kelmų naikinimas ir sklypų valymas',
    ikona: 'kelmas',
    nuotrauka: '/assets/images/paslaugos/kelmu-naikinimas-frezavimas.jpg',
    punktai: [
      'Kelmų frezavimas ir išrovimas',
      'Apaugusių sklypų valymas',
      'Teritorijos paruošimas tolesniems darbams',
      'Po audros nuvirtusių medžių tvarkymas',
    ],
    nuoroda: '/paslaugos/kelmu-naikinimas-frezavimas',
  },
  {
    nr: '05',
    pavadinimas: 'Šakų ir medienos išvežimas',
    ikona: 'sunkvezimis',
    nuotrauka: '/assets/images/paslaugos/saku-isvezimas.jpg',
    punktai: [
      'Šakų ir medienos išvežimas fiskaru',
      'Kaune ir Kauno rajone',
      'Teritorijos sutvarkymas po darbų',
      'Toliau — mediena paliekama tvarkingoje krūvoje',
    ],
    nuoroda: '/paslaugos/saku-isvezimas',
  },
  {
    nr: '06',
    pavadinimas: 'Gyvatvorės ir kiti aukštuminiai darbai',
    ikona: 'gyvatvore',
    nuotrauka: '/assets/images/galerija/galerija-77.jpg',
    punktai: [
      'Gyvatvorių karpymas ir formavimas',
      'Krūmų ir želdinių genėjimas',
      'Varveklių ir sniego šalinimas nuo stogų',
      'Kalėdinių dekoracijų kabinimas',
    ],
    nuoroda: '/paslaugos/gyvatvoriu-karpymas',
  },
];
