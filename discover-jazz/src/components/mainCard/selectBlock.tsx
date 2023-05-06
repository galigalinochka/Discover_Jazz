import React, { useState, useEffect, useCallback, FC } from 'react';
import {Select, SelectStyles} from '../ui/select/select';
import { IArtist, ISelectOption } from '../../types/types';
import styles from './mainCard.module.css';
import { SingleValue } from 'react-select';
import * as artistsAPI from '../../api/artists';
import { error } from 'console';
import Artists from '../artistGrid/ArtistGrid';

const SelectBlock: FC = () => {
  const MAIN_STAGE = 'MAIN STAGE';
  const SECOND_STAGE = '2nd STAGE';
  const optionsStage: ISelectOption[] = [
    {value: 'MAIN_STAGE', label: MAIN_STAGE },
    {value: 'SECOND_STAGE', label: SECOND_STAGE}
  ];
  const optionsDate: ISelectOption[] = [
    {value: '20 MAY', label: '20 MAY' },
    {value: '21 MAY', label: '21 MAY' },
    {value: '27 MAY', label: '27 MAY' },
    {value: '28 MAY', label: '28 MAY' },
  ];
  const optionsSort: ISelectOption[] = [
    {value: 'POPULAR', label: 'POPULAR' },
    {value: 'FOLK', label: 'FOLK' },
    {value: 'POP', label: 'POP' },
  ];

  //const [artists, setArtists] = useState<IArtist[]>([])
  const[selectedDate, setSelectedDate] = useState<ISelectOption>({
    value: 'ALL', label: 'ALL'
  });
  const[selectedStage, setSelectedStage] = useState<ISelectOption>({
    value: 'ALL', label: 'ALL'
  });
  const[selectedSort, setSelectedSort] = useState<ISelectOption>({
    value: 'ALL', label: 'ALL'
  });

  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const[needRequestIndicator, setneedRequestIndicator] = useState(0);

  const requestArtists = useCallback(()=> {
    setneedRequestIndicator(needRequestIndicator + 1);
  }, [setneedRequestIndicator, needRequestIndicator]);

  const handleBlur = () => {
    setIsSelectOpened(false);
  }

  const handleFocus = () => {
    setIsSelectOpened(true);
  }

  const handleDateChange = (selectedOption: SingleValue<ISelectOption>) => {
    if(selectedOption === null) return;
    setSelectedDate(selectedOption);
    requestArtists();
  }

  const handleStageChange = (selectedOption: SingleValue<ISelectOption>) => {
    if(selectedOption === null) return;
    setSelectedStage(selectedOption);
    requestArtists();
  }

  const handleSortChange = (selectedOption: SingleValue<ISelectOption>) => {
    if(selectedOption === null) return;
    setSelectedSort(selectedOption);
    requestArtists();
  }

  /*const fetchArtistsBySorting = useCallback((selectedOption: ISelectOption)=> {
    artistsAPI
    .fetchArtists(selectedOption)
    .then(response => {
      console.log('response', response);
      setArtists(response);
      setIsSelectOpened(false);
    })
    .catch(error => {
      console.log('error', error);
      setIsSelectOpened(false);
    })
  }, [])

  useEffect(() => {
    fetchArtistsBySorting(selectedDate);
  }, [])*/

  return (
  <div className = {styles.selectBlock}>
    <span className={styles.filtersHeader}>Filters</span>
    <div className={styles.filters}>
      <span className={styles.filtersName}>DATE</span>
        <Select className = {isSelectOpened ? styles.select : styles.selectActive}
                styles = {SelectStyles}
                options = {optionsDate}
                value = {selectedDate}
                onBlur = {handleBlur}
                onFocus = {handleFocus}
                onChange={handleDateChange}
        />
    </div>
    <div className={styles.filters}>
      <span className={styles.filtersName}>STAGE</span>
        <Select className = {isSelectOpened ? styles.select : styles.selectActive}
                styles = {SelectStyles}
                options = {optionsStage}
                value = {selectedStage}
                onBlur = {handleBlur}
                onFocus = {handleFocus}
                onChange={handleStageChange}
        />
    </div>
    <div className={styles.filters}>
      <span className={styles.filtersName}>SORT</span>
        <Select className = {isSelectOpened ? styles.select : styles.selectActive}
                styles = {SelectStyles}
                options = {optionsSort}
                value = {selectedSort}
                onBlur = {handleBlur}
                onFocus = {handleFocus}
                onChange={handleSortChange}
        />
    </div>
    </div>
  );
};

export default SelectBlock;