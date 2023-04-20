import { IArtist } from "../types/types";
import data from '../data/artists';




export const getArtistInfo = (data:IArtist[]) => {


    return data.map((artist) => {
      return {
        id: artist.id,
        NameOfArtist: artist.name,
        stage: artist.stage,
        date: artist.date,
        time: artist.time,
        artistInfo: artist.artistInfo,
        linkVideo: artist.linkVideo,
        linkTicketBuy: artist.linkTicketBuy,
        photo: artist.photo,
      };
    });
  };
  
  const artistInfo = getArtistInfo(data);
  
  console.log(artistInfo);