import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import {
  PiHandWaving as WaveIcon,
  PiList as MenuIcon,
  PiX as CloseIcon,
} from 'react-icons/pi';

import { CONTACT_LINKS } from '@/common/constant/contact';
import cn from '@/common/libs/cn';

import Bubble, { Chip } from './Bubble';
import { MASCOT_DEFINITION_URL } from './constants';
import { isMinimized, isMuted, setMinimized, setMuted } from './storage';
import { LINES } from './strobiLines';
import useAvoidOverlap, { collides } from './useAvoidOverlap';
import useBubble, { BubbleGate } from './useBubble';
import useStrobiAvatar from './useStrobiAvatar';
import useStrobiVoice from './useStrobiVoice';

const [EMAIL] = CONTACT_LINKS;
const pickOne = (lines: string[]) =>
  lines[Math.floor(Math.random() * lines.length)];

const Mascot = () => {
  const router = useRouter();
  const host = useRef<HTMLDivElement>(null);
  const shell = useRef<HTMLDivElement & HTMLButtonElement>(null);
  const [definition, setDefinition] = useState<unknown>(null);
  const [minimized, setMinimizedState] = useState(isMinimized);
  const [muted, setMutedState] = useState(isMuted);
  const [menu, setMenu] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(MASCOT_DEFINITION_URL, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then(setDefinition)
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  // Phones: the bubble may only appear if Strobi is visible and the bubble (about 80px tall,
  // sitting above Strobi) would not cover the nav, the menu or a button.
  const awayRef = useRef(false);
  const gate = useRef<BubbleGate>({
    muted,
    menuOpen: false,
    minimized,
    canShow: () => true,
  });
  gate.current = {
    muted,
    menuOpen: menu !== null,
    minimized,
    canShow: () => {
      const el = shell.current;
      if (!window.matchMedia('(max-width: 767px)').matches) {
        // Desktop: only the Contact phone is protected. Skip lines that would land on it.
        const frame = document.querySelector('.phone-frame');
        if (!el || !frame) return true;
        const box = el.getBoundingClientRect();
        const r = frame.getBoundingClientRect();
        const bottom = box.top - 12;
        return !(
          r.right > box.right - 320 - 8 &&
          r.left < box.right + 8 &&
          r.bottom > bottom - 100 - 8 &&
          r.top < bottom + 8
        );
      }
      if (!el || awayRef.current) return false;
      const box = el.getBoundingClientRect();
      const bottom = box.top - 12;
      return !collides(
        {
          left: box.right - Math.min(320, window.innerWidth - 32),
          right: box.right,
          top: bottom - 80,
          bottom,
        },
        el
      );
    },
  };

  const clickRef = useRef<() => void>(() => undefined);
  const play = useStrobiAvatar(host, definition, !minimized, () =>
    clickRef.current()
  );
  const { text, say, hide } = useBubble(play, gate);
  const { registerClick } = useStrobiVoice(
    say,
    play,
    !!definition && !minimized
  );

  const openMenu = () => {
    hide();
    setMenu(pickOne(LINES.menu));
    play.current('laughing', 2200);
  };
  const toggleMenu = () => (menu === null ? openMenu() : setMenu(null));

  // Click on Strobi: five quick clicks are an easter egg, otherwise the quick menu.
  clickRef.current = () => {
    if (registerClick()) setMenu(null);
    else toggleMenu();
  };

  // Esc dismisses the bubble or menu (no focus trap, nothing else is blocked).
  const open = text !== null || menu !== null;
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      hide();
      setMenu(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, hide]);

  const onChip = (chip: Chip) => {
    setMenu(null);
    if (chip === 'copy') {
      navigator.clipboard
        .writeText(EMAIL.value)
        .then(() => {
          play.current('celebrate', 3000);
          say(LINES.copy, { force: true });
        })
        .catch(() => undefined);
      return;
    }
    router.push(`/${chip}`);
  };

  // "Shh" turns every automatic bubble off for good; hover and click reactions keep working.
  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
    setMenu(null);
    say(next ? LINES.muted : LINES.unmuted, { force: true });
  };

  const minimize = () => {
    hide();
    setMenu(null);
    setMinimized(true);
    setMinimizedState(true);
  };
  const restore = () => {
    setMinimized(false);
    setMinimizedState(false);
  };

  const overlaps = useAvoidOverlap(shell, !open);
  const away = overlaps && !focused && !open;
  awayRef.current = away;

  if (!definition) return null;
  const colors = (definition as { colors?: { body?: string; eyes?: string } })
    .colors;

  const shellClass = cn(
    'pointer-events-auto motion-safe:transition-opacity motion-safe:duration-200',
    away && 'pointer-events-none opacity-0'
  );

  return (
    <div
      className='pointer-events-none fixed z-40'
      style={{
        right: 'calc(1rem + env(safe-area-inset-right))',
        bottom: 'calc(1rem + env(safe-area-inset-bottom))',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <section aria-label='Strobi' aria-live='polite'>
        {!minimized && (
          <Bubble
            text={text}
            menu={menu}
            muted={muted}
            onChip={onChip}
            onToggleMute={toggleMute}
          />
        )}
      </section>

      {minimized ? (
        <button
          ref={shell}
          type='button'
          onClick={restore}
          aria-label='Show Strobi'
          className={cn(
            shellClass,
            'inline-flex h-12 w-12 items-center justify-center rounded-full border border-hairline-strong bg-accent text-on-accent shadow-lg'
          )}
          style={
            colors?.body
              ? { backgroundColor: colors.body, color: colors.eyes }
              : undefined
          }
        >
          <WaveIcon size={24} aria-hidden />
        </button>
      ) : (
        <div
          ref={shell}
          className={cn(shellClass, 'group relative h-16 w-16 md:h-24 md:w-24')}
        >
          <div
            ref={host}
            data-strobi='self'
            aria-hidden='true'
            className='h-full w-full cursor-pointer'
          />
          <button
            type='button'
            onClick={minimize}
            aria-label='Minimize Strobi'
            className='absolute -left-2 -top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-hairline-strong bg-surface-1 text-ink-muted transition-colors duration-150 hover:bg-surface-2 hover:text-ink'
          >
            <CloseIcon size={14} aria-hidden />
          </button>
          {/* Keyboard route to the quick menu (the mascot itself is decorative). */}
          <button
            type='button'
            onClick={toggleMenu}
            aria-label='Open Strobi quick menu'
            aria-expanded={menu !== null}
            className='absolute -left-2 bottom-0 inline-flex h-7 w-7 items-center justify-center rounded-full border border-hairline-strong bg-surface-1 text-ink-muted opacity-0 transition-opacity duration-150 focus-visible:opacity-100 group-hover:opacity-100'
          >
            <MenuIcon size={14} aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
};

export default Mascot;
