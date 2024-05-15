import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [],
    cart: [],
    wishlist : []
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
        }
    }
})

export const {addToCart, addToProduct} = ecommerceSlice.actions;
export default ecommerceSlice.reducer;