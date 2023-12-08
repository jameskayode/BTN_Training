
import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
    },
    reducers: {
        addToCart: (state, action)=>{
            state.items.push(action.payload.items);
            state.count += 1;
        },
        removeFromCart:(state, action)=>{
            state.count -= 1;
        }
    }
})
export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;