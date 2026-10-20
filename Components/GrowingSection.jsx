import Image from 'next/image';

const cards = [
  { id: 1, image: '/img/1.png', width: 230, height: 288 },
  { id: 2, image: '/img/2.png', width: 345, height: 288 },
  { id: 3, image: '/img/3.png', width: 230, height: 288 },
  { id: 4, image: '/img/4.png', width: 345, height: 288 },
  { id: 5, image: '/img/5.png', width: 345, height: 288 },
  { id: 6, image: '/img/6.png', width: 230, height: 288 },
  { id: 7, image: '/img/7.png', width: 345, height: 288 },
  { id: 8, image: '/img/8.png', width: 230, height: 288 },
];

export default function GrowingSection() {
  return (
    <section className='px-3 sm:px-5 lg:px-[6%] py-10 lg:py-16 w-full overflow-hidden'>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='hidden lg:block relative w-full aspect-2/1'>
          {cards.map((item, index) => {
            const positions = [
              'left-0 top-0',
              'left-[20%] top-0',
              'left-[50%] top-0',
              'left-[70%] top-0',
              'left-0 top-1/2',
              'left-[30%] top-1/2',
              'left-[50%] top-1/2',
              'left-[80%] top-1/2',
            ];

            return (
              <div
                key={item.id}
                className={`absolute h-1/2 ${
                  index === 0 || index === 2 || index === 5 || index === 7
                    ? 'w-[20%]'
                    : 'w-[30%]'
                } ${positions[index]}`}
              >
                <div
                  className='top-1/2 left-1/2 absolute'
                  style={{
                    width: `${item.width}px`,
                    height: `${item.height}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src={item.image}
                    alt=''
                    fill
                    sizes={`${item.width}px`}
                    className='object-contain'
                    priority={item.id <= 4}
                  />
                </div>
              </div>
            );
          })}

          <h2 className='z-10 absolute inset-0 flex justify-center items-center font-bold text-[30px] text-white text-center tracking-[8px] whitespace-nowrap pointer-events-none'>
            WE’RE GROWING
          </h2>
        </div>

        <div className='lg:hidden'>
          <div className='items-center gap-x-2 gap-y-3 sm:gap-x-4 sm:gap-y-5 grid grid-cols-2 sm:grid-cols-4'>
            {cards.map((item) => (
              <div
                key={item.id}
                className='relative flex justify-center items-center min-w-0'
                style={{
                  aspectRatio: `${item.width} / ${item.height}`,
                }}
              >
                <Image
                  src={item.image}
                  alt=''
                  fill
                  sizes='(max-width: 639px) 47vw, 23vw'
                  className='object-contain'
                />
              </div>
            ))}
          </div>

          <h2 className='mt-6 sm:mt-8 font-bold text-[#36447A] text-lg sm:text-2xl text-center tracking-[0.12em] sm:tracking-[0.2em]'>
            WE’RE GROWING
          </h2>
        </div>
      </div>
    </section>
  );
}
