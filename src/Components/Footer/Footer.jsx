import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";





const Footer = () => {
  return (
    <>
    <div className='w-[100%] h-auto bg-custom-blue flex items-center justify-center '>
        <div className='w-[95%]   flex flex-col items-center justify-center  '>
       <div className='w-[100%] h-[80%] flex items-start justify-start gap-[30px] border-b-2 border-gray-500 pt-[60px] pb-[20px]'>
       <div className='w-[100%] h-[100%] '>
            <p className='text-xl font-semibold text-white mb-2 '>DISENOSYS</p>
            <p className='w-[100%] text-gray-400 leading-30 font-normal'>Welcome to Disenosys, your premier destination for specialized computational engineering services and training. Empowering innovation through expert engineering solutions.</p>

        </div>
        <div className='w-[75%] h-[100%]  flex flex-col items-start justify-center  '>
            <p className='text-xl font-semibold text-white flex flex-col items-start justify-center mb-2' >QUICK LINKS</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2 '>About Us</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2py-2 '>Event</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2  '>Success Story</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2  '>Contact</p>
        </div>
        <div className='w-[75%] h-[100%]  flex flex-col items-start justify-center '>
            <p className='text-xl font-semibold text-white  flex flex-col items-start justify-center mb-2'>POLICY</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2'>Privacy Policy</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2' >Terms & Conditions</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2'>FAQ</p>
        </div>
        <div className='w-[75%] h-[100%]  '>
            <p className='text-xl font-semibold text-white mb-2'>SERVICES</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2'>Engineering & Research</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2'>Learning & Development</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2'>Staffing</p>
        </div>
        <div className='w-[100%] h-[100%] '>
            <p className='text-xl font-semibold text-white mb-2'>CONTACT</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2'>11, VOC St, Ranga Colony,</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2'>Rajakilpakam, Tamilnadu 60073</p>
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2'>+91 90803 68892
            <p className='text-gray-400 hover:text-white transition-all duration-700 py-2'>info@Disenosys.com</p>
            </p>
        </div>
       </div>
       <div className='w-[100%] h-[100%] flex items-center justify-between py-20 '>
        <p className='text-white text-2xl font-normal'> <span className='text-lg mr-[3px]'>&copy;</span>2024 Disenosys | All rights reserved</p>
        <div className='w-[20%] h-[100%] flex items-center justify-between relative bg-green-700'>
            <span className='w-[70px] h-[70px] rounded-full hover:bg-gradient-to-r from-[#182073] via-[#235c95] to-[#A1C6E7] transition-all duration-700 bg-violet-600 border-2 border-white flex items-center justify-center absolute z-50'><FaFacebookF className='text-2xl text-white'/></span>
            <span className='w-[70px] h-[70px] rounded-full hover:bg-gradient-to-r from-[#182073] via-[#235c95] to-[#A1C6E7] transition-all duration-700 bg-violet-600 border-2 border-white flex items-center justify-center absolute left-[50px] z-40  '><IoLogoInstagram className='text-2xl text-white'/> </span>
            <span className='w-[70px] h-[70px] rounded-full hover:bg-gradient-to-r from-[#182073] via-[#235c95] to-[#A1C6E7] transition-all duration-700 bg-violet-600 border-2 border-white flex items-center justify-center absolute left-[100px] z-30'><FaXTwitter className='text-2xl text-white'/></span>
            <span className='w-[70px] h-[70px] rounded-full hover:bg-gradient-to-r from-[#182073] via-[#235c95] to-[#A1C6E7] transition-all duration-700 bg-violet-600 border-2 border-white flex items-center justify-center absolute left-[150px] z-20'><FaWhatsapp className='text-2xl text-white'/></span>
        </div>
       </div>
       

        </div>
    </div>
      

    </>
  )
}

export default Footer
