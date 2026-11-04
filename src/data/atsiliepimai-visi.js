/* Abu šaltiniai viename sąraše, naujausi pirma. Kiekvienas įrašas žino savo šaltinį.
   Įvertinimai NIEKADA nesumuojami — kiekviena platforma rodoma atskirai. */
import { atsiliepimai, atsiliepimuKiekis, atsiliepimuVidurkis, atsiliepimuSaltinis, atsiliepimuSinchronizuota } from './atsiliepimai.js';
import { googleAtsiliepimai, googleIvertinimas, googleKiekis, googleSinchronizuota } from './atsiliepimai-google.js';

export const saltiniai = {
  paslaugos: {
    id: 'paslaugos',
    pavadinimas: 'Paslaugos.lt',
    ivertinimas: atsiliepimuVidurkis,
    kiekis: atsiliepimuKiekis,
    url: atsiliepimuSaltinis,
    data: atsiliepimuSinchronizuota,
  },
  google: {
    id: 'google',
    pavadinimas: 'Google',
    ivertinimas: googleIvertinimas,
    kiekis: googleKiekis,
    url: null,
    data: googleSinchronizuota,
  },
};

const zymeti = (arr, saltinis) => arr.map((a) => ({ ...a, saltinis }));

export const visiAtsiliepimai = [
  ...zymeti(atsiliepimai, 'paslaugos'),
  ...zymeti(googleAtsiliepimai, 'google'),
]
  .filter((a) => a.tekstas && a.tekstas.trim() && !a.vardas.startsWith('Paslaugos.lt'))
  .sort((a, b) => (a.data < b.data ? 1 : a.data > b.data ? -1 : 0));
