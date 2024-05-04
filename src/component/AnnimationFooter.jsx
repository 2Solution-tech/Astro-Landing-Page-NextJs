"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '../../public/footer1.jpg';
import image2 from '../../public/footer2.jpg';
import image3 from '../../public/footer3.jpg';

const AnnimationsFooter = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getImage = () => {
    switch (currentSlide) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      default:
        return image1;
    }
  };

  return (
    <div className='w-full flex justify-center'>
      <Image src={getImage()} alt='Slider Image' height={1000} width={1000} />
    </div>
  );
};

export default AnnimationsFooter;
