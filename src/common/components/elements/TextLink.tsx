import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { PiArrowUpRight as ExternalIcon } from 'react-icons/pi';

import cn from '@/common/libs/cn';

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  srLabel?: string;
}

const linkClassName =
  'inline-flex items-center gap-1 rounded-chip text-accent underline-offset-[3px] transition-colors duration-150 hover:text-accent-hover hover:underline';

const TextLink = ({
  href,
  children,
  srLabel,
  className,
  ...rest
}: TextLinkProps) => {
  const isExternal = /^(https?:|mailto:)/.test(href);
  const opensNewTab = /^https?:/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(linkClassName, className)}
        {...(opensNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
        {srLabel && <span className='sr-only'>{srLabel}</span>}
        {opensNewTab && (
          <>
            <ExternalIcon size={14} aria-hidden />
            <span className='sr-only'>(opens in new tab)</span>
          </>
        )}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(linkClassName, className)} {...rest}>
      {children}
      {srLabel && <span className='sr-only'>{srLabel}</span>}
    </Link>
  );
};

export default TextLink;
