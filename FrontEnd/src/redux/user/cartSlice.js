import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.foodId === action.payload.foodId
      );

      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    orderFinished: (state) => {
      state.cartItems = [];
    },
    changeQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.foodId === action.payload.foodId
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.foodId === action.payload.foodId
      );
      if (index >= 0) {
        state.cartItems.splice(index, 1);
      }
    },
    destroyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  orderFinished,
  changeQuantity,
  removeItem,
  destroyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
