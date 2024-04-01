const getDays = (month, year) => {
  let days = []
  let firstDayOfMonth = new Date(year, month, 1)
  let weekDayOfFirstDay = firstDayOfMonth.getDay()
  console.log(month);

  for(let day = 0; day < 42; day++) {
    if (day > 0 && firstDayOfMonth.getDay() === 1 && firstDayOfMonth.getMonth() !== month) {
      console.log(firstDayOfMonth.getMonth());
      break
    } else {

      if(day === 0 && weekDayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6)
      } else if (day === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - (weekDayOfFirstDay - 1)))
      }
      
      const d = new Date(firstDayOfMonth)
      days.push(d.toDateString())

      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)
    }
  }

  return days
}

export { getDays }