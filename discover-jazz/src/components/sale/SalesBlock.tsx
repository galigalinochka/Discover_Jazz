import React, { Children } from 'react';
import styles from './salesBlocks.module.css';
import Button from '../ui/button1/button1';
import {
  StyledSalesBlocks,
  StyledContainerHeading,
  StyledHeading,
  StyledSubheading,
  StyledPrice,
  StyledUpToDate,
  StyledInputWindow,
  StyledActionButton,
  StyledImage,
  StyledImageContainer
  }  from './salesBlock.styles'
import { type } from 'os';

type Props = {
  heading?: string;
  subheading?: string;
  price?: string;
  upToDate?: string;
  inputWindow?: boolean;
  actionButton?: boolean;
  image?: React.ReactNode;
  color?: string;
  backgrounImage?: string;
  height?: any;
};

export const SalesBlock = (props:Props) => {
  return (
    <div>
      <StyledSalesBlocks
        style={{
          background: props.color
            ? props.color
            : `url(${props.backgrounImage}) no-repeat center center`,
          backgroundSize: 'cover',
          height: props.height,
        }}
      >
        <StyledContainerHeading>
          <StyledHeading >          
              {props.heading}
          </StyledHeading>
        </StyledContainerHeading>

        <StyledSubheading>
          {props.subheading}
        </StyledSubheading>

        <StyledPrice> 
          {props.price}
        </StyledPrice>

        <StyledUpToDate>
          {props.upToDate}
        </StyledUpToDate>

        {/* <StyledActionButton>
          <Button>{'Go to ticket store'}</Button>
        </StyledActionButton> */}

        <StyledInputWindow>
          {props.actionButton}
        </StyledInputWindow>

        <StyledImage>
          <StyledImageContainer>
            {props.image}
          </StyledImageContainer>
        </StyledImage> 
              
      </StyledSalesBlocks>
    </div>  
  );
};




