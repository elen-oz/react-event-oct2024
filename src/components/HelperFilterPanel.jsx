import React, { useState } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import HelpFilter from './HelperFilter.jsx';

function HelperFilterPanel() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <Box
      sx={{
        width: '290px',
        // height: "947px",
        padding: '20px',
        backgroundColor: '#ffffff',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: '25px',
        }}
      >
        Фильтрация
      </Typography>

      <HelpFilter title="Кому мы помогаем" options={['Пенсионеры', 'Дом престарелых']} />

      <Box
        sx={{
          marginTop: '20px',
        }}
      >
        <HelpFilter title="Чем мы помогаем" options={['Вещи', 'Финансирование']} />

        <Box>
          <Box
            sx={{
              height: '48px',
              alignContent: 'center',
              border: '1px solid #D3D3D3',
              paddingLeft: '10px',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
              }}
            >
              Волонтерство
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: '#F5F5F5',
              padding: '20px',
            }}
          >
            <HelpFilter
              title="Специализация"
              options={['Квалифицированная', 'Не требует профессии']}
            />
            <HelpFilter title="Формат" options={['Онлайн', 'Не требует профессии']} />
            <HelpFilter title="Специализация" options={['Онлайн', 'Офлайн']} />
            <HelpFilter title="Необходимо волонтеров" options={['Группа', 'Один']} />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: '20px',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
            }}
          >
            Помощь актуальна до:
          </Typography>

          <Box
            sx={{
              // width: "100%",
              padding: '20px',
              backgroundColor: '#ffffff',
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Выберете дату"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Выберете дату" fullWidth />
                )}
              />
            </LocalizationProvider>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: '4px',
                border: '1px solid #000',
                mt: 2,
                color: '#000000',
              }}
              onClick={() => setSelectedDate(null)}
            >
              СБРОСИТЬ
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HelperFilterPanel;
