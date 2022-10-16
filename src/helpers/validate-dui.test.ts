import { describe, expect, it } from 'vitest';
import { isValidDui } from './validate-dui.helper';

describe('isValidDui', () => {
  it('should return false if dui lenght !== 9', () => {
    expect(isValidDui('00000000')).toBe(false);
  });
  it('should return false on characters in dui', () => {
    expect(isValidDui('hola56789')).toBe(false);
  });
  it('should return false on invalid dui', () => {
    expect(isValidDui('123456789')).toBe(false);
  });
  it('should return true on valid dui', () => {
    expect(isValidDui('12345675-0')).toBe(true);
  });
});
