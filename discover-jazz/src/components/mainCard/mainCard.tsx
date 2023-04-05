import React, {FC} from 'react';
import styles from './mainCard.module.css';

const salesBlocks: FC = () => {
  return (
    <div>
      <div className = {styles.container}>
        <div className = {styles.gridContainer}>
          <div className = {styles.salesBlockHeader}>Logo Artists Line-Up Burger</div>
          <div className = {styles.salesBlockMain}>Discover Jazz | to the festival 45 d  17:56:43</div>
          <div className = {styles.salesBlockMainInfo}>20-21_27-28 may New york · manhattan | ...</div>
        </div>
        <div className = {styles.salesBlockFooter}></div>
      </div>
    </div>
  );
};

export default salesBlocks;