import React from 'react'
import { Link } from 'react-router-dom'

export const Head = () => {
  return (
    <div className='w-full min-h-full  bg-[#F5FF7D]'>
        <div className=' p-4 md:pt-16 md:ml-28 md:mb-12 md:w-[55%]'>
            <div className='text-left mb-9'>
            <h2 className='font-bold text-3xl mb-3 sm:text-4xl md:text-5xl md:mb-6'>SUPERCHARGED</h2>
            <h2 className='font-bold text-3xl mb-3 sm:text-4xl md:text-5xl md:mb-6'>LIFECYCLE MARKETING</h2>
            <p className='mb-6 text-lg'><strong>Repeat boosts repurchase rate </strong>by automatically delivering personalized messaging at high-leverage Moments<strong>™</strong>.</p>
            </div>
            <div className='md:w-full w-[70%] sm:w-[80%] m-2 bg-white rounded-3xl border border-black text-center h-16'>
            <button className='p-4 text-2xl md:text-3xl font-bold md:pl-10 pt-2'>Book a Demo</button>
            </div>

            <div className=' p-4 md:pb-10 md:pt-6'>
                <h5 className='underline text-left text-lg'><Link to='/get-started'>Or get started</Link></h5>
            </div>
        </div>
    </div>
  )
}
