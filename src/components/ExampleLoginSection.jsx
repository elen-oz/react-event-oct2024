import React from 'react';

import InfoIcon from '@mui/icons-material/Info';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CopyToClipboard from './CopyToClipboard.jsx';

// eslint-disable-next-line react/prop-types
function ExampleLoginSection({ login, password }) {
  const theme = useTheme();
  return (
    <Paper
      variant="outlined"
      sx={{
        width: '330px',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${theme.palette.primary.main}`,
        overflow: 'hidden',
      }}
    >
      <Box display="flex" alignItems="flex-start" sx={{ mr: 2 }}>
        <InfoIcon color="primary" />
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Box
          sx={{
            width: '270px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Логин: {login}</Typography> <CopyToClipboard text={login} />
        </Box>
        <Box
          sx={{
            width: '270px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Пароль: {password}</Typography> <CopyToClipboard text={password} />
        </Box>
      </Box>
    </Paper>
  );
}

export default ExampleLoginSection;
