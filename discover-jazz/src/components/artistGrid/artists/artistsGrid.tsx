import React, {FC} from 'react';
import styles from '../artistGrid.module.css';
import artists from '../../../data/artists';
import Artist from './Artist';
import { IArtist } from '../../../types/types';

const ArtistsGrid: FC<IArtist[]> = () => {
  return (
    <div>
      Блок артистов
    </div>
  )
  /*let artistsElements: IArtist[] =artists.map(artist => 
    <Artist id= {}
    name={}
    stage={}
    date={}
    time={}
    artistInfo={}
    linkVideo={}
    linkTicketBuy={}
    photo={})
  return (
    <div className = {styles.artistsContainer}>
      
    </div>
  );*/
};

export default ArtistsGrid;