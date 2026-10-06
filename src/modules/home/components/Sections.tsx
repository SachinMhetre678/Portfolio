import Link from 'next/link';

import TextLink from '@/common/components/elements/TextLink';
import { SKILLS } from '@/common/constant/about';
import { FEATURED_PROJECTS } from '@/common/constant/projects';
import WorkCard from '@/modules/projects/components/WorkCard';

import { PillLink } from '@/common/components/elements/PillLink';

const PROOF: { title: string; text: string; href?: string }[] = [
  {
    title: 'FOSS Hack 2025 winner',
    text: 'Top project among 800+ submissions',
  },
  {
    title: 'BMC Hackademia top 3',
    text: 'RAG QnA bot for PDFs, 48-hour hackathon',
    href: '/projects#rag-document-qa',
  },
  { title: 'B.Tech CSE 2026', text: 'Symbiosis Institute of Technology' },
];

export const ProofStrip = () => (
  <section aria-label='Highlights' className='border-y border-hairline'>
    <ul className='mx-auto grid max-w-7xl divide-y divide-hairline px-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8'>
      {PROOF.map(({ title, text, href }) => (
        <li key={title} className='py-6 md:px-8 md:py-8 md:first:pl-0'>
          {href ? (
            <Link href={href} className='group block'>
              <p className='text-h3 text-ink group-hover:text-accent'>
                {title}
              </p>
              <p className='mt-1 text-body-sm text-ink-subtle'>{text}</p>
            </Link>
          ) : (
            <>
              <p className='text-h3 text-ink'>{title}</p>
              <p className='mt-1 text-body-sm text-ink-subtle'>{text}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  </section>
);

// Order and layout of the selected-work grid. Spans are for the 12-column md+ grid.
const SELECTED: { slug: string; span: string; tone?: 'accent' }[] = [
  { slug: 'scribly', span: 'md:col-span-7', tone: 'accent' },
  { slug: 'regression-failure-management', span: 'md:col-span-5' },
  { slug: 'hope', span: 'md:col-span-5' },
  { slug: 'hotel-management-system', span: 'md:col-span-7' },
];

export const AboutBlock = () => (
  <section
    aria-labelledby='about-title'
    className='mx-auto max-w-7xl px-4 pt-20 md:px-8 md:pt-28'
  >
    <div className='grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] md:gap-10'>
      <h2 id='about-title' className='text-h2'>
        A bit about me
      </h2>
      <div>
        <p className='max-w-[60ch] text-body-lg text-ink-muted'>
          I&apos;m an automation engineer in Pune, and I like building the
          tooling around the tests. I studied Computer Science and Engineering
          at Symbiosis Institute of Technology, and my team won FOSS Hack 2025.
          Outside work, I captained my Kho-Kho team in junior college, play the
          tabla, and play a few sports and esports.
        </p>
        <TextLink href='/about' className='mt-5 inline-flex text-body-sm'>
          More about me
        </TextLink>
      </div>
    </div>
  </section>
);

export const SelectedWork = () => (
  <section
    aria-labelledby='work-title'
    className='mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28'
  >
    <div className='flex flex-wrap items-end justify-between gap-6'>
      <h2 id='work-title' className='text-h1-mobile md:text-h1'>
        Selected work
      </h2>
      <PillLink
        href='/projects'
        variant='secondary'
        className='h-11 px-5 text-body-sm'
      >
        View projects
      </PillLink>
    </div>
    <div className='mt-10 grid gap-4 md:grid-cols-12'>
      {SELECTED.map(({ slug, span, tone }) => {
        const project = FEATURED_PROJECTS.find((item) => item.slug === slug);
        return project ? (
          <WorkCard key={slug} project={project} span={span} tone={tone} />
        ) : null;
      })}
    </div>
  </section>
);

export const SkillsStrip = () => (
  <section aria-labelledby='skills-title' className='border-t border-hairline'>
    <div className='mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] md:px-8 md:py-24'>
      <h2 id='skills-title' className='text-h2'>
        Tools I use
      </h2>
      <dl className='grid gap-x-10 gap-y-6 sm:grid-cols-2'>
        {SKILLS.map(({ group, items }) => (
          <div key={group}>
            <dt className='text-caption text-ink-subtle'>{group}</dt>
            <dd className='mt-1.5 text-body text-ink-muted'>
              {items.join(', ')}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export const Closing = () => (
  <section aria-labelledby='closing-title' className='px-4 pb-16 md:px-8'>
    <div className='mx-auto flex max-w-7xl flex-col items-start gap-8 rounded-[32px] border border-hairline bg-surface-1 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-12 md:py-16'>
      <div>
        <h2 id='closing-title' className='text-h1-mobile md:text-h1'>
          Get in touch
        </h2>
        <p className='mt-3 max-w-[46ch] text-body-lg text-ink-muted'>
          Questions about a project, or want to talk about test automation? Send
          me a message.
        </p>
      </div>
      <PillLink href='/contact' className='shrink-0'>
        Get in touch
      </PillLink>
    </div>
  </section>
);
