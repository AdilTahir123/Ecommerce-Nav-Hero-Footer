import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around text-center text-gray-700 gap-12 text-xs sm:text-sm py-20  sm:gap-2 p md:text-base '>
        <div>
            <img src={assets.exchange_icon} className='w-10 m-auto mb-5'/>
            <p className='font-bold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer free exchange policy</p>
        </div>
             <div>
            <img src={assets.quality_icon} className='w-10 m-auto mb-5'/>
            <p className='font-bold'>7 Day Return Policy</p>
            <p className='text-gray-400'>We offer free exchange policy in 7 days</p>
        </div>
             <div>
            <img src={assets.support_img} className='w-10 m-auto mb-5'/>
            <p className='font-bold'>Support Customer Policy</p>
            <p className='text-gray-400'>We offer 24/7 support to customer</p>
        </div>
    </div>
  )
}

export default OurPolicy