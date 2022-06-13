import React, { useState, useEffect } from 'react';
import {
  getCurrentDate,
  getCurrentperiod,
  getCurrentTime,
} from '../../helpers/date';
import { DateStyles } from '../../styles/homestyles/dateStyles';

const Date = () => {
  const [date, setDate] = useState(getCurrentDate);
  const [time, setTime] = useState(getCurrentTime);
  const [period, setPeriod] = useState(getCurrentperiod);

  useEffect(() => {
    const dataInterval = setInterval(() => {
      setDate(getCurrentDate);
      setTime(getCurrentTime);
      setPeriod(getCurrentperiod);
    }, 30000);

    return () => clearInterval(dataInterval);
  }, []);
  return (
    <DateStyles>
      <h1 className="clock">
        {time}
        <span className="time-suffix">{period}</span>
      </h1>
      <h5 className="date">{date}</h5>
    </DateStyles>
  );
};

export default Date;
