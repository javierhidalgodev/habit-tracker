/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { setSelectedDay } from "../../reducers/selectedDayReducer"

const CalendarDays = ({ currentDay, currentMonth, currentDays }) => {  
  const dispatch = useDispatch()
  const selectedDayState = useSelector(state => state.selectedDay)
  const selectedDay = new Date(selectedDayState)
  // const [selectedDay, setSelectedDay] = useState(currentDay)
  
  // useEffect(() => {
  //   getDays()
  // }, [])

  // const [firstDayOfMonth, setFirstDayOfMonth] = useState(new Date(date.getFullYear(), date.getMonth(), 1))
  // const [weekDayOfFirstDay, setWeekDayOfFirstDay] = useState(firstDayOfMonth.getDay())
  // const [currentDays, setCurrentDays] = useState([])
  

  // const getDays = () => {
  //   let days = []
    
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

  const handleClick = (cD) => {
    dispatch(setSelectedDay(cD.toISOString()))
    // setSelectedDay(cD)
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
                    'bg-blue-600/55'
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
