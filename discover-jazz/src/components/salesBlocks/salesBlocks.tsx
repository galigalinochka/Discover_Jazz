import React from 'react';
import styles from './salesBlocks.module.css';
import Button from '../ui/button1/button1';

const salesBlocks = () => {
  return (
    <div>
      <h1>SalesBlock</h1>
      <Button 
        border="none" color={'#FFCC38'} height={'3.5rem'} onClick={function (): void {
          throw new Error('Function not implemented.');
        } } width={'19.5rem'} children="subscribe" backgroundColor={'#43454A'}
        />
    </div>
  );
};

export default salesBlocks;