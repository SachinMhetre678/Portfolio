import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import type { Line } from './strobiLines';
import type { PlayMood } from './useStrobiAvatar';

const HIDE_MS = 4000;
const COOLDOWN_MS = 6000; // between automatic bubbles
const MOOD_MS = 3500;

export interface BubbleGate {
  muted: boolean;
  menuOpen: boolean;
  minimized: boolean;
  /** Phones: false while Strobi is hidden or the bubble would cover the nav, menu or a button. */
  canShow: () => boolean;
}

export interface SayOptions {
  /** Automatic bubble: respects mute, reduced motion, cooldown, typing and never interrupts. */
  auto?: boolean;
  /** Skip the quick-menu and phone-layout checks (easter eggs, mute confirmations). */
  force?: boolean;
}

export type Say = (lines: Line[], options?: SayOptions) => boolean;

const isTyping = () => {
  const el = document.activeElement as HTMLElement | null;
  return (
    !!el &&
    (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable)
  );
};
const modalOpen = () =>
  !!document.querySelector('dialog[open], [aria-modal="true"]');

// One bubble at a time. Hover and click bubbles can interrupt; automatic ones cannot.
const useBubble = (play: RefObject<PlayMood>, gate: RefObject<BubbleGate>) => {
  const [text, setText] = useState<string | null>(null);
  const visible = useRef(false);
  const lastText = useRef<string | null>(null);
  const lastAuto = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const hide = useCallback(() => {
    clearTimeout(timer.current);
    visible.current = false;
    setText(null);
  }, []);

  const say: Say = useCallback(
    (lines, { auto = false, force = false } = {}) => {
      const g = gate.current;
      if (!g || g.minimized || modalOpen()) return false;
      if (!force && (g.menuOpen || !g.canShow())) return false;
      if (auto) {
        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;
        if (g.muted || reduceMotion || isTyping()) return false;
        if (visible.current || Date.now() - lastAuto.current < COOLDOWN_MS)
          return false;
      }

      const fresh = lines.filter(
        (line) => (Array.isArray(line) ? line[0] : line) !== lastText.current
      );
      if (fresh.length === 0) return false;
      const picked = fresh[Math.floor(Math.random() * fresh.length)];
      const [line, mood] = Array.isArray(picked) ? picked : [picked, undefined];

      if (auto) lastAuto.current = Date.now();
      lastText.current = line;
      visible.current = true;
      setText(line);
      if (mood) play.current?.(mood, MOOD_MS);
      clearTimeout(timer.current);
      timer.current = setTimeout(hide, HIDE_MS);
      return true;
    },
    [gate, play, hide]
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  return { text, say, hide };
};

export default useBubble;
