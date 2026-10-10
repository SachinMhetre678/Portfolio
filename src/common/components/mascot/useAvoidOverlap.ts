import { useRouter } from 'next/router';
import { RefObject, useEffect, useState } from 'react';

// Things Strobi must never cover on phones: the portrait, the nav and menu, buttons and links.
const AVOID =
  '[data-mascot-avoid], #site-menu, header a, header button, main a, main button, footer a, footer button';

// Phones only (< 768px): true while the element overlaps something it must not cover.
const useAvoidOverlap = (ref: RefObject<HTMLElement>, enabled: boolean) => {
  const { events } = useRouter();
  const [overlaps, setOverlaps] = useState(false);

  useEffect(() => {
    const phone = window.matchMedia('(max-width: 767px)');
    let frame = 0;

    const check = () => {
      frame = 0;
      const el = ref.current;
      if (!enabled || !el || !phone.matches) return setOverlaps(false);
      const box = el.getBoundingClientRect();
      const pad = 6;
      setOverlaps(
        Array.from(document.querySelectorAll(AVOID)).some((node) => {
          if (el.contains(node)) return false;
          const r = node.getBoundingClientRect();
          return (
            r.width > 0 &&
            r.right > box.left - pad &&
            r.left < box.right + pad &&
            r.bottom > box.top - pad &&
            r.top < box.bottom + pad
          );
        })
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    events.on('routeChangeComplete', schedule);
    const timer = setInterval(schedule, 600); // layout shifts from reveal animations
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      events.off('routeChangeComplete', schedule);
    };
  }, [ref, enabled, events]);

  return overlaps;
};

export default useAvoidOverlap;
