import { CareerProps } from '../types/careers';

export const CAREERS: CareerProps[] = [
  {
    position: 'Mobile App Developer',
    company: 'Ab-normal Home',
    logo: '/images/careers/ABNormal.jpeg',
    location: 'Kotharud, Pune 🇮🇳',
    location_type: 'Hybrid',
    type: 'Internship',
    start_date: '2024-06',
    end_date: '2024-11',
    industry: 'School',
    link: 'https://www.abnormalhome.org/',
    responsibilities: [
      'Developed a React Native mobile application for Abnormal Home, incorporating essential features such as a chat interface, notice board, and event calendar to enhance user engagement. Implemented OTP-based login for secure user access. Additionally, supported the academic growth of over 15 children by guiding them in assignments and skill-enhancing activities, significantly contributing to their cognitive and motor skill development. This role combined technical implementation with direct mentorship, enhancing the educational experience for young learners.',
    ],
  },
  {
    position: 'Web Developer Intern',
    company: 'Meta Craftlab',
    logo: '/images/careers/craftlab.jpeg',
    location: 'Pune, India 🇮🇳',
    location_type: 'Remote',
    type: 'Internship',
    start_date: '2023-07',
    end_date: '2023-08',
    industry: 'software',
    link: 'https://craftlab.ai/',
    responsibilities: [
      'Developed server-side logic to initialize database connections and manage interactions with an SQLite database',
      'Designed and implemented client-side rendering for paste creation forms, optimizing data fetching and handling redirects',
      'Enhanced the user interface with features such as syntax highlighting, PDF generation, and copy-to-clipboard functionality',
      'Integrated the Web Share API for seamless sharing of content across platforms',
      'Configured the Svelte project with Prisma to define the Snippet model and establish essential endpoints',
    ],
  },
];
