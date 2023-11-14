import { CartItem } from "./cart.interface";

export interface CartState {
    loading: boolean;
    cartItems: CartItem[];
    itemsPrice:  number | string;
  }