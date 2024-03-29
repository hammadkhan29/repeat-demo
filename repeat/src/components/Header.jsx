import React , { useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link , useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'

export const Header = () => {
    const goals = useSelector(state => state.goals.goals);

    const [isHovered , setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const filterGoals = goals.filter((item , index)=>{
    return item.status !== 'finished';
    })        

    const [isOpen , setisOpen] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/book-demo')
    }

    const handleToggle = () => {
        setisOpen(!isOpen)
    }
    const handleRedirect = () =>[
        navigate('/')
    ]
  return (
    <div className='w-full bg-[#f5ff7d]'>
        <div className=' flex md:flex justify-between h-16 p-2'>

            <div className='font-semibold text-lg m-1 flex cursor-pointer' onClick={handleRedirect}> 
                    <ShoppingCartCheckoutIcon/> Repeat
            </div>

            <ul className='hidden md:flex justify-center m-2'>

                <li className='relative mx-4 text-sm cursor-pointer' onClick={handleToggle}>
                    Products <ArrowDropDownIcon/>
                {
                    isOpen ? <>
                    <div className="absolute left-[-60px] mt-4 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="md:p-1 text-left">
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

                <li className='mx-4 text-sm cursor-pointer'>Blogs</li>

                <li className='mx-4 text-sm cursor-pointer'>Stop Focusing on LTV</li>

            </ul>

            <div className='flex justify-end'>

                <div className='m-2 pr-[10px] cursor-pointer relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <ShoppingCartCheckoutIcon/>

                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                        {filterGoals.length}
                    </div>

                    <div className={`absolute top-11 right-0 bg-[#f5ff7d] w-[250px] h-[40px]  text-black text-sx font-bold  px-1 ${isHovered ? 'visible' : 'hidden'}`}>
                        You have {filterGoals.length} pending tasks
                    </div>
                </div>

                <button onClick={handleClick} className='bg-black text-white h-10 rounded-2xl px-1 w-36 text-xl  md:px-2 md:w-40 md:text-2x1'>Book a Demo</button>

                <div className='flex justify-end pl-6 cursor-pointer pt-[6px] md:hidden'>
                    <MenuIcon onClick={handleToggle}/>                
                </div>
                { isOpen ? 
                <div className="origin-top-right absolute right-0 mt-12 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1 text-left md:hidden">
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
                        <Link to='/goals' onClick={handleToggle}
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
