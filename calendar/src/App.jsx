import './App.css'
import Calendar from './Calendar'
import moment from 'moment'

const previosMonth = moment().month() === 0 ?
                        11 
                      : moment().month() - 1
const dateInfo = {
    dayOfMonth: moment().date(),
    dayOfWeek: moment().isoWeekday() - 1,
    month: moment().month(),
    year: moment().year(),
    daysInMonth: moment().daysInMonth(),
    daysInPreviosMonth: moment().month(previosMonth).daysInMonth(),
    dayOfWeekMonthStart: moment().day(1).isoWeekday(),
    dayOfWeekMonthEnd: moment().day(moment().daysInMonth()).isoWeekday()
}
function App() {

    return (
        <Calendar date={dateInfo}/>
    )
}

export default App
