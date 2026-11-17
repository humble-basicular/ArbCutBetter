// Generuoja public/assets/og-arbcut.png (1200x630) dalinimosi nuorodų paveikslėliui su logotipu.
import sharp from 'sharp';
const W = 1200, H = 630, LW = 900, LH = Math.round(LW * 116 / 339);
const logo = await sharp('public/assets/v5-brand/logo/lockup-a-egle-light.svg', { density: 600 })
  .resize(LW, LH).png().toBuffer();
await sharp({ create: { width: W, height: H, channels: 4, background: '#FFFFFF' } })
  .composite([{ input: logo, left: (W - LW) / 2, top: Math.round((H - LH) / 2) }])
  .png().toFile('public/assets/og-arbcut.png');
