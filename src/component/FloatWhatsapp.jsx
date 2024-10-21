import Image from 'next/image';
import React from 'react';
import whatsapp from '../../public/whatsapp.png'
import Link from 'next/link';

const FloatWhatsapp = () => {
  return (
    <div className="fixed md:bottom-[2rem] bottom-[4rem] right-4 z-50 transition-transform transform-gpu hover:scale-110 animate-bounce w-[4rem] h-[4rem]">
          <Link href={"https://wa.link/upsctx"}>
          
            <button className=" text-white  py-2 px-2 rounded-full cursor-pointer">
            <Image  src={whatsapp} alt='call-now' height={50} width={50}/>
            </button>
            </Link>
        </div>
  )
}

export default FloatWhatsapp