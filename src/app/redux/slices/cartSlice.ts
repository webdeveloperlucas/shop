import { CartItem } from "@/app/types/cart.interface";
import { CartState } from "@/app/types/cart.state.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';


const initializeCartState = () => {
  const cartFromCookie = Cookies.get('cart');

  if (cartFromCookie) {
    const parsedCart = JSON.parse(cartFromCookie);
    return {
      ...parsedCart,
      loading: true,
    };
  } else {
    return {
      loading: true,
      cartItems: [],
      itemsPrice: "0",
    };
  }
};
const initialState: CartState = initializeCartState()

const addDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        existItem.qty += 1;
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      Cookies.set('cart', JSON.stringify(state))
    
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
    
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      Cookies.set('cart', JSON.stringify(state));
    },
    decreateQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.qty -= 1;

        if (existingItem.qty === 0) {
          
          state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        }
      }

      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      Cookies.set('cart', JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;