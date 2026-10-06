import Image from 'next/image';
import Link from 'next/link';

import ThemeToggle from '@/common/components/elements/ThemeToggle';
import { SITE } from '@/common/constant/site';

import Navigation from './Navigation';

interface SidebarContentProps {
  onNavigate?: () => void;
  isPrimary?: boolean;
}

export const Copyright = () => (
  <p className='text-caption text-ink-subtle'>
    © {new Date().getFullYear()} with{' '}
    <span role='img' aria-label='love'>
      ❤
    </span>{' '}
    by Sachin
  </p>
);

export const Avatar = ({
  size,
  priority,
}: {
  size: number;
  priority?: boolean;
}) => (
  <Image
    src={SITE.avatar}
    alt={SITE.name}
    width={size}
    height={size}
    priority={priority}
    sizes={`${size}px`}
    className='rounded-card border border-hairline object-cover'
    style={{ width: size, height: size }}
  />
);

const SidebarContent = ({
  onNavigate,
  isPrimary = false,
}: SidebarContentProps) => (
  <div className='flex h-full flex-col gap-8'>
    <div className='space-y-4'>
      <Avatar size={64} priority={isPrimary} />
      <div className='space-y-1'>
        <Link
          href='/'
          onClick={onNavigate}
          className='text-h3 text-ink transition-colors duration-150 hover:text-accent'
        >
          {SITE.name}
        </Link>
        <p className='text-body-sm text-ink-subtle'>{SITE.status}</p>
      </div>
    </div>

    <Navigation onNavigate={onNavigate} />

    <div className='mt-auto flex items-center justify-between gap-4 border-t border-hairline pt-6'>
      <Copyright />
      <ThemeToggle />
    </div>
  </div>
);

export default SidebarContent;
