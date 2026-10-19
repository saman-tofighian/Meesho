import Image from 'next/image';

const cards = [
  {
    id: 1,
    image: '/img/1.png',
    className: 'left-0 top-0 w-[20%] h-[50%]',
    cardClass: 'left-0 right-[9.72%] top-0 h-full',
    imageClass:
      'left-1/2 top-1/2 h-[83.33%] w-[48%] -translate-x-1/2 -translate-y-1/2',
  },
  {
    id: 2,
    image: '/img/2.png',
    className: 'left-[20%] top-0 w-[30%] h-[50%]',
    cardClass: 'left-0 top-0 h-[72.22%] w-[83.33%]',
    imageClass: 'right-[10%] bottom-[27.78%] h-[64.58%] w-full',
  },
  {
    id: 3,
    image: '/img/3.png',
    className: 'left-1/2 top-0 w-[20%] h-[50%]',
    cardClass: 'left-1/2 top-0 h-[72.22%] w-[72.22%] -translate-x-1/2',
    imageClass:
      'left-1/2 bottom-[27.78%] h-[72.22%] w-[72.22%] -translate-x-1/2',
  },
  {
    id: 4,
    image: '/img/4.png',
    className: 'left-[70%] top-0 w-[30%] h-[50%]',
    cardClass: 'right-0 top-0 h-[72.22%] w-[83.33%]',
    imageClass: 'left-1/2 bottom-[27.78%] h-[64.58%] w-full -translate-x-1/2',
  },
  {
    id: 5,
    image: '/img/5.png',
    className: 'left-0 top-1/2 w-[30%] h-1/2',
    cardClass: 'bottom-0 left-0 right-[16.67%] h-[72.22%]',
    imageClass:
      'left-1/2 top-1/2 h-[56.25%] w-full -translate-x-1/2 -translate-y-1/2',
  },
  {
    id: 6,
    image: '/img/6.png',
    className: 'left-[30%] top-1/2 w-[20%] h-1/2',
    cardClass: 'bottom-0 left-1/2 h-[72.22%] w-[72.22%] -translate-x-1/2',
    imageClass: 'bottom-0 left-1/2 h-full w-[72.22%] -translate-x-1/2',
  },
  {
    id: 7,
    image: '/img/7.png',
    className: 'left-1/2 top-1/2 w-[30%] h-1/2',
    cardClass: 'bottom-0 left-1/2 h-[72.22%] w-[83.33%] -translate-x-1/2',
    imageClass: 'bottom-0 left-1/2 h-[88.64%] w-full -translate-x-1/2',
  },
  {
    id: 8,
    image: '/img/8.png',
    className: 'left-[80%] top-1/2 w-[20%] h-1/2',
    cardClass: 'bottom-0 left-1/2 h-full w-[72.22%] -translate-x-1/2',
    imageClass: 'bottom-0 right-[5.38%] h-[83.33%] w-[74.52%]',
  },
];

export default function GrowingSection() {
  return (
    <section className='px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full overflow-hidden'>
      <div className='relative mx-auto max-w-[1152px] lg:h-[576px] min-h-[700px] sm:min-h-[720px] lg:min-h-0'>
        {/* Image grid */}
        <div className='lg:block absolute inset-0 gap-4 sm:gap-5 grid grid-cols-2 sm:grid-cols-4'>
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative min-h-[190px] overflow-hidden rounded-[24px]  lg:absolute lg:min-h-0 lg:overflow-visible lg:rounded-none lg:bg-transparent ${card.className}`}
            >
              <div
                className={`absolute hidden rounded-[32px]  lg:block ${card.cardClass}`}
              />

              <div
                className={`absolute inset-0 lg:inset-auto lg:absolute ${card.imageClass}`}
              >
                <Image
                  src={card.image}
                  alt=''
                  fill
                  sizes='(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 288px'
                  className='object-contain'
                />
              </div>
            </div>
          ))}
        </div>

        {/* Center heading */}
        <div className='z-10 absolute inset-0 flex justify-center items-center pointer-events-none'>
          <h2 className='font-bold text-white lg:text-[30px] text-xl sm:text-2xl text-center tracking-[0.2em] lg:tracking-[8px]'>
            WE’RE GROWING
          </h2>
        </div>
      </div>
    </section>
  );
}
