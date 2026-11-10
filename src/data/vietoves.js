/* =====================================================================
   VIETOVĖS — lokalizuotas turinys /[vietove] puslapiams.
   Slug'ai ir miestų sąrašas — iš site.vietoves (vienas šaltinis).
   Tekstai SĄMONINGAI skirtingi kiekvienam miestui (PRD / spec §5, §9:
   jokio dubliuoto teksto — Google baudžia). Faktai nepramanyti.
   ===================================================================== */
import { site } from './site.js';

const turinys = {
  'medziu-pjovimas-kaunas': {
    intro: 'Kaunas ir Kauno rajonas — mūsų pagrindinė darbo zona, bazė Garliavoje. Atvykstame greičiausiai, o medieną ir šakas išvežame fiskaru.',
    tekstas:
      'Kaunas yra ArbCut namų teritorija — čia ir Kauno rajone dirbame dažniausiai, todėl atvykstame operatyviai, o po darbų medieną bei šakas išvežame nuosavu fiskaru. Mieste daug brandžių medžių prie namų, garažų ir elektros linijų, kuriuos tenka pjauti dalimis ir nuleisti virvėmis. Turime nuosavą autobokštelį iki 20 m, todėl genėjimą ar pavojingų medžių šalinimą atliekame saugiai net ankštuose Kauno kiemuose ir senamiesčio sklypuose.',
  },
  'medziu-pjovimas-vilnius': {
    intro: 'Vilniuje dirbame reguliariai — pavojingi medžiai prie pastatų ir ankšti sklypai.',
    tekstas:
      'Į Vilnių išvykstame reguliariai — sostinėje dažniausiai tenka šalinti pavojingus medžius ankštuose sklypuose, prie daugiabučių, tvorų ir komunikacijų, kur klaidai nėra vietos. Tokiems darbams naudojame alpinistinę įrangą ir virves, o kur privažiuoja technika — autobokštelį iki 20 m. Didesnius objektus suderiname iš anksto ir, jei reikia, sujungiame kelių medžių darbus į vieną išvykimą, kad kaina jums būtų mažesnė.',
  },
  'medziu-pjovimas-panevezys': {
    intro: 'Panevėžyje — sodybų, sklypų ir pavojingų medžių tvarkymas.',
    tekstas:
      'Panevėžyje ir aplinkiniuose miesteliuose dažnai tvarkome sodybas ir sklypus: šaliname senus, pavojingai pasvirusius medžius, genime lają ir naikiname kelmus, kad teritorija būtų saugi ir tvarkinga. Dirbame ir prie pastatų bei ūkinių statinių, kur medį būtina nuleisti kontroliuotai. Naudojame autobokštelį ir alpinistinę įrangą, o aplinką po darbų paliekame sutvarkytą.',
  },
  'medziu-pjovimas-marijampole': {
    intro: 'Marijampolėje ir Suvalkijoje — netoli mūsų darbų zonos (Kazlų Rūda).',
    tekstas:
      'Marijampolė ir Suvalkijos kraštas yra netoli mūsų įprastos darbų zonos (dirbame ir Kazlų Rūdoje), todėl čia atvykstame patogiai. Pjauname pavojingus medžius, formuojame ir karpome gyvatvores, genime sodų medžius bei naikiname kelmus. Sodybų savininkai dažnai užsako ir kompleksinį aplinkos sutvarkymą — nuo medžio pašalinimo iki teritorijos sugrėbimo.',
  },
  'medziu-pjovimas-alytus': {
    intro: 'Alytuje ir Dzūkijoje — pušys ir aukšti medžiai prie namų.',
    tekstas:
      'Dzūkijos kraštas miškingas, todėl Alytuje ir aplink dažnai tenka šalinti aukštas pušis bei medžius, augančius arti namų ar poilsiaviečių. Aukštiems medžiams pasiekti naudojame alpinistinę įrangą ir virves, o kur įmanoma privažiuoti — autobokštelį iki 20 m. Dirbame atsargiai, kad nenukentėtų pastatai ir aplinkiniai želdiniai, o po darbų teritoriją paliekame švarią.',
  },
  'medziu-pjovimas-jonava': {
    intro: 'Jonavoje — greitai pasiekiama iš Kauno, visi aukštuminiai darbai.',
    tekstas:
      'Jonava yra visai šalia Kauno, todėl čia atvykstame greitai ir patogiai — tinka ir skubiems, avariniams iškvietimams. Atliekame pavojingų medžių pjovimą, genėjimą, kelmų naikinimą bei kitus aukštuminius darbus nuosavu autobokšteliu. Kadangi esame netoli, darbų datą suderinti paprasta; medieną ir šakas po darbų sukrauname tvarkingoje krūvoje, o medienos ir šakų išvežimą atliekame tik Kaune ir Kauno rajone.',
  },
  'medziu-pjovimas-kedainiai': {
    intro: 'Kėdainiuose — sodybų medžiai, arti Kauno rajono.',
    tekstas:
      'Kėdainiai ir aplinkinės lygumos pilnos sodybų bei senų sodų, kuriuose laikui bėgant atsiranda pavojingų ar nudžiūvusių medžių. Juos saugiai pašaliname, genime lają, naikiname kelmus ir tvarkome po audrų nuvirtusius medžius. Esame netoli Kauno rajono, todėl atvykstame patogiai, o didesnius darbus suderiname iš anksto.',
  },
  'medziu-pjovimas-kazlu-ruda': {
    intro: 'Kazlų Rūdoje — miškingas kraštas, dirbame čia reguliariai.',
    tekstas:
      'Kazlų Rūda ir jos apylinkės — miškingas kraštas, kuriame dirbame reguliariai (čia mus rekomendavo ir klientai). Pjauname aukštus, pavojingus medžius prie namų ir sodybų, genime, naikiname kelmus bei karpome gyvatvores. Aukščiui pasiekti naudojame autobokštelį ir alpinistinę įrangą, o aplinką po darbų tvarkingai sutvarkome.',
  },
  // Pridėta kliento prašymu (2026-10). Tauragė patenka į aptarnavimo zoną (site.zona).
  'medziu-pjovimas-taurage': {
    intro: 'Tauragėje ir Tauragės krašte — pavojingi medžiai, genėjimas ir kelmai.',
    tekstas:
      'Tauragė ir aplinkiniai rajonai patenka į mūsų aptarnavimo zoną, todėl atvykstame ir į Tauragę, ir į aplinkines sodybas bei kaimus. Dažniausiai čia šaliname senus, pavojingai pasvirusius ar audros pažeistus medžius prie namų, ūkinių pastatų ir elektros linijų, genime lają, frezuojame kelmus. Aukštus medžius pjauname dalimis — su nuosavu autobokšteliu iki 20 m arba alpinistine įranga. Kad kelionė apsimokėtų, išvykimo datą suderiname iš anksto, o kelių kaimynų darbus galime atlikti per vieną atvykimą.',
  },
};

const vietininkas = {
  Kaunas: 'Kaune', Vilnius: 'Vilniuje', Panevėžys: 'Panevėžyje', Marijampolė: 'Marijampolėje', Alytus: 'Alytuje',
  Jonava: 'Jonavoje', Kėdainiai: 'Kėdainiuose', 'Kazlų Rūda': 'Kazlų Rūdoje', Tauragė: 'Tauragėje',
};

export const vietoves = site.vietoves.map((v) => ({ ...v, kur: vietininkas[v.miestas] || v.miestas, ...(turinys[v.slug] || {}) }));
export const getVietove = (slug) => vietoves.find((v) => v.slug === slug);
