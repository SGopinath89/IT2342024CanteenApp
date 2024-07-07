import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    orderFinished: (state, action) => {
      state.cartItems.length = 0;
    },
    changeQuantity: (state, action) => {
      state.cartItems[
        state.cartItems.findIndex((item) => item.id == action.payload.foodId)
      ].count = action.payload.quantity;
    },
  },
});

export const { addToCart, orderSuccess, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;