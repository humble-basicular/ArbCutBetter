# ArbCut v5 logo — process and options

Tools (free): Inkscape 1.4.4 (CLI render/export), FontForge (glyph surgery), fonttools 4.68 (variable-font instancing, outline extraction), shapely 2.2 (vector booleans on a 200×240 grid), ImageMagick (mockups). AI was not used for any mark. Blender was listed as installed but was a broken Homebrew shim; reinstalled for the van test.

## Steps
1. **Sketch ideas** (three directions, all tree-like, none round, no leaves/roots/grass/lime, nothing like VensLand):
   - **A-eglė**: the capital A of ArbCut grows spruce tiers on its sides; the crossbar is an orange braided climbing rope with a hanging tail. Letter + tree + rope in one mark.
   - **Aukštalipys**: a tall Scots pine (flat crown plates, pruned stubs on the trunk) with an orange climber on a rope. The character is the high-climber himself.
   - **Pjūvis**: a spruce whose top section is cut along a diagonal kerf and lifted: sectional felling from the top, what ArbCut actually does.
2. **Real vector on a grid**: geometry written as coordinates and quadratic curves on a 200×240 grid (`marks2.py`), booleans for the rope gap, braid slashes, kerf and climber clearance. Two iterations each after viewing renders (first spruce was malformed, first pine crown read as clouds).
3. **Adapted typeface**: Bricolage Grotesque (OFL) instanced at wght 800 / wdth 90 / opsz 96 (`fonttools.varLib.instancer`); the `t` top terminal cut on a saw-cut diagonal in FontForge (`ff_t.py`); outlines extracted with fonttools (`lockup.py`); kerning set by eye (A–r −5, b–C +3) after one too-tight and one too-loose pass. "Arb" spruce, "Cut" orange. Tagline "ARBORISTAI AUKŠTALIPIAI" in Figtree 750, tracked to the wordmark width.
4. **Tests**: 32 px and 16 px (`fav.png`): A-eglė stays an A with an orange bar at 16 px; the pine stays a pine (the climber becomes an orange dot); Pjūvis reads as a two-colour spruce. Cab front panel of the real lift truck (`truck-mock.jpg`); white one-colour print on shirt orange (`shirt-mock.jpg`); van side render in Blender (`van-render.png`, if present).

## Options (user picks; the build uses option 1 until then)
| # | Name | Strength | Risk |
|---|---|---|---|
| 1 | **A-eglė** | Official monogram feel (like Puetz), best at 16–32 px, rope is ArbCut-specific | Spruce tiers can read as a Christmas tree if the rope is dropped |
| 2 | **Aukštalipys** | Most personal: the climber is Mantas's job; pine shape is Lithuanian | Climber detail disappears below 24 px |
| 3 | **Pjūvis** | Tells the sectional-felling story | Closest to a generic spruce at a glance |

Files: `public/assets/v5-brand/logo/` — `lockup-<name>-light.svg` (on white), `lockup-<name>-dark.svg` (on spruce), `mark-<name>.svg`, `mark-<name>-white.svg`, `favicon-32.png`, `apple-touch-icon.png` (option 1).
