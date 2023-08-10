import { GroupBase,  OnChangeValue, SingleValue, StylesConfig, MultiValue, ActionMeta } from 'react-select';
import React, { FocusEventHandler, ReactNode } from 'react';

export interface ButtonProps {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  onFocus?: FocusEventHandler<HTMLButtonElement> | undefined;
  radius?: string;
  width: string;
  textAlign?: string;
  backgroundColor: string;
  gridArea?: string;
  margin?: string;
}

export type isMultiType = true | false;

export interface ISelectProps {
  className?: string;
  options: ISelectOption[];
  styles?: Partial<StylesConfig<ISelectOption, isMultiType, GroupBase<ISelectOption>>>;
  value: SingleValue<ISelectOption> | MultiValue<ISelectOption>;
  onBlur?:  FocusEventHandler<HTMLInputElement>;
  onFocus?:  FocusEventHandler<HTMLInputElement>;
  onChange?: any;
}

export interface ISelectOption {
  value: string;
  label: string;
}

export interface IArtist {
  id: number;
  name: string;
  stage?: string;
  date?: string;
  time?: string;
  artistInfo?: string;
  linkVideo?: string;
  linkTicketBuy?: string;
  photo: string;
  style?: string;
  big: boolean;
  info?: string;
  country?: string;
}

export interface IFilters {
   date: Filter,
   stage: Filter, 
   sort: Filter 
};
export interface Filter {
  value: string;
  label: string;
}

export type Props = {
  heading: string;
  subheading?: ReactNode;
  price?: ReactNode;
  upToDate?: string;
  inputWindow?: boolean;
  actionButton1?: ReactNode;
  actionButton2?: ReactNode;
  image?: React.ReactNode;
  color?: string;
  backgrounImage?: string;
  height?: any;
  children?: ReactNode;
  buttonUsed?: boolean;
};