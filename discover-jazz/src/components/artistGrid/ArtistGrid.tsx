import React, { useState, useEffect, useCallback, FC } from 'react';
import { isNil } from 'lodash';
import { StyledArtistGrid } from '../artistGrid/artistGrid.styles'
import ArtistElement from '../artistGrid/ArtistElement'
import { IArtist, ISelectOption } from "../../../src/types/types";

export interface IArtistsProps {
  artists: IArtist[];
  //selectedOption: ISelectOption;
}

const Artists: FC<IArtistsProps> = ({ artists }) => {

  return (
    <StyledArtistGrid>
      {!isNil(artists) && 
      
      artists.map(artist => {
        return (
          <ArtistElement key = { artist.id} artist = {artist}
          />
        );
      })}
    </StyledArtistGrid>  
  );  
};

export default Artists;
