// Generuoja public/assets/og-arbcut-v5.png (1200x630): vizitinė iš vektorinio SVG
// (design/og-source-vizitine.svg, viewBox 96x56), apkirpta aplink turinį ir priartinta.
// Tekstas vektorinis, todėl ryškus; žemėlapis SVG viduje yra rastrinis.
import sharp from 'sharp';
const PX = 40; // px vienam viewBox vienetui
import { readFileSync } from 'node:fs';
const svg = readFileSync('design/og-source-vizitine.svg', 'utf8').replace('width="96mm" height="56mm"', `width="${96 * PX}" height="${56 * PX}"`);
const big = await sharp(Buffer.from(svg)).png().toBuffer();
const crop = { x: 2.54, y: 7.2, w: 84.66, h: 44.44 };
await sharp(big)
  .extract({ left: Math.round(crop.x * PX), top: Math.round(crop.y * PX), width: Math.round(crop.w * PX), height: Math.round(crop.h * PX) })
  .resize(1200, 630, { kernel: 'lanczos3' }).png().toFile('public/assets/og-arbcut-v5.png');
