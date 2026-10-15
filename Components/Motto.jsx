import Image from 'next/image';

export default function Motto() {
  return (
    <section className='mt-32 px-[6%] w-full'>
      <h3 className='font-medium text-white md:text-[28px] lg:text-[30px] text-xl sm:text-2xl text-center'>
        Our Mission
      </h3>
      <h1 className='mx-auto mt-4 sm:mt-5 max-w-5xl font-medium text-white md:text-[40px] lg:text-[42px] text-3xl sm:text-4xl text-center leading-tight lg:leading-[1.2]'>
        Democratize Internet Commerce for Everyone
      </h1>
      <figure className='flex justify-center w-full'>
        <Image
          src='/img/motto.png'
          width={1280}
          height={500}
          alt='motto'
          className='h-100 md:h-128.25 object-center'
        />
      </figure>
    </section>
  );
}
