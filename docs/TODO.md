# TODO

Items that need Sachin, plus follow-ups from the redesign. Updated 2026-10-06.

## Waiting on Sachin

- [ ] **Resume PDF:** add the file as `public/resume.pdf`. The About and Contact pages link to `/resume.pdf`, and the links stay hidden until the file exists.
- [ ] **HSC stream and board:** the site shows only "HSC · Arihant College, Pune · 2020 - 2022". Add the stream and board when confirmed.
- [ ] **CodeDrop demo:** check `https://codedrop.vercel.app/` in a browser (automated checks got 429). Keep or remove the Live link.
- [ ] **Hotel Management System screenshot:** optional. The card works without one (`hotel.png` belongs to Hotel Revenue Analysis).
- [ ] **LinkedIn vanity URL:** keeping `/in/sachin-mhetre-382039233/` for now.

## Mascot and license

- [ ] **AGPL-3.0:** the mascot uses `@bible-strong/avatar-web` and `@bible-strong/avatar-core` (Stéphane Montlouis-Calixte, https://github.com/smontlouis/bible-strong-avatar-lab), both AGPL-3.0-only. The footer credits the project. AGPL asks that the corresponding source be available to users of a network-served site, so keep this repo public (or otherwise offer the source) while the mascot ships. Not legal advice; decide whether that works for you.
- [ ] **Read through Strobi's lines** in `src/common/components/mascot/strobiLines.ts` (about 140 lines). They only use facts from `docs/CONTENT_APPROVED.md`. Edit anything that doesn't sound like you.

### Strobi (mascot) notes

- Code: `src/common/components/mascot/`. Client-only, loaded with `next/dynamic` after idle (`MascotLoader`), so it stays out of First Load JS. `public/strobi.avatar.json` is fetched at runtime. Animations used (all exist in the JSON): `waking`, `idle`, `excited`, `celebrate`, `laughing`, `drowsy`, `happy`, `curious`, `playful`, `suspicious`, `proud`, `surprised`, `shy`.
- **Editing the lines:** everything Strobi says is in `strobiLines.ts`, grouped by trigger. A line is a plain string, or `['text', 'mood']` to also play an animation (mood must be an animation name from the JSON). Rules: max 12 words, no em dashes, only approved facts, a different first word inside each group. `LINES.arrival.<page>` is the per-page pool, `LINES.hover.<key>` is keyed by the `data-strobi` attribute, `LINES.section.<name>` by `data-strobi-section`.
- **Triggers:** page arrival (random line per page; Home also mixes in time of day), first visit and return visit (`strobi-visited` in localStorage), hover/focus/tap on `data-strobi="..."` elements (Strobi itself, project cards `project-<slug>`, email card, theme toggle, nav, proof items `proof-0..2`, footer credit) and on any "Get in touch" link, a section scrolling into view for the first time per session (`data-strobi-section`, tracked in sessionStorage), theme switch, email copied, 30 s idle (drowsy line, then a wake-up line on movement), five quick clicks on Strobi, and the Konami code.
- **Bubble rules** (`useBubble.ts`): one bubble at a time, hides after 4 s, never the same line twice in a row, 6 s cooldown between automatic bubbles, no automatic bubbles while typing, and no bubbles at all while a modal is open. Hover and click bubbles can interrupt; automatic ones never do. Esc dismisses the bubble or menu.
- **Mute:** the quick menu (click Strobi, or the "Open Strobi quick menu" button for keyboard users) has a small "Shh" control. It sets `strobi-muted` in localStorage and stops all automatic bubbles for good. The same spot then shows "Unmute". Hover, click and copy reactions still work when muted. Reduced motion behaves like muted for automatic bubbles, and the avatar stays on a still `neutral` expression.
- **Minimize, not dismiss:** the x minimizes Strobi to a round "Show Strobi" button (sessionStorage `strobi-minimized`). It never disappears for good.
- **Mobile (< 768px):** Strobi (or the round button) fades out while it would overlap the portrait (`data-mascot-avoid`), the nav or menu, or any link or button in `main` and the footer. Bubbles only appear on phones if Strobi is visible and the bubble would not cover any of those, so some lines are silently skipped there.
- Reactions that are not dialogue (`excited` on "Get in touch" and the email card, `drowsy` after 30 s) live in `useStrobiAvatar.ts`.

## Files to decide on

- [ ] `public/abc1.wav` and `public/conv2_abc1.wav` (~340 KB, not referenced anywhere). Keep for now, per Sachin. Don't delete without asking.

## Later

- [ ] Optimize `platesniper.gif` (5.5 MB) to video/WebP in Phase 3.
- [ ] **Hope hardware photo:** the Hope card uses a concept/summary poster (`public/images/projects/hope.webp`, labelled "Project poster"; source PNG in `docs/source-images/`). Replace it or add a real photo of the Hope hardware.
- [ ] **RAG running-app screenshot:** the RAG card uses a concept poster (`public/images/projects/rag-qna.webp`, labelled "Project poster"; source PNG in `docs/source-images/`). Replace it or add a real screenshot of the running app. Keep site copy free of the poster's "No hallucinations" claim.
