import { z } from 'zod';

import { Currency } from '@/types/enums';

export const SUBMIT_BUTTON_LABEL = 'Check button';
export const SUBMIT_BUTTON_TEXT = 'Check information';

export const FORM_FIELDS = {
  name: 'name',
  surname: 'surname',
  bankCard: 'bankCard',
  currency: 'currency',
  mount: 'mount',
  subCurrency: 'subCurrency',
  subMount: 'subMount',
  totalMount: 'totalMount',
} as const;

export const defaultValues = {
  [FORM_FIELDS.name]: '',
  [FORM_FIELDS.surname]: '',
  [FORM_FIELDS.bankCard]: '',
  [FORM_FIELDS.currency]: Currency.BYN,
  [FORM_FIELDS.mount]: 0,
  [FORM_FIELDS.subCurrency]: Currency.EUR,
  [FORM_FIELDS.subMount]: 0,
  [FORM_FIELDS.totalMount]: 0,
};

export const MAX_CARD_NUMBER = 19;

export const validationSchema = z.object({
  [FORM_FIELDS.name]: z.string().nonempty('Name is required'),
  [FORM_FIELDS.surname]: z.string().nonempty('Surname is required'),
  [FORM_FIELDS.bankCard]: z
    .string()
    .nonempty('Bank card number is required')
    .regex(/^\d{4}-\d{4}-\d{4}-\d{4}$/, 'Invalid bank card number format: xxxx-xxxx-xxxx-xxxx'),
  [FORM_FIELDS.currency]: z.string(),
  [FORM_FIELDS.mount]: z.number().nonnegative().min(1),
  [FORM_FIELDS.subCurrency]: z.string(),
  [FORM_FIELDS.subMount]: z.number(),
  [FORM_FIELDS.totalMount]: z.number(),
});
