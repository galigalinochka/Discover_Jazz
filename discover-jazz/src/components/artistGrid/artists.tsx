import React, {FC} from 'react';
import styles from './artistGrid.module.css';
import ArtistsGrid from './artists/artistsGrid';


const Artists: FC = () => {
  return (
    <div className = {styles.container}>
      {/*<ArtistsGrid />*/}
    </div>
  );
};

export default Artists;