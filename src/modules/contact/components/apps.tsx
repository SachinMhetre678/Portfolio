import { ReactNode } from 'react';
import {
  PiCalendarBlank as CalendarIcon,
  PiEnvelopeSimple as MailIcon,
} from 'react-icons/pi';
import {
  SiGithub as GithubIcon,
  SiInstagram as InstagramIcon,
  SiLinkedin as LinkedinIcon,
  SiX as XIcon,
} from 'react-icons/si';

import { CALENDLY_URL, CONTACT_LINKS } from '@/common/constant/contact';

export type AppId =
  | 'mail'
  | 'calendar'
  | 'github'
  | 'linkedin'
  | 'x'
  | 'instagram';

export interface App {
  id: AppId; // becomes data-strobi="app-<id>"
  label: string;
  icon: ReactNode;
  href: string;
  external: boolean;
  handle: string; // shown on the app screen
  tone?: 'accent'; // icon drawn in the accent colour
  badge?: boolean; // decorative notification dot
}

const link = (label: string) => {
  const found = CONTACT_LINKS.find((item) => item.label === label);
  if (!found) throw new Error(`Missing contact link: ${label}`);
  return found;
};

const SIZE = 28;

// Home screen order. The phone's dock reuses Mail and Calendar.
export const APPS: App[] = [
  {
    id: 'mail',
    label: 'Mail',
    icon: <MailIcon size={SIZE} />,
    href: link('Email').href,
    external: false,
    handle: link('Email').value,
    tone: 'accent',
    badge: true,
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: <CalendarIcon size={SIZE} />,
    href: CALENDLY_URL,
    external: true,
    handle: 'Google Meet, via Calendly.',
    tone: 'accent',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <GithubIcon size={SIZE} />,
    href: link('GitHub').href,
    external: true,
    handle: link('GitHub').value,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <LinkedinIcon size={SIZE} />,
    href: link('LinkedIn').href,
    external: true,
    handle: link('LinkedIn').value,
  },
  {
    id: 'x',
    label: 'X',
    icon: <XIcon size={SIZE} />,
    href: link('X').href,
    external: true,
    handle: link('X').value,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: <InstagramIcon size={SIZE} />,
    href: link('Instagram').href,
    external: true,
    handle: link('Instagram').value,
  },
];

export const DOCK_IDS: AppId[] = ['mail', 'calendar'];

// The glossy block from the stack rack, with an app glyph inside.
export const AppBlock = ({ app }: { app: App }) => (
  <span
    aria-hidden='true'
    className={`rack-block relative ${
      app.tone === 'accent' ? 'text-accent' : 'text-ink'
    }`}
  >
    {app.icon}
    {app.badge && (
      <span className='absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[11px] font-semibold leading-none text-white'>
        1
      </span>
    )}
  </span>
);
