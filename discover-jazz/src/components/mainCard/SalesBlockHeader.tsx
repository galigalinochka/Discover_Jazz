import React from 'react';
import styles from './mainCard.module.css';
import Logo from  '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import Burger from  '../../assets/Burger.svg';

const SalesBlockHeader = () => {
  return (
    <div className = {styles.salesBlockHeader}>
      <img className = {styles.logo} src= {Logo} alt="logo" />
      <div className = {styles.salesBlockHeaderList}>
        <NavLink to = '/artists'className = {styles.artists}>Artists</NavLink>
        <NavLink to = '/lineup' className = {styles.lineUp} onClick ={() => console.log('click')}>Line-up</NavLink>
        <img src={Burger} alt="burger" className = {styles.burger}/>
      </div>
  </div>
  );
};

export default SalesBlockHeader;