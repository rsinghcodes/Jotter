import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import { Button, Card, Input, Link, Spacer, Text } from '@nextui-org/react';
import { FcGoogle } from 'react-icons/fc';
import { useMutation } from '@apollo/client';

import { GOOGLE_AUTH_USER } from 'queries/google';

const Login = () => {
  const navigate = useNavigate();
  const [googleAuth, { data, error }] = useMutation(GOOGLE_AUTH_USER);
  const clientId = process.env.GOOGLE_CLIENT_ID;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  useEffect(() => {
    if (error) {
      navigate('/accounts/login');
    }
    if (!!data) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const onSuccess = async (res: any) => {
    try {
      await googleAuth({ variables: { idToken: res.tokenId } });
    } catch (error) {
      navigate('/accounts/login');
    }
  };

  const onFailure = (err: any) => {
    console.log('failed:', err);
  };

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
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  height: '2.5rem',
                  lineHeight: '2.5rem',
                  minWidth: 'min-content',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '500',
                }}
              >
                <FcGoogle
                  size={20}
                  style={{
                    marginRight: '0.5rem',
                  }}
                />
                Sign In with Google
              </button>
            )}
            buttonText="Sign In with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
