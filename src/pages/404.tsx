import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { ButtonLink } from '@/common/components/elements/Button';

const Custom404: NextPage = () => (
  <>
    <NextSeo title='Page not found' noindex />
    <section className='flex min-h-[60dvh] flex-col items-start justify-center gap-6'>
      <p className='font-mono text-mono text-ink-subtle'>404</p>
      <div className='space-y-3'>
        <h1 className='text-h1-mobile md:text-h1'>Page not found</h1>
        <p className='text-body-lg text-ink-subtle'>
          This page doesn&apos;t exist or has moved.
        </p>
      </div>
      <ButtonLink href='/'>Back to home</ButtonLink>
    </section>
  </>
);

export default Custom404;
