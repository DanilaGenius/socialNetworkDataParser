import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
  name: 'section',
  initialState: {
    authStatus: true,
  },
  reducers: {
    changeAuthStatus: (state, action) => {
      
      state.authStatus = action.payload
      console.log(state.authStatus)
    },

  },
})


export const { changeAuthStatus} = authSlice.actions

export default authSlice.reducer
