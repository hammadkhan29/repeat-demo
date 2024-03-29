import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleGoalStatus } from '../redux/slices/goalsSlice';

const Goals = () => {
    const goals = useSelector(state => state.goals.goals);
    const dispatch = useDispatch()
    console.log(goals)
    const handleCheckboxChange = (id , val) => {
        dispatch(toggleGoalStatus({ id , val }));
      };
    
    return (
    <div className='w-full lg:p-10 bg-[#EDE7DE] pt-[20px]'>
        <div className='p-4 lg:w-[55%]'>
            <h1 className='font-bold text-left text-2x1 sm:text-3xl mb-2 md:text-4xl lg:text-5xl md:mb-3 leading-[1.5]'>GOALS</h1>
        </div>

        <div className='p-4 lg:w-[55%]'>
            <h2 className='text-xl sm:text-2x1 md:text-3x1 font-semibold mb-2 text-left'>MARK THE STATUS OF YOUR GOALS</h2>
        </div>

        <div className="w-[100%] grid gap-4 grid-cols-1 sm:grid-cols-2 md:gap-x-[100px] md:gap-y-[50px] px-[6%] py=[1%]">
            {
                goals.map((item , index)=> {
                    return (
                <div key={index} className='flex justify-center flex-col m-1 h-[190px] sm:h-[200px] bg-white border border-black w-[95%] text-left rounded-3xl'>
                    <h5 className='pt-2 px-3 font-semibold'>{item.title}</h5>
                    <p className='px-3 pb-2'>{item.description}</p>
                    <p className='px-3 p-2'>{item.anchor}</p>
                    <div className='flex justify-center p-2 m-2 bg-[#EDE7DE] rounded-3xl'>
                        <div className='mx-4 flex'>
                            <input
                                type="radio"
                                value='finished' 
                                id={`finished-${item.id}`}
                                name={`status-${item.id}`}
                                onChange={() => handleCheckboxChange(item.id , 'finished')}
                                className="pl-6 mt-2"
                            />
                            <label htmlFor={`goal-${item.id}`} className="pl-2 mt-2">Finished</label>

                        </div>
                        <div className='mx-4 flex'>
                            <input
                                type="radio"
                                value = 'suspended'
                                id={`suspended-${item.id}`}
                                name={`status-${item.id}`}
                                onChange={() => handleCheckboxChange(item.id,'suspended')}
                                className="pl-6 mt-2"
                            />
                            <label htmlFor={`goal-${item.id}`} className="pl-2 mt-2">Suspended</label>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
                
        </div>

    </div>
  )
}

export default Goals