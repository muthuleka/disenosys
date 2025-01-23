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
import Registration from '../Navbar/Registration';


const Signup = () => {
  return (
    <>
    <Login/>
    <Banner/>
    <Content/>
    <Guarantee/>
    <Course/>
        <div className='sm:w-full sm:h-auto  bg-purple-800  flex  items-center justify-center '>
          <div className='sm:w-[85%] grid sm:grid-cols-2 p-[20px] w-[100%]  grid-cols-1'>
            <div className='w-[100%] h-[100%] bg-white text-black sm:p-[30px] p-0 py-10  '>
                  <div className='sm:w-full h-[20%]  sm:mt-10 w-[100%]'>
                    <h1 className='font-bold  sm:text-4xl text-blue-700 gap-[5px] text-2xl'>Hello,</h1>
                    <h1 className='font-bold  sm:text-5xl text-blue-700 text-3xl'>welcome!</h1>
                  </div>
                  <div className=' w-[100%] border-solid border-2 border-indigo-600 p-3'>
                    <h1>Email Address</h1>
                    <input className='w-full h-[30px] outline-none ' type="text" placeholder='name@gmail.com ' />

                  </div>
                  <div className=' w-[100%] border-solid border-2 border-indigo-600 p-3 mb-3'>
                    <h1>Password</h1>
                    <input className='w-full h-[30px] outline-none text-2xl' type="text" placeholder='............ ' />

                  </div>
                <div className='sm:w-[80%] flex items-center justify-between text-xs w-[100%]'>
                <div className='w-20% flex items-center justify-start'>
                  <input type="checkbox" className='mr-[10px]'/>
                  <p>Remember me</p>
                </div>
                <p>Forget password?</p>
          </div>
          <div className='sm:w-[300px] flex flex-direction-column items-center text-center justify-evenly mt-5 mb-10 gap-3 w-[100%]'>
                    <button className=' sm:w-[150px]  h-[35px] gap-[10px] flex items-center justify-center sm:px-16 py-2 bg-pink-500 px-8 text-white hover:bg-pink-600 hover:text-white w-[100%]'>Login</button>
                    <button className='sm:w-[150px]  h-[35px] flex items-center justify-center border-2 border-blue-500 text-blue-700 py-2 sm:px-16 text-bold px-8 hover:bg-blue-700 hover:text-white w-[100%]'>Signup</button>
          </div>
          <div className='sm:w-[60%] h-[40px]  flex  justify-start items-center gap-8 w-[100%]'>
            <p className='text-xs font-bold text-gray-700 '>FOLLOW</p>
            <BiLogoFacebook className='sm:w-[20px] sm:h-[20px] text-gray-700 '/>
            <FaTwitter className=' sm:w-[20px] sm:h-[20px] text-gray-700 ' />
            <GrInstagram className='sm:w-[20px] sm:h-[20px] text-gray-700' />
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
