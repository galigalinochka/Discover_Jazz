import React, { FC } from 'react';
import styles from './LineUp.module.css';
import ScheduleBlockList from './ScheduleBlockList';

export const dates = ['saturday 20 MAY', 'sunday 21 MAY', 'saturday 27 MAY', 'sunday 28 MAY'];

const ScheduleBlock: FC = () => {
 
  return (
    <div className = {styles.scheduleBlockContainer}>
      {dates.map((elem, id) => {
        return (
          <React.Fragment key={elem}>
          <p className={styles.scheduleBlockHeader} key = {elem}>{elem}</p>
          <ScheduleBlockList artists={[]} date={elem.slice(-7)} />
          </React.Fragment>
      )})
      }
      
    </div>
  );
};

export default ScheduleBlock;