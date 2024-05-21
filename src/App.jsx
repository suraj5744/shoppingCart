import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Mainpage from './components/pages/Mainpage'
import HomePage from './components/pages/HomePage'
import Cart from './components/cart/cart'
import BuyNow from './components/pages/BuyNow'
function App() {
 

  return (
    <>
      <BrowserRouter>
        
        <Routes >
          <Route  path='/' element={<Mainpage />}></Route>
          <Route  path='/product' element={<HomePage />}></Route>
          <Route path='/womens' element={<HomePage/>} > </Route>
          <Route path='/cart' element={<Cart/>} > </Route>
          <Route path='/buynow' element={<BuyNow/>} > </Route>
        </Routes>
      </BrowserRouter>
      
    </>

)
}

export default App
