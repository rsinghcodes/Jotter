import React from 'react';
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { TbNotebook } from 'react-icons/tb';
import toast from 'react-hot-toast';

import SearchBox from 'components/SearchBox';
import { Link } from 'react-router-dom';

const Docs = () => {
  return (
    <Box mx="auto" maxW="8xl" px="5" py="6">
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Heading as="h4" size="md">
          College Notebooks
        </Heading>
        <Box display="flex" alignItems="center">
          <SearchBox />
          <Button
            ml={3}
            leftIcon={<FiPlus />}
            onClick={() => toast.success('Added new docs')}
          >
            Add doc
          </Button>
        </Box>
      </Flex>
      <Divider my={4} />
      <VStack spacing={4} align="stretch">
        <LinkBox as="article" w="full" p="5" borderWidth="1px" rounded="md">
          <Flex alignItems="center">
            <TbNotebook size={40} />
            <Box w="full" ml={3}>
              <Badge borderRadius="full" px="2" colorScheme="green">
                New Read
              </Badge>
              <Heading size="md" my="2" noOfLines={1}>
                <LinkOverlay
                  as={Link}
                  to="/docs/37sh6628829/doc/83end83be838he83"
                >
                  New Year, New Beginnings: Smashing Workshops & Audits
                </LinkOverlay>
              </Heading>
              <Text color="gray.500" noOfLines={1}>
                Last updated by you today at 8:12 PM
              </Text>
            </Box>
          </Flex>
        </LinkBox>
        <LinkBox as="article" w="full" p="5" borderWidth="1px" rounded="md">
          <Flex alignItems="center">
            <TbNotebook size={40} />
            <Box w="full" ml={3}>
              <Badge borderRadius="full" px="2" colorScheme="yellow">
                Continue Reading
              </Badge>
              <Heading size="md" my="2" noOfLines={1}>
                <LinkOverlay
                  as={Link}
                  to="/docs/37sh6628829/doc/83end83be838he83"
                >
                  New Year, New Beginnings: Smashing Workshops & Audits
                </LinkOverlay>
              </Heading>
              <Text color="gray.500" noOfLines={1}>
                Last updated by you today at 8:12 PM
              </Text>
            </Box>
          </Flex>
        </LinkBox>
        <LinkBox as="article" w="full" p="5" borderWidth="1px" rounded="md">
          <Flex alignItems="center">
            <TbNotebook size={40} />
            <Box w="full" ml={3}>
              <Badge borderRadius="full" px="2" colorScheme="blue">
                Marked as Read
              </Badge>
              <Heading size="md" my="2" noOfLines={1}>
                <LinkOverlay
                  as={Link}
                  to="/docs/37sh6628829/doc/83end83be838he83"
                >
                  New Year, New Beginnings: Smashing Workshops & Audits
                </LinkOverlay>
              </Heading>
              <Text color="gray.500" noOfLines={1}>
                Last updated by you today at 8:12 PM
              </Text>
            </Box>
          </Flex>
        </LinkBox>
      </VStack>
    </Box>
  );
};

export default Docs;
