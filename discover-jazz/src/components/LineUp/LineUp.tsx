import React, { FC } from 'react';
import SalesBlockHeader from '../mainCard/SalesBlockHeader';
import ScheduleBlock from './ScheduleBlock';
import {LineUpContainer} from './Lineup.styles';
import styles from './LineUp.module.css';



const LineUp: FC = () => {
  return (
    <>
      <LineUpContainer>
        <div className = {styles.salesBlockHeaderContainer}>
          <SalesBlockHeader style = {{width: '90%'}}/>
        </div>
        <ScheduleBlock />
      </LineUpContainer>
      </>
  );
};

export default LineUp;