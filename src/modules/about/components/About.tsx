import {
  PiDownloadSimple as DownloadIcon,
  PiMedal as MedalIcon,
  PiTrophy as TrophyIcon,
} from 'react-icons/pi';

import { ChipList } from '@/common/components/elements/Chip';
import PageHeader from '@/common/components/elements/PageHeader';
import { pillClassName } from '@/common/components/elements/PillLink';
import Portrait from '@/common/components/elements/Portrait';
import TextLink from '@/common/components/elements/TextLink';
import {
  ACHIEVEMENTS,
  EDUCATION,
  EXPERIENCE,
  INTRO,
  OUTSIDE_WORK,
  SKILLS,
} from '@/common/constant/about';
import cn from '@/common/libs/cn';
import { reveal, revealCard, step } from '@/common/libs/motion';

interface AboutProps {
  hasResume: boolean;
}

const ACHIEVEMENT_ICONS = [TrophyIcon, MedalIcon];

const SectionTitle = ({ id, children }: { id: string; children: string }) => (
  <h2 id={id} className='text-h1-mobile md:text-h1'>
    {children}
  </h2>
);

const About = ({ hasResume }: AboutProps) => (
  <>
    <PageHeader
      badge='About'
      title='A bit about me.'
      subtitle='the short version.'
      description='Background, experience and skills.'
      aside={
        <Portrait
          sizes='(min-width: 768px) 288px, 192px'
          className='mx-0 w-28 md:w-44'
        />
      }
    />

    <section
      aria-label='Intro'
      className={cn(
        reveal,
        'max-w-[62ch] space-y-5 text-body-lg text-ink-muted'
      )}
      style={step(4)}
    >
      {INTRO.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>

    <section aria-labelledby='achievements-title'>
      <SectionTitle id='achievements-title'>Achievements</SectionTitle>
      <ul className='mt-8 grid gap-4 md:grid-cols-2'>
        {ACHIEVEMENTS.map(({ title, text, event, href, linkLabel }, index) => {
          const Icon = ACHIEVEMENT_ICONS[index] ?? TrophyIcon;
          return (
            <li
              key={title}
              className={cn(
                revealCard,
                'rounded-[24px] border p-6 transition-[transform,border-color] duration-300 ease-out motion-safe:hover:-translate-y-1 md:p-8',
                index === 0
                  ? 'border-accent/25 bg-accent-soft hover:border-accent/50'
                  : 'border-hairline bg-surface-1 hover:border-hairline-strong'
              )}
              style={step(index)}
            >
              <span
                aria-hidden
                className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-surface-1 text-accent'
              >
                <Icon size={22} />
              </span>
              <p className='mt-5 text-caption text-ink-subtle'>{event}</p>
              <h3 className='mt-1 text-h2'>{title}</h3>
              <p className='mt-3 text-body text-ink-muted'>{text}</p>
              <TextLink href={href} className='mt-5 text-body-sm'>
                {linkLabel}
              </TextLink>
            </li>
          );
        })}
      </ul>
    </section>

    <section aria-labelledby='experience-title'>
      <SectionTitle id='experience-title'>Experience</SectionTitle>
      <ol className='mt-8 ml-2 space-y-12 border-l border-hairline'>
        {EXPERIENCE.map(
          ({ role, company, period, location, bullets }, index) => (
            <li key={`${role}-${company}`} className='relative pl-8 md:pl-10'>
              <span
                aria-hidden
                className={cn(
                  'absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2',
                  index === 0
                    ? 'border-accent bg-accent'
                    : 'border-hairline-strong bg-canvas'
                )}
              />
              <p className='inline-flex h-7 items-center rounded-full border border-hairline bg-surface-1 px-3 text-caption text-ink-muted'>
                {period} · {location}
              </p>
              <h3 className='mt-3 text-h2'>{role}</h3>
              <p className='text-body text-ink-subtle'>{company}</p>
              <ul className='mt-4 max-w-[68ch] list-disc space-y-2 pl-5 text-body text-ink-muted marker:text-ink-subtle'>
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          )
        )}
      </ol>
    </section>

    <section aria-labelledby='education-title'>
      <SectionTitle id='education-title'>Education</SectionTitle>
      <div className='mt-8 rounded-[24px] border border-hairline bg-surface-1 p-6 md:p-8'>
        <h3 className='text-h2'>{EDUCATION.school}</h3>
        <p className='mt-2 text-body text-ink-muted'>{EDUCATION.degree}</p>
        <p className='mt-3 flex flex-wrap gap-2 text-caption text-ink-muted'>
          {[EDUCATION.period, EDUCATION.grade].map((item) => (
            <span
              key={item}
              className='inline-flex h-7 items-center rounded-full border border-hairline bg-surface-2 px-3'
            >
              {item}
            </span>
          ))}
        </p>
        <p className='mt-5 border-t border-hairline pt-5 text-body-sm text-ink-subtle'>
          {EDUCATION.hsc}
        </p>
      </div>
    </section>

    <section aria-labelledby='skills-title'>
      <SectionTitle id='skills-title'>Skills</SectionTitle>
      <dl className='mt-8 grid gap-4 md:grid-cols-2'>
        {SKILLS.map(({ group, items }) => (
          <div
            key={group}
            className='rounded-[20px] border border-hairline bg-surface-1 p-5 md:p-6'
          >
            <dt className='text-caption text-ink-subtle'>{group}</dt>
            <dd className='mt-3'>
              <ChipList items={items} chipClassName='rounded-full' />
            </dd>
          </div>
        ))}
      </dl>
    </section>

    <p className='max-w-[62ch] border-l-2 border-accent/40 pl-5 text-body-lg text-ink-muted'>
      {OUTSIDE_WORK}
    </p>

    {hasResume && (
      <section aria-label='Resume'>
        <a href='/resume.pdf' download className={pillClassName('secondary')}>
          <DownloadIcon size={18} aria-hidden />
          Download resume (PDF)
        </a>
      </section>
    )}
  </>
);

export default About;
