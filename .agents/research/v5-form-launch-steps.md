# ArbCut form: steps before launch (6 Nov 2026)

The form posts to the JarvisWeb Cloudflare Worker `jarvisweb-proof-tracking` (`https://jarvisweb.lt/t/form`, `kind=site_inquiry`, `site=arbcut`). `arbcut` is already in the private `SITES` config with origins `https://arbcut.lt` and `https://www.arbcut.lt`. No move off Vercel is needed for the form. No live test has been run, by user instruction.

Checked read-only on 6 Nov: `matas@jarvisweb.lt` forwards to `jarvisworks.co@gmail.com`, which is already a verified destination. `aukstuminiai.darbai@yahoo.com` is not verified. The `arbcut.lt` zone is not in the Jarvisworks Cloudflare account.

Do in this order. Each step needs the user's word in the thread.

1. **Mantas's inbox.** Add `aukstuminiai.darbai@yahoo.com` under Email Routing, Destination Addresses. Cloudflare emails Mantas a link he must click.
2. **Worker config** (`~/Library/Application Support/JarvisWeb/wrangler-production.toml`): add the Yahoo address to `allowed_destination_addresses`, and add `"arbcut": ["aukstuminiai.darbai@yahoo.com", "jarvisworks.co@gmail.com"]` to the private `FORM_SITE_RECIPIENTS`. A missing route sends to the owner only, so this is a launch gate.
3. **Worker code** (JarvisCo `tracking/src/security.ts`, `index.ts`): Turnstile is limited to `meselektra` and `vensland`, and the README says not to add other clients to the config. Add `arbcut` to `SECURITY_SITES` and a `TURNSTILE_SECRET_ARBCUT` secret. Owner: Worker release owner, following the staged rollout in `tracking/README.md`.
4. **Turnstile widget.** Create it with hostnames `arbcut.lt` and `www.arbcut.lt`, set the secret on the Worker, and set `PUBLIC_TURNSTILE_SITE_KEY` in the site build. The production build fails on purpose without this key.
5. **Order.** Worker in `observe`, then deploy the site, then check it, then switch `arbcut` to `enforce`. Never enforce before the site is live.
6. **Live test.** One test submission, only when the user asks: check both inboxes, and that Yahoo does not file it as spam.

**Photos: launch gate.** Decision (user, 6 Nov): photos go to the inbox as email attachments. The form sends them as repeated `files` (5 at most, 8 MiB total; large JPEG/PNG/WebP are shrunk to 2000 px in the browser). Tested against a local copy of the Worker: 4 photos stored, one read back byte-identical via `/t/files/<key>` with the owner token, and refused (401) without it.

Worker change: built and tested, not merged or deployed. JarvisCo branch `feat/form-email-attachments-20261106` (commit `0c27ed5`, worktree `~/Work/Code projects/JarvisCo-worktrees/form-email-attachments-20261106`). It is opt-in, so other clients keep the plain alert. To turn it on: merge, deploy, and add `FORM_ATTACHMENT_SITES = '["arbcut"]'` to the private `wrangler-production.toml`. Encoding 2.5 MB took about 4 ms in local workerd; the account's plan and CPU limit could not be read, so check them. Until this is live the email shows only `Failų skaičius: N`, so do not launch the uploader without it: `features.photoUpload: false` in `src/data/site.js` removes it.

Limits to know: 5 forms a minute and 30 a day for this site. Delivery is best effort: the enquiry is stored even if the alert email fails, and the alert is not retried.
