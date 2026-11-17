// Generuoja public/assets/og-arbcut.png (1200x630) dalinimosi nuorodų paveikslėliui:
// logotipas su Lietuvos žemėlapiu (design/og-source-lockup-lietuva.png) ant tamsiai žalio fono.
import sharp from 'sharp';
const W = 1200, H = 630, LW = 1080;
const logo = await sharp('design/og-source-lockup-lietuva.png').resize(LW).png().toBuffer();
const { height: LH } = await sharp(logo).metadata();
await sharp({ create: { width: W, height: H, channels: 4, background: '#0F2E23' } })
  .composite([{ input: logo, left: (W - LW) / 2, top: Math.round((H - LH) / 2) }])
  .png().toFile('public/assets/og-arbcut.png');
