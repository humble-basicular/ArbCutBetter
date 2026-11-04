# ArbCut preview brand assets

Date: 2026-11-04. Branch: `t3/generate-arbcut-brand-mark`.

## Generation provenance

Tool: built-in `image_gen.imagegen` (callable tool `image_gen__imagegen`). The tool did not report an underlying model identifier; no API, CLI generation, or paid fallback was used. Each call used `transparent_background: true`, no reference images, and the following exact prompt.

### Concept 1

```text
Use case: logo-brand. Create ONE professional symbol only for a Lithuanian arborist and work-at-height craft business. Flat solid deep forest #1D3227, true transparent background. No text, letters, gradients, shadows, outlines, hairlines, tiny details, clip-art or eco-startup leaves. Bold compact silhouette, recognisable at 16 pixels. Center with modest margins. Concept 1: sturdy broad deciduous oak crown, thick trunk, with one decisive diagonal negative-space cut suggesting controlled tree removal. Few large crown lobes; grounded and authoritative.
```

Raw output: `originals/concept-1.png`; copied byte-for-byte from `/Users/matasbasinskas/.codex/generated_images/01a1a700-6d9f-72a2-93e6-b5b0665c99be/exec-2c2bc19a-4267-4fad-8f9a-eb7830291e22.png`. SHA-256: `ac8a59f55b02bd5e36cd43ef0e54cf320625544952267b2e4330eeac3cc169d1`.

### Concept 2

```text
Use case: logo-brand. Create ONE professional symbol only for a Lithuanian arborist and work-at-height craft business. Flat solid deep forest #1D3227, true transparent background. No text, letters, gradients, shadows, outlines, hairlines, tiny details, clip-art or eco-startup leaves. Bold compact silhouette, recognisable at 16 pixels. Center with modest margins. Concept 2: compact solid shield badge containing an oak/linden crown and strong trunk in bold negative space. Trade-company stamp character, simple geometry, no fine border.
```

Raw output: `originals/concept-2.png`; copied byte-for-byte from `/Users/matasbasinskas/.codex/generated_images/01a1a700-6d9f-72a2-93e6-b5b0665c99be/exec-15b6bbf6-bfe4-4a9b-bd59-996081f216f4.png`. SHA-256: `bcc1bea13b383ccf3bd89f8a1d0bf3008713c89737fe661c2fea72eeb84f1a96`.

### Concept 3

```text
Use case: logo-brand. Create ONE professional symbol only for a Lithuanian arborist and work-at-height craft business. Flat solid deep forest #1D3227, true transparent background. No text, letters, gradients, shadows, outlines, hairlines, tiny details, clip-art or eco-startup leaves. Bold compact silhouette, recognisable at 16 pixels. Center with modest margins. Concept 3: a sturdy deciduous tree fused with an ascent A-frame silhouette through a broad triangular negative space in the trunk. Crown of three to five large lobes, strong stable feet. No literal letter or text.
```

Raw output: `originals/concept-3.png`; copied byte-for-byte from `/Users/matasbasinskas/.codex/generated_images/01a1a700-6d9f-72a2-93e6-b5b0665c99be/exec-f0806985-e659-4a8b-83d8-80d1a7d0b9db.png`. SHA-256: `05972e458ee8c762f2fbdc46807db6707f5bd4401c99cb9f2faa6a446c135420`.

## Decision and visual checks

Selected concept 2: compact shield with a negative-space deciduous crown and sturdy trunk. Its enclosed silhouette feels grounded and appropriate for a trade business, while retaining a recognisable tree at header size. Generated symbol contains no text. Concept 1 lost because the generated output has diffuse alpha/edge haze and a less compact crown; concept 3 lost because its paired slits create a face-like reading and the ascent legs are ambiguous. All raw originals remain untouched, including generation imperfections.

The brief's A-frame idea was explored as geometry, not as generated lettering. Final wordmark is exactly **ArbCut**, separately typeset with Playfair Display weight 700 using Pillow/FreeType. No generated text is used.

## Processing and derivation

All final marks, lockups, icons, and preview sheet derive from `originals/concept-2.png`. `concept-comparison.png` derives from all three originals. `build-assets.py` reproduces exports.

1. Use generated alpha, threshold at 128 to eliminate variable interior opacity and stray edge pixels; crop to alpha bounds, add 2px padding. No substitute symbol is hand-drawn. Original RGB is discarded.
2. Recolour the silhouette to exact #1D3227 or #F3EFE7 and resize with Lanczos to 1152px high. Alpha antialiasing remains; every nontransparent mark pixel has the exact foreground RGB, eliminating white matte/fringe contamination. No gradient survives.
3. Optional mark SVGs are **potrace auto-traces of the thresholded generated raster** (`trace-source.pbm`, turdsize 8, alphamax 1), recoloured only. PNGs use the original generated silhouette mask rather than an SVG render; tiny trace smoothing differences are possible. No hand-coded decorative SVG was used.
4. Compose lockups with independently typeset Playfair Display Bold. Standard PNG is 354×88, intended to display at **177×44 CSS px**. Large version is 1401×352. Dark suffix means forest artwork for light backgrounds; light suffix means off-white artwork for dark backgrounds. Preserve aspect ratio.
5. Favicons use the off-white badge on an opaque forest square, sized from the generated mark with breathing room. ICO contains 16/32/48 frames. Apple and app icons use opaque RGB backgrounds. No accent colour needed.
6. Sheet shows light/dark treatments, actual 16/32px icons and 4× nearest-neighbour enlargements. Visual inspection: 32px tree and badge clear; 16px badge contour and central tree cue remain visible on both backgrounds, with fine branch details merging. This is a practical small-size limitation; the 16px mark is an identity cue rather than a detailed tree drawing.

## Acceptance results

- All six mark/lockup PNGs have RGBA and all four corner alphas = 0. Programmatic assertions pass (`verification.json`). Mark RGB remains exact through partial-alpha edge pixels, so no white halo is encoded. Visually inspected on both palette backgrounds.
- Wordmark spelled ArbCut, typeset independently at weight 700. No text in selected generated symbol.
- 16/32 favicons visually inspected on both light/dark backgrounds; opaque tile keeps artwork contrast stable. 16px fine branches merge; 32px clear. ICO frame sizes programmatically checked.
- Originals SHA-256 checked against source copies. Existing logo and favicon untouched. Only this folder is committed.
- No layout integration, live browser/tab rendering, production publication, or trademark clearance performed. Lead owns integration and final design approval.

## Fonts and licence

`fonts/PlayfairDisplay.ttf`: Google Fonts Playfair Display variable upright font, used at weight 700 (Bold). SIL Open Font License 1.1, bundled as `fonts/OFL.txt`. Source: https://github.com/google/fonts/tree/main/ofl/playfairdisplay . Downloaded from that repository on the date above. Wordmark PNGs require no runtime font fetch. No lockup SVG is supplied, avoiding missing-font rendering differences. Preview labels alone use local Helvetica; it is not bundled and not part of the wordmark.

## Files and dimensions

- `apple-touch-icon.png` — 180×180, RGB.
- `concept-comparison.png` — 1000×380, RGB.
- `favicon-16.png` — 16×16, RGBA.
- `favicon-32.png` — 32×32, RGBA.
- `icon-192.png` — 192×192, RGB.
- `icon-512.png` — 512×512, RGB.
- `logo-horizontal-dark-large.png` — 1401×352, RGBA.
- `logo-horizontal-dark.png` — 354×88, RGBA.
- `logo-horizontal-light-large.png` — 1401×352, RGBA.
- `logo-horizontal-light.png` — 354×88, RGBA.
- `mark-dark.png` — 996×1152, RGBA.
- `mark-light.png` — 996×1152, RGBA.
- `preview-sheet.png` — 1200×860, RGB.
- `favicon.ico` — 16×16, 32×32, 48×48.
- `mark-dark.svg`, `mark-light.svg` — scalable auto-traces.
- `originals/concept-1.png` — 1536×1024; `concept-2.png` — 1254×1254; `concept-3.png` — 1312×1199.
- Supporting provenance: `generation.json`, `verification.json`, `build-assets.py`, `trace-source.pbm`, `fonts/PlayfairDisplay.ttf`, `fonts/OFL.txt`, this manifest.

## Handoff

Lead: consume `/assets/arbcut-upgrade-brand/logo-horizontal-dark.png` on light and `logo-horizontal-light.png` on dark at 44px high. Use this folder's favicon.ico and touch/app icons. Integrate the committed asset folder into the lead branch; originals elsewhere remain untouched. User owns appearance approval. No push, merge, deploy, external posting, paid API, or purchase occurred.

Size audit before final git commit: 1,046,453 bytes excluding originals (under 3 MB); originals 2,322,571 bytes.
