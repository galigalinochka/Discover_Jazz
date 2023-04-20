import React from 'react';
import { useState } from 'react';
import { ArtistHoverMenu } from './ArtistHoverMenu';
import { StyledArtistElementBig, StyledArtistElementSmall } from '../artistGrid/artistGrid.styles';

type Props = {
  NameOfArtist: string;
  big: boolean;
  img: any;
  gridPosition: string;
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
    backgroundImage: `url(${props.img})`,
    backgroundSize: 'cover'
  };

  const gridElementPostion = {
    'grid-area': `${props.gridPosition}`
  };

  return (
    <StyledArtistElement style={{...styleImg, ...gridElementPostion}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>{props.NameOfArtist}</div>
      {isHovered && <ArtistHoverMenu NameOfArtist={props.NameOfArtist} big={props.big} />}
    </StyledArtistElement>
  );
};

export default ArtistElement;

