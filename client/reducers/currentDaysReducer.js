import { createSlice } from "@reduxjs/toolkit";
import { getDays } from "../utils/getDays";

// const initialDate = new Date()
// const currentDays = getDays(initialDate.getMonth(), initialDate.getFullYear())

const currentDaysReducer = createSlice({
  name: 'currentDays',
  initialState: [],
  reducers: {
    setCurrentDays (state, action) {
      return action.payload
    }
  }
})

export const { setCurrentDays } = currentDaysReducer.actions

export const getNewDays = (month, year) => {
  return dispatch => {
    const currentDays = getDays(month, year)
    dispatch(setCurrentDays(currentDays))
  }
}

export default currentDaysReducer.reducer