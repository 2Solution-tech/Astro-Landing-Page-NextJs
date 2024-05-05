import Image from 'next/image'
import React from 'react'
import husband from '../../public/husband.jpg'

const AnnimationFooter = () => {
  return (
    <div className='w-full flex justify-center'>
      <Image src={husband} width={1000} height={1000} alt='image'/>
    </div>
  )
}

export default AnnimationFooter