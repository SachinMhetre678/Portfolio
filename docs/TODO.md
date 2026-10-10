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
- [ ] **Review the tour copy** in `src/common/components/mascot/tour.ts` (5 steps plus the greeting). It only uses facts from `docs/CONTENT_APPROVED.md` and avoids pronouns for Sachin.

### Strobi (mascot) notes

- Code: `src/common/components/mascot/`. Client-only, loaded with `next/dynamic` after idle (`MascotLoader`), so it stays out of First Load JS. `public/strobi.avatar.json` is fetched at runtime. Animations used (all exist in the JSON): `waking`, `idle`, `excited`, `celebrate`, `laughing`, `drowsy`, `happy`, `curious`, `playful`.
- **Reactions:** "Get in touch" links to `/contact` and elements with `data-mascot="excited"` trigger `excited`. Copying the email on Contact fires `celebrate`. 30 s of no input gives `drowsy`; any movement wakes it. Reduced motion: still `neutral` expression, no reactions, no smooth scroll.
- **Minimize, not dismiss:** the x minimizes Strobi to a round "Show Strobi" button (`sessionStorage` key `strobi-minimized`). It never disappears for good.
- **Mobile (< 768px):** Strobi (or the round button) fades out while it would overlap the portrait (`data-mascot-avoid`), the nav or menu, or any link or button in `main` and the footer. It comes back when you scroll to a clear spot, or when it gets keyboard focus. Open bubbles are never hidden.
- **Guided tour (scripted, no AI, no network):** first visit only (`localStorage` key `strobi-tour-seen`). Progress is kept in `sessionStorage` (`strobi-tour-step`). Targets are `data-tour="proof" | "selected-work" | "experience" | "earlier-work" | "contact"`. The footer link "Take the tour again" clears the flag and starts it. After the tour, clicking Strobi (or the "Open Strobi quick menu" button, for keyboard users) opens a quick menu: See projects, About me, Get in touch, Copy email. Esc closes the bubble or menu (during the greeting or tour it counts as skipping).
- **Known tradeoff:** the greeting bubble can cover part of the page on small screens until it is answered.

## Files to decide on

- [ ] `public/abc1.wav` and `public/conv2_abc1.wav` (~340 KB, not referenced anywhere). Keep for now, per Sachin. Don't delete without asking.

## Later

- [ ] Optimize `platesniper.gif` (5.5 MB) to video/WebP in Phase 3.
- [ ] **Hope hardware photo:** the Hope card uses a concept/summary poster (`public/images/projects/hope.webp`, labelled "Project poster"; source PNG in `docs/source-images/`). Replace it or add a real photo of the Hope hardware.
- [ ] **RAG running-app screenshot:** the RAG card uses a concept poster (`public/images/projects/rag-qna.webp`, labelled "Project poster"; source PNG in `docs/source-images/`). Replace it or add a real screenshot of the running app. Keep site copy free of the poster's "No hallucinations" claim.
