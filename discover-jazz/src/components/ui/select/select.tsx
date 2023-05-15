import React, { FC } from 'react';
import { default as ReactSelect, StylesConfig, GroupBase} from 'react-select';
import styles from '../ui.module.css';
import styled from 'styled-components';
import { ISelectProps, ISelectOption, isMultiType} from '../../../types/types';

export const SelectStyles:StylesConfig<ISelectOption, isMultiType, GroupBase<ISelectOption>>  = {
  container: (styles, {isFocused} : {isFocused: boolean}) => ({
    ...styles,
    width: '214px',
    color: '#BEC5FF',
    border: 'transparent',
    borderStyle: 'none',
    borderBottom: '1px solid #BEC5FF',
    outline: 'none',
  }),
  
  control: (styles) => ({
    ...styles,
    backgroundColor:'none',
    borderStyle: 'hidden',
    boxShadow: 'none',
    cursor: 'pointer'
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
   display: 'none'
  }),
  singleValue:(styles) => ({
    ...styles,
    color: '#BEC5FF',
  }),

  option: (
    styles, { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
  ) => ({
    ...styles,
    backgroundColor: isSelected ? "#dfd3c3" : "",
    color: isFocused || isSelected ? "black" : "",
    cursor: 'pointer'
  }),
}

export const Select: FC<ISelectProps> = ({ 
  className,
  options,
  styles,
  value,
  onBlur,
  onFocus,
  onChange
}) => {
  return (
    <ReactSelect  className = {className}
      styles = { SelectStyles }
      options = { options }
      value = { value }
      onBlur = { onBlur }
      onFocus = { onFocus }
      onChange = { onChange }
    />
  )
}



