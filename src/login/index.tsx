import React from 'react';
import { Box, Button, Container } from '@mui/material';
import * as yup from 'yup';
import KForm from '../../components/form';
import KInputText from '../../components/input';
const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
const Login = () => {
  return (
    <Container maxWidth={'sm'}>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}>
        <KForm
          schema={schema}
          onSubmit={data => {
            console.log('dxxa', data);
          }}>
          <div>
            <KInputText name="username" label="Username" />
          </div>
          <div>
            <KInputText name="password" label="Password" />
          </div>
          <Button variant="contained" type={'submit'}>
            Submit
          </Button>
        </KForm>
      </Box>
    </Container>
  );
};

export default Login;
