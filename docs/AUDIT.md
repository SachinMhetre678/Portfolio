# Phase 0 Audit (2026-10-06)

Audit of the live site (https://sachinmhetre.vercel.app) and this repo before the redesign.
The live site matches the repo exactly. The decisions in section 3 are **approved by Sachin** and are binding for later phases.

**Next session:** Phase 1 is drafted in `docs/DESIGN_SYSTEM.md` (pending approval of its section 9). After approval, continue with **Phase 2** (see section 6).

---

## 1. Stack (as found)

- **Next.js 13.5 (Pages Router) + React 18 + TypeScript + Tailwind 3.3**. Also next-themes (dark mode, default dark), framer-motion and AOS (animation), next-seo (page titles only). Deployed on Vercel with `@vercel/analytics` and `@vercel/speed-insights`.
- Routes: `/`, `/about` (tabs: Intro / Career / Education), `/projects`, `/contact`, `404`.
- Content is hardcoded in `src/common/constant/*.ts` (`about.ts`, `careers.ts`, `education.ts`, `projects.ts`, `stacks.tsx`, `menu.tsx`) and inline in `src/modules/home/components/Introduction.tsx`, `Services.tsx`, `src/common/components/elements/Status.tsx`.
- Forked from the aulianza.id open-source template. It has many unused leftovers: next-auth, Prisma, Firebase, Giscus, Monaco, MDX/blog libs, WakaTime, unused API routes (`src/pages/api/*`), `HeaderTop.tsx` ("Swanand Wagh"), `TopBar.tsx` (aulianza.com promo). The repo has both `package-lock.json` and `yarn.lock`.
- Taste skill files are in `.agents/skills/` (e.g. `design-taste-frontend`, `redesign-existing-projects`, `minimalist-ui`, `high-end-visual-design`). They aren't registered as Claude Code skills, so read the `SKILL.md` files directly.

## 2. Screenshots

`docs/screenshots/before/`: every page at 1440px and 390px (dark), plus `about-career-*`, `about-education-*`, `mobile-menu-open-390.png`, `home-light-1440.png`.

---

## 3. Approved decisions

1. Audit table approved. **ARCHIVE** means move to an **"Earlier work"** section; nothing is deleted. **Collabio**: live demo returns 500, so show only the GitHub link. Sachin will check the **CodeDrop** demo manually (keep its demo link until told otherwise).
2. **Email:** `sachinmhetre456@gmail.com` everywhere (replaces `sachinmhetre678@gmail.com` in `menu.tsx`). Calendly URL `calendly.com/sachinmhetre678` stays as-is (it's a separate account handle).
3. **Toggle:** it's the light/dark theme switch. Keep it as the theme switch. Status label becomes **"Associate QA Automation Engineer @ Vimo"**.
4. **Drop** the blue "Verified" tick and the "@Integral" handle.
5. **Keep** the Ab-normal Home internship (Mobile App Developer intern, Jun–Nov 2024, React Native) in the Experience timeline. **Keep** HSC, but fix the labels and compact it into one line under Education. Add **CGPA 8+/10** to the Symbiosis entry.
6. **Keep** Instagram and X. Relabel "Twitter" as **"X"**.
7. **Cleanup approved:** remove unused template code (next-auth, Prisma, Firebase, Giscus, Monaco, MDX/blog libs, unused API routes, HeaderTop/TopBar). Keep one lockfile. Do it **as its own commit**, then run `npm run build`. **No framework swap.**
8. Extra GitHub repos: add only **InventoryManagement_AWS_3Tier** and **ClaimWise** to "Earlier work". Skip the rest.
9. **Hope:** repo `https://github.com/SachinMhetre678/Hope-Final-Year-Project`, live `https://hope-rpi.vercel.app/`. **Hotel Management System:** repo `https://github.com/SachinMhetre678/Hotel_Booking_Sytem`. Both confirmed.
10. **Meta Craftlab:** use the resume version (Full Stack Developer Intern, Jun–Jul 2023, Remote, polling platform with SvelteKit + MongoDB, automated poll lifecycle, 5+ REST APIs). Drop the old code-paste bullets.
11. **Skills:** use the resume's grouped skills (appendix A). Of the old extra icons, keep only **TypeScript** and **Next.js**. Drop the rest.
12. **Pending from Sachin (ask in Phase 2, leave clearly marked placeholders):** resume PDF link, FOSS Hack 2025 project details (name, links, description), BMC Hackademia details.

Still open (ask in Phase 2, don't guess):
- Bio: the old bio mentions Azure, Data Science, Data Visualization, which aren't on the resume. Default: leave them out unless Sachin says otherwise.
- Home CTA: is Sachin open to opportunities, or should it be a neutral "Get in touch"?
- About intro: the old "outside work" paragraph (Kho-Kho captain, sports, tabla, esports). Proposed: keep as one short line.
- `public/abc1.wav`, `public/conv2_abc1.wav` (~340 KB, unreferenced): possibly related to Hope. Ask before removing.
- LinkedIn: is there a shorter vanity URL than `/in/sachin-mhetre-382039233/`?
- Is the Calendly link still active?

---

## 4. Content audit table (final verdicts)

KEEP = keep as-is · UPDATE = change content · ARCHIVE = move to "Earlier work" · REMOVE = delete (approved) · ADD = new

### Sidebar / global
| Item | Current | Verdict | Notes |
|---|---|---|---|
| Avatar | `public/images/sachin.jpg` | KEEP | Optimize. Fix alt text (currently "Swanand Wagh"). |
| Name | Sachin Mhetre | KEEP | |
| Verified tick | blue tick + tooltip | REMOVE | Decision 4 |
| Handle | "@Integral" | REMOVE | Decision 4 |
| Status | pulsing dot + "Software Engineer" | UPDATE | → "Associate QA Automation Engineer @ Vimo" |
| Theme toggle | switch next to status | KEEP | Restyle; must be keyboard-accessible |
| Nav | Home / About / Projects / Contact | UPDATE | New sections decided in Phase 2 |
| Footer | "© 2026 with ❤ by Sachin" | KEEP | Restyle |
| TopBar / HeaderTop | template leftovers | REMOVE | Part of the cleanup commit |

### Home
| Item | Current | Verdict | Notes |
|---|---|---|---|
| Greeting | "Hi, I'm Sachin 👋" (infinite wave) | KEEP | Wave once; respect reduced motion |
| Tagline | "Tech Explorer & Innovation Enthusiast" | UPDATE | New positioning |
| Location | "Stay in Pune, Maharashtra" | UPDATE | → "Based in Pune, Maharashtra" |
| Education line | "Studying at Symbiosis, Pune" | UPDATE | → "B.Tech CSE, Symbiosis Institute of Technology (2026)" |
| Bio | Cloud/AI paragraph with 8 colored keywords | UPDATE | Rewrite: short, specific, max 1–2 highlighted words |
| "What I've been working on" | "an bachlor's student at the University of Symbiosis" | UPDATE | Fix copy, rewrite |
| CTA card | "Lets work together!" + "seeking a Summer 2024 internship" | UPDATE | Fix copy; wording pending (section 3 open items) |
| Contact me button | → /contact | KEEP | |

### About
| Item | Current | Verdict | Notes |
|---|---|---|---|
| Page subtitle | "A short story of me, not important but seems better than nothing." | UPDATE | |
| Intro paras 1–3 | generic "aspiring entrepreneur…" | UPDATE | Rewrite from resume |
| Intro para 4 | Kho-Kho captain, sports, tabla, esports | KEEP (shortened) | One short "outside work" line |
| "Looking forward to collaboration!" | | REMOVE | Filler |
| Skills marquee | 41 shuffled icons, 3 infinite rows | UPDATE | → grouped chips (resume + TypeScript, Next.js) |
| Resume tab | commented out (old Google Doc link) | UPDATE | Placeholder until Sachin sends the PDF link |
| Career: Vimo | — | ADD | Associate QA Automation Engineer, Jan 2026–Present |
| Career: Ab-normal Home | Mobile App Developer intern, Jun–Nov 2024 | KEEP | Not on resume; kept per decision 5 |
| Career: Meta Craftlab | "Web Developer Intern, Jul–Aug 2023", code-paste bullets | UPDATE | → resume version (decision 10) |
| Education: Symbiosis | "Symbiosis International University, Information Technology" | UPDATE | → Symbiosis Institute of Technology, B.Tech CSE, Sept 2022–May 2026, CGPA 8+/10 |
| Education: HSC | "Pune University · Secondary School · HSC" (Arihant College, 2020–2022) | UPDATE | Fix labels; one compact line |

### Projects
| Project | Verdict | Notes |
|---|---|---|
| Vimo regression failure-management system | ADD (flagship, leads Projects) | Text only. No internal URLs, ticket IDs, dashboard screenshots, or customer/state data. |
| Hotel Management System | ADD | Repo: Hotel_Booking_Sytem. Don't reuse `hotel.png` (that's Hotel Revenue Analysis). |
| Hope: Emotionally Intelligent Robotic Companion | ADD | Repo + live link from decision 9. Secondary AI/ML theme. |
| Personal Finance Management System (old "FinTrack") | UPDATE/MERGE | Add 3NF schema, JDBC, triggers, XChart Swing dashboard. Remove wrong "HTML5" tag. |
| FOSS Hack 2025 project | ADD (placeholder) | Details pending |
| BMC Hackademia RAG QnA Bot & LLM Validation | ADD (placeholder) | Details pending |
| CodeDrop | ARCHIVE | Demo returned 429 to automated checks; Sachin to verify |
| Collabio | ARCHIVE | GitHub link only (demo 500) |
| MediSync | ARCHIVE | Demo works |
| Heart Disease Prediction | ARCHIVE | Fix wrong stack tags (React, NLP) |
| PlateSniper | ARCHIVE | 5.5 MB GIF; convert to video/WebP. Fix wrong stack tags. |
| Cricket T20 Analysis | ARCHIVE | Power BI |
| Hotel Revenue Analysis | ARCHIVE | Power BI |
| ClaimWise | ADD to Earlier work | https://github.com/SachinMhetre678/ClaimWise_DSBI_ML_Model, live https://claim-wise.vercel.app/ |
| InventoryManagement_AWS_3Tier | ADD to Earlier work | https://github.com/SachinMhetre678/InventoryManagement_AWS_3Tier |
| Category filter / "Load More" / "Loading…" | UPDATE | "Loading…" text always visible (bug) |

Use the repo descriptions on GitHub for ClaimWise/Inventory one-liners; don't invent metrics.

### Contact
| Item | Current | Verdict | Notes |
|---|---|---|---|
| Email | sachinmhetre678@gmail.com | UPDATE | → sachinmhetre456@gmail.com |
| LinkedIn | /in/sachin-mhetre-382039233/ | KEEP | Automated check returns 999 (LinkedIn bot block); normal |
| Twitter | x.com/Sachin_Mhetre_ | UPDATE | Relabel "X" |
| Instagram | _sachin_4141 | KEEP | |
| GitHub | SachinMhetre678 | KEEP | |
| Book a Call | Calendly, 30 min, Google Meet | KEEP | |
| Brand-colored buttons | red / blue / sky / gradient / black | UPDATE | Visual only |

### Site-level
| Item | Verdict | Notes |
|---|---|---|
| 404 glitch page | KEEP | Restyle, respect reduced motion |
| SEO | UPDATE | Add meta description, OG image, proper favicon. `robots.txt` / `sitemap.xml` point to localhost:3000; fix `next-sitemap.config.js` siteUrl. |
| Unused `.wav` files | ASK | Section 3 open items |

---

## 5. Visual and technical problems

- **Console errors on every page:** `SessionProvider` (next-auth) requests `/api/auth/session` and `/api/auth/_log`, which return 404, so each page logs `CLIENT_FETCH_ERROR`. Fixed by the cleanup.
- **Hierarchy:** the hero is one dense bordered paragraph with rainbow keywords. The gradient H1 doesn't match plain section headings, so the type scale is flat. Tabs are flat gray blocks, and the active tab has low contrast.
- **Color:** no single accent (blue filter pills, lime "Featured" badge, teal Calendly card, brand-colored social buttons, ~8 bio colors). Background is near-black `#121212`.
- **Spacing:** no scale (`py-8`, `p-6`, `my-8`, `space-y-5`, `pl-2` mixed). Oversized gap above the Projects divider. Faint sidebar copyright.
- **Contrast:** low-contrast gray text (copyright, handle, marquee edges). Light-mode "Contact me" button is white on mid-gray (likely fails AA).
- **Responsive:** no horizontal overflow at 390px. But the mobile header is plain, the open menu is mostly empty, and the bio becomes a very long block.
- **Accessibility:** one `aria-*` attribute in the codebase. Hamburger is a `div` with `onClick` (not focusable, no label). Whole-card links lack accessible names. Skill icons are tooltip-only. Heading levels are skipped (`h6` in cards). No skip link, no visible focus styles. Infinite animations ignore `prefers-reduced-motion`.
- **Performance:** `platesniper.gif` 5.5 MB, `colabio.png` 530 KB. Image wrapper forces `quality={100}` and lazy-loads the above-the-fold avatar. Many unused dependencies (Firebase, Prisma, Monaco, next-auth, emotion, moment). Both AOS and framer-motion are loaded.
- **Link check (2026-10-06):** all GitHub repo links return 200. Demos: MediSync 200, Collabio 500, CodeDrop 429. abnormalhome.org returns 406 to curl (bot filter; verify in a browser).

---

## 6. Remaining phases (from the original brief)

- **Phase 1, design references:** apply the Taste skill (`.agents/skills/`) and report which parts were applied. Fetch and follow the raw Vercel web-design-guidelines `SKILL.md` (github.com/vercel-labs/agent-skills, `skills/web-design-guidelines/SKILL.md`). Pick ONE DESIGN.md from github.com/VoltAgent/awesome-design-md for a calm, premium, dark-first developer portfolio (Linear / Vercel / Stripe / Notion style), explain the choice, and save the adapted tokens to `docs/DESIGN_SYSTEM.md`.
- **Phase 2, positioning and content:** story = "QA automation engineer who builds tooling" (Java backend + Playwright/Cucumber + CI), with full-stack and AI/ML/cloud as a clear secondary theme. Vimo system leads Projects. Sections: Experience timeline, Projects cards, Skills grouped chips, Achievements (FOSS Hack 2025 and BMC Hackademia emphasized), Contact. Fix copy errors. Ask for the pending items in section 3. Never fabricate projects, metrics or links.
- **Phase 3, redesign:** keep sidebar + main structure. Soft dark palette, one accent, subtle borders, consistent spacing. Project cards with title, one-liner, impact, tags, links, hover. Motion 150–300ms, respect reduced motion. Mobile top bar/drawer. Full a11y. Optimized images, no CLS, minimal JS. Light/dark toggle. SEO (title, description, OG image, favicon).
- **Phase 4, Playwright verification loop:** no console errors, failed requests or 404s. Check every link. Screenshots at 375/768/1280/1920px, reviewed by eye. No horizontal scroll. Keyboard/focus test. Hover, theme toggle and mobile menu interactions. `@axe-core/playwright`. Lighthouse scores. Loop until clean. Save to `docs/screenshots/after/` plus a before/after summary.
- **Phase 5, docs:** `docs/README.md`, `OVERVIEW.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `PROJECTS.md` (mark confidential details), `PROFILE.md`, `CONTENT.md`, `TESTING.md`, `DECISIONS.md` (include the DESIGN.md choice and these audit outcomes), `TODO.md`, and a root `CLAUDE.md` pointing to `docs/README.md`.
- **Rules:** small logical commits per phase. Explain any heavy new dependency. Show a plan and wait for OK before big changes. Don't publish the phone number. At the end, report changes, files touched, test results, and what's needed from Sachin.

---

## Appendix A: Resume (source of truth)

**Sachin Mhetre**, Pune, Maharashtra · sachinmhetre456@gmail.com · LinkedIn: sachin-mhetre · GitHub: SachinMhetre678 · sachinmhetre.vercel.app (phone number: do not publish)

**Education:** Symbiosis Institute of Technology, Pune. B.Tech CSE, Sept 2022 – May 2026, CGPA 8+/10.

**Experience**
1. **Associate QA Automation Engineer, Vimo** (Jan 2026 – Present, Pune)
   - Built an automated regression failure-management system (Java, PostgreSQL, Jenkins, Git, Jira) for a 360-scenario Playwright/Cucumber suite. It processes 50–60 nightly failures across multiple state environments and routes them to 9 test owners.
   - Cut manual failure-distribution time from 3–4 hours to 5–10 minutes (failure analysis, ownership resolution, reporting, Jira distribution).
   - Four-stage ownership resolution (scenario-author mappings, Git history, failed-step keywords, feature-directory rules), with Git identity normalization and round-robin for unresolved failures.
   - Integrated Jenkins and Allure APIs; supports scheduled and manual runs.
   - State-aware PostgreSQL persistence plus an internal web dashboard (state-wise tracking, scenario history, Allure links, search, controlled owner reassignment).
   - Automated Jira defect creation with configurable grouping (by failure, owner/state, or owner) and dry-run validation.
   - End-to-end UI automation with Playwright, JavaScript, Cucumber BDD and the Page Object Model across healthcare insurance workflows.
   - Diagnosed and stabilized Jenkins regression failures using Allure, logs and DB records. Improved reliability with robust selectors, synchronization and reusable components.
2. **Full Stack Developer Intern, Meta Craftlab Pvt Ltd** (Jun – Jul 2023, Remote): online polling platform with SvelteKit + MongoDB and automated poll lifecycle management; 5+ REST APIs (poll creation, responses, results).
3. *(Kept from old site)* **Mobile App Developer Intern, Ab-normal Home** (Jun – Nov 2024, Kothrud, Pune, Hybrid): React Native app (chat, notice board, event calendar), OTP authentication, mentored 15+ children.

**Projects**
- **Hotel Management System** (Spring Boot, React, MySQL, AWS S3): full-stack booking platform with room availability and date-range validation, an admin dashboard with CRUD, and S3 image storage.
- **Hope: Emotionally Intelligent Robotic Companion** (Python, DeepFace, Wav2Vec2, Transformers, Gemini): multimodal emotion recognition (face, speech, text), empathetic LLM conversation with memory, real-time vitals via a BLE smartwatch.
- **Personal Finance Management System** (Java, MySQL, JDBC, Swing): normalized 3NF schema, transactions, savings goals, financial summaries, Swing dashboard with XChart, triggers.

**Skills**
- Languages: Java, Python, JavaScript, C/C++ (+ TypeScript per decision 11)
- Backend & APIs: Spring Boot, Node.js, Express.js, REST APIs
- Automation & Testing: Playwright, Cucumber BDD, Selenium, JUnit, Allure, Claude Code
- Databases: PostgreSQL, MySQL, MongoDB
- Frontend: React, SvelteKit, Tailwind CSS (+ Next.js per decision 11)
- DevOps & Tools: Jenkins, Git, Docker, GitHub Actions, Jira, Postman, AWS
- Core: OOP, DSA, DBMS, Computer Networks, Cloud Computing

**Achievements**
- Winner, FOSS Hack 2025: top project among 800+ submissions and 5,000+ participants (48-hour hackathon)
- Top 3 Finalist, BMC Hackademia: RAG QnA Bot & LLM Validation (48-hour hackathon)
