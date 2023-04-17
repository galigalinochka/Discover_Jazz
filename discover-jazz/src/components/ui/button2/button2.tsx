import React, { FC, useState } from 'react';
import { ButtonProps } from '../../../types/types';

interface InputFieldProps extends ButtonProps {
  onSubmit: (value: string) => void;
  placeholder?: string;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: any;

}

const InputField: FC<InputFieldProps> = ({
  onSubmit,
  border,
  color,
  height,
  width,
  backgroundColor,
  placeholder,
  fontSize,
  fontWeight,
  textTransform,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div style={{ border, color, height, width, backgroundColor }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        style={{
          height: '3.1rem',
          width: '98.5%',
          fontSize: fontSize || 'inherit',
          fontWeight: fontWeight || 'inherit',
          textTransform: textTransform || 'inherit',

        }}
      />
    </div>
  );
};

export default InputField;

