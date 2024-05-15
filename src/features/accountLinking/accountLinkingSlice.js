import { createSlice } from '@reduxjs/toolkit'

export const accountLinkingSlice = createSlice({
  name: 'section',
  initialState: {
        ytApiKey: '',
        vkAccessToken: '',
        tgAccessToken: '',
        okApplicationID: '',
        okApplicationPublicKey: '',
        okAccessToken: '',
        okSessionSecretKey: '',

  },
  reducers: {
    changeLinkingState: (state, action) => {
        const {ytApiKey, vkAccessToken, tgAccessToken,
          okApplicationID, okApplicationPublicKey, 
          okAccessToken, okSessionSecretKey} = action.payload

        state.ytApiKey = ytApiKey || state.ytApiKey
        state.vkAccessToken = vkAccessToken || state.vkAccessToken
        state.tgAccessToken = tgAccessToken || state.tgAccessToken
        state.okApplicationID = okApplicationID || state.okApplicationID
        state.okApplicationPublicKey = okApplicationPublicKey || state.okApplicationPublicKey
        state.okAccessToken = okAccessToken || state.okAccessToken
        state.okSessionSecretKey = okSessionSecretKey || state.okSessionSecretKey
    },
  },
})

export const { changeLinkingState } = accountLinkingSlice.actions

export default accountLinkingSlice.reducer