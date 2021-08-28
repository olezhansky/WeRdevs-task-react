import React from 'react';
import styles from './Week.module.scss';
import './Week.scss'
import classnames from 'classnames';

const Week = ({week, dayClick, state}) => {

    const areEqual = (a, b) => {
        if (!a || !b) return false;
        return (
          a.getFullYear() === b.getFullYear() &&
          a.getMonth() === b.getMonth() &&
          a.getDate() === b.getDate()
        );
    }

    return (
        <li className={styles.Week}>
            {week.map((day, index) => { 
                if (day) {
                    return  (
                        <p
                            key={day.getTime()}
                            className={classnames('day', {
                                'today': areEqual(day, state.currentDate),
                                'selected': areEqual(day, state.selectedDate)
                            })}
                            onClick={() => dayClick(day)}
                        >
                            {day.getDate()}
                        </p>
                    )
                } else {
                    return <p key={index}>{''}</p> 
                }
            })}
        </li> 
    )
}

export default Week;