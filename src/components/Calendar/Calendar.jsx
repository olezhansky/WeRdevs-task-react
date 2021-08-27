// import React, { useState } from 'react';
// import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
// import styles from './Calendar.module.scss';
// import Day from './Day/Day';

// const Calendar = () => {

//     const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
//     const months = ['January', 'Frbruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'НоNovemberябрь', 'December']
//     const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//     const daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

//     const [state, setState] = useState({
//         date: new Date(),
//         currentDate: new Date(),
//         selectedDate: ''
//     })

//     const getYear = () => {
//         return state.date.getFullYear();
//     }
//     const getMonth = () => {
//         return state.date.getMonth();
//     }
//     const getDay = () => {
//         return state.date.getDate();
//     }

//     const handlePrevMonthButtonClick = () => {
//         const date = new Date(getYear(), getMonth() - 1);
//         setState(date)
//     };

//     const handleNextMonthButtonClick = () => {
//         const date = new Date(getYear(), getMonth() + 1);
//         setState(date)
//     };

//     const DAYS_IN_WEEK = 7;

//    const getMonthData = (year, month) => {
//         const result = [];
//         const date = new Date(year, month);
//         const daysInMonth = getDaysInMonth(date);
//         const monthStartsOn = getDayOfWeek(date);
//         let day = 1;
    
//         for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
//             result[i] = [];
            
//             for (let j = 0; j < DAYS_IN_WEEK; j++) {
//                 if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
//                     result[i][j] = undefined;
//                 } else {
//                     result[i][j] = new Date(year, month, day++);
//                 }
//             }
//         }
    
//         return result;
//     }

//     const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

//    const getDayOfWeek = (date) => {
//         const dayOfWeek = date.getDay();
    
//         return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
//     }

//     const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
//     const Month = {
//         January: 0,
//         February: 1,
//         March: 2,
//         April: 3,
//         May: 4,
//         June: 5,
//         July: 6,
//         August: 7,
//         September: 8,
//         October: 9,
//         Novermber: 10,
//         December: 11
//     };

//     const getDaysInMonth = (date) => {
//         const month = date.getMonth();
//         const year = date.getFullYear();
//         const daysInMonth = DAYS_IN_MONTH[month];
        
//         if (isLeapYear(year) && month === Month.February) {
//             return daysInMonth + 1;
//         } else {
//             return daysInMonth;
//         }
//     }
//     const isLeapYear = (year) => {
//         return !((year % 4) || (!(year % 100) && (year % 400)));
//     }


//     const monthData = getMonthData(getYear(), getMonth());
//     console.log(monthData);

//     return (
//         <div className={styles.Wrapper}>
//             <div className={styles.Container}>
//                 <div className={styles.Months}>
//                     <div onClick={handlePrevMonthButtonClick}><GoChevronLeft style={{color: '#DFDFDF', fontSize: '20px', cursor: 'pointer'}} /></div>
//                     <div className={styles.MonthsText}>{months[0]}{years[0]}</div>
//                     <div onClick={handleNextMonthButtonClick}><GoChevronRight style={{color: '#DFDFDF', fontSize: '20px', cursor: 'pointer'}}/></div>
//                 </div>
//                 <ul className={styles.Days}>
//                 {monthData.map((week, index) => {
//                    return <li>{week[4].getDate()}</li>
//                 })}
//                 </ul>
//                 {/* <ul className={styles.Days}>
//                     {days.map((day) => {
//                     return <Day day={day}/>
//                     })}
//                 </ul> */}
//                 <div className={styles.DaysOfTheWeek}>
//                     {daysOfTheWeek.map((dayOftheWeek) => {
//                         return <span className={styles.DayOftheWeek}>{dayOftheWeek}</span>
//                     })}
//                 </div>
//             </div>   
//         </div>
//     )
// }

// export default Calendar;

// import React from 'react';
// import classnames from 'classnames';

// import * as calendar from './calendar';

// import './Calendar.scss';

// export default class Calendar extends React.Component {
//     static defaultProps = {
//         date: new Date(),
//         years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
//         monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
//         weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
//         onChange: Function.prototype
//     };

//     state = {
//         date: this.props.date,
//         currentDate: new Date(),
//         selectedDate: null
//     };

//     get year() {
//         return this.state.date.getFullYear();
//     }

//     get month() {
//         return this.state.date.getMonth();
//     }

//     get day() {
//         return this.state.date.getDate();
//     }

//     handlePrevMonthButtonClick = () => {
//         const date = new Date(this.year, this.month - 1);
        
//         this.setState({ date });
//     };

//     handleNextMonthButtonClick = () => {
//         const date = new Date(this.year, this.month + 1);
        
//         this.setState({ date });
//     };

//     handleSelectChange = () => {
//         const year = this.yearSelect.value;
//         const month = this.monthSelect.value;

//         const date = new Date(year, month);

//         this.setState({ date });
//     };

//     handleDayClick = date => {
//         this.setState({ selectedDate: date });
        
//         this.props.onChange(date);
//     };

//     render() {
//         const { years, monthNames, weekDayNames } = this.props;
//         const { currentDate, selectedDate } = this.state;

//         const monthData = calendar.getMonthData(this.year, this.month);
//         console.log(monthData);
//         return (
//             <div className="calendar">
//                 <header>
//                     <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

//                     <select
//                         ref={element => this.monthSelect = element}
//                         value={this.month}
//                         onChange={this.handleSelectChange}
//                     >
//                         {monthNames.map((name, index) => {
//                             console.log(name);
//                            return <option key={name} value={index}>{name}</option>
//                         }
                            
//                         )}
//                     </select>

//                     <select
//                         ref={element => this.yearSelect = element}
//                         value={this.year}
//                         onChange={this.handleSelectChange}
//                     >
//                         {years.map(year =>
//                             {
//                                 console.log(year);
//                                 return <option key={year} value={year}>{year}</option> 
//                             }
                            
//                         )}
//                     </select>

//                     <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
//                 </header>

//                 <table>
//                     <thead>
//                         <tr>
//                             {weekDayNames.map(name =>
//                             {
//                                 console.log(name);
//                                 return <th key={name}>{name}</th>   
//                             }
                                 
//                             )}
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {monthData.map((week, index) => {
//                             console.log(week);
//                             return <tr key={index} className="week">
//                                 {week.map((date, index) => date ?
                                
//                                     <td
//                                         key={index}
//                                         className={classnames('day', {
//                                             'today': calendar.areEqual(date, currentDate),
//                                             'selected': calendar.areEqual(date, selectedDate)
//                                         })}
//                                         onClick={() => this.handleDayClick(date)}
//                                     >{date.getDate()}</td>
//                                     :
//                                     <td key={index} />
//                                 )}
//                             </tr> 
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

import React, {useState} from 'react';
import classnames from 'classnames';

import * as calendar from './calendar';

import './Calendar.scss';

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
    const getDate = () => {
        return state.date.getDate();
    }

    const handlePrevMonthButtonClick = () => {
        const date = new Date(getYear(), getMonth() - 1);
        setState({...state, date: date})
    };

    const handleNextMonthButtonClick = () => {
        const date = new Date(getYear(), getMonth() + 1);
        setState({...state, date: date})
    };


    const handleDayClick = date => {
        this.setState({ selectedDate: date });
        
        this.props.onChange(date);
    };

    let test = ''

    if (getMonth() === 0) {
        test = state.monthNames[0]
    } else if (getMonth() === 1) {
        test = state.monthNames[1]
    } else if (getMonth() === 2) {
        test = state.monthNames[2]
    } else if (getMonth() === 3) {
        test = state.monthNames[3] 
    } else if (getMonth() === 4) {
        test = state.monthNames[4] 
    } else if (getMonth() === 5) {
        test = state.monthNames[5]  
    } else if (getMonth() === 6) {
        test = state.monthNames[6]  
    } else if (getMonth() === 7) {
        test = state.monthNames[7] 
    } else if (getMonth() === 8) {
        test = state.monthNames[8] 
    } else if (getMonth() === 9) {
        test = state.monthNames[9] 
    } else if (getMonth() === 10) {
        test = state.monthNames[10] 
    } else if (getMonth() === 11) {
        test = state.monthNames[11]  
    }
    





        const monthData = calendar.getMonthData(getYear(), getMonth());
        console.log(monthData);
        return (
            <div className="calendar">
                <header>
                    <button onClick={handlePrevMonthButtonClick}>{'<'}</button>

                    <span>{test}</span>
                    <span>{getYear()}</span>

                    <button onClick={handleNextMonthButtonClick}>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>
                            {state.weekDayNames.map(name =>
                            {
                                console.log(name);
                                return <th key={name}>{name}</th>   
                            }
                                 
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {monthData.map((week, index) => {
                            console.log(week);
                            return <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                
                                    <td
                                        key={index}
                                        className={classnames('day', {
                                            'today': calendar.areEqual(date, state.currentDate),
                                            'selected': calendar.areEqual(date, state.selectedDate)
                                        })}
                                        onClick={() => this.handleDayClick(date)}
                                    >{date.getDate()}</td>
                                    :
                                    <td key={index} />
                                )}
                            </tr> 
                        })}
                    </tbody>
                </table>
            </div>
        );
}

export default Calendar;