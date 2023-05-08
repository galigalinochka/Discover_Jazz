import { useState, createContext, useContext } from "react";
import styles from './artistGrid.module.css';
import { StyledArtistGrid } from '../artistGrid/artistGrid.styles'
import ArtistElement from '../artistGrid/ArtistElement'
import data from '../../data/artists';
import { IArtist } from "../../../src/types/types"
import {FilteredDataResult} from '../../components/mainCard/selectBlock'


const Artists = () => {

  const filteredData = useContext(FilteredDataResult);

  // console.log(filteredData);
  
  return (
    <StyledArtistGrid>
      {filteredData.map((artist: IArtist) => {
        // console.log(artist.id);
        // console.log(artist.photo);
        return (
          <ArtistElement          
            name={artist.name}
            big={artist.name === 'Gregory Porter' || artist.name === 'Esperanza Spalding'}
            photo={artist.photo}
            id={artist.id}
          />
        );
      })}
    </StyledArtistGrid>
    
  );  
};

export default Artists;




// const Artists = () => {

//   const filteredData = useContext(FilteredDataResult);

//   return (
//     <StyledArtistGrid>
//       {filteredData.map(artist => {
//         // console.log(artist.id);
//         // console.log(artist.photo);
//         return (
//           <ArtistElement          
//             name={artist.name}
//             big={artist.name === 'Gregory Porter' || artist.name === 'Esperanza Spalding'}
//             photo={artist.photo}
//             id={artist.id}
//           />
//         );
//       })}
//     </StyledArtistGrid>
    
//   );  
// };

// export default Artists;
 


