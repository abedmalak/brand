'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineDown, AiOutlineMail, AiOutlineMenu, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import NavLogo from '/public/assets/images/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [navBg, setNavBg] = useState('#fafafa');
  const [linkColor, setLinkColor] = useState('#ff2c5c');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='ml-5'>
          <Link href='/'>
            <Image
              src={NavLogo}
              alt='/'
              width='100'
              height='200'
              className='cursor-pointer'
            />
          </Link>
        </div>
        <div className='flex items-center justify-end w-full'>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex items-center justify-center w-full'>
            <li className='ml-10 text-sm uppercase group hover:border-b hover:text-[#ff2c5c]'>
              <Link href='/'>Home</Link>
              <div className='w-full h-[2px] bg-[#ff2c5c] mt-1 group-hover:block hidden'></div>
            </li>
            <li className='ml-10 text-sm uppercase group hover:border-b hover:text-[#ff2c5c]'>
              <Link href='/#about'>About</Link>
              <div className='w-full h-[2px] bg-[#ff2c5c] mt-1 group-hover:block hidden'></div>
            </li>
            <li className='ml-10 text-sm uppercase group hover:border-b hover:text-[#ff2c5c]'>
              <Link href='/#'>Services</Link>
              <div className='w-full h-[2px] bg-[#ff2c5c] mt-1 group-hover:block hidden'></div>
            </li>
            
            {/* Dropdown Icon */}
            <li className='ml-10 text-sm uppercase relative group hover:border-b hover:text-[#ff2c5c] cursor-pointer'>
              <div 
                onMouseEnter={() => setShowDropdown(true)}
                onClick={() => setShowDropdown(!showDropdown)}>
                Pages <AiOutlineDown size={12} />
              </div>
              <div
                className={`${
                  showDropdown ? 'block' : 'hidden'
                } absolute left-0 mt-1 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}
                onMouseLeave={() => setShowDropdown(false)}           >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/clients">
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                      role="menuitem"
                      onClick={() => setShowDropdown(false)}
                    >
                      Clients
                    </div>
                  </Link>
                  <Link href="/portfolio">
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                      role="menuitem"
                      onClick={() => setShowDropdown(false)}
                    >
                      Portfolio
                    </div>
                  </Link>
                </div>
              </div>
            </li>
    
            <li className='ml-10 text-sm uppercase group hover:border-b hover:text-[#ff2c5c]'>
              <Link href='/#contact'>Contact</Link>
              <div className='w-full h-[2px] bg-[#ff2c5c] mt-1 group-hover:block hidden'></div>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div className='md:hidden'>
            <AiOutlineMenu size={25} onClick={handleNav} style={{ color: `${linkColor}` }} />
          </div>
          <div className='hidden md:flex items-center space-x-3 ml-5'>
            <AiOutlineInstagram size={25} className='hover:text-[#ff2c5c]' />
            <AiOutlineLinkedin size={25} className='hover:text-[#ff2c5c]' />
          </div>
        </div>
      </div>
    
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                  <Image
                    src={NavLogo}
                    width='100'
                    height='80'
                    alt='/'
                  />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-1'>
              <p className='w-[85%] md:w-[90%] py-1'>
                Let&#39;s build something legendary
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#services'>
                <li onClick={() => setNav(false)} className='py-4 text               sm'>
              Services
            </li>
          </Link>
          <Link href='/#pages'>
            <li onClick={() => setNav(false)} className='py-4 text-sm'>
              Pages
            </li>
          </Link>
          <Link href='/#contact'>
            <li onClick={() => setNav(false)} className='py-4 text-sm'>
              Contact
            </li>
          </Link>
        </ul>
        <div className='pt-20 text-align-center'>
          <p className='uppercase tracking-widest text-[#3b5998]'>
            Let&#39;s Connect
          </p>
          <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
            <Link href='/#contact'>
              <div
                onClick={() => setNav(!nav)}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
              >
                <AiOutlineMail />
              </div>
            </Link>
            <AiOutlineInstagram size={25} className='hover:text-[#ff2c5c]' />
            <AiOutlineLinkedin size={25} className='hover:text-[#ff2c5c]' />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default Navbar;
    
             
