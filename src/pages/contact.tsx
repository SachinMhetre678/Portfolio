import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import { resumeExists } from '@/common/libs/resume';
import Contact from '@/modules/contact';

interface ContactPageProps {
  hasResume: boolean;
}

const ContactPage: NextPage<ContactPageProps> = ({ hasResume }) => (
  <>
    <NextSeo title='Contact' />
    <Container>
      <Contact hasResume={hasResume} />
    </Container>
  </>
);

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => ({
  props: { hasResume: resumeExists() },
});

export default ContactPage;
