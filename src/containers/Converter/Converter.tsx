import { ConverterForm } from './components';
import { ConverterDto } from './Converter.interface';

export const Converter = () => {
  const handleFormSubmit = (data: ConverterDto) => {
    console.log(data);
  };

  return <ConverterForm onFormSubmit={handleFormSubmit} />;
};
