/* Atsiliepimų atranka rodymui: tik su tekstu, prasmingo ilgio, naujausi pirma.
   Tekstai nekeičiami (originali rašyba). Šaltinis — Paslaugos.lt. */
import { atsiliepimai } from './atsiliepimai.js';

const tinkamas = (a, min = 90, max = 560) => a.tekstas && a.tekstas.length >= min && a.tekstas.length <= max && !a.vardas.startsWith('Paslaugos.lt');

export function atrinkti({ slug, n = 3, min, max } = {}) {
  const pool = atsiliepimai.filter((a) => tinkamas(a, min, max));
  const savi = slug ? pool.filter((a) => a.paslauga === slug) : [];
  const kiti = pool.filter((a) => !savi.includes(a));
  return [...savi, ...kiti].slice(0, n);
}

export const suTekstu = atsiliepimai.filter((a) => a.tekstas && a.tekstas.trim().length > 0);
