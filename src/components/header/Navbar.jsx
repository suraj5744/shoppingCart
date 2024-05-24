import React from 'react'
import icon from '../../assets/icons.png'
import notify from '../../assets/notify.png'
import heart from '../../assets/heart.png'
import bag from '../../assets/bag.png'
import { CiCamera } from "react-icons/ci";
import { MdMicNone } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import fashionlogo from '../../assets/fashion-logo.png'
import beauty from '../../assets/beauty.png'
import home from '../../assets/home.png'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
  const Navigate = useNavigate();
  
  const HandleMain = () => {
    Navigate('/')
  }

  const HandleCart=()=>{
    Navigate('/Cart')
  }

  const Handlewish=()=>{
    Navigate('/Wishlist')
  }
  return (
    <div className='w-full flex flex-col gap-3 sticky top-0 left-0 z-10 bg-white'>
      <div className='navbar flex justify-between items-center w-full h-10 px-4 '>

        <div className='left-div flex justify-start align-center gap-1 items-center content-center  '>
          <div > <img className='h-8 w-7' src={icon} /></div>

          <div className='flex flex-col text-[10px] '><span className='font-semibold' >SELECT</span><span className='font-semibold text-amber-700'>INSIDER</span></div>

        </div>

        <div className='font-bold text-lg text-orange-600' onClick={HandleMain}>FashionFlock</div>

        <div className='right-div flex justify-end gap-2 items-center '>
          <div > <img className='h-6 w-6' src={notify} /> </div>
          <div onClick={Handlewish}> <img className='h-8 w-7' src={heart} /> </div>
          <div className='' onClick={HandleCart} > <img className='h-6 w-6' src={bag} /> </div>

        </div>
      </div>

      <div className='flex flex-col gap-5'>

        <div className='flex justify-center items-center '>
          <div className='items-center justify-center flex flex-row border-2 w-[92%] gap-1 py-[1.6px] rounded-xl border-[rgba(0,0,0,0.5)] px-4 ' >
            <IoIosSearch />
            <input type="text" name="" placeholder='Search for brands and products' id="" className='w-[80%] border-none' />
            <div className='flex gap-4 '>
              <CiCamera size={24} />
              <MdMicNone size={24} />
            </div>
          </div>
        </div>

        <div className='flex justify-evenly items-center '>
          <div className=' flex justify-center border-2  hover:bg-black hover:text-white border-black gap-2 w-[25%] rounded-2xl h-8'>
            <div className="img-box rounded-md">
              <img src={fashionlogo} className='w-full h-full object-cover' />
            </div>
            <p className="text font-bold" onClick={HandleMain}>
              Fashion
            </p>
          </div>

          <div className=' flex justify-center border-2  hover:bg-black hover:text-white border-black gap-2  w-[25%] rounded-2xl h-8'>
            <div className="img-box rounded-md">
              <img src={beauty} className='w-full h-full object-cover' />
            </div>
            <p className="text font-bold">
              Beauty
            </p>
          </div>

          <div className=' flex justify-center border-2  hover:bg-black hover:text-white border-black gap-2  w-[25%] rounded-2xl h-8'>
            <div className="img-box rounded-md">
              <img src={home} className='w-full h-full object-cover' />
            </div>
            <p className="text font-bold">
              Home
            </p>
          </div>


          <div className='rounded-2xl border-2 px-1 py-1 border-black'><BiSolidCategory size={20} /></div>
        </div>

      </div>

    </div>

  )
}

export default Navbar
