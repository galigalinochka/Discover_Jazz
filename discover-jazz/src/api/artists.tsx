import axios from 'axios';
import { IArtist, ISelectOption } from '../types/types';

export const fetchArtists = async(selectedOption: ISelectOption): Promise<IArtist[]> => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }
  const response = await axios.get<IArtist[]>(
    `https://64412ad7792fe886a8a0319a.mockapi.io/artists/?ordering = ${selectedOption.value}`, config
  );
  return response.data;
}
