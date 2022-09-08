import React from 'react';
import { Input, Text, Tooltip } from '@nextui-org/react';
import { FiSave, FiCopy } from 'react-icons/fi';
import { GrPowerReset } from 'react-icons/gr';

// components
import { Box } from 'components/Box';
import { IconButton } from 'components/IconButton';

const PasteBin = () => {
  return (
    <Box
      css={{
        width: '100%',
      }}
    >
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Text h3 css={{ letterSpacing: '0.2px' }}>
          Create a new paste
        </Text>
        <Tooltip content="Copy Text">
          <IconButton
            onClick={() => console.log('Edit')}
            css={{ ml: '$6', mb: '$4' }}
          >
            <FiCopy size={20} />
          </IconButton>
        </Tooltip>
        <Tooltip content="Reset Text" color="error">
          <IconButton
            onClick={() => console.log('Reset')}
            css={{ ml: '$5', mb: '$4' }}
          >
            <GrPowerReset size={20} />
          </IconButton>
        </Tooltip>
        <Tooltip content="Save and Get Share Link" color="success">
          <IconButton
            onClick={() => console.log('Reset')}
            css={{ ml: '$5', mb: '$4' }}
          >
            <FiSave size={20} />
          </IconButton>
        </Tooltip>
      </Box>
      <Input.Textarea
        bordered
        rows={20}
        css={{ width: '100%' }}
        placeholder="Enter a text here..."
      />
    </Box>
  );
};

export default PasteBin;
