import { ConverterDto } from '@/types/dto';

export interface ConverterCheckProps {
  data: ConverterDto;
}

export interface CheckField<T> {
  label: string;
  transformData: (data: T) => unknown;
}
