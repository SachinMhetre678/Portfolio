# TODO

Updated 2026-10-10. Open items first, then what is done, then notes on Strobi.

## Open

- [ ] **Resume PDF:** add the file as `public/resume.pdf`. It is still a placeholder: the About and Contact links stay hidden until the file exists.
- [ ] **Real photo of the Hope robot:** the Hope card uses a concept/summary poster (`public/images/projects/hope.webp`, captioned "Project poster"; source PNG in `docs/source-images/`). Add a photo of the actual hardware.
- [ ] **Phase 4 checks:** Playwright and accessibility checks have not been run (Playwright is not installed in the repo). Scope is in `docs/AUDIT.md` section 6: console errors, links, screenshots at 375/768/1280/1920px, keyboard and focus, axe, Lighthouse.
- [ ] **ESLint parser warning during build:** `.eslintrc` sets `"parser": "@babel/eslint-parser"`, which is not in `package.json` or `node_modules`. Either add the package (ask first, new dependency) or remove the parser setting.
- [ ] **Confirm Strobi viewport clipping:** a report that Strobi clips at the viewport edge could not be reproduced. Check on real devices and a few window sizes, then close this.
- [ ] **Optional: sharper avatar.** The My stack avatar is `public/images/sachin-3d-pointing.webp`, generated from the original PNG. Regenerate at a higher resolution if it looks soft on large screens.
- [ ] **Hotel Management System image:** the Home and Projects card uses `public/images/projects/hotel.png`, which is a Power BI revenue dashboard (the Hotel Revenue Analysis visual), not this app. Replace it with a real screenshot or remove the visual.
- [ ] **HSC stream and board:** the site shows only "HSC · Arihant College, Pune · 2020 - 2022". Add the stream and board when confirmed.
- [ ] **CodeDrop demo:** check `https://codedrop.vercel.app/` in a browser (automated checks got 429). Keep or remove the Live link.
- [ ] **RAG running-app screenshot:** the RAG card uses a concept poster (`public/images/projects/rag-qna.webp`, captioned "Project poster"; source PNG in `docs/source-images/`). Replace it or add a screenshot of the running app. Keep site copy free of the poster's "No hallucinations" claim.
- [ ] **Read through Strobi's lines** in `src/common/components/mascot/strobiLines.ts`. They only use facts from `docs/CONTENT_APPROVED.md`. Edit anything that doesn't sound like you.
- [ ] **AGPL-3.0:** `@bible-strong/avatar-web` and its dependency `@bible-strong/avatar-core` are AGPL-3.0-only. AGPL asks that the corresponding source be available to users of a network-served site, so keep this repo public (or otherwise offer the source) while the mascot ships. Not legal advice.
- [ ] **Source image copies:** the original avatar PNG is tracked twice, as `docs/source-images/sachin-3d-pointing.png` and `public/sachin-3d-pointing.png` (the second one is served at `/sachin-3d-pointing.png` and is not used by any page). Decide whether to keep the `public/` copy. Never delete source assets without asking.
- [ ] **Unused files:** `public/abc1.wav`, `public/conv2_abc1.wav` (about 340 KB) and `public/images/projects/platesniper.gif` (5.5 MB) are not referenced by the code. Keep for now, per Sachin. Don't delete without asking.
- [ ] **LinkedIn vanity URL:** keeping `/in/sachin-mhetre-382039233/` for now.
- [ ] **`docs/CONTENT.md`:** an older copy of the approved copy, still uses "QA" wording. `docs/CONTENT_APPROVED.md` is the one to edit. Decide whether to delete the old file.

- [ ] **Testing/QA/automation copy still on the site (decide):** About intro and work paragraph (`about.ts`), Vimo role, bullets and the "Automation & testing" skills group, Home AboutBlock and Closing (`Sections.tsx`), Automation project category and the failure-management card (`projects.ts`), SEO title and description (`site.ts`), Contact-adjacent Closing line, Strobi lines ("Sachin automates tests for a living", "Questions about test automation..."), README and docs. The hero no longer mentions it.
- [ ] **Stack avatar:** `design-source/sachin-3d-pointing-v2.png` did not exist, so the stack section still uses the current `sachin-3d-pointing.webp`.

## Done

- Hero: 3D waving avatar scene (spotlight, floor glow, 3 floating blocks, desktop mouse parallax) replaces the arch photo; nav avatar is a crop of the same image (2026-10-10)

- Audit, design references, content and the redesign (cleanup, tokens, layout, all four pages)
- Floating pill nav replaces the sidebar
- Home rebuilt: two-tone hero with arch portrait, proof strip, selected work with poster visuals, My stack rack with 3D avatar (replaces "Tools I use")
- Poster images (Scribly, Hope, RAG) open in an accessible modal, captioned "Project poster"
- Strobi mascot with a scripted personality system (the guided tour was removed)
- Footer mascot credit removed with the author's permission, credit moved to the README
- README and docs brought up to date with the code (2026-10-10)

## Strobi (mascot) notes

- Code: `src/common/components/mascot/`. Client-only, loaded with `next/dynamic` after idle (`MascotLoader`), so it stays out of First Load JS. Built on `@bible-strong/avatar-web` (the only mascot package in `package.json`; it pulls in `avatar-core`). `public/strobi.avatar.json` is fetched at runtime. Animation names (type `Mood` in `strobiLines.ts`): `waking`, `idle`, `excited`, `celebrate`, `laughing`, `drowsy`, `happy`, `curious`, `playful`, `suspicious`, `proud`, `surprised`, `shy`, `thinking`.
- **Editing the lines:** everything Strobi says is in `strobiLines.ts`, grouped by trigger. A line is a plain string, or `['text', 'mood']` to also play an animation (mood must be an animation name from the JSON). Rules: max 12 words, no em dashes, only approved facts, a different first word inside each group. `LINES.arrival.<page>` is the per-page pool, `LINES.hover.<key>` is keyed by the `data-strobi` attribute, `LINES.section.<name>` by `data-strobi-section`.
- **Triggers:** page arrival (random line per page; Home also mixes in time of day), first visit and return visit (`strobi-visited` in localStorage), hover/focus/tap on `data-strobi="..."` elements (Strobi itself, project cards `project-<slug>`, rack units `rack-<id>`, email card, the Contact phone `phone` and its app icons `app-mail`, `app-calendar`, `app-github`, `app-linkedin`, `app-x`, `app-instagram`, theme toggle, nav, proof items `proof-0..2`, the footer) and on any "Get in touch" link, a section scrolling into view for the first time per session (`data-strobi-section`, tracked in sessionStorage), theme switch, email copied, 30 s idle (drowsy line, then a wake-up line on movement), five quick clicks on Strobi, and the Konami code.
- **Bubble rules** (`useBubble.ts`): one bubble at a time, hides after 4 s, never the same line twice in a row, 6 s cooldown between automatic bubbles, no automatic bubbles while typing, and none while a modal is open. Hover and click bubbles can interrupt; automatic ones never do. Esc dismisses the bubble or menu.
- **Mute:** the quick menu (click Strobi, or the "Open Strobi quick menu" button for keyboard users) has a small "Shh" control. It sets `strobi-muted` in localStorage and stops all automatic bubbles for good. The same spot then shows "Unmute". Hover, click and copy reactions still work when muted. Reduced motion behaves like muted for automatic bubbles, and the avatar stays on a still `neutral` expression.
- **Minimize, not dismiss:** the x minimizes Strobi to a round "Show Strobi" button (sessionStorage `strobi-minimized`). It never disappears for good.
- **Mobile (< 768px):** Strobi (or the round button) fades out while it would overlap an element marked `data-mascot-avoid` (hero portrait, rack blocks), the nav or menu, or any link or button in `main` and the footer. Bubbles only appear on phones if Strobi is visible and the bubble would not cover any of those, so some lines are silently skipped there.
- Reactions that are not dialogue (`excited` on "Get in touch" and the email card, `drowsy` after 30 s) live in `useStrobiAvatar.ts`.
