# ArbCut v5 — practitioner SEO pass

Date: 2026-11-06. Lead: Claude Opus 5.5. Source pack: `My Drive/Business/JarvisWeb/management/seo-research-2026-11-04/` (`START-HERE.md`, `REPORT.md`, `CHECKLIST.md`, `EXPERIMENTS.md`, all read in full). Rule applied: `~/AI-Core/core/RULES.md` "Competitive edge": practitioner experience beats platform docs; each tactic gets a one-line real risk and the user decides. Hard limits kept: nothing illegal, no invented proof.

The agency brains were **not edited**; proposed brain changes are at the end.

## 1. "The claims I would not turn into agency rules", reassessed
The original table rejected these mostly because Google's docs disagree. Under the Competitive edge rule that is not a reason. Verdict per row, for ArbCut at site level:

| Practitioner claim (Caleb Ulku) | v5 decision | Real risk (one line) |
|---|---|---|
| Keywords stopped mattering | Not a tactic for us either way; keep service + town in H1s, titles and anchors (already true). | None. |
| One page per GBP category/service, matching link tree, ~30 pages | **Applied in the link graph:** home links every service (price list) and every town; each service page links its hub, related services and all towns; town pages link every applicable service. 37 routes already. **Proposed next:** Kauno rajonas pages (Garliava, Raudondvaris, Domeikava…) where fiskaras hauling really applies. | Thin near-duplicate town pages can sit in "crawled, not indexed"; each needs one real job and hauling facts. |
| `site:` shows index size / why a competitor wins | Measurement only; use it as a quick look, Search Console for decisions. | Misleading counts if trusted blindly. |
| Crawled-not-indexed means spam, must reach zero | Measurement only; at launch, check the 33 indexable routes individually. | Chasing zero can waste time on intentional exclusions. |
| Every page needs a unique external backlink; PBN/comment links | **Off-site, proposed for the user:** real citations first (Paslaugos.lt profile already links, LRT.lt and Valstietis.lt articles, Lithuanian directories rekvizitai.lt / info.lt / 118.lt, supplier and championship pages). PBN/comment links only if the user chooses. | PBN or comment links can trigger a manual action that removes the site from results. |
| Publish 250 pieces to train AI | Not now; four useful articles exist. Propose owner-evidence articles (real jobs) at a steady pace instead. | Mass generic articles get ignored or dilute quality signals. |
| Hidden address prevents #1 | No GBP yet. If Mantas has a real yard/base address he is willing to show, show it on site and GBP. Never a fake office. | A fake or virtual address can get a GBP suspended. |
| Geotagged photos help; photo quotas; 4.9 converts better than 5.0 | Geotagging: **apply once Mantas gives the real job location per photo** (we do not know them; writing Kaunas coordinates onto every photo would be invented data). Rating stays the real 5,0. | Wrong coordinates are invented data; low upside even when right. |
| Position 4 invisible; top-3 in 14/30 days | Measurement framing only. | Over-promising timelines to the client. |
| Gemini eliminates proximity | Not a site tactic. | — |
| Allow GPTBot so ChatGPT can find you | **Applied:** explicit `Allow` for OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, Applebot-Extended, Bingbot in `robots.txt` (they were already allowed by `*`; explicit lines remove doubt). | Site text may be used for model training; for a local service that is close to no downside. |
| FAQs, chunking, schema, embeds, `llms.txt` unlock AI answers | **Applied:** keep FAQ blocks with visible Q&A + FAQPage schema, keep and extend `llms.txt` with real facts, short self-contained answer paragraphs per section. **Added schema (truthful, visible facts):** `Person` for Mantas with `jobTitle`, `worksFor`, `subjectOf` the LRT.lt and Valstietis.lt articles (real `NewsArticle` URLs/dates); `knowsAbout` tree work topics. Map embed: after GBP exists. | Schema that does not match visible content can lose rich results; we only mark up what is on the page. |
| AggregateRating from third-party reviews | **Flagged, default OFF.** Practitioners still add review-count markup for entity signals. Google shows no stars for self-serving LocalBusiness reviews, so the upside is entity understanding only. User decides. | Structured-data manual action and lost rich results; the review text is third-party (Paslaugos.lt). |
| AI answers depend only on Bing/GBP | **Proposed at launch:** Bing Webmaster Tools verification and IndexNow ping on deploy (free). | None beyond setup time. |
| Calls metric = completed calls | Already separated: the tracker counts call taps, form opens, submits; not completed calls. | — |

## 2. Site-level tactics applied in v5 (homepage now, rest after approval)
1. Keyword-descriptive H1 and title unchanged: "Medžių pjovimas ir darbai aukštyje Kaune" / "Medžių pjovimas Kaune ir darbai aukštyje iki 20 m | ArbCut".
2. Click-to-call and quote form in the first screen at every width (A4).
3. Crawlable links from home to all 12 services, all 9 towns, gallery, prices, reviews, press sources (preserved contract).
4. `robots.txt` explicit AI-crawler allows (above).
5. `Person` schema for Mantas with `subjectOf` the two real press articles (homepage `@graph`), linked to the business `founder`.
6. Owner evidence on the page, not generic copy: real price factors (Mantas's Valstietis quote on complexity), what to photograph, real job captions, the hauling rule (fiskaras only Kaunas + district), real reviews with dates, press quotes.
7. Objections answered where they arise: permits (link to the permit article), clean-up (hauling vs stacking), danger near wires (call the grid operator), distance (map with the real served towns and "per toli" for Šiauliai and Klaipėda).
8. The map loads by itself (no click), with town links beside it as plain anchors.
9. Performance: hero image eager with `fetchpriority=high`, everything else lazy; map script only near the viewport.

## 3. Owner-evidence intake (for Mantas, via the user)
Per the report's best idea: collect real jobs before writing more pages. Ask Mantas for: 5–10 recent jobs (town, tree, problem, how it was taken down, time, price band, before/after photos); which questions callers ask most; when he says "no" (not-fit jobs); real job locations for photos; his signature, promise words and gear brands (already in the brief's open questions).

## 4. Proposed changes to the agency brains (not made here)
- `04-websites` / SEO reference: replace "Google's docs say no" rejections with the Competitive edge format (tactic, one-line risk, user decides) — the table in section 1 is a ready template.
- Add the explicit AI-crawler `robots.txt` block and the `Person` + `subjectOf` press pattern to the website SEO reference as defaults for owner-led trades.
- Keep "no invented geodata/proof" as the hard limit wherever geotagging or review markup is discussed.
