import { createSlice } from "@reduxjs/toolkit"
import Cookies from 'js-cookie'


const initialState:any = {
    isOpen: false,
    
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuOpen: (state)=>{
           
            state.isOpen = !state.isOpen
        },
    
    }
})


export const {
    menuOpen,
} = menuSlice.actions


export default menuSlice.reducer