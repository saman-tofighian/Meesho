import Header from '@/Components/Header';
import Motto from '@/Components/Motto';

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full overflow-x-hidden'>
        <Motto />
      </main>
    </>
  );
}
