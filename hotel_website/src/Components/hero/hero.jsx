import React, { useEffect, useState } from 'react';
import hero_img1 from '../../assets/hero_img.jpg';
import hero_img2 from '../../assets/hero_img_2.jpg';
import hero_img3 from '../../assets/hero_img_3.jpg';

const images = [hero_img1, hero_img2, hero_img3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1300ms] ease-in-out brightness-80 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center text-[#ffffff] z-1">
        <h1 className='text-[60px] font-[Cormorant_Garamond] text-center '>The Luma , The Art of Tropical Living.</h1>
        <h4 className='text-[18px] font-[now] text-center'>Luxury meets Tropical</h4>
      </div>
    </div>
  );
};

export default Hero;