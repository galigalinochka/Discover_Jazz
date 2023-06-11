import * as React from 'react';
import styles from './header.module.scss';
import { HeaderElement } from './headerElement/HeaderElement';
import ArrowIcon from '../../assets/arrow.svg';
import PointIcon from '../../assets/point.svg';
import { useMediaQuery } from 'react-responsive';
import Marquee from "react-fast-marquee";

type Props ={};


export const Header = (props: Props) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1411px)'
  });
  const isDesktopMini = useMediaQuery({
    query: '(min-width: 980px)'
  });
  const isLapTop = useMediaQuery({
    query: '(min-width: 769px)'
  });

  return (
    <Marquee pauseOnClick pauseOnHover style = {{backgroundColor: "#5667FF"}}>
    <div className={styles.headerStyle}>
      {isDesktop && (

        <>
          <div className={styles.headerElementBlockDesktop}>
            <HeaderElement heading={'tickets'} />
            <img src={ArrowIcon} alt="Arrow Icon" />
          </div>
          <div className={styles.headerElementBlockDesktop}>
            <img src={PointIcon} alt="Point Icon" className = {styles.dot}/>
            <HeaderElement heading={'on sale now'} />
          </div>
          <div className={styles.headerElementBlockDesktop}>
            <HeaderElement heading={'tickets'} />
            <img src={ArrowIcon} alt="Arrow Icon" />
          </div>
          <div className={styles.headerElementBlockDesktop}>
            <img src={PointIcon} alt="Point Icon" className = {styles.dot}/>
            <HeaderElement heading={'on sale now'} />
          </div>
          <div className={styles.headerElementBlockDesktop}>
            <HeaderElement heading={'tickets'} />
            <img src={ArrowIcon} alt="Arrow Icon" />
          </div>
          <div className={styles.headerElementBlockDesktop}>
            <img src={PointIcon} alt="Point Icon" className = {styles.dot}/>
            <HeaderElement heading={'on sale now'} />
          </div>
        </>
      )}
      {isDesktopMini && !isDesktop &&(
        <>
        <div className={styles.headerElementBlockDesktop}>
        <HeaderElement heading={'tickets'} />
        <img src={ArrowIcon} alt="Arrow Icon" />
      </div>
      <div className={styles.headerElementBlockDesktop}>
        <img src={PointIcon} alt="Point Icon" className = {styles.dot}/>
        <HeaderElement heading={'on sale now'} />
      </div>
      <div className={styles.headerElementBlockDesktop}>
        <HeaderElement heading={'tickets'} />
        <img src={ArrowIcon} alt="Arrow Icon" />
      </div>
      <div className={styles.headerElementBlockDesktop}>
        <img src={PointIcon} alt="Point Icon" className = {styles.dot}/>
        <HeaderElement heading={'on sale now'} />
      </div>
      </>
      )}
      {isLapTop && !isDesktop && !isDesktopMini && (
        <>   
        <div className={styles.headerElementBlockLapTop}>
          <img src={PointIcon} alt="Point Icon" className = {styles.dot}/>
          <HeaderElement heading={'on sale now'} />
        </div>       
        <div className={styles.headerElementBlockLapTop}>
          <HeaderElement heading={'tickets'} />
          <img src={ArrowIcon} alt="Arrow Icon" />
        </div>
        <div className={styles.headerElementBlockLapTop}>
          <img src={PointIcon} alt="Point Icon" className = {styles.dot} />
          <HeaderElement heading={'on sale now'} />
        </div>
        <div className={styles.headerElementBlockLapTop}>
          <HeaderElement heading={'tickets'} />
          <img src={ArrowIcon} alt="Arrow Icon" />
        </div>
        <div className={styles.headerElementBlockLapTop}>
          <img src={PointIcon} alt="Point Icon" className = {styles.dot} />
          <HeaderElement heading={'on sale now'} />
        </div>
      </>
      )}
      {!isLapTop && !isDesktop && !isDesktopMini &&(
        <>
          <div className={styles.headerElementBlockMobile}>
            <HeaderElement heading={'tickets'} />
            <img src={ArrowIcon} alt="Arrow Icon" style={{ width: '17%', height: '17%'}}  />
          </div>
          <div className={styles.headerElementBlockMobile}>
            <img src={PointIcon} alt="Point Icon" style={{ width: '17%', height: '17%'}} className = {styles.dot} />
            <HeaderElement heading={'on sale now'} />
          </div>
          <div className={styles.headerElementBlockMobile}>
            <HeaderElement heading={'tickets'} />
            <img src={ArrowIcon} alt="Arrow Icon" style={{ width: '17%', height: '17%'}} />
          </div>
        </>
      )}
    </div>
    </Marquee>
  );
};