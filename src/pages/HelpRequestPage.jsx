import React from 'react';
import { Typography, Box } from '@mui/material';
import HelpRequest from '../components/HelpRequest.jsx';
import GotMoney from '../components/GotMoney.jsx';

const HelpRequestPage = () => {
  return (
    <Box width="1200px" sx={{ backgroundColor: '#F5F5F5', padding: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Запрос о помощи
      </Typography>

      <Box display="flex" justifyContent="between" alignItems="start" sx={{ gap: 2 }}>
        <Box sx={{ width: '1080px' }}>
          <HelpRequest />
        </Box>
        <Box sx={{ width: '320px' }}>
          <GotMoney />
        </Box>
      </Box>
    </Box>
  );
};

export default HelpRequestPage;
