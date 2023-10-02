import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  background: ${({ theme }) => theme.palette.gray};
  border-radius: 12px;
  padding: 14px;
  color: ${({ theme }) => theme.palette.black};
`;

export const CheckTitle = styled.h2`
  font-size: 16px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckInformation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const CheckField = styled.p`
  font-size: 14px;
`;

export const CheckTotalAmount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalAmount = styled.span`
  text-align: center;
  font-size: 30px;
`;

export const Commission = styled.span`
  font-size: 12px;
`;
