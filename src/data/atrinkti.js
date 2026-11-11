/* Atsiliepimų atranka rodymui: tik su tekstu, prasmingo ilgio, naujausi pirma.
   Tekstai nekeičiami (originali rašyba). Šaltinis — Paslaugos.lt. */
import { atsiliepimai } from './atsiliepimai.js';

const tinkamas = (a, min = 90, max = 560) => a.tekstas && a.tekstas.length >= min && a.tekstas.length <= max && !a.vardas.startsWith('Paslaugos.lt') && a.vardas !== 'Vardas Pavardė';

export function atrinkti({ slug, n = 3, min, max, vieta, miestas } = {}) {
  const pool = atsiliepimai.filter((a) => tinkamas(a, min, max));
  /* Miesto puslapiams: atsiliepimas, kuriame klientas pats mini miestą, eina pirmas. */
  const kamienas = miestas ? miestas.slice(0, Math.max(4, miestas.length - 2)) : null;
  const vietiniai = kamienas ? atsiliepimai.filter((a) => tinkamas(a, 40, 700) && a.tekstas.includes(kamienas)) : [];
  const savi = slug ? pool.filter((a) => a.paslauga === slug && !vietiniai.includes(a)) : [];
  const kiti = pool.filter((a) => !savi.includes(a) && !vietiniai.includes(a) && (!slug || a.paslauga !== slug));
  /* vieta: skirtingi puslapiai rodo skirtingus (vis tiek tikrus) atsiliepimus, ne tuos pačius tris. */
  /* vieta = { i, is }: i-tasis iš „is“ puslapių gauna tolygiai paskirstytą atsiliepimų pradžią. */
  const pradzia = (len) => (vieta && len ? Math.floor((vieta.i * len) / vieta.is) % len : 0);
  const k = pradzia(kiti.length);
  const rot = [...kiti.slice(k), ...kiti.slice(0, k)];
  const s = pradzia(savi.length);
  const savRot = [...savi.slice(s), ...savi.slice(0, s)];
  return [...vietiniai, ...savRot, ...rot].slice(0, n);
}

export const suTekstu = atsiliepimai.filter((a) => a.tekstas && a.tekstas.trim().length > 0);
