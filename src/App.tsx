import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from '@nextui-org/react';

// components
import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import AppBar from 'components/AppBar';

// pages
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const PasteBin = lazy(() => import('pages/PasteBin'));

function App() {
  return (
    <Layout>
      <AppBar />
      <Suspense
        fallback={
          <Box
            css={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
            }}
          >
            <Loading type="gradient" />
          </Box>
        }
      >
        <Box
          css={{
            px: '$16',
            mt: '$8',
            '@xsMax': { px: '$10' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
          }}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/accounts/login" element={<Login />} />
            <Route path="/accounts/register" element={<Register />} />
            <Route path="/pastebin" element={<PasteBin />} />
          </Routes>
        </Box>
      </Suspense>
    </Layout>
  );
}

export default App;
