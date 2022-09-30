import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import App from './App';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
});

const authLink = setContext(() => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const theme = createTheme({
  type: 'light',
  theme: {
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Manrope', 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
    },
  },
});

export default (
  <ApolloProvider client={client}>
    <NextUIProvider theme={theme}>
      <App />
    </NextUIProvider>
  </ApolloProvider>
);
