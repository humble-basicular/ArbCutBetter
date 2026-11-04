# Handoff: ArbCut homepage fixes and hosted review
From: codex · To: lead · Date: 2026-11-04T19:55:40+02:00
## Objective
Finish the six approved homepage fixes and host an isolated noindex review.
## User decisions & constraints
Keep approved composition, palette and fonts. Own src/**, public/** and this branch’s .agents/. Commit after fixes; no push or merge. No sync scripts, paid services, live form sends, production domain/DNS or existing hosting project changes.
## State
- Done: display line heights raised to 1.12; checked headings and pull quotes at 1440/390. New bottom-trimmed crops for lift/pine/spruce images retain originals. All homepage photos inspected (including storm photo).
- Done: honest polished Google preparation panel, no developer note/wireframe; production-hidden path and live Places UI Kit unchanged. Filler map caption removed.
- Done: 768 visual review; unused moments grid row removed, tablet hero text widened. Every section retained on phones: four initial reviews, expandable full review text, tighter lists/section spacing, smaller repeated photos, redundant contact/quotes hidden only on phones.
- Verified: default 390×844 height 14,972 px (was user-reported 18,351); 1440 height 12,642, 768 height 15,890.
- Partial / blocked: none in authorized scope.
## Files & artifacts
- Code commits: 0ce3e3b, d1bbe24, f216cb3, 6a6c2bd, 41aaee8, e67d9a7, 930887d, d08048b, a072e11. Final documentation commit follows a072e11 on this branch.
- Screenshots: /Users/matasbasinskas/Library/CloudStorage/GoogleDrive-matasbasinskas1@gmail.com/My Drive/Business/JarvisWeb/previews/arbcut-upgrade-20261104/homepage-v3/ — homepage-{1440,768,390}-part-N.png. Split at 7,000 px to avoid capture limit. These are local synced Drive files; remote sync completion not checked.
- Metrics and audit images: /tmp/arbcut-{390,768,1440}-metrics.json and /tmp/arbcut-WIDTH-SECTION.png.
## Checks run
- PUBLIC_PREVIEW=1 npx astro build → 37 routes; inert forms, no tracker/hCaptcha/sitemap; meta noindex.
- node /tmp/arbcut-tools/acc.mjs "$PWD" → 37 routes at 320/390/768/1440, 0 problems; no external requests. Final log /tmp/arbcut-acc-verified.log.
- ix.mjs → 26/26 PASS; ix2.mjs → 24/24 PASS; logs /tmp/arbcut-ix-verified.log and /tmp/arbcut-ix2-verified.log. Includes keyboard/focus, dialog/menu, preview form, map, phone rule.
- /tmp/arbcut-tools/phone-check.mjs → four reviews initially, expand/collapse, eight after more, filter resets PASS.
- Normal npx astro build --outDir /tmp/arbcut-production-check-20261104 → Web3Forms action, hCaptcha, tracker endpoint/chunk, sitemap present; Google empty slot and noindex absent. Rebuilt preview afterward. QuoteForm.astro/BaseLayout.astro unchanged; phone pattern and global [hidden] rule preserved.
- Earlier concurrent-build test runs encountered transient 404s while dist was being regenerated; final checks above ran against stable preview and passed.
- curl outside localhost → alias and deployment homepage HTTP 200, X-Robots-Tag: noindex, nofollow; meta robots noindex/nofollow confirmed. /kainos/ also 200 with header. Evidence /tmp/arbcut-alias-headers, /tmp/arbcut-alias.html, /tmp/arbcut-deployment-headers.
## Pending approvals / unverified
No approval needed for completed scope. Live form send/hCaptcha challenge and Google element with real place ID/key intentionally not tested. No credentials/profile exist for live Google element.
## External actions already taken — never repeat
Created ONLY new Cloudflare Pages project jarvisweb-arbcut-preview on existing jarvisworks.co agency login (free static Pages). Latest Wrangler project-create delegated to Workers and failed without deployment; corrected with Pages --force. No payment or interactive login.
Uploaded preview dist copy from /tmp/arbcut-noindex.4RZHMK with temporary /* X-Robots-Tag header. _headers not committed.
Hosted alias: https://jarvisweb-arbcut-preview.pages.dev/
Immutable deployment: https://d1c93d57.jarvisweb-arbcut-preview.pages.dev/
Deployment command: npx wrangler pages deploy <temp-folder> --project-name jarvisweb-arbcut-preview --branch main. No push/merge, production site/DNS changes, or messages sent.
## Next action + owner
Lead: review hosted homepage and screenshots. Production launch remains outside this task.
## Omitted context
Original rebuild: .agents/handoffs/2026-11-04-2000-arbcut-homepage-v3.md.
