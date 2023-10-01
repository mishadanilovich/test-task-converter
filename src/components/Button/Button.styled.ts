import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  ${({ theme }) => theme.commonClasses.htmlElementWrapper};
`;

export const Label = styled.span`
  ${({ theme }) => theme.commonClasses.htmlElementLabel};
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
