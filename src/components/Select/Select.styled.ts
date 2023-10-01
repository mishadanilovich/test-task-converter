import styled from 'styled-components';

export const SelectWrapper = styled.div`
  ${({ theme }) => theme.commonClasses.htmlElementWrapper};
`;

export const Label = styled.label`
  ${({ theme }) => theme.commonClasses.htmlElementLabel};
`;

export const Select = styled.select`
  font-family: inherit;
  font-weight: inherit;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 12px;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.lightBlue};
`;
