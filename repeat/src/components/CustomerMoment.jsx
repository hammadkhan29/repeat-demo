import React from 'react'
import {useNavigate} from 'react-router-dom'

export const CustomerMoment = () => {
  const navigate = useNavigate()
  const handleChange = () =>{
    navigate('/get-started')
  }

  const handleClick = () => {
    navigate('book-demo')
  }
  return ( 
    <div className='w-full lg:p-10 pb-8  bg-[#F5FF7D]'>
      <div className='p-4 lg:w-[55%]'>
        <h2 className='font-bold text-left text-2x1 sm:text-3xl mb-3 md:text-4xl lg:text-5xl md:mb-3'>UNLOCK YOUR CUSTOMER MOMENTS</h2>
      </div>

      <div className='lg:w-[50%] md:w-[70%] mb-5'>
          <p className='text-left text-sm p-4'>
          Start activating the Moments that matter. Get started now to see how Repeat can simplify and supercharge your retention workflow.
          </p>
      </div>

    <div className='md:w-[60%] sm:w-[80%] m-2 bg-white rounded-3xl border border-black text-center h-12 md:h-16'>
            <button className='p-4 text-xl md:text-2xl font-semibold md:pl-10 pt-2 ' onClick={handleChange}>Get Started</button>
            </div>

            <div className='p-4 md:pb-6 md:pt-4' onClick={handleClick}>
                <h5 className='underline text-left text-xl cursor-pointer'>Or book a demo</h5>
            </div>

    </div>
  )
}
