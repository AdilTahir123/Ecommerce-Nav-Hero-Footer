import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import assets from '../assets/frontend_assets/dropdown_icon.png';
import Title from '../Components/Title';
import ProductItems from '../Components/ProductItems';

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("Relavant");

  // Reset products on load
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);
 
 
  // Category toggle
  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  // SubCategory toggle
  const SubtoggleCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  // Filtering + Sorting
  useEffect(() => {
    let filtered = [...products];
    if(showSearch && search){
      filtered=filtered.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }
    // Category filter
    if (Category.length > 0) {
      filtered = filtered.filter(item => Category.includes(item.category));
    }

    // SubCategory filter
    if (subCategory.length > 0) {
      filtered = filtered.filter(item => subCategory.includes(item.subCategory));
    }

    // Sorting
    if (sortType === "low-high") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(filtered);
  }, [Category, subCategory, sortType, products,showSearch,search]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Sidebar */}
      <div className='min-w-60'>
        <p
          onClick={() => { setShowFilter(!showFilter) }}
          className='my-2 text-xl flex cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 my-2 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets} alt='dropdown_icon' />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 mt-6 py-3 pl-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 font-medium text-sm'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p><input type="checkbox" className='w-3' value="Men" onChange={toggleCategory}/> Men</p>
            <p><input type="checkbox" className='w-3' value="Women" onChange={toggleCategory}/> Women</p>
            <p><input type="checkbox" className='w-3' value="Kids" onChange={toggleCategory}/> Kids</p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 my-5 py-3 pl-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 font-medium text-sm'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p><input type="checkbox" className='w-3' value="Topwear" onChange={SubtoggleCategory}/> Topwear</p>
            <p><input type="checkbox" className='w-3' value="Bottomwear" onChange={SubtoggleCategory}/> Bottomwear</p>
            <p><input type="checkbox" className='w-3' value="Winterwear" onChange={SubtoggleCategory}/> Winterwear</p>
          </div>
        </div>
      </div>

      {/* Products Area */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="All" text2="Collections" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value="Relavant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProduct.map((item, index) => (
            <ProductItems
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
