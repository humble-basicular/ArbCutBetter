/* =====================================================================
   paslaugos.lt → JSON eksportas (paleisti NARŠYKLĖS konsolėje).
   paslaugos.lt saugo Cloudflare „bot" patikra, todėl serveris/CI profilio
   nuskaityti negali — eksportuojame iš tikros naršyklės.

   1. Atidarykite https://paslaugos.lt/mantas-gerulis-aa777
   2. DevTools → Console → įklijuokite visą šį failą → Enter
   3. JSON nukopijuojamas į iškarpinę → išsaugokite kaip
      scripts/paslaugos-atsiliepimai.json ir paleiskite
      `npm run sync:atsiliepimai`
   ===================================================================== */
(async () => {
  const more = document.querySelector('.link-atsiliepimai .js-hidden-btn');
  if (more) { more.click(); await new Promise((r) => setTimeout(r, 1500)); }

  const text = document.body.innerText;
  const kiekis = Number((text.match(/Pagal (\d+) atsiliepim/) || [])[1]);
  const vidurkis = Number(((text.match(/Pagal \d+ atsiliepim\S*\s+(\d[.,]\d)/) || [])[1] || '').replace(',', '.'));
  const patirtis = Number((text.match(/(\d+) m\. patirtis/) || [])[1]) || null;

  const atsiliepimai = [...document.querySelectorAll('.link-atsiliepimai .pv-rec__item.js-item')].map((el) => {
    const svc = el.querySelector('.pv-rec__item-service');
    // Kategorijų (kokybė, kaina, bendravimas, terminai) įvertinimai; seni atsiliepimai jų neturi.
    const kategorijos = [...el.querySelectorAll('.review-rating')].map(
      (r) => r.querySelectorAll('.review-rating__star:not(.review-rating__star--empty)').length,
    );
    return {
      vardas: el.querySelector('.pv-rec__item-name')?.textContent.trim() || '',
      data: (el.querySelector('.pv-rec__item-date')?.textContent.trim() || '').replace(/ /g, '-'),
      paslauga: svc ? svc.childNodes[0].textContent.replace('Atlikta paslauga:', '').replace(/,\s*$/, '').trim() : '',
      kategorijos,
      // Tarpai normalizuojami — innerText skiriasi priklausomai nuo lango išdėstymo.
      tekstas: (el.querySelector('.pv-rec__item-comment')?.innerText || '').split('\n').map((l) => l.replace(/[ \t\u00a0]+/g, ' ').trim()).join('\n').trim(),
    };
  });

  const out = { saltinis: location.href.split('#')[0], nuskaityta: new Date().toISOString().slice(0, 10), kiekis, vidurkis, patirtis, atsiliepimai };
  if (atsiliepimai.length !== kiekis) console.warn(`Nuskaityta ${atsiliepimai.length}, profilis rodo ${kiekis}`);
  const json = JSON.stringify(out, null, 2);
  try { await navigator.clipboard.writeText(json); console.log(`Nukopijuota: ${atsiliepimai.length} atsiliepimų`); }
  catch { console.log(json); }
  return out;
})();
