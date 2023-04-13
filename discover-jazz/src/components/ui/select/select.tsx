import React, { FC } from 'react';
import { default as ReactSelect } from 'react-select';
import styles from '../ui.module.css';
import { ISelectProps, ISelectOption } from '../../../types/types';

const Select: FC<ISelectProps> = ({ 
  className,
  options,
  styles,
  value,
  onBlur,
  onFocus,
  onChange
}) => {
  return (
    <ReactSelect className = {className}
      styles = { styles }
      options = { options }
      value = { value }
      onBlur = { onBlur }
      onFocus = { onFocus }
      onChange = { onChange }
    />
  )
}

export default Select;