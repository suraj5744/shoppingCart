import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Mainpage from './components/pages/Mainpage'
import HomePage from './components/pages/HomePage'
import Cart from './components/cart/cart'
import BuyNow from './components/pages/BuyNow'
import Wishlist from './components/pages/Wishlist'
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes >
          <Route  path='/' element={<Mainpage />}></Route>
          <Route  path='/product' element={<HomePage />}></Route>
          <Route path='/womens' element={<HomePage/>} > </Route>
          <Route path='/cart' element={<Cart/>} > </Route>
          <Route path='/buynow' element={<BuyNow/>} > </Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>

)
}

export default App
