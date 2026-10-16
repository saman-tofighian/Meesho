import Image from 'next/image';

const groups = [
  {
    title: 'SUPPLIERS',
    description: (
      <>
        We take ZERO commissions
        <br />
        from suppliers to list products
      </>
    ),
    className: 'left-[4.5%] top-[37%]',
    image: '/img/supplier.png',
    imageClass: 'left-0 top-0',
  },
  {
    title: 'CUSTOMERS',
    description: (
      <>
        We want to
        <br />
        help a billion
        <br />
        Indians shop online
      </>
    ),
    className: 'right-[8%] top-[11%]',
    image: '/img/customer.png',
    imageClass: 'right-0 top-0',
  },
  {
    title: 'RESELLERS',
    description: (
      <>
        We help anyone start
        <br />
        a virtual store and
        <br />
        sell online without
        <br />
        any investments
      </>
    ),
    className: 'right-[7.5%] top-[59%]',
    image: '/img/reseller.png',
    imageClass: 'right-0 top-0',
  },
];

export default function OperateSection() {
  return (
    <section
      id='operate'
      className='isolate relative bg-[#1D58DB] mt-20 px-[6%] w-full overflow-hidden text-white'
    >
      <div className='relative mx-auto px-6 sm:px-10 lg:px-0 py-10 lg:py-0 max-w-360 lg:h-182.5 min-h-182.5'>
        <h2 className='lg:top-[5.5%] lg:left-[3%] z-20 lg:absolute relative font-bold text-sm sm:text-base tracking-[0.32em]'>
          HOW WE OPERATE
        </h2>
        <svg
          aria-hidden='true'
          viewBox='0 0 1440 730'
          preserveAspectRatio='none'
          className='hidden lg:block absolute inset-0 w-full h-full pointer-events-none'
          fill='none'
        >
          <path
            d='M 375 285 H 640 V 340'
            stroke='white'
            strokeWidth='1.5'
            opacity='0.8'
          />

          <path
            d='M 745 205 V 125 H 1050'
            stroke='white'
            strokeWidth='1.5'
            opacity='0.9'
          />

          <path
            d='M 810 410 H 1015'
            stroke='white'
            strokeWidth='1.5'
            opacity='0.9'
          />

          <path
            d='M 1120 280 V 355'
            stroke='white'
            strokeWidth='1.5'
            opacity='0.9'
          />

          <path d='M 1045 125 h 8 v 8' stroke='white' strokeWidth='1.5' />

          <path d='M 1008 410 h 8 v -8' stroke='white' strokeWidth='1.5' />
        </svg>
        <div className='lg:block lg:top-[35%] lg:left-[4.5%] lg:absolute relative flex items-center gap-5 mt-12 lg:mt-0'>
          <div className='relative flex justify-center items-center bg-[#101D39] rounded-full w-28 sm:w-32 lg:w-28 h-28 sm:h-32 lg:h-28 overflow-hidden shrink-0'>
            <Image
              src='/img/supplier.png'
              alt='Supplier illustration'
              fill
              sizes='128px'
              className='object-contain'
            />
          </div>

          <div className='lg:mt-3'>
            <h3 className='font-bold text-base sm:text-lg tracking-[0.2em]'>
              SUPPLIERS
            </h3>
            <p className='mt-4 text-white/90 text-xs leading-5 tracking-wide'>
              We take ZERO commissions
              <br />
              from suppliers to list products
            </p>
          </div>
        </div>
        <div className='hidden lg:block top-[34%] left-[19%] absolute w-20 h-36'>
          <Image
            src='/img/products.png'
            alt='Products listed by suppliers'
            fill
            sizes='80px'
            className='object-contain'
          />
        </div>
        <div className='lg:block lg:top-[10%] lg:right-[8%] lg:absolute relative flex flex-row-reverse items-center gap-5 mt-10 lg:mt-0 lg:w-55'>
          <div className='relative bg-[#101D39] lg:ml-auto rounded-full w-28 sm:w-32 lg:w-24 h-28 sm:h-32 lg:h-24 overflow-hidden shrink-0'>
            <Image
              src='/img/customer.png'
              alt='Customer illustration'
              fill
              sizes='128px'
              className='object-contain'
            />
          </div>

          <div className='lg:mt-3 lg:text-right'>
            <h3 className='font-bold text-base sm:text-lg tracking-[0.2em]'>
              CUSTOMERS
            </h3>
          </div>
        </div>
        <p className='lg:top-[13%] lg:left-[57%] lg:absolute mt-6 lg:mt-0 text-white/90 text-xs leading-5 tracking-wide'>
          We want to
          <br />
          help a billion
          <br />
          Indians shop online
        </p>
        <div className='lg:block lg:top-[59%] lg:right-[7.5%] lg:absolute relative flex items-center gap-5 mt-10 lg:mt-0 lg:w-55'>
          <div className='relative bg-[#101D39] lg:mx-auto rounded-full w-28 sm:w-32 lg:w-24 h-28 sm:h-32 lg:h-24 overflow-hidden shrink-0'>
            <Image
              src='/img/reseller.png'
              alt='Reseller illustration'
              fill
              sizes='128px'
              className='object-contain'
            />
          </div>
          <div className='lg:mt-3 lg:text-center'>
            <h3 className='font-bold text-base sm:text-lg tracking-[0.2em]'>
              RESELLERS
            </h3>
          </div>
        </div>
        <p className='lg:top-[39%] lg:left-[65%] lg:absolute mt-5 lg:mt-0 text-white/90 text-xs leading-normal tracking-wide'>
          We help anyone start
          <br />
          a virtual store and
          <br />
          sell online without
          <br />
          any investments
        </p>
        <div className='lg:bottom-0 lg:left-[39%] lg:absolute relative mx-auto mt-12 lg:mt-0 w-full lg:w-77.5 max-w-92.5 h-77.5 lg:h-102.5'>
          <Image
            src='/img/hand-phone.png'
            alt='Hand holding the Meesho app'
            fill
            priority
            sizes='(max-width: 1024px) 370px, 310px'
            className='object-bottom object-contain'
          />
        </div>
      </div>
    </section>
  );
}
