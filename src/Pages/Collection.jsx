import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import assets from '../assets/frontend_assets/dropdown_icon.png';
import Title from '../Components/Title';
const Collection = () => {
  const { product } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Product */}
      <div className='min-w-60'>
        <p onClick={() => { setShowFilter(!showFilter) }} className='my-2 text-xl flex cursor-pointer gap-2'>FILTERS
          <img className={`h-3 my-2  sm:hidden  ${showFilter ? 'rotate-90' : ''}`} src={assets} alt='dropdown_icon' />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 mt-6 py-3 pl-5 ${showFilter ? '' : 'hidden'} sm:block `}>
          <p className='mb-3 font-medium text-sm'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} />Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} />Kids
            </p>
          </div>
        </div>
        {/* Sub-Category */}
        <div className={`border border-gray-300 my-5 py-3 pl-5 ${showFilter ? '' : 'hidden'} sm:block `}>
          <p className='mb-3 font-medium text-sm'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4 '>
          <Title text1={'All'} text2={'Collections'} />
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="Relavant">Sort By:Relavent</option>
            <option value="low-high">Sort By:low-high</option>
            <option value="high-low">Sort By:high-low</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Collection