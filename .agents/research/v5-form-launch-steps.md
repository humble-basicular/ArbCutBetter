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

Limits to know: 5 forms a minute and 30 a day for this site. Delivery is best effort: the enquiry is stored even if the alert email fails, and the alert is not retried.
