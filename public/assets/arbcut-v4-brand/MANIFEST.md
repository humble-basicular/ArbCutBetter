# ArbCut v4 brand directions

Created 2026-11-06 using the built-in imagegen tool; no paid API calls.

## Recommendation

Direction 2, climbing hardware: the simple carabiner and orange gate connect directly to Mantas's rope-access work. The open counter and thick silhouette survive header/favicon scale. Direction 1 is the strongest geometric alternative; direction 3 explicitly suggests cut timber but has more internal detail.

## Deliverables and preparation

For each N = 1, 2, 3: logo-N-light.png (spruce/orange), logo-N-dark.png (white/orange), mark-N.png (spruce/orange). Lockups are 1600 px wide with an 8 px transparent border. Marks are 512 × 512, centered with transparent clear space. options-sheet.png shows large and 32 px header-height lockups on white and #14382b, plus 32 px mark previews. Its panels are intentionally opaque, with a transparent outside margin.

Built-in imagegen produced all artwork and dark color variants. Pillow was used only for export packaging: alpha-bound cropping, proportional Lanczos resizing, mark extraction, transparent padding, and comparison-sheet composition. No hand-redrawn substitute. Original generations remain in the tool's generated_images directory outside this checkout.

Dark variant prompt (each corresponding light image supplied as edit reference): "Create a dark-background variant of this EXACT logo by changing only the spruce-green ink to white. Preserve orange accent, identical mark geometry and exact ArbCut lettering and proportions. Word reads ArbCut. Genuine transparent background, wide horizontal. No other change." Direction 1 also requested pristine flat fills without distress. White exports initially looked ragged in the tool's transparency visualization; actual RGBA compositing on spruce verified clean visible silhouettes. Low-alpha generated noise remains in the source raster; no background was flattened into the logo exports. Generated light/dark variants have minor raster differences and are concept assets, not identical vector masters.

## Verification

- Visually inspected all six lockups, at large size and 32 px height on their intended background: exact text **ArbCut**, capital A and C; no extra letters/taglines.
- Visually inspected all three extracted marks on the options sheet, including 32 px previews.
- Programmatically verified every delivered PNG decodes and contains alpha=0 and alpha=255 pixels; marks are 512 square, lockups 1600 wide.
- Verified third-party files separately against owner downloads; no redraws/recolouring.
- Website integration and print/vector production are not verified; the Claude lead owns integration.

## Generation prompts

### Direction 1

Use case: logo-brand. Create ONE premium trade-company horizontal logo on genuinely transparent background. Exact text "ArbCut" (A r b C u t), large bold custom geometric sans, capital A and C, lowercase rb ut. Mark at LEFT, wordmark at right, wide 4.5:1 lockup with generous mark-word gap. Direction 1: a solid angular abstract A formed by two stout rising beams, with one crisp diagonal felling-cut gap and a small orange wedge occupying that gap. It must look like a strong precision-cut trade identity, not a mountain or leaf. Wordmark deep spruce #14382b, icon same spruce with ONE safety orange #e8641e accent. Flat crisp vector-style solid fills; no shadows, gradients, texture, mockup, outlines, tagline, badge, tree clipart. Confident established Lithuanian arborist contractor. Must read instantly at 32px high. Render ~1600px wide, tightly bounded yet leave transparent margin. Only one lockup.

### Direction 2

Use case: logo-brand. ONE horizontal premium arborist trade-company logo, genuine transparent background. Exact word "ArbCut" spelled A r b C u t with capital A and C, in a sturdy subtly condensed humanist sans; precise readable professional lettering. Mark on LEFT separated from word. Direction 2: minimal bold asymmetrical carabiner silhouette, one thick almost rectangular rounded D loop tilted slightly, its gate is ONE orange short diagonal segment; elegant industrial safety-equipment character. No rope tangles or literal people. Deep spruce green #14382b icon and text, gate safety orange #e8641e. Absolutely flat solid vector-style fills, no gradients/shadows/texture. Wide 4.8:1 composition ~1600px wide. Mark slightly taller than letters. Must function at header 32px and mark favicon. No leaf, shield, badge, tagline, seal or extra text. Established Lithuanian tree-climbing contractor brand. Transparent margin around single lockup.

### Direction 3

Use case: logo-brand. ONE wide horizontal logo for an established professional Lithuanian arborist business. Exact text "ArbCut", A r b C u t, capital A and C, clear distinctive heavy slightly squared sans serif typography. Direction 3: on LEFT a bold minimal tree cross-section symbol: thick spruce disc with only TWO broad concentric negative-space growth-ring arcs and a wedge-shaped felling notch removed at right; ONE small orange wedge offset into the notch. Geometric precise timber cut, NOT a leafy tree, NOT a seal or badge. The symbol must be simple enough to read at 32px. Wordmark to right with generous separation, cap height 70% of disc. Colors deep spruce #14382b and one safety orange #e8641e accent. Flat solid vector-style fills, no gradient/shadow/texture, no thin lines, no slogans or extra text. Transparent PNG background, wide 4.6:1 composition ~1600px wide with small transparent margins.


