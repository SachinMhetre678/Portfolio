# Site Content (Phase 2, approved 2026-10-06)

Status: **APPROVED by Sachin (2026-10-06)**, including both proposed "My part" lines (Scribly, RAG). This is the source of truth for site copy. Home and the Projects visuals were updated on 2026-10-10 to match the code; Sachin has not re-reviewed those edits.

Sources: resume (AUDIT.md appendix A), audit decisions (AUDIT.md section 3), Sachin's Phase 2 answers (2026-10-06), and the public GitHub repos (READMEs, `requirements.txt` and git history, checked 2026-10-06). Nothing is invented. Open items are in `docs/TODO.md`.

Copy rules (from DESIGN_SYSTEM.md): sentence case, no em-dashes or en-dashes in visible copy (ranges use ` - `), `…` not `...`, numbers only from the resume, no filler verbs. One exception approved by Sachin: the ❤ in the footer.

---

## 1. Positioning

**Primary story:** Automation engineer who builds the tooling around the tests. Java backend + Playwright/Cucumber + CI.
**Secondary theme:** full-stack apps and AI/ML/cloud projects from university and hackathons.

---

## 2. Global

| Slot | Copy |
|---|---|
| Nav name | Sachin Mhetre (floating pill nav on every page, sidebar removed 2026-10-06) |
| Job title | Shown only in the About experience timeline (the old sidebar status line is gone) |
| Nav | Home · About · Projects · Contact (4 pages, routes unchanged) |
| Footer | © 2026 with ❤ by Sachin (restyled per DESIGN_SYSTEM.md) |
| Portrait | `public/images/sachin-portrait.jpg` (hero, nav avatar, About header, Open Graph image). Alt: Sachin Mhetre |
| SEO title (home) | Sachin Mhetre · Automation Engineer |
| SEO title pattern | `{Page} · Sachin Mhetre` |
| Meta description | Automation engineer in Pune. I build test automation and the tooling around it with Java, Playwright, Cucumber and Jenkins. |

---

## 3. Home

Updated 2026-10-10 to match the code. Replaces the earlier home copy. Other pages are unchanged here.

**Section order:** Hero, Proof strip, A bit about me, Selected work, My stack, Get in touch (closing), footer.

**Nav (all pages):** floating pill with portrait + `Sachin Mhetre`, Home · About · Projects · Contact, theme toggle and a `Get in touch` pill. On phones the links move into a menu button.

### Hero

No employer or job title in the hero.

- **Badge:** Pune, India · B.Tech CSE 2026
- **Headline (h1):** **Hi, I'm Sachin.** (bold line) / *I build things that work.* (italic, muted line)
- **Subline:** I build full-stack apps and AI projects. My team won FOSS Hack 2025 with Scribly. (Changed 2026-10-10: no mention of testing or automation in the hero.)
- **Buttons:** `View projects` → `/projects` · `Get in touch` → `/contact`
- **Visual:** 3D avatar scene (`public/images/sachin-3d-wave.webp`, alt: Cartoon illustration of Sachin waving hello) on a spotlight and floor glow, with three floating stack blocks (React, Next.js, Java) and one chip: 👋 Pune, India. The arch portrait now only appears on About.

### Proof strip

| Item | Line |
|---|---|
| FOSS Hack 2025 winner | Top project among 800+ submissions |
| BMC Hackademia top 3 | RAG QnA bot for PDFs, 48-hour hackathon (links to the RAG card on Projects) |
| B.Tech CSE 2026 | Symbiosis Institute of Technology |

### A bit about me

Heading: A bit about me · link: `More about me` → `/about`

> I'm an automation engineer in Pune, and I like building the tooling around the tests. I studied Computer Science and Engineering at Symbiosis Institute of Technology, and my team won FOSS Hack 2025. Outside work, I captained my Kho-Kho team in junior college, play the tabla, and play a few sports and esports.

### Selected work

Heading: Selected work · link pill `View projects`. Cards use the approved project copy from section 5, in this order, each with a visual on top:

| # | Card | Visual |
|---|---|---|
| 1 | Scribly (large, accent-tinted): one-liner, result, team line, GitHub + Demo video | Project poster, opens in a modal |
| 2 | Regression failure-management system: one-liner, impact, "Internal tool at Vimo, details shared on request." | Mock dashboard with made-up data (owners "Owner A" to "Owner E", scenarios such as "Login flow" and "Checkout") and a handwritten note: this sorts itself every night |
| 3 | Hope: one-liner, GitHub + Live | Project poster, opens in a modal |
| 4 | Hotel Management System: one-liner, GitHub | Image `hotel.png` (see TODO, it is a Power BI dashboard) |

RAG document Q&A (poster, opens in a modal) appears on the Projects page, not on Home. Poster images are captioned "Project poster" and open full size in a dialog with a Close button.

### My stack

Heading: My stack · caption: Hover or tap a block. A server rack of icon blocks (5 units, each with a label) with a 3D cartoon avatar of Sachin pointing at it (`public/images/sachin-3d-pointing.webp`, alt: Cartoon illustration of Sachin pointing at his tech stack). Items live in the `UNITS` array in `StackRack.tsx`. No testing tools are shown here on purpose (they stay on About).

| Unit | Blocks |
|---|---|
| Languages | Java · Python · JavaScript · TypeScript · C/C++ |
| Backend | Spring Boot · Node.js · Express |
| Frontend | React · Next.js · SvelteKit · Tailwind CSS |
| Data | PostgreSQL · MySQL · MongoDB |
| Cloud & tools | AWS · Docker · Git · GitHub Actions · Jenkins · Postman |

The About page keeps the full seven skill groups (section 4).

### Closing

- Heading: Get in touch
- Body: Questions about a project, or want to talk about test automation? Send me a message.
- Button: Get in touch → `/contact`

"Get in touch" is the only contact-intent label on the page (nav, hero, closing). "View projects" is the only portfolio-intent label.

Footer: © 2026 with ❤ by Sachin (no mascot credit; it is in the README).

### Strobi (mascot)

All of Strobi's lines are in `src/common/components/mascot/strobiLines.ts` and only use facts from this file. Behavior is described in `docs/TODO.md`.

---

## 4. About

**Page title:** About
**Page subtitle:** Background, experience and skills.

### Intro

Revised 2026-10-06 (pending Sachin's review): header is badge `About` + **A bit about me.** / *the short version.* + the approved subtitle, with a small portrait. The intro now leads with who I am, same facts, job paragraph second; the outside-work line is shown last as its own note. Section order: intro, Achievements, Experience, Education, Skills, outside-work note, resume (hidden until the file exists).

> I'm Sachin, from Pune. I studied Computer Science and Engineering at Symbiosis Institute of Technology (2022 - 2026), and I like building test automation and the tools around it. Beyond test automation I've built full-stack web apps and machine learning projects, and my team won FOSS Hack 2025.
>
> At work I'm an automation engineer at Vimo. I write end-to-end UI tests in Playwright and Cucumber, and I build the Java tooling that keeps a large regression suite manageable: failure analysis, ownership routing, reporting and Jira integration.
>
> Outside work: I captained my Kho-Kho team in junior college, play the tabla, and play a few sports and esports.

Previous version (superseded):

> I'm a QA automation engineer at Vimo in Pune. I write end-to-end UI tests in Playwright and Cucumber, and I build the Java tooling that keeps a large regression suite manageable: failure analysis, ownership routing, reporting and Jira integration.
>
> I studied Computer Science and Engineering at Symbiosis Institute of Technology (2022 - 2026). Outside QA I've built full-stack web apps and machine learning projects, and my team won FOSS Hack 2025.
>
> Outside work: I captained my Kho-Kho team in junior college, play the tabla, and play a few sports and esports.

### Experience

**Associate Automation Engineer · Vimo**
Jan 2026 - Present · Pune
- Built a regression failure-management system in Java, PostgreSQL, Jenkins and Jira for a 360-scenario Playwright/Cucumber suite. It handles 50-60 nightly failures across multiple state environments and routes them to 9 test owners.
- Cut manual failure distribution from 3-4 hours to 5-10 minutes.
- Write end-to-end UI tests with Playwright, JavaScript, Cucumber BDD and the Page Object Model for healthcare insurance workflows.
- Stabilized Jenkins regression runs using Allure reports, logs and database records, with more robust selectors, synchronization and reusable components.

**Mobile App Developer Intern · Ab-normal Home**
Jun 2024 - Nov 2024 · Kothrud, Pune (hybrid)
- Built a React Native app with chat, a notice board and an event calendar.
- Added OTP authentication.
- Mentored 15+ children.

**Full Stack Developer Intern · Meta Craftlab Pvt Ltd**
Jun 2023 - Jul 2023 · Remote
- Built an online polling platform with SvelteKit and MongoDB, including automated poll lifecycle management.
- Wrote 5+ REST APIs for poll creation, responses and results.

### Education

**Symbiosis Institute of Technology, Pune**
B.Tech, Computer Science and Engineering · Sept 2022 - May 2026 · CGPA 8+/10

HSC · Arihant College, Pune · 2020 - 2022

The old "Pune University" and "Secondary School" labels are removed. Stream and board are not shown until Sachin confirms them (TODO).

### Skills

| Group | Chips |
|---|---|
| Languages | Java · Python · JavaScript · TypeScript · C/C++ |
| Automation & testing | Playwright · Cucumber BDD · Selenium · JUnit · Allure · Claude Code |
| Backend & APIs | Spring Boot · Node.js · Express.js · REST APIs |
| Databases | PostgreSQL · MySQL · MongoDB |
| Frontend | React · Next.js · SvelteKit · Tailwind CSS |
| DevOps & tools | Jenkins · Git · Docker · GitHub Actions · Jira · Postman · AWS |
| Core | OOP · DSA · DBMS · Computer Networks · Cloud Computing |

### Achievements

- **Winner, FOSS Hack 2025 (team).** Scribly was the top project among 800+ submissions and 5,000+ participants in a 48-hour hackathon. → links to the Scribly project card
- **Top 3 finalist, BMC Hackademia.** A RAG QnA bot for PDFs, built in a 48-hour hackathon. → links to the RAG project card

### Resume

`Download resume (PDF)` → `/resume.pdf` *(placeholder. Sachin adds the file to `public/`. The link stays hidden until the file exists. TODO)*

---

## 5. Projects

**Page title:** Projects
**Page header (2026-10-06):** badge `Projects`, headline **Things I've built** / *at work, in hackathons and at university.* (the approved subtitle, split into two tones). Featured cards show in this order: Scribly, failure management, Hope, Hotel Management, then RAG and Personal Finance. Cards keep the full approved copy. Scribly, Hope and RAG show a poster image that opens in a modal. "Earlier work" is a grid of compact cards.

### Featured

**1. Regression failure-management system** · Vimo (work project)
*One-liner:* Turns a night of failed regression tests into assigned, tracked Jira defects.
*Impact:* Failure distribution went from 3-4 hours of manual work to 5-10 minutes, for 50-60 nightly failures across 9 owners.
*What it does:*
- Pulls run results from the Jenkins and Allure APIs, on a schedule or on demand.
- Finds an owner for each failure in four steps: scenario-author mappings, Git history, keywords in the failed step, then feature-directory rules. Normalizes Git identities, and uses round-robin when nothing matches.
- Stores results per state environment in PostgreSQL and shows them on an internal dashboard: state-wise tracking, scenario history, Allure links, search and controlled owner reassignment.
- Creates Jira defects grouped by failure, by owner and state, or by owner, with a dry-run mode to check before filing.
*Tags:* Java · PostgreSQL · Jenkins · Allure · Jira · Git
*Links:* none. Card note: Internal tool at Vimo, details shared on request.
*Visual:* mock dashboard with made-up data (no real names, states, URLs or ticket IDs).

**2. Scribly** · FOSS Hack 2025 winner, team project
*One-liner:* Chrome extension for timestamped notes, drawing and annotation, highlights and screenshots on YouTube videos, with a searchable dashboard and export/import.
*Result:* Winner of FOSS Hack 2025, top project among 800+ submissions and 5,000+ participants (48-hour hackathon).
*Team:* Built with Onkar Mendhapurkar and Janmejay Pandya.
*My part:* I built the drawing and highlighting tools: a reworked drawing panel, a highlighter tool, canvas sizing fixes and Ctrl-based drawing controls. I also reviewed and merged teammates' pull requests.
*Tags:* React · Tailwind CSS · JavaScript · localStorage
*Links:* GitHub `SachinMhetre678/Scribly` · Demo video (YouTube `KeMPmMdQH3w`)
*Visual:* project poster (`scribly.webp`).

**3. RAG document Q&A** · BMC Hackademia top 3 finalist
*One-liner:* Upload a PDF and ask questions about it.
*Detail:*
- Upload one or more PDFs. They are split into chunks, embedded with Hugging Face `all-MiniLM-L6-v2` and indexed in FAISS.
- Questions are answered by an LLM through Groq, using only the uploaded documents. Unrelated questions get a "not related to the uploaded documents" reply instead of a guess.
*My part:* Built end to end: the Flask backend, the LangChain retrieval pipeline and the web UI.
*Tags:* Python · Flask · LangChain · FAISS · Hugging Face · Groq
*Links:* GitHub `SachinMhetre678/RAG_based_Doc_Conversational` (no live link)
*Visual:* project poster (`rag-qna.webp`, concept layout, not the running app).

**4. Hotel Management System**
*One-liner:* Full-stack hotel booking platform with room search, bookings and an admin dashboard.
*Detail:*
- Room availability checks and date-range validation for bookings.
- Admin dashboard to add, edit and delete rooms and manage bookings.
- JWT authentication with Spring Security, room images stored in AWS S3.
*Tags:* Spring Boot · React · MySQL · AWS S3
*Links:* GitHub `SachinMhetre678/Hotel_Booking_Sytem`
*Visual:* currently `hotel.png`, which is a Power BI dashboard (TODO: replace with a real screenshot).

**5. Hope: emotionally intelligent robotic companion** · Final-year project
*One-liner:* A Raspberry Pi companion robot that reads emotion from face, voice and text, and responds with empathy.
*Detail:*
- Multimodal emotion recognition with DeepFace (face), Wav2Vec2 (speech) and Transformers (text).
- Empathetic conversation through Gemini, with memory across sessions.
- Real-time vitals from a BLE smartwatch.
*Tags:* Python · Raspberry Pi · DeepFace · Wav2Vec2 · Transformers · Gemini
*Links:* GitHub `SachinMhetre678/Hope-Final-Year-Project` · Live `hope-rpi.vercel.app`
*Visual:* project poster (`hope.webp`).

**6. Personal Finance Management System**
*One-liner:* Desktop app to track income, expenses and savings goals.
*Detail:*
- Normalized (3NF) MySQL schema with triggers, accessed over JDBC.
- Transactions, savings goals with monthly progress, and financial summaries.
- Swing dashboard with XChart charts of monthly income and spending.
*Tags:* Java · MySQL · JDBC · Swing
*Links:* GitHub `SachinMhetre678/Personal_Finance_Management`
*Visual:* existing `fintrack.png`.

### Earlier work

| Project | One-liner | Tags | Links |
|---|---|---|---|
| ClaimWise | Flags likely fraudulent insurance claims with a decision tree classifier, plus K-Means anomaly detection and a React dashboard. | Python · scikit-learn · React | GitHub · Live |
| Inventory Management on AWS | 3-tier inventory app deployed on AWS with Amplify, EC2, RDS and CloudWatch. | Next.js · Node.js · PostgreSQL · AWS | GitHub |
| CodeDrop | Paste and share code snippets that delete themselves after a set time. | SvelteKit · MongoDB · Tailwind CSS | GitHub · Live (pending Sachin's check, TODO) |
| Collabio | Workspace app for shared documents and real-time collaboration. | Next.js · Node.js · MongoDB · Firebase | GitHub |
| MediSync | Doctor appointment booking with an admin panel and AI doctor recommendations. | React · Node.js · MongoDB · OpenAI | GitHub · Live |
| Heart Disease Prediction | Flask web app that predicts heart disease risk from patient data with a trained ML model. | Python · Flask · SQLite | GitHub |
| PlateSniper | Detects and extracts car license plates from images and video with YOLOv10. | Python · YOLOv10 | GitHub |
| Cricket T20 Analysis | Picks a "best 11" from T20 World Cup 2022 data: scraping, cleaning, modeling and a Power BI dashboard. | Python · Power BI | GitHub |
| Hotel Revenue Analysis | Power BI revenue dashboard built with Power Query and DAX. | Power BI | GitHub |

### Filter

Categories: All · Automation · Full stack · AI/ML · Data. The selected category goes in the URL (`?category=`). "Loading…" shows only while loading. Empty state: No projects in this category yet.

---

## 6. Contact

**Page title:** Contact
**Page header (2026-10-06):** badge `Contact`, headline **Let's talk.** / *the fastest way is email.* Email is a large copy-to-clipboard card (`Copy email`, `Send email`). The resume card appears only once `public/resume.pdf` exists (TODO).

**Phone (2026-10-10, replaces the "Find me online" pills and the Book a call card):** on desktop a smartphone mockup (region label `Contact phone`) shows a home screen with apps Mail, Calendar, GitHub, LinkedIn, X, Instagram and a dock with Mail and Calendar. Opening an app shows: Mail: the email with `Copy` and `Send`; Calendar: **Book a 30-minute call**, Google Meet, via Calendly., button `Book a call`; GitHub, LinkedIn, X, Instagram: the label, the handle below and an `Open` button. `Back` or Esc returns home. Under 768px there is no phone: a `Find me online` grid of the same six tiles, each linking straight out. The red 1 on Mail is decoration only.

| Label | Value |
|---|---|
| Email | sachinmhetre456@gmail.com |
| LinkedIn | linkedin.com/in/sachin-mhetre-382039233 |
| GitHub | SachinMhetre678 |
| X | @Sachin_Mhetre_ |
| Instagram | @_sachin_4141 |

**Book a call:** Book a 30-minute call · Google Meet, via Calendly. · Button: Book a call → `calendly.com/sachinmhetre678`

No phone number anywhere.

---

## 7. 404

Heading: Page not found · Body: This page doesn't exist or has moved. · Button: Back to home

---

## 8. Contribution evidence (basis for the approved "My part" lines)

**Scribly** (`git shortlog` on all branches): onkar69483 21 commits, Sachin 9, Janmejay-Pandya 9.
Sachin's non-merge commits, all on 2025-02-23:
- `4b3ef97` "Improved the UI of the drawing panel, Drawing, Highlighting Feature added" (`drawing.js`, `drawing.css`, +1163/-452). This adds the highlight tool.
- `e9833ab` "Fix Canvas Size" (`drawing.js`)
- `09e6525` "Updated control to use ctrl+buttons for drawing" (`drawing.js`, `drawing.css`)

Sachin also merged 5 PRs (#2 timestamp notes, #6 dashboard, #9 popup info, #11 guide popup, #17 README).
Teammates: Onkar built the timestamp notes, dashboard, settings and popup. Janmejay wrote the first drawing feature (`2bca2d7`), edit/delete and the tutorial popup.

**RAG document Q&A:** all 8 commits (2025-02-20 to 2025-02-21) are Sachin's. There are no other contributors in the repo. If teammates worked outside this repo, the "My part" line should change.
