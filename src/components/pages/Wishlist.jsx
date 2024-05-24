import React from 'react'
import { useSelector } from 'react-redux'

import { useDispatch} from 'react-redux';
import { addToCart } from '../../reduxtoolkit/ecommerceSlice';


const Wishlist = () => {
  
  const ecommerce = useSelector((state) => state.ecommerce);
  const isPresentInWishlist = (id) => {
    for (let i = 0; i < ecommerce.wishlist.length; i++) {
      if (ecommerce.wishlist[i] === id)
        return true;
    }
    return false;
  }
  const dispatch = useDispatch();
  const HandleAddToCarts = (id) => {
    dispatch(addToCart(id))
  }

  // const Navigate = useNavigate();
  // const HandlePurchase = () => {
  //   Navigate('/BuyNow')
  // }

  return (
    <div className='flex flex-col '>

      <div className='grid grid-cols-2'>


        {

          ecommerce.product

            ? ecommerce.product.map((item) => {
              for (let i = 0; i < item.length; i++) {

              }

              return <>
                {
                  isPresentInWishlist(item.id)
                    ? <div className="product-box px-4 py-2 w-56" key={item.id}>
                      <div className="img-box h-52 w-52">
                        <img src={item.thumbnail} alt="" className='h-full w-full object-cover' />
                      </div>
                      <p className="title">{item.title}</p>
                      <p className="price">${item.price}</p>
                      <p className="rating">Rating{item.rating}</p>
                      <div className=' h-10 w-32 bg-orange-600 flex justify-center items-center'><button className=' text-black cursor-pointer rounded-md mt-1' onClick={() => HandleAddToCarts(item.id)}>Add to Cart</button> 
              </div>


                      {/* <div><button className='bg-orange-500 text-black cursor-pointer rounded-md mt-1' onClick={() => HandleAddToCart(item.id)}>Add to Cart</button> </div> */}
                    </div>
                    : null
                }
                
              </>
            })
            : <div>No product</div>
        }
      </div>
      
    </div>

  )
}

export default Wishlist

