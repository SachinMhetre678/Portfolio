import { CSSProperties, PointerEvent, useRef } from 'react';

import { PillLink } from '@/common/components/elements/PillLink';
import Portrait from '@/common/components/elements/Portrait';
import { geistItalic } from '@/common/fonts';
import cn from '@/common/libs/cn';
import { reveal, step } from '@/common/libs/motion';

const Hero = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  // Writes CSS variables directly, so moving the pointer never re-renders React.
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || !glowRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    glowRef.current.style.setProperty('--gx', `${event.clientX - rect.left}px`);
    glowRef.current.style.setProperty('--gy', `${event.clientY - rect.top}px`);
  };

  return (
    <section
      aria-labelledby='hero-title'
      onPointerMove={onPointerMove}
      className='relative isolate overflow-hidden px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36'
    >
      <div
        ref={glowRef}
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 hidden opacity-60 motion-safe:md:block'
        style={{
          background:
            'radial-gradient(520px circle at var(--gx, 70%) var(--gy, 40%), var(--accent-soft), transparent 70%)',
        }}
      />

      <div className='mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-12'>
        <div>
          <p
            className={cn(
              reveal,
              'inline-flex h-8 items-center rounded-full border border-hairline bg-surface-1 px-3.5 text-caption text-ink-muted'
            )}
            style={step(0)}
          >
            Pune, India · B.Tech CSE 2026
          </p>

          <h1
            id='hero-title'
            className='mt-6 text-[clamp(2.75rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink'
          >
            <span
              className={cn(reveal, 'block lg:whitespace-nowrap')}
              style={step(1)}
            >
              Hi, I&apos;m Sachin.
            </span>
            <span
              className={cn(
                reveal,
                geistItalic.className,
                'block pb-2 font-normal leading-[1.08] text-ink-subtle lg:whitespace-nowrap'
              )}
              style={step(2)}
            >
              I build things that work.
            </span>
          </h1>

          <p
            className={cn(
              reveal,
              'mt-6 max-w-[38ch] text-body-lg text-ink-muted'
            )}
            style={step(3)}
          >
            I like building test automation and the tools around it. I also make
            full-stack and AI projects, from hackathons and university.
          </p>

          <div
            className={cn(reveal, 'mt-9 flex flex-wrap gap-3')}
            style={step(4)}
          >
            <PillLink href='/projects'>View projects</PillLink>
            <PillLink href='/contact' variant='secondary'>
              Get in touch
            </PillLink>
          </div>
        </div>

        <div
          className={cn(
            reveal,
            'mx-auto w-full max-w-[300px] lg:max-w-[360px]'
          )}
          style={{ ...step(3), '--base': '120ms' } as CSSProperties}
        >
          <Portrait priority sizes='(min-width: 1024px) 576px, 480px'>
            <span
              className='stagger absolute -left-3 bottom-10 inline-flex h-10 -rotate-6 items-center gap-2 whitespace-nowrap rounded-full border border-hairline bg-surface-1 px-4 text-body-sm text-ink shadow-[0_10px_30px_-12px_rgb(0_0_0/0.35)] motion-safe:animate-reveal md:-left-8'
              style={{ '--i': 0, '--base': '900ms' } as CSSProperties}
            >
              <span aria-hidden>👋</span> Pune, India
            </span>
          </Portrait>
        </div>
      </div>
    </section>
  );
};

export default Hero;
