# ArbCut tree directions — concept exports

Built-in imagegen only; no paid APIs. Branch: `t3/tree-like-logo-directions`. Scope restricted to this folder; no site integration, publication, push or merge.

## Files

For N=1..4: `logo-N-light.png`, `logo-N-dark.png` (1600 px wide); `mark-N.png` (512 × 512, transparent clear space). `options-sheet.png` shows large lockups and actual 32 px-high lockups on white and #0F2A20, plus 32 px standalone marks. Sheet panels are opaque; outside margin transparent.

## Preparation

Followed parent MANIFEST export approach: built-in artwork and built-in white variant edits, Pillow alpha-bound crop, proportional Lanczos resize, 8 px transparent lockup border, mark extraction and centered 448 px maximum artwork in 512 px square. Removed generated alpha noise below 32/255 before cropping. No hand-drawn substitute, font replacement or colour quantization. Source generations retained outside repo. Light/dark sources have minor independent raster differences.

## Verification and remaining limitations

Viewed every light/dark lockup large and in the comparison sheet at 32 px, plus every standalone mark. All eight read exactly **ArbCut**, capital A and C, no extra letters or tagline. No circle/shield containers, drawn individual leaves, grass, roots, people or seal. Checked all 13 PNGs decode as RGBA with alpha range 0..255; all lockups 1600 wide and all marks 512 square.

These are reviewable concepts, NOT a full acceptance pass: generated fills retain subtle colour variation despite flat-fill correction requests, so exact hex-only inks/no tonal variation are not satisfied. No vector masters. Direction 1 reached three light attempts: cut/wedge improved, but the apex still reads as an intact triangular treetop with an adjacent wedge rather than an unmistakably sliced-off top-right. Directions 2–4 used two light attempts plus generated dark exports. User budget steer stopped further regeneration. No production readiness claim.

32 px assessment:
- 1 Nukirsta eglė: clearest small tree and readable word; cutting detail is too ambiguous.
- 2 A-medis: A/tree hybrid reads; small branch tips become busy and notch is tiny.
- 3 Genėtas medis: strongest professional pruning signal and simplest small silhouette; orange cut face remains discernible.
- 4 Vainikas: broad tree reads, but branch channels and notch weaken at 32 px; closest to a general tree-service identity.

## Prompts

### 1

Initial: Use case: logo-brand. ONE wide horizontal logo, mark at left, exact word "ArbCut" at right (A r b C u t, capital A and C), heavy confident sans. Genuine transparent background. Flat solid vector-style spruce #14382b with exactly ONE safety-orange #e8641e accent. Strong Lithuanian professional tree climbing and cutting company, legible at 32px. No circles, shields, badges, individual leaves, roots, grass, lime green, gradients, shadows, texture, tagline, seals, people or clip-art. Generous mark-word gap, mark slightly taller than text. Nukirsta eglė: bold solid conifer silhouette with stacked angular tiers. Top-right sliced off along clean 45-degree diagonal; sliced piece is ONE small orange wedge lifting away. Clearly a cut spruce tree.

Correction: Edit this logo: preserve exact ArbCut spelling, typography, layout and tree geometry. Eliminate ALL tonal variation: absolutely uniform flat solid #14382b and ONE flat #e8641e orange accent, genuine transparent background. No gradient, shading, texture, lighting or noise. Correct tree apex: slice the TOP RIGHT off the upper tier along a 45 degree diagonal rising from lower-right to upper-left; keep left part of apex attached to tree, detached orange piece must be a SMALL wedge just above-right of cut, not the entire treetop.

Selected light source: /Users/matasbasinskas/.codex-2/generated_images/01a1afdf-0638-73d1-a0e1-89b529464e00/exec-fbe49ed4-d323-4685-8271-2382c53daa51.png

Dark source: /Users/matasbasinskas/.codex-2/generated_images/01a1afdf-0638-73d1-a0e1-89b529464e00/exec-7051af26-01a9-4348-ad89-df4ef320941d.png

### 2

Initial: Use case: logo-brand. ONE wide horizontal logo, mark at left, exact word "ArbCut" at right (A r b C u t, capital A and C), heavy confident sans. Genuine transparent background. Flat solid vector-style spruce #14382b with exactly ONE safety-orange #e8641e accent. Strong Lithuanian professional tree climbing and cutting company, legible at 32px. No circles, shields, badges, individual leaves, roots, grass, lime green, gradients, shadows, texture, tagline, seals, people or clip-art. Generous mark-word gap, mark slightly taller than text. A-medis: capital A built as a tree: strong trunk and two rising branch beams forming an unmistakable letter A with shorter angular limbs; ONE orange felling notch. Reads both A and tree.

Correction: Edit this logo: preserve exact ArbCut spelling, typography, layout and tree geometry. Eliminate ALL tonal variation: absolutely uniform flat solid #14382b and ONE flat #e8641e orange accent, genuine transparent background. No gradient, shading, texture, lighting or noise. 

Selected light source: /Users/matasbasinskas/.codex-2/generated_images/01a1afdf-0638-73d1-a0e1-89b529464e00/exec-51231ffb-9cad-45b6-b998-8791135206b9.png

Dark source: /Users/matasbasinskas/.codex-2/generated_images/01a1afdf-0638-73d1-a0e1-89b529464e00/exec-6ed6292d-1959-4a67-9f2b-af7c75853b45.png

### 3

Initial: Use case: logo-brand. ONE wide horizontal logo, mark at left, exact word "ArbCut" at right (A r b C u t, capital A and C), heavy confident sans. Genuine transparent background. Flat solid vector-style spruce #14382b with exactly ONE safety-orange #e8641e accent. Strong Lithuanian professional tree climbing and cutting company, legible at 32px. No circles, shields, badges, individual leaves, roots, grass, lime green, gradients, shadows, texture, tagline, seals, people or clip-art. Generous mark-word gap, mark slightly taller than text. Genėtas medis: bare geometric tree, thick trunk and a few strong branches, every branch end a clean angled saw cut, ONE cut face orange. Sparse sturdy professional pruned-tree silhouette.

Correction: Edit this logo: preserve exact ArbCut spelling, typography, layout and tree geometry. Eliminate ALL tonal variation: absolutely uniform flat solid #14382b and ONE flat #e8641e orange accent, genuine transparent background. No gradient, shading, texture, lighting or noise. 

Selected light source: /Users/matasbasinskas/.codex-2/generated_images/01a1afdf-0638-73d1-a0e1-89b529464e00/exec-059cf969-74f0-428f-8488-a4197b970052.png

Dark source: /Users/matasbasinskas/.codex-2/generated_images/01a1afdf-0638-73d1-a0e1-89b529464e00/exec-60214585-d0fa-44b5-9c73-090a06b685e7.png

### 4

Initial: Use case: logo-brand. ONE wide horizontal logo, mark at left, exact word "ArbCut" at right (A r b C u t, capital A and C), heavy confident sans. Genuine transparent background. Flat solid vector-style spruce #14382b with exactly ONE safety-orange #e8641e accent. Strong Lithuanian professional tree climbing and cutting company, legible at 32px. No circles, shields, badges, individual leaves, roots, grass, lime green, gradients, shadows, texture, tagline, seals, people or clip-art. Generous mark-word gap, mark slightly taller than text. Vainikas: ONE solid broad-crowned deciduous tree silhouette, no individual leaves. Trunk and main branches carved as broad negative space through crown. ONE orange wedge notch at trunk. Asymmetric solid angular crown, no circular silhouette.

Correction: Edit this logo: preserve exact ArbCut spelling, typography, layout and tree geometry. Eliminate ALL tonal variation: absolutely uniform flat solid #14382b and ONE flat #e8641e orange accent, genuine transparent background. No gradient, shading, texture, lighting or noise. 

Selected light source: /Users/matasbasinskas/.codex-2/generated_images/01a1afdf-0638-73d1-a0e1-89b529464e00/exec-1310fb35-4560-4b53-80f3-86f86b788333.png

Dark source: /Users/matasbasinskas/.codex-2/generated_images/01a1afdf-0638-73d1-a0e1-89b529464e00/exec-07f9ead0-cf66-44c4-a9f9-341bf69644dd.png

Direction 1 third generation: ONE logo on transparent background. Exact word ArbCut, heavy sans, to right of mark. Solid geometric conifer three angular tiers and short trunk, TOP RIGHT of upper tier clipped with straight 45 degree line, tiny detached orange wedge above-right. ONLY TWO UNIFORM SOLID INKS #14382b and #e8641e. No tonal differences, gradients, texture, badges, circles, leaves, roots, grass, tagline or people. Wide horizontal composition, professional arborist cutting identity.

Dark edit prompt (selected light supplied): Make dark-background export of this EXACT logo. Change ONLY spruce green ink to uniform solid white #ffffff. Preserve ONE orange accent #e8641e, identical tree and exact ArbCut text/layout. Genuine transparent background; pristine flat fills without distress, no gradients, texture, shadows or extra elements.

## Handoff

Owner next: lead/client reviews directions; colour flattening/vector production and direction 1 geometry correction remain. Current branch contains only this asset folder. No changes made to shared board/handoff paths because user explicitly restricted ownership to this folder.

