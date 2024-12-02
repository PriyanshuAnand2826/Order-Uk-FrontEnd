import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Checkout from './pages/Checkout';
import Address from './pages/Address';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Order from './pages/Order';


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/restaurant' element={<Restaurant/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/address' element={<Address/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
