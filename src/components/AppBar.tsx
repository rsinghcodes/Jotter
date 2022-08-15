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
        alignSelf="center"
        width="xlarge"
      >
        {children}
      </Box>
    </div>
  );
};

export default AppBar;
