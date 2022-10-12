import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

// components
import AppBar from 'components/AppBar';

// pages
const Home = lazy(() => import('pages/Home'));
const DocsCollections = lazy(() => import('pages/DocsCollections'));
const Docs = lazy(() => import('pages/Docs'));

function App() {
  return (
    <>
      <Toaster />
      <AppBar />
      <Suspense
        fallback={
          <Flex justifyContent="center" alignItems="center" minH="90vh">
            <Spinner size="xl" />
          </Flex>
        }
      >
        <Box>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/docs" element={<DocsCollections />} />
            <Route path="/docs/37sh6628829" element={<Docs />} />
          </Routes>
        </Box>
      </Suspense>
    </>
  );
}

export default App;
