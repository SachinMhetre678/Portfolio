import { ChipList } from '@/common/components/elements/Chip';
import TextLink from '@/common/components/elements/TextLink';
import { revealCard, step } from '@/common/libs/motion';
import cn from '@/common/libs/cn';
import { Project } from '@/common/types/projects';

const EarlierWorkList = ({ projects }: { projects: Project[] }) => (
  <ul className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
    {projects.map(({ slug, title, oneLiner, tags, links }, index) => (
      <li
        key={slug}
        id={slug}
        className={cn(
          revealCard,
          'flex flex-col rounded-[20px] border border-hairline bg-surface-1 p-5 transition-[transform,border-color] duration-300 ease-out hover:border-hairline-strong motion-safe:hover:-translate-y-1'
        )}
        style={step(index % 3)}
      >
        <h3 className='break-words text-h3'>{title}</h3>
        <p className='mt-2 text-body-sm text-ink-muted'>{oneLiner}</p>
        <div className='mt-auto space-y-4 pt-5'>
          <ChipList items={tags} chipClassName='rounded-full' />
          <div className='flex flex-wrap gap-x-5 gap-y-1 text-body-sm'>
            {links.map(({ label, href }) => (
              <TextLink key={href} href={href} srLabel={`: ${title}`}>
                {label}
              </TextLink>
            ))}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default EarlierWorkList;
