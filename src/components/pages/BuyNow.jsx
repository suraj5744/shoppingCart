import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const BuyNow = () => {

    const ecommerce = useSelector((state) => state.ecommerce);
    const isPresentInCart = (id) => {
        for (let i = 0; i < ecommerce.cart.length; i++) {
            if (ecommerce.cart[i] === id)
                return true;
        }
        return false;
    }
    return (
        <div className='w-full flex flex-col '>
            
            

            <div className='flex justify-around'><div className='flex justify-center items-center text-2xl font-semibold'>${ecommerce.totalPrice}</div>
                <div className='flex justify-center'><button className='bg-red-600 text-white cursor-pointer rounded-md mt-1 h-12 w-56'  >PAY NOW</button> </div>
            </div>
            
            </div>
    )
}

export default BuyNow
