import React from 'react';
import { Box, Button, Heading, Paragraph, Text } from 'grommet';

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
        <Heading level={2} size="4" margin="xxsmall" color="dark-2">
          Welcome to Notes Yard
        </Heading>
        <Paragraph
          size="medium"
          textAlign="center"
          margin="small"
          color="dark-3"
        >
          Scribble Notes and share instantly using share URL.
        </Paragraph>
        <Box direction="row" gap="medium" alignSelf="center" margin="xsmall">
          <Button alignSelf="center" plain href="/pastebin">
            <Box
              pad={{ vertical: 'small', horizontal: 'medium' }}
              round="xlarge"
              background="control"
            >
              <Text>Click here</Text>
            </Box>
          </Button>
          {/* <Button alignSelf="center" plain>
            <Box
              pad={{ vertical: 'small', horizontal: 'large' }}
              round="xlarge"
              background="accent-4"
            >
              <Text>MD Previewer</Text>
            </Box>
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
