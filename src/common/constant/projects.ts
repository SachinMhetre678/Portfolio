import { Project, ProjectCategory } from '../types/projects';

const GITHUB = 'https://github.com/SachinMhetre678';

export const PROJECT_CATEGORIES: {
  id: ProjectCategory | 'all';
  label: string;
}[] = [
  { id: 'all', label: 'All' },
  { id: 'automation', label: 'Automation' },
  { id: 'full-stack', label: 'Full stack' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'data', label: 'Data' },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: 'regression-failure-management',
    title: 'Regression failure-management system',
    context: 'Vimo · work project',
    oneLiner:
      'Turns a night of failed regression tests into assigned, tracked Jira defects.',
    highlight: {
      label: 'Impact',
      text: 'Failure distribution went from 3-4 hours of manual work to 5-10 minutes, for 50-60 nightly failures across 9 owners.',
    },
    details: [
      'Pulls run results from the Jenkins and Allure APIs, on a schedule or on demand.',
      'Finds an owner for each failure in four steps: scenario-author mappings, Git history, keywords in the failed step, then feature-directory rules. Normalizes Git identities, and uses round-robin when nothing matches.',
      'Stores results per state environment in PostgreSQL and shows them on an internal dashboard: state-wise tracking, scenario history, Allure links, search and controlled owner reassignment.',
      'Creates Jira defects grouped by failure, by owner and state, or by owner, with a dry-run mode to check before filing.',
    ],
    tags: ['Java', 'PostgreSQL', 'Jenkins', 'Allure', 'Jira', 'Git'],
    links: [],
    note: 'Internal tool at Vimo, details shared on request.',
    categories: ['automation'],
  },
  {
    slug: 'scribly',
    title: 'Scribly',
    context: 'FOSS Hack 2025 winner · team project',
    oneLiner:
      'Chrome extension for timestamped notes, drawing and annotation, highlights and screenshots on YouTube videos, with a searchable dashboard and export/import.',
    highlight: {
      label: 'Result',
      text: 'Winner of FOSS Hack 2025, top project among 800+ submissions and 5,000+ participants (48-hour hackathon).',
    },
    team: 'Built with Onkar Mendhapurkar and Janmejay Pandya.',
    myPart:
      "I built the drawing and highlighting tools: a reworked drawing panel, a highlighter tool, canvas sizing fixes and Ctrl-based drawing controls. I also reviewed and merged teammates' pull requests.",
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'localStorage'],
    links: [
      { label: 'GitHub', href: `${GITHUB}/Scribly` },
      {
        label: 'Demo video',
        href: 'https://www.youtube.com/watch?v=KeMPmMdQH3w',
      },
    ],
    categories: ['full-stack'],
  },
  {
    slug: 'rag-document-qa',
    title: 'RAG document Q&A',
    context: 'BMC Hackademia top 3 finalist · 48-hour hackathon',
    oneLiner: 'Upload a PDF and ask questions about it.',
    details: [
      'Upload one or more PDFs. They are split into chunks, embedded with Hugging Face all-MiniLM-L6-v2 and indexed in FAISS.',
      'Questions are answered by an LLM through Groq, using only the uploaded documents. Unrelated questions get a “not related to the uploaded documents” reply instead of a guess.',
    ],
    myPart:
      'Built end to end: the Flask backend, the LangChain retrieval pipeline and the web UI.',
    tags: ['Python', 'Flask', 'LangChain', 'FAISS', 'Hugging Face', 'Groq'],
    links: [
      { label: 'GitHub', href: `${GITHUB}/RAG_based_Doc_Conversational` },
    ],
    categories: ['ai-ml'],
  },
  {
    slug: 'hotel-management-system',
    title: 'Hotel Management System',
    oneLiner:
      'Full-stack hotel booking platform with room search, bookings and an admin dashboard.',
    details: [
      'Room availability checks and date-range validation for bookings.',
      'Admin dashboard to add, edit and delete rooms and manage bookings.',
      'JWT authentication with Spring Security, room images stored in AWS S3.',
    ],
    tags: ['Spring Boot', 'React', 'MySQL', 'AWS S3'],
    links: [{ label: 'GitHub', href: `${GITHUB}/Hotel_Booking_Sytem` }],
    categories: ['full-stack'],
  },
  {
    slug: 'hope',
    title: 'Hope: emotionally intelligent robotic companion',
    context: 'Final-year project',
    oneLiner:
      'A Raspberry Pi companion robot that reads emotion from face, voice and text, and responds with empathy.',
    details: [
      'Multimodal emotion recognition with DeepFace (face), Wav2Vec2 (speech) and Transformers (text).',
      'Empathetic conversation through Gemini, with memory across sessions.',
      'Real-time vitals from a BLE smartwatch.',
    ],
    tags: [
      'Python',
      'Raspberry Pi',
      'DeepFace',
      'Wav2Vec2',
      'Transformers',
      'Gemini',
    ],
    links: [
      { label: 'GitHub', href: `${GITHUB}/Hope-Final-Year-Project` },
      { label: 'Live', href: 'https://hope-rpi.vercel.app/' },
    ],
    categories: ['ai-ml'],
  },
  {
    slug: 'personal-finance-management',
    title: 'Personal Finance Management System',
    oneLiner: 'Desktop app to track income, expenses and savings goals.',
    details: [
      'Normalized (3NF) MySQL schema with triggers, accessed over JDBC.',
      'Transactions, savings goals with monthly progress, and financial summaries.',
      'Swing dashboard with XChart charts of monthly income and spending.',
    ],
    tags: ['Java', 'MySQL', 'JDBC', 'Swing'],
    links: [{ label: 'GitHub', href: `${GITHUB}/Personal_Finance_Management` }],
    image: {
      src: '/images/projects/fintrack.png',
      alt: 'Personal Finance Management System dashboard with balance, income and expense totals and a transactions table',
      width: 862,
      height: 542,
    },
    categories: ['full-stack'],
  },
];

export const EARLIER_PROJECTS: Project[] = [
  {
    slug: 'claimwise',
    title: 'ClaimWise',
    oneLiner:
      'Flags likely fraudulent insurance claims with a decision tree classifier, plus K-Means anomaly detection and a React dashboard.',
    tags: ['Python', 'scikit-learn', 'React'],
    links: [
      { label: 'GitHub', href: `${GITHUB}/ClaimWise_DSBI_ML_Model` },
      { label: 'Live', href: 'https://claim-wise.vercel.app/' },
    ],
    categories: ['ai-ml'],
  },
  {
    slug: 'inventory-management-aws',
    title: 'Inventory Management on AWS',
    oneLiner:
      '3-tier inventory app deployed on AWS with Amplify, EC2, RDS and CloudWatch.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    links: [
      { label: 'GitHub', href: `${GITHUB}/InventoryManagement_AWS_3Tier` },
    ],
    categories: ['full-stack'],
  },
  {
    slug: 'codedrop',
    title: 'CodeDrop',
    oneLiner:
      'Paste and share code snippets that delete themselves after a set time.',
    tags: ['SvelteKit', 'MongoDB', 'Tailwind CSS'],
    links: [
      { label: 'GitHub', href: `${GITHUB}/CodeDrop` },
      // TODO(Sachin): confirm the demo still works (docs/TODO.md).
      { label: 'Live', href: 'https://codedrop.vercel.app/' },
    ],
    categories: ['full-stack'],
  },
  {
    slug: 'collabio',
    title: 'Collabio',
    oneLiner: 'Workspace app for shared documents and real-time collaboration.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Firebase'],
    links: [{ label: 'GitHub', href: `${GITHUB}/Collabio` }],
    categories: ['full-stack'],
  },
  {
    slug: 'medisync',
    title: 'MediSync',
    oneLiner:
      'Doctor appointment booking with an admin panel and AI doctor recommendations.',
    tags: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
    links: [
      { label: 'GitHub', href: `${GITHUB}/MediSync` },
      { label: 'Live', href: 'https://mediisync.vercel.app/' },
    ],
    categories: ['full-stack', 'ai-ml'],
  },
  {
    slug: 'heart-disease-prediction',
    title: 'Heart Disease Prediction',
    oneLiner:
      'Flask web app that predicts heart disease risk from patient data with a trained ML model.',
    tags: ['Python', 'Flask', 'SQLite'],
    links: [{ label: 'GitHub', href: `${GITHUB}/Heart_Disease_Prediction` }],
    categories: ['ai-ml'],
  },
  {
    slug: 'platesniper',
    title: 'PlateSniper',
    oneLiner:
      'Detects and extracts car license plates from images and video with YOLOv10.',
    tags: ['Python', 'YOLOv10'],
    links: [{ label: 'GitHub', href: `${GITHUB}/PlateSniper` }],
    categories: ['ai-ml'],
  },
  {
    slug: 'cricket-t20-analysis',
    title: 'Cricket T20 Analysis',
    oneLiner:
      'Picks a “best 11” from T20 World Cup 2022 data: scraping, cleaning, modeling and a Power BI dashboard.',
    tags: ['Python', 'Power BI'],
    links: [
      {
        label: 'GitHub',
        href: `${GITHUB}/Data-Analysis/tree/main/Cricket_t20_Analysis`,
      },
    ],
    categories: ['data'],
  },
  {
    slug: 'hotel-revenue-analysis',
    title: 'Hotel Revenue Analysis',
    oneLiner: 'Power BI revenue dashboard built with Power Query and DAX.',
    tags: ['Power BI'],
    links: [
      {
        label: 'GitHub',
        href: `${GITHUB}/Data-Analysis/tree/main/hotel_revenue`,
      },
    ],
    categories: ['data'],
  },
];
