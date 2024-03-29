import React from 'react'
import i1 from '../assets/i1.jpg'
import { Card } from './Card'
import logo1 from '../assets/logo1.png'

export const Second = () => {
    const data = [
        {
            img : i1,
            tagline : 'Increase 90-day repeat orders by 10%',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author : 'John doe',
            anchorLink : 'read more',
        },
        {
            img : i1,
            tagline : 'Increase 90-day repeat orders by 10%',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author : 'John doe',
            anchorLink : 'read more',
        },
        {
            img : i1,
            tagline : 'Increase 90-day repeat orders by 10%',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author : 'John doe',
            anchorLink : 'read more',
        }
    ]

  return ( 
    <div className='w-full lg:p-10 pb-10'>

        <div className='p-4 lg:w-[55%]'>
            <h2 className='font-bold text-left text-2xl mb-3 sm:text-3xl md:text-4xl lg:text-5x1 md:mb-6 leading-[1.5]'>YOUR FAVORITE BRANDS ARE HAVING A MOMENT</h2>
        </div>
 
        <div className='w-[100%] grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:gap-x-[100px] lg:gap-y-[50px] p-[4%]'>
            {
                data.map((item , index)=> {
                    return (
                        <div key={index} className='flex justify-center lg:w-72'>
                        <Card item={item}/>    
                        </div>    
                    )
                })
            }
            
        </div>
        <div className='w-[100%] grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-[120px] lg:gap-y-[50px] p-[20px]'>
            <div className='w-full h-[120px] lg:w-[200px] rounded-3xl'><img src={logo1} alt='s1' /></div>
            <div className='w-full h-[120px] lg:w-[200px] rounded-3xl'><img src={logo1} alt='s2' /></div>
            <div className='w-full h-[120px] lg:w-[200px] rounded-3xl'><img src={logo1} alt='s3' /></div>
            <div className='w-full h-[120px] lg:w-[200px] rounded-3xl'><img src={logo1} alt='s4' /></div>
        </div>

    </div>
  )
}
