import React, { useEffect, useState } from 'react';

const images = [
  'src/assets/hero_img.jpg',
  'src/assets/hero_img_2.jpg',
  'src/assets/hero_img_3.jpg',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden">
      <div className="relative w-full h-full">
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
    </div>
  );
};

export default Hero;
