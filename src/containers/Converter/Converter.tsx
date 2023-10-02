import { useCallback, useState } from 'react';

import { ConverterDto } from '@/types/dto';

import { ConverterCheck, ConverterForm } from './components';
import * as Styled from './Converter.styled';

export const Converter = () => {
  const [checkInformation, setCheckInformation] = useState<ConverterDto | null>(null);

  const handleCheckInformation = useCallback((data: ConverterDto | null) => setCheckInformation(data), []);

  const handleFormSubmit = (data: ConverterDto) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Styled.Container>
      <ConverterForm onFormSubmit={handleFormSubmit} handleCheckInformation={handleCheckInformation} />
      {checkInformation && <ConverterCheck data={checkInformation} />}
    </Styled.Container>
  );
};
