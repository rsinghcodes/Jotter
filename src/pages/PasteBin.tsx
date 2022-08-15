import React from 'react';
import { Box, Heading, TextArea } from 'grommet';
import { Cycle, Save } from 'grommet-icons';

const PasteBin = () => {
  return (
    <Box flex align="center" justify="center" direction="column">
      <Box fill="horizontal" flex direction="row" align="center">
        <Heading level={3} size="4" color="dark-3">
          Create a new paste
        </Heading>
        <Cycle style={{ marginLeft: '1rem' }} cursor="pointer" />
        <Save style={{ marginLeft: '1rem' }} cursor="pointer" />
      </Box>
      <TextArea
        placeholder="type here"
        style={{ borderRadius: '0px', minHeight: '70vh', width: '77vw' }}
      />
    </Box>
  );
};

export default PasteBin;
