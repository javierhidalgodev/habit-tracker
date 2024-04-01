import { createSlice } from "@reduxjs/toolkit";

const currentDayReducer = createSlice({
  name: 'currentDay',
  initialState: new Date().toDateString(),
  reducers: {

  }
})

export default currentDayReducer.reducer