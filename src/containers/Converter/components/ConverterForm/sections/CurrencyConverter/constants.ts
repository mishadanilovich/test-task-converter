import { SelectOption } from '@/components';

import { Currency } from '@/types/enums';

export const SECTION_LABEL = 'You change';
export const SUB_CURRENCY_LABEL = 'Additional currency';
export const TOTAL_AMOUNT_LABEL = 'Total amount in $';

export const currencyOptions: SelectOption[] = [
  { name: Currency.BYN, value: Currency.BYN },
  { name: Currency.GBP, value: Currency.GBP },
  { name: Currency.JPY, value: Currency.JPY },
  { name: Currency.CAD, value: Currency.CAD },
  { name: Currency.AUD, value: Currency.AUD },
];
export const additionalCurrencyOptions: SelectOption[] = [{ name: Currency.EUR, value: Currency.EUR }];

export const MAX_DECIMAL_NUMBERS = 2;

export const EUR_TO_USD_EXCHANGE_RATES = 8.23;
export const SERVICE_COMMISSION = 0.02;
