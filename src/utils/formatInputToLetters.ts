import { ChangeEvent } from 'react';

export const formatInputToLetters = (event: ChangeEvent<HTMLInputElement>) => {
  return event.target.value.replace(/[^a-z]/gi, '');
};
