import React from 'react';
import styles from './artistGrid.module.css';
import { StyledArtistGrid } from '../artistGrid/artistGrid.styles'
import ArtistElement from '../artistGrid/ArtistElement'
import data from '../../data/artists';
import { IArtist } from "../../../src/types/types"

const Artists = () => {
  return (
    <StyledArtistGrid>
      {data.map(artist => {
        // console.log(artist.id);
        // console.log(artist.photo);
        return (
          <ArtistElement          
            name={artist.name}
            big={artist.name === 'Gregory Porter' || artist.name === 'Esperanza Spalding'}
            photo={artist.photo}
            id={artist.id}
          />
        );
      })}
    </StyledArtistGrid>
    
  );  
};

export default Artists;
 


