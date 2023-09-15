import React from 'react'

import './App.css'

const monthsUpperCase = ['ЯНВАРЯ', 'ФЕВРАЛЯ', 'МАРТА', 'АПРЕЛЯ', 'МАЯ', 'ИЮНЯ', 'ИЮЛЯ', 'АВГУСТА', 'СЕНТЯБРЯ', 'ОКТЯБРЯ', 'НОЯБРЯ', 'ДЕКАБРЯ']
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

export default function Calendar({date}) {

    const {dayOfWeek, dayOfMonth, month, year, daysInMonth, daysInPreviosMonth, dayOfWeekMonthStart, dayOfWeekMonthEnd} = date
    let calendar = []
    
    for(let i = dayOfWeekMonthStart; i > 0; i--) 
        calendar.push({
            day: daysInPreviosMonth - i + 1,
            className: 'ui-datepicker-other-month'
        })
    for(let i = 0; i < daysInMonth; i++) 
        calendar.push({
            day: i + 1,
            className: i + 1 === dayOfMonth ? 'ui-datepicker-today' : ''
        })
    for(let i = 0; i < 6 - dayOfWeekMonthEnd; i++) {
        calendar.push({
            day: i + 1,
            className: 'ui-datepicker-other-month'
        })
    }
    const calendarByWeeks = [calendar.slice(0, 7),
                             calendar.slice(7, 14),
                             calendar.slice(14, 21),
                             calendar.slice(21, 28),
                             calendar.slice(28, 36)]

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{daysOfWeek[dayOfWeek]}</div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{dayOfMonth}</div>
                <div className="ui-datepicker-material-month">{monthsUpperCase[month]}</div>
                <div className="ui-datepicker-material-year">{year}</div>
            </div>
            </div>
            <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">{months[month]}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
            </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col className="ui-datepicker-week-end"/>
                    <col className="ui-datepicker-week-end"/>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        calendarByWeeks.map((week, index) => 
                            <tr key={index}>
                                { week.map((day, index) => 
                                    <td key={index} className={day.className}>{day.day}</td>
                                ) }
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
