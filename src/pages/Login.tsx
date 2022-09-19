import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import {
  Button,
  Card,
  Input,
  Link,
  Spacer,
  Text,
  useInput,
} from '@nextui-org/react';
import { FcGoogle } from 'react-icons/fc';
import { useMutation } from '@apollo/client';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';

import { GOOGLE_AUTH_USER } from 'queries/google';
import { LOGIN_USER } from 'queries/users';

const Login = () => {
  const navigate = useNavigate();
  const { reset, bindings } = useInput('');
  const [googleAuth, { data, error }] = useMutation(GOOGLE_AUTH_USER);
  const [loginUser, { data: loginUserData, error: errorLogin }] =
    useMutation(LOGIN_USER);
  const clientId = process.env.GOOGLE_CLIENT_ID;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  useEffect(() => {
    if (error || errorLogin) {
      navigate('/accounts/login');
    }
    if (!!data || !!loginUserData) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, loginUserData, errorLogin]);

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

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      await loginUser({
        variables: { email: values.email, password: values.password },
      });
    },
  });

  const { errors, values, handleSubmit, getFieldProps } = formik;

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

          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
              <Input
                {...bindings}
                clearable
                onClearClick={reset}
                label="Email"
                placeholder="Enter email"
                css={{ width: '100%' }}
                {...getFieldProps('email')}
                helperColor="error"
                helperText={errors.email}
              />
              <Spacer y={1} />
              <Input.Password
                {...bindings}
                clearable
                onClearClick={reset}
                label="Password"
                placeholder="Enter strong password"
                css={{ width: '100%' }}
                {...getFieldProps('password')}
                helperColor="error"
                helperText={errors.password}
              />
              <Spacer y={2} />
              <Button css={{ width: '100%' }} type="submit">
                Sign In
              </Button>
            </Form>
          </FormikProvider>
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
