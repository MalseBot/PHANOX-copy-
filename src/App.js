import React,{useState} from 'react'

import { Cart, Content, NavBar, ProductInfo } from './Container'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
function App() {
  const [showCart, setShowCart] = useState(false)
  return (
    <BrowserRouter>
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <NavBar  setShowCart={setShowCart} />
      <Routes>
        <Route element={<Content />} path='/' />
        <Route element={<ProductInfo />} path='/ProductInfo' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
