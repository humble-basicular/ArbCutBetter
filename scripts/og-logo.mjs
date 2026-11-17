// Generuoja public/assets/og-arbcut-v4.png (1200x630): vizitinė (design/og-source-vizitine.png),
// tiesiog priartinta — apkirpta aplink turinį 1.905:1 santykiu ir išdidinta.
import sharp from 'sharp';
await sharp('design/og-source-vizitine.png')
  .extract({ left: 30, top: 85, width: 1000, height: 525 })
  .resize(1200, 630).png().toFile('public/assets/og-arbcut-v4.png');
