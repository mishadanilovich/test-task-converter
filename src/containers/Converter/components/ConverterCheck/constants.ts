import { formatBankCardToHidden, formatStringToHidden } from '@/utils';

import { ConverterDto } from '@/types/dto';

import { CheckField } from './ConverterCheck.interface';

export const CHECK_TITLE = 'Check information';
export const CHECK_TOTAL_AMOUNT = 'Total amount';

export const FIELD_COLON = ': ';

export const CONVERSION_FORMULA =
  'first value/second value (rate per unit)/third value (rate per unit) - 2% service commission = Total amount';

export const checkFields: CheckField<ConverterDto>[] = [
  { transformData: (data) => formatStringToHidden(data.name), label: `Name${FIELD_COLON}` },
  { transformData: (data) => formatStringToHidden(data.surname), label: `Surname${FIELD_COLON}` },
  { transformData: (data) => formatBankCardToHidden(data.bankCard), label: `Bank Card${FIELD_COLON}` },
  { transformData: (data) => `${data.amount} ${data.currency}`, label: `Your Currency${FIELD_COLON}` },
  { transformData: (data) => `${data.subAmount} ${data.subCurrency}`, label: `Additional Currency${FIELD_COLON}` },
];
