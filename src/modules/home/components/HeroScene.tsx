import Image from 'next/image';
import { CSSProperties, useEffect, useRef } from 'react';

import IconBlock, {
  IconBlockProps,
} from '@/common/components/elements/IconBlock';

const AVATAR = {
  src: '/images/sachin-3d-wave.webp',
  alt: 'Cartoon illustration of Sachin waving hello',
};

// His waving hand is at the top left of the image, so the blocks stay on the right and low left.
// d = parallax px (nearest block moves most), amp = float px, dur = float seconds, s = scale (md+, mobile).
interface Floater extends IconBlockProps {
  className: string;
  d: number;
  amp: number;
  dur: number;
  s: number;
  sm: number;
}
const FLOATERS: Floater[] = [
  { icon: 'react', className: 'right-[2%] top-[6%] md:right-[-2%]', d: 14, amp: 10, dur: 5, s: 1.2, sm: 0.7 },
  { icon: 'nextjs', mono: true, className: 'right-[-2%] top-[46%] md:right-[-8%]', d: 9, amp: 8, dur: 6.5, s: 0.9, sm: 0.55 },
  { icon: 'java', className: 'bottom-[22%] left-[0%] md:left-[2%]', d: 6, amp: 6, dur: 4.2, s: 0.75, sm: 0.5 },
];

// Desktop, fine pointer, motion allowed. Mirrors the CSS media query in globals.css.
const PARALLAX_QUERY =
  '(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

const HeroScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  // One pointermove listener, throttled with rAF, attached only while the scene is in view.
  // It writes --px/--py (-1 to 1) on the scene; CSS turns them into transforms, so nothing re-renders or reflows.
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !('IntersectionObserver' in window)) return;
    const query = window.matchMedia(PARALLAX_QUERY);
    let frame = 0;
    let x = 0;
    let y = 0;
    const flush = () => {
      frame = 0;
      scene.style.setProperty('--px', x.toFixed(3));
      scene.style.setProperty('--py', y.toFixed(3));
    };
    const onMove = (event: PointerEvent) => {
      x = (event.clientX / window.innerWidth - 0.5) * 2;
      y = (event.clientY / window.innerHeight - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(flush);
    };
    const detach = () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };
    const observer = new IntersectionObserver(([entry]) => {
      detach();
      if (entry.isIntersecting && query.matches) {
        window.addEventListener('pointermove', onMove, { passive: true });
      }
    });
    observer.observe(scene);
    return () => {
      observer.disconnect();
      detach();
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      data-strobi='hero-avatar'
      data-mascot-avoid
      className='rack-scope hero-scene relative mx-auto h-[360px] w-full max-w-[340px] md:h-[660px] md:max-w-[520px]'
    >
      <span
        aria-hidden='true'
        className='hero-parallax hero-spotlight'
        style={{ '--d': 8 } as CSSProperties}
      />
      <span aria-hidden='true' className='hero-floor-glow' />
      <span aria-hidden='true' className='hero-contact-shadow' />

      {FLOATERS.map(({ className, d, amp, dur, s, sm, ...block }) => (
        <span
          key={block.icon}
          aria-hidden='true'
          className={`hero-parallax pointer-events-none absolute ${className}`}
          style={{ '--d': d } as CSSProperties}
        >
          <span
            className='hero-float block'
            style={
              {
                '--amp': `${amp}px`,
                animationDuration: `${dur}s`,
              } as CSSProperties
            }
          >
            <span
              className='block scale-[var(--sm)] md:scale-[var(--s)]'
              style={{ '--s': s, '--sm': sm } as CSSProperties}
            >
              <IconBlock {...block} />
            </span>
          </span>
        </span>
      ))}

      <div
        className='hero-parallax absolute inset-x-0 bottom-2 flex justify-center'
        style={{ '--d': 4 } as CSSProperties}
      >
        <Image
          src={AVATAR.src}
          alt={AVATAR.alt}
          width={900}
          height={1350}
          priority
          sizes='(min-width: 768px) 400px, 214px'
          className='relative h-[320px] w-auto md:h-[600px]'
        />
      </div>

      <span className='absolute bottom-[12%] right-[4%] inline-flex h-10 -rotate-3 items-center gap-2 whitespace-nowrap rounded-full border border-hairline bg-surface-1 px-4 text-body-sm text-ink shadow-[0_10px_30px_-12px_rgb(0_0_0/0.35)] md:bottom-[10%] md:right-[2%]'>
        <span aria-hidden>👋</span> Pune, India
      </span>
    </div>
  );
};

export default HeroScene;
