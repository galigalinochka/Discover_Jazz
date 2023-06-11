import React, {FC} from 'react';
import styles from './mainCard.module.css';
import Logo from  '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import Burger from  '../../assets/Burger.svg';
import { CSSProperties } from 'react';

export interface SalesBlockHeaderProps {
  style?: CSSProperties;
}

const SalesBlockHeader: FC<SalesBlockHeaderProps> = ({ style }) => {
  return (
    <div style={style} className = {styles.salesBlockHeader}>
      <NavLink to = '/'><img className = {styles.logo} src= {Logo} alt="logo" /></NavLink>
      <div className = {styles.salesBlockHeaderList}>
        <NavLink to = '/artists'className = {styles.artists}>Artists</NavLink>
        <NavLink to = '/lineup' className = {styles.lineUp}>Line-up</NavLink>
        <img src={Burger} alt="burger" className = {styles.burger}/>
      </div>
  </div>
  );
};

export default SalesBlockHeader;
