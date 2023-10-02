import { ConverterDto } from '@/types/dto';

export interface ConverterFormProps {
  onFormSubmit: (data: ConverterDto) => void;
  handleCheckInformation: (data: ConverterDto | null) => void;
}
