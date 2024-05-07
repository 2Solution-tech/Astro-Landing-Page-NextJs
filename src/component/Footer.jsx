import Link from 'next/link'
import React from 'react'

const Footer2 = () => {
  return (
    <div>
      <footer class="bg-[#FF5733] py-6 px-16 font-sans text-black bold">
      <div class="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p class="text-[15px] leading-loose">© 2024<a href='https://readymadeui.com/' target='_blank'
          class="hover:underline mx-1">Astro Solution</a>All Rights Reserved.</p>

        <ul class="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li><a href="javascript:void(0)" class="text-[15px] hover:text-white">Terms of Service</a></li>
          <li><a href="javascript:void(0)" class="text-[15px] hover:text-white">Privacy Policy</a></li>
          <li><Link href={'https://wa.link/mck9z4'} class="text-[15px] hover:text-white">Chat Now</Link></li>
        </ul>
      </div>
    </footer>
    </div>
  )
}

export default Footer2