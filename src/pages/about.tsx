import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { resumeExists } from '@/common/libs/resume';
import About from '@/modules/about';

interface AboutPageProps {
  hasResume: boolean;
}

const AboutPage: NextPage<AboutPageProps> = ({ hasResume }) => (
  <>
    <NextSeo title='About' />
    <Container>
      <About hasResume={hasResume} />
    </Container>
  </>
);

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => ({
  props: { hasResume: resumeExists() },
});

export default AboutPage;
