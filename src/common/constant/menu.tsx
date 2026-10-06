import {
  PiEnvelopeSimple as ContactNavIcon,
  PiFolderSimple as ProjectsIcon,
  PiHouse as HomeIcon,
  PiUser as AboutIcon,
} from 'react-icons/pi';

import { NavItem } from '../types/menu';

const navIconSize = 18;

export const MENU_ITEMS: NavItem[] = [
  { title: 'Home', href: '/', icon: <HomeIcon size={navIconSize} /> },
  { title: 'About', href: '/about', icon: <AboutIcon size={navIconSize} /> },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectsIcon size={navIconSize} />,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactNavIcon size={navIconSize} />,
  },
];
