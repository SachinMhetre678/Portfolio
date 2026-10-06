import { ChipList } from '@/common/components/elements/Chip';
import TextLink from '@/common/components/elements/TextLink';
import { Project } from '@/common/types/projects';

const EarlierWorkList = ({ projects }: { projects: Project[] }) => (
  <ul className='divide-y divide-hairline border-y border-hairline'>
    {projects.map(({ slug, title, oneLiner, tags, links }) => (
      <li
        key={slug}
        id={slug}
        className='grid gap-3 py-5 md:grid-cols-[1fr_auto] md:gap-6'
      >
        <div className='min-w-0 space-y-2'>
          <h3 className='break-words text-body font-medium text-ink'>
            {title}
          </h3>
          <p className='max-w-prose text-body-sm text-ink-muted'>{oneLiner}</p>
          <ChipList items={tags} />
        </div>
        <div className='flex gap-4 text-body-sm md:flex-col md:items-end md:gap-1'>
          {links.map(({ label, href }) => (
            <TextLink key={href} href={href} srLabel={`: ${title}`}>
              {label}
            </TextLink>
          ))}
        </div>
      </li>
    ))}
  </ul>
);

export default EarlierWorkList;
