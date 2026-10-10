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
- The mascot (`src/common/components/mascot/`) is client-only, loaded with `next/dynamic` after idle, and fetches `public/strobi.avatar.json` at runtime. It uses only the animations `waking`, `idle`, `excited`, `celebrate`, `laughing` and `drowsy`. "Get in touch" links to `/contact` and elements with `data-mascot="excited"` trigger the excited reaction.

## Files to decide on

- [ ] `public/abc1.wav` and `public/conv2_abc1.wav` (~340 KB, not referenced anywhere). Keep for now, per Sachin. Don't delete without asking.

## Later

- [ ] Optimize `platesniper.gif` (5.5 MB) to video/WebP in Phase 3.
- [ ] **Hope hardware photo:** the Hope card uses a concept/summary poster (`public/images/projects/hope.webp`, labelled "Project poster"; source PNG in `docs/source-images/`). Replace it or add a real photo of the Hope hardware.
- [ ] **RAG running-app screenshot:** the RAG card uses a concept poster (`public/images/projects/rag-qna.webp`, labelled "Project poster"; source PNG in `docs/source-images/`). Replace it or add a real screenshot of the running app. Keep site copy free of the poster's "No hallucinations" claim.
