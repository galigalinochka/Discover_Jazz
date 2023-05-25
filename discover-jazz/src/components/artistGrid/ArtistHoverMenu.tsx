import React, { FC } from 'react';
import Button from '../ui/button1/button1';
import {
    StyledHoverMenuBig,
    StyledHoverMenuSmall,
} from '../artistGrid/artistGrid.styles'
import PointIcon from '../../assets/data/artistElementUi/PointIcon.jpg'
import {IArtist} from '../../types/types';

export interface IArtistHoveredProps {
  artistHovered: IArtist;
}

export const ArtistHoverMenu: FC<IArtistHoveredProps> = ({artistHovered}) => {

  const StyledHoverMenu = artistHovered.big ? StyledHoverMenuBig : StyledHoverMenuSmall;

  return (
    <StyledHoverMenu>
      
      <div>
        <h1>{artistHovered.stage}</h1>      
        <h2>DATE: {artistHovered.date}</h2>
        <h2>TIME: {artistHovered.time}</h2>
        <p>MORE ABOUT ARTIST</p>
      </div>     
      <h3>       
          <span>
            <img src={PointIcon} alt="PointIcon" />
            WATCH INTERVIEW
          </span>  
      </h3>
      <Button
         border="none"
              color={'#1A18CA'}
              height={'3.9rem'}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              width={'22.5rem'}
              backgroundColor={'#BEC5FF'}
              gridArea={'c'}
              margin={'0 auto'}
            >
              <strong style={{fontWeight: 'bold'}}>BUY TICKET</strong>
      </Button>           
    </StyledHoverMenu>
  );
};
