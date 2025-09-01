import React from 'react'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Cart from './Pages/Cart.jsx'
import Collection from './Pages/Collection.jsx'
import Contact from './Pages/Contact.jsx'
import Orders from './Pages/orders.jsx'
import PlaceOrder from './Pages/PlaceOrder.jsx'
import Product from './Pages/Product.jsx'
import Navbar from './Components/Navbar.jsx'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Pages/login.jsx'
import './App.css'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
        <Route path='/Product' element={<Product/>} />
      </Routes>
    </div>
  )
}

export default App