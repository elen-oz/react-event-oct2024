import React from 'react';
import { Box, Typography, Stack, Button, Card } from '@mui/material';
import ProfileImg from '../assets/CardMedia.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const ProfileCard = ({ userData }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      logout();
      navigate('/');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  return (
    <Card variant="outlined">
      <img src={ProfileImg} alt="profile image" loading="lazy" />
      <Stack
        direction="column"
        spacing={2}
        sx={{
          height: '196px',
          p: 2,
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6">
            {userData.name}&nbsp;{userData.lastName}
          </Typography>
          <Stack direction="row">
            <Typography variant="subtitle2">Статус:&nbsp;</Typography>
            <Typography> {userData.status}</Typography>
          </Stack>
        </Box>

        <Button onClick={handleLogout} variant="outlined" fullWidth color="inherit">
          Выйти из аккаунта
        </Button>
      </Stack>
    </Card>
  );
};

export default ProfileCard;
