import React from 'react';

import { Search } from '@mui/icons-material';
import { TextField, Typography, IconButton, InputAdornment, Box } from '@mui/material';

function SearchResultsHeader({ searchTerm, onSearchChange }) {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Typography
        sx={{
          marginBottom: '25px',
        }}
      >
        Найти запрос
      </Typography>
      <TextField
        placeholder="Введите название задачи или организации"
        variant="standard"
        fullWidth
        value={searchTerm}
        onChange={onSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
          disableUnderline: false,
          sx: {
            '& .MuiInputBase-input::placeholder': {
              fontSize: '14px',
            },
          },
        }}
        sx={{
          maxWidth: '400px',
        }}
      />
    </Box>
  );
}

export default SearchResultsHeader;
