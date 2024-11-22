import React from 'react'
import guarantee from "../../Assets/guarantee.svg"

const Guarantee = () => {
  return (
    <>
    <div className='w-[100%] h-[70%] flex items-center justify-center p-50'>
       <div className='w-[80%] h-[100%] flex items-center justify-between'>
       <div className='w-[40%] flex items-center justify-center'>
            <img src={guarantee} className = 'w-[50%] h-[50%]' alt="" />
        </div>
        <div className='w-[100%] h-[50%]  flex flex-col  items-start justify-start p-14 mt-10'>
            <p className='text-5xl font-medium mb-5 '>100% Risk Free, We Promise You</p>
            <p className='text-lg  text-gray-700 '>If you are unsatisfied for any reason for up to 5 days following your purchase, contact us for a full refund. No questions asked.</p>
        </div>
       </div>

        
    </div>
      
    </>
  )
}

export default Guarantee
