import Hero from './Hero';
import {
  AboutBlock,
  Closing,
  ProofStrip,
  SelectedWork,
  SkillsStrip,
} from './Sections';

const Home = () => (
  <>
    <Hero />
    <ProofStrip />
    <AboutBlock />
    <SelectedWork />
    <SkillsStrip />
    <Closing />
  </>
);

export default Home;
