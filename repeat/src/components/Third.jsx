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
    <div className='w-full lg:p-10 bg-[#EDE7DE] pt-[30px]'>
        <div className='p-4 lg:w-[55%]'>
            <h2 className='font-bold text-left text-2xl mb-2 sm:text-3xl md:text-4x1 lg:text-5xl md:mb-4'>DRIVE MORE SECOND ORDERS WITH MOMENTS THAT MATTER</h2>
        </div>

        <div className='flex justify-between flex-col sm:flex-row'>
            <div className='w-[95%] sm:[50%] m-4'>
                <p className='m-2 sm:text-lg md:text-xl md:text-left'>
                Repeat monitors when customers enter key Moments—think cross-selling, replenishment, lapsing—and passes that intelligence to the email and SMS platforms you use today. The result is <strong>more personalized campaigns, smarter flows</strong>, and an <strong>easier retention workflow.</strong>
                <br/>
                Moments make it a breeze to create the kind of hyper-personalized messaging that used to require complicated if/else logic, rigid timing, and burdensome setup.        
                </p>
            </div>
            <div className='w-[80%] sm:[50%] m-5 mx-auto'>
            <img className='w-[95%] sm:w-[80&] rounded-3xl' src={logo2} alt='l1'/>
            </div>

        </div>

        <div className='p-4 lg:w-[55%]'>
            <h2 className='text-xl sm:text-2x1 md:text-3x1 lg:text-4x1 font-semibold mb-4 text-left'>FEATURE MOMENTS</h2>
        </div>

        <div className="w-[100%] grid gap-4 grid-cols-1 sm:grid-cols-2 md:gap-x-[100px] md:gap-y-[50px] px-[4%] py-[1%]">
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