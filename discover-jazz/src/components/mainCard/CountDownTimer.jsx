import React, { useState, useEffect } from 'react';
import styles from './mainCard.module.css';
import {getRemaining} from './utils/CountDownUtils';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}

const CountDownTimer = ({countDownTimestampMs}) => {
  const [remainingTime, setRemainingTime ] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDownTimestampMs])

  const updateRemainingTime = (countdown) => {
    setRemainingTime(getRemaining(countdown));
  }

  return (
        <div className = {styles.salesBlockToFestival}>to the festival 
          <span> {remainingTime.days} </span>
          <span>days </span>  
          <span>{remainingTime.hours}</span>
          <span>:</span>
          <span>{remainingTime.minutes}</span>
          <span>:</span>
          <span>{remainingTime.seconds}</span>
        </div>
    
  );
};

export default CountDownTimer;