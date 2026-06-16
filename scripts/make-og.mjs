// One-off generator for the link-preview card: the portrait in the brand glass
// circle over the warm paper background, matching the hero. Produces a static
// 1200x630 public/og.png (committed) so there's no @vercel/og build dependency.
// Run: node scripts/make-og.mjs   (needs the devDependency `sharp`)
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const W = 1200;
const H = 630;
const D = 470; // circle diameter
const PAPER = "#EFEDE8";

// 1 — warm paper base
const base = sharp({
  create: { width: W, height: H, channels: 4, background: PAPER },
});

// 2 — soft multi-colour brand halo (radial gradients fading to paper)
const halo = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="46%" cy="38%" r="44%">
      <stop offset="0%" stop-color="#FF8A4D" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="#FF5D8F" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="57%" cy="64%" r="42%">
      <stop offset="0%" stop-color="#9C7BFF" stop-opacity="0.5"/>
      <stop offset="62%" stop-color="${PAPER}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g1)"/>
  <rect width="100%" height="100%" fill="url(#g2)"/>
</svg>`);

// 3 — portrait, framed on the face (object-position ~50% 25%), circle-masked
const photoPath = join(root, "public", "leslin-casual.jpg");
const meta = await sharp(photoPath).metadata();
const scaledH = Math.round((D / meta.width) * meta.height);
const topOffset = Math.max(0, Math.round((scaledH - D) * 0.25));

const circleMask = Buffer.from(
  `<svg width="${D}" height="${D}"><circle cx="${D / 2}" cy="${D / 2}" r="${D / 2}" fill="#fff"/></svg>`,
);

const portrait = await sharp(photoPath)
  .resize(D, scaledH, { fit: "fill" })
  .extract({ left: 0, top: topOffset, width: D, height: D })
  .composite([{ input: circleMask, blend: "dest-in" }])
  .png()
  .toBuffer();

// 4 — white glass rim
const ring = Buffer.from(
  `<svg width="${D}" height="${D}"><circle cx="${D / 2}" cy="${D / 2}" r="${D / 2 - 5}" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="9"/></svg>`,
);

const cx = Math.round((W - D) / 2);
const cy = Math.round((H - D) / 2);

await base
  .composite([
    { input: halo, top: 0, left: 0 },
    { input: portrait, top: cy, left: cx },
    { input: ring, top: cy, left: cx },
  ])
  .png()
  .toFile(join(root, "public", "og.png"));

console.log("Wrote public/og.png (1200x630)");
