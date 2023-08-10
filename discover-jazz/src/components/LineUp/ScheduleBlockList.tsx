import React, {FC, useEffect, useState } from 'react';
import ScheduleBlockArtist from './ScheduleBlockArtist';
import { isNil } from 'lodash';
import { IArtist } from '../../types/types';
//import dates from './ScheduleBlock';
import { fetchArtists } from '../../api/artists';

export interface IScheduleBlockList {
  artists: IArtist[];
  date: string;
}
const ScheduleBlockList:FC<IScheduleBlockList> = ({artists, date}) => {
  const selectedOption = {
    value: 'ALL',
    label: 'ALL'
  }
  const [artistsList, setArtistsList] = useState<IArtist[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const artistsList = await fetchArtists(selectedOption);
      setArtistsList(artistsList);
    };
    fetchData();
  }, []);

{/*return (
  <>
  ScheduleList{date}
  </>
)*/}

  return (
    <>
    {!isNil(artistsList) && 
      
      artistsList.map(artist => {
         if(date.trim() === artist.date?.trim()) {
          return(
              <ScheduleBlockArtist key={artist.id} artist = {artist} />
          )
        } else return ;
      })
    }
    </>
    )
    }
    

        {/*return (
          <ScheduleBlockArtist key = {artist.id} artist = {artist}
          />
        );
      })}
    </>
    );
};
if(date === artist.date) {
          return(
            <div key={artist.id}>
              {artist.date}
            </div>
          ) 
        } else {
          return null;
        }*/}

export default ScheduleBlockList;