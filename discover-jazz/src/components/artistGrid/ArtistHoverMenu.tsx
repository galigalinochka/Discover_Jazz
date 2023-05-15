import React from 'react';
import Button from '../ui/button1/button1';
import {
    StyledHoverMenuBig,
    StyledHoverMenuSmall,
} from '../artistGrid/artistGrid.styles'
import PointIcon from '../../assets/data/artistElementUi/PointIcon.jpg'
 
type Props = {
  name: string;
  /*big: boolean;*/
}

export const ArtistHoverMenu = (props: Props) => {

    const StyledHoverMenu = /*props.big ? StyledHoverMenuBig : */StyledHoverMenuSmall;

  return (

    <StyledHoverMenu>
      <h1>MAIN STAGE</h1>      
      <h2>DATE: 27 MAY</h2>
      <h2>TIME: 18:00</h2>
        <h3>       
          <span>
            <img src={PointIcon} alt="PointIcon" />
            WATCH INTERVIEW
          </span>  
        </h3>
        
      <p>
        MORE ABOUT ARTIST          
      </p>
        <div>
          <Button
              border="none"
              color={'#1A18CA'}
              height={'3.5rem'}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              width={'19.5rem'}
              backgroundColor={'#BEC5FF'}
              
            >
              <strong style={{fontWeight: 'bold'}}>BUY TICKET</strong>
          </Button>
        </div>            
    </StyledHoverMenu>

  );
};
