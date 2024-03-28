import React from 'react'
import logo2 from '../assets/logo2.png'
import { MomentCard } from './MomentCard'

const Third = () => {

    const data = [
        {
            title : 'Replishment Moment',
            description : 'Customers in this moment are ready to buy a product they have bought before',
            anchor : 'explore replishment'
        },
        {
            title : 'Replishment Moment',
            description : 'Customers in this moment are ready to buy a product they have bought before',
            anchor : 'explore replishment'

        },
        {
            title : 'Replishment Moment',
            description : 'Customers in this moment are ready to buy a product they have bought before',
            anchor : 'explore replishment'

        },
        {
            title : 'Replishment Moment',
            description : 'Customers in this moment are ready to buy a product they have bought before',
            anchor : 'explore replishment'

        }
    ]
  return (
    <div className='w-full min-h-full lg:p-10 bg-[#EDE7DE] pt-[50px]'>
        <div className='p-4 lg:w-[55%]'>
            <h2 className='font-bold text-left text-3xl mb-3 sm:text-4xl md:text-5xl md:mb-6 leading-[1.5]'>DRIVE MORE SECOND ORDERS WITH MOMENTS THAT MATTER</h2>
        </div>

        <div className='flex justify-between flex-col sm:flex-row'>
            <div className='w-[90%] sm:[50%] m-5'>
            <p className='m-3 leading-[1.5]  sm:text-lg md:text-xl md:text-left'>
            Repeat monitors when customers enter key Moments—think cross-selling, replenishment, lapsing—and passes that intelligence to the email and SMS platforms you use today. The result is <strong>more personalized campaigns, smarter flows</strong>, and an <strong>easier retention workflow.</strong>
            <br/>
            Moments make it a breeze to create the kind of hyper-personalized messaging that used to require complicated if/else logic, rigid timing, and burdensome setup.        
            </p>
            </div>
            <div className='w-[80%] sm:[50%] m-5 mx-auto'>
            <img className='w-[95%] sm:w-[80&] h-[400px] rounded-3xl' src={logo2}/>
            </div>

        </div>

        <div className='p-4 lg:w-[55%]'>
            <h2 className='text-4xl leading-[1.5] font-semibold mb-6 text-left'>FEATURE MOMENTS</h2>
        </div>

        <div className="w-[95%] grid gap-4 grid-cols-1 sm:grid-cols-2 md:gap-x-[100px] md:gap-y-[50px] p-[4%]">
            {
                data.map((item , index)=> {
                    return (
                        <div key={index}>
                        <MomentCard item={item}/>    
                        </div>    
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default Third