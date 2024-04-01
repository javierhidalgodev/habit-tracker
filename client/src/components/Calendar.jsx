import { useState, useEffect } from "react"
import CalendarDays from "./CalendarDays"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentMonth } from "../../reducers/currentMonthReducer"
import { getNewDays } from "../../reducers/currentDaysReducer"

const Calendar = () => {
  const dispatch = useDispatch()

  const currentDay = new Date(useSelector(state => state.currentDay))
  const selectedDay = new Date(useSelector(state => state.selectedDay))
  const currentMonth = useSelector(state => state.currentMonth)
  
  // const [currentDay, setCurrentDay] = useState(new Date())
  // const [currentMonth, setCurrentMonth] = useState(currentDay.getMonth())
  const [currentYear, setCurrentYear] = useState(currentDay.getFullYear())
  // const [currentDays, setCurrentDays] = useState([])

  const currentDays = useSelector(state => state.currentDays)

  const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  // const getDays = () => {

  //   let days = []
  //   let firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  //   let weekDayOfFirstDay = firstDayOfMonth.getDay()

  //   for(let day = 0; day < 42; day++) {
  //     if(day === 0 && weekDayOfFirstDay === 0) {
  //       firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6)
  //     } else if (day === 0) {
  //       firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - (weekDayOfFirstDay - 1)))
  //     } else {
  //       firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)
  //     }

  //     const d = new Date(firstDayOfMonth)
  //     days.push(d)
  //   }

  //   setCurrentDays(days)
  // }

  const handleDate = (op) => {
    if(op === 'increment') {
      if (currentMonth === 11) {
        dispatch(setCurrentMonth(0))
        setCurrentYear(currentYear + 1)
      } else {
        dispatch(setCurrentMonth(currentMonth + 1))
      }
    } else {
      if (currentMonth === 0) {
        dispatch(setCurrentMonth(11))
        setCurrentYear(currentYear - 1)
      } else {
        dispatch(setCurrentMonth(currentMonth - 1))
      }
    }
  }

  useEffect(() => {
    // getDays()
    dispatch(getNewDays(currentMonth, currentYear))
  }, [currentMonth])

  return (
    <>
      <div className="calendar w-[701px]">
        <div className="calendar-header w-[180px] mx-auto flex justify-between py-2 text-center">
          <button className="hover:font-bold" onClick={() => handleDate('decrement')}>&lt;</button>
          <span> {months[currentMonth]} {currentYear} </span>
          <button className="hover:font-bold" onClick={() => handleDate('increment')}>&gt;</button>
        </div>
        <div className="calendar-body">
          <div className="table-header flex flex-wrap border-t border-l">
            {weekdays.map(w => <span key={crypto.randomUUID()} className="w-[100px] py-2 border-b border-r text-center">{w}</span>)}
          </div>
          <div className="table-body flex flex-wrap border-t border-l">
            <CalendarDays currentDay={currentDay} currentMonth={currentMonth} currentDays={currentDays} />
          </div>
        </div>
        <div className="calendar-footer py-3 flex justify-between">
          <span>Hoy es {currentDay.getDate()} de {months[currentDay.getMonth()]} de {currentDay.getFullYear()}</span>
          <span>Día seleccionado {selectedDay.getDate()} de {months[selectedDay.getMonth()]} de {selectedDay.getFullYear()}</span>
        </div>
      </div>
    </>
  )
}

export default Calendar