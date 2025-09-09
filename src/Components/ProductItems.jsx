import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const ProductItems = ({id,name,image,price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer '>
        <div  className='overflow-hidden'>
      <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
      </div>
      <p className='text-sm pt-3 pb-3'>{name}</p>
      <p className='text-sm font-medium'>{price}{currency}</p>

    </Link>
  )
}

export default ProductItems