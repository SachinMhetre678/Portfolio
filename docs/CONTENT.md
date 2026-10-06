# Site Content (Phase 2 draft, 2026-10-06)

Status: **DRAFT, waiting for Sachin's approval.** No component changes until this file is approved.

Sources: resume (AUDIT.md appendix A), approved audit decisions (AUDIT.md section 3), and the public GitHub repo READMEs (checked 2026-10-06). Nothing here is invented. Anything not confirmed is marked `[PENDING: ...]`.

Copy rules (from DESIGN_SYSTEM.md): sentence case, no em-dashes or en-dashes in visible copy (ranges use ` - `), `…` not `...`, numbers only from the resume, no filler verbs.

---

## 1. Positioning

**Primary story:** QA automation engineer who builds the tooling around the tests. Java backend + Playwright/Cucumber + CI.
**Secondary theme:** full-stack apps and AI/ML/cloud projects from university and hackathons.

Every page should answer three things within a few seconds: what he does now (QA automation at Vimo), what makes him different (he builds systems, not only test scripts), and proof (the Vimo system, the FOSS Hack win).

---

## 2. Global

| Slot | Copy |
|---|---|
| Sidebar name | Sachin Mhetre |
| Sidebar status | Associate QA Automation Engineer @ Vimo |
| Nav | Home · About · Projects · Contact *(routes unchanged, see section 9 Q1)* |
| Footer | © 2026 Sachin Mhetre |
| Avatar alt | Sachin Mhetre |
| SEO title (home) | Sachin Mhetre · QA Automation Engineer |
| SEO title pattern | `{Page} · Sachin Mhetre` |
| Meta description | QA automation engineer in Pune. I build test automation and the tooling around it with Java, Playwright, Cucumber and Jenkins. |

The footer drops "with ❤" (emoji discouraged by the Taste skill). Say if you want it kept.

---

## 3. Home

### Headline (pick one)

- **A (recommended):** `I build test automation and the tools around it.`
- B: `QA automation engineer who builds tooling.`
- C: `Hi, I'm Sachin. I make regression suites easier to trust.`

Above the headline, a small line: `Hi, I'm Sachin 👋`. The wave plays once and is skipped under reduced motion. This keeps the old greeting (audit: KEEP).

### Hero subtext (20 words max)

> Associate QA Automation Engineer at Vimo, working with Java, Playwright, Cucumber and Jenkins. B.Tech CSE, Symbiosis Institute of Technology, 2026.

### Meta line under the hero

- Based in Pune, Maharashtra
- B.Tech CSE, Symbiosis Institute of Technology (2026)

### Bio (home, short)

> At Vimo I write end-to-end UI tests with Playwright and Cucumber, and I built the system that sorts our nightly regression failures and routes each one to its owner. Before that I built full-stack apps with Spring Boot, React and SvelteKit, and a few AI/ML projects, including a FOSS Hack 2025 winning entry.

One highlighted phrase at most (accent color): **"the system that sorts our nightly regression failures"**.

### "What I'm working on" (replaces "What I've been working on")

> Right now: making a 360-scenario Playwright/Cucumber regression suite faster to triage, and keeping its Jenkins runs stable.

### CTA card (wording depends on section 9 Q3)

- **If open to opportunities:**
  Heading: `Open to QA automation and SDET roles`
  Body: `If you're hiring for test automation or developer tooling, I'd like to hear about it.`
  Button: `Get in touch`
- **If not looking:**
  Heading: `Get in touch`
  Body: `Questions about a project, or want to talk about test automation? Send me a message.`
  Button: `Get in touch`

"Get in touch" is the only contact-intent label on the site (Taste: no duplicate CTA intent). The Calendly button on Contact is labeled "Book a call", which is a different intent.

---

## 4. About

**Page subtitle:** `Background, experience and skills.`

### Intro

> I'm a QA automation engineer at Vimo in Pune. I write end-to-end UI tests in Playwright and Cucumber, and I build the Java tooling that keeps a large regression suite manageable: failure analysis, ownership routing, reporting and Jira integration.
>
> I studied Computer Science and Engineering at Symbiosis Institute of Technology (2022 - 2026). Outside QA I've built full-stack web apps and machine learning projects, and won FOSS Hack 2025.
>
> Outside work: I captained my Kho-Kho team in junior college, play the tabla, and play a few sports and esports.

Old "outside work" paragraph shortened to one line (audit proposal; section 9 Q5). Azure, Data Science and Data Visualization are dropped from the bio (audit default; section 9 Q4).

### Experience

**Associate QA Automation Engineer · Vimo**
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

HSC (Science) · Arihant College, Pune · 2020 - 2022 *(one compact line; "Science" needs confirming, section 9 Q8)*

### Skills (grouped chips)

| Group | Chips |
|---|---|
| Languages | Java · Python · JavaScript · TypeScript · C/C++ |
| Automation & testing | Playwright · Cucumber BDD · Selenium · JUnit · Allure · Claude Code |
| Backend & APIs | Spring Boot · Node.js · Express.js · REST APIs |
| Databases | PostgreSQL · MySQL · MongoDB |
| Frontend | React · Next.js · SvelteKit · Tailwind CSS |
| DevOps & tools | Jenkins · Git · Docker · GitHub Actions · Jira · Postman · AWS |
| Core | OOP · DSA · DBMS · Computer Networks · Cloud Computing |

Automation & testing moves to second place (resume order has it third) so the primary story comes first.

### Achievements

- **Winner, FOSS Hack 2025.** Top project among 800+ submissions and 5,000+ participants in a 48-hour hackathon. `[PENDING: project name, link, one line on what you built]`
- **Top 3 finalist, BMC Hackademia.** RAG QnA bot and LLM validation, built in 48 hours. `[PENDING: details, link, see section 9 Q2]`

### Resume

`Download resume (PDF)` → `[PENDING: resume PDF link]`. Hidden until the link exists. No dead link.

---

## 5. Projects

**Page subtitle:** `Things I've built at work, in hackathons and at university.`

Order: Vimo system first, then hackathon wins, then the resume projects, then "Earlier work".

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
*Links:* none (internal). Card shows "Internal tool at Vimo, details shared on request".
*Visual:* none. No screenshots, URLs, ticket IDs or customer/state data.

**2. FOSS Hack 2025 winner** `[PENDING: name, one-liner, what you built, tags, links]`

**3. BMC Hackademia: RAG QnA bot & LLM validation** `[PENDING, see section 9 Q2]`
*Draft if `RAG_based_Doc_Conversational` is the project:* Upload a PDF and ask questions about it. Built with Flask, LangChain, a FAISS vector index, Hugging Face embeddings and the Groq API. *(Stack read from the repo's `requirements.txt`. The repo has no README, so the one-liner needs your check.)*

**4. Hotel Management System**
*One-liner:* Full-stack hotel booking platform with room search, bookings and an admin dashboard.
*Detail:*
- Room availability checks and date-range validation for bookings.
- Admin dashboard to add, edit and delete rooms and manage bookings.
- JWT authentication with Spring Security, room images stored in AWS S3.
*Tags:* Spring Boot · React · MySQL · AWS S3
*Links:* GitHub `SachinMhetre678/Hotel_Booking_Sytem`
*Visual:* no image yet (`hotel.png` belongs to Hotel Revenue Analysis). Card works without one. Send a screenshot if you have one.

**5. Hope: emotionally intelligent robotic companion** · Final-year project
*One-liner:* A companion robot that reads emotion from face, voice and text, and responds with empathy.
*Detail:*
- Multimodal emotion recognition with DeepFace (face), Wav2Vec2 (speech) and Transformers (text).
- Empathetic conversation through Gemini, with memory across sessions.
- Real-time vitals from a BLE smartwatch.
*Tags:* Python · DeepFace · Wav2Vec2 · Transformers · Gemini
*Links:* GitHub `SachinMhetre678/Hope-Final-Year-Project` · Live `hope-rpi.vercel.app`
*Note:* The repo README only describes facial emotion recognition on a Raspberry Pi. The copy follows the resume. See section 9 Q7.

**6. Personal Finance Management System**
*One-liner:* Desktop app to track income, expenses and savings goals.
*Detail:*
- Normalized (3NF) MySQL schema with triggers, accessed over JDBC.
- Transactions, savings goals with monthly progress, and financial summaries.
- Swing dashboard with XChart charts of monthly income and spending.
*Tags:* Java · MySQL · JDBC · Swing
*Links:* GitHub `SachinMhetre678/Personal_Finance_Management`
*Visual:* existing `fintrack.png`. The old "FinTrack" name and the "HTML5" tag are dropped.

### Earlier work (compact list)

| Project | One-liner | Tags | Links |
|---|---|---|---|
| ClaimWise | Flags likely fraudulent insurance claims with a decision tree classifier, plus K-Means anomaly detection and a React dashboard. | Python · scikit-learn · React | GitHub · Live (claim-wise.vercel.app) |
| Inventory Management on AWS | 3-tier inventory app deployed on AWS with Amplify, EC2, RDS and CloudWatch. | Next.js · Node.js · PostgreSQL · AWS | GitHub |
| CodeDrop | Paste and share code snippets that delete themselves after a set time. | SvelteKit · MongoDB · Tailwind CSS | GitHub · Live *(you're checking the demo)* |
| Collabio | Workspace app for shared documents and real-time collaboration. | Next.js · Node.js · MongoDB · Firebase | GitHub *(demo returns 500, link removed)* |
| MediSync | Doctor appointment booking with an admin panel and AI doctor recommendations. | React · Node.js · MongoDB · OpenAI | GitHub · Live |
| Heart Disease Prediction | Flask web app that predicts heart disease risk from patient data with a trained ML model. | Python · Flask · SQLite | GitHub |
| PlateSniper | Detects and extracts car license plates from images and video with YOLOv10. | Python · YOLOv10 | GitHub |
| Cricket T20 Analysis | Picks a "best 11" from T20 World Cup 2022 data: scraping, cleaning, modeling and a Power BI dashboard. | Python · Power BI | GitHub |
| Hotel Revenue Analysis | Power BI revenue dashboard built with Power Query and DAX. | Power BI | GitHub |

Stack fixes from the repos: Heart Disease drops "React" and "NLP" (the repo is Flask + HTML templates). PlateSniper drops "React", "CSS", "HTML5" and "NLP" (the repo is one YOLOv10 notebook).

### Filter

Categories: `All · Automation · Full stack · AI/ML · Data`. The selected category goes in the URL (`?category=`). The "Loading…" text appears only while loading. Empty state: `No projects in this category yet.`

---

## 6. Contact

**Page subtitle:** `The fastest way to reach me is email.`

| Row | Label | Value |
|---|---|---|
| Email | Email | sachinmhetre456@gmail.com |
| LinkedIn | LinkedIn | sachin-mhetre-382039233 *(section 9 Q6)* |
| GitHub | GitHub | SachinMhetre678 |
| X | X | @Sachin_Mhetre_ |
| Instagram | Instagram | @_sachin_4141 |

**Book a call:** `Book a 30-minute call` · `Google Meet, via Calendly.` · Button: `Book a call` *(section 9 Q9)*

No phone number anywhere.

---

## 7. 404

Heading: `Page not found`
Body: `This page doesn't exist or has moved.`
Button: `Back to home`

---

## 8. Copy fixes covered

"an bachlor's student", "Lets work together!", "Summer 2024 internship", "Stay in Pune", "Studying at Symbiosis", "Tech Explorer & Innovation Enthusiast", "A short story of me…", "Looking forward to collaboration!", "Twitter" → "X", wrong email, wrong Meta Craftlab title and dates, wrong stack tags, "Swanand Wagh" alt text.

---

## 9. Questions for Sachin (one batch)

**Missing items**
1. **Sections and routes:** keep the 4 routes. Home = hero + featured projects + CTA. About = intro, experience, education, skills, achievements. OK, or do you want Experience as its own page?
2. **BMC Hackademia:** is `RAG_based_Doc_Conversational` the BMC project? If yes, is the draft one-liner right? What did *you* build (RAG pipeline, LLM validation, UI)? Is there a live link or a team repo?
3. **FOSS Hack 2025:** project name, link (repo / demo / FOSS Hack page), a one-line description, and what you personally built.
4. **Resume PDF:** link (or put the PDF in `public/` and I'll link it).

**Open from the audit**
5. **CTA:** are you open to opportunities (option 1 in section 3) or should it be a neutral "Get in touch" (option 2)?
6. **Bio:** OK to leave out Azure, Data Science and Data Visualization?
7. **Outside work:** keep the one-line version in About, or drop it?
8. **Hope:** OK to follow the resume (face + speech + text, Gemini, BLE smartwatch)? Should Raspberry Pi be mentioned as well?
9. **HSC:** what stream (Science?) and board? The old site said "Pune University", which looks wrong for HSC.
10. **LinkedIn:** is there a shorter vanity URL?
11. **Calendly:** is `calendly.com/sachinmhetre678` still active?
12. **`public/abc1.wav`, `public/conv2_abc1.wav`:** related to Hope? OK to delete?
13. **Vimo wording:** OK to say "healthcare insurance workflows" and "multiple state environments" publicly? (Both are on your resume. No state names, URLs or ticket IDs are used.)
14. **Headline:** A, B or C (section 3)?
