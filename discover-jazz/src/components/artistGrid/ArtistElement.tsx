import React, { useState, useEffect, FC } from 'react';
import { ArtistHoverMenu } from './ArtistHoverMenu';
import { StyledArtistElementBig, StyledArtistElementSmall } from '../artistGrid/artistGrid.styles';
import { IArtist } from '../../types/types';

/*type Props = {
  name: string;
  big: boolean;
  photo: string;
  id: number;
}*/
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

  const StyledArtistElement = StyledArtistElementSmall; /*= artist.big ? StyledArtistElementBig : StyledArtistElementSmall;*/

  return (
    <StyledArtistElement style={styleImg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>{artist.name}</div>
      
      {isHovered && <ArtistHoverMenu name={artist.name} /*big={props.big}*/ />}
    </StyledArtistElement>
  );
};

export default ArtistElement;


// import React, { useState, useEffect, } from 'react';
// import { ArtistHoverMenu } from './ArtistHoverMenu';
// import { StyledArtistElementBig, StyledArtistElementSmall } from '../artistGrid/artistGrid.styles';

// type Props = {
//   name: string;
//   big: boolean;
//   photo: string;
//   id: number;
// }

// const ArtistElement = (props: Props) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [styleImg, setStyleImg] = useState({
//     backgroundImage: `url(${props.photo})`,
//     backgroundSize: 'cover'
//   });

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   useEffect(() => {
//     setStyleImg({
//       backgroundImage: `url(${props.photo})`,
//       backgroundSize: 'cover'
//     });
//   }, [props.photo]);

//   useEffect(() => {
//     document.title = props.name;
//   }, [props.name]);

//   console.log(styleImg)

//   const StyledArtistElement = props.big ? StyledArtistElementBig : StyledArtistElementSmall;

  


//   return (
//     <StyledArtistElement style={{...styleImg}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div>{props.name}</div>
//       {isHovered && <ArtistHoverMenu name={props.name} big={props.big} />}
//     </StyledArtistElement>
//   );
// };

// export default ArtistElement;
