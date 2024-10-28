import React from 'react';

import { Box, Checkbox, Typography } from '@mui/material';

export default function HelpFilter({ title, options }) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '14px',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        {options.map((option, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              sx={{
                height: '35px',
                width: '35px',
              }}
            />
            <Typography sx={{ fontSize: '14px' }}>{option}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
