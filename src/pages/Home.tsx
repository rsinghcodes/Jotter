import React from 'react';
import { Box } from 'grommet';

const Home = () => {
  return (
    <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
      <Box flex align="center" justify="center">
        <img
          src="/images/home.jpg"
          alt="Home page Thumbnail"
          width={400}
          height={400}
        />
      </Box>
    </Box>
  );
};

export default Home;
