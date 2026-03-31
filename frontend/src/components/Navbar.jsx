import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, Link} from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium '>
        <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className= 'flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
            </NavLink>
            <NavLink to='/find-your-silk' className="flex flex-col items-center gap-1">
                <p className="relative px-3  overflow-hidden text-black wave-bg ripple">
                    FIND YOUR SILK
                </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
            </NavLink>
            <NavLink to='/collection' className= 'flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
            </NavLink>
            <NavLink to='/about' className= 'flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
            </NavLink>
            <NavLink to='/contact' className= 'flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
            </NavLink>

        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group relative'>
                <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to= '/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[11px]'>10</p>
            </Link>
            <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* sidebar menu for small screens */}
        {/* Overlay */}
        <div 
        onClick={() => setVisible(false)} 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 
        ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        ></div>

        {/* Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 
        transition-transform duration-300 shadow-lg 
        ${visible ? 'translate-x-0' : 'translate-x-full'}`}>

            <div className='flex flex-col text-gray-700'>

                {/* Back Button */}
                <div onClick={() => setVisible(false)} 
                    className='flex items-center gap-4 p-4 cursor-pointer border-b'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p className='font-medium'>Back</p>
                </div>

                {/* Links */}
                <NavLink onClick={() => setVisible(false)} 
                        className='py-3 pl-6 border-b hover:bg-gray-100' to='/'>
                    HOME
                </NavLink>

                <NavLink onClick={() => setVisible(false)} 
                        className='py-3 pl-6 border-b hover:bg-gray-100' to='/collection'>
                    COLLECTION
                </NavLink>

                <NavLink onClick={() => setVisible(false)} 
                        className='py-3 pl-6 border-b hover:bg-gray-100' to='/about'>
                    ABOUT
                </NavLink>

                <NavLink onClick={() => setVisible(false)} 
                        className='py-3 pl-6 border-b hover:bg-gray-100' to='/contact'>
                    CONTACT
                </NavLink>

            </div>
        </div>
    </div>
  )
}

export default Navbar