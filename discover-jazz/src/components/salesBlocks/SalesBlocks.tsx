import React from 'react';
import styles from './salesBlocks.module.css';
import Button from '../ui/button1/button1';
import StyledSalesBlocks from '../salesBlocks/salesBlock.styles'
import { type } from 'os';

type Props = {
  
  heading: string;
  subheading?: string;
  price?: string;
  upToDate?: string;
  inputWindow?: boolean;
  actionButton?: boolean;
  image?: any;
  
};


const salesBlocks = () => {
  return (
      <StyledSalesBlocks>
        <div className = {styles.flexContainer}>
          <p className = {styles.header}>Tickets</p>
          <div className = {styles.daysBlock}>Days</div>
          <div className = {styles.prices}>Prices</div>
          <Button 
          border="none" color={'#FFCC38'} height={'3.5rem'} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } width={'19.5rem'} children="subscribe" backgroundColor={'#43454A'}
          />
        </div>
      </StyledSalesBlocks>
  );
};

export default salesBlocks;