import { useEffect, useRef, useState } from 'react';
import {
  PiArrowUpRight as ExternalIcon,
  PiCalendarBlank as CalendarIcon,
  PiCheck as CheckIcon,
  PiCopySimple as CopyIcon,
  PiDownloadSimple as DownloadIcon,
  PiEnvelopeSimple as MailIcon,
} from 'react-icons/pi';

import PageHeader from '@/common/components/elements/PageHeader';
import { PillLink, pillClassName } from '@/common/components/elements/PillLink';
import { CALENDLY_URL, CONTACT_LINKS } from '@/common/constant/contact';
import cn from '@/common/libs/cn';
import { revealCard, step } from '@/common/libs/motion';

const [EMAIL, linkedin, ...rest] = CONTACT_LINKS;
// Social pills in the order GitHub, LinkedIn, X, Instagram.
const SOCIAL = [rest[0], linkedin, ...rest.slice(1)];

const cardClassName = cn(
  revealCard,
  'rounded-[24px] border border-hairline bg-surface-1 p-6 transition-[transform,border-color] duration-300 ease-out hover:border-hairline-strong motion-safe:hover:-translate-y-1 md:p-8'
);

const EmailCard = () => {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL.value);
      setState('copied');
    } catch {
      setState('failed');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), 2500);
  };

  return (
    <section
      aria-labelledby='email-title'
      className={cn(
        cardClassName,
        'border-accent/25 bg-accent-soft hover:border-accent/50 md:col-span-12'
      )}
      style={step(0)}
    >
      <p
        id='email-title'
        className='inline-flex items-center gap-2 text-caption text-ink-subtle'
      >
        <MailIcon size={16} aria-hidden /> Email
      </p>
      <p className='mt-4 break-words text-[clamp(1.25rem,4.4vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em] text-ink'>
        {EMAIL.value}
      </p>
      <div className='mt-8 flex flex-wrap items-center gap-3'>
        <button
          type='button'
          onClick={copy}
          className={pillClassName('primary')}
        >
          {state === 'copied' ? (
            <CheckIcon size={18} aria-hidden />
          ) : (
            <CopyIcon size={18} aria-hidden />
          )}
          {state === 'copied' ? 'Copied' : 'Copy email'}
        </button>
        <a href={EMAIL.href} className={pillClassName('secondary')}>
          Send email
        </a>
        <span role='status' className='text-body-sm text-ink-subtle'>
          {state === 'copied' && 'Email address copied.'}
          {state === 'failed' && 'Copy failed. Use Send email instead.'}
        </span>
      </div>
    </section>
  );
};

interface ContactProps {
  hasResume: boolean;
}

const Contact = ({ hasResume }: ContactProps) => (
  <>
    <PageHeader
      badge='Contact'
      title='Let’s talk.'
      subtitle='the fastest way is email.'
    />

    <div className='grid gap-4 md:grid-cols-12'>
      <EmailCard />

      <section
        aria-labelledby='call-title'
        className={cn(cardClassName, 'md:col-span-7')}
        style={step(1)}
      >
        <CalendarIcon size={24} aria-hidden className='text-accent' />
        <h2 id='call-title' className='mt-5 text-h2'>
          Book a 30-minute call
        </h2>
        <p className='mt-2 text-body text-ink-muted'>
          Google Meet, via Calendly.
        </p>
        <PillLink href={CALENDLY_URL} className='mt-8'>
          Book a call
        </PillLink>
      </section>

      <section
        aria-labelledby='social-title'
        className={cn(cardClassName, 'md:col-span-5')}
        style={step(2)}
      >
        <h2 id='social-title' className='text-h2'>
          Find me online
        </h2>
        <ul className='mt-5 flex flex-wrap gap-2'>
          {SOCIAL.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className={pillClassName('secondary', 'h-11 px-4 text-body-sm')}
              >
                <span aria-hidden>{icon}</span>
                {label}
                <ExternalIcon
                  size={14}
                  aria-hidden
                  className='text-ink-subtle'
                />
                <span className='sr-only'>(opens in new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Hidden until public/resume.pdf exists (docs/TODO.md). */}
      {hasResume && (
        <section
          aria-label='Resume'
          className={cn(cardClassName, 'md:col-span-12')}
          style={step(3)}
        >
          <a href='/resume.pdf' download className={pillClassName('secondary')}>
            <DownloadIcon size={18} aria-hidden />
            Download resume (PDF)
          </a>
        </section>
      )}
    </div>
  </>
);

export default Contact;
