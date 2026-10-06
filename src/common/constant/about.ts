export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export const INTRO = [
  'I’m Sachin, from Pune. I studied Computer Science and Engineering at Symbiosis Institute of Technology (2022 - 2026), and I like building test automation and the tools around it. Outside QA I’ve built full-stack web apps and machine learning projects, and my team won FOSS Hack 2025.',
  'At work I’m a QA automation engineer at Vimo. I write end-to-end UI tests in Playwright and Cucumber, and I build the Java tooling that keeps a large regression suite manageable: failure analysis, ownership routing, reporting and Jira integration.',
];

export const OUTSIDE_WORK =
  'Outside work: I captained my Kho-Kho team in junior college, play the tabla, and play a few sports and esports.';

export const EXPERIENCE: Experience[] = [
  {
    role: 'Associate Automation Engineer',
    company: 'Vimo',
    period: 'Jan 2026 - Present',
    location: 'Pune',
    bullets: [
      'Built a regression failure-management system in Java, PostgreSQL, Jenkins and Jira for a 360-scenario Playwright/Cucumber suite. It handles 50-60 nightly failures across multiple state environments and routes them to 9 test owners.',
      'Cut manual failure distribution from 3-4 hours to 5-10 minutes.',
      'Write end-to-end UI tests with Playwright, JavaScript, Cucumber BDD and the Page Object Model for healthcare insurance workflows.',
      'Stabilized Jenkins regression runs using Allure reports, logs and database records, with more robust selectors, synchronization and reusable components.',
    ],
  },
  {
    role: 'Mobile App Developer Intern',
    company: 'Ab-normal Home',
    period: 'Jun 2024 - Nov 2024',
    location: 'Kothrud, Pune (hybrid)',
    bullets: [
      'Built a React Native app with chat, a notice board and an event calendar.',
      'Added OTP authentication.',
      'Mentored 15+ children.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Meta Craftlab Pvt Ltd',
    period: 'Jun 2023 - Jul 2023',
    location: 'Remote',
    bullets: [
      'Built an online polling platform with SvelteKit and MongoDB, including automated poll lifecycle management.',
      'Wrote 5+ REST APIs for poll creation, responses and results.',
    ],
  },
];

export const EDUCATION = {
  school: 'Symbiosis Institute of Technology, Pune',
  degree: 'B.Tech, Computer Science and Engineering',
  period: 'Sept 2022 - May 2026',
  grade: 'CGPA 8+/10',
  // TODO(Sachin): add HSC stream and board once confirmed (docs/TODO.md).
  hsc: 'HSC · Arihant College, Pune · 2020 - 2022',
};

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++'],
  },
  {
    group: 'Automation & testing',
    items: [
      'Playwright',
      'Cucumber BDD',
      'Selenium',
      'JUnit',
      'Allure',
      'Claude Code',
    ],
  },
  {
    group: 'Backend & APIs',
    items: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs'],
  },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'SvelteKit', 'Tailwind CSS'],
  },
  {
    group: 'DevOps & tools',
    items: [
      'Jenkins',
      'Git',
      'Docker',
      'GitHub Actions',
      'Jira',
      'Postman',
      'AWS',
    ],
  },
  {
    group: 'Core',
    items: ['OOP', 'DSA', 'DBMS', 'Computer Networks', 'Cloud Computing'],
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Winner, FOSS Hack 2025 (team)',
    text: 'Scribly was the top project among 800+ submissions and 5,000+ participants in a 48-hour hackathon.',
    event: 'FOSS Hack 2025',
    href: '/projects#scribly',
    linkLabel: 'See Scribly',
  },
  {
    title: 'Top 3 finalist, BMC Hackademia',
    text: 'A RAG QnA bot for PDFs, built in a 48-hour hackathon.',
    event: 'BMC Hackademia',
    href: '/projects#rag-document-qa',
    linkLabel: 'See the RAG project',
  },
];
