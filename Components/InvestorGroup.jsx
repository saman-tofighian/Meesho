export default function InvestorGroup() {
  const investors = [
    { name: 'Y Combinator', logo: '/img/I1.png' },
    { name: 'SoftBank', logo: '/img/I2.png' },
    { name: 'Elevation', logo: '/img/I3.png' },
    { name: 'Prosus', logo: '/img/I4.png' },
    { name: 'Sequoia', logo: '/img/I5.png' },
    { name: 'B Capital', logo: '/img/I6.png' },
  ];

  return (
    <section className='mt-20 px-[6%] w-full overflow-hidden'>
      <h2 className='mb-10 font-semibold text-white text-2xl md:text-3xl text-center'>
        Marquee investors believe in us
      </h2>

      <div className='relative w-full overflow-hidden investor-marquee'>
        <div className='flex gap-6 md:gap-10 w-max investor-track'>
          {[0, 1].map((group) => (
            <div
              key={group}
              className='flex gap-6 md:gap-10 shrink-0'
              aria-hidden={group === 1}
            >
              {investors.map((investor) => (
                <div
                  key={`${group}-${investor.name}`}
                  className='flex justify-center items-center bg-[#172539] p-5 rounded-2xl w-44 md:w-52 h-28 md:h-32 shrink-0'
                >
                  <img
                    src={investor.logo}
                    alt={group === 0 ? investor.name : ''}
                    className='max-w-full max-h-full object-contain'
                    loading='lazy'
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .investor-track {
          animation: investor-scroll 40s linear infinite;
          will-change: transform;
        }

        .investor-marquee:hover .investor-track {
          animation-play-state: paused;
        }

        @keyframes investor-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .investor-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
