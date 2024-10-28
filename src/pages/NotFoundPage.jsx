import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F5F5F5',
        padding: 4,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#1976d2' }}>
        404
      </Typography>

      <Typography variant="h5" sx={{ mb: 2 }}>
        Страница не найдена
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', textAlign: 'center' }}>
        Запрашиваемая страница не существует
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" onClick={handleGoHome} sx={{ minWidth: '120px' }}>
          На главную
        </Button>

        <Button variant="outlined" onClick={handleGoBack} sx={{ minWidth: '120px' }}>
          Назад
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
