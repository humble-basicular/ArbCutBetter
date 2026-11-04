# Handoff: ArbCut redesign preview
From: claude · To: either · Date: 2026-11-04T19:00+02:00
## Objective
Complete bespoke ArbCut redesign as a local noindex preview. No production deployment.
## User decisions & constraints
Brief: `.agents/handoffs/2026-11-04-arbcut-upgrade-approved.md`. Production launch, push and merge need separate approval. Do not run `sync:auto` or `sync:atsiliepimai`.
## State
- Done (verified how): redesign plus brand assets on `design/arbcut-upgrade-20261104`, app commit `32986e5`. 37 routes at 320/390/768/1440 with 0 problems; 26 browser interaction checks pass; production-mode build passes; Codex review r2 approved.
- Partial: none.
- Failed / blocked: none.
## Files / refs
Preview: `PUBLIC_PREVIEW=1 npx astro build`, then `npx astro preview --port 4325 --host 127.0.0.1` from this worktree. Review assets: main Drive `Business/JarvisWeb/previews/arbcut-upgrade-20261104/`. Check scripts lived in /tmp/arbcut-tools and are not kept.
## Unresolved
Live form submission and hCaptcha untested by design. Real-network performance not measured (local only). Mantas has not reviewed the content. 16px favicon loses branch detail.
## Next owner
User reviews the preview and decides on launch.
