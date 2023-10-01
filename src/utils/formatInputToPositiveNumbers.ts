import { ChangeEvent } from 'react';

export const formatInputToPositiveNumbers = (event: ChangeEvent<HTMLInputElement>) => {
  return +event.target.value.replace(/\D/g, '');
};
