import dayjs from 'dayjs';
export const getRemaining = (timestampMs) => {

  const timesstampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();

  return {
    seconds: getRemainingSeconds(nowDayjs, timesstampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timesstampDayjs),
    hours: getRemainingHours(nowDayjs, timesstampDayjs),
    days: getRemainingDays(nowDayjs, timesstampDayjs)
  }
}

const getRemainingSeconds = (nowDayjs, timesstampDayjs ) => {
  const seconds = timesstampDayjs.diff(nowDayjs, 'seconds') % 60;
  return padWithZeros(seconds, 2);
}

const getRemainingMinutes = (nowDayjs, timesstampDayjs ) => {
  const minutes = timesstampDayjs.diff(nowDayjs, 'minutes') % 60;
  return padWithZeros(minutes, 2);
}

const getRemainingHours = (nowDayjs, timesstampDayjs ) => {
  const hours = timesstampDayjs.diff(nowDayjs, 'hours') % 24;
  return padWithZeros(hours, 2);
}

const getRemainingDays = (nowDayjs, timesstampDayjs ) => {
  const days = timesstampDayjs.diff(nowDayjs, 'days');
  return days.toString();
}

const padWithZeros = (number, minLength) => {
  const numberString = number.toString();
  if(numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString
}

