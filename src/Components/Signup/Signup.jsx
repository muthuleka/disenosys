import React from 'react'
import bg from "../../Assets/form-design-best-practices-use-as-fields-as-possible.jpg"
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Login from '../Login/Login';
import Banner from '../Banner/Banner';
import Content from '../Content/Content';
import Guarantee from '../Guarantee/Guarantee';
import Footer from '../Footer/Footer';
import Course from '../Course/Course';


const Signup = () => {
  return (
    <>
    <Login/>
    <Banner/>
    <Content/>
    <Guarantee/>
    <Course/>
        <div className='w-full h-auto  bg-purple-800  flex  items-center justify-center '>
          <div className='w-[85%] grid grid-cols-2 p-[20px]'>
            <div className='w-[100%] h-[100%] bg-white text-black p-[30px]  '>
                  <div className='w-full h-[20%]  mt-10'>
                    <h1 className='font-bold  text-4xl text-blue-700 gap-[5px]'>Hello,</h1>
                    <h1 className='font-bold  text-5xl text-blue-700'>welcome!</h1>
                  </div>
                  <div className=' w-[100%] border-solid border-2 border-indigo-600 p-3'>
                    <h1>Email Address</h1>
                    <input className='w-full h-[30px] outline-none ' type="text" placeholder='name@gmail.com ' />

                  </div>
                  <div className=' w-[100%] border-solid border-2 border-indigo-600 p-3 mb-3'>
                    <h1>Password</h1>
                    <input className='w-full h-[30px] outline-none text-2xl' type="text" placeholder='............ ' />

                  </div>
                <div className='w-[80%] flex items-center justify-between text-xs'>
                <div className='w-20% flex items-center justify-start'>
                  <input type="checkbox" className='mr-[10px]'/>
                  <p>Remember me</p>
                </div>
                <p>Forget password?</p>
          </div>
          <div className='w-[300px] flex flex-direction-column items-center text-center justify-evenly mt-5 mb-10 gap-3'>
                    <button className=' w-[150px]  h-[35px] gap-[10px] flex items-center justify-center px-16 py-2 bg-pink-500 text-white hover:bg-pink-600 hover:text-white'>Login</button>
                    <button className=' w-[150px]  h-[35px] flex items-center justify-center border-2 border-blue-500 text-blue-700 py-2 px-16 text-bold hover:bg-blue-700 hover:text-white'>Signup</button>
          </div>
          <div className='w-[60%] h-[40px]  flex  justify-start items-center gap-8 '>
            <p className='text-xs font-bold text-gray-700 '>FOLLOW</p>
            <BiLogoFacebook className='w-[20px] h-[20px] text-gray-700'/>
            <FaTwitter className=' w-[20px] h-[20px] text-gray-700 ' />
            <GrInstagram className='w-[20px] h-[20px] text-gray-700' />
          </div>
          </div>
        <div className='w-[100%] h-[100%] bg-gray-200 '>
                <img className='w-[100%] h-[100%]' src={bg} alt="" />
                

            </div>

        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Signup
