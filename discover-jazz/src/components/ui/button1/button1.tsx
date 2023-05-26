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
  backgroundColor,
  gridArea,
  margin,
  onFocus
}) => {
  return (
    <button className = {styles.button}
      onClick = {onClick}
      onFocus = {onFocus}
      style = {{
      backgroundColor,
      border,
      borderRadius: border,
      height,
      width,
      color,
      gridArea,
      margin,
      }}
    >
      {children}
    </button>
  );
};

export default Button;



