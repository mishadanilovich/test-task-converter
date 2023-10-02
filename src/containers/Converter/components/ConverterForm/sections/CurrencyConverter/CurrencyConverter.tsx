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
  SERVICE_COMMISSION,
  SUB_CURRENCY_LABEL,
  TOTAL_AMOUNT_LABEL,
} from './constants';
import * as Styled from './CurrencyConverter.styled';

export const CurrencyConverter = () => {
  const { control, setValue, watch } =
    useFormContext<Pick<ConverterDto, 'amount' | 'currency' | 'subAmount' | 'subCurrency' | 'totalAmount'>>();

  const userAmount = watch(FORM_FIELDS.amount);
  const selectedCurrency = watch(FORM_FIELDS.currency);
  const exchangeEuroValue = useMemo(
    () => currencies.find(({ name }) => name === selectedCurrency)?.exchangeEuroValue,
    [selectedCurrency]
  );

  useEffect(() => {
    if (exchangeEuroValue) {
      const amountEUR = userAmount / exchangeEuroValue;
      const totalAmount = amountEUR / EUR_TO_USD_EXCHANGE_RATES;
      const serviceCommission = totalAmount * SERVICE_COMMISSION;

      setValue(FORM_FIELDS.subAmount, +amountEUR.toFixed(MAX_DECIMAL_NUMBERS));
      setValue(FORM_FIELDS.totalAmount, +(totalAmount - serviceCommission).toFixed(MAX_DECIMAL_NUMBERS));
    }
  }, [exchangeEuroValue, setValue, userAmount]);

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
              name={FORM_FIELDS.amount}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  error={error?.message}
                  onChange={(event) => field.onChange(formatInputToPositiveNumbers(event))}
                />
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
              name={FORM_FIELDS.subAmount}
              control={control}
              /* todo Fix disabled prop. It's not enough to disabled input */
              render={({ field }) => <Input {...field} disabled />}
            />
          </CommonStyled.SectionWrapper>
        </Styled.RowInner>
        <Controller
          name={FORM_FIELDS.totalAmount}
          control={control}
          /* todo Fix disabled prop. It's not enough to disabled input */
          render={({ field }) => <Input {...field} label={TOTAL_AMOUNT_LABEL} disabled />}
        />
      </CommonStyled.SectionWrapper>
    </Styled.Container>
  );
};
