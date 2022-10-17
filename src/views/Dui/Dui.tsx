import React, { useEffect, useState } from 'react';

import { isValidDui } from '../../helpers';
import { Input } from '../../components/Input';

export function Dui(): JSX.Element {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!value) {
      setIsValid(false);
      setMessage('');
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
    if (!inputToValidate) {
      setIsValid(false);
      setMessage('');
      return;
    }

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
