import React, { useState, FC } from 'react';
import Select from '../ui/select/select';
import { ISelectOption } from '../../types/types';
import styles from './mainCard.module.css';

const SelectBlock: FC = () => {
  const MAIN_STAGE = 'MAIN STAGE';
  const SECOND_STAGE = '2nd STAGE';
  const options: ISelectOption[] = [
    {value: 'MAIN_STAGE', label: MAIN_STAGE },
    {value: 'SECOND_STAGE', label: SECOND_STAGE}
  ];
  const[selectedOption, setSelectedOption] = useState<ISelectOption>({
    value: 'MAIN_STAGE', label: MAIN_STAGE
  });
  const [isSelectOpened, setIsSelectOpened] = useState(false);

  return (
    <div className = {styles.selectBlock}>
      <span className="filtersHeader">Filters</span>
       {/* <Select className = {isSelectOpened ? styles.select : styles.selectActive}
      /> */}
    </div>
  );
};

export default SelectBlock;