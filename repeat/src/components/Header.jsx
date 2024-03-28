import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isOpen , setisOpen] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/book-demo')
    }

    const handleToggle = () => {
        setisOpen(!isOpen)
    }
  
  return (
    <div className='w-full min-h-full  bg-[#f5ff7d]'>
        <div className=' flex md:flex justify-between h-16 p-3'>

            <div><strong className='font-bold text-2xl'>Repeat</strong></div>

            <ul className='hidden md:flex justify-center'>
                <li className='relative mx-5 text-lg cursor-pointer' onClick={handleToggle}>Products
                <ArrowDropDownIcon/>
                {
                    isOpen ? <>
                <div className="absolute left-[-60px] mt-4 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="md:py-1 text-left">
                      <Link to='/moments'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Moments
                        </Link>
                        <Link to='/plays'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Plays
                        </Link>
                        <Link to='/goals'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Goals
                        </Link>
                        <Link to='/examples'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Examples
                        </Link>
                        <Link to='/integrations'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Integrations
                        </Link>
                        <Link to='/pricing'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Pricing
                        </Link>
                    </div>
              </div>      

                    </> 
                    : null
                }
                </li>
                <li className='mx-5 text-lg cursor-pointer'>Blogs</li>
                <li className='mx-5 text-lg cursor-pointer'>Stop Focusing on LTV</li>
            </ul>
            <div className='flex justify-end'>

                <button onClick={handleClick} className='bg-black text-white h-10 rounded-2xl px-1 w-36 text-xl  md:px-2 md:w-40 md:text-2x1'>Book a Demo</button>
                <div className='flex justify-end pl-6 cursor-pointer pt-[6px] md:hidden'>
                    <MenuIcon onClick={handleToggle}/>                
                </div>
                { isOpen ? 
                <div className="origin-top-right absolute right-0 mt-12 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 text-left md:hidden">
                      <Link to='/moments'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Moments
                        </Link>
                        <Link to='/plays'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Plays
                        </Link>
                        <Link to='/goals'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Goals
                        </Link>
                        <Link to='/examples'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Examples
                        </Link>
                        <Link to='/integrations'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Integrations
                        </Link>
                        <Link to='/pricing'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Pricing
                        </Link>
                        <Link to='/blogs'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Blogs
                        </Link>
                        <Link to='/focusing-ltv'
                        className="block p-4 text-sm text-gray-700 hover:bg-[#f5ff7d] hover:text-gray-900"
                        >
                        Stop Focusing on LTV
                        </Link>
                    </div>
              </div>      
              : null
                }
      
            </div>
        </div>
        </div>
  )
} 
