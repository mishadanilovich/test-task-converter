import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components';

import { ConverterDto } from '@/types/dto';

import { CurrencyConverter, UserInfo } from './sections';
import { defaultValues, SUBMIT_BUTTON_LABEL, SUBMIT_BUTTON_TEXT, validationSchema } from './constants';
import { ConverterFormProps } from './ConverterForm.interface';
import * as Styled from './ConverterForm.styled';

export const ConverterForm = ({ onFormSubmit }: ConverterFormProps) => {
  const formMethods = useForm<ConverterDto, unknown, ConverterDto>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  return (
    <FormProvider {...formMethods}>
      <Styled.FormWrapper onSubmit={formMethods.handleSubmit(onFormSubmit)}>
        <UserInfo />
        <CurrencyConverter />
        <Button label={SUBMIT_BUTTON_LABEL} disabled={!formMethods.formState.isValid}>
          {SUBMIT_BUTTON_TEXT}
        </Button>
      </Styled.FormWrapper>
    </FormProvider>
  );
};
