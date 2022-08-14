import React from 'react';
import { Box, Button, Grommet, Heading, ResponsiveContext } from 'grommet';
import { User } from 'grommet-icons';

// components
import AppBar from './components/AppBar';

function App() {
  const theme = {
    global: {
      font: {
        family: 'Manrope',
      },
    },
  };

  return (
    <Grommet theme={theme} themeMode="dark" full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                Jotter
              </Heading>
              <Button
                primary
                label="Login"
                plain={false}
                icon={<User />}
                onClick={() => {}}
              />
            </AppBar>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
