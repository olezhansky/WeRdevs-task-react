import React from 'react';
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.Wrapepr}>
            <div className={styles.Logo}>
                <div className={styles.LogoBlock}>
                    <div className={styles.LogoLeftPart}>
                        <span>w</span>
                        <span>e</span>
                    </div>
                    <p className={styles.LogoRightPart}>
                        <span>R</span>devs
                    </p>
                </div>
            </div>
            <ul className={styles.Menu}>
                <li className={styles.Item}>
                    <NavLink to="/home" activeClassName={styles.ItemActive}>
                       Home
                    </NavLink>
                </li>
                <li className={styles.Item}>
                    <NavLink to="/about" activeClassName={styles.ItemActive}>
                        About us
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;