import { GroupBase,  OnChangeValue, SingleValue, StylesConfig, MultiValue } from 'react-select';
import React, { FocusEventHandler } from 'react';

export interface ButtonProps {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius?: string;
  width: string;
  textAlign?: string;
  backgroundColor: string
}

export type isMultiType = true | false;

export interface ISelectProps {
  className?: string;
  options: ISelectOption[];
  styles?: Partial<StylesConfig<ISelectOption, isMultiType, GroupBase<ISelectOption>>>;
  value: SingleValue<ISelectOption> | MultiValue<ISelectOption>;
  onBlur?:  FocusEventHandler<HTMLInputElement>;
  onFocus?:  FocusEventHandler<HTMLInputElement>;
  onChange: any;
}

export interface ISelectOption {
  value: string;
  label: string;
}

export type DivProps = {
  
  heading: string;
  
};

/*export interface DivElement extends HTMLDivElement {
  heading?: string;
  itemId?: string;
  itemValue?: string;
  border?: string;
  color?: string;
  height?: string;
  width?: string;
  backgroundColor: string;
}*/

export interface IArtist {
  id: number;
  name: string;
  stage: string;
  date: string;
  time: string;
  artistInfo: string;
  linkVideo: string;
  linkTicketBuy: string;
  photo: string;
}

