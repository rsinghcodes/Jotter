import React from 'react';
import { Button, Card, Input, Link, Spacer, Text } from '@nextui-org/react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <>
      <Card
        variant="bordered"
        css={{
          width: '450px',
          '@xsMax': { width: '100%' },
          px: '$sm',
        }}
      >
        <Card.Body>
          <Text h3>Sign In to your account</Text>
          <Spacer y={1} />
          <Input clearable label="Email" placeholder="Enter email" />
          <Spacer y={1} />
          <Input.Password
            clearable
            label="Password"
            placeholder="Enter password"
          />
          <Spacer y={2} />
          <Button>Sign In</Button>
          <Spacer y={0.5} />
          <Link href="/accounts/register">Not signed up yet? Sign Up here</Link>
          <Spacer y={1} />
          <Button auto light icon={<FcGoogle size={20} />}>
            Sign In with Google
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
