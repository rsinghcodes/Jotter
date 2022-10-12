import React from 'react';
import { Box, Button, Divider, Flex, Heading } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import toast from 'react-hot-toast';
// components
import DocsCard from 'components/DocsCard';
import SearchBox from 'components/SearchBox';

const docs = [
  {
    title: 'College Notebooks',
    id: 1,
    createdAt: '1 month ago',
    updatedAt: '2 hours ago',
    tag: 'primary',
    total: '200',
    imageUrl: '/images/notebook.jpg',
  },
  {
    title: 'Company Notebooks',
    id: 2,
    createdAt: '28 days ago',
    updatedAt: '1 hours ago',
    tag: 'Important',
    total: '7',
    imageUrl: '/images/notebook.jpg',
  },
  {
    title: 'Tution Notebooks',
    id: 3,
    createdAt: '20 hours ago',
    updatedAt: '1 mins ago',
    tag: 'secondary',
    total: '20',
    imageUrl: '/images/notebook.jpg',
  },
  {
    title: 'Company Notebooks',
    id: 4,
    createdAt: '28 days ago',
    updatedAt: '1 hours ago',
    tag: 'Important',
    total: '7',
    imageUrl: '/images/notebook.jpg',
  },
  {
    title: 'Tution Notebooks',
    id: 5,
    createdAt: '20 hours ago',
    updatedAt: '1 mins ago',
    tag: 'secondary',
    total: '20',
    imageUrl: '/images/notebook.jpg',
  },
];

const DocsCollections = () => {
  return (
    <Box mx="auto" maxW="8xl" px="5" py="6">
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Heading as="h4" size="md">
          My Docs
        </Heading>
        <Box display="flex" alignItems="center">
          <SearchBox />
          <Button
            ml={3}
            leftIcon={<FiPlus />}
            onClick={() => toast.success('Added new docs')}
          >
            Create docs collection
          </Button>
        </Box>
      </Flex>
      <Divider my={4} />
      <Flex flexWrap="wrap" w="full">
        {docs.map((doc: any) => (
          <DocsCard
            key={doc.id}
            title={doc.title}
            createdAt={doc.createdAt}
            updatedAt={doc.updatedAt}
            total={doc.total}
            tag={doc.tag}
            imageUrl={doc.imageUrl}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default DocsCollections;
