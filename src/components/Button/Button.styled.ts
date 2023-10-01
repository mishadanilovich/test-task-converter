import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.lightBlue};
  text-transform: uppercase;
`;

export const Button = styled.button`
  font-family: inherit;
  font-weight: inherit;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.white};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: ${({ theme }) => theme.palette.lightBlue};
  border-radius: 12px;

  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.palette.blue};
  }
`;
