import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ApolloProvider from './ApolloProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>{ApolloProvider}</BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
