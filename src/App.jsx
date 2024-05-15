import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Mainpage from './components/pages/Mainpage'
import HomePage from './components/pages/HomePage'
function App() {
 

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes >
          <Route  path='/' element={<Mainpage />}></Route>
          <Route  path='/product' element={<HomePage />}></Route>
         
        </Routes>
      </BrowserRouter>
      
    </>

)
}

export default App
