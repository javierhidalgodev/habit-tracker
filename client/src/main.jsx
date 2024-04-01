// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import selectedDayReducer from '../reducers/selectedDayReducer.js'
import currentDayReducer from '../reducers/currentDayReducer.js'
import currentMonthReducer from '../reducers/currentMonthReducer.js'
import currentDaysReducer from '../reducers/currentDaysReducer.js'

const store = configureStore({
    reducer: {
        selectedDay: selectedDayReducer,
        currentDay: currentDayReducer,
        currentMonth: currentMonthReducer,
        currentDays: currentDaysReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <App />
    </Provider>
)
