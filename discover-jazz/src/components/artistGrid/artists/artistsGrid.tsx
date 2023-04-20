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
};

export default ArtistsGrid;