const getDays = (month, year) => {
  
  // if(month && year) {
    //   firstDayOfMonth = new Date(year, month, 1)
    // }
  let days = []
  let firstDayOfMonth = new Date(year, month, 1)
  let weekDayOfFirstDay = firstDayOfMonth.getDay()

  for(let day = 0; day < 42; day++) {
    if(day === 0 && weekDayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6)
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - (weekDayOfFirstDay - 1)))
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)
    }

    const d = new Date(firstDayOfMonth)
    days.push(d.toISOString())
  }

  return days
}

export { getDays }