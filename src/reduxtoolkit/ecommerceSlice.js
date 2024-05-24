import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [],
    cart: [],
    wishlist : [],
    totalPrice : 0,
}



const ecommerceSlice = createSlice({
    name: "ecommerce",
    initialState: initialState,

    reducers :{
        addToProduct(state, action){
            state.product = action.payload;
        },
        addToCart(state, action){
            state.cart.push(action.payload);
            state.totalPrice+=state.product[action.payload-1].price;
        },
        addToWishlist(state, action){
            state.wishlist.push(action.payload);
            
        },
        removeFromWishlist(state, action){
            state.wishlist = state.wishlist.filter((item)=>item!==action.payload);
        },
        removeFromCart(state, action){
            state.cart = state.cart.filter((item)=>item!==action.payload);
        }
    }
})

export const {addToCart, addToProduct, BuyPage, addToWishlist, removeFromWishlist, removeFromCart} = ecommerceSlice.actions;
export default ecommerceSlice.reducer;