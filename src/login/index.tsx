import React from 'react';
import { Box, Container, TextField } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth={'sm'}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}>
        <div>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
          />
        </div>
        <div>
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
      </Box>
    </Container>
  );
};

export default Login;
