import { CSSProperties, PointerEvent, useRef } from 'react';

import cn from '@/common/libs/cn';

import { caveat, geistItalic } from '../fonts';
import { PillLink } from './Pill';
import RoutingMockup from './RoutingMockup';

const step = (i: number) => ({ '--i': i } as CSSProperties);
const reveal = 'stagger motion-safe:animate-reveal';

const CHIPS = [
  { label: 'FOSS Hack 2025 winner', className: 'md:-right-6 md:-top-5' },
  { label: '800+ submissions', className: 'md:-left-10 md:top-[30%]' },
  { label: '3-4 hrs → 5-10 min', className: 'md:-bottom-5 md:left-12' },
];

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
              I build software
            </span>
            <span
              className={cn(
                reveal,
                geistItalic.className,
                'block pb-2 font-normal leading-[1.08] text-ink-subtle lg:whitespace-nowrap'
              )}
              style={step(2)}
            >
              that tests itself.
            </span>
          </h1>

          <p
            className={cn(
              reveal,
              'mt-6 max-w-[38ch] text-body-lg text-ink-muted'
            )}
            style={step(3)}
          >
            Test automation and the tools around it, plus full-stack and AI
            projects from hackathons and university.
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
          className={cn(reveal, 'relative')}
          style={{ ...step(3), '--base': '120ms' } as CSSProperties}
        >
          <RoutingMockup />

          <ul className='mt-4 flex flex-wrap gap-2 md:mt-0 md:block'>
            {CHIPS.map(({ label, className }, i) => (
              <li
                key={label}
                className={cn(
                  'stagger md:absolute motion-safe:animate-reveal',
                  className
                )}
                style={{ '--i': i, '--base': '1100ms' } as CSSProperties}
              >
                <span className='inline-flex h-9 items-center whitespace-nowrap rounded-full border border-hairline bg-surface-1 px-4 font-mono text-mono text-ink shadow-[0_10px_30px_-12px_rgb(0_0_0/0.35)]'>
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div
            aria-hidden
            className='pointer-events-none absolute -bottom-[86px] right-2 hidden items-end gap-1 text-accent md:flex'
          >
            <svg
              width='54'
              height='60'
              viewBox='0 0 54 60'
              fill='none'
              className='-mb-1'
            >
              <path
                d='M48 56C30 54 12 44 8 8M8 8L2 18M8 8L16 15'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span
              className={cn(
                caveat.className,
                '-rotate-3 text-[22px] leading-none'
              )}
            >
              this sorts itself every night
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
