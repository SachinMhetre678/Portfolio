import { CSSProperties, PointerEvent, useRef } from 'react';

import Image from '@/common/components/elements/Image';
import cn from '@/common/libs/cn';

import { geistItalic } from '../fonts';
import { PillLink } from './Pill';

const step = (i: number) => ({ '--i': i } as CSSProperties);
const reveal = 'stagger motion-safe:animate-reveal';

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
            'relative mx-auto w-full max-w-[300px] lg:max-w-[360px]'
          )}
          style={{ ...step(3), '--base': '120ms' } as CSSProperties}
        >
          <div
            aria-hidden
            className='absolute -inset-6 -z-10 rounded-full bg-accent/20 blur-3xl'
          />
          <div className='rotate-3 overflow-hidden rounded-[999px_999px_32px_32px] border border-accent/40 bg-surface-1 p-2 shadow-[0_0_0_6px_var(--accent-soft),0_30px_70px_-30px_rgb(0_0_0/0.5)]'>
            <Image
              src='/images/sachin.jpg'
              alt='Sachin Mhetre'
              width={827}
              height={762}
              priority
              sizes='(min-width: 1024px) 360px, 300px'
              className='aspect-[4/5] w-full rounded-[999px_999px_24px_24px] object-cover object-top'
            />
          </div>
          <span
            className='stagger absolute -left-3 bottom-10 inline-flex h-10 -rotate-6 items-center gap-2 whitespace-nowrap rounded-full border border-hairline bg-surface-1 px-4 text-body-sm text-ink shadow-[0_10px_30px_-12px_rgb(0_0_0/0.35)] motion-safe:animate-reveal md:-left-8'
            style={{ '--i': 0, '--base': '900ms' } as CSSProperties}
          >
            <span aria-hidden>👋</span> Pune, India
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
