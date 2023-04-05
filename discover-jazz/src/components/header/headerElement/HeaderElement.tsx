
import React from 'react';
import { Fonts } from '../../../constants/fonts';
//import styles from '../headerElement/headerElement.module.scss';

type Props = {
  
  heading: string;
  
};

export const HeaderElement = (props: Props) => {
    return (
      <span className={Fonts.inter}>{props.heading}</span>
    );
  };

// import ArrowIcon from '../../ui/headerExtraElements/arrow.svg';
// import PointIcon from '../../ui/headerExtraElements/point.svg';
  
/* {props.arrow1 && (      
            <img src={ArrowIcon} alt="Arrow Icon" style={{ display: 'flex' }} />
          
        )}
        {props.point1 && (
          
            <img src={PointIcon} alt="Point Icon" style={{ display: 'flex' }} />
          
        )} */
        

/* </div>
        {props.arrow2 && (
          
            <img src={ArrowIcon} alt="Arrow Icon" style={{ display: 'flex' }}  />
          
        )}
        {props.point2 && (
          
            <img src={PointIcon} alt="Point Icon" style={{ display: 'flex' }}/>
          
        )} */

// const HeaderElementContent = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #242424;
//   text-transform: uppercase;
//   font-size: 1.5rem;
//   ${Fonts.inter}
// `;

// export const HeaderElement = (props: Props) => {
//   const extraElements = [];

//   if (props.arrow1) {
//     extraElements.push(<img key="arrow1" src={ArrowIcon} alt="Arrow Icon" />);
//   }

//   if (props.point1) {
//     extraElements.push(<img key="point1" src={PointIcon} alt="Point Icon" />);
//   }

//   if (props.arrow2) {
//     extraElements.push(<img key="arrow2" src={ArrowIcon} alt="Arrow Icon" />);
//   }

//   if (props.point2) {
//     extraElements.push(<img key="point2" src={PointIcon} alt="Point Icon" />);
//   }

//   return (
//     <div className={styles.headerElement} style={{ display: 'flex' }}>
//       <div className={styles.headerExtraElementsContainer}>
//         {extraElements}
//       </div>
//       <HeaderElementContent>{props.heading}</HeaderElementContent>
//     </div>
//   );
// };

// export const HeaderElement = (props: Props) => {
//   const extraElements = [];

//   if (props.arrow1) {
//     extraElements.push(<img key="arrow1" src={ArrowIcon} alt="Arrow Icon" />);
//   }

//   if (props.point1) {
//     extraElements.push(<img key="point1" src={PointIcon} alt="Point Icon" />);
//   }

//   if (props.arrow2) {
//     extraElements.push(<img key="arrow2" src={ArrowIcon} alt="Arrow Icon" />);
//   }

//   if (props.point2) {
//     extraElements.push(<img key="point2" src={PointIcon} alt="Point Icon" />);
//   }

//   return (
//     <div className={styles.headerElement}>
//       <div className={styles.headerExtraElementsContainer}>
//         {extraElements}
//       </div>
//       <div className={`${styles.headerElementContent} ${Fonts.inter}`}>{props.heading}</div>
//     </div>
//   );
// };









