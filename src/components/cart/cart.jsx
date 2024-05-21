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
    <div className='flex justify-between'>

      <div className=' grid grid-cols-1'>


        {

          ecommerce.product

            ? ecommerce.product.map((item) => {
              for (let i = 0; i < item.length; i++) {

              }

              return <>
                {
                  isPresentInCart(item.id)
                    ? <div className="product-box px-4 py-2 w-56" key={item.id}>
                      <div className="img-box h-52 w-52">
                        <img src={item.thumbnail} alt="" className='h-full w-full object-cover' />
                      </div>
                      <p className="title">{item.title}</p>
                      <p className="price">${item.price}</p>
                      <p className="rating">Rating{item.rating}</p>
                      
                      {/* <div><button className='bg-orange-500 text-black cursor-pointer rounded-md mt-1' onClick={() => HandleAddToCart(item.id)}>Add to Cart</button> </div> */}
                    </div>
                    : null
                }
              </>
            })
            : <div>No product</div>
        }
      </div>
      <div className='flex flex-col  w-1/2.5'>

        {
          ecommerce.product
            ? ecommerce.product.map((item) => {

              return <>
                {
                  isPresentInCart(item.id)
                    ? <div className="" key={item.id}>

                      <p className="title">{item.title}</p>
                      <p className="price">${item.price}</p>



                    </div>


                    : null


                }

              </>

            })
            : <div>No product </div>

        }
        <p className="totalPrice">Total Price= ${ecommerce.totalPrice}</p>
        <div className='h-14 w-20'><button className='bg-red-600 text-white cursor-pointer  rounded-md mt-1' onClick={HandlePurchase} >PLACE ORDER</button> </div>
        </div>
    </div>

  )

}

export default cart
