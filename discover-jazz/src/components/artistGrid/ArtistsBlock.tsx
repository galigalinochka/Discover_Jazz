import React, { useState, FC }from 'react';
import { IArtist } from '../../types/types';
import Artists from './ArtistGrid';

const ArtistsBlock: FC = () => {
  const [artists, setArtists] = useState<IArtist[]>([])
  return (
    <div>
      <Artists artists={artists}/>
    </div>
  );
};

export default ArtistsBlock;