import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  PiHandWaving as WaveIcon,
  PiList as MenuIcon,
  PiX as CloseIcon,
} from 'react-icons/pi';

import { CONTACT_LINKS } from '@/common/constant/contact';
import cn from '@/common/libs/cn';

import Bubble from './Bubble';
import { MASCOT_DEFINITION_URL, MASCOT_TOUR_EVENT } from './constants';
import {
  getTourStep,
  isMinimized,
  setMinimized,
  setTourSeen,
  setTourStep,
  tourSeen,
} from './storage';
import { TOUR, View } from './tour';
import useAvoidOverlap from './useAvoidOverlap';
import useStrobiAvatar from './useStrobiAvatar';

const [EMAIL] = CONTACT_LINKS;
const STEP_MOOD_MS = 4000;
const TARGET_WAIT_MS = 5000;

const initialView = (): View => {
  const step = getTourStep();
  if (step !== null && step >= 0 && step < TOUR.length)
    return { t: 'step', i: step };
  return tourSeen() ? { t: 'none' } : { t: 'greeting' };
};

const Mascot = () => {
  const router = useRouter();
  const host = useRef<HTMLDivElement>(null);
  const shell = useRef<HTMLDivElement & HTMLButtonElement>(null);
  const [definition, setDefinition] = useState<unknown>(null);
  const [minimized, setMinimizedState] = useState(isMinimized);
  const [view, setView] = useState<View>(initialView);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(MASCOT_DEFINITION_URL, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then(setDefinition)
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  const viewRef = useRef(view);
  viewRef.current = view;

  // Click on Strobi: quick menu after the tour (or once the greeting is answered).
  const play = useStrobiAvatar(host, definition, !minimized, () => {
    const current = viewRef.current;
    if (current.t === 'none' || current.t === 'note') {
      setView({ t: 'menu' });
      play.current('laughing', 2200);
    } else if (current.t === 'menu') {
      setView({ t: 'none' });
    }
  });

  const closeView = useCallback(() => setView({ t: 'none' }), []);

  const endTour = useCallback(() => {
    setTourStep(null);
    setTourSeen();
    closeView();
  }, [closeView]);

  // Footer "Take the tour again".
  useEffect(() => {
    const restart = () => {
      setMinimizedState(false);
      setTourSeen();
      setView({ t: 'step', i: getTourStep() ?? 0 });
    };
    window.addEventListener(MASCOT_TOUR_EVENT, restart);
    return () => window.removeEventListener(MASCOT_TOUR_EVENT, restart);
  }, []);

  // Esc closes the bubble or menu (no focus trap, nothing else is blocked).
  useEffect(() => {
    if (view.t === 'none' || minimized) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (view.t === 'greeting' || view.t === 'step') {
        setTourStep(null);
        setTourSeen();
      }
      closeView();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [view.t, minimized, closeView]);

  // Note bubbles ("Email copied.") fade out on their own.
  useEffect(() => {
    if (view.t !== 'note') return;
    const timer = setTimeout(closeView, 2500);
    return () => clearTimeout(timer);
  }, [view, closeView]);

  // Each tour step: navigate if needed, play its mood, scroll to and ring the target.
  const stepIndex = view.t === 'step' ? view.i : -1;
  useEffect(() => {
    if (stepIndex < 0) return;
    const step = TOUR[stepIndex];
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (router.pathname !== step.path) router.push(step.path);
    play.current(step.mood, STEP_MOOD_MS);

    let ringed: Element | null = null;
    const started = Date.now();
    const find = setInterval(() => {
      const target = document.querySelector(`[data-tour="${step.target}"]`);
      if (target) {
        clearInterval(find);
        ringed = target;
        target.setAttribute('data-tour-active', '');
        target.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      } else if (Date.now() - started > TARGET_WAIT_MS) {
        clearInterval(find);
      }
    }, 100);

    return () => {
      clearInterval(find);
      ringed?.removeAttribute('data-tour-active');
    };
    // Only re-run when the step changes; manual navigation must not pull the visitor back.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex]);

  const goToStep = (i: number) => {
    setTourStep(i);
    setView({ t: 'step', i });
  };

  const onChip = (chip: 'projects' | 'about' | 'contact' | 'copy') => {
    if (chip === 'copy') {
      navigator.clipboard
        .writeText(EMAIL.value)
        .then(() => {
          play.current('celebrate', 3000);
          setView({ t: 'note', text: 'Email copied.' });
        })
        .catch(() =>
          setView({ t: 'note', text: 'Copy failed. Use the Contact page.' })
        );
      return;
    }
    closeView();
    router.push(`/${chip}`);
  };

  const minimize = () => {
    setMinimized(true);
    setMinimizedState(true);
  };
  const restore = () => {
    setMinimized(false);
    setMinimizedState(false);
  };

  const bubbleOpen = !minimized && view.t !== 'none';
  const overlaps = useAvoidOverlap(shell, !bubbleOpen);
  const away = overlaps && !focused && !bubbleOpen;

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
        right: 'max(1rem, env(safe-area-inset-right))',
        bottom: 'max(1rem, env(safe-area-inset-bottom))',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <section aria-label='Strobi' aria-live='polite'>
        {!minimized && (
          <Bubble
            view={view}
            onAccept={() => {
              setTourSeen();
              goToStep(0);
            }}
            onDecline={() => {
              setTourSeen();
              closeView();
            }}
            onNext={() => goToStep(stepIndex + 1)}
            onSkip={endTour}
            onSayHi={() => {
              endTour();
              window.location.href = EMAIL.href;
            }}
            onDone={endTour}
            onChip={onChip}
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
            onClick={() =>
              setView(view.t === 'menu' ? { t: 'none' } : { t: 'menu' })
            }
            aria-label='Open Strobi quick menu'
            aria-expanded={view.t === 'menu'}
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
