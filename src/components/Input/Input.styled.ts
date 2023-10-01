import styled, { css } from 'styled-components';

const inputErrorStyles = css`
  border: 1px solid ${({ theme }) => theme.palette.red};
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.lightBlue};
`;

export const Input = styled.input<{ $error?: boolean }>`
  font-family: inherit;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 12px;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.lightBlue};

  ${({ $error }) => $error && inputErrorStyles};
`;

export const Error = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.palette.red};
`;
