import { Stack, Typography, Container, Button, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { palette } from '@mui/system';

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

function GotMoney() {
  return (
    <Card
      sx={{
        display: 'flex',
        width: '320px',
        height: '470px',
        flexDirection: 'column',
        gap: 2,
        mt: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1.5 }}>
          Вместе для добрых дел
        </Typography>

        <Stack width="280px">
          <Typography variant="subtitle2" sx={{ fontSize: '14px', mb: 1 }}>
            <strong>Цель сбора</strong>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на зимний сезон. Пополнить
            запасы лекарств на три месяца. Обеспечить уход на дому в течении полугода.
          </Typography>
        </Stack>

        <Stack>
          <Typography variant="subtitle2" sx={{ fontSize: '14px', mt: 2, mb: 1 }}>
            <strong>Завершение</strong>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            20.03.2025
          </Typography>
        </Stack>

        <Stack>
          <Typography variant="subtitle2" sx={{ fontSize: '14px', mt: 2, mb: 1 }}>
            <strong>Мы собрали</strong>
          </Typography>

          <Box
            sx={{
              width: 280,
              height: 4,
              background: (theme) => `linear-gradient(to right, 
                        ${theme.palette.primary.main} 50%, 
                        ${theme.palette.primary.main}80 50%)`,
            }}
          />

          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body2" sx={{ fontSize: '14px' }}>
              1 102 563 руб
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '14px' }}>
              2 056 489 руб
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="body2" sx={{ fontSize: '14px', mt: 5 }}>
          Нас уже: 3 566 987
        </Typography>

        <Link component={RouterLink} to="/requests" color="inherit" underline="none">
          <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: '0px', mt: 3 }}>
            ПОМОЧЬ
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
export default GotMoney;
