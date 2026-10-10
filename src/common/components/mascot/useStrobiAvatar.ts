import { createAvatar } from '@bible-strong/avatar-web';
import { RefObject, useEffect, useRef } from 'react';

import { MASCOT_CELEBRATE_EVENT } from './constants';
import type { Mood } from './strobiLines';

const DROWSY_AFTER_MS = 30_000;
const WAKING_MS = 2500;
const EXCITED_TAP_MS = 1800;

export type PlayMood = (mood: Mood, returnAfterMs?: number) => void;

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

// Owns the avatar and its automatic reactions. Returns a stable `play` for scripted moods.
const useStrobiAvatar = (
  host: RefObject<HTMLElement>,
  definition: unknown,
  active: boolean,
  onClick: () => void
) => {
  const playRef = useRef<PlayMood>(() => undefined);
  const clickRef = useRef(onClick);
  clickRef.current = onClick;

  useEffect(() => {
    const el = host.current;
    if (!el || !definition || !active) return;

    const handleClick = () => clickRef.current();
    el.addEventListener('click', handleClick);
    const quiet = () => undefined;

    // Reduced motion: a still neutral expression and no reactions.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const still = createAvatar(el, {
        definition,
        defaultExpression: 'neutral',
        size: '100%',
        onError: quiet,
      });
      return () => {
        el.removeEventListener('click', handleClick);
        still.destroy();
      };
    }

    const avatar = createAvatar(el, {
      definition,
      defaultAnimation: 'waking',
      size: '100%',
      onError: quiet,
    });

    let mood: Mood = 'waking';
    let held = false;
    let lastActivity = Date.now();
    let settle: ReturnType<typeof setTimeout> | undefined;

    const play: PlayMood = (next, returnAfterMs) => {
      clearTimeout(settle);
      mood = next;
      avatar.play(next);
      if (returnAfterMs) {
        settle = setTimeout(() => {
          if (!held) play('idle');
        }, returnAfterMs);
      }
    };
    playRef.current = (next, ms) => {
      held = false;
      play(next, ms);
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
      play('excited', EXCITED_TAP_MS);
    };
    const onCelebrate = () => {
      held = false;
      play('celebrate', 3000);
    };
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
      playRef.current = () => undefined;
      clearTimeout(settle);
      clearInterval(drowsyTimer);
      el.removeEventListener('click', handleClick);
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
  }, [host, definition, active]);

  return playRef;
};

export default useStrobiAvatar;
