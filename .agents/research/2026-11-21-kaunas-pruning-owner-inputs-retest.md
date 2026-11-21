# ArbCut SEO 2026-11-21: Kauno genėjimas, savininko klausimai, 28 d. retestas

Šaltiniai: Drive `management/google-foundation-audit-lt/` (ARBCUT-V2.md, Scorecard-v2.xlsx lapai „Teritorijų matrica", „GSC LT", „GSC indeksacija"), planas `2026-11-21-arbcut-seo-and-paige.md`. Bazė: `main` @ `ba84a6f`; lokali build = gyvas puslapis (title, description, canonical, H1 sutampa abiem Kauno URL). Šviežios GSC/GBP/CRM ištraukos šioje gijoje NEDARYTOS (nėra prieigos įrankių); naudoti audito 2026-10-23–11-19 duomenys.

## Kas pakeista (tik tekstas, dizainas ir kontaktai nepakeisti)
- `/medziu-genejimas-kaunas/`: nauja description (kas daroma + kaina nuo 50 € + sąmata pagal nuotraukas), pirmo ekrano įvadas, nuoroda „Medį reikia šalinti? → pjovimas Kaune", blokas „Ką reiškia „nuo 50 €" ir kaip gauti sąmatą" (3 žingsniai + ką paruošti), realus darbo pavyzdys (Aldonos kaštonas, iš `darbai.js`, be kainos ir vietovės), 2 nauji DUK (kaina; leidimas pagal straipsnio šaltinius). Title nekeistas.
- `/medziu-pjovimas-kaunas/`: pastaba „Medžio šalinti nereikia? → genėjimas Kaune" + DUK „Ar galima medį tik apgenėti?". Title/description nekeisti.
- Straipsnis `kiek-kainuoja-medzio-pasalinimas`: skyrius „Genėjimas: ką reiškia nuo 50 €" (be išgalvoto pavyzdžio), `atnaujinta` 2026-11-21.
- Abu canonical, URL, telefonas, forma nepakeisti. Kitų 22 HTML failų skirtumas tik tarpai (normalizuotas diff = 0).

## Savininko klausimų paketas (Mantui, vienas trumpas sąrašas)
1. **Zona (Q1).** Ar važiuojate į Kauno r./Garliavą ir Kauną visoms 12 paslaugų be priemokos? (Dabar 16 porų remiasi paslaugos URL.)
2. **Kitos vietovės (Q2).** Kiekvienam iš Jonava, Kėdainiai, Panevėžys, Marijampolė, Alytus, Kazlų Rūda, Tauragė, Vilnius, Kita Lietuva: kokiems darbams važiuojate, koks minimalus užsakymas, ar tik planiniai ar ir skubūs? (83 poros be URL.)
3. **Šakų išvežimas (Q3).** Ar liekame prie „tik Kaunas ir Kauno r."; ar kur nors kitur galima už priemoką?
4. **Skuba (Q4).** Ar skubūs/avariniai iškvietimai (audra, lajos stabilizavimas) galimi už Kauno r. ir kokiu laiku?
5. **„Nuo 50 €" genėjimui.** Ką ši suma apima (atvykimas, kiek šakų/valanda)? Koks realus intervalas tipiniam darbui? Be to kainos pavyzdžio ir „kas įskaičiuota" nerašome.
6. **Genėjimo pavyzdys.** Ar turite 1 savo darbą Kaune su nuotraukomis prieš/po, kainą (galima rodyti?) ir kliento sutikimą naudoti?
7. **Straipsniai.** Ar tvirtinate autorystę (Mantas) ir peržiūros datą leidimų/kainos straipsniams; ar kainas galima viešinti?
8. Publikavimo politika (neišspręsta): ar viešinti pakeitimus iš karto, ar po savininko atsakymų?

## Matrica 132 poros (CSV: `2026-11-21-matrix-132-reconciliation.csv`)
Su `dist` sutikrinta: 24 pagrįsta esamu URL (22 miesto + 2 regioninis išvežimas; visi egzistuoja build), 16 naudoja paslaugos URL, 9 išimtis (išvežimas už Kauno r.), 83 laukia savininko. Suma 132. Atskirų naujų URL nekuriame iki atsakymų.

## 28 d. retestas
Po pakartotinio nuskaitymo (URL Inspection + Request indexing abiem Kauno URL, ranka, tik su leidimu) imti LT, Web, galutinį langą, pvz. 28 d. po deploy datos; palyginti su 2026-10-23–11-19: „medžių genėjimas kaune" 50 parodymų / 0 paspaudimų / poz. 28,92; URL × užklausa: pjovimas-kaunas 37, genėjimas-kaunas 10, paslaugos/medziu-genejimas 3. Sėkmė: daugiau parodymų genėjimo URL, pozicija < 20, CTR > 0, pjovimo URL dalis krenta. Stebėti ir kainos straipsnio indeksavimą. Rodiklis be metinio palyginimo (2025 langas tuščias). Deploy data: NEŽINOMA (deploy šioje užduotyje nedarytas).
