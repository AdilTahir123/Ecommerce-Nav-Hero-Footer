import React from 'react'
import assets from '../assets/admin_assets/logo.png'
const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-gray-400'>
        <div>
            <img src={assets} alt="logo-footer" className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati blanditiis possimus quia enim beatae quis quae ipsum repellat iure.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
             <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+0308-7475047</li>
                <li>adil@gmail.com</li>
           </ul>
        </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-center text-sm'>Copyright 2025@-All-Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer