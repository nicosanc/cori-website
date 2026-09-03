<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Corbeauty Miami — Website Project

Client site for a Miami beauty salon focused on eyebrow/lash work (brow lamination, lash lifts, powder brows, lip blush) plus professional training courses. Goal: modern, chique, clean; mobile + desktop.

## Client & source material

- Brand: **CORBEAUTY** (Instagram: @corbeautymiami). Owner referred to as **Cori**.
- Old site (being retired, photos/video scraped from it): https://www.corbeautymiami.com/ (Squarespace)
- `CORBEAUTY.pdf` — logo options; **client chose page 1** (gradient wordmark on cream). Extracted to `assets/brand/logo-gradient.png`.
- `corbeauty canva reference.pdf` — brand kit (colors, fonts, gradient).

## Brand system

| Token | Hex |
|---|---|
| Warm Blush | `#E8B4A0` |
| Deep Rose | `#A85C52` |
| Rosewood | `#7D3A4A` |
| Blush Mist | `#F2D8CE` |
| Taupe | `#D4C4B0` |
| Background (eggshell, user-tuned) | `#FCFBF7` |
| Ink / Ink-soft (ours) | `#3A3331` / `#6D615C` |

- Signature gradient: `linear-gradient(135deg, #E8B4A0 0%, #A85C52 50%, #7D3A4A 100%)`
- Fonts (Google Fonts, via `next/font`): **Cormorant Garamond** Light 300 (display/headlines), **Jost** ExtraLight 200/300 (body/UI). Tagline from brand kit: "Beauty refined."
- All tokens live in `app/globals.css` under `@theme inline` (Tailwind v4). Utility classes: `.label` (letterspaced caps), `.gradient-brand`, `.gradient-text`, `.btn-pill` (pill + 1.04 hover scale), `.marquee-track`, shape masks `.arch` / `.cameo` / `.petal-a` / `.petal-b`.

## Stack

Next.js 16 (App Router, TS, Tailwind v4), scaffolded with create-next-app. No backend yet. Pages: `/` `/about` `/services` `/book`. `lib/services.ts` holds all service data (slug/name/category/blurb/duration/price/image). Booking flow: service cards link to `/book?service=<slug>`; `components/BookingForm.tsx` pre-selects it.

## Branches — three design directions (all deployed)

| Branch | Look | Live URL |
|---|---|---|
| `design/editorial-minimal` | Light editorial: split hero, list-row services, marquee gallery | https://cori-website-git-design-editorial-minimal-nicosancs-projects.vercel.app |
| `design/soft-immersive` | **CLIENT'S PICK.** Full-screen video hero, italic text ticker, arch/cameo/petal image shapes, overlap panels, centered two-tier nav | https://cori-website-git-design-soft-immersive-nicosancs-projects.vercel.app |
| `design/dark-accent` | Noir luxe: dark hero/footer frame, numbered service index w/ hover reveal, menu-style services, snap-scroll gallery | https://cori-website-git-design-dark-accent-nicosancs-projects.vercel.app |

- **Chosen direction: `design/soft-immersive`, with the services page copied from `design/editorial-minimal`** (client preference; done via `git checkout design/editorial-minimal -- app/services/page.tsx`).
- `main` = just assets + initial commit; production merge hasn't happened yet.
- Remote: https://github.com/nicosanc/cori-website.git

## Deployment

- Vercel project `cori-website` (account `nicosanc`), **GitHub integration connected** — pushing any branch auto-builds it; branch URLs above are stable.
- Deployment Protection was **disabled manually** by the user so client links are public.
- CLI deploys (`vercel deploy`) stall on upload from this machine — use git push instead.

## Video & imagery notes

- `public/video/corbeauty-loop.mp4` — 3.3s 1080p loop scraped from old site's services page (HLS via ffmpeg). Played by `components/AmbientVideo.tsx`: **playbackRate 0.7**, crop `object-[50%_22%]` (tuned so lashes/brows stay in frame). On soft-immersive it's the full-screen hero under a `bg-rosewood/60` tint (client likes the red-ish wash).
- 24 photos in `assets/photos/` (committed) and `public/images/`. Portrait of Cori = `23_IMG_1762.jpg`, crop tuned to `object-[18%_0%]` (she's off-center in frame). Powder-brow shots 20/21 are low-res screenshots.
- Almost all photos are portrait/square — no wide landscape shots exist.

## Placeholders that need real data before launch

- **All prices and durations in `lib/services.ts` are invented.**
- **The three training offerings are invented** (old site had none) — confirm names/prices with client.
- **Booking form does not submit anywhere** — success state is faked client-side. Needs wiring (email to owner or similar).
- About-page copy is adapted from her old site; fine as draft.

## Remaining TODO

1. Real prices/durations/training from client → `lib/services.ts`
2. Wire booking form submissions (email her)
3. Merge `design/soft-immersive` → `main` for production
4. Custom domain

## Working notes for Claude

- User checks the running dev server themselves (`npm run dev`, port 3000) — **never take screenshots to self-verify**; build-check with `npm run build`, push, and let them look.
- Iterate live in small steps; user gives rapid visual feedback (crop nudges, speeds, spacing).
- Be token-efficient; diagnose before re-attempting fixes; ask before a third attempt.
