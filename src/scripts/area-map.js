/* ArbCut v5 aptarnavimo žemėlapis: MapLibre GL + OpenFreeMap (nemokami vektoriniai žemėlapiai, be rakto).
   Įkeliamas pats, kai blokas priartėja prie ekrano (be paspaudimo). Be WebGL lieka statinis paveikslėlis. */
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const C = { spruce: '#0F2E23', spruce7: '#1A4A37', orange: '#E2611B', land: '#F4F8F5', out: '#DCE7E0', water: '#BFD9DA', wood: '#E3EEE6', road: '#FFFFFF', roadCase: '#CAD6CF', grey: '#8D9C95' };
const FONT = ['Noto Sans Regular'];
const FONTB = ['Noto Sans Bold'];

function style() {
  return {
    version: 8,
    glyphs: 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf',
    sources: { omt: { type: 'vector', url: 'https://tiles.openfreemap.org/planet', attribution: '<a href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a> © <a href="https://www.openmaptiles.org/" target="_blank" rel="noopener">OpenMapTiles</a> Duomenys © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> bendraautoriai' } },
    layers: [
      { id: 'bg', type: 'background', paint: { 'background-color': C.out } },
      { id: 'wood', type: 'fill', source: 'omt', 'source-layer': 'landcover', filter: ['==', ['get', 'class'], 'wood'], paint: { 'fill-color': '#D3E2D8', 'fill-opacity': .7 } },
      { id: 'water', type: 'fill', source: 'omt', 'source-layer': 'water', paint: { 'fill-color': C.water } },
      { id: 'river', type: 'line', source: 'omt', 'source-layer': 'waterway', filter: ['==', ['get', 'class'], 'river'], paint: { 'line-color': C.water, 'line-width': 1.4 } },
      { id: 'road-case', type: 'line', source: 'omt', 'source-layer': 'transportation', filter: ['match', ['get', 'class'], ['motorway', 'trunk', 'primary'], true, false], paint: { 'line-color': C.roadCase, 'line-width': ['interpolate', ['linear'], ['zoom'], 5, 1.6, 9, 4] } },
      { id: 'road', type: 'line', source: 'omt', 'source-layer': 'transportation', filter: ['match', ['get', 'class'], ['motorway', 'trunk', 'primary'], true, false], paint: { 'line-color': C.road, 'line-width': ['interpolate', ['linear'], ['zoom'], 5, .8, 9, 2.6] } },
      { id: 'border', type: 'line', source: 'omt', 'source-layer': 'boundary', filter: ['all', ['==', ['get', 'admin_level'], 2], ['!=', ['get', 'maritime'], 1]], paint: { 'line-color': C.spruce7, 'line-width': 1.6, 'line-dasharray': [3, 2] } },
      { id: 'country', type: 'symbol', source: 'omt', 'source-layer': 'place', filter: ['==', ['get', 'class'], 'country'], layout: { 'text-field': ['coalesce', ['get', 'name:lt'], ['get', 'name']], 'text-font': FONTB, 'text-size': 13, 'text-transform': 'uppercase', 'text-letter-spacing': .2 }, paint: { 'text-color': C.grey } },
    ],
  };
}

function el(tag, cls, html) { const e = document.createElement(tag); e.className = cls; if (html != null) e.innerHTML = html; return e; }

export async function mount(box) {
  const data = JSON.parse(box.querySelector('script[type="application/json"]').textContent);
  const host = box.querySelector('[data-map-canvas]');
  let map;
  try {
    map = new maplibregl.Map({
      container: host, style: style(), bounds: [[20.6, 53.75], [27.1, 56.75]], fitBoundsOptions: { padding: 0 },
      attributionControl: false, cooperativeGestures: true, dragRotate: false, pitchWithRotate: false, maxZoom: 11, minZoom: 5, renderWorldCopies: false,
      locale: { 'CooperativeGesturesHandler.WindowsHelpText': 'Laikykite Ctrl ir sukite pelės ratuką, kad keistumėte mastelį', 'CooperativeGesturesHandler.MacHelpText': 'Laikykite Cmd ir sukite pelės ratuką, kad keistumėte mastelį', 'CooperativeGesturesHandler.MobileHelpText': 'Žemėlapį stumkite dviem pirštais', 'NavigationControl.ZoomIn': 'Priartinti', 'NavigationControl.ZoomOut': 'Atitolinti' },
    });
  } catch (e) { box.classList.add('map--static'); return; }
  map.addControl(new maplibregl.AttributionControl({ compact: false }), 'bottom-right');
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
  map.on('load', async () => {
    const [lt, zone] = await Promise.all([fetch(data.lt).then((r) => r.json()), fetch(data.zone).then((r) => r.json())]);
    map.addSource('lt', { type: 'geojson', data: lt });
    map.addSource('zone', { type: 'geojson', data: zone });
    map.addLayer({ id: 'lt-fill', type: 'fill', source: 'lt', paint: { 'fill-color': C.land } }, 'wood');
    map.addLayer({ id: 'zone-fill', type: 'fill', source: 'zone', paint: { 'fill-color': C.orange, 'fill-opacity': .14 } }, 'border');
    map.addLayer({ id: 'zone-line', type: 'line', source: 'zone', paint: { 'line-color': C.orange, 'line-width': 3, 'line-dasharray': [2.4, 1.4] } }, 'border');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let i = 0;
    for (const t of data.towns) {
      const base = t.base;
      const m = el('a', `mpin${base ? ' mpin--base' : ''}`, `${base ? `<img src="${data.mark}" alt="" width="20" height="34">` : ''}<span class="mpin__dot"></span><span class="mpin__l">${t.name}${base ? '<small>bazė</small>' : ''}</span>`);
      m.href = t.href; m.setAttribute('aria-label', base ? `${t.name}, bazė` : `Medžių pjovimas: ${t.name}`);
      if (!reduce) m.style.animationDelay = `${(i++) * 60}ms`;
      new maplibregl.Marker({ element: m, anchor: base ? 'bottom' : 'center' }).setLngLat(t.ll).addTo(map);
    }
    for (const t of data.far) {
      const m = el('span', 'mpin mpin--far', `<span class="mpin__dot"></span><span class="mpin__l">${t.name}<small>per toli</small></span>`);
      new maplibregl.Marker({ element: m, anchor: 'center' }).setLngLat(t.ll).addTo(map);
    }
    box.classList.add('map--live');
  });
}
