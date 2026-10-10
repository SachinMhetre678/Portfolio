import Link from 'next/link';
import { useRouter } from 'next/router';

import PageHeader from '@/common/components/elements/PageHeader';
import {
  EARLIER_PROJECTS,
  FEATURED_PROJECTS,
  PROJECT_CATEGORIES,
} from '@/common/constant/projects';
import cn from '@/common/libs/cn';
import { reveal, step } from '@/common/libs/motion';
import { Project } from '@/common/types/projects';

import EarlierWorkList from './EarlierWorkList';
import WorkCard from './WorkCard';

// Card order and layout (12-column md+ grid). Same four as the home page first, then the rest.
const LAYOUT: Record<string, { span: string; tone?: 'accent' }> = {
  scribly: { span: 'md:col-span-7', tone: 'accent' },
  'regression-failure-management': { span: 'md:col-span-5' },
  hope: { span: 'md:col-span-5' },
  'hotel-management-system': { span: 'md:col-span-7' },
  'rag-document-qa': { span: 'md:col-span-7' },
  'personal-finance-management': { span: 'md:col-span-5' },
};
const ORDER = Object.keys(LAYOUT);
const rank = (project: Project) => ORDER.indexOf(project.slug);

const Projects = () => {
  const { query } = useRouter();
  const requested = typeof query.category === 'string' ? query.category : 'all';
  const active = PROJECT_CATEGORIES.some(({ id }) => id === requested)
    ? requested
    : 'all';

  const inCategory = (project: Project) =>
    active === 'all' ||
    project.categories.some((category) => category === active);
  const featured = FEATURED_PROJECTS.filter(inCategory).sort(
    (a, b) => rank(a) - rank(b)
  );
  const earlier = EARLIER_PROJECTS.filter(inCategory);

  return (
    <>
      <PageHeader
        badge='Projects'
        title='Things I’ve built'
        subtitle='at work, in hackathons and at university.'
      />

      <nav
        aria-label='Filter projects by category'
        className={reveal}
        style={step(4)}
      >
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
                    'inline-flex h-10 items-center rounded-full border px-4 text-body-sm transition-colors duration-150 pointer-coarse:h-11',
                    isActive
                      ? 'border-accent/40 bg-accent-soft text-ink'
                      : 'border-hairline bg-surface-1 text-ink-subtle hover:border-hairline-strong hover:bg-surface-2 hover:text-ink'
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
          <h2 id='featured-title' className='text-h1-mobile md:text-h1'>
            Selected work
          </h2>
          <div className='mt-8 grid gap-4 md:grid-cols-12'>
            {featured.map((project, index) => (
              <WorkCard
                key={project.slug}
                project={project}
                span={LAYOUT[project.slug]?.span ?? 'md:col-span-6'}
                tone={LAYOUT[project.slug]?.tone}
                index={index % 2}
                full
              />
            ))}
          </div>
        </section>
      )}

      {earlier.length > 0 && (
        <section
          aria-labelledby='earlier-title'
          data-strobi-section='earlier-work'
        >
          <h2 id='earlier-title' className='text-h1-mobile md:text-h1'>
            Earlier work
          </h2>
          <div className='mt-8'>
            <EarlierWorkList projects={earlier} />
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
