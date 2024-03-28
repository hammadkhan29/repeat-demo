import React, { useState } from 'react'

const Goals = () => {


    const data = [
        {
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment'
        },
        {
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment'
        },
        {
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: false,
        },
        {
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: false,
        },
        {
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: false,
        },
        {
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: false,
        },
        {
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: false,
        },
        {
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: false,
        },
        {
            title : 'Implement goals feature',
            description : 'Used redux for state managment',
            anchor : 'explore replishment',
            status: false,
       },
    ]

    const [goals , setGoals] = useState(data)
    const handleCheckboxChange = (id) => {
        // Update the status of the goal with the provided id
        // const updatedGoals = goals.map(goal => {
        //     if (goal.id === id) {
        //         return { ...goal, status: !goal.status }; // Toggle the status
        //     }
        //     return goal;
        // });
        // setGoals(updatedGoals); // Update the state
        // dispatch(updateGoalStatus({ id, status: !goals.find(goal => goal.id === id).status })); // Dispatch action to update Redux state
    };

    return (
    <div className='w-full min-h-full lg:p-10 bg-[#EDE7DE] pt-[50px]'>
        <div className='p-4 lg:w-[55%]'>
            <h1 className='font-bold text-left text-3xl mb-3 sm:text-4xl md:text-5xl md:mb-6 leading-[1.5]'>GOALS</h1>
        </div>

        <div className='p-4 lg:w-[55%]'>
            <h2 className='text-4xl leading-[1.5] font-semibold mb-6 text-left'>MARK THE STATUS OF YOUR GOALS</h2>
        </div>

        <div className="w-[95%] grid gap-4 grid-cols-1 sm:grid-cols-2 md:gap-x-[100px] md:gap-y-[50px] p-[4%]">
            {
                data.map((item , index)=> {
                    return (
        <div key={index} className='flex justify-center flex-col m-3 h-[140px] sm:h-[200px] bg-white border border-black w-[95%] text-left rounded-3xl'>
            <h5 className='pt-6 pl-6 font-semibold'>{item.title}</h5>
            <p className='pl-6 pb-2'>{item.description}</p>
            <p className='pl-6 underline p-2'>{item.anchor}</p>
            <input
                            type="checkbox"
                            checked={item.status} // Bind checkbox to status property
                            onChange={() => handleCheckboxChange(item.id)} // Handle checkbox change
                            className="pl-6 mt-2"
                        />
            <label htmlFor={`goal-${item.id}`} className="pl-2">Completed</label>
        </div>
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default Goals