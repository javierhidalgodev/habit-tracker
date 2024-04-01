import { createSlice } from "@reduxjs/toolkit";

const initialState = new Date().getMonth()

const currentMonthReducer = createSlice({
  name: 'currentMonth',
  initialState,
  reducers: {
    setCurrentMonth (state, action) {
      return action.payload
    }
  }
})

export const { setCurrentMonth } = currentMonthReducer.actions

export default currentMonthReducer.reducer