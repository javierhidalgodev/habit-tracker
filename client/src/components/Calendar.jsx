import { useEffect } from "react"
import CalendarDays from "./CalendarDays"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentMonth } from "../../reducers/currentMonthReducer"
import { setCurrentYear } from "../../reducers/currentYearReducer"
import { getNewDays } from "../../reducers/currentDaysReducer"
import { MdOutlineArrowBackIos as LeftArrow } from "react-icons/md"
import { MdOutlineArrowForwardIos as RightArrow } from "react-icons/md";

const Calendar = () => {
  const dispatch = useDispatch()

  const selectedDay = new Date(useSelector(state => state.selectedDay))
  const currentDay = new Date(useSelector(state => state.currentDay))
  const currentMonth = useSelector(state => state.currentMonth)
  const currentYear = useSelector(state => state.currentYear)
  const currentDays = useSelector(state => state.currentDays)

  // sacar
  const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  const handleDate = (op) => {
    if(op === 'increment') {
      if (currentMonth === 11) {
        dispatch(setCurrentMonth(0))
        dispatch(setCurrentYear(currentYear + 1))
      } else {
        dispatch(setCurrentMonth(currentMonth + 1))
      }
    } else {
      if (currentMonth === 0) {
        dispatch(setCurrentMonth(11))
        dispatch(setCurrentYear(currentYear - 1))
      } else {
        dispatch(setCurrentMonth(currentMonth - 1))
      }
    }
  }

  const goToSelectedDay = () => {
    dispatch(setCurrentMonth(selectedDay.getMonth()))
    dispatch(setCurrentYear(selectedDay.getFullYear()))
  }
  
  const goToCurrentDay = () => {
    dispatch(setCurrentMonth(currentDay.getMonth()))
    dispatch(setCurrentYear(currentDay.getFullYear()))
  }

  useEffect(() => {
    // getDays()
    dispatch(getNewDays(currentMonth, currentYear))
  }, [currentMonth])

  return (
    <>
      <div className="calendar w-[701px]">
        <div className="calendar-header w-[180px] mx-auto mb-3 py-1 px-3 flex justify-between items-center text-center bg-blue-700 text-white rounded-full">
          <button className="hover:scale-110" onClick={() => handleDate('decrement')}><LeftArrow /></button>
          <span> {months[currentMonth]} {currentYear} </span>
          <button className="hover:font-bold" className="hover:scale-110" onClick={() => handleDate('increment')}><RightArrow /></button>
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
        <button
          id='current-day-btn'
          className='px-4 py-2 flex items-center text-white bg-blue-600 rounded-full hover:bg-blue-700 duration-150'
          onClick={goToCurrentDay}>
            Hoy es {currentDay.getDate()} de {months[currentDay.getMonth()]} de {currentDay.getFullYear()}
        </button>
        <button
          id='current-day-btn'
          className='px-4 py-2 flex items-center text-white bg-blue-600 rounded-full hover:bg-blue-700 duration-150'
          onClick={goToSelectedDay} >
            Día seleccionado {selectedDay.getDate()} de {months[selectedDay.getMonth()]} de {selectedDay.getFullYear()}
        </button>
          {/* <Button id='current-day' text={`Hoy es ${currentDay.getDate()} de ${months[currentDay.getMonth()]} de ${currentDay.getFullYear()}`} handleClick={getNewDays} params={[currentDay.getMonth(), currentDay.getFullYear()]} />
          <Button id='selected-day' text={`Día seleccionado ${selectedDay.getDate()} de ${months[selectedDay.getMonth()]} de ${selectedDay.getFullYear()}`} onClick={() => dispatch(getNewDays(currentMonth, currentYear))} handleClick={getNewDays} params={[currentMonth, currentYear]} /> */}
        </div>
      </div>
    </>
  )
}

export default Calendar