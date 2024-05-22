import React from 'react'
import Categories from '../categories/Categories'
import BigCard from '../cards/BigCard'
import Brands from '../cards/Brands'
import Morecards from '../cards/Morecards'
import BNavbar from '../bottom/BNavbar'
import Navbar from '../header/Navbar'

const Mainpage = () => {
  return (
    <>
      
      <Categories/>
      <BigCard/>
      <Brands/>
      <Morecards />
      <Morecards />
      <Morecards />
      <BNavbar />
    </>
  )
}

export default Mainpage
