import Image from 'next/image';

export default function AwardsSection() {
  return (
    <section className='bg-black mt-20 px-5 sm:px-8 lg:px-[6%] py-12 sm:py-16 w-full overflow-hidden'>
      <div className='flex lg:flex-row flex-col justify-center items-center gap-8 sm:gap-10 lg:gap-4 mx-auto max-w-6xl min-h-75 lg:min-h-90'>
        <div className='relative w-37.5 sm:w-47.5 lg:w-[22%] h-37.5 sm:h-47.5 lg:h-52.5 shrink-0'>
          <Image
            src='/img/coin.png'
            alt='Coin illustration'
            fill
            sizes='(max-width: 640px) 150px, (max-width: 1024px) 190px, 22vw'
            className='object-contain'
          />
        </div>

        <div className='z-10 relative flex flex-col lg:flex-1 items-center w-full min-w-0 text-center'>
          <h2 className='font-bold text-[#e8b21a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight'>
            Reimagining
          </h2>

          <p className='mt-2 font-normal text-white lg:text-[54px] text-3xl sm:text-4xl md:text-5xl'>
            e-commerce
          </p>

          <div className='mt-6 sm:mt-8 px-6 sm:px-8 py-3 border border-white rounded-full'>
            <button
              type='button'
              className='font-bold text-white text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.35em] cursor-pointer'
            >
              Build for Bharat
            </button>
          </div>
        </div>

        <div className='relative mt-7 md:mt-0 w-32.5 sm:w-41.25 lg:w-[22%] h-47.5 sm:h-60 lg:h-75 shrink-0'>
          <Image
            src='/img/phone.png'
            alt='Phone illustration'
            fill
            sizes='(max-width: 640px) 130px, (max-width: 1024px) 165px, 22vw'
            className='object-contain'
          />
        </div>
      </div>
    </section>
  );
}
