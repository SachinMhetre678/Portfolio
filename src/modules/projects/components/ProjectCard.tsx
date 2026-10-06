import Image from '@/common/components/elements/Image';
import { ChipList } from '@/common/components/elements/Chip';
import TextLink from '@/common/components/elements/TextLink';
import { Project } from '@/common/types/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'compact' | 'full';
  headingLevel?: 'h2' | 'h3';
}

const ProjectCard = ({
  project,
  variant = 'full',
  headingLevel: Heading = 'h3',
}: ProjectCardProps) => {
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
    image,
  } = project;
  const isFull = variant === 'full';

  return (
    <article
      id={slug}
      aria-labelledby={`${slug}-title`}
      className='group rounded-card border border-hairline bg-surface-1 p-5 transition-colors duration-150 hover:border-hairline-strong hover:bg-surface-2 shadow-[0_1px_2px_rgb(22_23_26/0.04)] md:p-6 dark:shadow-none'
    >
      {isFull && image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes='(min-width: 768px) 720px, 100vw'
          className='mb-5 h-auto w-full rounded-control border border-hairline'
        />
      )}

      <div className='space-y-1'>
        <Heading id={`${slug}-title`} className='min-w-0 break-words text-h3'>
          {title}
        </Heading>
        {context && (
          <p className='font-mono text-mono text-ink-subtle'>{context}</p>
        )}
      </div>

      <p className='mt-3 text-body-sm text-ink-muted'>{oneLiner}</p>

      {highlight && (
        <p className='mt-3 text-body-sm text-ink-muted'>
          <span className='font-medium text-ink'>{highlight.label}:</span>{' '}
          {highlight.text}
        </p>
      )}

      {isFull && details && details.length > 0 && (
        <ul className='mt-4 list-disc space-y-1.5 pl-5 text-body-sm text-ink-muted marker:text-ink-subtle'>
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {isFull && (team || myPart) && (
        <dl className='mt-4 space-y-2 text-body-sm text-ink-muted'>
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

      <div className='mt-5'>
        <ChipList items={tags} chipClassName='group-hover:bg-surface-3' />
      </div>

      {(links.length > 0 || note) && (
        <div className='mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-hairline pt-4 text-body-sm'>
          {links.map(({ label, href }) => (
            <TextLink key={href} href={href} srLabel={`: ${title}`}>
              {label}
            </TextLink>
          ))}
          {note && <p className='text-ink-subtle'>{note}</p>}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
