import { ReactNode, useCallback } from 'react';

import { ConverterDto } from '@/types/dto';

import { CheckField } from './ConverterCheck.interface';
import * as Styled from './ConverterCheck.styled';

export const useConverterCheck = (data: ConverterDto, fields: CheckField<ConverterDto>[]) => {
  const renderCheckFields = useCallback(() => {
    return fields.map(({ label, ...field }) => (
      <Styled.CheckField key={label}>
        {label}
        {field.transformData(data) as ReactNode}
      </Styled.CheckField>
    ));
  }, [data, fields]);

  return { renderCheckFields };
};
