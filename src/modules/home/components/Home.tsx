import { Copyright } from '@/common/components/layouts/SidebarContent';

import Hero from './Hero';
import { Closing, ProofStrip, SelectedWork, SkillsStrip } from './Sections';

const Home = () => (
  <>
    <Hero />
    <ProofStrip />
    <SelectedWork />
    <SkillsStrip />
    <Closing />
    <footer className='mx-auto max-w-7xl px-4 pb-10 md:px-8'>
      <Copyright />
    </footer>
  </>
);

export default Home;
