import React from 'react';

import { getColors } from '../../helpers';
import { DuitInputType } from './Input.types';

export function Input({
  validateDuiInput, value, onInputChange, isValid, message,
}: DuitInputType) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateDuiInput(value);
  };

  const {
    border: borderColor,
    message: messageColor,
  } = getColors(isValid, message);

  return (
    <div className="relative bg-slate-300 w-full min-h-screen flex items-center justify-center flex-col">
      <div className="w-full max-w-lg text-center flex flex-col gap-16">
        <h1 className="text-5xl font-bold">¿Mi DUI es valido?</h1>
        <form
          className="flex flex-col gap-5 items-center"
          onSubmit={onSubmit}
        >
          <div className="w-full mb-2">
            <input
              data-testid="dui-input"
              placeholder="00000000-0"
              className={`rounded p-2 w-full outline-none border-2 ${borderColor}`}
              value={value}
              onChange={onInputChange}
            />
            <p className={`text-start ${messageColor} pt-2 text-sm`}>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
