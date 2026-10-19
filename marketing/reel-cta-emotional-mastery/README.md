# Reel CTA — Emotional Mastery series end-card

Closing/outro slide for the leadership & executives Reels series on emotional
mastery. Final export lives at `/public/social/emotional-mastery-reel-cta.png`
(2160×3840, 9:16 — safe to upload straight to Instagram).

## What changed from the original graphic

- **Logo/branding redone** to match the real site system (`app/globals.css`,
  `components/ui/BrandPanel.tsx`) instead of the old circular mandala mark and
  mixed script/serif type: one typeface family (Fraunces, upright + italic),
  the site's actual gold/ink palette, the same wordmark treatment used on
  christinasteinhoff.com.
- **CTA rebuilt** as a single, unmissable gold pill button with a
  keyword-DM mechanic (`DM "FUSION" TO BEGIN`) — proven to convert better
  than a bare "DM me," ties the keyword to the trademarked Science + Soul
  Fusion™ method, and closes the series as a payoff line rather than a cold
  hook.
- **Photo**: cropped tighter (more face, less loose shoulder/arm — reads as
  more executive-authoritative for a leadership series), a stray watermark
  icon on the shoulder was removed, color-graded into the site's gold/ink
  palette, framed in a soft vignette rather than a hard rectangle.
- **Layout** respects Instagram Reels' safe zones (right-side icon rail,
  bottom caption/username overlay, top progress bar) so nothing important is
  ever covered by the app's own UI chrome.

## Source files (this folder)

- `card.html` — the actual design, plain HTML/CSS at 1080×1920. Edit copy or
  styling directly here.
- `christina-portrait.png` — the cleaned/cropped/color-corrected portrait
  crop referenced by `card.html`.
- `render.js` — headless-Chromium screenshot script (Playwright).

## Regenerating after an edit

```bash
npm i -g playwright   # if not already available
node render.js card.html out.png 2   # 2 = deviceScaleFactor, 1080x1920 -> 2160x3840
```

Then copy `out.png` over `/public/social/emotional-mastery-reel-cta.png`.
