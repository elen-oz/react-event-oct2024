import React from 'react';

import GridViewIcon from '@mui/icons-material/GridView';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography, IconButton } from '@mui/material';

export default function ResultsHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid lightgray',
        borderRadius: '4px',
        padding: '8px 16px',
        backgroundColor: '#ffffff',
        width: '100%',
      }}
    >
      {/* Found Items Count */}
      <Typography variant="body1">Найдено: 211</Typography>

      {/* View Options */}
      <Box>
        <IconButton aria-label="grid view">
          <GridViewIcon />
        </IconButton>
        <IconButton aria-label="map view">
          <LocationOnIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
