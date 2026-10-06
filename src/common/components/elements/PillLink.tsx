import Link from 'next/link';
import { ReactNode } from 'react';

import cn from '@/common/libs/cn';

interface PillLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

// Pill-shaped link button used across the site (pill rule: all interactive elements are full-radius).
export const pillClassName = (
  variant: 'primary' | 'secondary' = 'primary',
  className?: string
) =>
  cn(
    'inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-body font-medium transition-[color,background-color,border-color,transform] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]',
    variant === 'primary'
      ? 'bg-accent text-on-accent hover:bg-accent-hover'
      : 'border border-hairline-strong bg-surface-1 text-ink hover:bg-surface-2',
    className
  );

export const PillLink = ({
  href,
  children,
  variant = 'primary',
  className,
}: PillLinkProps) => {
  if (/^https?:/.test(href)) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={pillClassName(variant, className)}
      >
        {children}
        <span className='sr-only'>(opens in new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={pillClassName(variant, className)}>
      {children}
    </Link>
  );
};
