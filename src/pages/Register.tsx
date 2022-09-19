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
import { REGISTER_USER } from 'queries/users';

const Register = () => {
  const navigate = useNavigate();
  const { reset, bindings } = useInput('');
  const [googleAuth, { data, error }] = useMutation(GOOGLE_AUTH_USER);
  const [registerUser, { data: registeredUser, error: registrationError }] =
    useMutation(REGISTER_USER);
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
    if (error || registrationError) {
      navigate('/accounts/login');
    }
    if (!!data || !!registeredUser) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, registeredUser, registrationError]);

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

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Fullname is too Short!')
      .max(50, 'Fullname is too Long!')
      .required('Fullname is required'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(30, 'Password is too Long!')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async () => {
      await registerUser({ variables: { registerInput: values } });
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
          <Text h3>Create your account</Text>
          <Spacer y={1} />
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
              <Input
                {...bindings}
                clearable
                onClearClick={reset}
                label="Name"
                placeholder="Eg. John Doe"
                css={{ width: '100%' }}
                {...getFieldProps('name')}
                helperColor="error"
                helperText={errors.name}
              />
              <Spacer y={1} />
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
              <Spacer y={1} />
              <Button css={{ width: '100%' }} type="submit">
                Sign Up
              </Button>
            </Form>
          </FormikProvider>
          <Spacer y={0.5} />
          <Link href="/accounts/login">Already signed up? Sign In here</Link>
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
                Continue with Google
              </button>
            )}
            buttonText="Continue with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default Register;
