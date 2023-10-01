import { ButtonProps } from './Button.interface';
import * as Styled from './Button.styled';

export const Button = ({ children, label, ...buttonProps }: ButtonProps) => {
  return (
    <Styled.ButtonWrapper>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.Button {...buttonProps}>{children}</Styled.Button>
    </Styled.ButtonWrapper>
  );
};
