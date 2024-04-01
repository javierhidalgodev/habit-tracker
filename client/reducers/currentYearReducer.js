import { createSlice } from "@reduxjs/toolkit";

const initialState = new Date().getFullYear()

const currentYearReducer = createSlice({
  name: 'currentYear',
  initialState,
  reducers: {
    setCurrentYear (state, action) {
      return action.payload
    }
  }
})

export const { setCurrentYear } = currentYearReducer.actions

export default currentYearReducer.reducer