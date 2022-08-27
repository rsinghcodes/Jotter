import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Button, Text, Loading, Link } from '@nextui-org/react';
import { NextUIProvider, createTheme } from '@nextui-org/react';

// components
import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { AppLogo } from './Icons/AppLogo';
import Register from 'pages/Register';

// pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const PasteBin = lazy(() => import('./pages/PasteBin'));

function App() {
  const theme = createTheme({
    type: 'light',
    theme: {
      fonts: {
        sans: "-apple-system, BlinkMacSystemFont, 'Manrope', 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      },
    },
  });

  return (
    <NextUIProvider theme={theme}>
      <Layout>
        <Navbar isBordered variant="floating">
          <Navbar.Brand>
            <AppLogo />
            <Text b color="inherit" hideIn="xs">
              JOTTER
            </Text>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Link color="inherit" href="/accounts/login">
              Sign In
            </Navbar.Link>
            <Navbar.Item>
              <Button auto as={Link} href="/accounts/register">
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
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
    </NextUIProvider>
  );
}

export default App;
