# Handoff: ArbCut homepage v3 (rebuild)
From: claude · To: lead · Date: 2026-11-04T20:00+02:00
## Objective
Homepage rebuilt from scratch plus shared header, footer, tokens, review system. Preview only; no push/merge/deploy.
## State
- Done: hero, emergency band, services+prices board (12 links), job moments, LRT/Valstietis press spread, send-photos/pricing, two-source review board + GoogleProfile (Places UI Kit, honest preview empty state, write-review link hidden until placeId), 9-town area with click-to-load map, FAQ (FAQPage schema) + final call. Commits 3fedcba..HEAD.
- Verified: preview build; acc.mjs 37 routes 0 problems (320/390/768/1440); ix.mjs 27/27 and /tmp/arbcut-tools/ix2.mjs 24/24 PASS; 0 external requests before clicks; production build in /tmp/arbcut-work/v3/prod keeps Web3Forms, hCaptcha, tracker, sitemap, no Google slot.
- Not verified: Google element with a real place ID/key (none exists); live form/hCaptcha; 768 visual review (overflow checked only); other pages only restyled by new tokens, not redesigned.
## Files / refs
Screens: /tmp/arbcut-work/v3/final/_-1440.png, _-390.png. Google switch: src/data/site.js google.placeId + PUBLIC_GOOGLE_MAPS_KEY env. Google reviews: src/data/atsiliepimai-google.js.
## Unresolved
Review pass 3 not done (budget). Full-page shot tool leaves lazy images blank (tool artifact, sections checked individually). Mantas to confirm facts in final report.
## Next owner
Lead: review homepage, then user sign-off; other pages redone after.
