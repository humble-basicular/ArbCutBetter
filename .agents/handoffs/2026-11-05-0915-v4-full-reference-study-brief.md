# Handoff: ArbCut v4, full reference study (whole websites, not landing pages)
From: claude (lead, thread "ArbCut v4") · To: codex (new research thread, GPT-6.1-Sol high) · Date: 2026-11-05T09:15+02:00

## Objective
Find out what makes a winning home-service website **across the whole site**, page type by page type, from real evidence. Cover the homepage, service pages, location pages, gallery/projects, reviews, about, contact, prices/financing, articles, FAQ, thank-you/404, header/menu/footer and all interactions.

The end product is a report to the user: "the winning formula for how the entire website looks". Every claim must be backed by screenshots you actually viewed. It feeds the ArbCut v4 rebuild (37 routes).

Research only:
- Do not edit website files (`src/`, `public/`).
- Make no design proposal for ArbCut beyond the per-page-type rules.

## Read first (in this order)
1. `.agents/research/v4-learnings.md`. This holds everything learned so far, the honest coverage table (§1), user verdicts (§2), and the rules plus self-review of why the last mockup was rejected as slop (§4–5). **Do not re-derive these. Extend and correct them.**
2. `.agents/handoffs/2026-11-05-0906-v4-learnings-and-rework.md`: current state and user decisions.
3. Earlier evidence, to reuse (don't redo what is done well):
   - `v4-hook-deep-study.md`: Puetz homepage at full depth, Genz/Northface/Home Front homepages, the official domains of the 10 Hook sites.
   - `v4-vensland-detail.md`: homepage and 10 service pages.
   - `v4-betono-detail.md`: 7 of 25 routes.
   - Old captures and scripts in `/tmp/arbcut-v4-deep-hook/` (`scripts/capture.mjs`, `inventory.py`, `panels.py`), `/tmp/arbcut-v4-study/`, `/tmp/arbcut-v4-vensland-detail/`, `/tmp/arbcut-v4-betono-detail/`. These may vanish; check before use.

## User words (5 Nov)
- "do it good … just to gather and review/analize evidence and tell me what youve found makes the winning formula, of how the entire website looks, not just the landing page. Everything."
- "Make like a script that just goes and takes photos, if thats the best way to do it?"
- From earlier:
  - "the more official it looks, the more trust": real Google, Paslaugos.lt and press logos.
  - Never SVG or glyph pictograms.
  - "NO AI SLOP".

## Sites in scope
- **Hook article sites (official domains verified):**
  - puetzconstruction.com
  - smockhvac.com
  - veteranscontractingllc.com
  - genzryan.com
  - northfaceconstruction.com
  - bearsplumbing.net
  - trueairconditioningandheating.com
  - homefrontexteriorsmn.com
  - callthelen.com
  - greentekroofing.com
- **Glassperts:** theglassperts.com. It timed out in headless; use a headed browser or T3 preview.
- **Local:** vensland.lt (the build to beat) and betonogaminiai.lt (both are the user's agency builds).
- **Optional:** if one strong page type is missing everywhere (e.g. a price page), you may add one or two top sites in that niche. Say why you added them.

## Method (recommended; improve it if you find better)
1. **Inventory:** read each site's sitemap and nav. Classify every URL into a page type. Many sites have 200–400 URLs, mostly posts and templated location pages.
   - Study **every unique page** in full.
   - Study **at least 2 examples of each template** (e.g. 2 location pages, 2 blog posts, 2 service pages), chosen to differ.
   - List which other URLs each example represents.
   - Nothing may be silently skipped.
2. **Capture script (Playwright, real Chrome, no tracker blocking).** Fix the failures from last time:
   - Before capturing, scroll the whole page to trigger lazy loading, and force `content-visibility: visible`. Last time the page heights were wrong by up to 3,000 px.
   - After the first viewport, hide `position: fixed/sticky` elements, then capture the rest. Fixed headers and bars hid strips at every join before.
   - Chrome wraps captures above 16,384 px, so capture in segments and record the segment order.
   - Widths: 1440×900 and 390×844, plus 360 for checking key pages.
   - Save per page: segments, a stitched preview, DOM headings, links, computed fonts and colours, and the true page height.
   - Use one concurrent site at a time if sites rate-limit. On 403/bot checks, use a normal headed browser or T3 preview. Never bypass access controls.
3. **Interactions per site:**
   - mobile menu and desktop dropdowns
   - quote/booking button and what opens (dialog, page, slide-out)
   - form fields and validation, without submitting
   - review widget, gallery/lightbox, FAQ, sticky bars, hover states
   - motion on load and scroll, and reduced-motion support
4. **Actually view every capture you analyse**, at readable scale. A capture only counts as viewed when you opened it. Keep `viewed: true/false` per page and width.
5. **Store evidence durably**:
   - Raw captures go in `~/.ai-powerhouse/research-captures/arbcut-v4/`, not `/tmp` and not git.
   - Commit only the report and a small set of compressed key screenshots under `.agents/research/v4-reference-study/`, each under 300 KB and 40 at most.

## What to analyse, per page type (across all sites)
- Purpose and conversion path: what the page wants the visitor to do, where the call/quote actions sit, and how many there are.
- Composition: hero type, section sequence, overlaps, rhythm, density, length on mobile.
- Type: families, sizes, case, weight, measure, heading hierarchy (visual vs DOM).
- Colour: how many colours and what each one means.
- Photography: real vs stock, people, crops, treatment, sizes.
- Brand devices: which ones, how often repeated.
- **Trust:** which official marks (Google, BBB, suppliers, press, licences), where they sit, and how they're styled.
- Icons/pictograms: what they're made of (photo, raster illustration, SVG line icons) and how that affects quality.
- Mobile adaptation: what is transformed vs merely stacked.
- SEO/design harmony: H1 wording, internal links in cards and nav, locality links, schema, the same content on mobile.
- Defects: anything that undercuts quality (placeholders, mismatched numbers, widgets covering actions, broken loads).

## Deliverable
`.agents/research/v4-reference-study.md`, containing:
1. **The winning formula for the whole site**, with each rule tied to cited evidence (site + page + width + screenshot path).
2. **Per page type:** what winners do, what losers do, the rule for ArbCut.
   - The ArbCut page types are homepage, service (12), locality, gallery, prices, reviews, about, contact, articles, FAQ, legal, success, 404.
   - The ArbCut routes and their order are in `.agents/research/v4-preserved-content-contract.md`.
3. **Cross-site systems:** header/menu/footer, sticky bars, forms, dialogs, motion, trust marks, icons.
4. **Corrections:** where you think `v4-learnings.md` is wrong or weak.
5. **Coverage ledger:** every site → URLs found, page types, pages studied, widths, interactions, gaps with reasons.

Write observations first, then judgement. Separate "seen" from "inferred". Say "I do not know" where evidence is missing.

## Limits
- No website edits.
- No forms submitted.
- No paid APIs.
- No access-control bypass.
- No push, merge or deploy.
- No messages to anyone.

## Working rules
- Work in this thread's own worktree and branch.
- Commit at every site milestone.
- Add a line to `.agents/BOARD.md` when you start and finish.
- Check `orchestrator_capabilities` usage at each milestone. At about 80% session usage, write a handoff in `.agents/handoffs/` naming the commit and the exact next site or page, then stop.
- This work spans several sessions. Partial but honest beats wide but shallow. Finish site by site, and keep the ledger exact.

## When done
Final message to the user:
- The winning formula, briefly, per page type.
- The coverage ledger summary.
- The report path and commit.

Then the lead (Claude, thread "ArbCut v4") picks it up for the rebuild proposal.
