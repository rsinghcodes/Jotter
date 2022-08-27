import React from 'react';
import { Button, Card, Input, Link, Spacer, Text } from '@nextui-org/react';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
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
          <Text h3>Create your account</Text>
          <Spacer y={1} />
          <Input clearable label="Name" placeholder="Eg. John Doe" />
          <Spacer y={1} />
          <Input clearable label="Email" placeholder="Enter email" />
          <Spacer y={1} />
          <Input.Password
            clearable
            label="Password"
            placeholder="Enter strong password"
          />
          <Spacer y={2} />
          <Button>Sign Up</Button>
          <Spacer y={0.5} />
          <Link href="/accounts/login">Already signed up? Sign In here</Link>
          <Spacer y={1} />
          <Button auto light icon={<FcGoogle size={20} />}>
            Continue with Google
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Register;
