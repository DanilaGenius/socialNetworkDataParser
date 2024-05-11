import { createSlice } from '@reduxjs/toolkit'

export const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    sectionName: 'main',
    subsectionName: 'main-data',
  },
  reducers: {
    changeSection: (state, action) => {
      state.sectionName = action.payload
    },
    changeSubsection: (state, action) => {
      state.subsectionName = action.payload
    }
  },
})

export const { changeSection, changeSubsection} = sectionSlice.actions

export default sectionSlice.reducer
