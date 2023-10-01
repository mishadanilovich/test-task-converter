import { Controller, useFormContext } from 'react-hook-form';

import { Input } from '@/components';
import { formatInputToLetters, formatCardNumber } from '@/utils';

import { ConverterDto } from '@/types/dto';

import { FORM_FIELDS, MAX_CARD_NUMBER } from '../../constants';
import * as CommonStyled from '../common.styled';

import {
  SECTION_LABEL,
  USER_BANK_CARD_PLACEHOLDER,
  USER_NAME_PLACEHOLDER,
  USER_SURNAME_PLACEHOLDER,
} from './constants';

export const UserInfo = () => {
  const { control } = useFormContext<Pick<ConverterDto, 'name' | 'surname' | 'bankCard'>>();

  return (
    <CommonStyled.SectionWrapper>
      <Controller
        name={FORM_FIELDS.name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            {...field}
            onChange={(event) => field.onChange(formatInputToLetters(event))}
            error={error?.message}
            label={SECTION_LABEL}
            placeholder={USER_NAME_PLACEHOLDER}
          />
        )}
      />
      <Controller
        name={FORM_FIELDS.surname}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            {...field}
            onChange={(event) => field.onChange(formatInputToLetters(event))}
            error={error?.message}
            placeholder={USER_SURNAME_PLACEHOLDER}
          />
        )}
      />
      <Controller
        name={FORM_FIELDS.bankCard}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            {...field}
            maxLength={MAX_CARD_NUMBER}
            onChange={(event) => field.onChange(formatCardNumber(event.target.value))}
            error={error?.message}
            placeholder={USER_BANK_CARD_PLACEHOLDER}
          />
        )}
      />
    </CommonStyled.SectionWrapper>
  );
};
