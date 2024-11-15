import { 
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPwa,
  SiReact,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiMysql,
  SiMongodb,
  SiLinux,
  SiPython,
  SiOpenai,
  SiFlask,
  SiFigma,
  SiSpring,
  SiWordpress,
  SiDocker,
  SiSvelte,
  SiVercel, 
  SiExpress,
  SiSqlite,
  SiTensorflow, 
  SiGoogle, 
  SiMinds,
  SiHtml5,
  SiPowerbi,
} from 'react-icons/si';

import { 
  FaJava,
  FaReact,
} from 'react-icons/fa';

import { 
  BsFillBootstrapFill,
} from 'react-icons/bs';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  HTML5: <SiHtml5 size={iconSize} className='text-orange-500' />,
  OpenAI: <SiOpenai size={iconSize} className='text-black-600' />,
  Spring: <SiSpring size={iconSize} className='text-green-600' />,
  Java: <FaJava size={iconSize} className='text-red-600' />,
  MySQL: <SiMysql size={iconSize} className='text-blue-500' />,
  Python: <SiPython size={iconSize} className='text-yellow-400' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
  Docker: <SiDocker size={iconSize} className='text-blue-400' />,
  Linux: <SiLinux size={iconSize} className='text-white-400' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-300' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-600' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-teal-500' />,
  Bootstrap: <BsFillBootstrapFill size={iconSize} className='text-indigo-500' />,
  WordPress: <SiWordpress size={iconSize} />,
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-400' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-400' />,
  Redux: <SiRedux size={iconSize} className='text-purple-600' />,
  'Styled Components': <SiStyledcomponents size={iconSize} className='text-pink-500' />,
  CSS: <SiCss3 size={iconSize} className='text-indigo-500' />,
  Flask: <SiFlask size={iconSize} className='text-green-600' />,
  Figma: <SiFigma size={iconSize} className='text-pink-500' />,
  Svelte: <SiSvelte size={iconSize} className='text-orange-500' />,    
  Vercel: <SiVercel size={iconSize} className='text-black-600' />,  
  'React Native': <FaReact size={iconSize} className='text-sky-500' />,
  SQLite: <SiSqlite size={iconSize} className='text-green-500' />,
  'Machine Learning': <SiTensorflow size={iconSize} className='text-orange-600' />,
  'Artificial Intelligence': <SiTensorflow size={iconSize} className='text-orange-600'/>,
  'Natural Language Processing': <SiTensorflow size={iconSize} className='text-orange-600'/>,
  PowerBI: <SiPowerbi size={iconSize} className='text-yellow-500' />,
};
