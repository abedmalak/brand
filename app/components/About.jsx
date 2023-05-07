import Image from 'next/image';
import Link from 'next/link';
import AboutIMG from '/public/assets/images/About.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#ff2c5c]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-3 text-gray-600'>
           My name is Abdul Rahman Malak, but you can call me A.

          </p>
          <p className='py-2 text-gray-600'>
            It all started when my grandmother asked me to solve a problem she had with her phone;
            I had no clue what was wrong with that thing, whenever I would tap on an app or try to
            load a website, all I would see was white. Fast forward to today, I now develop the very software
            that she uses, using the latest technologies. The problem she had with her phone was that her wifi was turned off.
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
