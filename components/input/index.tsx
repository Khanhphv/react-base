import React from 'react';
import { TextField } from '@mui/material';
import { TextFieldProps } from "@mui/material/TextField/TextField";

const Input = (props: TextFieldProps) => {
  return <TextField {...props} />;
};

export default Input;
