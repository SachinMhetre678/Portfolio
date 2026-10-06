import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import Projects from '@/modules/projects/components/Projects';

const ProjectsPage: NextPage = () => (
  <>
    <NextSeo title='Projects' />
    <Container>
      <Projects />
    </Container>
  </>
);

export default ProjectsPage;
