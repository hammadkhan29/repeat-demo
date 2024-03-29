import React from 'react'
import repeat1 from '../assets/repeat1.png'
import repeat2 from '../assets/repear2.png'
import repeat3 from '../assets/repeat3.png'

const RepeatWorks = () => {
  return (
    <div className='w-full lg:p-10 bg-[#EDE7DE] pt-[30px]'>
        <div className='p-4 lg:w-[70%]'>
            <h2 className='font-bold text-left text-2xl mb-3 sm:text-3xl md:text-4x1 lg:text-5xl md:mb-4'>HOW REPEAT WORKS</h2>
        </div>

        <div className='flex justify-between flex-col sm:flex-row'>
            <div className='w-[95%] sm:[50%] m-2'>
            <h2 className='font-semibold text-left text-[20px] lg:text-2x1 mb-3 ml-3 md:mb-6 leading-[1.5]'>INGEST AND ANALYZE</h2>
            <p className='m-3 leading-[1.5]  text-sm  md:text-left md:text-lg lg:text-xl'>
            Repeat connects to your Shopify store to ingest all of your historical orders and each new order that your customers place. We analyze those orders at the store level to identify trends and at the customer level to understand individual behavior.            </p>
            </div>
            <div className='w-[80%] sm:[50%] pt-10 mx-auto'>
            <img className='w-[95%] sm:w-[80&]  rounded-3xl' src={repeat1} alt='i3'/>
            </div>
        </div>

        <div className='flex justify-between flex-col sm:flex-row'>
            <div className='w-[95%] sm:[50%] m-2'>
            <h2 className='font-semibold text-left text-[20px] mb-3 ml-3 lg:text-2x1 md:mb-6 leading-[1.5]'>TRANSFORM AND REPEAT</h2>
            <p className='m-3 leading-[1.5]  text-sm  md:text-left md:text-lg lg:text-xl'>
            Repeat feels like magic, but we're not a black box. We utilize your store's data to produce valuable insights and reports that help you level up your retention strategy with the same intelligence that fuels Repeat's tools.
            </p>
            </div>
            <div className='w-[80%] sm:[50%] pt-10 mx-auto'>
            <img className='w-[95%] sm:w-[80&]  rounded-3xl' src={repeat2} alt='i2'/>
            </div>
        </div>

        <div className='flex justify-between flex-col sm:flex-row'>
            <div className='w-[95%] sm:[50%] m-5'>
            <h2 className='font-semibold text-left text-[20px] mb-3 ml-3 md:mb-6 lg:text-2x1 leading-[1.5]'>AUTOMATE AND ACT</h2>
            <p className='m-3 leading-[1.5]  text-sm md:text-lg lg:text-xl md:text-left'>
            Repeat generates events that you can use to automate flows and enriches customer profiles with data for personalization and segmentation. It all flows seamlessly into Klaviyo, Postscript, and Attentive to give you new ways to optimize your retention workflow.
            </p>
            </div>
            <div className='w-[80%] sm:[50%] py-10 mx-auto'>
            <img className='w-[95%] sm:w-[80&]  rounded-3xl' src={repeat3} alt='i1'/>
            </div>
        </div>

    </div>
)
}

export default RepeatWorks