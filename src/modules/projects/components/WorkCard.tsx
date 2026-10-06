import { ChipList } from '@/common/components/elements/Chip';
import Image from '@/common/components/elements/Image';
import TextLink from '@/common/components/elements/TextLink';
import { caveat } from '@/common/fonts';
import cn from '@/common/libs/cn';
import { revealCard, step as stepStyle } from '@/common/libs/motion';
import { Project } from '@/common/types/projects';
import RoutingMockup from '@/modules/home/components/RoutingMockup';

// Visual shown on top of each selected-work card.
const VISUAL_HEIGHT = 'h-56 md:h-64';

const WorkVisual = ({ project }: { project: Project }) => {
  const { slug, title } = project;
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
  const image =
    images[slug] ??
    (project.image && { src: project.image.src, alt: project.image.alt });
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
  // No screenshot for these: a typographic panel built from the approved detail lines.
  const steps =
    slug === 'hope'
      ? ['Face', 'Voice', 'Text']
      : slug === 'rag-document-qa'
      ? ['PDF', 'FAISS', 'Answer']
      : null;
  if (!steps) return null;
  return (
    <div
      aria-hidden
      className={cn(
        'flex items-center justify-center gap-3 bg-accent-soft font-mono text-mono text-accent',
        VISUAL_HEIGHT
      )}
    >
      {steps.map((label) => (
        <span
          key={label}
          className='rounded-full border border-accent/30 bg-surface-1 px-4 py-2'
        >
          {label}
        </span>
      ))}
    </div>
  );
};

interface WorkCardProps {
  project: Project;
  span?: string;
  tone?: 'accent';
  // Full approved copy (result, team, my part, details) instead of the short home card.
  full?: boolean;
  index?: number;
}

const WorkCard = ({ project, span, tone, full, index = 0 }: WorkCardProps) => {
  const {
    slug,
    title,
    context,
    oneLiner,
    highlight,
    team,
    myPart,
    details,
    tags,
    links,
    note,
  } = project;
  return (
    <article
      id={slug}
      aria-labelledby={`work-${slug}`}
      className={cn(
        revealCard,
        'group flex flex-col overflow-hidden rounded-[24px] border transition-[transform,border-color,background-color] duration-300 ease-out motion-safe:hover:-translate-y-1',
        tone === 'accent'
          ? 'border-accent/25 bg-accent-soft hover:border-accent/50'
          : 'border-hairline bg-surface-1 hover:border-hairline-strong',
        span
      )}
      style={stepStyle(index)}
    >
      <WorkVisual project={project} />
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

        {full && highlight && (
          <p className='mt-4 max-w-prose text-body-sm text-ink-muted'>
            <span className='font-medium text-ink'>{highlight.label}:</span>{' '}
            {highlight.text}
          </p>
        )}
        {full && details && details.length > 0 && (
          <ul className='mt-4 max-w-prose list-disc space-y-1.5 pl-5 text-body-sm text-ink-muted marker:text-ink-subtle'>
            {details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {full && (team || myPart) && (
          <dl className='mt-4 max-w-prose space-y-2 text-body-sm text-ink-muted'>
            {team && (
              <div>
                <dt className='inline font-medium text-ink'>Team: </dt>
                <dd className='inline'>{team}</dd>
              </div>
            )}
            {myPart && (
              <div>
                <dt className='inline font-medium text-ink'>My part: </dt>
                <dd className='inline'>{myPart}</dd>
              </div>
            )}
          </dl>
        )}

        <div className='mt-auto pt-6'>
          <ChipList
            items={full ? tags : tags.slice(0, 4)}
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

export default WorkCard;
