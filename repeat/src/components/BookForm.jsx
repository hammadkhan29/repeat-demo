import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Modal} from '@mui/material'
import { useNavigate } from 'react-router-dom';

export const BookForm = () => {
    const {register , handleSubmit , formState : { errors }} = useForm()
    const [ open , setOpen] = useState(true)

    const onSubmit = (data) => {
    console.log(data);
    };

    const navigate = useNavigate()

    const handleClose = () => {
      setOpen(false)
      navigate('/')
    }
 
  return (
    <Modal open={open} onClose={handleClose} className='flex justify-center items-center'>
      <div className='w-[400px]  bg-[#EDE7DE] rounded-2xl  border border-black'>
      <h2 className='font-bold text-3xl m-2 ml-4'>Book a Demo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col m-3'>
          <label className='font-semibold text-lg'>Email<span className='text-red-600'>*</span></label>
          <input className='h-[30px] rounded-2xl p-2' type="email"
          {...register( 'email' , { required: true, pattern: /^\S+@\S+$/i })}/>
          {errors.email && errors.email.type === "required" && (
            <span className=' text-red-600 text-xs'>Email is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className=' text-red-600 text-xs'>Invalid email format</span>
          )}
        </div>
        <div className='flex flex-col m-3'>
          <label className='font-semibold text-lg'>Company Name<span className='text-red-600'>*</span></label>
          <input className='h-[30px] rounded-2xl p-2' type="text"
          {...register( 'companyName', { required: true })}/>
          {errors.companyName && <span className=' text-red-600 text-xs'>Name is required</span>}
        </div>
        <div className='flex flex-col m-3'>
          <label className='font-semibold text-lg'>Monthly Order Volume<span className='text-red-600'>*</span></label>
          <select className='h-[40px] rounded-2xl p-2'  {...register( 'orderVolume' ,{ required: true })}>
            <option value="">Select an option</option>
            <option value="option1">Less than 5,000</option>
            <option value="option2">5,000 to 10,000</option>
            <option value="option3">10,000 to 15,000</option>
            <option value="option4">15,000 to 20,000</option>
            <option value="option5">More than 20,000</option>
          </select>
          {errors.orderVolume && <span className=' text-red-600 text-xs'>Please select an option</span>}
        </div>
        <div className=' bg-[#F5FF7D] text-white h-[30px] rounded-xl mx-4 w-40 m-[20px] text-2x1 text-center'> 
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </Modal>
  );
};

