# Handoff: ArbCut v4, full visual remake
From: claude · To: new ArbCut design thread · Date: 2026-11-04T20:15+02:00

## Objective
Remake the whole ArbCut site visually. The user wants "the best site ever", then will decide whether agency design direction changes from it. "NO AI SLOP."

## User decisions (4 Nov, verbatim where possible)
- "man bent gana patinka pats tekstas" and "the fuctionality like seo wise and the order everything has to be seen wise is fine". Keep copy, section order, SEO and function from commit `bb63bd8`.
- "the design is so slop". Remake the visual layer of everything.
- "cool basic animations, they help with impressing with quality".
- Look at https://hookagency.com/blog/home-service-website-examples/ , the web design brain, past Glassperts discussions, and VensLand ("a bit slop, good enough, so we do this better").
- "ask question in it aswell, and then explain exactly what you will do, ill approve".
- Earlier today: keep the live site palette unless a better direction is agreed; 20 m lift; live Google card plus one review section with both sources, Paslaugos.lt dominant, gather Google reviews through the site; hosted noindex link for review.

## Do this first, in order
1. Study the references properly. 2. Ask the user your questions. 3. State exactly what you will build. 4. WAIT for approval. Do not build before approval.

## Rejected so far
- v2 (`32986e5`): cream paper, Source Serif, tiny labels, numbered ledgers. "Absolute horror".
- v3 (`bb63bd8`, https://jarvisweb-arbcut-preview.pages.dev/): dark forest everywhere, Oswald capitals everywhere, rust buttons, flat rectangles. Better in weight, still "so slop".

## Lead's read of the feel (a starting opinion, check it yourself)
Captures: /tmp/arbcut-work/ref/ (may vanish; retake). What the good references have and v3 lacks:
- A brand with a personality. Genz-Ryan, Thelen and Puetz feel like a company that exists: a big confident logo, a slogan, a signature colour pairing, a recognisable graphic device. v3 is a dark template with no identity.
- Real people and real kit made into a composition: the owner in front of branded vans, a person cut out and layered over the background, a house with the company's own sign. v3 only darkens one photo.
- Layering and depth: elements overlap sections, ribbons, seals, curved frames, form cards tucked into the photo. v3 is stacked flat bands.
- Colour and light: mostly bright, saturated, confident. v3 is nearly all dark with one accent.
- Trust seen in the first glance: rating strip in the header, guarantee seals, years-in-business stamps, stated as badges, not as small grey text.
- Variety of type: a heavy display face with a script or slab accent. v3 uses one voice for everything.
Warning: don't copy US badge clutter or fake seals. Only real facts may become badges (5,0 and 123 on Paslaugos.lt, 15 years, 20 m lift, LRT).

## References
- Hook article gives no URLs. Domains that loaded: genzryan.com (no longer Hook's build), northfaceconstruction.com, puetzconstruction.com, callthelen.com (Thelen). homefrontexteriors.com and smockheatingandair.com were wrong guesses; bearsplumbingservices.com did not resolve; find the real ones.
- Glassperts: theglassperts.com timed out in headless Chrome. Try a headed window. Brain: reviews block with photo background, white cards and a Google box; every quote CTA opens a focused dialog; its mobile header, but cleaner.
- VensLand: https://vensland.lt (live build to beat). Betono: https://www.betonogaminiai.lt/ (user does not call it slop).
- Brain: `/Users/matasbasinskas/WebAgency Biz/brains/04-websites.md`, `references/04-website-design-standard.md`, `04-website-quality-reference.md`. Motion section dated 31 October (Ken Burns hero, staggered fade-up reveal, smooth section scroll) and the mobile section dated 22 October apply as a baseline. Not a template: the user overrode shared layout for this site.
- Logo rule in brain: wide rectangular lockup, client rejected tiny badges and generated SVG logos. The current shield lockup in `public/assets/arbcut-upgrade-brand/` was GPT-generated; ask whether it stays. New raster art needs Codex `imagegen` (no paid fallback).

## State
- Done: copy, press quotes, review board data, GoogleProfile component, 37 routes, forms, tests in /tmp/arbcut-tools (may vanish; `acc.mjs`, `ix.mjs`, `ix2.mjs`, `full.mjs`).
- Real proof, facts Mantas must confirm, sources: `.agents/handoffs/2026-11-04-2000-arbcut-homepage-v3.md` and `2026-11-04-1955-arbcut-homepage-hosted.md`.
- Paslaugos.lt blocks headless browsers. Read it only through an off-screen headed Chrome.

## Limits
No production deploy, push, merge, DNS, GBP, CRM or client messages. Never run `sync:auto` or `sync:atsiliepimai`. No paid services without asking. Preview stays noindex and inert. Do not make `<script>` conditional in Astro templates. No AI or DI wording on the site. Real photos only for jobs. Check Lithuanian diacritics in big type. Long pages: Chrome captures wrap above 16,384 px.

## Usage discipline
Check `orchestrator_capabilities` at every milestone. On 4 Nov ultrathink burned Claude1 from 45% to 100% session in 22 minutes, and failover is still switched off. Commit at every stopping point. Move or delegate before an account passes 80%.

## Next owner
New thread: references, questions, exact plan, then wait for the user.
