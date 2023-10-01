import { ConverterDto } from '../../Converter.interface';

export interface ConverterFormProps {
  onFormSubmit: (data: ConverterDto) => void;
}
