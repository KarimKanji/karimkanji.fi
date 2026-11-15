# Portfolio

A side-scrolling timeline portfolio. Open `index.html` in a browser to view it.

## Adding content

All text lives in `content.js`. Each chapter has a title, years, role, summary, tags, images and a longer story that opens in "Read the story".

## Adding pictures

1. Put photos in the `images/` folder.
2. Point to them from `content.js`, for example `images: ["images/abb-1.jpg", "images/abb-2.jpg"]`.

Several images on one chapter crossfade in the background. Any path that doesn't exist yet shows a placeholder with that file name, so the site always shows what is still missing.

Large landscape photos work best: about 2400 × 1500 px, JPG or WebP, under ~500 KB each. Darker or busy photos are fine, because the page adds a soft wash on the left so the text stays readable.

Placeholder names already used:

| Section | Files |
| --- | --- |
| Hello | `hero.jpg` |
| Volkswagen Group (K Auto) | `kauto-1.jpg` |
| State Security Networks (Erillisverkot) | `erillisverkot-1.jpg`, `erillisverkot-2.jpg` |
| Culture (TLK) | `tlk-1.jpg` (added) |
| Waumer | `waumer-1.jpg` … `waumer-8.jpg` (added) |
| Pourot (NEPPI) | `neppi-1.jpg` … `neppi-4.jpg` (added) |
| ABB (specification) | `spec-1.jpg`, `spec-2.jpg`, `spec-3.jpg` |
| Collaboration Engine (ABB) | `abb-1.jpg`, `abb-2.jpg`, `abb-3.jpg` |
| Teaching (Arcada) | `arcada-1.jpg` |
| Athena (hackathon) | `athena-1.jpg`, `athena-2.jpg`, `athena-3.jpg` |
| Research (Aalto) | `aalto-1.jpg` |
| How I work | `approach.jpg` |
| Say hello | `contact.jpg` |
