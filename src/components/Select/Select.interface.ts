import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: number | string;
  name: string;
}

export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
}
