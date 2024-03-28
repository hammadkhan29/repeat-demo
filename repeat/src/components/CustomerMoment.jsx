import React from 'react'

export const CustomerMoment = () => {
  return ( 
    <div className='w-full min-h-full lg:p-10 pb-10  bg-[#F5FF7D]'>
      <div className='p-4 lg:w-[55%]'>
        <h2 className='font-bold text-left text-3xl mb-3 sm:text-4xl md:text-5xl md:mb-6 leading-[1.5]'>UNLOCK YOUR CUSTOMER MOMENTS</h2>
      </div>

      <div className='lg:w-[50%] md:w-[70%] mb-7'>
          <p className='text-left text-xl p-4'>
          Start activating the Moments that matter. Get started now to see how Repeat can simplify and supercharge your retention workflow.
          </p>
      </div>

    <div className='md:w-[60%] sm:w-[80%] m-2 bg-white rounded-3xl border border-black text-center h-16'>
            <button className='p-4 text-2xl md:text-3xl font-bold md:pl-10 pt-2'>Get Started</button>
            </div>

            <div className='p-4 md:pb-10 md:pt-6'>
                <h5 className='underline text-left text-lg'>or book a demo</h5>
            </div>

    </div>
  )
}
