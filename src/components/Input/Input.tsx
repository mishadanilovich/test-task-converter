import { forwardRef } from 'react';

import { InputProps } from './Input.interface';
import * as Styled from './Input.styled';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...inputProps }, ref) => {
  return (
    <Styled.InputWrapper>
      {label && <Styled.Label htmlFor={inputProps.id}>{label}</Styled.Label>}
      <Styled.Input ref={ref} $error={!!error} autoComplete="off" {...inputProps} />
      {error && <Styled.Error>{error}</Styled.Error>}
    </Styled.InputWrapper>
  );
});

Input.displayName = 'Input';
