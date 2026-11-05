# Bulk capture reconciliation

Ledger snapshot: `2026-11-05T16:32:30.787Z`. Main capture PID8964 is no longer running. Counts below were independently recomputed from URL statuses; file integrity is not visual quality, completeness of discovery, or proof that a live interaction works.

| Site | Captured | Blocked | Failed | Files | Capped | Excluded | Width records | Existing JPGs | Problem widths |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| genzryan.com | 411 | 19 | 0 | 74 | 0 | 0 | 822 | 7287 | 0 |
| bearsplumbing.net | 155 | 0 | 0 | 1 | 0 | 0 | 310 | 3304 | 0 |
| puetzconstruction.com | 253 | 0 | 0 | 1 | 0 | 0 | 506 | 5181 | 0 |
| smockhvac.com | 274 | 0 | 0 | 1 | 0 | 0 | 548 | 4672 | 0 |
| veteranscontractingllc.com | 800 | 0 | 0 | 15 | 67 | 0 | 1600 | 15013 | 0 |
| northfaceconstruction.com | 409 | 0 | 1 | 20 | 0 | 0 | 818 | 8295 | 0 |
| trueairconditioningandheating.com | 48 | 0 | 0 | 1 | 0 | 0 | 96 | 874 | 0 |
| homefrontexteriorsmn.com | 52 | 0 | 0 | 17 | 0 | 0 | 104 | 754 | 0 |
| callthelen.com | 288 | 0 | 0 | 0 | 0 | 0 | 576 | 9375 | 0 |
| greentekroofing.com | 429 | 0 | 0 | 5 | 0 | 0 | 858 | 8001 | 0 |
| theglassperts.com | 474 | 0 | 0 | 9 | 0 | 0 | 948 | 10030 | 0 |
| vensland.lt | 25 | 0 | 0 | 0 | 0 | 0 | 50 | 517 | 0 |
| betonogaminiai.lt | 31 | 0 | 0 | 1 | 0 | 1 | 62 | 311 | 0 |

Checked every ledger-captured URL at1440/390: parseable record.json, captureComplete, nonempty first viewport/segments and record-listed iframe patch files. Detailed result: `/Users/matasbasinskas/.ai-powerhouse/research-captures/arbcut-v4/bulk-integrity-reconciliation.json`.

Status counts match all stored site totals: True. Initially unresolved width records:21; all resolved below under redirected-domain storage.

Remaining capture gates: retry19blockedGenzRyanURLs and1failedNorthfaceURL in headed browser/T3preview without bypass; retain67cappedVeteransURLs as explicit approved800page-cap limitation. Discovery cannot establish orphan pages. Visual coverage remains separate in site reports.

## Glassperts integrity discrepancy

Initial audit found21records absent under theglassperts.com. Follow-up located ALL21 under sibling glassexpertsfl.com (their URL host); every record is captureComplete with all referenced nonempty first-viewport/segment/patch files. No recapture or copy required. Exact alternate paths are in external bulk-integrity-reconciliation.json → resolvedAlternateRoot. These paths must be included in Glassperts grouping/visual coverage; the existing sheets may omit them. Original lookup paths:

- `theglassperts.com/blogs/1440/record.json`
- `theglassperts.com/blogs/390/record.json`
- `theglassperts.com/patio-door-roller-replacement/1440/record.json`
- `theglassperts.com/patio-door-roller-replacement/390/record.json`
- `theglassperts.com/how-to-replace-rollers-on-sliding-glass-door/1440/record.json`
- `theglassperts.com/how-to-replace-rollers-on-sliding-glass-door/390/record.json`
- `theglassperts.com/how-to-choose-the-best-sliding-glass-door-repair/1440/record.json`
- `theglassperts.com/how-to-choose-the-best-sliding-glass-door-repair/390/record.json`
- `theglassperts.com/how-to-identify-problems-that-require-sliding-glass-door-repair/1440/record.json`
- `theglassperts.com/how-to-identify-problems-that-require-sliding-glass-door-repair/390/record.json`
- `theglassperts.com/the-ultimate-guide-to-sliding-glass-door-maintenance/1440/record.json`
- `theglassperts.com/the-ultimate-guide-to-sliding-glass-door-maintenance/390/record.json`
- `theglassperts.com/common-issues-with-sliding-glass-doors-and-how-to-fix-them/1440/record.json`
- `theglassperts.com/common-issues-with-sliding-glass-doors-and-how-to-fix-them/390/record.json`
- `theglassperts.com/key-steps-in-the-window-installation-process/1440/record.json`
- `theglassperts.com/key-steps-in-the-window-installation-process/390/record.json`
- `theglassperts.com/sliding-glass-door-repair-vs-replacement-know-the-signs/1440/record.json`
- `theglassperts.com/sliding-glass-door-repair-vs-replacement-know-the-signs/390/record.json`
- `theglassperts.com/window-repair-for-commercial-property-what-to-expect/1440/record.json`
- `theglassperts.com/4-tips-to-fixing-a-sliding-door/1440/record.json`
- `theglassperts.com/helpful-fix-to-squeaking-sliding-door/1440/record.json`
