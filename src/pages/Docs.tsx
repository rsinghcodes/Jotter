import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Docs = () => {
  return (
    <Box mx="auto" maxW="8xl" px="5" py="6">
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Heading as="h4" size="md">
          My Docs
        </Heading>
        <Button
          leftIcon={<FiPlus />}
          size="sm"
          onClick={() => toast.success('Added new docs')}
        >
          Add Docs
        </Button>
      </Flex>
    </Box>
  );
};

export default Docs;
