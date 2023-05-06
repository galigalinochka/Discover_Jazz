import React, { useState, useEffect, useCallback, FC } from 'react';
import { isNil } from 'lodash';
import * as artistsAPI from '../../api/artists';
import styles from './artistGrid.module.css';
import { StyledArtistGrid } from '../artistGrid/artistGrid.styles'
import ArtistElement from '../artistGrid/ArtistElement'
import { IArtist, ISelectOption } from "../../../src/types/types";
import axios from 'axios';

export interface IArtistsProps {
  artistsList: IArtist[];
  /*selectedDate: ISelectOption;*/
}

const Artists: FC<IArtistsProps> = () => {
  const [artists, setArtists] = useState<IArtist[]>([]);

  useEffect(() => {
    axios.get("https://64412ad7792fe886a8a0319a.mockapi.io/artists").then((response) => {
      setArtists(response.data);
      console.log(response.data);
    });
  }, []);

  /*const fetchArtistsBySorting = useCallback((selectedOption: ISelectOption)=> {
    artistsAPI
    .fetchArtists(selectedOption)
    .then(response => {
      console.log('response', response);
      setArtists(response);
      //setIsSelectOpened(false);
    })
    .catch(error => {
      console.log('error', error);
      //setIsSelectOpened(false);
    })
  }, [])

  useEffect(() => {
    fetchArtistsBySorting(selectedDate);
  }, [])*/

  return (
    <StyledArtistGrid>
      {!isNil(artists) && 
      
      artists.map(artist => {
        return (
          <ArtistElement artist = {artist}         
            /*name={artist.name}
            big={artist.name === 'Gregory Porter' || artist.name === 'Esperanza Spalding'}
            photo={artist.photo}
            id={artist.id}
            key={artist.id}*/
          />
        );
      })}
    </StyledArtistGrid>  
  );  
};

export default Artists;
 


