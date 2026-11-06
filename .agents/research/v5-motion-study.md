# ArbCut v5 — motion study (live sites, measured)

Date: 2026-11-06. Lead: Claude Opus 5.5. Scripts: `.agents/build-tools/_motion.mjs` (video + CSS/JS extraction), `_motion2.mjs` (scroll curve + hidden-before-reveal probe), `_motion3.mjs` (hover probe). Raw videos (1440×900 WebM, scroll + hover), frame strips and `motion-extract.json`: `~/.ai-powerhouse/research-captures/arbcut-v5-motion/`.

Sites recorded live today: genzryan.com, puetzconstruction.com, smockhvac.com, northfaceconstruction.com, homefrontexteriorsmn.com, greentekroofing.com. Frame strips viewed for Smock, Genz and Northface.

## What the references actually do (measured, not assumed)
| Behaviour | Measured value | Where |
|---|---|---|
| Button hover | `transform/box-shadow/border-color 0.15s`; colour swap red → white with inset shadow `0 3px 8px rgba(0,0,0,.25) inset` | Genz primary buttons |
| Button hover | `0.3s ease-in-out` background swap (gold → blue) | Northface |
| General UI transitions | `0.3s`–`0.4s ease-in-out` dominate (Smock 23× `0.4s ease-in-out`, 21× `0.3s ease-in-out`; Puetz and GreenTek the same pair) | Smock, Puetz, GreenTek |
| Material easing | `cubic-bezier(0.4, 0, 0.2, 1)` at `0.15s` for colour | Genz |
| Card/project image hover | image `scale(1.1)` over `0.3s ease`, clipped by the card | Home Front projects |
| Lazy image appearance | `opacity 0.5s–0.6s` fade-in | GreenTek, Home Front |
| Attention pulse | `pulse-white 2s ease infinite` and `4s` variant (ring around a play/CTA dot) | Home Front |
| Hero motion | full-bleed hero changes picture (door scene → AC unit) behind a static card | Smock (frame strip t≈7–8.6 s) |
| Carousels | Slick on Home Front; review sliders with dots on Genz, Puetz, Smock | several |
| Scroll smoothing | **none measured today**: a 600 px wheel reached its target in one frame (36–88 ms) on all six sites | all six |
| Scroll-reveal | **none measured today**: 0 of 60 below-fold headings/images/cards started hidden or offset on all six sites | all six |

Correction to the brief: the earlier note (Lenis on Northface, AOS on Smock) no longer matches the live homepages; today Northface has only a `lenis-prevent` attribute and Smock no `data-aos` attributes. The references feel alive mainly through hover response, carousels, video/slideshow heroes and layered composition, not through scroll animation.

## ArbCut v5 motion spec (subtle, crafted, adds a touch)
Timings sit in the measured 150–400 ms band for interaction, a little slower for one-off entrances.
| Element | Motion | Timing |
|---|---|---|
| Buttons | lift `translateY(-2px)` + deeper shadow; orange darkens to `#C9520F` | `160ms cubic-bezier(.4,0,.2,1)` |
| Service/photo tiles | image `scale(1.06)` inside clip, tag slides 4 px, shadow grows | `350ms ease` |
| Review/process cards | lift 4 px + shadow | `250ms ease-out` |
| Section entrances | fade + rise 18 px, children staggered 70 ms, once | `600ms cubic-bezier(.2,.7,.2,1)` |
| Hero layers | rings drift slower than the page (parallax 0.15), cut-out 0.05; desktop only | rAF, transform only |
| Rope line on band edges | draws once from left when the edge enters | `1100ms ease-out` |
| Count-up | 5,0 / 123 / 15 / 20 count from 0 when first visible | `1200ms ease-out` |
| Tilted tags | settle from −6° to −2° on entry | `500ms cubic-bezier(.34,1.56,.64,1)` (slight overshoot) |
| Lazy images | opacity fade | `500ms` |
| Map | pins drop in sequence after the map loads, 60 ms apart | `400ms` each |

Rules: animate only `transform` and `opacity`; no scroll hijacking or smooth-scroll library; `prefers-reduced-motion: reduce` disables every entrance, parallax, count-up and draw (final state shown at once); without JavaScript every element is visible in its final state (entrance classes are added by JS only).
