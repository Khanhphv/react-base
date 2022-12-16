import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
const KForm = (props: any) => {
  const methods = useForm({
    resolver: yupResolver(props?.schema),
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(props?.onSubmit)}>
        {props?.children}
      </form>
    </FormProvider>
  );
};

export default KForm;
