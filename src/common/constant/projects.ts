import { ProjectsProps, ProjectItemProps } from '../types/projects';

// src/common/constant/projects.ts
export const PROJECTSLIST: ProjectsProps = {
  projects: [
    {
      title: 'Codedrop - Code Sharing Platform',
      slug: 'codedrop',
      description:
        'CodeDrop allows you to easily paste and share code snippets with others. Set expiration times for automatic deletion and ensure secure, temporary sharing. Perfect for quick collaborations and ephemeral exchanges.',
      image: '/images/projects/codedrop.png',
      link_demo: 'https://codedrop.vercel.app/',
      link_github: 'https://github.com/SachinMhetre678/CodeDrop',
      stacks: ['Svelte', 'JavaScript', 'MongoDB', 'TailwindCss'],
      category: 'Web Development', // Added category
      content: '',
      is_show: true,
      is_featured: true,
      updated_at: new Date(),
    },
    {
      title: 'Colabio - Revolutionizing Team Collaboration',
      slug: 'collabio',
      description:
        'Collabio is a collaborative workspace management app that boosts productivity with seamless document handling, real-time collaboration, and an intuitive design, tailored for both teams and individual users.',
      image: '/images/projects/colabio.png',
      link_demo: 'https://colabio.vercel.app/',
      link_github: 'https://github.com/SachinMhetre678/Collabio',
      stacks: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase'],
      category: 'Web Development', // Added category
      content: '',
      is_show: true,
      is_featured: true,
      updated_at: new Date(),
    },
    {
      title: 'MediSync - Doctor Appointment Booking System',
      slug: 'medisync',
      description:
        'MediSync is a web app that simplifies doctor appointments and healthcare management, improving communication between patients and providers. It integrates Gen AI for doctor recommendations and prescription data extraction.',
      image: '/images/projects/medisync.jpg',
      link_demo: 'https://mediisync.vercel.app/',
      link_github: 'https://github.com/SachinMhetre678/MediSync',
      stacks: ['React.js', 'MongoDB', 'Node.js', 'OpenAI', 'Figma', 'Redux', 'JavaScript'],
      category: 'Web Development', // Added category
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'Heart Disease Prediction System',
      slug: 'heart-disease-prediction-system',
      description:
        'This project leverages machine learning techniques to detect heart disease early by analyzing a comprehensive dataset of risk factors. By identifying high-risk individuals, it enables timely medical intervention, aiming to improve health outcomes.',
      image: '/images/projects/heart.jpeg',
      link_demo: '#',
      link_github: 'https://github.com/SachinMhetre678/Heart_Disease_Prediction',
      stacks: ['React.js', 'JavaScript', 'Python', 'CSS', 'HTML5', 'Flask', 'SQLite', 'Natural Language Processing'],
      category: 'Machine Learning', // Added category
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'PlateSniper',
      slug: 'platesniper',
      description:
        'PlateSniper is an advanced object detection project using YOLOv10 to identify and extract car license plates from images and videos in real-time, offering high precision for traffic monitoring and automated vehicle identification.',
      image: '/images/projects/platesniper.gif',
      link_demo: '#',
      link_github: 'https://github.com/SachinMhetre678/PlateSniper',
      stacks: ['React.js', 'JavaScript', 'CSS', 'HTML5', 'Natural Language Processing'],
      category: 'Machine Learning', // Added category
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'FinTrack',
      slug: 'fintrack',
      description:
        'The Personal Finance Management System, built with Java Swing and MySQL, allows users to track transactions, monitor financial habits, and visualize monthly data through charts.',
      image: '/images/projects/fintrack.png',
      link_demo: '#',
      link_github: 'https://github.com/SachinMhetre678/Personal_Finance_Management',
      stacks: ['Java', 'MySQL', 'HTML5'],
      category: 'Web Development', // Added category
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'Cricket T20 Analysis',
      slug: 'cricket-t20',
      description:
        'This project analyzes Cricket T20 World Cup 2022 data to build an ideal "Best 11" team. It covers data scraping, cleaning, modeling, and visualization using Python, Power Query, and Power BI.',
      image: '/images/projects/crickett20.png',
      link_demo: '#',
      link_github: 'https://github.com/SachinMhetre678/Data-Analysis/tree/main/Cricket_t20_Analysis',
      stacks: ['PowerBI'],
      category: 'Data Analysis', // Added category
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
    {
      title: 'Hotel Revenue Analysis',
      slug: 'hotel-revenue',
      description:
        'This project involves transforming data with Power Query, building metrics using DAX, and creating a dashboard that aligns with business goals.',
      image: '/images/projects/hotel.png',
      link_demo: '#',
      link_github: 'https://github.com/SachinMhetre678/Data-Analysis/tree/main/hotel_revenue',
      stacks: ['PowerBI'],
      category: 'Data Analysis', // Added category
      content: '',
      is_show: true,
      is_featured: false,
      updated_at: new Date(),
    },
  ],
};
