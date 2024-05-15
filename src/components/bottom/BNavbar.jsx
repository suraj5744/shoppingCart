import React from 'react'
import sletter from '../../assets/sletter.png'
import { MdElectricBolt } from "react-icons/md";
import { TbLetterS } from "react-icons/tb";
import { RiBox3Fill } from "react-icons/ri";
import { PiArrowUpRight } from "react-icons/pi";

function BNavbar() {
    return (
        <div className='flex justify-around items-center w-full h-20 sticky bottom-0 left-0 z-20 bg-white'>
            <div className='flex flex-col justify-center border-2 items-center hover:bg-white hover:text-red-600 border-none     h-8'>
                <div className=' '  >< TbLetterS size={30} /> </div>

                <p className="text font-semi-bold">Home</p>
            </div>
            <div className=' flex flex-col justify-center border-2 items-center hover:bg-white hover:text-red-600 border-none    h-8'>
                <div className="img-box rounded-md">
                    <div className=''><MdElectricBolt size={30} /> </div>
                </div>
                <p className="text font-semi-bold">
                    New
                </p>
            </div>

            <div className=' flex flex-col justify-center border-2 items-center hover:bg-slate-900 hover:text-white border-none    h-8'>
                <div className="img-box rounded-md">
                    <div className='bg-white-500'>< RiBox3Fill size={30} /> </div>
                </div>

            </div>

            <div className=' flex flex-col justify-center border-2 items-center hover:bg-white hover:text-red-600 border-none     h-8'>
                <div className="img-box rounded-md">
                    <div className=''>< PiArrowUpRight size={30} /> </div>
                </div>
                <p className="text font-semi-bold">
                    TrendNxt
                </p>
            </div>



            <div className='flex flex-col justify-center items-center  hover:bg-white hover:text-red-600 hover:border-red-600'   >
                <div className=' flex justify-center items-center h-6 w-6  rounded-full border-2  border-black hover:border-red-600'  > <p className="text font-semi-bold  ">
                    U
                </p>
                </div>
                <span className='hover:text-red-600'>
                    User</span>


            </div>

        </div>


    )
}

export default BNavbar
