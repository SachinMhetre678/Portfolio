import { PiDownloadSimple as DownloadIcon } from 'react-icons/pi';

import { ButtonLink } from '@/common/components/elements/Button';
import { ChipList } from '@/common/components/elements/Chip';
import SectionHeading from '@/common/components/elements/SectionHeading';
import TextLink from '@/common/components/elements/TextLink';
import {
  ACHIEVEMENTS,
  EDUCATION,
  EXPERIENCE,
  INTRO,
  SKILLS,
} from '@/common/constant/about';

interface AboutProps {
  hasResume: boolean;
}

const About = ({ hasResume }: AboutProps) => (
  <>
    <section
      aria-label='Intro'
      className='max-w-prose space-y-4 text-body text-ink-muted'
    >
      {INTRO.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>

    <section aria-labelledby='experience-title'>
      <SectionHeading id='experience-title' title='Experience' />
      <ol className='space-y-10 border-l border-hairline'>
        {EXPERIENCE.map(({ role, company, period, location, bullets }) => (
          <li key={`${role}-${company}`} className='relative pl-6'>
            <span
              aria-hidden
              className='absolute -left-[4.5px] top-2 h-2 w-2 rounded-full border border-hairline-strong bg-canvas'
            />
            <h3 className='text-h3'>{role}</h3>
            <p className='text-body-sm text-ink-muted'>{company}</p>
            <p className='mt-1 font-mono text-mono tabular-nums text-ink-subtle'>
              {period} · {location}
            </p>
            <ul className='mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-body-sm text-ink-muted marker:text-ink-subtle'>
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>

    <section aria-labelledby='education-title'>
      <SectionHeading id='education-title' title='Education' />
      <div className='space-y-4'>
        <div>
          <h3 className='text-h3'>{EDUCATION.school}</h3>
          <p className='mt-1 text-body-sm text-ink-muted'>{EDUCATION.degree}</p>
          <p className='mt-1 font-mono text-mono tabular-nums text-ink-subtle'>
            {EDUCATION.period} · {EDUCATION.grade}
          </p>
        </div>
        <p className='text-body-sm text-ink-subtle'>{EDUCATION.hsc}</p>
      </div>
    </section>

    <section aria-labelledby='skills-title'>
      <SectionHeading id='skills-title' title='Skills' />
      <dl className='space-y-5'>
        {SKILLS.map(({ group, items }) => (
          <div key={group} className='space-y-2'>
            <dt className='text-caption text-ink-subtle'>{group}</dt>
            <dd>
              <ChipList items={items} />
            </dd>
          </div>
        ))}
      </dl>
    </section>

    <section aria-labelledby='achievements-title'>
      <SectionHeading id='achievements-title' title='Achievements' />
      <ul className='space-y-6'>
        {ACHIEVEMENTS.map(({ title, text, event, href, linkLabel }) => (
          <li key={title}>
            <h3 className='text-h3'>{title}</h3>
            <p className='mt-1 font-mono text-mono text-ink-subtle'>{event}</p>
            <p className='mt-2 max-w-prose text-body-sm text-ink-muted'>
              {text}
            </p>
            <TextLink href={href} className='mt-2 text-body-sm'>
              {linkLabel}
            </TextLink>
          </li>
        ))}
      </ul>
    </section>

    {hasResume && (
      <section aria-labelledby='resume-title'>
        <SectionHeading id='resume-title' title='Resume' />
        <ButtonLink
          href='/resume.pdf'
          variant='secondary'
          icon={<DownloadIcon size={16} aria-hidden />}
          download
        >
          Download resume (PDF)
        </ButtonLink>
      </section>
    )}
  </>
);

export default About;
