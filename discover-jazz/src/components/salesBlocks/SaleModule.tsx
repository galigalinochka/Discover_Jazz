import React from 'react';
import styles from './salesBlocks.module.css';
import Button from '../ui/button1/button1';
import InputField from '../ui/button2/button2'
import { SalesBlock } from './SalesBlock'
import {  
  StyledSubheadingParagraph,
  StyledSubheadingStayAptoDate,
  StyledSubheadingParagraphStayAptoDate,
  StyledPriceElement,
  StyledPriceElementLeft,
  StyledPriceElementRight
} from './salesBlock.styles'
import Sponsors from '../../assets/sponsors.svg'

type Props = {};

export const SaleModule = (props:Props) => {
  return (
    <section>
      <SalesBlock 
        heading='tickets'
        height='25rem'
        color='#8B97FF'
        price={
          <>
            <StyledPriceElement>
              <StyledPriceElementLeft>
                all days
              </StyledPriceElementLeft>
              <StyledPriceElementRight>
                150$
              </StyledPriceElementRight>
            </StyledPriceElement>
        
            <StyledPriceElement>
              <StyledPriceElementLeft>
                2 days 
              </StyledPriceElementLeft>
              <StyledPriceElementRight>
                100$
              </StyledPriceElementRight>
            </StyledPriceElement>
        
            <StyledPriceElement>
              <StyledPriceElementLeft>
                1 day 
              </StyledPriceElementLeft>
              <StyledPriceElementRight>
                70$
              </StyledPriceElementRight>
            </StyledPriceElement>
          </>
        }
        actionButton1 = {
          <Button
              border="none"
              color={'#FFCC38'}
              height={'3.5rem'}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              width={'19.5rem'}
              backgroundColor={'#43454A'}
              
            >
              <strong style={{fontWeight: 'bold'}}>go to the ticket store</strong>
            </Button>

        }        

      />

      <SalesBlock 
        heading='subscribe'
        height='29.5rem'
        color='#BEC5FF'
        subheading={
          <>
          <StyledSubheadingStayAptoDate>
            stay up to date
          </StyledSubheadingStayAptoDate>

          <StyledSubheadingParagraphStayAptoDate>
            Would you like to recieve up-to-date information about the festival?
          </StyledSubheadingParagraphStayAptoDate>
          
          <StyledSubheadingParagraphStayAptoDate>
            Sign up for our newsletters!
          </StyledSubheadingParagraphStayAptoDate>
          
          </>
        }
        actionButton2={
          
          <InputField
            onSubmit={function (): void {
              throw new Error('Function not implemented.');
            }}
            border="none"
            color={'#FFCC38'}
            height={'3.5rem'}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
            width={'33rem'}
            backgroundColor={'#43454A'}
            placeholder='your e-mail'
            fontSize='2rem'
            fontWeight='700'
            textTransform={'uppercase'}
          >        
          </InputField>
        } 
        actionButton1 = {
          <Button
              border="none"
              color={'#FFCC38'}
              height={'3.5rem'}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              width={'19.5rem'}
              backgroundColor={'#43454A'}
            >
              <strong style={{fontWeight: 'bold'}}>Subscribe</strong>
            </Button>

        }        
      
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
        actionButton1={
          
            <Button
              border="none"
              color={'#FFCC38'}
              height={'3.5rem'}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              width={'19.5rem'}
              backgroundColor={'#43454A'}
            >
              <strong style={{fontWeight: 'bold'}}>Line-up</strong>
            </Button>
          
        }
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



