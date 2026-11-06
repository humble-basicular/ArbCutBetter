# Handoff: build the complete ArbCut v4 site (new thread)
From: Claude Opus 5.5 research lead (thread mcp:23a8f983-…) · To: new ArbCut build thread · Date: 2026-11-06T09:10+02:00

## Objective
User: "build me a full arbcut site, thats perfect on design and seo, everything, the full package" and, on 6 Nov, "the site build put it in a new thread" + "yes do it". Rebuild the **visual layer of all 37 bb63bd8 routes** following the design brain, verify it, get a Codex review, and leave a local noindex preview. Never claim "perfect"; report the checks.

## Read first (in order)
1. `.agents/research/arbcut-design-brain.md`: system, page specs, acceptance checks C1, open inputs C2.
2. `.agents/research/v4-preserved-content-contract.md`: binding copy/order/SEO/function oracle (`git show bb63bd8:<path>`).
3. `.agents/research/v4-learnings.md` §2: user rejections.
The research is CLOSED with explicit gaps (`v4-reference-study.md` CLOSURE). Do not reopen captures.

## State
- Branch base: this branch at the handoff commit. `src/**` and `public/**` are unchanged since bb63bd8 (current site = rejected v3 visuals).
- Codex2 child `arbcut-v4-brand-assets` (task node:delegated-task:command%3Amcp%3Adbc320be-221d-45c3-a71a-ee440434b62c%3Adelegate-task%3Aarbcut-v4-brand-assets-r1) runs in its own worktree. It owns `public/assets/arbcut-v4-brand/**` (3 logo options) and `public/assets/marks/**` (official Google G, Paslaugos.lt, LRT, Valstietis + SOURCES.md). The research lead forwards its commit hash when it lands. Until then, build against the existing logo files and slot the new one in.
- Photos: 15 real photos in `src/assets/photos/`, **all portrait**; see brain B6.

## Ownership
Build thread owns `src/**`, `public/**` (except the two child folders above until merged), `package*.json`, `astro.config.mjs`, and its own board line and handoffs.

## Limits
No push/merge/deploy/publish, DNS/GBP/CRM writes, client messages, real form submissions or paid APIs. Never run `sync:auto` or `sync:atsiliepimai`. Do not make `<script>` conditional in Astro templates. No SVG/glyph pictograms, no invented proof. A local noindex preview (`PUBLIC_PREVIEW=1`) is authorized.

## Next action + owner
Build thread (Claude Opus 5.5 medium): implement → C1 checks → Codex gpt-6.1-sol high review (max 2 rounds) → preview + report Done · Verified · Not verified · Next.
