# CLAUDE.md

Personal portfolio of Sachin Mhetre. Next.js 13.5 (Pages Router), React 18, TypeScript, Tailwind 3, next-themes, Geist fonts. Work happens on the `redesign` branch. `main` deploys to Vercel.

## Read first

Read the docs in this order before changing anything:

1. `README.md`: overview, run instructions, credits
2. `docs/ARCHITECTURE.md`: routes, folders, components, theming, images, deploy
3. `docs/DESIGN_SYSTEM.md`: tokens and rules (section 11 is the final direction)
4. `docs/CONTENT_APPROVED.md`: the approved copy, the source of truth for site text
5. `docs/TODO.md`: open items, known issues, Strobi notes
6. `docs/AUDIT.md`: historical, only for background on past decisions

`docs/CONTENT.md` is an older copy of the content file. Don't edit it.

## Commands

- `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`
- Node.js 22.12 or newer is required locally.

## Conventions

- Make small commits with conventional messages (`feat:`, `fix:`, `style:`, `docs:`). Don't commit unless asked.
- Don't run `npm run build` while `npm run dev` is running (both write `.next`).
- No new dependencies without asking first.
- No destructive git commands (`reset --hard`, `clean`, `stash`, force push, branch deletion).
- Never delete source assets (`docs/source-images/`, original PNGs, posters). Ask first.
- Site copy must match `docs/CONTENT_APPROVED.md`. Don't invent projects, metrics or links, and update that file when copy changes.
- Vimo work is confidential: no internal URLs, ticket IDs, dashboard screenshots, or customer or state data.
- No em dashes in site copy or docs. Strobi lines live only in `src/common/components/mascot/strobiLines.ts`.
