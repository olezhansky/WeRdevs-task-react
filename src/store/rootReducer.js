import { PREV_MONTH, NEXT_MONTH, SELECT_DAY_ACTION } from './types';

const initialState = {
  date: new Date(),
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Jule',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  dayOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  dayOfWeekFullName: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday',
  ],
  currentDate: new Date(),
  selectedDate: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_MONTH:
      return {
        ...state,
        date: action.payload,
      };
    case NEXT_MONTH:
      return {
        ...state,
        date: action.payload,
      };
    case SELECT_DAY_ACTION:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};
