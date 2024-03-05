import { configureStore } from "@reduxjs/toolkit";
import {loginSlice} from "./slices/LoginSlice";
import UserDetailsSlice from "./slices/UserDetailsSlice";
import CartSlice from "./slices/CartSlice";



export default configureStore({
    reducer:{
        login:loginSlice.reducer,
        userData_: UserDetailsSlice,
        cart_: CartSlice
    }
})