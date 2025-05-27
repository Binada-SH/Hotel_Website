import React from 'react';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect (() => {
    const hadelScroll = () => {
      setScrolled(window.scrollY >10);
    };

    window.addEventListener('scroll', hadelScroll);
    return () => window.removeEventListener('scroll', hadelScroll);
  }, []);
  return (
    <div className={`fixed top-0 left-0 w-full z-10 text-white text-[18px] font-[Cormorant_Garamond] transition-all duration-300 ${ scrolled ? ' bg-[#111111]/60 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-[2560px] mx-auto flex items-center justify-between px-16 py-5">
        <div>
          <img className="cursor-pointer w-[100px]" src="src/assets/logo.png" alt="site_logo" />
        </div>
        <ul className="flex gap-10">
          <li><a href="#" className="hover:text-[#daa954] transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-[#daa954] transition-colors">About</a></li>
          <li><a href="#" className="hover:text-[#daa954] transition-colors">Rooms</a></li>
          <li><a href="#" className="hover:text-[#daa954] transition-colors">Dining</a></li>
          <li><a href="#" className="hover:text-[#daa954] transition-colors">Contact Us</a></li>
        </ul>
        <div className="border border-[#daa954] px-6 py-2 cursor-pointer hover:bg-[#daa954] transition-colors">
          Book your stay
        </div>
      </div>
    </div>
  );
};

export default Navbar;
