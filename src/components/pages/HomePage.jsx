import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToProduct, addToWishlist } from '../../reduxtoolkit/ecommerceSlice';
import Cart from '../cart/cart';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const HomePage = () => {
  const dispatch = useDispatch();
  const ecommerce = useSelector((state) => state.ecommerce);

  const getApiData = async () => {
    const res = await axios.get("https://dummyjson.com/product");
    console.log(res)
    dispatch(addToProduct(res.data.products));
  }

  const HandleAddToCart = (id) => {
    dispatch(addToCart(id))
  }
  const Navigate = useNavigate();
  const Handlebuy = () => {
    Navigate('/cart')
  }

  const isPresentInWishList = (id)=>{
    for(let i = 0; i<ecommerce.wishlist.length; i++){
      if(ecommerce.wishlist[i] === id)
          return true;
    }
    return false;
  }

  const HandleAddToWishlist = (id)=>{
    dispatch(addToWishlist(id));
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className='w-full grid grid-cols-1 place-items-center gap-2'>
      {
        ecommerce.product
          ? ecommerce.product.map((item) => {
            return <div className="product-box px-4 py-2 w-56 flex flex-col justify-center items-center gap-1" key={item.id}>
              <div className="img-box h-52 w-52">
                <img src={item.thumbnail} alt="" className='h-full w-full object-cover' />
              </div>
              <p className="title">{item.title}</p>
              <p className="price">${item.price}</p>
              <p className="rating">Rating{item.rating}</p>
              <div className=' h-10 w-32 bg-black flex justify-center items-center'><button className=' text-white cursor-pointer rounded-md mt-1' onClick={Handlebuy} >Buy Now</button> </div>
              <div className=' h-10 w-32 bg-orange-600 flex justify-center items-center'><button className=' text-black cursor-pointer rounded-md mt-1' onClick={() => HandleAddToCart(item.id)}>Add to Cart</button> 
              </div>
              {
                  !isPresentInWishList(item.id)
                  ?<FaRegHeart size={40} className='' 
                  onClick={()=>HandleAddToWishlist(item.id)}
                  />
                  :<FaHeart size={40} color='red'/>
              }
            </div>

          })
          : null

      }



    </div>
  )
}

export default HomePage
