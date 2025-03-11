import React from 'react';
import { assets } from '../assets/assets';
import {useNavigate} from 'react-router-dom'
const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className='flex bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 items-center'>
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-5'>
        <h1 className='text-white text-3xl sm:text-4xl font-semibold leading-snug'>
          Book Appointment <br /> With 100+ Trusted Doctors
        </h1>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)} }className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-transform'>
          Create account
        </button>
      </div>
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img
          className='w-full max-w-md'
          src={assets.appointment_img}
          alt='Doctor illustration'
        />
      </div>
    </div>
  );
};

export default Banner;