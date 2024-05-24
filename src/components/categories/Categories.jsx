import React from 'react'
import deals from '../../assets/deals.png'
import men from '../../assets/men.png'
import women from '../../assets/women.png'
import kids from '../../assets/kids.png'
import shoes from '../../assets/shoes.png'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
    const Navigate = useNavigate();
    const HandleNavigate = ()=>{
        Navigate('/product')
    }
    return (
        <div>
            <div className='flex justify-around items-center mt-2'>

                <div className='flex flex-col justify-center items-center'>
                    <div><img className='h-12 w-10 border-b-[3.5px] border-b-blue-800 bg-gray-300' src={deals} /></div>
                    <p className='text-[0.75rem] text-gray-600 font-semibold'>EXPLORE</p>

                </div>
                <div className='flex flex-col justify-center items-center'
                onClick={HandleNavigate}
                >
                    <div><img className='h-12 w-10 border-b-[3.5px] border-b-blue-800  bg-gray-300' src={men} /> </div>
                    <p className='text-[0.75rem] text-gray-600 font-semibold'>MEN</p>

                </div>
                <div className='flex flex-col justify-center items-center 'onClick={HandleNavigate}>
                    <div><img className='h-12 w-10 border-b-[3.5px] border-b-blue-800  bg-gray-300' src={women} /> </div>
                    <p className='text-[0.75rem] text-gray-600 font-semibold'>WOMEN</p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div><img className='h-12 w-10 border-b-[3.5px] border-b-blue-800  bg-gray-300' src={kids} /> </div>
                    <p className='text-[0.75rem] text-gray-600 font-semibold'>KIDS</p>

                </div>
                <div className='flex  flex-col justify-center items-center'>
                    <div><img className=' h-12 w-10 border-b-[3.5px] border-b-blue-800  bg-gray-300' src={shoes} /> </div>
                    <p className='text-[0.75rem] text-gray-600 font-semibold'>FOOTWEAR</p>

                </div>


            </div>
        </div>
    )
}

export default Categories
