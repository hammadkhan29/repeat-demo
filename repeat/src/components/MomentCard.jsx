import React from 'react'

export const MomentCard = ({item}) => {
    return ( 
        <div className='flex justify-center flex-col m-1  bg-white border border-black w-[95%] text-left rounded-3xl'>
            <h5 className='pt-4 px-3 font-medium'>{item.title}</h5>
            <p className='px-3 pb-2 font-normal text-sm'>{item.description}</p>
            <p className='px-3 no-underline pb-2 font-extralight text-xs'>{item.anchor}</p>
        </div>
      )
    }
