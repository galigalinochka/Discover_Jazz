import React from 'react';
import styles from './artistGrid.module.css';
import { StyledArtistGrid } from '../artistGrid/artistGrid.styles'
import ArtistElement from '../artistGrid/ArtistElement'

const artistGrid = () => {
  return (
    <StyledArtistGrid>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={false}
          img={'img'}
          gridPosition={'1'}
        />
      </div>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={false}
          img={'img'}
          gridPosition={'2'}
        />
      </div>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={true}
          img={'img'}
          gridPosition={'3'}
        />
      </div>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={true}
          img={'img'}
          gridPosition={'4'}
        />
      </div>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={false}
          img={'img'}
          gridPosition={'5'}
        />
      </div>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={false}
          img={'img'}
          gridPosition={'6'}
        />
      </div>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={false}
          img={'img'}
          gridPosition={'7'}
        />
      </div>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={false}
          img={'img'}
          gridPosition={'8'}
        />
      </div>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={false}
          img={'img'}
          gridPosition={'9'}
        />
      </div>
      <div>
        <ArtistElement 
          NameOfArtist={'1'}
          big={false}
          img={'img'}
          gridPosition={'10'}
        />
      </div>
      
      
    </StyledArtistGrid>  
  );
};

export default artistGrid;