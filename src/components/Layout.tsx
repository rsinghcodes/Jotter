import React from 'react';
import { Box } from 'components/Box';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Box
    css={{
      maxW: '100%',
      position: 'relative',
      margin: 0,
      padding: 0,
    }}
  >
    {children}
  </Box>
);
