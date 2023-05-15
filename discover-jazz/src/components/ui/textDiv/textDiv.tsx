import React, { FC } from 'react';
import styles from '../ui.module.css';
import { DivProps } from '../../../types/types';

const DivElement: FC<DivProps> = (props: DivProps) => {
  return (
    <div className = {styles.container}>
      {props.heading}
    </div>
  )
}

export default DivElement;

