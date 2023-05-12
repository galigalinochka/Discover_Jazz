import React, {FC, useState, useEffect, useRef } from 'react';
import styles from './mainCard.module.css';
import Logo from  '../../assets/Logo.png';
import Burger from  '../../assets/Burger.svg';
import DiscoverJazz from '../../assets/DiscoverJazz.svg';
import SelectBlock from './selectBlock';
import Artists from '../artistGrid/ArtistGrid';
import { IArtist, ISelectOption, IFilters } from '../../types/types';
import axios from 'axios';
import { SingleValue } from 'react-select';

const Main/*: FC*/ = () => {
  const [filteredArtists, setFilteredArtists] = useState/*<IArtist[]>*/([]); // стейт артистов
  const[selectedFilters, setSelectedFilters] = useState/*<IFilters>*/({
    date: {value: 'ALL', label: 'ALL'}, stage: {value: 'ALL', label: 'ALL'}, sort:  {value: 'ALL', label: 'ALL'}
  });// стейт селект блока
  const prevFilteredArtistsRef = useRef([]);

 useEffect(() => {
  const fetchArtists = async() => {
    const response = await axios.get(`https://64412ad7792fe886a8a0319a.mockapi.io/artists`)/*.then((response)=> {*/
      setFilteredArtists(response.data);
      prevFilteredArtistsRef.current = response.data;   
      console.log(prevFilteredArtistsRef.current);
    };
   
    fetchArtists();
  }, []);

  useEffect(() => {
    let filtered = [...prevFilteredArtistsRef.current];
    //let filtered = [...filteredArtists];
    console.log(filtered);
    if (selectedFilters.date.value !== 'ALL') {
      filtered = filtered.filter((artist) => artist.date === selectedFilters.date.value);
      
    }
    if (selectedFilters.stage.value !== 'ALL') {
      filtered = filtered.filter((artist) => artist.stage === selectedFilters.stage.value);
    }
    if (selectedFilters.sort.value !== 'ALL') {
      filtered = filtered.filter((artist) => artist.style.toLowerCase() === selectedFilters.sort.value.toLowerCase());
    }
     setFilteredArtists(filtered);
     
    filtered = prevFilteredArtistsRef.current 
     console.log(filtered);
  }, [selectedFilters])

  return (
    <>
      <div className = {styles.container}>
        <div className = {styles.gridContainer}>
          <div className = {styles.salesBlockHeader}>
            <img className = {styles.logo} src= {Logo} alt="logo" />
            <div className = {styles.salesBlockHeaderList}>
              <span>Artists</span>
              <span>Line-up</span>
              <img src={Burger} alt="burger" className = {styles.burger}/>
            </div>
          </div>
          <div className = {styles.salesBlockMain}>
            <img className = {styles.salesBlockMainLogo} src= {DiscoverJazz} alt="discover Jazz" />
            <div className = {styles.salesBlockToFestival}>to the festival <span>45</span> d  <span>17:56:43</span></div>
          </div>
          
          <div className = {styles.salesBlockMainInfo}>
            <div>
              <div className = {styles.MainInfoDate}>20-21_27-28 may</div>
              <div className = {styles.MainInfoPlace}>New york · manhattan</div>
            </div>
            <div className = {styles.MainInfoDots}>
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
          </div>
          </div>
          
        </div>
        <div className = {styles.salesBlockFooter}>
          <SelectBlock value={selectedFilters} onFilterChange = {(newFilters) => {
            setSelectedFilters({ ...selectedFilters, ...newFilters })
            console.log(selectedFilters, newFilters)}}/>
        </div>
        </div>
        <div>
          <Artists artists={filteredArtists}/*{prevFilteredArtistsRef.current}*/ />
        </div>
      </>
  );
};

export default Main;