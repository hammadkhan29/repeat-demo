import React from 'react'
import f1 from '../assets/f1.png'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <div className='bg-black w-full min-h-full lg:p-10 pb-10'>
        <div className='pt-16 text-white flex justify-between pl-4 pb-10'>
            <ProductionQuantityLimitsIcon/>
            <div className='flex justify-end pr-4'>
              <FacebookIcon className='pr-2'/>
              <InstagramIcon className='pr-2'/>
              <LinkedInIcon className='pr-2'/>
            </div>
        </div>

        <div className=' text-white'>
            <ul className='flex justify-start flex-wrap'>
                <li className='px-8 py-2 text-xl'>Blog</li>
                <li className='px-8 py-2 text-xl'>Podcast</li>
                <li className='px-8 py-2 text-xl'>Newsletter</li>
                <li className='px-8 py-2 text-xl'>Jobs</li>
                <li className='px-8 py-2 text-xl'>Privacy Policy</li>
                <li className='px-8 py-2 text-xl'>Terms of services</li>
            </ul>
        </div>

        <div className='text-white'>
            <p className='text-lg text-left pl-8 pt-10 pb-16'>© 2023 REPEAT INC. Moments is a trademark of Repeat, Inc.</p>
        </div>
    </div>
  )
}
