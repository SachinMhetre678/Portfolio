import Hero from './Hero';
import {
  AboutBlock,
  Closing,
  ProofStrip,
  SelectedWork,
} from './Sections';
import StackRack from './StackRack';

const Home = () => (
  <>
    <Hero />
    <ProofStrip />
    <AboutBlock />
    <SelectedWork />
    <StackRack />
    <Closing />
  </>
);

export default Home;
