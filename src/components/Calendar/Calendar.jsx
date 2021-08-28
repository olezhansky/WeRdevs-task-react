/* eslint-disable array-callback-return */
import React, {useState} from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import * as calendar from './calendar';
import Week from './Week/Week';
import Modal from '../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { prevMonthAction,nextMonthAction, selectDayAction } from '../../store/actions';
import styles from './Calendar.module.scss'

const Calendar = () =>  {

    const [modalActive, setModalActive] = useState(false);

    const dispatch = useDispatch()

    const date = useSelector((state) => state.date);
    const dayOfWeek = useSelector((state) => state.dayOfWeek);
    const currentDate = useSelector((state) => state.currentDate);
    const selectedDate = useSelector((state) => state.selectedDate);
    const months = useSelector((state) => state.months);

    const getYear = () => {
        return date.getFullYear();
    }
    const getMonth = () => {
        return date.getMonth();
    }

    const handlePrevMonthButtonClick = () => {
        const date = new Date(getYear(), getMonth() - 1);
        dispatch(prevMonthAction(date))
    };

    const handleNextMonthButtonClick = () => {
        const date = new Date(getYear(), getMonth() + 1);
        dispatch(nextMonthAction(date))
    };


    const handleDayClick = (date) => {
        setModalActive(true)
        dispatch(selectDayAction(date))  
    };

    let monthName = '';

    for (let i = 0; i < months.length; i++) {
        if (getMonth() === i) {
            monthName = months[i]
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
                        return <Week 
                                    week={week} 
                                    key={index} 
                                    dayClick={handleDayClick} 
                                    currentDate={currentDate}
                                    selectedDate={selectedDate} 
                                />
                    })}
                </ul>
                <div className={styles.DaysOfTheWeek}>
                    {dayOfWeek.map((dayOftheWeek, index) => {
                        return <span key={index} className={styles.DayOftheWeek}>{dayOftheWeek}</span>
                    })}
                </div>
            </div>
            <Modal modalActive={modalActive} setModalActive={setModalActive} selectedDate={selectedDate}/>
        </div>
    );
}

export default Calendar;