import React from 'react';
import styles from './Content.module.scss';

const Content = () => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.ContentBlock}>
                <h2 className={styles.Title}>Choose the day for the meeting</h2>
                <p className={styles.Text}>We encourage you to book your appointment online. This will save you time.</p>
            </div>
        </div>
    )
}

export default Content;