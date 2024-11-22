import React from 'react'
import banner from "../../Assets/banner.jpg"
import { IoIosPlay } from "react-icons/io";


const Banner = () => {
  return (
    <>
      <div className='w-full h-[80%] flex items-center justify-center mt-24 p-6' >
        <div className='w-[80%] h-[100%] flex items-start justify-between '>
          <div className='w-[100%] h-[100%] flex items-start flex-col justify-start'>
            <h1 className='text-4xl font-normal text-blue-600'>Let's <span className='text-blue-800 text-4xl font-medium'>Begin</span></h1>
          <div className='w-[100%] h-auto mt-5'>
            <p className='text-7xl font-medium mb-10'>Lets Find The</p>
            <p className='text-7xl font-medium mb-10'>Right <span className=' text-blue-800'>Course</span> For</p>
            <p className='text-7xl font-medium mb-10'>You</p>
          </div>
          <div className='flex  items-center justify-start gap-[50px]'>
          <button className='px-12 py-3 bg-blue-800 text-white rounded hover:bg-blue-600 font-bold'>Register</button>
          <button className='flex items-center justify-center font-semibold ' > <span className='w-[20px] h-[20px] mr-3 flex items-center justify-center bg-black rounded-full'><IoIosPlay  className='  text-yellow-300 '/></span>Play video</button>
          </div>
          </div>
          <div className='w-[80%] h-[100%] flex items-center justify-center'>
            <img src={banner} className ='w-[100%] h-[100%] object-contain' alt="" />
          </div>
      </div>

      </div>
    
    </>
  )
}

export default Banner
