import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Projects from '@/modules/projects/components/Projects';

const ProjectsPage: NextPage = () => (
  <>
    <NextSeo title='Projects' />
    <Container>
      <PageHeading
        title='Projects'
        description='Things I’ve built at work, in hackathons and at university.'
      />
      <Projects />
    </Container>
  </>
);

export default ProjectsPage;
