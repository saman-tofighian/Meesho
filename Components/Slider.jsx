import Image from 'next/image';
import { useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const investors = [
  { id: 1, name: 'Investor F', image: '/img/F.png' },
  { id: 2, name: 'Investor E', image: '/img/E.png' },
  { id: 3, name: 'Investor D', image: '/img/D.png' },
  { id: 4, name: 'Investor C', image: '/img/C.png' },
];

export default function Slider() {
  const swiperRef = useRef(null);

  return (
    <section className='mt-7 lg:mt-20 px-[6%] py-10 w-full overflow-hidden'>
      <div className='mx-auto max-w-360'>
        <h2 className='mb-8 lg:mb-20 font-bold text-white text-2xl sm:text-3xl text-center'>
          Marquee investors believe in us
        </h2>

        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          speed={700}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={20}
          centeredSlides={false}
          watchOverflow={false}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
          }}
          className='pb-2! investors-swiper'
        >
          {investors.map((investor) => (
            <SwiperSlide key={investor.id}>
              <div className='relative w-full h-32.5 sm:h-37.5'>
                <Image
                  src={investor.image}
                  alt={investor.name}
                  fill
                  sizes='(max-width: 479px) 88vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 22vw'
                  className='object-contain'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='flex justify-center items-center gap-4 mt-15'>
          <button
            type='button'
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label='Previous investors'
            className='flex justify-center items-center hover:bg-white border border-white/30 rounded-full w-11 h-11 text-white hover:text-black transition-colors duration-300 cursor-pointer'
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              className='w-5 h-5'
              aria-hidden='true'
            >
              <path
                d='M15 18L9 12L15 6'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>

          <button
            type='button'
            onClick={() => swiperRef.current?.slideNext()}
            aria-label='Next investors'
            className='flex justify-center items-center hover:bg-white border border-white/30 rounded-full w-11 h-11 text-white hover:text-black transition-colors duration-300 cursor-pointer'
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              className='w-5 h-5'
              aria-hidden='true'
            >
              <path
                d='M9 18L15 12L9 6'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
