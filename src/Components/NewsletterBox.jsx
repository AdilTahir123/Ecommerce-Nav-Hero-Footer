import React from 'react'

const NewsletterBox = () => {
    const submitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now and Get 20% Off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cupiditate hic id odio ipsam quod sunt sapiente!
        </p>
        <form onSubmit={submitHandler} className='w-full sm:w-1/2 mx-auto my-6 flex border pl-3 justify-between  items-center gap-3 '>
        <input type='email'  placeholder='Enter Your Email ' className='w-full outline-none sm:flex-1' required/>
        <button type='submit' className='bg-black py-4 px-10  text-xs  text-white '>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox