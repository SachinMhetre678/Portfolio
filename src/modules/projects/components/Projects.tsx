import Link from 'next/link';
import { useRouter } from 'next/router';

import SectionHeading from '@/common/components/elements/SectionHeading';
import {
  EARLIER_PROJECTS,
  FEATURED_PROJECTS,
  PROJECT_CATEGORIES,
} from '@/common/constant/projects';
import cn from '@/common/libs/cn';
import { Project } from '@/common/types/projects';

import EarlierWorkList from './EarlierWorkList';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { query } = useRouter();
  const requested = typeof query.category === 'string' ? query.category : 'all';
  const active = PROJECT_CATEGORIES.some(({ id }) => id === requested)
    ? requested
    : 'all';

  const inCategory = (project: Project) =>
    active === 'all' ||
    project.categories.some((category) => category === active);
  const featured = FEATURED_PROJECTS.filter(inCategory);
  const earlier = EARLIER_PROJECTS.filter(inCategory);

  return (
    <>
      <nav aria-label='Filter projects by category'>
        <ul className='flex flex-wrap gap-2'>
          {PROJECT_CATEGORIES.map(({ id, label }) => {
            const isActive = id === active;
            return (
              <li key={id}>
                <Link
                  href={
                    id === 'all'
                      ? '/projects'
                      : { pathname: '/projects', query: { category: id } }
                  }
                  scroll={false}
                  shallow
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'inline-flex min-h-[36px] items-center rounded-control border px-3 text-body-sm transition-colors duration-150 pointer-coarse:min-h-[44px]',
                    isActive
                      ? 'border-transparent bg-accent-soft text-ink'
                      : 'border-hairline text-ink-subtle hover:border-hairline-strong hover:bg-surface-2 hover:text-ink'
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {featured.length === 0 && earlier.length === 0 && (
        <p role='status' className='text-body text-ink-subtle'>
          No projects in this category yet.
        </p>
      )}

      {featured.length > 0 && (
        <section aria-labelledby='featured-title'>
          <SectionHeading id='featured-title' title='Featured' />
          <div className='space-y-4'>
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {earlier.length > 0 && (
        <section aria-labelledby='earlier-title'>
          <SectionHeading id='earlier-title' title='Earlier work' />
          <EarlierWorkList projects={earlier} />
        </section>
      )}
    </>
  );
};

export default Projects;
