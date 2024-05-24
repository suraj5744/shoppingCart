import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const cart = () => {
  const ecommerce = useSelector((state) => state.ecommerce);
  const isPresentInCart = (id) => {
    for (let i = 0; i < ecommerce.cart.length; i++) {
      if (ecommerce.cart[i] === id)
        return true;
    }
    return false;
  }

  const Navigate = useNavigate();
  const HandlePurchase = () => {
    Navigate('/BuyNow')
  }


  return (
    <div className='w-full flex h-screen justify-between flex-col'>
      <div className='flex flex-col justify-between '>
        <div className=' flex flex-col  '>
          {

            ecommerce.product

              ? ecommerce.product.map((item) => {
                for (let i = 0; i < item.length; i++) {

                }

                return <>
                  {
                    isPresentInCart(item.id)
                      ? <div className=" flex  items-center product-box w-auto h-32 gap-5" key={item.id}>
                        <div className="img-box h-16 w-20 flex justify-center items-item">
                          <img src={item.thumbnail} alt="" className='h-16 w-20  object-cover' />
                        </div>
                        <div className='flex flex-col justify-center '> 
                        <p className="title">{item.title}</p>
                        <p className="price">${item.price}</p>
                        <p className="rating">Rating{item.rating}</p>
                      </div>
                        </div>
                      
                      : null
                  }
                </>
              })
              : <div>No product</div>
          }
        </div>
        <div className='flex flex-col border-y-[1.5px] border-neutral-950  w-1/2.5'>
          <div className='px-4 flex items-center text-base font-semibold h-8'><p>PRICE DETAILS</p></div>

          {
            ecommerce.product
              ? ecommerce.product.map((item) => {

                return <>
                  {
                    isPresentInCart(item.id)
                      ? <div className="flex justify-between mt-2 px-4 " key={item.id}>

                        <div>
                        <p className="title">{item.title}</p>
                        
                        </div>
                        
                        
                        
                        
                        <div className='flex flex-col justify-center items-center'>
                        <p className="price">${item.price}</p>
                        
                        </div>
                        



                      </div>
                      


                      : null


                  }

                </>

              })
              : <div>No product </div>
              

          }
          {/* <p className="totalPrice">Total Price= ${ecommerce.totalPrice}</p> */}
          <div></div>
          
          <div className='flex justify-between px-4 text-lg font-bold border-y-[1.5px] border-neutral-950'> <div>Total Amount</div>
          <p>${ecommerce.totalPrice}</p></div>
         
        
        
        
        
        </div>
      </div>
      <div className='sticky bottom-0 left-0 z-20'>
        <button className='bg-red-600 w-full py-4 px-4 text-lg text-white cursor-pointer  rounded-md mt-1' onClick={HandlePurchase} >PLACE ORDER</button>
      </div>
    </div>

  )

}

export default cart
