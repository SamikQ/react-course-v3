import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // immer library which instaled as a part of redux will mutate state and make re-render automatically. there is no need to update state each time
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      const itemId = payload;
      console.log(itemId);
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    changeItemQuantity: (state, { payload }) => {
      const { id, type } = payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      switch (type) {
        case "increase":
          cartItem.amount = cartItem.amount + 1;
          break;
        case "decrease":
          if (cartItem.amount > 1) {
            cartItem.amount = cartItem.amount - 1;
          }
          break;
        default:
          break;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

// console.log(cartSlice);

export default cartSlice.reducer;
export const { clearCart, removeItem, changeItemQuantity, calculateTotals } =
  cartSlice.actions;
