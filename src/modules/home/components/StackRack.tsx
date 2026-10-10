import Image from 'next/image';

import IconBlock from '@/common/components/elements/IconBlock';

// Edit the copy and the stack here. Icons live in public/icons/stack (sources: docs/DESIGN_SYSTEM.md).
const HEADING = { title: 'My stack', caption: 'Hover or tap a block' };
const AVATAR = {
  src: '/images/sachin-3d-pointing.webp',
  alt: 'Cartoon illustration of Sachin pointing at his tech stack',
};

interface Item {
  name: string;
  icon: string; // file name in public/icons/stack
  mono?: boolean; // single-colour logo, drawn dark on a light plate so it reads in both themes
  plate?: boolean; // dark-ish colour logo that needs the light plate too
}
interface Unit {
  id: string; // becomes data-strobi="rack-<id>"
  label: string;
  items: Item[];
}

const UNITS: Unit[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: [
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'C/C++', icon: 'cplusplus' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express', mono: true },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs', mono: true },
      { name: 'SvelteKit', icon: 'svelte' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    id: 'data',
    label: 'Data',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql', mono: true },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & tools',
    items: [
      { name: 'AWS', icon: 'aws', mono: true },
      { name: 'Docker', icon: 'docker' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub Actions', icon: 'githubactions', plate: true },
      { name: 'Jenkins', icon: 'jenkins', mono: true },
      { name: 'Postman', icon: 'postman' },
    ],
  },
];

const Block = ({ name, icon, mono, plate }: Item) => {
  return (
    <li
      tabIndex={0}
      data-mascot-avoid
      className='rack-block-wrap group relative flex w-20 flex-col items-center gap-2 rounded-control focus-visible:outline-offset-4'
    >
      <IconBlock icon={icon} mono={mono} plate={plate} />
      <span className='sr-only'>{name}</span>
      <span
        aria-hidden='true'
        className='text-center text-xs leading-tight text-ink-muted'
      >
        {name}
      </span>
      <span
        aria-hidden='true'
        className='pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-chip border border-hairline-strong bg-surface-1 px-2 py-1 font-mono text-mono text-ink opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100'
      >
        {name}
      </span>
    </li>
  );
};

const StackRack = () => (
  <section
    aria-labelledby='skills-title'
    data-strobi-section='home-skills'
    className='rack-scope border-t border-hairline'
  >
    <div className='mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24'>
      <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
        <h2
          id='skills-title'
          className='scroll-mt-28 text-h1-mobile md:text-h1'
        >
          {HEADING.title}
        </h2>
        <p className='text-body-sm text-ink-subtle'>{HEADING.caption}</p>
      </div>

      <div className='mt-10 grid items-end gap-8 md:mt-16 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-x-3 md:gap-y-12'>
        <div className='relative flex justify-center md:justify-end'>
          <span aria-hidden='true' className='rack-spotlight' />
          <span aria-hidden='true' className='rack-floor-glow' />
          <span aria-hidden='true' className='rack-contact-shadow' />
          <Image
            src={AVATAR.src}
            alt={AVATAR.alt}
            width={1024}
            height={1536}
            sizes='(min-width: 768px) 500px, 190px'
            className='rack-float relative h-[280px] w-auto md:h-[730px]'
          />
        </div>

        <ul className='rack-cabinet'>
          {UNITS.map(({ id, label, items }) => (
            <li key={id} className='list-none'>
              <div
                role='group'
                aria-label={label}
                data-strobi={`rack-${id}`}
                className='rack-unit'
              >
                <div className='flex items-center justify-between'>
                  <span className='font-mono text-mono text-ink-subtle'>
                    {label}
                  </span>
                  <span aria-hidden='true' className='flex gap-1.5'>
                    <i className='rack-led' />
                    <i className='rack-led' />
                    {items.length > 3 && <i className='rack-led' />}
                  </span>
                </div>
                <ul className='mt-2 flex flex-wrap gap-x-3 gap-y-3'>
                  {items.map((item) => (
                    <Block key={item.name} {...item} />
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default StackRack;
