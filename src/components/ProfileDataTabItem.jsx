import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';

const ProfileDataTabItem = ({ userData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
  };

  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>
          Профиль
        </Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="subtitle2" sx={{ fontSize: '14px' }}>
            <strong>Фамилия: </strong>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            &nbsp;
            {userData.lastName}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="subtitle2" sx={{ fontSize: '14px' }}>
            <strong>Имя:</strong>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            &nbsp;
            {userData.name}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="subtitle2" sx={{ fontSize: '14px' }}>
            <strong>Статус:</strong>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            &nbsp;
            {userData.status}
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>
          Дата рождения
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '14px' }}>
          {userData.birthdate ? formatDate(userData.birthdate) : ''}
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>
          Локация для помощи
        </Typography>
        {userData.baseLocations.map((location, index) => (
          <Box key={index} sx={{ mb: index !== userData.baseLocations.length - 1 ? 2 : 0 }}>
            <Stack direction="row" spacing={0.5}>
              <Typography variant="subtitle2" sx={{ fontSize: '14px', mb: 0.5 }}>
                <strong>Область: </strong>
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '14px', mb: 0.5 }}>
                {location.district}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <Typography variant="subtitle2" sx={{ fontSize: '14px', mb: 0.5 }}>
                <strong>Населённый пункт: </strong>
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '14px' }}>
                {location.city}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>
          Образование
        </Typography>
        {userData.educations.map((education, index) => (
          <Box key={index} sx={{ mb: index !== userData.educations.length - 1 ? 2 : 0 }}>
            <Stack direction="row" spacing={0.5}>
              <Typography variant="subtitle2" sx={{ fontSize: '14px', mb: 0.5 }}>
                <strong>Учреждение: </strong>
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '14px', mb: 0.5 }}>
                {education.organizationName}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <Typography variant="subtitle2" sx={{ fontSize: '14px', mb: 0.5 }}>
                <strong>Уровень образования: </strong>
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '14px', mb: 0.5 }}>
                {education.level}
              </Typography>
            </Stack>
            {education.specialization && (
              <Stack direction="row" spacing={0.5}>
                <Typography variant="subtitle2" sx={{ fontSize: '14px', mb: 0.5 }}>
                  <strong>Направление: </strong>
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '14px', mb: 0.5 }}>
                  {education.specialization}
                </Typography>
              </Stack>
            )}
            <Stack direction="row" spacing={0.5}>
              <Typography variant="subtitle2" sx={{ fontSize: '14px', mb: 0.5 }}>
                <strong>Год окончания: </strong>
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '14px', mb: 0.5 }}>
                {education.graduationYear}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>
          Обо мне
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '14px' }} className="aboutMe">
          {userData.additionalInfo}
        </Typography>
      </Box>
    </Container>
  );
};

export default ProfileDataTabItem;
