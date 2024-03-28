import React from 'react'
import repeat1 from '../assets/repeat1.png'
import repeat2 from '../assets/repear2.png'
import repeat3 from '../assets/repeat3.png'

const RepeatWorks = () => {
  return (
    <div className='w-full min-h-full lg:p-10 bg-[#EDE7DE] pt-[50px]'>
        <div className='p-4 lg:w-[55%]'>
            <h2 className='font-bold text-left text-3xl mb-3 sm:text-4xl md:text-5xl md:mb-6 leading-[1.5]'>HOW REPEAT WORKS</h2>
        </div>

        <div className='flex justify-between flex-col sm:flex-row'>
            <div className='w-[90%] sm:[50%] m-5'>
            <h2 className='font-bold text-left text-[24px] mb-3 ml-3 md:mb-6 leading-[1.5]'>INGEST AND ANALYZE</h2>
            <p className='m-3 leading-[1.5]  sm:text-lg  md:text-left'>
            Repeat connects to your Shopify store to ingest all of your historical orders and each new order that your customers place. We analyze those orders at the store level to identify trends and at the customer level to understand individual behavior.            </p>
            </div>
            <div className='w-[80%] sm:[50%] m-5 mx-auto'>
            <img className='w-[95%] sm:w-[80&]  rounded-3xl' src={repeat1}/>
            </div>
        </div>

        <div className='flex justify-between flex-col sm:flex-row'>
            <div className='w-[90%] sm:[50%] m-5'>
            <h2 className='font-bold text-left text-[24px] mb-3 ml-3  md:mb-6 leading-[1.5]'>TRANSFORM AND REPEAT</h2>
            <p className='m-3 leading-[1.5]  sm:text-lg  md:text-left'>
            Repeat feels like magic, but we're not a black box. We utilize your store's data to produce valuable insights and reports that help you level up your retention strategy with the same intelligence that fuels Repeat's tools.
            </p>
            </div>
            <div className='w-[80%] sm:[50%] m-5 mx-auto'>
            <img className='w-[95%] sm:w-[80&]  rounded-3xl' src={repeat2}/>
            </div>
        </div>

        <div className='flex justify-between flex-col sm:flex-row'>
            <div className='w-[90%] sm:[50%] m-5'>
            <h2 className='font-bold text-left text-[24px] mb-3 ml-3 md:mb-6 leading-[1.5]'>AUTOMATE AND ACT</h2>
            <p className='m-3 leading-[1.5]  sm:text-lg  md:text-left'>
            Repeat generates events that you can use to automate flows and enriches customer profiles with data for personalization and segmentation. It all flows seamlessly into Klaviyo, Postscript, and Attentive to give you new ways to optimize your retention workflow.
            </p>
            </div>
            <div className='w-[80%] sm:[50%] m-5 mx-auto'>
            <img className='w-[95%] sm:w-[80&]  rounded-3xl' src={repeat3}/>
            </div>
        </div>

    </div>
)
}

export default RepeatWorks