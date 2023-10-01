import { forwardRef } from 'react';

import { SelectProps } from './Select.interface';
import * as Styled from './Select.styled';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ label, options, ...selectProps }, ref) => {
  return (
    <Styled.SelectWrapper>
      {label && <Styled.Label htmlFor={selectProps.id}>{label}</Styled.Label>}
      <Styled.Select ref={ref} {...selectProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Styled.Select>
    </Styled.SelectWrapper>
  );
});

Select.displayName = 'Select';
