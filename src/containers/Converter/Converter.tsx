import { ConverterDto } from '@/types/dto';

import { ConverterForm } from './components';

export const Converter = () => {
  const handleFormSubmit = (data: ConverterDto) => {
    console.log(data);
  };

  return <ConverterForm onFormSubmit={handleFormSubmit} />;
};
