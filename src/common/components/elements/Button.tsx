import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { PiArrowUpRight as ExternalIcon } from 'react-icons/pi';

import cn from '@/common/libs/cn';

type Variant = 'primary' | 'secondary';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-accent text-on-accent hover:bg-accent-hover',
  secondary:
    'border border-hairline bg-surface-1 text-ink hover:border-hairline-strong hover:bg-surface-2',
};

export const buttonClassName = (
  variant: Variant = 'primary',
  className?: string
) =>
  cn(
    'inline-flex min-h-[40px] items-center justify-center gap-2 rounded-control px-[14px] py-2 text-body-sm font-medium transition-[color,background-color,border-color,transform] duration-150 motion-safe:active:scale-[0.98] pointer-coarse:min-h-[44px]',
    VARIANTS[variant],
    className
  );

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
}

const Button = ({
  variant,
  icon,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button type={type} className={buttonClassName(variant, className)} {...rest}>
    {icon}
    {children}
  </button>
);

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  icon?: ReactNode;
}

export const ButtonLink = ({
  href,
  variant,
  icon,
  className,
  children,
  ...rest
}: ButtonLinkProps) => {
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonClassName(variant, className)}
        {...rest}
      >
        {icon}
        {children}
        <ExternalIcon size={14} aria-hidden />
        <span className='sr-only'>(opens in new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClassName(variant, className)} {...rest}>
      {icon}
      {children}
    </Link>
  );
};

export default Button;
