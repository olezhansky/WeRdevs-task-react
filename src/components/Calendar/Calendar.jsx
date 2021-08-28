/* eslint-disable array-callback-return */
import React, {useState} from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import * as calendar from './calendar';
import Week from './Week/Week';
import styles from './Calendar.module.scss'

const Calendar = () =>  {

    const [state, setState] = useState({
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'],
        weekDayNames: ['S', 'M', 'T', 'W' , 'T', 'F', 'S'],
        currentDate: new Date(),
        selectedDate: null,
    })

    const getYear = () => {
        return state.date.getFullYear();
    }
    const getMonth = () => {
        return state.date.getMonth();
    }

    const handlePrevMonthButtonClick = () => {
        const date = new Date(getYear(), getMonth() - 1);
        setState({...state, date: date})
    };

    const handleNextMonthButtonClick = () => {
        const date = new Date(getYear(), getMonth() + 1);
        setState({...state, date: date})
    };


    const handleDayClick = (date) => {
        console.log(date.getDate())
        console.log(date.toLocaleString('en-us', { month: 'long' }))
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
        console.log(days[date.getDay()])
        setState({
            ...state,
            selectedDate: date
        })
        
    };

    let monthName = '';

    for (let i = 0; i < state.monthNames.length; i++) {
        if (getMonth() === i) {
            monthName = state.monthNames[i]
        }
    }

    const monthData = calendar.getMonthData(getYear(), getMonth());

    return (
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <div className={styles.Months}>
                    <div onClick={handlePrevMonthButtonClick}><GoChevronLeft style={{color: '#DFDFDF', fontSize: '20px', cursor: 'pointer'}} /></div>
                    <div className={styles.MonthsText}>{monthName} {getYear()}</div>
                    <div onClick={handleNextMonthButtonClick}><GoChevronRight style={{color: '#DFDFDF', fontSize: '20px', cursor: 'pointer'}}/></div>
                </div>
                <ul className={styles.CalendarContainer}>
                    {monthData.map((week, index) => {
                        return <Week week={week} key={index} dayClick={handleDayClick} state={state} />
                    })}
                </ul>
                <div className={styles.DaysOfTheWeek}>
                    {state.weekDayNames.map((dayOftheWeek, index) => {
                        return <span key={index}className={styles.DayOftheWeek}>{dayOftheWeek}</span>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Calendar;