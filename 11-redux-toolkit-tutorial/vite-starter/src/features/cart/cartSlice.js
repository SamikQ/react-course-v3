import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, ThunkAPI) => {
    try {
      // console.log(name);
      // console.log(ThunkAPI);
      // console.log(ThunkAPI.getState());
      // ThunkAPI.dispatch(openModal());
      const res = await axios(url);
      return res.data;
    } catch (err) {
      return ThunkAPI.rejectWithValue(err);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.isLoading = false;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export default cartSlice.reducer;
export const { clearCart, removeItem, changeItemQuantity, calculateTotals } =
  cartSlice.actions;
