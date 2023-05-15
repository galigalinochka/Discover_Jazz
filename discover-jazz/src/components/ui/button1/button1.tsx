import React, { FC } from 'react';
import styles from '../ui.module.css';
import { ButtonProps } from '../../../types/types';

const Button: FC<ButtonProps> = ({ 
  border,
  color,
  children,
  height,
  onClick, 
  width,
  backgroundColor
}) => {
  return (
    <button className = {styles.button}
      onClick = {onClick}
      style = {{
        backgroundColor,
        border,
        borderRadius: border,
        height,
        width,
        color,
      }}
    >
      {children}
    </button>
  );
};

export default Button;



