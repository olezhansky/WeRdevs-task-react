import React from 'react';
import Calendar from '../../components/Calendar/Calendar.jsx';
import Content from '../../components/Content/Content';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.Wrapper}>
            <Content />
            <Calendar />
        </div>
    )
}

export default Home;