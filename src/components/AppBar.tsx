import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  chakra,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';

function AppBar() {
  const bg = useColorModeValue('white', 'gray.800');
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);
  const text = useColorModeValue('dark', 'light');

  return (
    <>
      <chakra.header
        shadow="sm"
        transition="box-shadow 0.2s, background-color 0.2s"
        pos="sticky"
        top="0"
        zIndex="3"
        bg={bg}
        left="0"
        right="0"
        width="full"
      >
        <chakra.div height="4.5rem" mx="auto" maxW="8xl">
          <Flex w="100%" h="100%" px="5" align="center" justify="space-between">
            <Flex alignItems="center" as={NavLink} to="/">
              <Heading fontSize={{ base: '1.3rem', lg: '1.7rem' }}>
                Jotter
              </Heading>
            </Flex>
            <Spacer />
            <Flex justify="flex-end" align="center">
              <Tooltip hasArrow label={`Switch to ${text} mode`} fontSize="sm">
                <IconButton
                  size="md"
                  fontSize="lg"
                  aria-label={`Switch to ${text} mode`}
                  variant="ghost"
                  color="current"
                  onClick={toggleColorMode}
                  icon={<SwitchIcon />}
                />
              </Tooltip>
              <Menu>
                <MenuButton
                  as={IconButton}
                  size="md"
                  fontSize="lg"
                  variant="ghost"
                  icon={<BsPerson />}
                />
                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem>My Account</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem>Logout</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>
    </>
  );
}

export default AppBar;
