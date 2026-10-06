import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PiList as MenuIcon, PiX as CloseIcon } from 'react-icons/pi';

import Image from '@/common/components/elements/Image';
import ThemeToggle from '@/common/components/elements/ThemeToggle';
import { MENU_ITEMS } from '@/common/constant/menu';
import cn from '@/common/libs/cn';

const pillLink =
  'inline-flex h-9 items-center rounded-full px-3.5 text-body-sm transition-colors duration-150';

// Floating pill nav used on the home page instead of the sidebar.
const HomeNav = () => {
  const { pathname, events } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    events.on('routeChangeStart', close);
    return () => events.off('routeChangeStart', close);
  }, [events, close]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  return (
    <header className='fixed inset-x-0 top-4 z-header px-4'>
      <nav
        aria-label='Main'
        className='mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 rounded-full border border-hairline bg-surface-1/80 pl-2 pr-2 backdrop-blur-md md:pl-2'
      >
        <Link
          href='/'
          className='inline-flex h-10 items-center gap-2.5 rounded-full pl-1 pr-3 text-body-sm font-medium text-ink'
        >
          <Image
            src='/images/sachin.jpg'
            alt=''
            width={36}
            height={36}
            className='h-9 w-9 rounded-full object-cover object-top'
          />
          Sachin Mhetre
        </Link>

        <ul className='hidden items-center gap-1 md:flex'>
          {MENU_ITEMS.map(({ title, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    pillLink,
                    isActive
                      ? 'bg-surface-2 text-ink'
                      : 'text-ink-subtle hover:text-ink'
                  )}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center gap-1.5'>
          <ThemeToggle className='h-10 w-10 rounded-full border-transparent bg-transparent' />
          <Link
            href='/contact'
            className='hidden h-10 items-center rounded-full bg-accent px-4 text-body-sm font-medium text-on-accent transition-[background-color,transform] duration-150 hover:bg-accent-hover motion-safe:active:scale-[0.98] md:inline-flex'
          >
            Get in touch
          </Link>
          <button
            ref={buttonRef}
            type='button'
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls='home-menu'
            className='inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors duration-150 hover:bg-surface-2 hover:text-ink md:hidden'
          >
            {isOpen ? (
              <CloseIcon size={20} aria-hidden />
            ) : (
              <MenuIcon size={20} aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <div
        id='home-menu'
        hidden={!isOpen}
        className='mx-auto mt-2 max-w-5xl rounded-[28px] border border-hairline bg-surface-1 p-2 md:hidden'
      >
        <ul>
          {MENU_ITEMS.map(({ title, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={close}
                aria-current={pathname === href ? 'page' : undefined}
                className={cn(
                  'flex h-12 items-center rounded-full px-4 text-body',
                  pathname === href
                    ? 'bg-surface-2 text-ink'
                    : 'text-ink-muted hover:text-ink'
                )}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href='/contact'
          onClick={close}
          className='mt-2 flex h-12 items-center justify-center rounded-full bg-accent text-body font-medium text-on-accent'
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
};

export default HomeNav;
