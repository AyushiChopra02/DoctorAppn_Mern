import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left sec */}
        <div>
           <img src={assets.logo} alt="" />
           <p className='w-full md:w-2/3 text-gray-600 leading-6'>Caring for your health with expertise and compassion – Your trusted medical partner.</p>
        </div>

        {/* cent sec */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Privacy policy</li>
          </ul>
           
        </div>
        {/* right sec */}
        <div>
           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-22-345-3421</li>
            <li>greatstack@gmail.com</li>
           </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@Prespirto - all right reserved</p>
      </div>
    </div>
  )
}

export default Footer
