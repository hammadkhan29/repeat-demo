import React from 'react'

export const Card = ({item}) => {

  return (
    <div className='flex justify-center flex-col border border-black lg:w-64 w-[95%]  text-left rounded-3xl'>
        <img className='lg:w-64 w-[100%] pb-1 rounded-3xl' src={item.img} alt='logo'/>
        <h5 className='font-semibold py-1 px-2'>{item.tagline}</h5>
        <p className='py-1 px-2'>{item.description}</p>
        <p className='font-semibold py-1 px-2'>{item.author}</p>
        <p className='underline py-1 px-2'>{item.anchorLink}</p>
    </div>
  )
}
