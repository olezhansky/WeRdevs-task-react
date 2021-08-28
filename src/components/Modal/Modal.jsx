import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { VscClose } from 'react-icons/vsc';
import styles from './Modal.module.scss';

const Modal = ({ modalActive, setModalActive, selectedDate }) => {
    const dayOfWeekFullName = useSelector((state) => state.dayOfWeekFullName);

    if (!selectedDate) return null

    const handleClose = () => {
        setModalActive(false);
    };

    const onChangeHandle = () => {
        console.log('onChange')
    }

    return (
    <div
        className={modalActive ? styles.Modal_active : styles.Modal}
        onClick={handleClose}
    >
        <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.ButtonClose}>
                <button  onClick={handleClose}><VscClose style={{fontSize: '16px'}}/></button>
            </div>
            <form className={styles.Form}>
                <label>Month
                <input type="text" onChange={onChangeHandle} value={selectedDate.toLocaleString('en-us', { month: 'long' })} />
                </label>
                <label>Day
                <input type="text" onChange={onChangeHandle} value={`${selectedDate.getDate()}th ${dayOfWeekFullName[selectedDate.getDay()]}` }/>
                </label>
            </form>
        </div>
    </div>
    );
};

Modal.propTypes = {
    modalActive: PropTypes.bool,
    setModalActive: PropTypes.func
};

Modal.defaultProps = {
    setModalActive: false
};

export default Modal;