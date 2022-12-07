import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './src/app';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('#app')
);
