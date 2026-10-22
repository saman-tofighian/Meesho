import Footer from '@/Components/Footer';
import GrowingSection from '@/Components/GrowingSection';
import Header from '@/Components/Header';
import InvestorGroup from '@/Components/InvestorGroup';
import Motto from '@/Components/Motto';
import OperateSection from '@/Components/OperateSection';
import Slider from '@/Components/Slider';
import Stealing from '@/Components/Stealing';

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full overflow-x-hidden'>
        <Motto />
        <OperateSection />
        <GrowingSection />
        <Slider />
        <InvestorGroup />
        <Stealing />
        <Footer />
      </main>
    </>
  );
}
