# Asset status

All placeholder `AssetSlot`s have been removed. Every spot that was waiting on a
binary is now either a real image already in the repo or a code-drawn visual —
the site has no "drop a file here" gaps left. The `AssetSlot` component is deleted.

## ✅ Real images wired in (from your `/images` drop)
| In `/public` | Where it's used |
|---|---|
| `leslin-portrait.jpg` | Intro / "The approach" portrait (graded toward paper) |
| `leslin-himalayan.jpg` | Footer, beside the "thinking tool" line |
| `product-pocket.jpg` | Product tease (home) + Product page (true obsidian/gold, ungraded) |
| `product-printer.jpg` | Product page masonry — "checked in person at the printer" |
| `rangde-logo.png` | Storyteller page client mark |
| `brand/*` + `brand/build/*` | Full Nilambur deck on the Brand page |
| `brand/before-after.png` | **Now also the home Brand tease** (was the last placeholder) |
| `desk-bookshelf.jpg` | In `/public`, held in reserve (not placed yet) |

## ✅ Code-drawn — no binary needed (replaced former placeholders)
| Component | Page | Replaces |
|---|---|---|
| `viz/RefusalDemo.tsx` | Systems | the `.mp4` refusal screen-recording — a clinical-assistant transcript that plays the refusal on scroll (out-of-scope question → 0/10 retrieval → decline + clarifying question) |
| `viz/ScrollyTile.tsx` | Product masonry | the scrollytelling screenshot — the da Vinci → Newton → Luhmann sequence, drawn as a threaded list |
| `viz/WritingWidgetTile.tsx` | Product masonry | the writing-widget screenshot — an obsidian/gold editor mock with a live caret |

> Storyteller bars, Systems RAG diagram, Brand palette + type spec are also drawn
> in code — no assets needed.

## Optional future swaps (not blocking — only if you ever want the real thing)
- A real ~30s **screen recording of the refusal** could replace `RefusalDemo` as an inline `<video>`.
- Real **scrollytelling / widget screenshots** from pocketnotes.in could replace the two code tiles.
Both are nice-to-haves; the code versions stand on their own.

## Confirm (text, not assets)
- **Calendly** slug — placeholder `calendly.com/ks-leslin`.
- **LinkedIn** — `linkedin.com/in/leslin-k-seemon`.
- **Contact email** — `leslin@pocketnotes.in` (from the brief).
- **Domain** — sitemap/robots/OG use `leslin-portfolio.vercel.app`; tell me if a custom domain is coming.
