import React from 'react';

import { render } from '@testing-library/react';
import {
  vi, describe, it, expect,
} from 'vitest';
import { Input } from './Input';

const MOCK_CHANGE = () => { };
const MOCK_SUBMIT = () => { };
const MOCK_MESSAGE = '';
const MOCK_VALID = false;
const MOCK_VALUE = '';

describe('Input', () => {
  it('should render component without console error', () => {
    const spy = vi.spyOn(globalThis.console, 'error');

    render(
      <Input
        message={MOCK_MESSAGE}
        isValid={MOCK_VALID}
        onInputChange={MOCK_CHANGE}
        value={MOCK_VALUE}
        validateDuiInput={MOCK_SUBMIT}
      />,
    );

    expect(spy).not.toHaveBeenCalled();
  });

  it('should have title "Mi DUI es valido?"', () => {
    const { getByText } = render(
      <Input
        message={MOCK_MESSAGE}
        isValid={MOCK_VALID}
        onInputChange={MOCK_CHANGE}
        value={MOCK_VALUE}
        validateDuiInput={MOCK_SUBMIT}
      />,
    );
    expect(getByText('¿Mi DUI es valido?')).toHaveTextContent('¿Mi DUI es valido?');
  });

  it('should have an input text', () => {
    const { getByTestId } = render(
      <Input
        message={MOCK_MESSAGE}
        isValid={MOCK_VALID}
        onInputChange={MOCK_CHANGE}
        value={MOCK_VALUE}
        validateDuiInput={MOCK_SUBMIT}
      />,
    );
    expect(getByTestId('dui-input')).toBeInTheDocument();
  });
});
