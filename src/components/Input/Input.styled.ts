import styled, { css } from 'styled-components';

const inputErrorStyles = css`
  border: 1px solid ${({ theme }) => theme.palette.red};
`;

export const InputWrapper = styled.div`
  ${({ theme }) => theme.commonClasses.htmlElementWrapper};
`;

export const Label = styled.label`
  ${({ theme }) => theme.commonClasses.htmlElementLabel};
`;

export const Input = styled.input<{ $error?: boolean }>`
  font-family: inherit;
  font-weight: inherit;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 12px;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.lightBlue};

  ${({ $error }) => $error && inputErrorStyles};

  &::placeholder {
    color: inherit;
    font-size: inherit;
    text-transform: uppercase;
    opacity: 0.7;
  }
`;

export const Error = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.palette.red};
`;
