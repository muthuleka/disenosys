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
    <div className='w-full h-full bg-blue-900 flex items-center justify-center'>
        <div className='w-[80%] h-[80%] flex flex-col'>
            <div className='w-[100%] h-[20%] flex items-center justify-center mb-7'>
                <p className='text-4xl font-medium text-white '>Why Consult with us?</p>

            </div>
            <div className='w-[100%] h-[100%] flex items-center justify-between gap-[20px]'>
                <div className='w-[100%] h-[100%] bg-white flex items-center justify-center '>
                    <img src={hands}  className ='w-[90%] h-[90%]  'alt="" />

                </div>
                <div className='w-[100%] h-[100%] bg-white flex flex-col items-start justify-center p-5'>
                    <p className='flex items-center text-xl font-semibold p-[15px] border-b-2 border-black-100'> <FaMedal className='mr-3' />Quality Training Materials and Content</p>
                    <p className='flex items-center text-xl font-semibold p-[15px] border-b-2 border-black-100'><BsPersonCheckFill className='mr-3'/> Industry Experts as Instructors</p>
                    <p className='flex items-center text-xl font-semibold p-[15px] border-b-2 border-black-100' ><LuSchool2 className='mr-3'/> Collaboration with Research Labs and Industries</p>
                    <p className='flex items-start text-xl font-semibold p-[15px] border-b-2 border-black-100'><FaYoutube className='mr-3 text-4xl'/> Multiple Options: Learn at Your Pace, Recorded Live Sessions, & Mentorship Programs</p>
                    <p className='flex items-center text-xl font-semibold p-[15px] border-b-2 border-black-100'><GiRibbonMedal className='mr-3' />Highly Regarded Professional Certificates</p>
                    <p className='flex items-center text-xl font-semibold p-[15px] border-b-2 border-black-100'><ImPriceTag className='mr-3' />Affordable, Friendly Pricing</p>

                </div>
            </div>

        </div>

    </div>
      
    </>
  )
}

export default Content
