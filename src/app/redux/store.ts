import { configureStore } from "@reduxjs/toolkit";

import cartSliceReducer from './slices/cartSlice'
import menuSliceReducer from './slices/menuSlice'

export const store = configureStore({
    reducer:{
        cart:cartSliceReducer,
        menu:menuSliceReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})