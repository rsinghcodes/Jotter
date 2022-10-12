import React from 'react';
import { Flex, chakra, Center } from '@chakra-ui/react';
import { HiOutlineSearch } from 'react-icons/hi';

const SearchBox = () => {
  return (
    <Flex pos="relative" align="stretch">
      <chakra.input
        aria-autocomplete="list"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        maxLength={44}
        sx={{
          w: '100%',
          h: '44px',
          pl: '44px',
          pr: '14px',
          fontWeight: 'medium',
          outline: 0,
          bg: 'gray.100',
          '.chakra-ui-dark &': { bg: 'gray.700' },
        }}
        placeholder="Search the note"
        rounded="lg"
      />
      <Center pos="absolute" left={4} h="44px">
        <HiOutlineSearch />
      </Center>
    </Flex>
  );
};

export default SearchBox;
