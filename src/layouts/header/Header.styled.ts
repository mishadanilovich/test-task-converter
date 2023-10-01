import styled from 'styled-components';

export const Header = styled.header`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.blue};
  padding: 20px 30px;
`;
