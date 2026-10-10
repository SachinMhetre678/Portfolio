import type { AvatarController } from '@bible-strong/avatar-web';
import { createAvatar } from '@bible-strong/avatar-web';
import { useEffect, useRef, useState } from 'react';
import { PiX as CloseIcon } from 'react-icons/pi';

import {
  MASCOT_CELEBRATE_EVENT,
  MASCOT_DEFINITION_URL,
  MASCOT_DISMISSED_KEY,
} from './constants';

const DROWSY_AFTER_MS = 30_000;
const WAKING_MS = 2500;
const LAUGHING_MS = 2200;
const CELEBRATE_MS = 3000;

// Only animation names that exist in public/strobi.avatar.json.
type Mood = 'waking' | 'idle' | 'excited' | 'celebrate' | 'laughing' | 'drowsy';

const EXCITED_SELECTOR = '[data-mascot="excited"], a[href="/contact"]';

// Hover/focus targets: the "Get in touch" links and the email card.
const isExcitedTarget = (target: EventTarget | null) => {
  const el = (target as Element | null)?.closest?.(EXCITED_SELECTOR);
  if (!el) return false;
  return (
    el.hasAttribute('data-mascot') ||
    el.textContent?.trim().startsWith('Get in touch') === true
  );
};

const Mascot = () => {
  const host = useRef<HTMLDivElement>(null);
  const [dismissed, setDismissed] = useState(false);
  const [definition, setDefinition] = useState<unknown>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(MASCOT_DEFINITION_URL, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then(setDefinition)
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const el = host.current;
    if (!el || !definition || dismissed) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const quiet = () => undefined;

    // Reduced motion: a still neutral expression and no reactions.
    if (reduceMotion) {
      const still = createAvatar(el, {
        definition,
        defaultExpression: 'neutral',
        size: '100%',
        onError: quiet,
      });
      return () => still.destroy();
    }

    const avatar: AvatarController = createAvatar(el, {
      definition,
      defaultAnimation: 'waking',
      size: '100%',
      onError: quiet,
    });

    let mood: Mood = 'waking';
    let held = false;
    let lastActivity = Date.now();
    let settle: ReturnType<typeof setTimeout> | undefined;

    const play = (next: Mood, returnAfterMs?: number) => {
      clearTimeout(settle);
      mood = next;
      avatar.play(next);
      if (returnAfterMs) {
        settle = setTimeout(() => {
          if (!held) play('idle');
        }, returnAfterMs);
      }
    };

    settle = setTimeout(() => play('idle'), WAKING_MS);

    const onEnter = (event: Event) => {
      if (!isExcitedTarget(event.target) || mood === 'celebrate') return;
      held = true;
      play('excited');
    };
    const onLeave = (event: Event) => {
      if (!isExcitedTarget(event.target) || !held) return;
      held = false;
      if (mood === 'excited') play('idle');
    };
    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') onEnter(event);
    };
    const onPointerOut = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') onLeave(event);
    };
    // Touch: a tap stands in for hover.
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'touch' || !isExcitedTarget(event.target))
        return;
      held = false;
      play('excited', 1800);
    };
    const onCelebrate = () => {
      held = false;
      play('celebrate', CELEBRATE_MS);
    };

    const onClick = () => {
      held = false;
      play('laughing', LAUGHING_MS);
    };
    el.addEventListener('click', onClick);

    const onActivity = () => {
      lastActivity = Date.now();
      if (mood === 'drowsy') play('waking', WAKING_MS);
    };
    const drowsyTimer = setInterval(() => {
      if (
        mood === 'idle' &&
        !held &&
        Date.now() - lastActivity >= DROWSY_AFTER_MS
      ) {
        play('drowsy');
      }
    }, 1000);

    const passive = { passive: true } as const;
    const activityEvents = [
      'mousemove',
      'scroll',
      'keydown',
      'pointerdown',
      'touchstart',
    ] as const;
    document.addEventListener('pointerover', onPointerOver, passive);
    document.addEventListener('pointerout', onPointerOut, passive);
    document.addEventListener('pointerdown', onPointerDown, passive);
    document.addEventListener('focusin', onEnter);
    document.addEventListener('focusout', onLeave);
    window.addEventListener(MASCOT_CELEBRATE_EVENT, onCelebrate);
    activityEvents.forEach((name) =>
      window.addEventListener(name, onActivity, passive)
    );

    return () => {
      clearTimeout(settle);
      clearInterval(drowsyTimer);
      el.removeEventListener('click', onClick);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('focusin', onEnter);
      document.removeEventListener('focusout', onLeave);
      window.removeEventListener(MASCOT_CELEBRATE_EVENT, onCelebrate);
      activityEvents.forEach((name) =>
        window.removeEventListener(name, onActivity)
      );
      avatar.destroy();
    };
  }, [definition, dismissed]);

  if (dismissed || !definition) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(MASCOT_DISMISSED_KEY, '1');
    } catch {
      // Ignore: the choice just won't persist.
    }
    setDismissed(true);
  };

  return (
    <div
      className='pointer-events-none fixed z-40 h-16 w-16 md:h-24 md:w-24'
      style={{
        right: 'max(1rem, env(safe-area-inset-right))',
        bottom: 'max(1rem, env(safe-area-inset-bottom))',
      }}
    >
      <div
        ref={host}
        aria-hidden='true'
        className='pointer-events-auto h-full w-full cursor-pointer'
      />
      <button
        type='button'
        onClick={dismiss}
        aria-label='Hide mascot'
        className='pointer-events-auto absolute -left-2 -top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-hairline-strong bg-surface-1 text-ink-muted transition-colors duration-150 hover:bg-surface-2 hover:text-ink'
      >
        <CloseIcon size={14} aria-hidden />
      </button>
    </div>
  );
};

export default Mascot;
