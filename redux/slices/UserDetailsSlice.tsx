import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface userData {
    id:string ,
    username:string,
}

const initialState : userData = {
    id:"",
    username:""
}

export const UserDetailsSlice = createSlice({
  name: 'UserDetails',
  initialState,
  reducers: {
    setUser:(state, action:PayloadAction<userData>)=> {
        state.username = action.payload.username
        state.id = action.payload.id
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = UserDetailsSlice.actions

export default UserDetailsSlice.reducer