import React from 'react'
import logo from "../../Assets/atom.png"
import { Link } from 'react-router-dom'
import { FaHireAHelper } from "react-icons/fa";
import { GoPerson } from "react-icons/go";



const Login = () => {
  return (
    <>
      <div className='fixed w-full  bg-custom-blue p-6  text-white  flex justify-evenly items-center'>
        <div className='w-[80%]   flex items-center justify-between ' >
          <span className='w-[50px] h-[50px] text-white'><FaHireAHelper  className='w-12 h-12 ' size={30}/></span>
          <div className='flex justify-center items-space-between gap-[50px] text-white text-xl font-bold'>
            <Link to='/'>
            <h2>Home</h2>
            </Link>
            <Link to='/About'>
            <h2>About</h2>
            </Link>
            <Link to='/Contact'>
            <h2>Contact</h2>
            </Link>
          </div>
          <button className='px-4 py-2 bg-custom-blue text-white border-2 border-white hover:bg-blue-600  flex items-center justify-center'> <GoPerson className='mr-3  w-[20px] h-[20px]'/>Login</button>
        </div>
        

      </div>
    </>
  )
}

export default Login
