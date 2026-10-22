export default function Stealing() {
  const achievements = [
    {
      year: '2026',
      logo: '/img/a1.png',
      alt: 'LinkedIn',
      text: '#6 in LinkedIn’s 2026 ‘Top Startups’ list',
      textSize: 'text-xl',
    },
    {
      year: '2026',
      logo: '/img/a2.png',
      alt: 'Young Turks',
      text: 'Young Turks Start-up of the Year',
      textSize: 'text-base md:text-lg',
    },
    {
      year: '2026',
      logo: '/img/a3.png',
      alt: 'Fast Company',
      text: '#14, Most Innovative Companies (USA)',
      textSize: 'text-lg md:text-xl',
    },
    {
      year: '2026',
      logo: '/img/a4.png',
      alt: 'YourStory',
      text: 'Best Tech Startup',
      textSize: 'text-lg',
    },
    {
      year: '2026',
      logo: '/img/a3.png',
      alt: 'Fast Company',
      text: '#1, Most Innovative Companies (IRAN)',
      textSize: 'text-lg md:text-xl',
    },
    {
      year: '2026',
      logo: '/img/a5.png',
      alt: 'Google Play',
      text: '#1 on Google Play Store',
      textSize: 'text-lg',
    },
  ];

  return (
    <section className='bg-black mt-20 px-[6%] py-10 md:py-16 w-full text-white'>
      <div className='mx-auto max-w-5xl'>
        <h2 className='mb-14 md:mb-16 font-bold text-lg md:text-xl text-center uppercase tracking-[0.35em] md:tracking-[0.5em]'>
          Stealing the show
        </h2>

        <div className='gap-x-8 gap-y-16 lg:gap-x-14 lg:gap-y-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {achievements.map((item, index) => (
            <article
              key={`${item.text}-${index}`}
              className='flex flex-col items-center md:items-start min-w-0'
            >
              <span className='mb-3 font-bold text-[#ff6db2] text-base tracking-[0.12em]'>
                {item.year}
              </span>

              <div className='flex justify-center md:justify-start items-center mb-5 w-full h-10'>
                <img
                  src={item.logo}
                  alt={item.alt}
                  className='max-w-full max-h-10 object-contain object-left'
                  loading='lazy'
                />
              </div>

              <p className={`${item.textSize} leading-7 text-white`}>
                {item.text}
              </p>
              <span className='md:hidden flex bg-white mt-8 w-full h-px'></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
