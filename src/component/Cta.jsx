import React from 'react'
import breakup from '../../public/breakup.jpeg'
import Image from 'next/image'

const Features = () => {
  return (
    <div>
      <div class="max-w-3xl mx-auto p-4 text-[#333] font-[sans-serif]">
      <h2 class="text-3xl font-extrabold text-center">Our Specialization</h2>
      <div class="mt-16 space-y-10">
        <div class="grid md:grid-cols-2 gap-14">
          <div>
           
            <h3 class="text-xl font-semibold mb-2">Breakup Problem</h3>
            <p class="text-gray-500 text-sm">The best feeling in the world is when you love someone but slowly the situation changes and things are not as they should be. Small things lead to fights, misunderstandings, arguments, and later breakups again. Two lovers are suddenly separated.</p>
          </div>
          <Image src={breakup} class="w-full object-contain rounded-xl" alt='breakup'  height={200} width={200}/>
        </div>
        <div class="grid md:grid-cols-2 gap-14">
          <div>
            
            <h3 class="text-xl font-semibold mb-2">GF|BF Problems</h3>
            <p class="text-gray-500 text-sm">Today it is common to face problems in a love relationship. Now a boy and girl could use astrology to remove the troubles that arise among them and make relationship well..</p>
          </div>
          <Image src="https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=600" class="w-full object-contain rounded-xl" height={400} width={400} />
        </div>
        <div class="grid md:grid-cols-2 gap-14">
          <div>
            
            <h3 class="text-xl font-semibold mb-2">Get your Love Back</h3>
            <p class="text-gray-500 text-sm">Love is a true feeling and comes directly from the heart. The honesty & purity of love depends on your soul, and how pure it is. However, lack of trust, communication gap, financial issues & lack of freedom are a few reasons for break-ups & disputes between two love birds.</p>
          </div>
          <Image src="https://images.pexels.com/photos/3865895/pexels-photo-3865895.jpeg?auto=compress&cs=tinysrgb&w=600" class="w-full object-contain rounded-xl" alt='iagfe' height={400} width={400}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features