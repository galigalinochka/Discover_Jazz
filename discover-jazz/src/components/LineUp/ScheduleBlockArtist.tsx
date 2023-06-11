import React, {useState, useEffect, FC} from 'react';
import styles from './LineUp.module.css';
import { IArtist } from '../../types/types';

export interface IArtistProps {
  artist: IArtist;
}

const ScheduleBlockArtist: FC<IArtistProps> = ({artist}) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = artist.photo;
    img.style.width = '136px';
    img.style.height = '136px';
    img.onload = () => {
      setImage(artist.photo);
    };
  }, [artist.photo]);

  const styleImg = image ? { background: `url(${artist.photo})`, backgroundSize: 'cover' } : {};

  return (
    <div className = {styles.scheduleBlockArtistContainer}>
      <span className = {styles.scheduleTime}>{artist.time}</span>
      <div style={styleImg}></div>
      <div className = {styles.scheduleBlockArtistDetails}>
        <p className = {styles.scheduleBlockArtistName}><span className = {styles.scheduleBlockArtistCountry}>{artist.country}</span>{artist.name}</p>
        <p className = {styles.scheduleBlockArtistMore}>more about artist</p>
        <p className = {styles.scheduleBlockArtistStage}>{artist.stage}</p>
      </div>  
    </div>
  );
};

export default ScheduleBlockArtist;
