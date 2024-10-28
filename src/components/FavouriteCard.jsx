import React, { useState } from 'react';

import { Star, StarBorder } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, LinearProgress, Paper, Typography } from '@mui/material';
import { toast } from 'react-toastify';

import { addToFavorites, removeFromFavorites } from '../api/request.js';
import image1 from '../assets/requestCard1.png';
import image2 from '../assets/requestCard2.png';
import image3 from '../assets/requestCard3.png';

const images = [image1, image2, image3];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function FavouriteCard({ request }) {
  const {
    id,
    title,
    organization = {},
    location,
    requestGoal,
    requestGoalCurrentValue,
    endingDate,
    contributorsCount,
    goalDescription,
  } = request;

  const progress =
    requestGoal && requestGoalCurrentValue ? (requestGoal / requestGoalCurrentValue) * 100 : 0;

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = async () => {
    try {
      if (!isFavorited) {
        await addToFavorites(id);
        console.log('added ', id);
        toast.success('Added to favorites!');
      } else {
        await removeFromFavorites(id);
        console.log('deleted', id);
        toast.info('Removed from favorites.');
      }
      setIsFavorited(!isFavorited);
    } catch (error) {
      toast.error('Error updating favorite.');
    }
  };

  const imageUrl = getRandomImage();
  const formattedDate = new Date(endingDate).toLocaleDateString('en-GB');

  return (
    <Paper
      elevation={3}
      sx={{
        width: '270px',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Donation Image"
        sx={{
          borderRadius: '4px',
          width: '100%',
          maxWidth: '200px',
          height: 'auto',
          margin: '0 auto',
        }}
      />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '700',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 3,
            lineClamp: 3,
            height: '70px',
          }}
        >
          {title ? title.replace(/^\[\d+\]\s*/, '') : ''}
        </Typography>
        {/* <IconButton aria-label="favorite" onClick={handleFavoriteClick}> */}
        {/*  {isFavorited ? <Star sx={{ color: 'gold' }} /> : <StarBorder />} */}
        {/* </IconButton> */}
      </Box>

      <Divider />

      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Организатор
        </Typography>
        <Typography variant="body2">{organization.title}</Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Локация
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
          }}
        >
          Область: {location.district}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
          }}
        >
          Населенный пункт: {location.city}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Цель сбора
        </Typography>
        <Typography variant="body2">{goalDescription}</Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Завершение
        </Typography>
        <Typography variant="body2">{formattedDate}</Typography>
      </Box>

      <Box mt={2}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
          }}
        >
          Мы собрали
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            mt: '8px',
            mb: '8px',
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: '8px',
              borderRadius: '4px',
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#90caf9',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: '14px',
              position: 'absolute',
              left: 0,
              top: '5px',
              transform: 'translateY(50%)',
            }}
          >
            {requestGoal.toString()} руб
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              position: 'absolute',
              right: 0,
              top: '5px',
              transform: 'translateY(50%)',
            }}
          >
            {requestGoalCurrentValue.toString()} руб
          </Typography>
        </Box>
      </Box>

      <Typography variant="caption" color="textSecondary" mt={1}>
        {contributorsCount !== 0 ? `Нас уже: ${contributorsCount.toString()}` : 'Вы будете первым'}
      </Typography>

      <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: '4px', mt: 2 }}>
        ПОМОЧЬ
      </Button>
    </Paper>
  );
}

export default FavouriteCard;
