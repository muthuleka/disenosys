import React from 'react'
import banner from "../../Assets/banner.jpg"
import { IoIosPlay } from "react-icons/io";


const Banner = () => {
  return (
    <>
      <div className=' sm:w-full  sm:h-[80%]  flex items-center justify-center mt-24 p-6  w-[100%] h-auto' >
        <div className='sm:w-[80%] h-[100%] flex sm:flex-row items-start justify-between  w-[100%] flex-col'>
          <div className='w-[100%] h-[100%] flex items-start flex-col justify-start'>
            <h1 className='sm: md:text-xl lg:text-4xl font-normal text-blue-600 text-xl'>Let's <span className='text-blue-800  sm: md:text-xl lg:text-4xl font-medium text-xl' >Begin</span></h1>
          <div className='w-[100%] h-auto mt-5'>
            <p className=' sm:text-7xl font-medium sm:mb-10 text-3xl mb-3'>Lets Find The</p>
            <p className='sm:text-7xl font-medium sm:mb-10 text-3xl mb-3'>Right <span className=' text-blue-800'>Course</span> For</p>
            <p className='sm:text-7xl font-medium sm:mb-10 text-3xl mb-3'>You</p>
          </div>
          <div className=' sm: flex  items-center justify-start sm:gap-[50px]  w-[100%] h-[100%] gap-[20px]'>
          <button className='sm:px-12 sm:py-3 bg-blue-800 px-6 py-2 text-white rounded hover:bg-blue-600 font-bold'>Register</button>
          <button className='sm:w-[20%] sm:h-[100%] sm:py-0  flex items-center sm:justify-center font-semibold  w-[100%] h-[100%] py-2 justify-start ' > <span className='w-[20px] h-[20px] sm:mr-3 flex items-center justify-center bg-black mr-1 rounded-full'><IoIosPlay  className='  text-yellow-300 '/></span>Play video</button>
          </div>
          </div>
          <div className='sm:w-[80%] h-[100%] sm:mt-0 flex items-center justify-center w-[100%] mt-[30px]'>
            <img src={banner} className ='w-[100%] h-[100%] object-contain' alt="" />
          </div>
      </div>

      </div>
    
    </>
  )
}

export default Banner
