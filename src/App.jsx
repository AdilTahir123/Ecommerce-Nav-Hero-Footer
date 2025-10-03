import React from 'react'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Cart from './Pages/Cart.jsx'
import Collection from './Pages/Collection.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Orders from './Pages/Orders.jsx'
import PlaceOrder from './Pages/PlaceOrder.jsx'
import Product from './Pages/Product.jsx'
import Navbar from './Components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer.jsx'
import SearchBox from './Components/SearchBox.jsx'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <SearchBox/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:Id' element={<Product />} />
        {/* 404 page */}
        <Route path='*' element={<h1>Page Not Found</h1>} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
