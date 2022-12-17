import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import * as yup from 'yup';
import { css } from '@emotion/react';
import KForm from '../../components/form';
import KInputText from '../../components/input';
import useLogin from './useLogin';
const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
const Login = () => {
  const { loading, login } = useLogin();
  return (
    <Container>
      <Box
        sx={{
          '& .MuiTextField-root': { mt: 2, mb: 2 },
        }}>
        <Typography variant="h3"> Login</Typography>
        <KForm
          schema={schema}
          onSubmit={async data => {
            await login(data);
          }}>
          <div>
            <KInputText name="username" label="Username" />
          </div>
          <div>
            <KInputText name="password" label="Password" />
          </div>
          <Button
            disabled={loading}
            variant="contained"
            type={'submit'}
            css={css`
              min-width: 100%;
            `}>
            Submit
          </Button>
        </KForm>
      </Box>
    </Container>
  );
};

export default Login;
