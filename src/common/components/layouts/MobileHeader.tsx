import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PiList as MenuIcon, PiX as CloseIcon } from 'react-icons/pi';

import { SITE } from '@/common/constant/site';
import cn from '@/common/libs/cn';

import SidebarContent, { Avatar } from './SidebarContent';

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events, close]);

  useEffect(() => {
    if (!isOpen) return;

    const drawer = drawerRef.current;
    const menuButton = menuButtonRef.current;
    drawer?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        return;
      }
      if (event.key !== 'Tab' || !drawer) return;

      const items = Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      menuButton?.focus();
    };
  }, [isOpen, close]);

  return (
    <>
      <header className='sticky top-0 z-header flex h-[var(--header-height)] items-center justify-between border-b border-hairline bg-canvas px-4 lg:hidden'>
        <Link
          href='/'
          className='flex items-center gap-3 text-body-sm font-medium text-ink'
        >
          <Avatar size={32} />
          {SITE.name}
        </Link>
        <button
          ref={menuButtonRef}
          type='button'
          onClick={() => setIsOpen(true)}
          aria-label='Open menu'
          aria-expanded={isOpen}
          aria-controls='mobile-drawer'
          className='inline-flex h-11 w-11 items-center justify-center rounded-control text-ink-muted transition-colors duration-150 hover:bg-surface-2 hover:text-ink'
        >
          <MenuIcon size={22} aria-hidden />
        </button>
      </header>

      {/* Clipping wrapper keeps the off-canvas drawer from causing horizontal scroll. */}
      <div
        className={cn(
          'fixed inset-0 z-drawer overflow-hidden lg:hidden',
          !isOpen && 'pointer-events-none'
        )}
      >
        <div
          aria-hidden
          onClick={close}
          className={cn(
            'absolute inset-0 bg-canvas/70 transition-opacity duration-300 motion-reduce:transition-none',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
        />

        <div
          id='mobile-drawer'
          ref={drawerRef}
          role='dialog'
          aria-modal='true'
          aria-label='Menu'
          className={cn(
            'absolute inset-y-0 right-0 flex w-[min(320px,85vw)] flex-col overflow-y-auto overscroll-contain border-l border-hairline bg-surface-1 p-6 transition-[transform,visibility] duration-300 ease-out motion-reduce:transition-none',
            isOpen ? 'visible translate-x-0' : 'invisible translate-x-full'
          )}
        >
          <div className='mb-6 flex justify-end'>
            <button
              type='button'
              onClick={close}
              aria-label='Close menu'
              className='-mr-2 -mt-2 inline-flex h-11 w-11 items-center justify-center rounded-control text-ink-muted transition-colors duration-150 hover:bg-surface-2 hover:text-ink'
            >
              <CloseIcon size={22} aria-hidden />
            </button>
          </div>
          <SidebarContent onNavigate={close} />
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
