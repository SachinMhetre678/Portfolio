# Design System (Phase 1, 2026-10-06)

Status: **approved by Sachin (2026-10-06).** Phase 3 builds against this file. Section 9 records the approved decisions.

---

## 1. Reference choice: Linear

Source: `github.com/VoltAgent/awesome-design-md`, `design-md/linear.app/DESIGN.md`.

Candidates compared: **Linear**, **Vercel**, **Stripe**, **Notion**.

| Candidate | Why not / why |
|---|---|
| Vercel | Light-first (white canvas). Its decoration is a multi-color mesh gradient, and depth comes from flipping whole sections to black. That breaks "dark-first", "one accent" and Taste's Page Theme Lock. |
| Stripe | Light-first, with an indigo gradient mesh across the top third of every page and thin 300-weight display type. Built for finance marketing, not a calm personal site. |
| Notion | Light-first, with a navy hero band, a purple pill CTA, illustrations and many pastel card colors. Too playful and too many colors. |
| **Linear (chosen)** | The only dark-first system of the four. It has one accent, a surface ladder plus hairline borders instead of shadows, no gradients, and restrained type with negative tracking. It reads like software-craft documentation, which suits a "QA automation engineer who builds tooling" story. |

### What was adapted from Linear, and why

| Linear original | Adapted | Reason |
|---|---|---|
| Canvas `#010102` (almost pure black) | `#0b0c0e` | The brief asks for a soft dark palette. Taste 8.B / 9.A: no pure black. |
| Lavender-blue accent `#5e6ad2` | Muted emerald `#3fbf8f` (dark) / `#0b6b4a` (light) | Taste 4.2 "Lila rule" discourages purple/blue as a default, and the brief didn't ask for it. Emerald is on Taste's list of approved single accents. It also gives the site its own identity instead of copying Linear's. **Needs approval (section 9).** |
| Dark only, no light theme | Adds a light theme derived from the same ladder | The site keeps its light/dark toggle (audit decision 3), and Taste 6.C wants both modes. |
| Display 80 / 56 / 40px | Display 48 / 36 / 28px | The main column sits beside a sidebar (about 760px wide), so Linear's landing-page sizes would be too large. Taste 9.B: no screaming H1s. |
| Font: Linear's own typeface (fallback Inter) | **Geist + Geist Mono** | Linear's font is proprietary. Taste 4.1 discourages Inter as a default and pairs Geist with Geist Mono. Linear's own doc lists Geist as a valid substitute. |
| Mono used only inside product screenshots | Mono for dates, tags and metadata | We have no product screenshots (Vimo is confidential), so mono carries the "technical" voice instead. |
| Product screenshots in every section | Not applicable | Vimo dashboards can't be shown. Public projects use their existing screenshots where they're accurate. |

---

## 2. Design read and dials (Taste section 0 and 1)

> **Reading this as:** a developer portfolio redesign for recruiters and engineering leads, with a calm, Linear-style minimalist language, leaning toward Tailwind 3 utilities + CSS-variable tokens + Geist + restrained motion.

Mode: **Redesign, overhaul visuals, preserve content and IA** (Taste 11.A). We keep the sidebar + main layout and the routes `/`, `/about`, `/projects`, `/contact`. Nav labels and sections change only in Phase 2, with approval.

| Dial | Value | Why |
|---|---|---|
| `DESIGN_VARIANCE` | 4 | "Calm / Linear-style" is listed at 5–6. The sidebar layout is already asymmetric, so the main column stays orderly. |
| `MOTION_INTENSITY` | 3 | The brief caps transitions at 150–300ms. Hover, focus, theme change and drawer only. No scroll-reveal choreography, no infinite loops. |
| `VISUAL_DENSITY` | 4 | Recruiters scan quickly, so this is moderate density. Section gaps sit around 64–96px, not "art gallery". |

---

## 3. Color tokens

Implemented as CSS variables on `:root` (light) and `.dark` (dark), and exposed to Tailwind as semantic colors (Taste 8.A, "CSS variables" strategy). `next-themes` already uses `darkMode: 'class'`. Default theme: **dark**.

| Token | Dark | Light | Use |
|---|---|---|---|
| `--canvas` | `#0b0c0e` | `#f7f8f8` | Page background |
| `--surface-1` | `#111214` | `#ffffff` | Cards, sidebar, mobile drawer |
| `--surface-2` | `#17181b` | `#eff0f2` | Hovered card, active nav item, chips |
| `--surface-3` | `#1d1e22` | `#e6e7ea` | Pressed state, code/inline mono background |
| `--hairline` | `#26282d` | `#e3e4e7` | Default 1px borders and dividers |
| `--hairline-strong` | `#3a3c42` | `#c9cbd0` | Hovered card border |
| `--ink` | `#f2f3f4` | `#16171a` | Headings, primary text |
| `--ink-muted` | `#c9ced6` | `#3c3f45` | Body text |
| `--ink-subtle` | `#959aa3` | `#5c6068` | Secondary text, dates, captions, footer |
| `--ink-disabled` | `#6b7079` | `#8b8f96` | Disabled only. Never for content |
| `--accent` | `#3fbf8f` | `#0b6b4a` | Links, primary button, focus ring, active nav marker |
| `--accent-hover` | `#5fd3a6` | `#095a3e` | Hover on accent items |
| `--on-accent` | `#0b0c0e` | `#ffffff` | Text on the accent button |
| `--accent-soft` | `rgb(63 191 143 / 0.12)` | `rgb(11 107 74 / 0.08)` | Active nav background, highlighted chip |

`#ffffff` in light mode is used only as a surface on top of the off-white canvas, never as the page background (Taste 8.B).

**Measured contrast (WCAG):**
- Dark: ink 17.6:1, ink-muted 12.4:1, ink-subtle 6.9:1, accent text 8.4:1, on-accent button 8.4:1.
- Light: ink 16.9:1, ink-muted 9.9:1, ink-subtle 5.9:1, accent text 6.1:1, white on accent 6.5:1.
- All content text passes AA. Body and headings pass AAA. `--ink-disabled` (3.9:1 dark) is for disabled controls only.

**Rules:**
- **One accent** (Taste 4.2 Color Consistency Lock). No brand colors on social buttons, no lime "Featured" badge, no blue filter pills, no teal Calendly card, no rainbow bio keywords. Brand icons are drawn in `--ink-muted`.
- Semantic success/error colors aren't needed (there are no forms). If one is added later, it must go through this file first.
- No gradients and no glows. `<meta name="theme-color">` = `--canvas` for each theme. `color-scheme: dark` on `<html>` in dark mode (Vercel guideline).

---

## 4. Typography

Fonts: **Geist** (sans) and **Geist Mono**, both self-hosted through the `geist` npm package with `next/font` (Taste 3.A: never a `<link>` to Google Fonts). This replaces Plus Jakarta Sans, Sora and Fira Code. **New dependency, needs approval (section 9).**

| Token | Size / line-height | Weight | Tracking | Use |
|---|---|---|---|---|
| `display` | 48px / 1.1 (mobile 36px) | 600 | -0.03em | Home H1 only |
| `h1` | 36px / 1.15 (mobile 30px) | 600 | -0.025em | Page titles (About, Projects, Contact) |
| `h2` | 24px / 1.25 | 600 | -0.02em | Section headings |
| `h3` | 18px / 1.35 | 500 | -0.01em | Card titles, timeline roles |
| `body-lg` | 18px / 1.6 | 400 | 0 | Home intro paragraph |
| `body` | 16px / 1.65 | 400 | 0 | Default body |
| `body-sm` | 14px / 1.55 | 400 | 0 | Card body, sidebar, meta |
| `caption` | 13px / 1.4 | 400 | 0 | Footer, helper text |
| `mono` | 13px / 1.5, Geist Mono | 400 | 0 | Dates, tags/chips, tech stacks |

**Rules:**
- Body text max width **65ch** (Taste 4.1).
- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs (Vercel guideline + redesign skill).
- `font-variant-numeric: tabular-nums` on timeline dates.
- Heading levels never skip (audit: `h6` used in cards). Exactly one `h1` per page.
- Emphasis inside a heading uses the same font's weight, not a different font or a gradient (Taste 4.1 Emphasis Rule, 9.A). **The current gradient H1 goes.**
- Copy: sentence case for headings and buttons. (The Vercel guideline asks for Title Case. Taste and Linear use sentence case. Pick one per site: sentence case.)
- Typography characters: `…` not `...`, curly quotes, and **no em-dashes in visible copy** (Taste 9.G). Ranges use a plain hyphen: `Jun 2023 - Jul 2023`.

---

## 5. Spacing, layout, shape

**Spacing scale (4px base, Linear):** 4, 8, 12, 16, 24, 32, 48, 64, 96. These are Tailwind's `1, 2, 3, 4, 6, 8, 12, 16, 24`. No other values (fixes the audit's `py-8 / p-6 / my-8 / pl-2` mix).

| Where | Value |
|---|---|
| Between page sections | 64px (`space-y-16`), 48px on mobile |
| Section heading → content | 24px |
| Card padding | 24px (20px on mobile) |
| Chip padding | 4px 10px |
| Button padding | 8px 14px, min height 40px (44px on touch) |
| Page gutter | 24px desktop, 16px mobile |

**Layout:**
- Sidebar 260px, fixed, at `lg` (1024px) and up. Main column `max-w-3xl` (768px). The whole shell is centered in `max-w-6xl`.
- Below `lg`: sticky top bar, 56px tall (Linear `top-nav`; Taste nav cap 80px), plus a slide-in drawer.
- Grids collapse to one column below `md` (768px), stated in each component (Taste 4.7).
- `min-h-[100dvh]`, never `h-screen` (Taste 3.E).

**Radius (Taste 4.4 Shape Lock, Linear scale):**
| Element | Radius |
|---|---|
| Chips, badges, inline code | 6px |
| Buttons, nav items, theme toggle | 8px |
| Cards, timeline items, drawer | 12px |
| Avatar | 12px rounded square (not a circle, per the redesign skill) |

No pill shapes anywhere.

**Elevation:** no drop shadows in dark mode. Depth = surface ladder + hairline (Linear). In light mode, cards may use at most `0 1px 2px rgb(22 23 26 / 0.04)`. Hover = step up one surface level + `--hairline-strong`.

**Z-index scale:** `header 30`, `drawer-backdrop 40`, `drawer 50`, `skip-link 60`. Nothing else (Taste 6.F).

---

## 6. Motion

- Durations: **150ms** for color and border, **200ms** for transform, **250–300ms** for drawer and theme change. Easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- Animate only `transform` and `opacity` (plus color/border transitions). List transition properties explicitly, never `transition: all` (Vercel anti-pattern; Taste's dial text suggests `all`, so the Vercel rule wins).
- Press: `active:scale-[0.98]` on buttons and cards (Taste 4.5).
- `prefers-reduced-motion: reduce`: no transforms, color transitions only, the drawer appears instantly. The wave emoji plays once and doesn't play at all under reduced motion. The 404 glitch becomes static.
- **Removed:** AOS (both AOS and framer-motion are loaded today), the infinite skill marquee, the pulsing status dot, the floating CTA card. framer-motion stays only for the drawer if CSS isn't enough. Otherwise it goes too.

---

## 7. Components (Phase 3 build list)

| Component | Spec |
|---|---|
| **Button / primary** | `--accent` background, `--on-accent` text, 8px radius, 14px/500 label. Hover `--accent-hover`. One primary CTA intent per page (Taste 4.5: no duplicate CTA intent). |
| **Button / secondary** | `--surface-1` background, 1px `--hairline`, `--ink` text. Hover: surface-2 + hairline-strong. |
| **Text link** | `--accent`, underline on hover, offset 3px. External links get an icon (`aria-hidden`) and "opens in new tab" in screen-reader text. |
| **Focus ring** | `focus-visible:outline-2 outline-offset-2 outline-[--accent]` on every interactive element. Never `outline-none` without a replacement. |
| **Sidebar** | Avatar (64px, rounded square, `priority`), name (h3 style, not an h1), status line "Associate QA Automation Engineer @ Vimo" in `--ink-subtle`, nav, theme toggle, footer. No verified tick, no handle, no pulsing dot. |
| **Nav item** | 14px, `--ink-subtle`. Hover `--ink` + surface-2. Active page: `--ink`, `--accent-soft` background, `aria-current="page"`. |
| **Mobile top bar + drawer** | 56px bar: name + menu `<button aria-label="Open menu" aria-expanded>`. The drawer has the same content as the sidebar, traps focus, closes on Esc, uses `overscroll-behavior: contain`, and returns focus to the button. |
| **Theme toggle** | `<button>` with an `aria-label` that names the next state, and a Phosphor sun/moon icon. Keeps the switch function (audit decision 3). Sits in the sidebar footer. |
| **Project card** | Surface-1, hairline, 12px, 24px padding. Contents: title (h3), one-liner, impact line (only real numbers from the resume), mono tags, links row (GitHub / Live) as real `<a>` elements with accessible names. Hover lifts one surface step. The whole card isn't one big link: links are explicit, so each has a name. The Vimo card is text only. |
| **"Earlier work" list** | Compact rows, not cards: title, one-liner, tags, links. Grouped under one heading (Taste 4.9: long lists get a different component). |
| **Experience timeline** | Left rail with a 1px `--hairline` line. Each item: role (h3), company, mono date range, 2–4 bullets. Vimo first. |
| **Skill chips** | Grouped by resume category. Category label in caption style, chips in mono 13px, surface-2, 6px radius. Text chips, not tooltip-only icons (fixes the audit a11y issue). |
| **Achievement item** | Title, one line of context, mono date or event. FOSS Hack 2025 and BMC Hackademia, using only resume facts. |
| **Contact links** | A single list of rows: icon in `--ink-muted` + label + handle. No brand-colored buttons. The Calendly row is the one primary CTA. |
| **Skip link** | First focusable element. Visually hidden until focused. Goes to `#main`. |
| **Icons** | Phosphor through `react-icons/pi` (already installed with `react-icons` 4.12, so no new dependency). One family only. Brand logos (GitHub, LinkedIn, X, Instagram) through `react-icons/si`, all in `--ink-muted`. |

---

## 8. How the reference skills were applied

### Taste skill (`.agents/skills/`)
Files read: `design-taste-frontend/SKILL.md` (main), `redesign-existing-projects/SKILL.md`, `minimalist-ui/SKILL.md`.

**Applied:**
- 0.B design read, and the dials from 1.A ("calm / Linear-style" row, adjusted for the brief's motion cap).
- 4.1 type: no Inter default → Geist + Geist Mono, same-font emphasis, 65ch measure.
- 4.2 one accent, Lila rule (no lavender), Color Consistency Lock.
- 4.4 Shape Consistency Lock, with the radius rule documented. Cards only where they carry hierarchy (projects). Timeline and earlier work use spacing/dividers.
- 4.5 button contrast checked (section 3), active press feedback, one label per CTA intent.
- 4.7 layout discipline: nav on one line, 56px bar, explicit mobile collapse, eyebrow restraint (no uppercase micro-labels above sections).
- 4.9 copy self-audit and no fake-precise numbers: only resume numbers (360 scenarios, 50–60 nightly failures, 9 owners, 3–4 h → 5–10 min).
- 4.11 page theme lock. 6.B reduced motion. 6.D image priority and no CLS. 6.F z-index scale.
- 9.G em-dash ban for visible copy. 9.F: no decorative status dots (the pulsing dot goes), no scroll cues.
- 11 redesign protocol: audit first (Phase 0), routes kept, IA changes only with approval.
- Redesign skill: font swap → palette cleanup → states → spacing, in that order. Skip link, focus rings, active nav, semantic HTML, no commented-out dead code. Avatar as a rounded square.

**Not applied, on purpose:**
| Taste rule | Why not |
|---|---|
| 3.A Tailwind v4, RSC, `motion/react` | Audit decision 7: no framework swap. Stays on Next 13.5 Pages Router + Tailwind 3.3 (redesign skill: "work with the existing stack"). |
| 4.8 "real images in every section" / picsum placeholders | Vimo is confidential (no screenshots), and placeholder stock photos would be fake content. We use real project screenshots only where they're accurate. |
| Motion 4–7 band (600ms reveals, staggered scroll entry) | The brief caps motion at 150–300ms. Dial set to 3. |
| minimalist-ui: serif headings, warm bone palette, pastel tag colors | Light-first and editorial. Conflicts with dark-first, one accent, and Taste's own serif rule. |
| 6.C "default to system theme" | Brief says dark-first. Default dark, with a toggle. |
| Section 5 GSAP sticky stacks / horizontal pan, bento grids | Not needed for this content. Would add JS. |

### Vercel Web Interface Guidelines
Fetched `vercel-labs/agent-skills/skills/web-design-guidelines/SKILL.md`. It points to `vercel-labs/web-interface-guidelines/command.md`, which was fetched as well. The rules that apply here become the Phase 3 build checklist and the Phase 4 review list:

- **A11y:** `aria-label` on icon-only buttons (menu, theme), `<button>` for actions and `<a>` for navigation (fixes the hamburger `div`), `aria-hidden` on decorative icons, correct heading order, skip link.
- **Focus:** `:focus-visible` rings everywhere. Sticky header must not cover focused elements (`scroll-margin-top`).
- **Animation:** reduced motion, transform/opacity only, no `transition: all`, decorative loops stop.
- **Typography:** `…`, curly quotes, `text-wrap: balance`, tabular-nums, loading text "Loading…" (fixes the always-visible "Loading…" bug).
- **Content:** `min-w-0` / `break-words` on long titles and URLs. Empty states for category filters.
- **Images:** explicit width/height, `priority` on the avatar, lazy below the fold. GIF → `<video autoplay muted loop playsinline>` or WebP (PlateSniper's 5.5 MB GIF).
- **Navigation:** project category filter in the URL (`?category=`). Links are real `<a>`.
- **Touch:** `touch-action: manipulation`, intentional tap highlight, `overscroll-behavior: contain` on the drawer.
- **Theming:** `color-scheme` + `theme-color` meta per theme.
- **Copy:** active voice, numerals for counts, specific button labels ("Book a call", not "Continue").
- **Not applied:** Title Case (sentence case chosen, see section 4). `Intl` formatting and i18n detection (static English dates). Form rules (no forms).

---

## 9. Approved decisions (2026-10-06)

1. **Accent:** muted emerald, `#3fbf8f` (dark) / `#0b6b4a` (light).
2. **Font:** add the `geist` package (v1.7, peer `next >=13.2`), self-hosted via `next/font`. Replaces Jakarta, Sora and Fira Code. Measure the font payload in Phase 4.
3. **Animation:** remove AOS. Keep framer-motion only if the mobile drawer needs it; otherwise remove it in Phase 3.
4. **Theme:** dark by default, with a manual toggle.

---

## 10. Stack icons (Home "My stack" rack)

SVGs are copied into `public/icons/stack/` (no runtime dependency). Logos remain trademarks of their owners.

- **devicon** (MIT, https://github.com/devicons/devicon, `-original` variants, nextjs `-plain`): java, python, javascript, typescript, cplusplus, spring, nodejs, react, svelte, tailwindcss, mongodb, docker, git, postman, postgresql, githubactions.
- **simple-icons** (CC0, https://github.com/simple-icons/simple-icons): express, mysql, jenkins, aws (`amazonaws`). Together with `nextjs` these are single-colour, so `StackRack.tsx` draws them with a CSS mask in `--ink` (works in both themes).
- Rack styling: `.rack-*` classes at the end of `globals.css`, token-based only. Motion (LED glow, avatar float, block lift) is off under `prefers-reduced-motion`.
- Avatar: `public/images/sachin-3d-pointing.webp` (640x960, 43 kB). The 1.5 MB source PNG is in `docs/source-images/`.
