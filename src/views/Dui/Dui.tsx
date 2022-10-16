import React, { useEffect, useState } from 'react';

import { isValidDui } from '../../helpers';
import { Input } from '../../components/Input';

export function Dui() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!value) {
      return;
    }

    if (!isValidDui(value)) {
      setIsValid(false);
      setMessage('Dui invalido');
      return;
    }

    setIsValid(true);
    setMessage('Este es un dui valido');
  }, [value]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
  };

  const onSubmit = (inputToValidate: string) => {
    if (!isValidDui(inputToValidate)) {
      setIsValid(false);
      setMessage('Dui invalido');
      return;
    }

    setIsValid(true);
    setMessage('Este es un dui valido');
  };

  return (
    <Input
      value={value}
      onInputChange={onInputChange}
      validateDuiInput={onSubmit}
      message={message}
      isValid={isValid}
    />
  );
}
