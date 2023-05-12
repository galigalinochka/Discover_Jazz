import React, { useState, useEffect, useCallback, FC } from 'react';
import { isNil } from 'lodash';
import { StyledArtistGrid } from '../artistGrid/artistGrid.styles'
import ArtistElement from '../artistGrid/ArtistElement'
import { IArtist, ISelectOption } from "../../../src/types/types";
import axios from 'axios';

export interface IArtistsProps {
  artists: IArtist[];
  //selectedOption: ISelectOption;
}

const Artists: FC<IArtistsProps> = ({ artists }) => {
  /*const [filteredArtists, setFilteredArtists] = useState<IArtist[]>([]);
  //console.log(selectedOption.value);
    useEffect(() => {
      if (selectedOption.value === 'ALL') {
        setFilteredArtists(artists);
      } else {
        const filtered = artists.filter(artist => artist.style === selectedOption.value);
        setFilteredArtists(filtered);
      }
    }, [selectedOption, artists]);

  useEffect(() => {
    axios.get("https://64412ad7792fe886a8a0319a.mockapi.io/artists").then((response) => {
      setFilteredArtists(response.data);
    });
  }, []);*/

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
