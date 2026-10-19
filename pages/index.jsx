import Footer from '@/Components/Footer';
import GrowingSection from '@/Components/GrowingSection';
import Header from '@/Components/Header';
import Motto from '@/Components/Motto';
import OperateSection from '@/Components/OperateSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full overflow-x-hidden'>
        <Motto />
        <OperateSection />
        <GrowingSection />
        <Footer />
      </main>
    </>
  );
}
