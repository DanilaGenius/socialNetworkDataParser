import { createSlice } from '@reduxjs/toolkit'

export const accountLinkingSlice = createSlice({
  name: 'section',
  initialState: {
        ytApiKey: 'AIzaSyDyp1VUM297ACl7pMHkufKUysbg31A_q2o',
        vkAccessToken: 'vk1.a.kKVWpGTmfrixw2lPkLtIyW6E5XgRezjz1oXaNhQy0H4KykyFYkp9dI9G38P-c8w03nwuoU0TYDWxcGJm11qB_VwEav2ny-2vUdUJe8Q6enmNNBdF2xCoBmAO01BOD5ejUlzLXvQ_pDnMFXx6DSNazwIqRmSoDvrLF6y_rwrIXAZCHpcDP3CJBxPGUWUjvIpN1sMLrwpR5V-9G5YPrh-WjQ',
        tgAccessToken: 'AAEipgP99Rib0xCphXCskJsQ6xnrckVlyfA',
        okApplicationID: '512002548227',
        okApplicationPublicKey: 'CEADOLLGDIHBABABA',
        okApplicationSecretKey: '9F733A03FB1BDF5C056B2993',
        okAccessToken: '-n-0N9HZ7Rq10VZUN4Ol3x4DN4hdlDj8PZT202NXvou2chyHue2Ynb2hrxexOYOqkxcnwdC7v8Bph3QIdO2f',
        okSessionSecretKey: '4a8dce0952adb25818362893fdc51d4b',

  },
  reducers: {
    changeLinkingState: (state, action) => {
        const {ytApiKey, vkAccessToken, tgAccessToken,
          okApplicationID, okApplicationPublicKey, 
          okAccessToken, okSessionSecretKey, okApplicationSecretKey} = action.payload

        state.ytApiKey = ytApiKey || state.ytApiKey
        state.vkAccessToken = vkAccessToken || state.vkAccessToken
        state.tgAccessToken = tgAccessToken || state.tgAccessToken
        state.okApplicationID = okApplicationID || state.okApplicationID
        state.okApplicationPublicKey = okApplicationPublicKey || state.okApplicationPublicKey
        state.okApplicationSecretKey = okApplicationSecretKey || state.okApplicationSecretKey
        state.okAccessToken = okAccessToken || state.okAccessToken
        state.okSessionSecretKey = okSessionSecretKey || state.okSessionSecretKey
    },
  },
})

export const { changeLinkingState } = accountLinkingSlice.actions

export default accountLinkingSlice.reducer