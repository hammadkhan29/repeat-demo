import React from 'react'
import { Link } from 'react-router-dom'

export const Head = () => {
  return (
    <div className='w-full bg-[#F5FF7D]'>

        <div className=' p-4 md:pt-16 md:ml-28 md:mb-12 md:w-[55%]'>
            <div className='text-left mb-6'>
              <h2 className='font-bold text-2xl mb-2 sm:text-3xl md:text-4xl md:mb-4 lg:text-5x1'>SUPERCHARGED</h2>
              <h2 className='font-bold text-2xl mb-2 sm:text-3xl md:text-4xl md:mb-4 lg:text-5x1'>LIFECYCLE MARKETING</h2>
              <p className='mb-4 text-sm'><strong>Repeat boosts repurchase rate </strong>by automatically delivering personalized messaging at high-leverage Moments<strong>™</strong>.</p>
            </div>

            <div className='md:w-full w-[70%] sm:w-[60%] m-2 bg-white rounded-3xl border border-black text-center h-12 md:h-16'>
              <button className='p-2 text-xl md:text-3xl font-semibold'>BOOK A DEMO</button>
            </div>

            <div className=' p-2 md:pb-8 md:pt-4 text-left md:text-center'>
                <h5 className='underline text-lg'><Link to='/get-started'>Or get started</Link></h5>
            </div>
        </div>
    </div>
  )
}
