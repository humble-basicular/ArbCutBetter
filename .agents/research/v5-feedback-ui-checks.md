# v5 approved-feedback UI round — checks (Claude Opus 5.5, 2026-11-06)

Scope: `.agents/research/v5-feedback-approved-2026-11-06.md` items 1–7, 11 and research-backed copy. Item 9 (agency brains) is lead-owned, not done here. Item 10: pictograms and map unchanged.

## Changes
1. Reviews (`home/ReviewBoard.astro`): real work photo (`azuolai-prie-namo`) darkened, three horizontal white cards (2 tablet, 1 phone), gold raster stars, arrows + scroll-snap swipe, one Paslaugos.lt summary, "Visi atsiliepimai" / "Parašyti atsiliepimą". Filters, load-more, sidebar, tilted numbers removed on home (user-approved). Original texts, ≥40 chars, with star rating, first 12.
2. Footnotes: "Šaltinis: … 2026-11-04" removed from the price list; review "Duomenys …" gone with the sidebar.
3. Gallery (`home/Moments.astro`): four equal white photo cards with reserved caption space (2×2 on tablet/phone), no overlap.
4. Hero: ring texture opacity .9 → .3. Caption "Arboristas aukštalipys su komanda" kept (lead edit).
5. Mobile bar (`MobileActions.astro`): floating 60 px bar, 10 px inset, safe-area aware, orange call + small white SMS; hidden while typing.
6. Experience badge (`v5/Seal.astro`): gold disc "15" + "metų patirtis" beside it; readable at hero size.
7. Quote dialog (`QuoteDialog.astro`): `margin:auto` centring, spruce header with mark, round close, scrollable body, bottom sheet ≤600 px. Address: "Vietovė" field now `autocomplete="street-address"` + Photon suggestions (site.js, ≥3 chars, 400 ms debounce, ≤6, Lithuania bbox); field name unchanged, manual entry kept.
8. Owner band (`home/MantoPazadas.astro`): invented promise/signature placeholder removed; now verified LRT paraphrase + LRT quote (`tikslas`) + LARA member-directory link; plain typeset name; shown in production.
9. Chat launcher (`ChatLauncher.astro`, in BaseLayout): bubble "Turite klausimų? Parašykite Mantui." after 6 s, dismissible (session); panel: call button, 4 home FAQ answers labelled "atsakymai iš svetainės", question form (`QuoteForm variant="chat"`: Vardas, Telefonas, Žinutė; same Web3Forms contract/preview inertness). No online/response-time claims.

## Verified (Playwright, Chrome, preview :4331, noindex present)
- Build passes, 37 pages. Overflow: 0 at 360/390/768/961/1024/1100/1180/1280/1440.
- Screenshots actually viewed: 1440 hero, owner band, gallery, press, reviews; 390 dialog, chat panel, hint, first screen; 1440 dialog and chat panel.
- Dialog: opens centred (360 px each side at 1440; full width bottom sheet at 390), focus to Vardas, Escape closes and returns focus to trigger.
- Address: typing "Garliava" → 6 suggestions (e.g. "Garliava, Garliavos seniūnija").
- Chat: empty submit → error + focus Vardas; valid preview submit → `__arbcutPreviewSubmits` 1, done message; Escape closes, focus to launcher; panel above launcher, above sticky header on phone.

## Not verified
768/360 screenshots of changed states not individually viewed; reduced-motion pass not re-run this round; keyboard arrow-key scrolling of the review track; real Web3Forms delivery of the chat variant (production only).
