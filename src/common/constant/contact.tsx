import { PiEnvelopeSimple as EmailIcon } from 'react-icons/pi';
import {
  SiGithub as GithubIcon,
  SiInstagram as InstagramIcon,
  SiLinkedin as LinkedinIcon,
  SiX as XIcon,
} from 'react-icons/si';

const iconSize = 18;

export const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'sachinmhetre456@gmail.com',
    href: 'mailto:sachinmhetre456@gmail.com',
    icon: <EmailIcon size={iconSize} />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sachin-mhetre-382039233',
    href: 'https://www.linkedin.com/in/sachin-mhetre-382039233/',
    icon: <LinkedinIcon size={iconSize} />,
  },
  {
    label: 'GitHub',
    value: 'SachinMhetre678',
    href: 'https://github.com/SachinMhetre678',
    icon: <GithubIcon size={iconSize} />,
  },
  {
    label: 'X',
    value: '@Sachin_Mhetre_',
    href: 'https://x.com/Sachin_Mhetre_',
    icon: <XIcon size={iconSize} />,
  },
  {
    label: 'Instagram',
    value: '@_sachin_4141',
    href: 'https://www.instagram.com/_sachin_4141/',
    icon: <InstagramIcon size={iconSize} />,
  },
];

export const CALENDLY_URL = 'https://calendly.com/sachinmhetre678';
