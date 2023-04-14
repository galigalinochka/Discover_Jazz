import React, { Children } from 'react';
import styles from './salesBlocks.module.css';
import Button from '../ui/button1/button1';
import { SalesBlock } from './SalesBlock'
import {
//   StyledSalesBlocks,
//   StyledContainerHeading,
//   StyledHeading,
//   StyledSubheading,
//   StyledPrice,
//   StyledUpToDate,
//   StyledInputWindow,
//   StyledActionButton,
//   StyledImage,
//   StyledImageContainer,
StyledSubheadingParagraph
}  from './salesBlock.styles'
// import { type } from 'os';
import Sponsors from '../../assets/sponsors.svg'

type Props = {};


export const SaleModule = (props:Props) => {
    return (


        <section>

          <SalesBlock 
            heading='tickets'
            height='25rem'
            color='#8B97FF'

          />

          <SalesBlock 
            heading='subscribe'
            height='29.5rem'
            color='#BEC5FF'
          />

          <SalesBlock 
            heading='info'
            subheading={
              <>
                <StyledSubheadingParagraph>
                  The Blue Note Jazz Festival is a celebration of the best in contemporary jazz music.
                  It is a two weeks long event that features some of the most talented and renowned jazz musicians from around the world.
                </StyledSubheadingParagraph>
                <StyledSubheadingParagraph>  
                  The Blue Note Jazz Festival was first held in 2011 in New York City. 
                  It was created by the Blue Note Jazz Club, which is one of the oldest and most prestigious jazz venues in the world. 
                </StyledSubheadingParagraph> 
                <StyledSubheadingParagraph>
                  The festival was designed to showcase the best jazz music from around the world and to bring together jazz enthusiasts from all over.
                </StyledSubheadingParagraph>
              </>
            }
            height='27.5rem'
            color='#8B97FF'
          />

          <SalesBlock             
            heading='sponsors'
            color="#BEC5FF"
            height="27.5rem"
            image={
                <img src={Sponsors} alt="Sponsors" />
              }
          />

        </section>

     );
    
    
};