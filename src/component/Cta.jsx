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
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-10 mb-4 bg-gray-100 p-2 rounded-md" viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000" />
                </clipPath>
              </defs>
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
              </g>
            </svg>
            <h3 class="text-xl font-semibold mb-2">GF|BF Problems</h3>
            <p class="text-gray-500 text-sm">Today it is common to face problems in a love relationship. Now a boy and girl could use astrology to remove the troubles that arise among them and make relationship well..</p>
          </div>
          <Image src="https://readymadeui.com/cardImg.webp" class="w-full object-contain rounded-xl" height={400} width={400} />
        </div>
        <div class="grid md:grid-cols-2 gap-14">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-10 mb-4 bg-gray-100 p-2 rounded-md" viewBox="0 0 24 24">
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
                <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
                <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
              </g>
            </svg>
            <h3 class="text-xl font-semibold mb-2">Get your Love Back</h3>
            <p class="text-gray-500 text-sm">Love is a true feeling and comes directly from the heart. The honesty & purity of love depends on your soul, and how pure it is. However, lack of trust, communication gap, financial issues & lack of freedom are a few reasons for break-ups & disputes between two love birds.</p>
          </div>
          <Image src="https://readymadeui.com/cardImg.webp" class="w-full object-contain rounded-xl" alt='iagfe' height={400} width={400}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features