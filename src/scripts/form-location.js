// User-triggered reverse lookup for this enquiry form only (never autocomplete).
// Nominatim: https://operations.osmfoundation.org/policies/nominatim/
// Cached in memory and spaced >=1.1 s per page; Photon is the alternate provider.
const cache = new Map();
const pending = new Map();
let nextRequestAt = 0;
const part = value => typeof value === 'string' ? value.replace(/[\p{Cc}\p{Cf}]/gu, '').trim().slice(0, 150) : '';
const join = values => [...new Set(values.map(part).filter(Boolean))].join(', ');
export function addressFromNominatim(data) {
  const a = data?.address || {};
  const street = [part(a.road || a.pedestrian || a.residential), part(a.house_number)].filter(Boolean).join(' ');
  return join([street, a.city || a.town || a.village || a.hamlet || a.municipality, !street ? a.county : '']);
}
export function addressFromPhoton(data) {
  const a = data?.features?.[0]?.properties || {};
  return join([[part(a.street), part(a.housenumber)].filter(Boolean).join(' '), a.city || a.town || a.village || a.district || a.county]);
}
export async function reverseAddress(latitude, longitude, { fetchImpl = fetch, timeoutMs = 4000 } = {}) {
  if (!Number.isFinite(latitude) || Math.abs(latitude) > 90 || !Number.isFinite(longitude) || Math.abs(longitude) > 180) return '';
  const key = latitude.toFixed(5) + ',' + longitude.toFixed(5);
  const saved = cache.get(key);
  if (saved && Date.now() - saved.at < 600000) return saved.value;
  if (pending.has(key)) return pending.get(key);
  const task = (async () => {
    const requests = [
      ['https://nominatim.openstreetmap.org/reverse?format=jsonv2&accept-language=lt&lat=' + latitude + '&lon=' + longitude, addressFromNominatim],
      ['https://photon.komoot.io/reverse?lat=' + latitude + '&lon=' + longitude + '&limit=1', addressFromPhoton],
    ];
    for (const [url, format] of requests) {
      const delay = Math.max(0, nextRequestAt - Date.now());
      nextRequestAt = Date.now() + delay + 1100;
      if (delay) await new Promise(resolve => setTimeout(resolve, delay));
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), timeoutMs);
      try {
        const response = await fetchImpl(url, { signal: ctl.signal, headers: { Accept: 'application/json' } });
        if (!response.ok) continue;
        const value = format(await response.json());
        if (value) { cache.set(key, { value, at: Date.now() }); return value; }
      } catch { /* Try the alternate, then let the user enter the address. */ }
      finally { clearTimeout(timer); }
    }
    return '';
  })();
  pending.set(key, task);
  try { return await task; } finally { pending.delete(key); }
}
