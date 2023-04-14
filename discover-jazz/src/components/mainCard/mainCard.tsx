import React, {FC} from 'react';
import styles from './mainCard.module.css';
import Logo from  '../../assets/Logo.png';
import Burger from  '../../assets/Burger.svg';
import DiscoverJazz from '../../assets/DiscoverJazz.svg';
import SelectBlock from './selectBlock';

const salesBlocks: FC = () => {
  return (
      <div className = {styles.container}>
        <div className = {styles.gridContainer}>
          <div className = {styles.salesBlockHeader}>
            <img className = {styles.logo} src= {Logo} alt="logo" />
            <div className = {styles.salesBlockHeaderList}>
              <span>Artists</span>
              <span>Line-up</span>
              <img src={Burger} alt="burger" className = {styles.burger}/>
            </div>
          </div>
          <div className = {styles.salesBlockMain}>
            <img className = {styles.salesBlockMainLogo} src= {DiscoverJazz} alt="discover Jazz" />
            <div className = {styles.salesBlockToFestival}>to the festival <span>45</span> d  <span>17:56:43</span></div>
          </div>
          
          <div className = {styles.salesBlockMainInfo}>
            <div>
              <div className = {styles.MainInfoDate}>20-21_27-28 may</div>
              <div className = {styles.MainInfoPlace}>New york · manhattan</div>
            </div>
            <div className = {styles.MainInfoDots}>
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
          </div>
          </div>
          
        </div>
        <div className = {styles.salesBlockFooter}>
          <SelectBlock />
        </div>
      </div>
  );
};

export default salesBlocks;