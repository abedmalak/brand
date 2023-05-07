"use client"

import Image from 'next/image';
import Link from 'next/link';
import AboutIMG from '/public/assets/images/About.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h1 className='uppercase text-xl tracking-widest text-[#ff2c5c]'>
            About
          </h1>
          <h2 className='py-4'>Who we are</h2>
          <p className='py-6'>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis sequi iusto consectetur inventore quos incidunt! Iste enim porro minima voluptates nulla, optio ex temporibus explicabo nam nobis facilis. Amet.
          </p>
          <Link href='/aboutextra'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Learn More
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutIMG} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
