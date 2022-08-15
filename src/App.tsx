import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Anchor,
  Box,
  Button,
  Grommet,
  ResponsiveContext,
  Spinner,
  Text,
} from 'grommet';

// components
import AppBar from './components/AppBar';
// pages
const Home = lazy(() => import('./pages/Home'));
const PasteBin = lazy(() => import('./pages/PasteBin'));

function App() {
  const theme = {
    global: {
      font: {
        family: 'Manrope',
      },
    },
  };

  return (
    <Grommet theme={theme} themeMode="dark" full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <>
            <Box fill align="center" pad="large">
              <AppBar>
                <Anchor
                  href="/"
                  label={size !== 'small' && <Text size="xlarge">Jotter</Text>}
                />
                <Button plain>
                  {({ hover }) => (
                    <Box
                      pad={{ vertical: 'small', horizontal: 'medium' }}
                      round="xlarge"
                      background={hover ? 'active' : 'control'}
                    >
                      <Text>Login</Text>
                    </Box>
                  )}
                </Button>
              </AppBar>
              <Suspense
                fallback={
                  <Box flex align="center" justify="center">
                    <Spinner size="medium" />
                  </Box>
                }
              >
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/pastebin" element={<PasteBin />} />
                </Routes>
              </Suspense>
            </Box>
          </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
