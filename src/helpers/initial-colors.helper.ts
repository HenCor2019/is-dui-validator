import { DuiColorsType } from '../components/Input/Input.types';
import {
  DEFAULT_BORDER_COLOR,
  DEFAULT_MESSAGE_COLOR,

  INVALID_BORDER_COLOR,
  INVALID_MESSAGE_COLOR,

  VALID_BORDER_COLOR,
  VALID_MESSAGE_COLOR,
} from '../constants';

export function getColors(isValid: boolean, currentMessage: string): DuiColorsType {
  if (!currentMessage) {
    return {
      border: DEFAULT_BORDER_COLOR,
      message: DEFAULT_MESSAGE_COLOR,
    };
  }

  if (!isValid) {
    return {
      border: INVALID_BORDER_COLOR,
      message: INVALID_MESSAGE_COLOR,
    };
  }

  return {
    border: VALID_BORDER_COLOR,
    message: VALID_MESSAGE_COLOR,
  };
}
