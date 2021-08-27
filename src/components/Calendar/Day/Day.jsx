import React from 'react';
import styles from './Day.module.scss';

const Day = ({day}) => {
    return (
          <li className={styles.Item}>{day}</li>
    )
}

export default Day;