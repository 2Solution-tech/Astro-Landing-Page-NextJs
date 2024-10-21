import Image from 'next/image';
import React from 'react';
import call from '../../public/call.png'
import Link from 'next/link';

const FixedCallButton = () => {
    return (
        <div className="fixed md:bottom-[2rem] bottom-[4rem] left-4 z-50 transition-transform transform-gpu hover:scale-110 animate-bounce w-[4rem] h-[4rem]">
          <Link href={`tel:${9499475794}`}>
          
            <button className="bg-blue-500 text-white  py-2 px-2 rounded-full cursor-pointer">
            <Image  src={call} alt='call-now' height={50} width={50}/>
            </button>
            </Link>
        </div>
    );
};

export default FixedCallButton;
