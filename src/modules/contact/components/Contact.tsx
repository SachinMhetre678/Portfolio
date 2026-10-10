import {
  PiCheck as CheckIcon,
  PiCopySimple as CopyIcon,
  PiDownloadSimple as DownloadIcon,
  PiEnvelopeSimple as MailIcon,
} from 'react-icons/pi';

import PageHeader from '@/common/components/elements/PageHeader';
import { pillClassName } from '@/common/components/elements/PillLink';
import cn from '@/common/libs/cn';
import { revealCard, step } from '@/common/libs/motion';
import PhoneMockup from './PhoneMockup';
import useCopyEmail, { EMAIL } from './useCopyEmail';

const cardClassName = cn(
  revealCard,
  'rounded-[24px] border border-hairline bg-surface-1 p-6 transition-[transform,border-color] duration-300 ease-out hover:border-hairline-strong motion-safe:hover:-translate-y-1 md:p-8'
);

const EmailCard = () => {
  const { state, copy } = useCopyEmail();

  return (
    <section
      aria-labelledby='email-title'
      data-mascot='excited'
      data-strobi='email'
      className={cn(
        cardClassName,
        'border-accent/25 bg-accent-soft hover:border-accent/50'
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
  <div className='grid grid-cols-[minmax(0,1fr)] gap-x-8 gap-y-10 md:grid-cols-12 md:items-center'>
    <div className='flex flex-col gap-10 md:col-span-7'>
      <PageHeader
        badge='Contact'
        title='Let’s talk.'
        subtitle='the fastest way is email.'
      />
      <EmailCard />

      {/* Hidden until public/resume.pdf exists (docs/TODO.md). */}
      {hasResume && (
        <section
          aria-label='Resume'
          className={cn(cardClassName)}
          style={step(2)}
        >
          <a href='/resume.pdf' download className={pillClassName('secondary')}>
            <DownloadIcon size={18} aria-hidden />
            Download resume (PDF)
          </a>
        </section>
      )}
    </div>

    <div className='md:col-span-5' style={step(1)}>
      <PhoneMockup />
    </div>
  </div>
);

export default Contact;
