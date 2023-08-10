import React, { useState, useEffect, useCallback, FC } from 'react';
import {Select, SelectStyles} from '../ui/select/select';
import { Filter, IFilters, ISelectOption } from '../../types/types';
import styles from './mainCard.module.css';
import { SingleValue } from 'react-select';

const SelectBlock/*: FC<{ value: IFilters, onFilterChange: (filters: IFilters) => void }>*/= ({ value, onFilterChange })=> {
 
  const optionsStage/*: ISelectOption[]*/ = [
    {value: 'ALL', label: 'ALL'},
    {value: 'MAIN STAGE', label: 'MAIN STAGE' },
    {value: '2nd STAGE', label: '2nd STAGE' }
  ];
  const optionsDate/*: ISelectOption[]*/ = [
    {value: 'ALL', label: 'ALL'},
    {value: '20 MAY', label: '20 MAY' },
    {value: '21 MAY', label: '21 MAY' },
    {value: '27 MAY', label: '27 MAY' },
    {value: '28 MAY', label: '28 MAY' },
  ];
  const optionsSort/*: ISelectOption[]*/ = [
    {value: 'ALL', label: 'ALL'},
    {value: 'JAZZ', label: 'JAZZ' },
    {value: 'FOLK', label: 'FOLK' },
    {value: 'POP', label: 'POP' }, 
  ];

  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const handleBlur = () => {
    setIsSelectOpened(false);
  }

  const handleFocus = () => {
    setIsSelectOpened(true);
  }

  const handleFilterChange = (fieldName, newFilters) => {
    const updatedFilters = { ...value, [fieldName]: newFilters };
    onFilterChange(updatedFilters);
  }
  
  return (
  <div className = {styles.selectBlock}>
    <span className={styles.filtersHeader}>Filters</span>
    <div className={styles.filters}>
      <span className={styles.filtersName}>DATE</span>
        <Select className = {isSelectOpened ? styles.select : styles.selectActive}
                styles = {SelectStyles}
                options = {optionsDate}
                value = {value.date}
                onBlur = {handleBlur}
                onFocus = {handleFocus}
                onChange={(selectedOption) => handleFilterChange('date', selectedOption)}
        />
    </div>
    <div className={styles.filters}>
      <span className={styles.filtersName}>STAGE</span>
        <Select className = {isSelectOpened ? styles.select : styles.selectActive}
                styles = {SelectStyles}
                options = {optionsStage}
                value = {value.stage}
                onBlur = {handleBlur}
                onFocus = {handleFocus}
                onChange={(selectedOption) => handleFilterChange('stage', selectedOption)}
        />
    </div>
    <div className={styles.filters}>
      <span className={styles.filtersName}>SORT</span>
        <Select className = {isSelectOpened ? styles.select : styles.selectActive}
                styles = {SelectStyles}
                options = {optionsSort}
                value = {value.sort}
                onBlur = {handleBlur}
                onFocus = {handleFocus}
                onChange={(selectedOption) => handleFilterChange('sort', selectedOption)}
        />
    </div>
    </div>
  );
};

export default SelectBlock;
