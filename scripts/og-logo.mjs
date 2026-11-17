// Generuoja public/assets/og-arbcut-v3.png (1200x630) dalinimosi nuorodų paveikslėliui pagal vizitinę
// (design/og-source-vizitine.png). Facebook telefone apkerpa iki kvadrato centre, todėl viskas
// sudėta į centrinį ~560 px plotą: žemėlapis viršuje, užrašas, telefonas, el. paštas ir svetainė apačioje.
import sharp from 'sharp';
const W = 1200, H = 630, SRC = 'design/og-source-vizitine.png', K = 1.12;
const part = async (left, top, width, height, k = K) => {
  const cut = await sharp(SRC).extract({ left, top, width, height }).png().toBuffer();
  const t = await sharp(cut).trim({ threshold: 20 }).png().toBuffer();
  const { width: w } = await sharp(t).metadata();
  const out = await sharp(t).resize(Math.round(w * k)).png().toBuffer();
  const m = await sharp(out).metadata();
  return { out, w: m.width, h: m.height };
};
const items = [
  [await part(60, 150, 430, 360, 0.5), 22],
  [await part(500, 120, 520, 180), 40],
  [await part(500, 370, 520, 75), 22],
  [await part(500, 460, 520, 100), 0],
];
const total = items.reduce((s, [p, g]) => s + p.h + g, 0);
const textLeft = Math.round((W - items[1][0].w) / 2);
let y = Math.round((H - total) / 2);
const layers = items.map(([p, g], i) => {
  const l = { input: p.out, left: i === 0 ? Math.round((W - p.w) / 2) : textLeft, top: y };
  y += p.h + g;
  return l;
});
await sharp({ create: { width: W, height: H, channels: 4, background: '#0F2E23' } })
  .composite(layers).png().toFile('public/assets/og-arbcut-v3.png');
