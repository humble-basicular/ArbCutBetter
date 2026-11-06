# Handoff: ArbCut v4 site build — checkpoint 1
From: Claude Opus 5.5 (build thread mcp:d1e11b69…) · To: same objective, next compatible Claude account · 2026-11-06 09:15 EET
Reason: Claude session 90% used.

## Done (committed on build/arbcut-v4-site-20261106)
- Design system `src/styles/global.css` (brain B3/B4/B5): Archivo variable wdth (pkg `@fontsource-variable/archivo`; Oswald/Source Sans removed), tokens, `.cut` device, square buttons. Contrast measured: white on --orange 3.52:1 → all primary buttons use ≥19.2px/700 labels; --orange-ink hover 5.36:1.
- Mantas cut-out: `src/assets/cutout/mantas-cutout.png` (macOS Vision subject-lift, tool /tmp/arbcut-tools/lift.swift). Clean on light; faint halo on dark → use only on light surfaces.
- New `Mark.astro`: official mark from `public/assets/marks/<name>*` (paslaugos|google|lrt|valstietis); text fallback until Codex marks land (none yet). Logo still old (`Logo.astro`).
- Rewritten (no Icon): Header (white → spruce-900 64px on scroll, text "Meniu"/"Uždaryti"), Footer (same links at all widths; credit line NOT added — needs user), PageHero (light, cut photo), CtaBand (inset spruce-700 cut card), MobileActions (text "SMS"), QuoteForm, QuoteDialog, Lightbox (text controls), ReviewCard (rating as "N iš 5", no stars), Reviews, GoogleProfile, Sequences, ServiceIndex.
- Home: Hero (split; cut-out over photo's left edge; full-width form card crossing hero bottom), Emergency (only dark band), Services, Moments, Press, SendPhotos, ReviewBoard, AreaMap (SVG map replaced by CSS dots), index FAQ section.
- Hero viewed at 1440 (s00/s01 good). Last edit (hero card column tuning) is unverified.

## Remaining
1. Pages still importing Icon + old styles: `[vietove].astro`, `404`, `success`, `kainos`, `kontaktai`, `apie` (add cut-out device #2), `atsiliepimai`, `tinklarastis/index`, `tinklarastis/[slug]`, `paslaugos/[slug]`. Then delete `Icon.astro`.
2. View home slices 1440 s02+ and all 390 slices; fix.
3. C1 checks: tools in /tmp/arbcut-tools (pw/shot.mjs = overflow + mid-word heading check + slices; rs.sh rebuild+shoot). Baseline bb63bd8 built at /tmp/arbcut-base/dist (preview :4330); this build preview :4329. Write the C1.2 diff script (title/desc/canonical/H1–H3/hrefs/JSON-LD).
4. Codex gpt-6.1-sol high review (max 2 rounds), local noindex preview, board update, final report.
5. Brand assets from Codex2 child `arbcut-v4-brand-assets`: not landed yet; slot in when research thread sends commit.
Limits unchanged (see 2026-11-06-0710 handoff).

## Update 09:20 — brand assets integrated
- Cherry-picked 8345120 (public/assets/arbcut-v4-brand/**, public/assets/marks/**; now owned by this thread).
- Mark.astro now uses google-g.png, lrt.svg, valstietis.webp automatically. Paslaugos.lt forced to plain text (`TEXT_ONLY`) until its SVG ("Nr.1" banner + Ukraine ribbon) is checked at rating size; never edit the file; flag to user.
- TODO: Logo default = option 1 (`logo-1-dark/light.png`, `mark-1.png`) with ONE path constant in Logo.astro; report must show all three options in the header at real size. Launch risk: no logo reuse licence for LRT/Valstietis/Paslaugos.lt (marks/SOURCES.md).
