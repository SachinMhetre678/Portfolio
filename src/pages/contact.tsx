import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Contact from '@/modules/contact';

const ContactPage: NextPage = () => (
  <>
    <NextSeo title='Contact' />
    <Container>
      <PageHeading
        title='Contact'
        description='The fastest way to reach me is email.'
      />
      <Contact />
    </Container>
  </>
);

export default ContactPage;
