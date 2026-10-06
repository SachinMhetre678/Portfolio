import {
  PiGraduationCap as EducationIcon,
  PiMapPin as LocationIcon,
} from 'react-icons/pi';

import { ButtonLink } from '@/common/components/elements/Button';
import SectionHeading from '@/common/components/elements/SectionHeading';
import TextLink from '@/common/components/elements/TextLink';
import { FEATURED_PROJECTS } from '@/common/constant/projects';
import ProjectCard from '@/modules/projects/components/ProjectCard';

const HOME_FEATURED_COUNT = 3;

const Home = () => (
  <>
    <section aria-labelledby='intro-title' className='space-y-6'>
      <p className='text-body-lg text-ink-subtle'>
        Hi, I&apos;m Sachin{' '}
        <span
          role='img'
          aria-label='waving hand'
          className='inline-block origin-[70%_70%] motion-safe:animate-wave-once'
        >
          👋
        </span>
      </p>
      <h1 id='intro-title' className='text-display-mobile md:text-display'>
        I build test automation and the tools around it.
      </h1>
      <p className='max-w-prose text-body-lg text-ink-muted'>
        Associate QA Automation Engineer at Vimo, working with Java, Playwright,
        Cucumber and Jenkins. B.Tech CSE, Symbiosis Institute of Technology,
        2026.
      </p>
      <ul className='flex flex-col gap-2 text-body-sm text-ink-subtle sm:flex-row sm:gap-6'>
        <li className='flex items-center gap-2'>
          <LocationIcon size={16} aria-hidden />
          Based in Pune, Maharashtra
        </li>
        <li className='flex items-center gap-2'>
          <EducationIcon size={16} aria-hidden />
          B.Tech CSE, Symbiosis Institute of Technology (2026)
        </li>
      </ul>
    </section>

    <section aria-label='Bio'>
      <p className='max-w-prose text-body text-ink-muted'>
        At Vimo I write end-to-end UI tests with Playwright and Cucumber, and I
        built{' '}
        <span className='font-medium text-accent'>
          the system that sorts our nightly regression failures
        </span>{' '}
        and routes each one to its owner. Before that I built full-stack apps
        with Spring Boot, React and SvelteKit, and a few AI/ML projects. My team
        won FOSS Hack 2025 with Scribly.
      </p>
    </section>

    <section aria-labelledby='now-title'>
      <SectionHeading id='now-title' title='What I’m working on' />
      <p className='max-w-prose text-body text-ink-muted'>
        Right now: making a 360-scenario Playwright/Cucumber regression suite
        faster to triage, and keeping its Jenkins runs stable.
      </p>
    </section>

    <section aria-labelledby='featured-title'>
      <SectionHeading
        id='featured-title'
        title='Featured projects'
        action={
          <TextLink href='/projects' className='shrink-0 text-body-sm'>
            View all projects
          </TextLink>
        }
      />
      <div className='space-y-4'>
        {FEATURED_PROJECTS.slice(0, HOME_FEATURED_COUNT).map((project) => (
          <ProjectCard key={project.slug} project={project} variant='compact' />
        ))}
      </div>
    </section>

    <section
      aria-labelledby='cta-title'
      className='rounded-card border border-hairline bg-surface-1 p-5 md:p-6'
    >
      <h2 id='cta-title' className='text-h2'>
        Get in touch
      </h2>
      <p className='mt-2 max-w-prose text-body text-ink-muted'>
        Questions about a project, or want to talk about test automation? Send
        me a message.
      </p>
      <ButtonLink href='/contact' className='mt-5'>
        Get in touch
      </ButtonLink>
    </section>
  </>
);

export default Home;
