import React from 'react';

import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';

export default function Footer() {
  const links = [
    {
      url: 'https://t.me/natti_jun_front/239',
      text: 'Об ивенте',
    },
    {
      url: 'https://github.com/side-progects/react-event-oct2024',
      text: 'GitHub проекта',
    },
    {
      url: 'https://t.me/natti_jun_front_chat',
      text: 'Чат для джунов',
    },
  ];

  return (
    <Box display="flex" align-content="center" height="70px">
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            underline="hover"
            sx={{ color: '#000000' }}
          >
            {link.text}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
