import React, { useState, FC } from 'react';
import Select from '../ui/select/select';
import { ISelectOption } from '../../types/types';
import styles from './mainCard.module.css';
import { SingleValue } from 'react-select';

const SelectBlock: FC = () => {
  const MAIN_STAGE = 'MAIN STAGE';
  const SECOND_STAGE = '2nd STAGE';
  const options: ISelectOption[] = [
    {value: 'MAIN_STAGE', label: MAIN_STAGE },
    {value: 'SECOND_STAGE', label: SECOND_STAGE}
  ];
  const[selectedOption, setSelectedOption] = useState<ISelectOption>({
    value: 'ALL', label: 'ALL'
  });
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const handleBlur = () => {
    setIsSelectOpened(false);
  }

  const handleFocus = () => {
    setIsSelectOpened(true);
  }

  const handleChange = (selectedOption: SingleValue<ISelectOption>) => {
    if(selectedOption === null) return;
    setSelectedOption(selectedOption)
  }

  return (
    <div className = {styles.selectBlock}>
      <span className={styles.filtersHeader}>Filters</span>
      <div className={styles.filtersStage}>
        <span className={styles.filtersName}>STAGE</span>
        <Select className = {isSelectOpened ? styles.select : styles.selectActive}
                options = {options}
                value = {selectedOption}
                onBlur = {handleBlur}
                onFocus = {handleFocus}
                onChange={handleChange}
      />
      </div>
    </div>
  );
};

export default SelectBlock;