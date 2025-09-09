import { useContext } from 'react';
import React from 'react'
import ProductItems from './ProductItems';
import { useState,useEffect } from 'react';
import Title from './Title';

import { ShopContext } from '../Context/ShopContext';
const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);
    useEffect(() => {
        const latest = products.slice(0,10);
        setLatestProducts(latest);
    }, []);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <Title text1='Latest' text2='Collection' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Discover the latest trends and styles in our new collection.</p>
        </div>
    {/* render latest Products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-1'>
        {latestProducts.map((item,index) => (
            <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
    </div>
    </div>
  )
}

export default LatestCollection