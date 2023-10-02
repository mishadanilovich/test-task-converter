import styled from 'styled-components';

export const MainWrapper = styled.main`
  min-height: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background: ${({ theme }) => theme.palette.blueGradient};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
`;
