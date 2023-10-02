import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

import { Button } from '@/components';

import { ConverterDto } from '@/types/dto';

import { CurrencyConverter, UserInfo } from './sections';
import {
  CONFIRM_CONVERT_BUTTON_TEXT,
  defaultValues,
  FORM_FIELDS,
  RESET_BUTTON_TEXT,
  SUBMIT_BUTTON_LABEL,
  SUBMIT_BUTTON_TEXT,
  validationSchema,
} from './constants';
import { ConverterFormProps } from './ConverterForm.interface';
import * as Styled from './ConverterForm.styled';

export const ConverterForm = ({ onFormSubmit, handleCheckInformation }: ConverterFormProps) => {
  const formMethods = useForm<ConverterDto, unknown, ConverterDto>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const userAmount = formMethods.watch(FORM_FIELDS.amount);
  const userCurrency = formMethods.watch(FORM_FIELDS.currency);
  useEffect(() => {
    handleCheckInformation(null);
  }, [userCurrency, userAmount, handleCheckInformation]);

  return (
    <FormProvider {...formMethods}>
      <Styled.FormWrapper onSubmit={formMethods.handleSubmit(onFormSubmit)}>
        <UserInfo />
        <CurrencyConverter />
        <Button
          label={SUBMIT_BUTTON_LABEL}
          onClick={() => handleCheckInformation(formMethods.getValues())}
          disabled={!formMethods.formState.isValid}
        >
          {SUBMIT_BUTTON_TEXT}
        </Button>
        <Styled.Actions>
          <Button type="submit" disabled={!formMethods.formState.isValid}>
            {CONFIRM_CONVERT_BUTTON_TEXT}
          </Button>
          <Button onClick={() => formMethods.reset()} disabled={!formMethods.formState.isDirty}>
            {RESET_BUTTON_TEXT}
          </Button>
        </Styled.Actions>
      </Styled.FormWrapper>
    </FormProvider>
  );
};
