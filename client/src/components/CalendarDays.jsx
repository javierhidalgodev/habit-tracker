/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { setSelectedDay } from "../../reducers/selectedDayReducer"

const CalendarDays = ({ currentDay, currentMonth, currentDays }) => {  
  const dispatch = useDispatch()
  const selectedDayState = useSelector(state => state.selectedDay)
  const selectedDay = new Date(selectedDayState)
  
  const handleClick = (cD) => {
    dispatch(setSelectedDay(cD))
  }

  return (
    <>
      {
        currentDays.map(c => {
          const cD = new Date(c)
          const cDMonth = cD.getMonth()
          const cDLocale = cD.toLocaleDateString()
          const sDLocale = selectedDay.toLocaleDateString()
          const currentDayLocale = currentDay.toLocaleDateString()
          const currentDayMonth = currentDay.getMonth()

          return (
            <div
              key={crypto.randomUUID()}
              className={`
                w-[100px] h-[100px] p-2
                border-r border-b box-border 
                ${
                  cDMonth !== currentMonth && cDLocale !== sDLocale &&
                    'bg-slate-300/25 text-slate-900/40'
                } 
                ${
                  cDLocale === currentDayLocale && cDMonth === currentDayMonth &&
                    'bg-red-600 text-white'}
                ${
                  cDLocale === sDLocale &&
                    'bg-blue-700 text-white'
                }`
              } 
              onClick={() => handleClick(cD)}>{cD.getDate()}</div>
          )
        })
      }
    </>
  )
}

export default CalendarDays
