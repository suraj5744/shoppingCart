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
    }
})

export const {addToCart, addToProduct, BuyPage} = ecommerceSlice.actions;
export default ecommerceSlice.reducer;