import { useState } from 'react';

import { ConverterDto } from '@/types/dto';

import { ConverterCheck, ConverterForm } from './components';
import * as Styled from './Converter.styled';

export const Converter = () => {
  const [checkInformation, setCheckInformation] = useState<ConverterDto | null>(null);

  const handleFormSubmit = (data: ConverterDto) => {
    setCheckInformation(data);
  };

  return (
    <Styled.Container>
      <ConverterForm onFormSubmit={handleFormSubmit} />
      {checkInformation && <ConverterCheck data={checkInformation} />}
    </Styled.Container>
  );
};
