import Router from 'next/router';
import { BiRocket as RocketIcon } from 'react-icons/bi';

import Button from '@/common/components/elements/Button';
import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const Services = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title="What I've been working on" />
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
          I&apos;m Sachin, an bachlor's student at the University
          of Symbiosis, currently pursuing a degree in Computer Science and Engineering.
        </p>
      </div>
      <Card className='p-8 bg-neutral-100 border dark:border-none rounded-xl space-y-4'>
        <div className='flex gap-2 items-center'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'>Lets work together!</h3>
        </div>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
          Full-Stack Developer and Aspiring ML Engineer skilled in web applications and data solutions, seeking a Summer 2024 internship to make an impact<br />
          Feel free to email me to see how I can contribute.
        </p>
        <Button
          data-umami-event='Click Contact Button'
          onClick={() => Router.push('/contact')}
        >
          Contact me
        </Button>
      </Card>
    </section>
  );
};

export default Services;
