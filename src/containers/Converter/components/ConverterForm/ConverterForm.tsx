import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components';

import { ConverterDto } from '../../Converter.interface';

import { defaultValues, validationSchema } from './constants';
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
        <Input />
      </Styled.FormWrapper>
    </FormProvider>
  );
};
