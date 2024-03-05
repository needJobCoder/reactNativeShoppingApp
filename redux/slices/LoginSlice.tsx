import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface loginBool {
    value: boolean
}

const initialState : loginBool = {
    value : false
}

export const loginSlice = createSlice({
  name: 'loginBool',
  initialState,
  reducers: {
   change : (state, action: PayloadAction<boolean>) => {
    state.value = action.payload
   }
  }
})

// Action creators are generated for each case reducer function
export const { change } = loginSlice.actions

export default loginSlice.reducer