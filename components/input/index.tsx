import React from 'react';
import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const KInputText = (props: any) => {
  const { name, label, defaultValue = '', ...otherProps } = props;
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value }, formState }) => (
          <>
            <TextField
              label={label}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              {...otherProps}
              error={!!formState.errors[name]}
              helperText={
                !!formState.errors[name] &&
                (formState.errors[name]?.message as string)
              }
              {...otherProps}
            />
          </>
        )}
        defaultValue={defaultValue}
        name={name}
      />
    </>
  );
};

export default KInputText;
