import React from 'react'
import hands from "../../Assets/hans.png"
import { FaMedal } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { LuSchool2 } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { ImPriceTag } from "react-icons/im";






const Content = () => {
  return (
    <>
    <div className='sm:w-full sm:h-full bg-blue-900 flex items-center justify-center h-auto'>
        <div className='sm:w-[80%] sm:h-[80%] flex flex-col w-[100%] h-[100%] '>
            <div className='w-[100%] h-[20%] sm:mb-7 flex items-center justify-center mb-3'>
                <p className='sm:text-4xl sm:mt-0 font-medium text-white  text-2xl mt-5'>Why Consult with us?</p>

            </div>
            <div className='sm:w-[100%] sm:h-[100%] flex sm:flex-row items-center justify-between gap-[20px] flex-col'>
                <div className='sm:w-[100%] sm:h-[100%] sm:p-0 bg-white flex items-center justify-center w-[80%] h-[80%] p-[20px]'>
                    <img src={hands}  className ='sm:w-[90%] sm:h-[90%]  w-[100%] h-[100%]'alt="" />

                </div>
                <div className='sm:w-[100%] sm:h-[100%] sm:mb-0 bg-white flex flex-col items-start justify-center p-5 mb-[20px] w-[80%] h-[100%]'>
                    <p className='flex sm:items-center items-start sm:indent-0  sm:text-xl font-semibold p-[15px] border-b-2 border-black-100 text-base '> <FaMedal className='mr-3 sm:text-xl text-4xl ' />Quality Training Materials and Content</p>
                    <p className='flex sm:items-center items-start sm:text-xl font-semibold p-[15px] border-b-2 border-black-100 text-base'><BsPersonCheckFill className='mr-3 sm:text-xl text-4xl'/> Industry Experts as Instructors</p>
                    <p className='flex sm:items-center items-start sm:text-xl font-semibold p-[15px] border-b-2 border-black-100 text-base' ><BsPersonCheckFill className='mr-3 sm:text-xl text-5xl'/> Collaboration with Research Labs and Industries</p>
                    <p className='flex sm:items-center items-start sm:text-xl font-semibold p-[15px] border-b-2 border-black-100 text-base'><FaYoutube className='mr-3 sm:text-xl text-7xl'/> Multiple Options: Learn at Your Pace, Recorded Live Sessions, & Mentorship Programs</p>
                    <p className='flex sm:items-center items-start sm:text-xl font-semibold p-[15px] border-b-2 border-black-100 text-base'><GiRibbonMedal className='mr-3 sm:text-xl text-6xl' />Highly Regarded Professional Certificates</p>
                    <p className='flex sm:items-center items-start sm:text-xl font-semibold p-[15px] border-b-2 border-black-100 text-base'><ImPriceTag className='mr-3 sm:text-xl text-2xl' />Affordable, Friendly Pricing</p>

                </div>
            </div>

        </div>

    </div>
      
    </>
  )
}

export default Content
