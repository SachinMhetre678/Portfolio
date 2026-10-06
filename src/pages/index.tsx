import { NextPage } from 'next';

import Container from '@/common/components/elements/Container';
import Home from '@/modules/home';

const HomePage: NextPage = () => (
  <Container>
    <Home />
  </Container>
);

export default HomePage;
