import { createSlice } from "@reduxjs/toolkit";

const currentDayReducer = createSlice({
  name: 'currentDay',
  initialState: new Date().toISOString(),
  reducers: {

  }
})

export default currentDayReducer.reducer