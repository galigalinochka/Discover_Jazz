import React, { useState, useEffect, FC } from 'react';
import { ArtistHoverMenu } from './ArtistHoverMenu';
import { StyledArtistElementBig, StyledArtistElementSmall } from '../artistGrid/artistGrid.styles';
import { IArtist } from '../../types/types';

export interface IArtistProps {
  artist: IArtist;
}

const ArtistElement: FC<IArtistProps> = ({artist}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = artist.photo;
    img.onload = () => {
      setImage(artist.photo);
    };
  }, [artist.photo]);
 
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styleImg = image ? { background: `url(${artist.photo})`, backgroundSize: 'cover' } : {};

  const StyledArtistElement = artist.big ? StyledArtistElementBig : StyledArtistElementSmall;

  return (
    <StyledArtistElement style={styleImg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h4>{artist.name}</h4>
      
      {isHovered && <ArtistHoverMenu artistHovered={artist} />}
    </StyledArtistElement>
  );
};

export default ArtistElement;
