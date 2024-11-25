import React from 'react'
import guarantee from "../../Assets/guarantee.svg"

const Guarantee = () => {
  return (
    <>
    <div className='sm:w-[100%] sm:h-[70%] sm:p-0 flex items-center justify-center p-50 w-[100%] h-auto p-[20px]'>
       <div className='sm:w-[80%] h-[100%] flex sm:flex-row items-center justify-between w-[100%] flex-col '>
       <div className='sm:w-[40%] sm:h-[100%] sm:mt-0 flex items-center justify-center  h-[100%] mt-20'>
            <img src={guarantee} className = 'sm:w-[50%] sm:h-[50%] w-[90%] h-[90%]'   alt="" />
        </div>
        <div className='sm:w-[100%] sm:h-[50%] sm:p-14 sm:mb-0 sm:mt-10 flex flex-col  items-start justify-start p-0 mt-20 mb-20'>
            <p className='sm:text-5xl font-medium mb-5 text-2xl'>100% Risk Free, We Promise You</p>
            <p className='sm:text-lg   text-gray-700 text-sm '>If you are unsatisfied for any reason for up to 5 days following your purchase, contact us for a full refund. No questions asked.</p>
        </div>
       </div>

        
    </div>
      
    </>
  ) 
}

export default Guarantee
