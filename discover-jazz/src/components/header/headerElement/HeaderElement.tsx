
import React from 'react';
import { Fonts } from '../../../constants/fonts';
import styles from '../header.module.scss';

export type Props = {
  heading: string;
};

export const HeaderElement = (props: Props) => {
    return (
      <span className={styles.headerElement}>{props.heading}</span>
    );
  };
