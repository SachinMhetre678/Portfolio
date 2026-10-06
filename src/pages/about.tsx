import fs from 'fs';
import path from 'path';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import About from '@/modules/about';

interface AboutPageProps {
  hasResume: boolean;
}

const AboutPage: NextPage<AboutPageProps> = ({ hasResume }) => (
  <>
    <NextSeo title='About' />
    <Container>
      <PageHeading
        title='About'
        description='Background, experience and skills.'
      />
      <About hasResume={hasResume} />
    </Container>
  </>
);

// The resume link stays hidden until public/resume.pdf is added (docs/TODO.md).
export const getStaticProps: GetStaticProps<AboutPageProps> = async () => ({
  props: {
    hasResume: fs.existsSync(path.join(process.cwd(), 'public', 'resume.pdf')),
  },
});

export default AboutPage;
