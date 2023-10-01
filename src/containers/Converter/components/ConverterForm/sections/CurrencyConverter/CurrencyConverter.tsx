import { Controller, useFormContext } from 'react-hook-form';
import { useEffect, useMemo } from 'react';

import { Input, Select } from '@/components';
import { formatInputToPositiveNumbers } from '@/utils';

import { ConverterDto } from '@/types/dto';

import * as CommonStyled from '../common.styled';
import { FORM_FIELDS } from '../../constants';

import { currencies } from './mocks';
import {
  additionalCurrencyOptions,
  currencyOptions,
  EUR_TO_USD_EXCHANGE_RATES,
  MAX_DECIMAL_NUMBERS,
  SECTION_LABEL,
  SUB_CURRENCY_LABEL,
  TOTAL_AMOUNT_LABEL,
} from './constants';
import * as Styled from './CurrencyConverter.styled';

export const CurrencyConverter = () => {
  const { control, setValue, watch } =
    useFormContext<Pick<ConverterDto, 'mount' | 'currency' | 'subMount' | 'subCurrency' | 'totalMount'>>();

  const userMount = watch(FORM_FIELDS.mount);
  const selectedCurrency = watch(FORM_FIELDS.currency);
  const exchangeEuroValue = useMemo(
    () => currencies.find(({ name }) => name === selectedCurrency)?.exchangeEuroValue,
    [selectedCurrency]
  );

  useEffect(() => {
    if (exchangeEuroValue) {
      setValue(FORM_FIELDS.subMount, +(userMount / exchangeEuroValue).toFixed(MAX_DECIMAL_NUMBERS));
      setValue(
        FORM_FIELDS.totalMount,
        +(userMount / exchangeEuroValue / EUR_TO_USD_EXCHANGE_RATES).toFixed(MAX_DECIMAL_NUMBERS)
      );
    }
  }, [exchangeEuroValue, setValue, userMount]);

  return (
    <Styled.Container>
      <CommonStyled.SectionWrapper>
        <Styled.RowInner>
          <CommonStyled.SectionWrapper>
            <Controller
              name={FORM_FIELDS.currency}
              control={control}
              render={({ field }) => <Select {...field} label={SECTION_LABEL} options={currencyOptions} />}
            />
            <Controller
              name={FORM_FIELDS.mount}
              control={control}
              render={({ field }) => (
                <Input {...field} onChange={(event) => field.onChange(formatInputToPositiveNumbers(event))} />
              )}
            />
          </CommonStyled.SectionWrapper>
          <CommonStyled.SectionWrapper>
            <Controller
              name={FORM_FIELDS.subCurrency}
              control={control}
              render={({ field }) => (
                <Select {...field} label={SUB_CURRENCY_LABEL} options={additionalCurrencyOptions} disabled />
              )}
            />
            <Controller
              name={FORM_FIELDS.subMount}
              control={control}
              /* todo Fix disabled prop. It's not enough to disabled input */
              render={({ field }) => <Input {...field} disabled />}
            />
          </CommonStyled.SectionWrapper>
        </Styled.RowInner>
        <Controller
          name={FORM_FIELDS.totalMount}
          control={control}
          /* todo Fix disabled prop. It's not enough to disabled input */
          render={({ field }) => <Input {...field} label={TOTAL_AMOUNT_LABEL} disabled />}
        />
      </CommonStyled.SectionWrapper>
    </Styled.Container>
  );
};
