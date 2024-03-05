import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Cart from '../../components/Cart'

export interface cartObj {
    name: string,
    price:string,
    image:string,
    category: string,
    quantity:number
}

export interface cartInputObj {
    name: string,
    price:string,
    image:string,
    category: string,
}

interface cartArray  {
    cart: cartObj[]
}

const initialState : cartArray = {
    cart:[]
}

export const cartSlice = createSlice({
  name: 'loginBool',
  initialState,
  reducers: {
   addCart:(state, action: PayloadAction<cartInputObj>) => {
        let cart_ = state.cart;
        const findIndex_ = (item : cartInputObj) => {
            if(item.name == action.payload.name)
            {
                return true;
            }
        }

        const index = cart_.findIndex(findIndex_)

        if(index === -1)
        {
            const cartObj_ : cartObj = {name: action.payload.name, price:action.payload.price,
                 category:action.payload.price, image:action.payload.image, quantity:0}
            cart_.push(cartObj_);
        }
        else
        {
            cart_[index].quantity += 1;
        }
        state.cart = cart_

   }
  }
})

// Action creators are generated for each case reducer function
export const { addCart  } = cartSlice.actions

export default cartSlice.reducer