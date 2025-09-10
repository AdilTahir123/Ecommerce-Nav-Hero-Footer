import React from 'react'
import '../App.css'
import { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import assets from '../assets/admin_assets/logo.png'
import assets1 from '../assets/frontend_assets/search_icon.png'
import assets2 from '../assets/frontend_assets/profile_icon.png'
import assets3 from '../assets/frontend_assets/cart_icon.png'
import assets4 from '../assets/frontend_assets/menu_icon.png'
import assets5 from '../assets/frontend_assets/dropdown_icon.png'
const Navbar = () => {
  const [visible,setVisible]=useState(false);
  return (
    <div className='flex justify-between items-center py-4 font-medium '>

    <Link to='/'><img src={assets} alt="Logo" className='w-36' /></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
          </NavLink>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
          <NavLink to="/Collection" className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
          </NavLink>
          <NavLink to='/About' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
          </NavLink>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
          <NavLink to="/Contact" className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
          </NavLink>
        </ul>
        <div className='flex items-center gap-6 '>
          <img src={assets1} alt="search" className='w-5 cursor-pointer'/>
          <div className="group relative">
            <img className='w-5 cursor-pointer' src={assets2} alt="Profile" />
             <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
               <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg'>
                   <p className='cursor-pointer hover:text-black'>Profile</p>
                   <p className='cursor-pointer hover:text-black'>Orders</p>
                   <p className='cursor-pointer hover:text-black'>Logout</p>
               </div>
             </div>
          </div>
          <Link to="/cart" className='relative'>
          <img src={assets3} alt="Cart" className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>0</p>
          </Link>
          <img onClick={() => setVisible(true)} src={assets4} alt="menu" className='w-5 cursor-pointer sm:hidden' /> 
        </div>
        {/*...............sidebar............. */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-500'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
              <img src={assets5} alt="sidebar logo" className='h-4 cursor-pointer rotate-180' />
              <p className='text-lg font-semibold'>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6  border-t border-gray-200'>HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} to='/Collection' className='py-2 pl-6 border-t border-gray-200'>COLLECTION</NavLink>
            <NavLink onClick={() => setVisible(false)} to='/About' className='py-2 pl-6 border-t border-gray-200'>ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} to='/Contact' className='py-2 pl-6 border-t border-gray-200'>CONTACT</NavLink>
          </div>

        </div>
    </div>
  )
}

export default Navbar