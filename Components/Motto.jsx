import Image from 'next/image';

export default function Motto() {
  return (
    <section className='mt-32 px-[6%] w-full'>
      <h3 className='text-[30px] text-white text-center'>Our Mission</h3>
      <h1 className='mt-6 text-[42px] text-white text-center'>
        Democratize Internet Commerce for Everyone
      </h1>
      <figure className='flex justify-center w-full'>
        <Image src='/img/motto.png' width={1280} height={500} alt='motto' />
      </figure>
    </section>
  );
}
