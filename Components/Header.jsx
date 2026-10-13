import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Tech at Meesho', href: '/tech-at-meesho' },
  { id: 3, name: 'Life at Meesho', href: '/life-at-meesho' },
  { id: 4, name: 'Blog', href: '/blog' },
  { id: 5, name: 'News', href: '/news' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className='z-50 relative pt-6 sm:pt-8 w-full'>
      <nav className='flex justify-between items-center mx-auto px-5 sm:px-[6%] w-full h-12.5'>
        <Link
          href='/'
          aria-label='Meesho home'
          onClick={() => setIsMenuOpen(false)}
          className='z-60 relative'
        >
          <Image
            src='/img/logo.png'
            width={133}
            height={32}
            alt='Meesho logo'
            priority
            className='w-26.25 sm:w-33.25 h-auto'
          />
        </Link>
        <div className='hidden lg:flex flex-1 justify-end items-center gap-8 xl:gap-17'>
          <ul className='flex items-center gap-7 xl:gap-9'>
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`whitespace-nowrap text-[15px] transition-colors duration-300 xl:text-[17px] ${
                    item.name === 'Home'
                      ? 'text-[#63B38F]'
                      : 'text-white hover:text-[#63B38F]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type='button'
            className='bg-[#1D58DB] px-7 xl:px-9 py-2 rounded-full text-white text-sm xl:text-base hover:scale-105 transition-transform duration-300 cursor-pointer'
          >
            JOIN US
          </button>
        </div>

        <button
          type='button'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='lg:hidden z-60 relative flex flex-col justify-center items-center bg-[#1D58DB] rounded-full w-11 h-11 cursor-pointer'
        >
          <motion.span
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 0 : -6,
            }}
            transition={{ duration: 0.25 }}
            className='block absolute bg-white rounded-full w-5 h-0.5'
          />

          <motion.span
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              scaleX: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            className='block absolute bg-white rounded-full w-5 h-0.5'
          />

          <motion.span
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? 0 : 6,
            }}
            transition={{ duration: 0.25 }}
            className='block absolute bg-white rounded-full w-5 h-0.5'
          />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
              className='lg:hidden z-40 fixed inset-0 bg-black/50 backdrop-blur-sm'
            />

            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='lg:hidden top-21.5 right-4 left-4 z-50 absolute bg-[#101A35] shadow-2xl p-6 rounded-2xl'
            >
              <ul className='flex flex-col gap-5'>
                {links.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.25,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-lg transition-colors duration-300 ${
                        item.name === 'Home'
                          ? 'text-[#63B38F]'
                          : 'text-white hover:text-[#63B38F]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                type='button'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.07 }}
                className='bg-[#1D58DB] mt-7 px-8 py-3 rounded-full w-full text-white hover:scale-[1.02] transition-transform duration-300 cursor-pointer'
              >
                JOIN US
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
