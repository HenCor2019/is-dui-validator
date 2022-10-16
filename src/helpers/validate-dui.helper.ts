import { DUI_VALIDATOR_REGEX } from '../constants/validate-dui.constant';

export const isValidDui = (dui: string) => {
  const isValidSyntax = dui?.match(DUI_VALIDATOR_REGEX);
  if (!isValidSyntax) { return false; }

  const duiArr = dui.replace('-', '').split('').map(Number);
  const validator = duiArr.pop();

  const digitsTotal = duiArr
    .reduce((total, currentDigit, index) => currentDigit * (9 - index) + total, 0);

  const mod = digitsTotal % 10;
  if (mod === 0) return validator === 0;

  return validator === 10 - mod;
};
