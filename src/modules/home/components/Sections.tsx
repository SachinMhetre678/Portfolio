import Image from '@/common/components/elements/Image';
import { ChipList } from '@/common/components/elements/Chip';
import TextLink from '@/common/components/elements/TextLink';
import { SKILLS } from '@/common/constant/about';
import { FEATURED_PROJECTS } from '@/common/constant/projects';
import cn from '@/common/libs/cn';
import { Project } from '@/common/types/projects';

import { caveat } from '@/common/fonts';
import { PillLink } from '@/common/components/elements/PillLink';
import RoutingMockup from './RoutingMockup';

const PROOF = [
  {
    title: 'FOSS Hack 2025 winner',
    text: 'Top project among 800+ submissions',
  },
  {
    title: 'BMC Hackademia top 3',
    text: 'RAG QnA bot for PDFs, 48-hour hackathon',
  },
  { title: 'B.Tech CSE 2026', text: 'Symbiosis Institute of Technology' },
];

export const ProofStrip = () => (
  <section aria-label='Highlights' className='border-y border-hairline'>
    <ul className='mx-auto grid max-w-7xl divide-y divide-hairline px-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8'>
      {PROOF.map(({ title, text }) => (
        <li key={title} className='py-6 md:px-8 md:py-8 md:first:pl-0'>
          <p className='text-h3 text-ink'>{title}</p>
          <p className='mt-1 text-body-sm text-ink-subtle'>{text}</p>
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
          I&apos;m a QA automation engineer in Pune, and I like building the
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

// Visual shown on top of each selected-work card.
const VISUAL_HEIGHT = 'h-56 md:h-64';

const WorkVisual = ({ slug, title }: { slug: string; title: string }) => {
  if (slug === 'regression-failure-management') {
    return (
      <div
        className={cn(
          'relative overflow-hidden bg-surface-2 px-5 pt-5',
          VISUAL_HEIGHT
        )}
      >
        <div className='origin-top scale-[0.92]'>
          <RoutingMockup />
        </div>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface-2 to-transparent'
        />
        <div
          aria-hidden
          className='pointer-events-none absolute bottom-3 right-4 flex items-end gap-1 text-accent'
        >
          <svg width='34' height='38' viewBox='0 0 54 60' fill='none'>
            <path
              d='M48 56C30 54 12 44 8 8M8 8L2 18M8 8L16 15'
              stroke='currentColor'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span
            className={cn(
              caveat.className,
              '-rotate-3 text-[20px] leading-none'
            )}
          >
            this sorts itself every night
          </span>
        </div>
      </div>
    );
  }
  const images: Record<string, { src: string; alt: string }> = {
    scribly: {
      src: '/images/projects/scribly.jpg',
      alt: 'Scribly demo video thumbnail',
    },
    'hotel-management-system': {
      src: '/images/projects/hotel.png',
      alt: `${title} screenshot`,
    },
  };
  const image = images[slug];
  if (image) {
    return (
      <div
        className={cn('relative overflow-hidden bg-surface-2', VISUAL_HEIGHT)}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes='(min-width: 768px) 60vw, 100vw'
          className='object-cover object-center transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]'
        />
      </div>
    );
  }
  // Hope has no screenshot yet: a typographic panel from the approved detail line.
  return (
    <div
      aria-hidden
      className={cn(
        'flex items-center justify-center gap-3 bg-accent-soft font-mono text-mono text-accent',
        VISUAL_HEIGHT
      )}
    >
      {['Face', 'Voice', 'Text'].map((mode) => (
        <span
          key={mode}
          className='rounded-full border border-accent/30 bg-surface-1 px-4 py-2'
        >
          {mode}
        </span>
      ))}
    </div>
  );
};

const WorkCard = ({
  project,
  span,
  tone,
}: {
  project: Project;
  span: string;
  tone?: 'accent';
}) => {
  const { slug, title, context, oneLiner, tags, links, note } = project;
  return (
    <article
      aria-labelledby={`work-${slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-[24px] border transition-[transform,border-color,background-color] duration-300 ease-out motion-safe:hover:-translate-y-1',
        tone === 'accent'
          ? 'border-accent/25 bg-accent-soft hover:border-accent/50'
          : 'border-hairline bg-surface-1 hover:border-hairline-strong',
        span
      )}
    >
      <WorkVisual slug={slug} title={title} />
      <div className='flex flex-1 flex-col p-6 md:p-8'>
        {context && <p className='text-caption text-ink-subtle'>{context}</p>}
        <h3
          id={`work-${slug}`}
          className={cn(
            'mt-2 text-ink',
            tone === 'accent' ? 'text-h1-mobile md:text-h1' : 'text-h2'
          )}
        >
          {title}
        </h3>
        <p className='mt-3 max-w-prose text-body text-ink-muted'>{oneLiner}</p>

        <div className='mt-auto pt-6'>
          <ChipList
            items={tags.slice(0, 4)}
            chipClassName={cn(
              'rounded-full',
              tone === 'accent' && 'bg-surface-1'
            )}
          />
          {(links.length > 0 || note) && (
            <div className='mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm'>
              {links.map(({ label, href }) => (
                <TextLink key={href} href={href} srLabel={`: ${title}`}>
                  {label}
                </TextLink>
              ))}
              {note && <p className='text-ink-subtle'>{note}</p>}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

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
