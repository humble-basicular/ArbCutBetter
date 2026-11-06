# Approved homepage feedback — 6 November 2026

Source: user messages in thread `mcp:40795346-38e6-4498-bbc5-1c10a619c4df`, ordinals 6–7. This supplements the 1105 rebuild brief; homepage approval still precedes redesign of the other pages.

## Accepted work
1. Reviews option 1: real ArbCut work photograph behind three horizontal white review cards, readable darkened background, gold stars, simple arrows/swipe. Combine the Puetz row's simplicity with the Glassperts example's visual presence. No wall, filters, sidebar, tilted statistics or generated review summary. Use original review texts and existing source data; compact Paslaugos.lt identity once is enough.
2. Remove audit-style source/date footnotes throughout the visitor-facing site, such as “Šaltinis: mūsų Paslaugos.lt profilis, 2026-11-04”. Preserve provenance internally and necessary factual rating identity. Do not remove useful article links/quotations.
3. Gallery: every image and caption must have reserved readable space; current collage still hides captions. Earlier containment tests were insufficient. Inspect rendered screenshots at native size.
4. Hero: greatly reduce the dominance of the ring pattern; preserve the approved layered photographic direction. Keep the caption “Arboristas aukštalipys su komanda” and prevent badge/name overlap.
5. Mobile contact bar: slim, considered spacing, clear primary call action and smaller SMS. Avoid the current large two-block edge-to-edge strip. Respect safe areas and form/keyboard space.
6. Experience badge: fix the cramped “15” and label/ribbon treatment shown in the user's latest screenshot. Readable number and words at actual hero size. Use existing truthful `patirtisMetai`, no invented certification.
7. Quote form: current global margin reset plus `.qd` lacking centering margin explains top-left opening. Rebuild as a genuinely branded ArbCut dialog, centered desktop and comfortably sized/scrollable mobile, with a clear close action, focus/escape/backdrop handling and exact existing form contract. Add useful address autofill/suggestions while preserving manual entry and optional location. No paid APIs/accounts. Investigate a free service's current official usage policy before using it; Photon officially permits reasonable API use without availability guarantees, so use conservative requests and graceful manual fallback. Browser saved-address autofill should also work.
8. Owner research: search beyond supplied links for Mantas's published statements, interviews, real jobs, professional activity and authentic assets/signature. Verify identity using business/phone/site/context; namesakes are not evidence. Use genuine human details; remove invented attributed promise/signature placeholders if no authentic replacement exists.
9. Reusable agency workflow: add a mandatory client-research step reached by website, SEO, GBP and applicable onboarding/marketing tasks; do not rely only on links handed over by the user. Record sources, dates, exact quotes, usable visual assets/rights, uncertainties and how a discovery informs copy/design/search. This is authorized now despite the old brief's earlier restriction on editing agency brains.
10. Pictograms stay as they are: the user explicitly withdrew that redesign request. The map is acceptable and lower-priority; no map rebuild needed.
11. User ordinal8 addition: restore the missing bottom-right “shoot me any question” contact/chat launcher from the Glassperts reference, tailored to ArbCut. Suggested invitation: “Turite klausimų? Parašykite Mantui.” It opens a branded compact help/enquiry panel, collects name/phone/question and offers existing fact-backed quick answers plus an immediate call action for urgent cases. Reuse current quote/enquiry delivery and preview-inert behavior; validate current form fields before describing the flow. Keep automatic FAQ answers distinct from Mantas's personal reply, with no fabricated live-agent/online claim or response-time promise. Invitation dismissible; panel accessible and not obscuring the mobile bar, form, submit or keyboard. Check closed/invitation/open/FAQ/enquiry/error/close/mobile states visually. Existing requirement `arbcut-build-specifikacija.md:118–128` and feature flag `src/data/site.js:69` already call for this. Old implementation recoverable at `3e4efdc^:src/components-old/ChatWidget.astro`, removed by3e4efdc; its Icon import/styles and old modal hooks are obsolete, so do not paste it unchanged. No paid LLM/chat service.

## Inputs
- Latest handoff `.agents/handoffs/2026-11-06-1222-feedback-fixes-and-review-options.md`; original complete brief `.agents/handoffs/2026-11-06-1105-v5-rebuild-brief.md`.
- Glassperts reference screenshot: `/Users/matasbasinskas/.ai-powerhouse/userdata/attachments/mcp-40795346-38e6-4498-bbc5-1c10a619c4df-f8df055b-9d6e-4df2-ad34-257bdebb8288.png`.
- Gallery screenshot: same attachment directory, `mcp-40795346-38e6-4498-bbc5-1c10a619c4df-6e49066b-1e35-4fd4-af10-560b7b78a50a.png`.
- Mobile bar screenshot: `mcp-40795346-38e6-4498-bbc5-1c10a619c4df-dc42aaa0-b853-4982-a1f3-1012b831d61c.png`.
- Quote dialog screenshot: `mcp-40795346-38e6-4498-bbc5-1c10a619c4df-75d2987d-b8a8-4a69-ac00-3ea1819b76fe.png`.
- Experience badge screenshot: `mcp-40795346-38e6-4498-bbc5-1c10a619c4df-0cd1d58f-6415-49d4-aeac-6bbdf242b364.png`.
- Live reference captures already inspected: `/tmp/arbcut-v5-feedback-20261106/puetz-widget.png`, `smockhvac.com-reviews.png`, `northface-band.png`.
- Existing real images `src/assets/photos/`, existing logos/assets/data, source quotes `src/data/spauda.js`.

## Acceptance
Local noindex/inert-form preview :4331; do not disturb :4329/:4330. Build passes. Inspect each changed section at 360/390/768/1440, plus dialog/expanded-review/menu/keyboard and relevant reduced-motion states. Check overlap, clipping, every caption, overflow, readability, carousel movement, close/focus behavior and failure fallback. Automated boxes cannot replace actual screenshot inspection. Preserve routes, form fields, contact data, schema and links unless an approved change requires adapting a hook with a focused check.

No push, merge, deploy, publish, client message, real form submission, paid API/purchase or sync scripts. Commit each stopping point; report exact checks and remaining gaps.

## Ownership
- Lead Codex owns `.agents/BOARD.md`, handoffs, this brief, integration/checks and agency brain edits in an assigned separate agency worktree.
- Research stage owns only `.agents/research/v5-client-mantas-gerulis.md` (and its clearly named evidence folder if needed).
- UI stage owns `src/**`, `public/**`, and `.agents/research/v5-feedback-ui-checks.md`; it reads research but does not edit it, boards or agency brains. No other UI owner while it runs.

## Routing
Defaults read from `~/AI-Core/core/ROUTING.md`. Claude owns UI; both Claude accounts currently limited. Record the UI task once with allowance waiting and retain Opus 5.5 / xhigh. Independent research uses Codex GPT-6.1-Sol / high on available account. Soft stage budgets are estimates; project history supplies successful durations/output but no comparable billed-input totals. Final UI review is by Codex lead; agency instruction changes need Claude's changed-file review before integration.
