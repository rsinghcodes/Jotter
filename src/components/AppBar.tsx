import React from 'react';
import {
  Navbar,
  Button,
  Text,
  Link,
  Dropdown,
  Avatar,
} from '@nextui-org/react';

const AppBar = () => {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit">
          Jotter
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="/accounts/login">
          Sign In
        </Navbar.Link>
        <Navbar.Item>
          <Button auto as={Link} href="/accounts/register">
            Sign Up
          </Button>
        </Navbar.Item>

        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="primary"
                size="lg"
                text="R"
                textColor="white"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: '$18' }}>
              <Text b color="inherit" css={{ d: 'flex' }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: 'flex' }}>
                email@gmail.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              Account Settings
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
};

export default AppBar;
