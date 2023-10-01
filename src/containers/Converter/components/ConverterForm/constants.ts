import { z } from 'zod';

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
  [FORM_FIELDS.bankCard]: undefined,
  [FORM_FIELDS.currency]: '',
  [FORM_FIELDS.mount]: undefined,
  [FORM_FIELDS.subCurrency]: '',
  [FORM_FIELDS.subMount]: undefined,
  [FORM_FIELDS.totalMount]: undefined,
};

export const validationSchema = z.object({
  [FORM_FIELDS.name]: z.string().nonempty('Name is required'),
  [FORM_FIELDS.surname]: z.string().nonempty('Surname is required'),
  [FORM_FIELDS.bankCard]: z.number(),
  [FORM_FIELDS.currency]: z.string(),
  [FORM_FIELDS.mount]: z.number(),
  [FORM_FIELDS.subCurrency]: z.string(),
  [FORM_FIELDS.subMount]: z.number(),
  [FORM_FIELDS.totalMount]: z.number(),
});
