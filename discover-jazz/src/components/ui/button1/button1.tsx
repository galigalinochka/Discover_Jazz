import React, { FC } from 'react';
import styles from '../ui.module.css';
import { ButtonProps } from '../../../types/types';

const Button: FC<ButtonProps> = ({ 
  border,
  color,
  children,
  height,
  onClick, 
  radius,
  width,
  textAlign,
  //fontSize,
  //textTransform,
  backgroundColor
}) => {
  return (
    <button 
      onClick = {onClick}
      style = {{
        backgroundColor,
        border,
        borderRadius: border,
        height,
        width,
        color,
        //fontSize,
      }}
    >
      {children}
    </button>
  );
};

export default Button;