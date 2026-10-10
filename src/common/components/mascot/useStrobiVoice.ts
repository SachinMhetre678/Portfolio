import { useRouter } from 'next/router';
import { RefObject, useCallback, useEffect, useRef } from 'react';

import { MASCOT_CELEBRATE_EVENT } from './constants';
import {
  hasVisited,
  markSection,
  seenSection,
  setGreeted,
  setVisited,
  wasGreeted,
} from './storage';
import { LINES } from './strobiLines';
import type { PlayMood } from './useStrobiAvatar';
import type { Say } from './useBubble';

const IDLE_MS = 30_000;
const ARRIVAL_DELAY_MS = 700;
const SECTION_DELAY_MS = 1500; // after the arrival line, which should win the first slot
const CLICK_WINDOW_MS = 2500;
const HOVER_THROTTLE_MS = 2000;
const HOVER_LONG_MS = 3500;
const KONAMI = [
  'arrowup',
  'arrowup',
  'arrowdown',
  'arrowdown',
  'arrowleft',
  'arrowright',
  'arrowleft',
  'arrowright',
  'b',
  'a',
];

const pageOf = (pathname: string) => {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/contact')) return 'contact';
  return null;
};

const timeSlot = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
};

// data-strobi="key" marks hover targets. "Get in touch" links are matched by their text,
// because that label appears in four places.
const hitOf = (target: EventTarget | null) => {
  const node = target as Element | null;
  const marked = node?.closest?.('[data-strobi]');
  if (marked)
    return { el: marked, key: marked.getAttribute('data-strobi') ?? '' };
  const link = node?.closest?.('a[href="/contact"]');
  if (link?.textContent?.trim().startsWith('Get in touch'))
    return { el: link, key: 'cta' };
  return null;
};

// All of Strobi's triggers. The words live in strobiLines.ts; the rules for when a bubble
// may appear live in useBubble.ts.
const useStrobiVoice = (
  say: Say,
  play: RefObject<PlayMood>,
  enabled: boolean
) => {
  const { pathname } = useRouter();
  const sayRef = useRef(say);
  sayRef.current = say;
  const clicks = useRef<number[]>([]);

  // Page arrival (plus the first-visit and return-visit greetings).
  useEffect(() => {
    if (!enabled) return;
    const page = pageOf(pathname);
    const timer = setTimeout(() => {
      const slot = LINES.time[timeSlot()];
      if (!wasGreeted()) {
        setGreeted();
        const first = !hasVisited();
        setVisited();
        sayRef.current(
          first
            ? LINES.firstVisit
            : [...LINES.welcomeBack, ...(page === 'home' ? slot : [])],
          { auto: true }
        );
        return;
      }
      if (page) {
        sayRef.current(
          [...LINES.arrival[page], ...(page === 'home' ? slot : [])],
          { auto: true }
        );
      }
    }, ARRIVAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname, enabled]);

  // Hover, focus or tap on marked elements.
  useEffect(() => {
    if (!enabled) return;
    let current: Element | null = null;
    let longTimer: ReturnType<typeof setTimeout> | undefined;
    const lastFired: Record<string, number> = {};

    const fire = (key: string) => {
      const lines = LINES.hover[key];
      const now = Date.now();
      if (!lines || now - (lastFired[key] ?? 0) < HOVER_THROTTLE_MS) return;
      lastFired[key] = now;
      sayRef.current(lines);
      if (key === 'self') {
        clearTimeout(longTimer);
        longTimer = setTimeout(
          () => sayRef.current(LINES.hoverLong),
          HOVER_LONG_MS
        );
      }
    };
    const onOver = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const hit = hitOf(event.target);
      if (!hit || hit.el === current) return;
      current = hit.el;
      fire(hit.key);
    };
    const onOut = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || !current) return;
      if (current.contains(event.relatedTarget as Node | null)) return;
      current = null;
      clearTimeout(longTimer);
    };
    const onFocus = (event: FocusEvent) => {
      const hit = hitOf(event.target);
      if (hit) fire(hit.key);
    };
    // Touch: a tap stands in for hover (a tap on Strobi itself opens the quick menu).
    const onTap = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') return;
      const hit = hitOf(event.target);
      if (hit && hit.key !== 'self') fire(hit.key);
    };

    document.addEventListener('pointerover', onOver, { passive: true });
    document.addEventListener('pointerout', onOut, { passive: true });
    document.addEventListener('focusin', onFocus);
    document.addEventListener('pointerdown', onTap, { passive: true });
    return () => {
      clearTimeout(longTimer);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      document.removeEventListener('focusin', onFocus);
      document.removeEventListener('pointerdown', onTap);
    };
  }, [enabled]);

  // A section scrolls into view for the first time this session.
  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) return;
    let observer: IntersectionObserver | undefined;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const name = entry.target.getAttribute('data-strobi-section') ?? '';
            const key = `${pathname}:${name}`;
            const lines = LINES.section[name];
            if (!lines || seenSection(key)) return;
            // Only count it as seen if Strobi actually spoke.
            if (sayRef.current(lines, { auto: true })) markSection(key);
          });
        },
        { threshold: 0.35 }
      );
      document
        .querySelectorAll('[data-strobi-section]')
        .forEach((el) => observer?.observe(el));
    }, SECTION_DELAY_MS);
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname, enabled]);

  // Theme switch, copied email, Konami code.
  useEffect(() => {
    if (!enabled) return;
    const html = document.documentElement;
    let light = html.classList.contains('light');
    const themeObserver = new MutationObserver(() => {
      const next = html.classList.contains('light');
      if (next === light) return;
      light = next;
      sayRef.current(light ? LINES.theme.light : LINES.theme.dark);
    });
    themeObserver.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const onCopy = () => sayRef.current(LINES.copy);

    let progress = 0;
    const onKey = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      progress =
        key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
      if (progress === KONAMI.length) {
        progress = 0;
        sayRef.current(LINES.konami);
      }
    };

    window.addEventListener(MASCOT_CELEBRATE_EVENT, onCopy);
    window.addEventListener('keydown', onKey);
    return () => {
      themeObserver.disconnect();
      window.removeEventListener(MASCOT_CELEBRATE_EVENT, onCopy);
      window.removeEventListener('keydown', onKey);
    };
  }, [enabled]);

  // 30 seconds of nothing: drowsy line. Any movement: wake-up line.
  useEffect(() => {
    if (!enabled) return;
    let last = Date.now();
    let asleep = false;
    const onActivity = () => {
      last = Date.now();
      if (asleep) {
        asleep = false;
        // A reaction to the visitor, so no cooldown. Only happens if the drowsy line was shown.
        sayRef.current(LINES.wake);
      }
    };
    const timer = setInterval(() => {
      if (!asleep && Date.now() - last >= IDLE_MS) {
        asleep = sayRef.current(LINES.idle, { auto: true });
      }
    }, 1000);
    const events = [
      'mousemove',
      'scroll',
      'keydown',
      'pointerdown',
      'touchstart',
    ] as const;
    events.forEach((name) =>
      window.addEventListener(name, onActivity, { passive: true })
    );
    return () => {
      clearInterval(timer);
      events.forEach((name) => window.removeEventListener(name, onActivity));
    };
  }, [enabled]);

  // Five quick clicks on Strobi: laughing plus a silly line. Returns true when it fired.
  const registerClick = useCallback((): boolean => {
    const now = Date.now();
    clicks.current = [...clicks.current, now].filter(
      (time) => now - time <= CLICK_WINDOW_MS
    );
    if (clicks.current.length < 5) return false;
    clicks.current = [];
    sayRef.current(LINES.clickEgg, { force: true });
    play.current?.('laughing', 2500);
    return true;
  }, [play]);

  return { registerClick };
};

export default useStrobiVoice;
