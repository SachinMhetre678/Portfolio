# Sachin Mhetre | Portfolio

Personal portfolio of Sachin Mhetre, an automation engineer from Pune, India who builds test automation, the tools around it, and full-stack and AI projects.

**Live site:** https://sachinmhetre.vercel.app

![alt text](image-1.png)

## Highlights

- Dark-first design with a light theme toggle, a single emerald accent and a floating pill navigation
- Home, About, Projects and Contact pages, written in first person
- Home: a two-tone hero with an arch portrait, a proof strip, selected work cards, and a "My stack" section with a 3D-style server rack of icon blocks and a 3D avatar beside it
- Selected work cards with visuals: poster images (Scribly, Hope, RAG Document Q&A) that open in an accessible modal, and a mock dashboard for the failure-management system
- **Strobi**, a small animated mascot with page-aware, scripted speech bubbles (no AI calls, no backend)
- Respects `prefers-reduced-motion`, keyboard navigable, visible focus states
- Static pages, optimized images, sitemap generated at build time

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 13.5 (Pages Router), React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS 3, CSS-variable color tokens |
| Theming | next-themes (dark by default) |
| Fonts | Geist and Geist Mono (`geist` package, `next/font`), Geist Italic and Caveat for the hero and one annotation |
| Icons | `react-icons` (Phosphor set) for the UI, SVG files in `public/icons/stack/` for the stack rack |
| Stack section | `StackRack.tsx`: CSS-only rack blocks and avatar spotlight, no extra library |
| Mascot | `@bible-strong/avatar-web` (direct dependency, brings in `@bible-strong/avatar-core`), loaded lazily after the page is idle |
| SEO | next-seo, next-sitemap |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights` |
| Hosting | Vercel |

## Getting started

Requirements: Node.js 22.12 or newer (the mascot packages require it) and npm.

```bash
git clone https://github.com/SachinMhetre678/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open http://localhost:3000.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build, then generate the sitemap |
| `npm run start` | Serve the production build |
| `npm run lint` | Run `next lint` |
| `npm run typecheck` | Run `tsc --noEmit` |

> Don't run `npm run build` while `npm run dev` is running. Both write to the `.next` folder and can corrupt it. If that happens, stop everything, run `rm -rf .next` and start again.

## Project structure

```
.
├── docs/                 Project notes and decisions (see below)
├── public/               Static files: images, stack icons, mascot definition (strobi.avatar.json)
├── src/
│   ├── pages/            Routes: /, /about, /projects, /contact, 404
│   ├── modules/          Page sections: home, about, projects, contact
│   └── common/
│       ├── components/   elements/ (buttons, chips, portrait), layouts/ (pill nav, footer), mascot/ (Strobi)
│       ├── constant/     Content data: about, projects, contact links, menu, site metadata
│       ├── hooks/, libs/, types/
│       ├── fonts.ts      Extra fonts
│       └── styles/       globals.css (tokens, rack styles)
├── next.config.js
├── next-sitemap.config.js
├── tailwind.config.js
└── vercel.json
```

## Editing content

- **Copy and facts:** `docs/CONTENT_APPROVED.md` is the source of truth for everything shown on the site. Update it whenever the site copy changes.
- **About, projects and contact data:** `src/common/constant/` (`about.ts`, `projects.ts`, `contact.tsx`).
- **My stack items:** the `UNITS` array at the top of `src/modules/home/components/StackRack.tsx`. Each block names an SVG in `public/icons/stack/`.
- **Poster images:** files live in `public/images/projects/` (`scribly.webp`, `hope.webp`, `rag-qna.webp`) and are wired up in `src/modules/projects/components/WorkCard.tsx`. `PosterVisual.tsx` renders the card image and the modal. Posters are summaries or concept art, so they are captioned "Project poster".
- **Strobi's lines:** all dialogue lives in one file, `src/common/components/mascot/strobiLines.ts`. Each line is a short string, grouped by trigger (page arrival, hover, scroll, idle and so on). Edit freely, keep lines short.
- **Design tokens:** colors, type scale, spacing and motion are described in `docs/DESIGN_SYSTEM.md`.

## About Strobi (the mascot)

Strobi is a small blue character that greets visitors, reacts when you hover things, and comments on each page. It is fully scripted, so it runs with no API calls.

- The × button minimizes it into a small round button, and one tap brings it back
- "Shh" in its quick menu turns automatic bubbles off permanently (stored in `localStorage`)
- Automatic bubbles are disabled for visitors who prefer reduced motion
- The mascot is decorative and hidden from screen readers, with a keyboard-reachable quick menu button

## Docs

| File | Contents |
| --- | --- |
| `docs/ARCHITECTURE.md` | Routes, folders, key components, theming, images, deployment |
| `docs/DESIGN_SYSTEM.md` | Design tokens and rules, based on Linear's design system, plus notes on the final direction |
| `docs/CONTENT_APPROVED.md` | Final approved site copy |
| `docs/TODO.md` | Open tasks, known issues and Strobi notes |
| `docs/AUDIT.md` | Audit of the original site and the decisions made for the redesign (historical) |

## Deployment

The site deploys automatically on Vercel when changes are pushed to `main`. Pushes to other branches create preview deployments. The Vercel project uses Node.js 24.x.

## Contact

- Email: sachinmhetre456@gmail.com
- GitHub: [SachinMhetre678](https://github.com/SachinMhetre678)
- LinkedIn: [sachin-mhetre](https://www.linkedin.com/in/sachin-mhetre-382039233/)
