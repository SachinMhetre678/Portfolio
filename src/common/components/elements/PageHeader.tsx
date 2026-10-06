import { ReactNode } from 'react';

import { geistItalic } from '@/common/fonts';
import cn from '@/common/libs/cn';
import { reveal, step } from '@/common/libs/motion';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  description?: string;
  aside?: ReactNode;
}

// Page header shared by About, Projects and Contact: pill badge + two-tone headline (bold, then italic muted).
const PageHeader = ({
  badge,
  title,
  subtitle,
  description,
  aside,
}: PageHeaderProps) => (
  <header className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12'>
    <div className='min-w-0 md:max-w-[44rem]'>
      <p
        className={cn(
          reveal,
          'inline-flex h-8 items-center rounded-full border border-hairline bg-surface-1 px-3.5 text-caption text-ink-muted'
        )}
        style={step(0)}
      >
        {badge}
      </p>
      <h1 className='mt-6 text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.045em] text-ink'>
        <span className={cn(reveal, 'block')} style={step(1)}>
          {title}
        </span>
        <span
          className={cn(
            reveal,
            geistItalic.className,
            'block pb-2 font-normal leading-[1.08] text-ink-subtle'
          )}
          style={step(2)}
        >
          {subtitle}
        </span>
      </h1>
      {description && (
        <p
          className={cn(reveal, 'mt-5 max-w-[46ch] text-body-lg text-ink-muted')}
          style={step(3)}
        >
          {description}
        </p>
      )}
    </div>
    {aside && (
      <div className={cn(reveal, 'order-first md:order-none')} style={step(2)}>
        {aside}
      </div>
    )}
  </header>
);

export default PageHeader;
