import React, { Children, ReactNode } from 'react';
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
  StyledImage,
  StyledImageContainer,
  StyledButtonBuy,
  StyledButtonInput,  
  }  from './salesBlock.styles'
import { Props } from '../../types/types';



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
        
        <StyledButtonInput>
          {props.actionButton2}          
        </StyledButtonInput>

        <StyledButtonBuy>
          {props.actionButton1}
        </StyledButtonBuy>

        <StyledImageContainer> 
          <StyledImage>
            {props.image}
          </StyledImage> 
        </StyledImageContainer>   
              
      </StyledSalesBlocks>
    </div>  
  );
};




