/* One-time script: turns the raw logo scan (black on white) into
   web-ready assets with transparent backgrounds.
   Run with: node scripts/process-logo.mjs <path-to-raw-logo.png>
   Outputs into public/images/logo/ :
     - logo-black.png  (black mark, transparent bg — for light backgrounds)
     - logo-white.png  (white mark, transparent bg — for dark backgrounds)
     - icon.png        (square "1H" crop used as the favicon)
*/
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const input = process.argv[2];
if (!input) {
  console.error("Usage: node scripts/process-logo.mjs <raw-logo.png>");
  process.exit(1);
}

const outDir = new URL("../public/images/logo/", import.meta.url).pathname;
mkdirSync(outDir, { recursive: true });

// Trim white margins, then read raw grayscale pixels
const trimmed = sharp(input).trim({ threshold: 10 });
const { data, info } = await trimmed
  .clone()
  .flatten({ background: "#ffffff" })
  .greyscale()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;

// Luminance -> alpha: black stays opaque, white disappears,
// antialiased grays become semi-transparent.
const black = Buffer.alloc(width * height * 4);
const white = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  const alpha = 255 - data[i];
  black[i * 4 + 0] = 0;
  black[i * 4 + 1] = 0;
  black[i * 4 + 2] = 0;
  black[i * 4 + 3] = alpha;
  white[i * 4 + 0] = 255;
  white[i * 4 + 1] = 255;
  white[i * 4 + 2] = 255;
  white[i * 4 + 3] = alpha;
}

const raw = { raw: { width, height, channels: 4 } };
await sharp(black, raw).png().toFile(`${outDir}logo-black.png`);
await sharp(white, raw).png().toFile(`${outDir}logo-white.png`);

// Square favicon: crop the "1H" (left portion), pad to square
const iconWidth = Math.round(width * 0.29);
await sharp(black, raw)
  .extract({ left: 0, top: 0, width: iconWidth, height })
  .resize({
    width: 256,
    height: 256,
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile(`${outDir}icon.png`);

console.log(`Done: ${width}x${height} ->`, outDir);
