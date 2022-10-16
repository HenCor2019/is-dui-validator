import { describe, expect, it } from 'vitest';
import { getColors } from './initial-colors.helper';

describe('getColors', () => {
  it('Should include "blue" if current message is empty', () => {
    const response = getColors(false, '');

    expect(response.border).include('blue');
    expect(response.message).include('blue');
  });
  it('Should include "red" if isValid is false', () => {
    const response = getColors(false, 'mock message');

    expect(response.border).include('red');
    expect(response.message).include('red');
  });
  it('Should include "green" if isValid is true', () => {
    const response = getColors(true, 'mock message');

    expect(response.border).include('green');
    expect(response.message).include('green');
  });
});
