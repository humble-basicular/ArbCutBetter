/* =====================================================================
   Tekstinis turinys: About, „Kaip dirbame" procesas, „Kodėl ArbCut", DUK.
   Visas tekstas — kliento balsu, nieko neprasimanyta (žr. CLAUDE.md / PRD §9).
   ===================================================================== */

export const apie = {
  eyebrow: 'APIE MUS',
  antraste: 'ARBCUT — medžių priežiūros meistrai',
  lead:
    'Kvalifikuotas arboristas aukštalipys su komanda esame pasiruošę jums padėti! Nupjausime, šakas sudėsime krūvomis, panaikinsime kelmą, sutvarkysime aplinką, viską galime išvežti.',
  detail:
    'Pavojų keliančių avarinių medžių pjovimas prie pastatų ar elektros laidų ir kitų kliūčių. Medžių pjovimas, genėjimas ir medžių lajos formavimas aukštyje arboristiniu būdu naudojant alpinistinę įrangą arba autobokštelį kurį turime savo. Medžių lajos stabilizavimo sistemų montavimas ir priežiūra. Kelmų naikinimas, šalinimas — frezavimas ar išrovimas. Nuosavu autobokšteliu galime atlikti įvairius darbus iki 20 metrų, aukščiau naudojant alpinistinę įrangą.',
};

/* „Kaip dirbame" — konversijai svarbus aiškumas (naujas, įkvėpta konversijos šablono). */
export const procesas = [
  {
    pavadinimas: 'Skambutis ar užklausa',
    tekstas: 'Paskambinkite arba palikite užklausą — trumpai aptarsime, ko reikia.',
    ikona: 'pokalbis',
  },
  {
    pavadinimas: 'Įvertinimas ir kaina',
    tekstas: 'Įvertiname darbą (vietoje arba pagal nuotraukas) ir pateikiame aiškią kainą.',
    ikona: 'ivertinimas',
  },
  {
    pavadinimas: 'Atliekame darbą',
    tekstas: 'Atvykstame sutartu laiku, dirbame saugiai ir tvarkingai — net sudėtingose vietose.',
    ikona: 'darbas',
  },
  {
    pavadinimas: 'Sutvarkome aplinką',
    tekstas: 'Po darbų išvežame šakas ir medieną (Kaune ir Kauno rajone), paliekame švarą.',
    ikona: 'tvarka',
  },
];

export const kodel = [
  {
    antraste: 'Saugu',
    tekstas: 'Dirbame naudodami profesionalią alpinizmo įrangą ir laikomės visų saugos reikalavimų.',
    ikona: 'saugu',
  },
  {
    antraste: 'Atsakingai',
    tekstas: 'Už kiekvieną darbą atsakome patys, nuo pradžios iki pabaigos.',
    ikona: 'atsakingai',
  },
  {
    antraste: 'Švariai',
    tekstas: 'Po darbų galime išvežti šakas ir medieną, sutvarkyti aplinką pagal jūsų poreikius ir susitarimą.',
    ikona: 'svariai',
  },
  {
    antraste: 'Greitai',
    tekstas: 'Atvykstame operatyviai, ypač avarinėmis situacijomis.',
    ikona: 'greitai',
  },
];

export const duk = [
  {
    klausimas: 'Kur dirbate?',
    atsakymas: 'Mūsų bazė — Kaunas, dažniausiai dirbame Kaune ir Kauno apskrityje. Išvykstame ir į kitus Lietuvos miestus; tolimesnį išvykimą suderiname iš anksto, o kelių kaimynų darbus galime atlikti per vieną atvykimą.',
  },
  {
    klausimas: 'Ar galite dirbti prie elektros linijų?',
    atsakymas: 'Taip, turime patirties dirbti pavojingose vietose šalia elektros linijų ir pastatų.',
  },
  {
    klausimas: 'Ar išsivežate medieną ir šakas?',
    atsakymas:
      'Taip, po darbų galime sutvarkyti teritoriją, išvežti šakas ir medieną Kaune ir Kauno rajone pagal jūsų poreikius ir susitarimą. Toliau už Kauno rajono nupjauname ir paliekame šakas bei medieną krūvoje.',
  },
  {
    klausimas: 'Kiek kainuoja medžio pašalinimas?',
    atsakymas: 'Medžių pjovimas ir genėjimas — nuo 50 €, kelmų frezavimas — nuo 75 €, išvežimas — nuo 80 €. Galutinė kaina priklauso nuo medžio dydžio, vietos, prieigos ir išvežimo. Darbą įvertiname vietoje arba pagal nuotraukas ar vaizdo įrašą.',
  },
  {
    klausimas: 'Ar dirbate savaitgaliais?',
    atsakymas: 'Taip, dirbame kasdien 08:00–18:00, įskaitant savaitgalius.',
  },
];

/* Pradžios puslapio DUK (2026-11). Atsakymai remiasi Paslaugos.lt profiliu,
   LRT.lt ir Valstietis.lt straipsniais. Tas pats tekstas eina į FAQPage schemą. */
export const dukPradzia = [
  {
    klausimas: 'Kiek kainuoja nupjauti medį?',
    atsakymas: 'Medžio pjovimas, genėjimas ir audros padarinių šalinimas kainuoja nuo 50 € už darbą, kelmo frezavimas nuo 75 €, šakų išvežimas nuo 80 €, darbai autobokšteliu nuo 150 €. Kainą lemia medžio dydis, kas aplink jį (namas, tvora, laidai, gatvė), ar privažiuoja autobokštelis ir ar reikia išvežti medieną. Preliminarią kainą pasakome pagal nuotraukas iš kelių pusių, tikslią atvažiavę į vietą.',
    nuoroda: '/kainos',
  },
  {
    klausimas: 'Ar reikia leidimo nupjauti medį savo sklype?',
    atsakymas: 'Dažnai reikia. Gyvenamųjų namų teritorijose valstybės saugomi medžiai (pvz., ąžuolai, uosiai, klevai, liepos, maumedžiai, beržai, pušys) mieste saugomi nuo 20 cm kamieno skersmens, ne mieste nuo 30 cm. Skersmuo matuojamas 1,3 m aukštyje. Dėl leidimo kreipiamasi į savivaldybę ar seniūniją. Nuo kovo 15 iki rugpjūčio 15 d. saugomų medžių kirsti negalima, išskyrus kai medis kelia grėsmę žmonių gyvybei, sveikatai ar turtui. Už neteisėtą kirtimą gyventojui gresia bauda nuo 60 iki 200 €. Mantas LRT.lt sakė: „Mes kertame medžius tik turėdami leidimus.“ Nežinote, ar jūsų medžiui reikia leidimo? Paklauskite skambindami.',
  },
  {
    klausimas: 'Ar sutvarkote ir išvežate šakas?',
    atsakymas: 'Taip. Kaune ir Kauno rajone šakas ir medieną išvežame fiskaru, jis talpina nuo 20 m³ (išvežimas nuo 80 €). Toliau nuo Kauno medį supjauname, o šakas ir medieną sukrauname tvarkingomis krūvomis jūsų sklype.',
    nuoroda: '/paslaugos/saku-isvezimas',
  },
  {
    klausimas: 'Kas, jei autobokštelis neprivažiuoja prie medžio?',
    atsakymas: 'Tada lipame į medį su alpinistine įranga. Medį pjauname dalimis, šakas ir kamieno gabalus nuleidžiame virvėmis, kad nieko neapgadintume aplink. Autobokštelis kelia iki 20 m, aukščiau irgi dirbame su virvėmis.',
  },
  {
    klausimas: 'Ar dirbate prie elektros laidų ir kapinėse?',
    atsakymas: 'Taip, tai įprasti mūsų darbai. Medį prie laidų ar kapaviečių pjauname dalimis ir nuleidžiame virvėmis. Jei medis jau užkrito ant elektros laidų, nelieskite jo ir pirmiausia praneškite elektros tinklų operatoriui.',
    nuoroda: '/paslaugos/avariniu-medziu-pjovimas',
  },
  {
    klausimas: 'Kada galite atvažiuoti ir kiek toli važiuojate?',
    atsakymas: 'Dirbame kasdien 08:00–18:00, ir savaitgaliais. Bazė Kaune, važiuojame iki 200 km aplink. Tolimesnį darbą suderiname iš anksto, kelių kaimynų darbus galima atlikti per vieną atvykimą.',
  },
];
