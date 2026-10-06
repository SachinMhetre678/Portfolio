import {
  PiArrowUpRight as ExternalIcon,
  PiCalendarBlank as CalendarIcon,
} from 'react-icons/pi';

import { ButtonLink } from '@/common/components/elements/Button';
import { CALENDLY_URL, CONTACT_LINKS } from '@/common/constant/contact';

const Contact = () => (
  <>
    <section aria-label='Contact links'>
      <ul className='divide-y divide-hairline overflow-hidden rounded-card border border-hairline bg-surface-1'>
        {CONTACT_LINKS.map(({ label, value, href, icon }) => {
          const opensNewTab = href.startsWith('http');
          return (
            <li key={label}>
              <a
                href={href}
                {...(opensNewTab && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className='group flex min-h-[56px] items-center gap-4 px-5 py-3 transition-colors duration-150 hover:bg-surface-2 focus-visible:-outline-offset-2'
              >
                <span aria-hidden className='text-ink-muted'>
                  {icon}
                </span>
                <span className='flex min-w-0 flex-1 flex-col sm:flex-row sm:items-center sm:gap-4'>
                  <span className='shrink-0 text-body-sm font-medium text-ink sm:w-24'>
                    {label}
                  </span>
                  <span className='min-w-0 break-words font-mono text-mono text-ink-subtle group-hover:text-ink-muted'>
                    {value}
                  </span>
                </span>
                {opensNewTab && (
                  <>
                    <ExternalIcon
                      size={14}
                      aria-hidden
                      className='shrink-0 text-ink-subtle'
                    />
                    <span className='sr-only'>(opens in new tab)</span>
                  </>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </section>

    <section
      aria-labelledby='call-title'
      className='rounded-card border border-hairline bg-surface-1 p-5 md:p-6'
    >
      <div className='flex items-start gap-4'>
        <CalendarIcon
          size={22}
          aria-hidden
          className='mt-1 shrink-0 text-ink-muted'
        />
        <div>
          <h2 id='call-title' className='text-h2'>
            Book a 30-minute call
          </h2>
          <p className='mt-2 text-body text-ink-muted'>
            Google Meet, via Calendly.
          </p>
          <ButtonLink href={CALENDLY_URL} className='mt-5'>
            Book a call
          </ButtonLink>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
