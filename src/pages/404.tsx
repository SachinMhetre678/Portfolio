import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { PillLink } from '@/common/components/elements/PillLink';

const Custom404: NextPage = () => (
  <>
    <NextSeo title='Page not found' noindex />
    <Container className='flex min-h-[70dvh] flex-col items-start justify-center gap-6 space-y-0 md:space-y-0'>
      <p className='font-mono text-mono text-ink-subtle'>404</p>
      <div className='space-y-3'>
        <h1 className='text-h1-mobile md:text-h1'>Page not found</h1>
        <p className='text-body-lg text-ink-subtle'>
          This page doesn&apos;t exist or has moved.
        </p>
      </div>
      <PillLink href='/'>Back to home</PillLink>
    </Container>
  </>
);

export default Custom404;
