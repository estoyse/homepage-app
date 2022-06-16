import moment from 'moment';

export const getCurrentDate = () => moment().format('dddd, D MMMM');
export const getCurrentperiod = () => moment().format('a');
export const getCurrentTime = () => moment().format('hh:mm');

export const getDayAndMonth = (date) => moment(date).format('D/MM');

export const dateToString = (date, year = false) => {
  if (year) return moment(date).format('D MMMM YYYY');
  return moment(date).format('D MMMM');
};
export const getTimeFromNow = (date) =>
  moment.unix(date).startOf('hour').fromNow();
