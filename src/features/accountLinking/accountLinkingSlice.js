import { createSlice } from '@reduxjs/toolkit'

export const accountLinkingSlice = createSlice({
  name: 'section',
  initialState: {
        ytApiKey: '',
        vkAccessToken: '',
        tgAccessToken: '',
        okAccessToken: '',

  },
  reducers: {
    changeLinkingState: (state, action) => {
        const {ytApiKey, vkAccessToken, tgAccessToken , okAccessToken} = action.payload
        state.ytApiKey = ytApiKey || state.ytApiKey
        state.vkAccessToken = vkAccessToken || state.vkAccessToken
        state.tgAccessToken = tgAccessToken || state.tgAccessToken
        state.okAccessToken = okAccessToken || state.okAccessToken
    },
  },
})

export const { changeLinkingState } = accountLinkingSlice.actions

export default accountLinkingSlice.reducer