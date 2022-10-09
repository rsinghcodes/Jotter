import React, { useEffect } from 'react';
import { Text, Image, Button, Heading, Flex } from '@chakra-ui/react';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { gapi } from 'gapi-script';
import toast from 'react-hot-toast';

import { GOOGLE_AUTH_USER } from 'queries/google';

const Home = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const navigate = useNavigate();
  const [googleAuth, { data, loading, error }] = useMutation(GOOGLE_AUTH_USER);

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
    if (!!error) {
      navigate('/');
      toast.error('Login unsuccessfull!');
    }
    if (!!loading) {
      toast.loading('Loading...');
    }
    if (!!data) {
      navigate('/docs');
      toast.success('Login successfull!');
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
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image width={400} height={400} src="/images/home.jpg" alt="Home Image" />
      <Heading>Welcome to Notes Yard</Heading>
      <Text mt={3} mb={5} textAlign="center">
        Scribble Notes and Share Instatnously, Preview Them, Make Notebooks and
        Take Private Notes
      </Text>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            leftIcon={<FcGoogle size="1.2rem" />}
            borderRadius="24px"
            p="6"
          >
            Continue with Google
          </Button>
        )}
        buttonText="Continue with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </Flex>
  );
};

export default Home;
