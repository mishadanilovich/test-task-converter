import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-right: 35px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 5px;
    height: 100%;
    background: ${({ theme }) => theme.palette.lightBlue};
  }
`;

export const RowInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 15px;
`;
