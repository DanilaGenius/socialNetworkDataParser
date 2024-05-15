import { configureStore } from '@reduxjs/toolkit';
import sectionReducer from '../features/changeSection/sectionSlice'
import authReducer from '../features/auth/authSlice'
import accountLinkingRuduser from '../features/accountLinking/accountLinkingSlice'

export default configureStore({
  reducer: {
    section: sectionReducer,
    auth: authReducer,
    accountLinking: accountLinkingRuduser
  },
})