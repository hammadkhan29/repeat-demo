import React from 'react'
import p1 from '../assets/p1.png'

export const PlayMoment = () => {

    const data = [
        {
            title : 'Decrease Customer Chunk',
            desc : 'save customer at risk of lapsing',
            anchor : 'Explore Plays'
        },
        {
            title : 'Decrease Customer Chunk',
            desc : 'save customer at risk of lapsing',
            anchor : 'Explore Plays'
        },
        {
            title : 'Decrease Customer Chunk',
            desc : 'save customer at risk of lapsing',
            anchor : 'Explore Plays'
        }
    ]
  return (
    <div className='w-full  lg:p-10 pb-8'>
    <div className='p-4 lg:w-[75%]'>
    <h2 className='font-bold text-left text-2x1 sm:text-3xl mb-3 md:text-4xl lg:text-5xl md:mb-4'>ACTIVTATE MOMENTS WITH PLAY</h2>
    </div>

    <div className='flex justify-between flex-col sm:flex-row'>
            <div className='w-[90%] sm:[50%] m-5'>
            <p className='m-3 text-xl sm:text-sm md:text-lg md:text-left'>
            The key to simplifying your work without sacrificing performance: ready-made Plays, like Moment-specific flows, dynamic email banners, and personalized direct mail, make it easy to leverage the Moments that Repeat surfaces. They’ll help you quickly create campaigns and flows that resonate with your customers, no matter what stage of the lifecycle they’re in.</p>
            </div>
            <div className='w-[80%] sm:[50%] m-5 mx-auto'>
            <img className='w-[95%] sm:w-[80&] rounded-3xl' src={p1} alt='p1'/>
            </div>


        </div>
        <div className='p-4 lg:w-[75%]'>
            <h2 className='font-bold text-left text-2x1 sm:text-3xl mb-3 md::text-4xl lg:text-5xl md:mb-6 leading-[1.5]'>FEATURE PLAYS</h2>
        </div>

        <div className='w-[100%] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-[50px] md:gap-y-[50px] px-[4%] py=[1%]'>
            {
                data.map((item , index)=> {
                    return (
                        <div key={index}>
                            <div className='flex justify-center flex-col m-2 bg-white border border-black w-[100%] text-left rounded-3xl'>
                                <h5 className='pt-4 px-3 lg:p-1 font-semibold text-xl'>{item.title}</h5>
                                <div>
                                    <div className=' bg-violet-300 inline mx-3 px-1'><span>Email</span></div>
                                    <div className='bg-violet-300 inline mx-3 px-1'><span>SMS</span></div>
                                </div>
                                <p className='px-3 pb-2 lg:p-1 font-light'>{item.desc}</p>
                                <p className='px-3 p-2 lg:p-1 font-extralight'>{item.anchor}</p>
                            </div>
                        </div>    
                    )
                })
            }
            
        </div>


        <div className='p-4 lg:w-[75%]'>
            <h2 className='font-bold text-left text-2x1 sm:text-3xl mb-3 md::text-4xl lg:text-5xl md:mb-6 leading-[1.5]'>SEE HOW REPEAT CAN HELP YOU</h2>
        </div>
        <div className='w-[100%] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-[50px] md:gap-y-[50px] px-[4%] py=[1%]'>
            {
                data.map((item , index)=> {
                    return (
                        <div key={index}>
                            <div className='flex justify-center flex-col m-2 bg-white border border-black w-[100%] text-left rounded-3xl'>
                                <h5 className='pt-4 px-3 lg:p-1 font-semibold text-xl'>{item.title}</h5>
                                <p className='px-3 pb-2 lg:p-1'>{item.desc}</p>
                                <p className='px-3 p-2 lg:p-1 font-extralight'>{item.anchor}</p>
                            </div>
                        </div>    
                    )
                })
            }
            
        </div>

    </div>
  )
}
