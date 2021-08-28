import { PREV_MONTH, NEXT_MONTH, SELECT_DAY_ACTION } from './types';

export const prevMonthAction = (date) => ({
  type: PREV_MONTH,
  payload: date,
});

export const nextMonthAction = (date) => ({
  type: NEXT_MONTH,
  payload: date,
});

export const selectDayAction = (date) => ({
  type: SELECT_DAY_ACTION,
  payload: date,
});
