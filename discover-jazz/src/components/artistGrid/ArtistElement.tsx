import React from 'react';
import { useState } from 'react';
import { ArtistHoverMenu } from './ArtistHoverMenu';
import { StyledArtistElementBig, StyledArtistElementSmall } from '../artistGrid/artistGrid.styles';

type Props = {
  name: string;
  big: boolean;
  photo: string;
  id: number;
}

const ArtistElement = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  
  const StyledArtistElement = props.big ? StyledArtistElementBig : StyledArtistElementSmall;

  const styleImg = {
    backgroundImage: `url(${props.photo}`,
    backgroundSize: 'cover'
  };

  const gridElementPostion = {
    'grid-area': `${props.id}`
  };

  return (
    <StyledArtistElement style={{...styleImg, ...gridElementPostion}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>{props.name}</div>
      {isHovered && <ArtistHoverMenu name={props.name} big={props.big} />}
    </StyledArtistElement>
  );
};

export default ArtistElement;

