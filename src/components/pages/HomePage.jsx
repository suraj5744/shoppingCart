import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToProduct } from '../../reduxtoolkit/ecommerceSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    const ecommerce = useSelector((state)=>state.ecommerce);

    const getApiData = async ()=>{
        const res= await axios.get("https://dummyjson.com/products");
        dispatch(addToProduct(res.data.products));
    }
    useEffect(()=>{
        getApiData();
    },[]);

  return (
    <div className='w-full grid grid-cols-1'>
      {
        ecommerce.product
        ? ecommerce.product.map((item)=>{
            return <div className="product-box px-4 py-2 w-56" key={item.id}>
                <div className="img-box h-52 w-52">
                    <img src={item.thumbnail} alt="" className='h-full w-full object-cover'/>
                </div>
                <p className="title">{item.title}</p>
                <p className="price">${item.price}</p>
            </div>
        })
        :null
      }
    </div>
  )
}

export default HomePage
