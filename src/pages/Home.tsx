import React from 'react';
import { Text, Spacer, Image, Button, Tooltip, Link } from '@nextui-org/react';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Image width={400} height={400} src="/images/home.jpg" alt="Home Image" />
      <Text h3 css={{ letterSpacing: '0.3px', textAlign: 'center' }}>
        Welcome to Notes Yard
      </Text>
      <Text
        css={{
          letterSpacing: '0.3px',
          textAlign: 'center',
          width: '400px',
          '@xsMax': { width: '100%' },
        }}
      >
        Scribble Notes and Share Instatnously, Preview Them, Make Notebooks and
        Take Private Notes
      </Text>
      <Tooltip content="Click here to create sharable notes" placement="right">
        <Button css={{ mt: '$lg' }} as={Link} href="/pastebin">
          Pastebin
        </Button>
      </Tooltip>
      <Spacer y={1} />
    </>
  );
};

export default Home;
