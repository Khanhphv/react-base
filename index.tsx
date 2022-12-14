import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/app';

// eslint-disable-next-line no-undef
const root = createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   // eslint-disable-next-line no-undef
//   document.getElementById('#app')
// );
