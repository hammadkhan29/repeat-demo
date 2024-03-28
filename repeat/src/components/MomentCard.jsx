import React from 'react'

export const MomentCard = ({item}) => {
    return ( 
        <div className='flex justify-center flex-col m-3 h-[140px] sm:h-[200px] bg-white border border-black w-[95%] text-left rounded-3xl'>
            <h5 className='pt-6 pl-6 font-semibold'>{item.title}</h5>
            <p className='pl-6 pb-2'>{item.description}</p>
            <p className='pl-6 underline p-2'>{item.anchor}</p>
        </div>
      )
    }
