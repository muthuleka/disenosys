import React from 'react'
import "./Registration.css"
import { FaRegEyeSlash } from "react-icons/fa";


const Registration = () => {
  return (
    <>
     <div className='main'>
     <div className='reg'>
<div className='titles'>
  <p></p>
  <h1>Registration Form</h1>
  <p></p>
  </div>        <div className='formtable'>
          <div className='formname'>
              <input type="text" name="" id="" placeholder='Name'  />
          </div>
          <div className='formname'>
              <input type="text" name="" id="" placeholder='Email Address'  />
          </div>
          <div className='formname'>
              <input type="text" name="" id="" placeholder='Country'  />
          </div>
          <div className='formname'>
              <input type="text" name="" id="" placeholder='Phone'  />
          </div>
          <div className='formname1'>
              <input type="text" name="" id="" placeholder='Password'  />
              <FaRegEyeSlash className='eye' />

          </div>
          </div>
          <div className='condition'>
           <input type="checkbox" name="" id="" />
           <p>I accept terms & condition </p>
          </div>
          <div className='create-btn'>
            <button>Create Account</button>
          </div>
          <div className='acc'>
            <p>Already have an account ? <span>Sign In</span></p>
          </div>
        </div>
     </div>
    </>
  )
}

export default Registration
