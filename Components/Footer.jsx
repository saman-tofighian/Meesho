import Image from 'next/image';
import {
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='mt-4 w-full h-12.5'>
      <section className='grid grid-cols-12 px-[6%] w-full h-full'>
        <div className='flex items-center gap-x-6 col-span-6 h-full'>
          <span className='flex items-center h-full cursor-pointer'>
            <FaTwitter size='1.4rem' color='white' />
          </span>
          <span className='flex items-center h-full cursor-pointer'>
            <FaInstagram size='1.4rem' color='white' />
          </span>
          <span className='flex items-center h-full cursor-pointer'>
            <FaLinkedin size='1.4rem' color='white' />
          </span>
          <span className='flex items-center h-full cursor-pointer'>
            <FaYoutube size='1.4rem' color='white' />
          </span>
          <figure className='flex items-center h-full'>
            <Image
              src='/img/blog-icon.png'
              width={80}
              height={26}
              alt='blog_icon'
            />
          </figure>
        </div>
        <div className='flex justify-end items-center gap-x-6 col-span-6 h-full'>
          <span className='flex items-center gap-x-1.5 text-white'>
            <FaRegCopyright color='white' size='1rem' className='mt-[.5px]' />
            Saman Tofighian | 2026 All Rights Reserved
          </span>
        </div>
      </section>
    </footer>
  );
}
