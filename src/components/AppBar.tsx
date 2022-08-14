import React from 'react';
import { Box } from 'grommet';

type Props = {
  children?: any;
};

const AppBar = ({ children }: Props) => {
  return (
    <div>
      <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation="xsmall"
        style={{ zIndex: '1' }}
      >
        {children}
      </Box>
    </div>
  );
};

export default AppBar;
