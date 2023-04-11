import React from 'react';
import { SalesBlock } from './SalesBlock';
import {
    StyledSalesBlocks,
    StyledHeading,
    StyledSubheading,
    StyledPrice,
    StyledUpToDate,
    StyledInputWindow,
    StyledActionButton,
    StyledImage
    }  from './salesBlock.styles'
import Sponsors from '../../assets/sponsors.svg'



type Props = {};

export const SaleModule = (props: Props) => {

    return (
        <div>
            <SalesBlock 
                heading='tickets'
                subheading='go to'
                color="#8B97FF"
                height="25rem"

            
            
            />
            <SalesBlock 
                heading='subscribe'
                color="#BEC5FF"
                height="29.5rem"
                   
            />
            <SalesBlock 
                heading='info'
                color="#8B97FF"
                height="27.5rem"
                
            />
                
            <SalesBlock 
                heading='sponsors'
                color="#BEC5FF"
                height="27.5rem"
                image={
                    <img src={Sponsors} alt="Sponsors" />
                  }
            />
        </div>
       
    )

};


    
{/* <Button 
          border="none" color={'#FFCC38'} height={'3.5rem'} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } width={'19.5rem'} children="subscribe" backgroundColor={'#43454A'}
          /> */}    