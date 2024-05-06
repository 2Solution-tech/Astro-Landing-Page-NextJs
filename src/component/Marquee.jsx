import React from 'react';
import FastMarquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <FastMarquee className='bg-blue-600 font-bold' speed= {70} >
      पाए जीवन की सभी समस्याओ का स्थाई समाधान मात्र 7 घंटे में Services Available 24*7 Anytime Anywhere
    </FastMarquee>
  );
};

const MarqueeComponent2 = () => {
  return (
    <FastMarquee className='bg-black font-bold text-white'>
      पाए जीवन की सभी समस्याओ का स्थाई समाधान मात्र 7 घंटे में Services Available 24*7 Anytime Anywhere
    </FastMarquee>
  );
};

export { MarqueeComponent, MarqueeComponent2 }; // Changed the export to object format
