import React, { FC, useState } from 'react';
import {
    StyledHoverMenuBig,
    StyledHoverMenuSmall,
    Button
} from '../artistGrid/artistGrid.styles'
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
            WATCH INTERVIEW
          </span>  
      </h3>
      <Button
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      >
        <strong style={{fontWeight: 'bold'}}>BUY TICKET</strong>
      </Button>           
    </StyledHoverMenu>
  );
};
