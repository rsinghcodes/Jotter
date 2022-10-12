import React from 'react';
import { Badge, Box, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
  total: string;
  imageUrl: string;
};

const DocsCard = ({
  title,
  createdAt,
  updatedAt,
  tag,
  total,
  imageUrl,
}: Props) => {
  const getTagColor = () => {
    if (tag === 'primary') {
      return 'green';
    }
    if (tag === 'secondary') {
      return 'purple';
    }
    if (tag === 'Important') {
      return 'red';
    }
  };

  return (
    <LinkBox
      maxW={{ base: 'md', md: 'xs', lg: 'md' }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={2}
    >
      <Image src={imageUrl} alt="Test" />
      <Box p="6">
        <Badge
          borderRadius="full"
          px="2"
          variant={tag === 'Important' ? 'outline' : 'subtle'}
          colorScheme={getTagColor()}
        >
          {tag}
        </Badge>
        <Box
          mt="2"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          mb={1}
        >
          <LinkOverlay as={Link} to="/docs/37sh6628829">
            {title}
          </LinkOverlay>
        </Box>

        <Box>{total} docs</Box>
        <Box display="flex" alignItems="baseline" mt={1}>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            Updated: {updatedAt}
          </Box>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default DocsCard;
