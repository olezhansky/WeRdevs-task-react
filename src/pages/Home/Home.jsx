import React from 'react';
import Calendar from '../../components/HomeContainer/Calendar/Calendar';
import Content from '../../components/HomeContainer/Content/Content';
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