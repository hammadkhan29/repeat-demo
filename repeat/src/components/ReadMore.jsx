import React from 'react'
import r1 from '../assets/r1.png'
import { Card } from './Card'

const ReadMore = () => {

    const data = [
        {
            img : r1,
            tagline : 'Increase 90-day repeat orders by 10%',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author : '',
            anchorLink : 'read more',
        },
        {
            img : r1,
            tagline : 'Increase 90-day repeat orders by 10%',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author : '',
            anchorLink : 'read more',
        },
        {
            img : r1,
            tagline : 'Increase 90-day repeat orders by 10%',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author : '',
            anchorLink : 'read more',
        }
    ]

  return (
    <div className='w-full lg:p-10 pb-10'>
        <div className='p-4 lg:w-[55%]'>
            <h2 className='font-bold text-left text-2xl mb-3 sm:text-3x1 md:text-4xl lg:text-5xl md:mb-4'>READ MORE</h2>
        </div>

        <div className='w-[100%] grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:gap-x-[100px] lg:gap-y-[50px] p-[4%]'>
        {
            data.map((item , index)=> {
                return (
                    <div key={index}>
                        <Card item={item}/>    
                    </div>    
                    )
                })
        }       
    
        </div>
    </div>
)
}

export default ReadMore