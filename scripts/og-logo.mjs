// Generuoja public/assets/og-arbcut-v2.png (1200x630) dalinimosi nuorodų paveikslėliui pagal vizitinę
// (design/og-source-vizitine.png). Facebook telefone apkerpa iki kvadrato centre, todėl
// tekstas ir žemėlapis sudėti į centrinį ~600 px plotą.
import sharp from 'sharp';
const W = 1200, H = 630, SRC = 'design/og-source-vizitine.png';
const part = async (left, top, width, height, w) => {
  const cut = await sharp(SRC).extract({ left, top, width, height }).png().toBuffer();
  const t = await sharp(cut).trim({ threshold: 20 }).png().toBuffer();
  const out = await sharp(t).resize(w).png().toBuffer();
  return { out, h: (await sharp(out).metadata()).height };
};
const text = await part(500, 110, 600, 470, 330);
const map = await part(60, 150, 430, 360, 215);
const gap = 22, x0 = Math.round((W - (215 + gap + 330)) / 2);
await sharp({ create: { width: W, height: H, channels: 4, background: '#0F2E23' } })
  .composite([
    { input: text.out, left: x0 + 215 + gap, top: Math.round((H - text.h) / 2) },
    { input: map.out, left: x0, top: Math.round((H - map.h) / 2) },
  ]).png().toFile('public/assets/og-arbcut-v2.png');
