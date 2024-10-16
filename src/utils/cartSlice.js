import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState : {
            items : []
        },
        reducers:{
            addItem : (state, action) => {
                // Redux Toolkit uses imme BTS
                state.items.push(action.payload);
            },
            removeItem : (state, action) => {
                state.items.pop();
            },
            // originalState = {items : ["pizza"]}
            clearCart : (state, action) => {
                // RTK : eithrt Mutate the existing state ot return a new state
                // state.items.length = 0; // OriginalState = []
                return {item : []}; // This new [] will be replaced inside originalState = {item : []}
            }
        }
    }
);


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
