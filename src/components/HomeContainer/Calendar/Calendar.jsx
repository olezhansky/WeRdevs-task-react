import React, {useState} from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import * as calendarLogic from './calendarLogic';
import Week from './Week/Week';
import Modal from '../../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { prevMonthAction,nextMonthAction, selectDayAction } from '../../../store/actions';
import styles from './Calendar.module.scss'

const Calendar = () =>  {

    const [modalActive, setModalActive] = useState(false);

    const dispatch = useDispatch()

    const date = useSelector((state) => state.date);
    const dayOfWeek = useSelector((state) => state.dayOfWeek);
    const currentDate = useSelector((state) => state.currentDate);
    const selectedDate = useSelector((state) => state.selectedDate);
    const months = useSelector((state) => state.months);

    const handlePrevMonth = () => {
        dispatch(prevMonthAction());
    };

    const handleNextMonth = () => {
        dispatch(nextMonthAction());
    };

    const handleDayClick = (date) => {
        setModalActive(true);
        dispatch(selectDayAction(date));
    };

    let monthName = '';

    for (let i = 0; i < months.length; i++) {
        if (date.getMonth() === i) {
            monthName = months[i];
        }
    }

    const monthsData = calendarLogic.getMonthData(date.getFullYear(), date.getMonth());
    
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <div className={styles.Months}>
                    <div onClick={handlePrevMonth}>
                        <GoChevronLeft style={{color: '#DFDFDF', fontSize: '20px', cursor: 'pointer'}} />
                    </div>
                    <div className={styles.MonthsText}>
                        {monthName} {date.getFullYear()}
                    </div>
                    <div onClick={handleNextMonth}>
                        <GoChevronRight style={{color: '#DFDFDF', fontSize: '20px', cursor: 'pointer'}}/>
                    </div>
                </div>
                <ul className={styles.CalendarContainer}>
                    {monthsData.map((week, index) => {
                        return <Week 
                                    week={week} 
                                    key={index} 
                                    dayClick={handleDayClick} 
                                    currentDate={currentDate}
                                    selectedDate={selectedDate} 
                                />
                        })
                    }
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