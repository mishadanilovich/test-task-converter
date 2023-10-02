import { Currency } from '@/types/enums';

import { useConverterCheck } from './hooks';
import { CHECK_TITLE, CHECK_TOTAL_AMOUNT, checkFields, CONVERSION_FORMULA } from './constants';
import { ConverterCheckProps } from './ConverterCheck.interface';
import * as Styled from './ConverterCheck.styled';

export const ConverterCheck = ({ data }: ConverterCheckProps) => {
  const { renderCheckFields } = useConverterCheck(data, checkFields);

  return (
    <Styled.Container>
      <Styled.CheckTitle>{CHECK_TITLE}</Styled.CheckTitle>
      <Styled.Content>
        <Styled.CheckInformation>{renderCheckFields()}</Styled.CheckInformation>
        <Styled.CheckTotalAmount>
          {CHECK_TOTAL_AMOUNT}
          <Styled.TotalAmount>
            {data.totalAmount}
            <br />
            {Currency.USD}
          </Styled.TotalAmount>
        </Styled.CheckTotalAmount>
      </Styled.Content>
      <Styled.Commission>{CONVERSION_FORMULA}</Styled.Commission>
    </Styled.Container>
  );
};
